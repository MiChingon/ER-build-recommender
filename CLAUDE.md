# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server. `.claude/launch.json` pins it to port **5179** (with `--strictPort`) so the Preview tool can reuse a known port; another vite from a different repo grabbed 5173 in past sessions, hence the pin.
- `npm run build` — type-checks (`tsc -b`) and builds the production bundle.
- `npm run preview` — serves the production build.
- `npm test` — Vitest (jsdom) unit tests for the design-system and interaction components. Setup/mocks live in `src/test/setup.ts` (matchMedia / ResizeObserver / IntersectionObserver / pointer-capture stubs; flip `globalThis.__mockReducedMotion` to test reduced-motion paths).

The quality gates are `tsc -b` (run by `npm run build`) and `npm test`. There is no lint script. TypeScript options worth knowing: `strict`, `noUnusedLocals`, `noUnusedParameters` are all on, and `noEmit: true` — tsc is purely a type checker; Vite does the actual transpile.

## Architecture

Single-page SPA: Vite + React 18 + TypeScript + **Tailwind CSS v4 + shadcn/ui (Radix) + `motion` (framer-motion)**. One route (`/`) rendered by `src/pages/BuildPicker.tsx`. MUI was fully removed in the 2026 "Site of Grace" redesign.

### UI stack (post-redesign)

- **Design tokens** live in `src/index.css` (Tailwind v4 CSS-first `@theme`): gold palette (`gold-300..700`, base `#d4af37`), night surfaces (`night-950/900/800`), `--font-display` (Cinzel via @fontsource, self-hosted to satisfy the CSP `font-src 'self'`), shadcn semantic vars mapped to the dark theme, and the `panel-heading` / `glass-card` / `gold-rule` / `text-glow` utilities.
- **`src/components/ui/`** — shadcn-generated primitives (button, badge, dialog, input, select, slider, switch, tooltip, table). **They are patched by hand — do NOT regenerate with `shadcn add --overwrite`:** (1) `React.forwardRef` was added to Badge, Button, Input, DialogOverlay, DialogContent, TooltipContent, SelectContent because React 18 function components drop refs and Radix Presence/Slot/focus management silently breaks (stuck-open dialogs, dead tooltips, un-focusable search input); (2) exit animations (`data-[state=closed]:animate-out…`) were removed from dialog/tooltip/select because Radix Presence defers unmount until `animationend`, which never fires in animation-suppressed environments (jsdom, screenshot browsers).
- **`src/components/er/`** — the Elden Ring design system: `BackgroundLayer` (erdtree scrim + vignette + grace pulse), `EmberCanvas` (sprite-based ember particles; null under reduced motion, rAF paused on hidden tab), `GlassCard`, `SectionHeading`, `AnimatedNumber` (spring counter, plain value under reduced motion), `InfoTip` (tooltip that also opens on touch tap and holds 5 s — replaces the old MUI `enterTouchDelay`/`leaveTouchDelay`; self-contained `TooltipProvider`), `StatChip`, and `motion.ts` (fadeRise / staggerContainer / viewportOnce presets).
- **`src/theme/colors.ts`** — single home for STAT_COLORS, INFUSION_COLORS, DAMAGE_TYPE_COLORS, STATUS_COLORS, STATUS_LABELS (consumed via inline `style` with hex-alpha suffixes; only the static gold/night palette lives in `@theme`). `src/common/types` re-exports STAT_COLORS for legacy importers.
- The Radix Slider has no marks; the Soul Level slider's mark labels are positioned with the pure helper `src/lib/slider-marks.ts` (unit-tested, handles the minLevel ≥ 125 collision cases).
- The old "AVAILABLE FOR ADS" banner was replaced by the gold **Contact** link at the right of the header (same `https://fabianalmaraz.dev/` target) — intentional; keep it elegant and non-intrusive.

### Data layer (`src/data/`)

Seven files, all consumed by the recommender and the page components:

