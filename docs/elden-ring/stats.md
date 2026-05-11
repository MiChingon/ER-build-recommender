# Elden Ring — Stats Reference

Source: https://eldenring.wiki.fextralife.com/Stats

This document is the knowledge base the build recommender works against.
Every fact here should be derivable into recommender logic (requirements,
scaling targets, survivability floors, soft-cap stopping points).

---

## 1. Leveling fundamentals

- All 8 primary attributes range from **1 → 99** (hard cap).
- Leveling is done at Sites of Grace by spending Runes; each level raises one
  attribute and increments overall character level.
- **Respec**: available after defeating Rennala (Raya Lucaria Academy). Costs
  **1 Larval Tear** per respec.
- **Two-handing** multiplies effective Strength by **×1.5** for weapon
  requirements and STR scaling. A 60 STR weapon req can be met at 40 STR
  two-handed.

---

## 2. Primary attributes (8)

### Vigor
- **Governs:** HP.
- **Also affects:** Fire defense, Immunity (poison / scarlet rot resistance).
- **Soft caps:** 40, 60.
  - 1 → 40: large gains (+4 to +48 HP per level, accelerating).
  - 40 → 60: reduced gains (+26 to +13 HP per level).
  - 60 → 99: minimal gains (+6 to +3 HP per level).
- **Recommender rule:** treat Vigor 40 as a hard survivability floor for any
  build. Pushing to 60 is reasonable for late-game / NG+.

### Mind
- **Governs:** FP.
- **Also affects:** Focus stat (sleep / madness resistance).
- **Soft caps:** 50, 60.
- **Recommender rule:** scale Mind to the build's FP demand:
  - Pure melee / no Ash of War spam: ~15–20.
  - Hybrid (weapon + occasional spell): ~25–30.
  - Full caster: 40–50, capped at 60.

### Endurance
- **Governs:** Stamina and Equip Load.
- **Also affects:** Robustness (bleed / frostbite resistance).
- **Soft caps (Stamina):** 15, 30, 50.
- **Soft caps (Equip Load):** 25, 60.
- **Recommender rule:** target enough Endurance to stay under **70% Equip
  Load** (medium roll) with the build's intended armor. Stamina target
  depends on weapon weight class (UGS / colossal want 25–30+).

### Strength
- **Governs:** Heavy-weapon wielding ability; STR-scaling AP.
- **Also affects:** Physical / Strike / Slash / Pierce defense.
- **Breakpoints:** 16, 18, 20, 30, 45, **50**, **60**, **80**.
  - **50**: primary breakpoint for elemental affinities' AP.
  - **60**: primary breakpoint for physical AP.
  - **80**: final breakpoint, all affinities.
- **Casting breakpoints:** 30, 45 (for STR-scaling cast tools).
- **2-handing**: effective STR = STR × 1.5 — so 80 STR effective at 54 base
  when two-handing.

### Dexterity
- **Governs:** Advanced-weapon wielding ability; DEX-scaling AP.
- **Also affects:** Cast speed; fall damage reduction; knockoff resistance
  while mounted.
- **Breakpoints:** 16, 18, 20, 30, 45, **50**, **60**, **80**.
  - **50**: elemental AP breakpoint.
  - **60**: physical AP breakpoint.
  - **80**: all-affinity breakpoint.
- **Casting breakpoints:** 30, 45.

### Intelligence
- **Governs:** Glintstone sorceries; INT-scaling weapon AP.
- **Also affects:** Magic defense.
- **Breakpoints:** 20, 30, 45, **50**, 60, **80**.
  - **50**: elemental AP breakpoint.
  - **80**: all-affinity breakpoint.
- **Casting breakpoints (catalyst-dependent):** 30, 45, 60, 80.

### Faith
- **Governs:** Sacred incantations; FTH-scaling weapon AP.
- **Also affects:** Power of FTH-scaling incantations.
- **Breakpoints:** 20, 30, 45, **50**, 60, **80**.
  - **50**: elemental AP breakpoint.
  - **80**: all-affinity breakpoint.
- **Casting breakpoints:** 30, 45, 60, 80.

### Arcane
- **Governs:** Status buildup scaling; ARC-scaling weapon AP; Holy defense;
  Death resistance; **Discovery** (linear).
- **Breakpoints:** 18, 20, 30, 45, **60**, **80**.
- **Status-scaling breakpoints:** 40, 45, 60.
- **Discovery:** +1 per Arcane level, no diminishing returns.

---

## 3. Derived stats

| Stat          | Source                | Notes                                                |
|---------------|-----------------------|------------------------------------------------------|
| HP            | Vigor                 | 0 HP = death; restored by Crimson Tears, grace, etc. |
| FP            | Mind                  | Consumed by sorceries, incantations, weapon skills.  |
| Stamina       | Endurance             | Recovers automatically; gates all actions.           |
| Equip Load    | Endurance             | <30% light roll, <70% medium, ≥100% fat roll.        |
| Poise         | Armor (+ effects)     | Stagger resistance during attacks.                   |
| Discovery     | Arcane (linear)       | Affects enemy drop rate.                             |
| Memory Slots  | Memory Stones / Talis | Number of spells equippable at once.                 |

---

## 4. Resistances (status buildup bars)

| Resistance | Resists                 | Boosted by             |
|------------|-------------------------|------------------------|
| Immunity   | Poison, Scarlet Rot     | Vigor + armor          |
| Robustness | Hemorrhage, Frostbite   | Endurance + armor      |
| Focus      | Sleep, Madness          | Mind + armor           |
| Vitality   | Instant Death           | Arcane + armor         |

---

## 5. Defenses (damage negation)

- **Physical:** Standard + sub-types Strike / Slash / Pierce.
- **Elemental:** Magic, Fire, Lightning, Holy.
- Calculated from attributes + armor + talismans. Recommender does not need
  fine-grained defense modeling; armor choices dominate.

---

## 6. Recommender heuristics (derived rules)

These are the rules the website will use, derived from the data above:

1. **Meet weapon requirements first.** A weapon's STR / DEX / INT / FTH / ARC
   minimums are hard gates. 2-handing reduces effective STR req by ÷1.5.
2. **Floor survivability.** Vigor ≥ 40 for most builds; Vigor ≥ 30 acceptable
   for low-level PvP / RL1-style builds.
3. **Scale the weapon's primary stat to a breakpoint.**
   - Quality / physical weapons → 60 in primary stat, optionally 80.
   - Elemental-infusion weapons (Magic / Sacred / Fire / Lightning) → 50 in
     each contributing stat, then 80 if budget allows.
   - Arcane / status weapons → 60 ARC for status buildup, then primary
     scaling stat.
4. **Endurance to fit the kit.** Enough to medium-roll with intended armor +
   weapon; Stamina to 25–30 for heavy weapons, 15–20 for light.
5. **Mind by spell budget.** Non-caster ~15, hybrid ~25, caster ~40–50.
6. **Pick the starting class closest to the target spread.** Class only sets
   the baseline you can't refund cheaply (until first Larval Tear); pick the
   one whose innate stats best match the target build's primary stats to
   minimize wasted levels.

---

## 7. Open data still to gather

The recommender also needs (not yet captured in this doc):

- **Starting class** base stats and starting level for all 10 classes.
- **Weapon catalog** with: type, weight, requirements, scaling letters per
  affinity, possible infusions, base AP.
- **Soft-cap AP curves** per affinity (for ranking 60 vs 80 trade-offs).

These will be loaded next.
