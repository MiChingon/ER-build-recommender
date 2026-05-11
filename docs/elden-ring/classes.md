# Elden Ring — Starting Classes Reference

Source: https://eldenring.wiki.fextralife.com/Classes

There are **10 starting classes**. Each class sets:

- the **starting Soul Level** (lower = more flexibility, since you can't go
  below your starting level),
- the **base attribute spread** across the eight primary stats — these are
  the *minimum* values you carry forever (until you respec with a Larval
  Tear, and even then you can't refund the starting points below the
  Wretch's 10s, but you can re-allocate the rest),
- the **starting equipment** (one weapon, sometimes a shield, armor set,
  ammunition or starting spells).

The class is the **single biggest decision** for the recommender: choose
poorly and you waste levels on stats you'll never use.

---

## Base stat table

| Class | Level | Vig | Mind | End | Str | Dex | Int | Fai | Arc | Sum |
|---|---|---|---|---|---|---|---|---|---|---|
| Vagabond | 9 | 15 | 10 | 11 | 14 | 13 | 9 | 9 | 7 | 88 |
| Warrior | 8 | 11 | 12 | 11 | 10 | 16 | 10 | 8 | 9 | 87 |
| Hero | 7 | 14 | 9 | 12 | 16 | 9 | 7 | 8 | 11 | 86 |
| Bandit | 5 | 10 | 11 | 10 | 9 | 13 | 9 | 8 | 14 | 84 |
| Astrologer | 6 | 9 | 15 | 9 | 8 | 12 | 16 | 7 | 9 | 85 |
| Prophet | 7 | 10 | 14 | 8 | 11 | 10 | 7 | 16 | 10 | 86 |
| Samurai | 9 | 12 | 11 | 13 | 12 | 15 | 9 | 8 | 8 | 88 |
| Prisoner | 9 | 11 | 12 | 11 | 11 | 14 | 14 | 6 | 9 | 88 |
| Confessor | 10 | 10 | 13 | 10 | 12 | 12 | 9 | 14 | 9 | 89 |
| Wretch | 1 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 10 | 80 |

Notes:

- **Wretch starts at Level 1** with a flat 10 in every stat. Its sum (80)
  is the lowest possible — any other class is "paying" for some stat
  baseline above 10 with a higher starting level.
- A class's **starting level** is essentially `sum_of_stats − 79` (Wretch's
  80 stats minus an offset of 79 = level 1). Vagabond at 88 = level 9.
- Every level after the start raises one stat by 1 and the Soul Level by 1.

---

## Starting equipment & archetype

| Class | Archetype | Right hand | Off-hand / Catalyst | Shield | Armor | Spells / Ammo |
|---|---|---|---|---|---|---|
| Vagabond | Balanced melee, tanky | Longsword (also Halberd) | — | Heater Shield | Vagabond Knight set | — |
| Warrior | Dex dual-curved swords | Scimitar | Scimitar (off-hand) | Riveted Wooden Shield | Blue Cloth Cowl set | — |
| Hero | Heavy Str | Battle Axe | — | Large Leather Shield | Champion set | — |
| Bandit | Dex stealth / archery | Great Knife | Shortbow | Buckler | Bandit set | Bone Arrow (Fletched) ×30 |
| Astrologer | Pure INT caster | Short Sword | Astrologer's Staff | Scripture Wooden Shield | Astrologer set | Glintstone Pebble, Glintstone Arc |
| Prophet | Pure FTH caster | Short Spear | Finger Seal | Rickety Shield | Prophet set | Heal, Catch Flame |
| Samurai | Dex katana + bow | Uchigatana | Longbow | Red Thorn Roundshield | Land of Reeds set | Arrow ×20, Fire Arrow ×10 |
| Prisoner | INT melee hybrid | Estoc | Glintstone Staff | Rift Shield | Prisoner set | Magic Glintblade |
| Confessor | FTH melee hybrid | Broadsword | Finger Seal | Blue Crest Heater Shield | Confessor set | Urgent Heal, Assassin's Approach |
| Wretch | None (blank slate) | Club | — | — | None | — |

---

## Recommender logic — picking the right class

The build recommender boils down to:

1. **Compute the target stat spread `T`** from (weapon requirements +
   primary scaling stat at chosen breakpoint + Vigor/End/Mind floors).
2. **Score every class** by *wasted points* relative to `T`:

   ```
   waste(class) = Σ max(0, class_base[stat] − T[stat])
   ```

   This counts how many of the class's baseline points are "above" what
   your build actually needs — those points can't be refunded, even with
   a Larval Tear, since respec only re-allocates points and a stat cannot
   be reduced below the class's starting value.

