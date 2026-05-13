# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server. `.claude/launch.json` pins it to port **5179** (with `--strictPort`) so the Preview tool can reuse a known port; another vite from a different repo grabbed 5173 in past sessions, hence the pin.
- `npm run build` — type-checks (`tsc -b`) and builds the production bundle.
- `npm run preview` — serves the production build.

There is no test runner and no lint script configured. The only quality gate is `tsc -b`, which `npm run build` runs. TypeScript options worth knowing: `strict`, `noUnusedLocals`, `noUnusedParameters` are all on, and `noEmit: true` — tsc is purely a type checker; Vite does the actual transpile.

## Architecture

Single-page SPA: Vite + React 18 + TypeScript + MUI v9. One route (`/`) rendered by `src/pages/BuildPicker.tsx`. The MUI dark theme (gold primary `#d4af37` on near-black background) and an Erdtree image hotlinked from the fextralife wiki are applied in `src/App.tsx` / `src/main.tsx`.

`src/App.tsx` also contains a deliberate "AVAILABLE FOR ADS, CONTACT THE OWNER" banner under the header — it is intentional; do not remove unless asked.

### Data layer (`src/data/`)

Five files, all consumed by the recommender and BuildPicker:

- **`classes.ts`** — 10 hand-curated starting classes with their starting Soul Level, eight base stats, and portrait image URL (fextralife). Reference doc: `docs/elden-ring/classes.md`.
- **`weapons.ts`** — 239 weapons hand-listed via the `w(id, name, category, weight, requirements, scaling, skill, sote?, baseAP?)` helper, then **merged at module load** with `WEAPON_EXTRAS` from `weapons-extras.ts`. The merge attaches `image` and `scalingTable` to weapons that have them. `Weapon.scaling` is the legacy single-grade-set field; `Weapon.scalingTable.max[affinity]` is the per-affinity dataset.
- **`weapons-extras.ts`** — **machine-generated, ~190 KB**. Contains image URL + per-affinity scaling for all 239 weapons, scraped from the fextralife wiki's per-category pages (Daggers, Straight Swords, …, Glintstone Staffs, Sacred Seals). Do not edit by hand. The scraper that produced it lived in `/tmp/parse-all-weapons.mjs` during development; if regenerating, the unified parser needs to handle three base-table key variants (`base`, `basevalue`, `basevalues`), two max-Standard variants (`standard`, `jumbo`), and dynamic stat-column detection by scanning thead for "Str" (column position varies because some pages have an extra "Phy Damage Type" or "Sorc Scal" column).
- **`talismans.ts`** — 155 talismans (id, name, weight, effect, dlc, image) scraped from the wiki's Talismans Comparison Table + Gallery. Exports `totalTalismanWeight(ids)` and `talismanBaseName(name)` (strips `+1/+2/+3` so the picker can dedupe same-family variants across the four slots).
- **`armor.ts`** — **machine-generated, ~330 KB, ~14.7K lines**. 723 armor pieces (212 helm + 251 chest + 123 gauntlets + 137 legs) with full defensive stats, weight, image, and (helms only) parsed `statBoosts` extracted from the "Special Effect" text. Exports `armorBySlot`, `findArmor`, `totalArmorWeight`, and `totalArmorStatBoosts`.

### Recommender (`src/lib/recommender.ts`)

Pure functions, no React. Entry point: `recommend(weapon, opts)` returning a `Recommendation` (target stats, rationale lines, class ranking, leveling plan, equip-load summary).

`getTargetStats` builds the target stat vector in this order, and the order matters:

1. Start from the selected starting class's base stats (or zeros).
2. Set requirement floors from `weapon.requirements`, then apply affinity-specific requirement floors (`AFFINITY_REQ_FLOOR`).
3. Push each primary scaling stat up to a soft-cap target via `getScalingTarget` (level-interpolated breakpoints: physical 60, elemental 50, with two-handing dividing the Str target by 1.5).
4. Apply vigor / endurance / mind floors from level-anchored curves (`VIGOR_ANCHORS`, `ENDURANCE_ANCHORS`, `MIND_ANCHORS_*`); mind curve depends on melee / spellblade / caster profile.
5. **Equip-load bump**: total carried weight = weapon + talismans + armor (no fake reserve). `enduranceNeededFor(weight, 0.99)` finds the lowest endurance whose `getMaxEquipLoad` (`EQUIP_LOAD_ANCHORS`) keeps load below 100%. The bump accounts for helm endurance boosts so a +2 End helm reduces the required Endurance investment.
6. Re-apply hard weapon requirements (one more pass to guarantee floor).
7. **Helm stat boosts go last**, subtracting from the target down to `max(class_base, weapon_requirement)`. They never reduce the target below the weapon's requirement — that is intentional. The recommender treats helm boosts as a way to **save investment for scaling breakpoints**, not a shortcut to satisfy minimum stat requirements (real Elden Ring lets helms satisfy reqs, but this app's stance is the safer one — see commit history if changing).

`getMinFeasibleLevel(class, weapon, twoHand, affinity, talismans?, armor?)` iterates `getTargetStats` up to 8 times to find the lowest Soul Level a class can hit the build at. Used to constrain the Soul Level slider's minimum and as a class-ranking metric.

`isInfusable(weapon)` is `GENERIC_SKILLS.has(weapon.skill)` — i.e. a weapon is considered infusable iff its skill is one of the listed "Ash of War"-style generic skills. Catalysts (staves, seals) all have skill `"No Skill"` (or a unique skill) so they are non-infusable; the affinity input in BuildPicker shows **"Somber"** instead of "Standard" for these via `renderValue` (display-only — the underlying value stays `"Standard"` so the recommender keeps treating them as Standard).

### UI (`src/pages/BuildPicker.tsx`)

One ~950-line file with a default export plus several private sub-components: `ClassCarousel`, `ArmorSlots` (4 dropdowns), `TalismanSlots` (4 dropdowns with cross-slot dedup by `talismanBaseName`), `LoadChip`, `DamagePanel`, `RecommendationHeader`, `TargetStatsTable`, `Rationale`, `ClassRanking`. Form order is locked in the user's preferred layout: class → category → weapon → infusion → weapon details panel → two-hand switch → Soul Level slider → armor → talismans.

### `docs/elden-ring/`

Three reference markdown files (classes, stats, weapons) that capture the in-game tuning curves and stat conventions the recommender encodes. They are documentation, not consumed by code, but they explain the magic numbers in `recommender.ts` and `types.ts` (soft caps, AP breakpoints, scaling factors, mind/endurance/vigor curves).

## Conventions

- Data files (`armor.ts`, `weapons-extras.ts`, `talismans.ts`) are **regenerated from wiki scrapes**, not hand-edited. If a value looks wrong, fix the parser and regenerate — don't patch one entry.
- Stat scaling letters use `ScaleGrade = "S" | "A" | "B" | "C" | "D" | "E"`. The numeric weights are in `SCALING_FACTOR` in `src/lib/types.ts`.
- The `Affinity` union in `src/lib/types.ts` is the source of truth for the 13 affinities. Adding one means updating the affinity tables in `weapons-extras.ts` too.
- `src/data/weapons-extras.ts` and `src/data/armor.ts` are deliberately huge. They are imported as plain TS modules, not JSON, to keep types and avoid `resolveJsonModule`. The bundle ships ~210 KB gzip — the size warning during build is expected.
