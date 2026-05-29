# Architecture Guide

## Purpose

This document is the canonical architecture guide for AI agents working in this repository. CLAUDE.md is the day-to-day codebase guide; this document is its planning-mode counterpart.

Use it to decide:

1. where a new file belongs,
2. how modules should be structured,
3. how the main runtime flows are organized,
4. what contracts and boundaries should not be changed by mistake.

For verification paths (which build / scan / browser check fits a given change), see:

- [`docs/doc_verification_guide.md`](./doc_verification_guide.md)

## Stack

- **Vite + React 18 + TypeScript (strict)** single-page app, one route (`/`).
- **MUI v9** for components and theming. Dark theme with gold primary (`#d4af37`) on near-black background.
- **No backend.** Static SPA. Recommender runs entirely client-side.
- **No test runner.** The only automated quality gates are `tsc -b` (via `npm run build`) and `npx react-doctor@latest` (via `npm run doctor`).
- **Node.js 20+** required for `react-doctor`.

## Project layout

```
src/
├── data/             ← static game data: classes, weapons, spells, talismans, armor, damage-types
├── lib/              ← pure logic: recommender, PDF report builder, analytics, shared types
├── pages/
│   ├── BuildPicker.tsx                    ← page shell
│   ├── components/<Name>/index.tsx        ← per-component files
│   └── hooks/use-build-picker-state.ts    ← reducer-style state container
├── common/
│   ├── components/<Name>/index.tsx        ← reusable primitives (GearTile, GearPicker, ...)
│   └── types/index.tsx                    ← Hand, SlotPos, STAT_COLORS
├── App.tsx           ← MUI theme provider + the ads banner
└── main.tsx          ← Vite entry
```

Operational docs live under `docs/` (this guide + planning-mode + verification + the `docs/elden-ring/*.md` reference notes).

The build output lives in `dist/` (gitignored).

## Layer responsibilities

### `src/data/`

Two kinds of files:

- **Hand-curated** (`classes.ts`, `weapons.ts`, `spells.ts`, `talismans.ts`): edit by hand to add or refine in-game data. Use the existing helpers (e.g. `w(id, name, category, weight, requirements, scaling, skill, sote?, baseAP?)` in `weapons.ts`).
- **Machine-generated** (`armor.ts`, `weapons-extras.ts`, `damage-types.ts`): do **not** hand-edit. They come from a wiki scrape or the game's regulation data. If a value looks wrong, fix the parser and regenerate — do not patch one entry.

Module-load merging: `weapons.ts` imports `WEAPON_EXTRAS` from `weapons-extras.ts` and merges per-affinity scaling and image URLs at module load.

### `src/lib/`

**Pure functions only — no React.** The recommender (`recommender.ts`), PDF report (`pdf-report.ts`), and analytics wrapper (`analytics.ts`) must remain importable from non-React contexts.

The recommender's entry point is `recommend(weapon, opts)` returning a `Recommendation` (target stats, rationale, class ranking, leveling plan, equip-load summary, spell suggestions). It is **loadout-driven**: `opts.loadout: LoadoutItem[]` is the source of truth; the active weapon is only used for the AP breakdown panel.

`getTargetStats` is the algorithm's heart. The step order is intentional — see CLAUDE.md for the full sequence. Key invariant: the recommendation must always fit the user's target Soul Level. The budget-fit step at the end is the last line of defense.

### `src/pages/`

`BuildPicker.tsx` is a thin shell that composes the per-component files in `src/pages/components/` and the `useBuildPickerState` hook in `src/pages/hooks/`. Each component lives in its own directory (`src/pages/components/ClassRanking/index.tsx`, etc.). Do not introduce multi-component files in `src/pages/`.

State management is a single `useState` inside `useBuildPickerState` exposing `{state, actions}`. There is no Redux, Zustand, or Context. Form state lives there; derived state lives in `useMemo`s inside `BuildPicker.tsx`.

### `src/common/components/`

Shared MUI-based primitives:

- `GearTile` — the clickable Paper tile reused by every gear slot. Long names truncate via `flex: 1 1 0` + `minWidth: 0` + `overflow: hidden`.
- `GearPicker` — generic Dialog with search field, item list, optional `header` slot (the weapon picker pushes category+affinity Selects into `header`).
- `AffinityPicker` — affinity-selection dialog.

### `src/common/types/index.tsx`

Shared `Hand`, `SlotPos`, `STAT_COLORS`. Pure types and constants — no runtime logic.

## File placement rules (decision guide)

When adding code, decide by intent:

1. New in-game datum (a weapon, a talisman, a spell) → `src/data/<existing-file>` if it fits an existing category, otherwise propose a new data file with the same pattern.
2. New pure recommender behavior → `src/lib/recommender.ts`.
3. New non-React utility → `src/lib/` as its own file.
4. New per-component piece of the page → `src/pages/components/<Name>/index.tsx`.
5. New reusable UI primitive used by 2+ pages or panels → `src/common/components/<Name>/index.tsx`.
6. New piece of state used across the page → extend `useBuildPickerState`.
7. New shared type → `src/common/types/index.tsx`.