- **`classes.ts`** — 10 hand-curated starting classes with starting Soul Level, eight base stats, portrait image (fextralife), default `armor` selection, and `starting.right` / `starting.left` weapon-id lists used to pre-fill the 2×3 weapon grid when the user picks a class. Reference doc: `docs/elden-ring/classes.md`.
- **`weapons.ts`** — 250 weapons (incl. 11 bows/shields added later) hand-listed via the `w(id, name, category, weight, requirements, scaling, skill, sote?, baseAP?)` helper, then **merged at module load** with `WEAPON_EXTRAS` from `weapons-extras.ts`. The merge attaches `image` and `scalingTable` to weapons that have them. `Weapon.scaling` is the legacy single-grade-set field; `Weapon.scalingTable.max[affinity]` is the per-affinity dataset. `Weapon.scalingTable.curve` carries optional per-affinity correction-graph overrides for unique scaling curves (e.g. Bloodfiend's Fork on Flame Art).
- **`weapons-extras.ts`** — **machine-generated, ~370 KB**. Image URL + per-affinity scaling for the merged set, scraped from the fextralife wiki's per-category pages. Do not edit by hand. The scaling map for somber weapons has only `Standard` populated, with **tuple values** `[grade, number]`; standard-fixed weapons (e.g. Great Club) also have only `Standard` but with **plain letter grades** — this is the signal `getUpgradeType` uses to tell them apart (see Recommender below).
- **`damage-types.ts`** — **machine-generated**. The `DAMAGE_DATA` bundle exports `byWeaponId: { [id]: { [affinity]: { attack, aecId, reinforceId } } }`, plus the `aec` (Attack Element Correct: per-damage-type list of stats that scale that damage type) and `reinforce` (per-upgrade-level damage and scaling multipliers) tables. Sourced from the game's regulation data (tclark.io's `regulation-vanilla-v1.14.js`); `estimateAttackPower` uses it for per-damage-type AP that matches in-game values.
- **`talismans.ts`** — 155 talismans (id, name, weight, effect, dlc, image). Exports `totalTalismanWeight(ids)` and `talismanBaseName(name)` (strips `+1/+2/+3` so the picker can dedupe same-family variants across the four slots).
- **`armor.ts`** — **machine-generated, ~330 KB**. 723 armor pieces (212 helm + 251 chest + 123 gauntlets + 137 legs) with defensive stats, weight, image, and (helms only) parsed `statBoosts` extracted from the Special Effect text. Exports `armorBySlot`, `findArmor`, `totalArmorWeight`, `totalArmorStatBoosts`.
- **`spells.ts`** — 44 hand-curated sorceries + incantations (id, name, type, category, stat requirements, FP, memory slots, effect, optional image override). Also exports `catalystBoosts: Record<catalystId, category[]>` mapping each staff/seal to the spell schools it boosts, and `spellImageUrl(spell)` which derives the fextralife icon URL from name + type (with a per-spell `image` field as override for edge cases like the wiki's `ancient_death_of_rancor` typo).

### Recommender (`src/lib/recommender.ts`)

Pure functions, no React. Entry point: `recommend(weapon, opts)` returning a `Recommendation` (target stats, rationale, class ranking, leveling plan, equip-load summary, `spellSuggestions`).

The recommendation is **loadout-driven, not active-weapon-driven**. `opts.loadout: LoadoutItem[]` lists every wielded weapon with its affinity; `weapon` is the active slot used only for the AP-panel breakdown and a few edge cases. Switching active in the UI does not change the recommended stats.

`getTargetStats` builds the target stat vector in this order — order matters:

1. Start from the selected starting class's base stats.
2. Aggregate hard requirements **across every weapon in the loadout** (not just active), then apply each weapon's affinity-specific requirement floor (`AFFINITY_REQ_FLOOR`). Two-handing reduces every weapon's Strength requirement.
3. Push each loadout weapon's primary scaling stats up to a soft-cap target via `getScalingTarget`. Shields (Small/Medium/Greatshield) are **always excluded** from the scaling push — wield requirements still apply but the recommender never pumps a stat solely to lift a shield's AP. Catalysts (Glintstone Staff / Sacred Seal) only contribute their spell-driving stats (Int / Faith / Arcane); Str / Dex letters on a staff or seal are dropped because they only affect the catalyst's irrelevant melee AP.
4. Apply vigor / endurance / mind floors from level-anchored curves. The mind curve depends on `determineLoadoutProfile(loadout)`: `caster` if every wielded item is a catalyst, `spellblade` if any catalyst or spell-scaling weapon is in the loadout, `melee` otherwise. The melee curve is intentionally low so pure-melee builds keep budget for AP.
5. **Equip-load bump**: total carried weight = sum of all 6 weapon slots (via `extraWeaponWeight`) + talismans + armor. `enduranceNeededFor(weight, 0.69)` finds the lowest endurance whose `getMaxEquipLoad` (`EQUIP_LOAD_ANCHORS`) keeps load below 70 % (medium roll). Heavy roll is treated as a build flaw the recommender always avoids, not just overload — this fires BEFORE budget-fit so scaling stats compete for whatever budget is left after Endurance lands the medium-roll target. Accounts for helm Endurance boosts.
6. Re-apply hard requirements across the loadout (one more pass to guarantee the floor).
7. **Budget fit**: if the total deficit exceeds `targetLevel - classLevel`, the scaling-stat overage above each scaling floor is scaled down proportionally so the recommendation actually fits the slider's target Soul Level. Leftover slack from integer truncation is redistributed to the highest-demand stats.
8. **Leftover distribution** (when the recommendation lands UNDER the target Soul Level): (1) lift Endurance just to medium roll if currently heavy, (1b) if the loadout includes a catalyst, push Mind to a caster floor of 40 before any scaling-stat push — running out of FP beats an extra scaling point, (2) cycle damaging stats up to soft cap 60 (54 for Strength while two-handing, since ×1.5 makes 54 = effective 81 just past the soft cap) — when every non-shield item is Standard-infused and they all share a single primary stat, the second-tier scaling stat (`getSecondaryStats`) is added to the rotation too (`shouldIncludeSecondaryScaling`), (2b) continue past the first soft cap up to 80 (60 for Strength while two-handing, ≈ effective 90 — never above 66 to avoid the 99 hard cap), (3) push Endurance toward soft cap 60, (4) dump remainder into Mind.
9. **Helm stat boosts go last**, subtracting from the target down to `max(class_base, weapon_requirement)`. They never reduce the target below a weapon's requirement — that is intentional. Helm boosts save scaling-stat investment, not weapon-requirement investment.

`getTargetStats` takes an `internal?: { noScalingPush?: boolean; noBudgetFit?: boolean }` parameter. `getMinFeasibleLevel` passes both flags so the slider's minimum reflects only mandatory wield+survive needs (not scaling soft caps). The recommendation at the user's target level then pushes scaling and fits the budget.

`getUpgradeType(weapon): "infusable" | "somber" | "standard-fixed"` replaces the older `GENERIC_SKILLS.has(skill)` heuristic. It uses `scalingTable.max` shape: multiple affinity keys → infusable; only `Standard` with numeric tuple values → somber (+10 max); only `Standard` with plain letter grades → standard-fixed (+25 max, but unique skill). The affinity Select in the picker dialog renders **"Somber"** or **"Standard"** accordingly and is disabled for the latter two cases. `isInfusable` is a thin wrapper; `getMaxUpgradeLevel` returns `+25` for both infusable and standard-fixed.

`estimateAttackPower(weapon, stats, upgrade, twoHand, affinity)` computes per-damage-type AP using `DAMAGE_DATA`. Falls back to the legacy single-physical formula only when a weapon lacks regulation data. The Calc Correct Graph interpolation uses adjPt-aware curves (`GRAPH_PHYSICAL`, `GRAPH_ELEMENTAL`) matching the game's `[stat, growVal, adjPt]` anchor format; `Weapon.scalingTable.curve[affinity][stat]` can override the default curve per affinity for unique-scaling weapons.

`recommendSpells(target, loadout, maxMemorySlots=10)` looks at every catalyst in the loadout (not just active). Sorceries are included if any staff is present; incantations if any seal is present. Spells are filtered by stat requirements (Int / Fai / Arc), scored boosted-first (any catalyst's `catalystBoosts` category that matches the spell's category gets a large score bonus), then greedy-filled under the 10-memory-slot cap, accounting for spells that cost 2 or 3 slots.

### UI (`src/pages/BuildPicker.tsx` + `src/pages/components/`)

`BuildPicker.tsx` is a slim shell that imports per-component files from `src/pages/components/` and a `useBuildPickerState` hook from `src/pages/hooks/`. Each component lives in its own directory (e.g. `src/pages/components/WeaponSlotsGrid/index.tsx`). Shared primitives live under `src/common/components/`:

- **`GearTile`** — the clickable Paper tile used by every gear slot (weapons R1–R3 / L1–L3, the 4 armor slots, the 4 talisman slots). Tiles use `flex: 1 1 0` + `minWidth: 0` + `overflow: hidden` so long item names truncate with a tooltip instead of stretching the slot.
- **`GearPicker`** — generic Dialog with a search field, item list, and an optional `header` slot. The weapon picker passes the **Weapon category** and **Infusion (affinity)** Selects into `header`; armor/talisman pickers use no header.

Per-component pages (`src/pages/components/`): `ClassCarousel`, `WeaponSlotsGrid`, `ArmorSlots`, `TalismanSlots`, `LoadoutDamagePanel` (with its own nested `components/WeaponDamageRow`), `SpellRecommendations`, `RecommendationHeader`, `TargetStatsTable`, `Rationale`, `ClassRanking`.

`src/common/types/index.tsx` exports the `Hand` / `SlotPos` / `STAT_COLORS` shared by the slot grid and the AP panel. `useBuildPickerState` is a thin `useReducer`-style state container holding the form state (category, hands, active, classId, targetLevel, twoHand, talismanIds, armorSelection, weaponPickerOpen).

Slot interaction rules:

- **Empty slot click** → activates the slot AND opens the weapon picker.
- **Filled slot click** → activates only (no dialog). The AP panel's gold border tracks the active slot.
- **Filled slot ↻ button** → opens the weapon picker for that slot.
- **× button** → clears the slot.

The recommendation panel (`md=7` column) shows: header chips → `LoadoutDamagePanel` (one row per selected weapon with per-damage-type dots) → `SpellRecommendations` (only when the loadout has at least one catalyst, capped at 10 memory slots) → `TargetStatsTable` → `Rationale` → `ClassRanking`.

### `docs/elden-ring/`

Three reference markdown files (classes, stats, weapons) that capture the in-game tuning curves and stat conventions the recommender encodes. They are documentation, not consumed by code, but they explain the magic numbers in `recommender.ts` and `types.ts` (soft caps, AP breakpoints, scaling factors, mind/endurance/vigor curves).

## Conventions

- The big data files (`armor.ts`, `weapons-extras.ts`, `damage-types.ts`, `talismans.ts`) are **regenerated from wiki scrapes or game regulation data**, not hand-edited. If a value looks wrong, fix the parser and regenerate — don't patch one entry. `spells.ts` is hand-curated and easy to extend.
- Stat scaling letters use `ScaleGrade = "S" | "A" | "B" | "C" | "D" | "E"`. The numeric weights are in `SCALING_FACTOR` in `src/lib/types.ts`. The numeric per-affinity values in `scalingTable.max` (e.g. `[grade, number]`) override the letter when present — `estimateAttackPower` uses `numeric / 100` directly.
- The `Affinity` union in `src/lib/types.ts` is the source of truth for the 13 affinities. Adding one means updating the affinity tables in `weapons-extras.ts` and `damage-types.ts` too.
- `weapons-extras.ts`, `armor.ts`, and `damage-types.ts` are deliberately huge. They are imported as plain TS modules, not JSON, to keep types and avoid `resolveJsonModule`. The bundle ships ~255 KB gzip — the chunk-size warning during build is expected.
- The recommendation must always fit at the user's target Soul Level. The budget-fit step in `getTargetStats` is the last line of defense — preserve it when changing the recommender.
- Google Analytics is wired through `src/lib/analytics.ts`. It only loads gtag.js when `VITE_GA_MEASUREMENT_ID` is set in the environment (see `.env.example`). The taxonomy is intentionally small — currently a single `pdf_download` event fired from the PDF button. Add new events as named helpers in that module rather than calling `window.gtag` from components.