3. **Pick the class with the lowest waste.** Tie-break by *deficit*:

   ```
   deficit(class) = Σ max(0, T[stat] − class_base[stat])
   ```

   Lower starting level (Wretch, Bandit) gives more room to level into
   the deficit but you also pay one Soul Level per stat point regardless
   of class — so for two classes with equal waste, prefer the lower-level
   one if it has equal or lower deficit; otherwise prefer the one whose
   leftover starting equipment is most useful.

### Quick mapping: archetype → likely best class

| Build target | Best class | Why |
|---|---|---|
| Pure Strength (greatswords, hammers) | **Hero** | Highest Str baseline (16), decent Vig (14). |
| Quality (Str + Dex mix) | **Vagabond** | Solid Str 14 / Dex 13, best Vig (15). |
| Pure Dex (katanas, twinblades) | **Samurai** | Dex 15, best End (13), good starter gear. |
| Bleed / Arcane scaling | **Bandit** | Highest Arc (14), lowest Lv (5) for flexibility. |
| Pure Sorcery | **Astrologer** | Int 16, Mind 15, ships with full sorcery kit. |
| Pure Faith | **Prophet** | Fai 16, Mind 14, starts with seal + spells. |
| Spellblade (INT melee) | **Prisoner** | Int 14, Dex 14, ships with Estoc + staff. |
| Paladin (FTH melee) | **Confessor** | Fai 14, Str 12, Dex 12 — most flexible hybrid. |
| Low-level / RL1 / status-buildup runs | **Wretch** | Lv 1 start, flat 10s, zero wasted points. |
| Niche / specific stat target | (calculate `waste(class)` per logic above) | |

### Worked example

Build target: **Bloodhound's Fang quality build at Vigor 40 / Mind 20 / End 25**.

Weapon requires Str 18, Dex 17. To get good scaling we target Str 30, Dex 60
(60 is the physical AP soft cap; Str at min req is fine since the Fang
scales better with Dex).

Target vector `T`:

| Vig | Mind | End | Str | Dex | Int | Fai | Arc |
|---|---|---|---|---|---|---|---|
| 40 | 20 | 25 | 30 | 60 | 0 | 0 | 0 |

Waste per class:

| Class | Vig | Mind | End | Str | Dex | Int | Fai | Arc | Waste |
|---|---|---|---|---|---|---|---|---|---|
| Vagabond | 0 | 0 | 0 | 0 | 0 | 9 | 9 | 7 | **25** |
| Warrior | 0 | 0 | 0 | 0 | 0 | 10 | 8 | 9 | **27** |
| Hero | 0 | 0 | 0 | 0 | 0 | 7 | 8 | 11 | **26** |
| Bandit | 0 | 0 | 0 | 0 | 0 | 9 | 8 | 14 | **31** |
| Astrologer | 0 | 0 | 0 | 0 | 0 | 16 | 7 | 9 | **32** |
| Prophet | 0 | 0 | 0 | 0 | 0 | 7 | 16 | 10 | **33** |
| Samurai | 0 | 0 | 0 | 0 | 0 | 9 | 8 | 8 | **25** |
| Prisoner | 0 | 0 | 0 | 0 | 0 | 14 | 6 | 9 | **29** |
| Confessor | 0 | 0 | 0 | 0 | 0 | 9 | 14 | 9 | **32** |
| **Wretch** | 0 | 0 | 0 | 0 | 0 | 10 | 10 | 10 | **30** |

→ **Tie at 25 between Vagabond and Samurai.** Tie-break by deficit:

- Vagabond deficit = (40-15) + (20-10) + (25-11) + (30-14) + (60-13) = 112.
- Samurai deficit = (40-12) + (20-11) + (25-13) + (30-12) + (60-15) = 112.

Equal deficit. Final tie-break by starting equipment: **Samurai** ships
with the Uchigatana (Dex weapon, useful while leveling toward the Fang) so
it edges out Vagabond. Vagabond is the safe alternative if the player wants
heavier early armor.

This is exactly the logic the website should run for every weapon/build
combination.

---

## Open data still to gather

For the final recommender, still need:

- **Sample build templates per archetype** so the UI can quick-pick
  "Quality Bloodhound's Fang" etc. without the user typing target stats.
- **Soft-cap stopping points** per stat for budget calculations (e.g. is
  60 Vig overkill if End is still at 15? Recommender should suggest
  reallocating).
- **Caster minimum FP / spell-slot demands** if the build includes
  sorceries or incantations.

The next file should be `archetypes.md` (preset build templates) — or we
move straight to scaffolding the recommender website.