If a module needs both data and pure logic, split it: data in `src/data/`, logic in `src/lib/`.

## Main flows and starting points

Use these paths to orient quickly in the current runtime:

- **Build recommendation**: start with `src/pages/BuildPicker.tsx` → `src/lib/recommender.ts::recommend` → `getTargetStats` → `recommendSpells` (internal). Loadout-driven.
- **Per-damage-type attack power**: `src/lib/recommender.ts::estimateAttackPower` consumes `DAMAGE_DATA` from `src/data/damage-types.ts`. Falls back to legacy single-physical formula only when regulation data is missing.
- **PDF report**: `src/lib/pdf-report.ts::generateBuildPdf`. Uses `jsPDF` + `jspdf-autotable`. Builds a per-level leveling table by re-invoking `recommend(...)` at each level so the printed plan matches the slider behavior.
- **Analytics**: `src/lib/analytics.ts`. Inert unless `VITE_GA_MEASUREMENT_ID` is set. Currently a single event (`pdf_download`); add new events as named helpers, not raw `window.gtag` calls.

## API and output contracts

Preserve existing exported shapes unless the task explicitly changes them.

Examples:

- `Recommendation` keys (`target`, `rationale`, `ranking`, `levelingPlan`, `equipLoad`, `spellSuggestions`, `best`) are consumed by `BuildPicker.tsx` and `pdf-report.ts`.
- `Weapon` shape (`scaling`, `scalingTable.max[affinity]`, `scalingTable.curve[affinity][stat]`) is consumed across the recommender, the picker UI, and the AP panel.
- `STAT_ORDER` and `STAT_LABELS` (from `src/data/classes.ts`) define the canonical stat iteration order — keep it consistent across the UI and the recommender.

## Conventions

1. **Per-component files**: each React component lives at `src/pages/components/<Name>/index.tsx` or `src/common/components/<Name>/index.tsx`. Component directory name is PascalCase and matches the default export.
2. **MUI v9 `sx` prop**: use `sx={{...}}` for styling. No CSS-in-JS libraries other than MUI's emotion. Prefer theme tokens (`primary.main`, `action.hover`) over hex.
3. **TypeScript strict, plus `noUnusedLocals` / `noUnusedParameters`**: every prop type is declared. No `any`. Unused locals are a build error.
4. **The recommender is pure**: never import React into `src/lib/`. State, hooks, and side effects belong only in `src/pages/`.
5. **Loadout-driven recommendation**: when extending the recommender, accept the full `loadout: LoadoutItem[]`. The active weapon is only for the AP panel and a few spell-anchor edge cases.
6. **Imports**: relative paths (no path aliases configured). `import type` where helpful.
7. **No comments unless the WHY is non-obvious**: the codebase already documents algorithm-level decisions inline. Do not paraphrase code in prose.
8. **Big data files (`armor.ts`, `weapons-extras.ts`, `damage-types.ts`) are imported as TS modules, not JSON**, to keep types and avoid `resolveJsonModule`.

## Naming conventions

- Components: `PascalCase` (e.g. `ClassRanking`, `WeaponSlotsGrid`).
- Functions, variables, fields: `camelCase`.
- Component directory names: same `PascalCase` as their default export, with `index.tsx` inside.
- File names for non-React modules: `kebab-case.ts` (e.g. `pdf-report.ts`, `damage-types.ts`).
- Constants in `src/lib/types.ts`: `SCREAMING_SNAKE_CASE` (`MAX_TARGET_LEVEL`, `SCALING_FACTOR`, `AFFINITIES`).

## Configuration and runtime environment

- **Node.js**: 20+ required (react-doctor needs the `/v` regex flag).
- **Dev server port**: `5179` (pinned in `.claude/launch.json`, `--strictPort`).
- **Env vars**: `VITE_GA_MEASUREMENT_ID` enables analytics (optional). See `.env.example`.
- **Bundle size**: ~250 KB gzip; chunk-size warning during build is expected.

## Anti-patterns (do not introduce)

- Importing React into `src/lib/`.
- Hand-editing machine-generated data files (`armor.ts`, `weapons-extras.ts`, `damage-types.ts`).
- Adding a `useEffect` to derive state that could be computed inline or in a `useMemo`.
- Reading the active weapon as the sole source of stat requirements (it must always come from the loadout).
- Introducing global state libraries (Redux, Zustand, Context) for what local state + `useMemo` can express.
- Removing or relocating the ads banner in `src/App.tsx` without an explicit ask.
- Adding new path aliases or absolute imports — the project uses relative paths.
- Bypassing the budget-fit step at the end of `getTargetStats` — it is the last line of defense ensuring the recommendation fits the slider's target Soul Level.
