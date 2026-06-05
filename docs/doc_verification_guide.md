# Verification Guide

## Purpose

Use this document to choose the right verification path for a task without rediscovering scripts or commands.

This is not a catalog of every command in the repository. It is a curated guide for:

- fast local type-checks,
- React-pattern and architecture scans,
- manual browser smoke checks.

Use the cheapest verification that can detect the risk introduced by the task.

## Important Context

**There is no test runner in this project.** No `jest`, `vitest`, `playwright`, or `cypress`. There is no `npm test`. The only automated quality gates are:

- `tsc -b` (chained inside `npm run build`)
- `npx react-doctor@latest` (exposed as `npm run doctor`)

Anything beyond that is **manual verification in a running dev server**. Plan for it accordingly.

## Verification Strategy

Prefer this order:

1. `tsc -b` for any TypeScript change (types, signatures, recommender output shape).
2. `npm run doctor` for React-pattern changes (component structure, hooks, JSX keys).
3. `npm run build` before declaring a change ready — it bundles both checks plus the Vite production build.
4. `npm run dev` (port 5179) + manual browser checklist for user-visible behavior.

Do not default to running the dev server for every change. Do use it when the change is observable in the UI (slot layout, dialog behavior, recommendation values, PDF output).

## Quick Map

### I changed types or pure functions in `src/lib/` or `src/data/`

Use:

- `npx tsc -b` (fast, type-only)

Best for:

- recommender helper changes,
- new fields in `Recommendation`, `Weapon`, `StatVector`,
- new entries in hand-curated data files,
- pure refactors that should not change runtime output.

If the change touches the recommender's algorithm (anything in `getTargetStats`, `recommendSpells`, or AP estimation), also run a manual browser smoke check — types do not catch wrong numbers.

### I changed React component structure, hooks, or JSX

Use:

- `npx react-doctor@latest` (full scan)
- `npx react-doctor@latest --diff` (branch-vs-base scan, faster)

Best for:

- new components,
- new hooks or hook-deps changes,
- JSX key changes,
- changes to component splits or props.

Pass `--verbose` to see affected files and line numbers per rule. Pass `--json --yes` to emit a machine-readable report.

### I changed something user-visible

Run `npm run dev` (port 5179) and exercise the manual browser checklist below.

### I changed the build output, bundle, or analytics

Use:

- `npm run build` (chains `tsc -b && vite build`)

Best for:

- adding a new dependency,
- changing chunk/code-splitting,
- adjusting Vite plugins or config,
- adding analytics events.

Inspect the `dist/` output and the bundle-size report.

## Recommended Commands By Goal

### Verify type safety

```bash
npx tsc -b
```

Use when:

- changing types in `src/lib/types.ts`, `src/common/types/`, or any module's exports,
- refactoring imports or extracting components,
- demoting or removing exports.

### Verify React patterns + architecture

```bash
npm run doctor
```

Equivalent to `npx react-doctor@latest --verbose`. Use when:

- adding or modifying React components,
- adding hooks,
- changing JSX keys,
- changing component split boundaries.

For branch-scoped scan during iterative work:

```bash
npx react-doctor@latest --verbose --diff
```

### Verify the full production build

```bash
npm run build
```

Chains `tsc -b && vite build`. Use as the **final gate** before reporting work as complete. Bundle-size warnings >500 KB are expected for the main chunk; no action needed unless you're targeting bundle size.

### Spin up the dev server

```bash
npm run dev
```

Pinned to port `5179` via `.claude/launch.json` (`--strictPort`). If the port is taken, find and stop the conflicting process; do not pick a different port.

The Claude Preview tool reads `.claude/launch.json` and will reuse this server.

## Manual Browser Checklist

After any user-visible change, run the dev server and exercise these flows:

### Class selection
- [ ] Click each class in the carousel; the right-hand panel updates with that class's base stats.
- [ ] The active class's starting weapons populate `R1–R3` and `L1–L3`.

### Weapon slots
- [ ] Click an empty slot → weapon picker opens, slot becomes active.
- [ ] Click a filled slot → slot becomes active, picker does not open (gold border tracks active slot).
- [ ] Click the ↻ button on a filled slot → picker opens for that slot.
- [ ] Click the × button → slot clears.
- [ ] Pick a weapon → the slot fills, the affinity selector is enabled or disabled per the weapon's upgrade type (`infusable` / `somber` / `standard-fixed`).
- [ ] Switch the active slot — the AP panel's gold border moves; the recommended stats **do not** change (recommendation is loadout-driven, not active-driven).

### Infusion
- [ ] Open the affinity picker on an infusable weapon → all 13 affinities are selectable.
- [ ] On a somber weapon → only "Somber" is selectable.
- [ ] On a `standard-fixed` weapon (e.g. Great Club) → only "Standard" is selectable.

### Talisman picker
- [ ] Open a talisman slot → picker filters out already-selected variants of the same base name (so you can't pick `Erdtree's Favor` and `Erdtree's Favor +1` in two slots).
- [ ] Selecting a talisman fills the slot; closing the picker clears the search query.

### Armor slots
- [ ] Each slot opens a picker filtered to that slot's pieces.
- [ ] Selecting armor updates the equip-load summary.
- [ ] Helm with `statBoosts` reduces the target stat table by the boost amount, but not below the weapon requirement.

### Recommendation panel
- [ ] Target Soul Level slider's minimum equals the minimum feasible level for the active loadout.
- [ ] Dragging the slider updates target stats, AP panel, and class ranking.
- [ ] Two-hand toggle reduces the strength requirement (×1.5 effective Str).
- [ ] Rationale list reflects the recent steps (affinity floors, scaling reductions, etc.).
- [ ] Class ranking is sorted by waste; the active class is highlighted; classes that exceed the target level show in red.

### Spell suggestions (catalyst loadouts only)
- [ ] Add a Glintstone Staff to a slot → sorcery suggestions appear.
- [ ] Add a Sacred Seal → incantation suggestions appear.
- [ ] Suggestions stay under 10 memory slots total (some spells cost 2 or 3 slots).

### PDF export
- [ ] Click the PDF download button → a PDF file downloads.
- [ ] The downloaded PDF contains the active class, weapons, target stats, rationale, leveling plan, and AP panel.
- [ ] If `VITE_GA_MEASUREMENT_ID` is set, a `pdf_download` analytics event fires (check the browser console / network tab).

## Using the Claude Preview tool

When working through Claude Code with the Preview tool available:

1. `preview_start name="dev"` — starts the Vite server using the entry in `.claude/launch.json`.
2. `preview_snapshot serverId=...` — gets the accessibility tree, useful for verifying text/structure.
3. `preview_click selector="..."` — exercises a flow.
4. `preview_screenshot serverId=...` — visual confirmation (for layout/theming only — colors and font sizes need `preview_inspect`).
5. `preview_console_logs serverId=...` — checks for runtime errors.

Do not call this tool with the cwd pointed at a different repo; the preview tool reads `.claude/launch.json` from the current working directory.

## React Doctor scan modes

### Full codebase scan

```bash
npm run doctor
```

Equivalent to `npx react-doctor@latest --verbose`. Reports score 0–100 and a list of warnings by rule.

### JSON output (for tooling)

```bash
npx react-doctor@latest --json --yes > /tmp/diagnostics.json
```

### Branch-scoped (faster during iteration)

```bash
npx react-doctor@latest --verbose --diff
```

Useful when you have an active feature branch and want to scan only the changed files vs `main`.

### Single rule documentation

Each rule has a canonical playbook at `https://www.react.doctor/prompts/rules/<plugin>/<rule>.md`. Fetch when triaging a finding.

## Anti-patterns

Do not:

- declare a UI change "done" without manually exercising the dev server.
- treat a passing `tsc -b` as proof the recommendation values are correct — types do not catch wrong math.
- introduce a `playwright` / `vitest` / etc. test suite as a side effect of an unrelated task. Adding a test runner is a project-level decision.
- hand-edit `armor.ts`, `weapons-extras.ts`, or `damage-types.ts` to "fix one value". Fix the parser and regenerate.
- bypass `npm run doctor` warnings by adding `oxlint-disable` comments. If a rule is a false positive in this codebase, add the entry to `.react-doctor/false-positives.md` (create the file if missing) and surface it in the PR description.
