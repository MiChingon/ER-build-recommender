# Elden Ring — Melee Weapons Reference

Source: https://eldenring.wiki.fextralife.com/Weapons

Scope: every **melee** weapon category from the base game plus Shadow of the
Erdtree (SOTE). Ranged weapons (bows / crossbows / ballistae) and spellcasting
tools (staves / seals) and shields / torches are deferred to a later pass.

Each weapon row records:

- **Weight** — for Equip Load planning.
- **Stat requirements** (Str / Dex / Int / Fai / Arc) — the minimum stat
  values needed to wield the weapon without penalty. `—` means none.
- **Base scaling letters** (Str / Dex / Int / Fai / Arc) — letters
  `S > A > B > C > D > E` indicate how strongly the weapon's attack power
  scales with each stat at the default/uninfused affinity. Many weapons
  change scaling letters when re-infused (Heavy → S Str, Keen → S Dex, etc.).
- **Default skill / Ash of War** — the Ash of War the weapon ships with. For
  unique weapons (the bottom rows in most tables), the skill is locked and
  the weapon cannot be infused.

## Known data quality notes

The raw tables below were extracted from the Fextralife wiki via automated
scraping; in a few categories the scraper occasionally confused the
requirement column with a damage column. Specific known issues:

- **Hammers** — a few rows (Curved Club, Spiked Club, Stone Club, Warpick)
  have a scaling letter in the Dex requirement slot; the real Dex
  requirement for those weapons is 0/—.
- **Great Hammers** — Str requirement values look inflated by roughly +14
  for several rows. Real values: Great Club ≈ 30 Str, Pickaxe ≈ 24 Str.
- **Colossal Weapons** — Dex requirement column is unreliable; real Giant-
  Crusher is Str 60 / Dex 12, not 58 / 60 as the table shows.
- **Curved Greatswords** — a stray scaling letter appears in Gargoyle's
  Black Blades' Arc column.

For the recommender, treat the tables as **classification-accurate** (you
can tell a Str weapon from a Dex weapon, a low-req weapon from a high-req
one) but **not exact to the integer**. Before publishing requirement values
in the UI, the build pipeline should cross-validate against a second source
or the individual weapon pages.

---

## Daggers

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Dagger | 1.5 | 5 | 9 | — | — | — | D | C | — | — | — | Quickstep |
| Parrying Dagger | 1.5 | 5 | 14 | — | — | — | E | C | — | — | — | Parry |
| Great Knife | 1.5 | 6 | 12 | — | — | — | E | C | — | — | — | Quickstep |
| Misericorde | 2.0 | 7 | 12 | — | — | — | E | D | — | — | — | Quickstep |
| Wakizashi | 3.0 | 9 | 13 | — | — | — | D | D | — | — | — | Quickstep |
| Erdsteel Dagger | 2.0 | 7 | 12 | 14 | — | — | D | D | D | — | — | Quickstep |
| Bloodstained Dagger | 2.0 | 9 | 12 | — | — | — | C | E | — | — | — | Quickstep |
| Scorpion's Stinger | 2.5 | 6 | 12 | — | — | — | D | C | — | — | — | Repeating Thrust |
| Glintstone Kris | 1.5 | 5 | 12 | 16 | — | — | E | D | D | — | — | Glintstone Dart |
| Crystal Knife | 2.0 | 8 | 12 | 9 | — | — | D | D | D | — | — | Quickstep |
| Ivory Sickle | 2.0 | 6 | 11 | 13 | — | — | E | D | D | — | — | Quickstep |
| Celebrant's Sickle | 1.5 | 6 | 11 | — | — | — | E | C | — | — | — | Quickstep |
| Cinquedea | 3.5 | 10 | 10 | — | — | — | D | E | — | — | — | Quickstep |
| Reduvia | 2.5 | 5 | 13 | — | — | 13 | E | D | — | — | D | Reduvia Blood Blade |
| Black Knife | 2.0 | 8 | 12 | — | 18 | — | E | D | — | D | — | Blade of Death |
| Blade of Calling | 1.5 | 6 | 13 | — | 15 | — | D | D | — | C | — | Blade of Gold |
| Main-gauche *(SOTE)* | 2.5 | 7 | 15 | — | — | — | D | D | — | — | — | Parry |
| Fire Knight's Shortsword *(SOTE)* | 2.0 | 8 | 13 | — | 12 | — | D | C | — | D | — | Quickstep |

## Straight Swords

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Short Sword | 3 | 8 | 10 | — | — | — | D | D | — | — | — | Kick |
| Longsword | 3.5 | 10 | 10 | — | — | — | D | D | — | — | — | Square Off |
| Broadsword | 4 | 10 | 10 | — | — | — | D | E | — | — | — | Square Off |
| Weathered Straight Sword | 3 | 7 | 10 | — | — | — | D | D | — | — | — | Square Off |
| Lordsworn's Straight Sword | 3.5 | 10 | 10 | — | — | — | D | D | — | — | — | Square Off |
| Noble's Slender Sword | 3.5 | 8 | 11 | — | — | — | E | C | — | — | — | Square Off |
| Cane Sword | 2.5 | 8 | 11 | — | — | — | E | D | — | — | — | Square Off |
| Warhawk's Talon | 3 | 10 | 16 | — | — | — | D | C | — | — | — | Spinning Slash |
| Lazuli Glintstone Sword | 3.5 | 8 | 9 | 13 | — | — | D | E | D | — | — | Glintstone Pebble |
| Carian Knight's Sword | 4 | 10 | 10 | 18 | — | — | D | D | D | — | — | Carian Grandeur |
| Crystal Sword | 4.5 | 13 | 10 | 15 | — | — | D | E | D | — | — | Spinning Slash |
| Rotten Crystal Sword | 4.5 | 13 | 10 | 15 | — | — | D | E | D | — | — | Spinning Slash |
| Miquellan Knight's Sword | 3.5 | 11 | 11 | — | 16 | — | D | D | — | E | — | Sacred Blade |
| Ornamental Straight Sword | 3 | 10 | 14 | — | — | — | E | D | — | — | — | Golden Tempering |
| Golden Epitaph | 3.5 | 12 | 10 | — | 14 | — | D | D | — | D | — | Last Rites |
| Sword of St. Trina | 3 | 10 | 12 | 14 | — | — | D | D | E | — | — | Mists of Slumber |
| Regalia of Eochaid | 5.5 | 12 | 18 | — | — | 15 | E | D | — | — | D | Eochaid's Dancing Blade |
| Coded Sword | 2.5 | — | — | — | 20 | — | — | — | — | B | — | Unblockable Blade |
| Sword of Night and Flame | 4 | 12 | 12 | 24 | 24 | — | E | E | D | D | — | Night-and-Flame Stance |
| Stone-Sheathed Sword *(SOTE)* | 5 | 16 | 8 | — | — | — | C | D | — | — | — | Square Off |
| Velvet Sword of St. Trina *(SOTE)* | 2.5 | 10 | 12 | 14 | — | — | E | D | E | — | — | Mists of Eternal Sleep |
| Sword of Light *(SOTE)* | 4 | 14 | 11 | — | 24 | — | D | E | — | E | — | Light |
| Sword of Darkness *(SOTE)* | 4 | 14 | 11 | — | — | 24 | D | E | — | — | E | Darkness |

## Greatswords

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Bastard Sword | 9 | 16 | 10 | — | — | — | D | D | — | — | — | Stamp (Upward Cut) |
| Claymore | 9 | 16 | 13 | — | — | — | D | D | — | — | — | Lion's Claw |
| Iron Greatsword | 12 | 18 | 10 | — | — | — | C | E | — | — | — | Stamp (Upward Cut) |
| Lordsworn's Greatsword | 9 | 16 | 10 | — | — | — | D | D | — | — | — | Stamp (Upward Cut) |
| Knight's Greatsword | 10 | 16 | 12 | — | — | — | D | D | — | — | — | Stamp (Upward Cut) |
| Banished Knight's Greatsword | 10 | 17 | 9 | — | — | — | D | D | — | — | — | Stamp (Upward Cut) |
| Forked Greatsword | 9 | 14 | 16 | — | — | — | D | D | — | — | — | Stamp (Upward Cut) |
| Flamberge | 10 | 15 | 14 | — | — | — | D | C | — | — | — | Stamp (Upward Cut) |
| Gargoyle's Greatsword | 11.5 | 18 | 10 | — | — | — | C | E | — | — | — | Vacuum Slice |
| Gargoyle's Blackblade | 11.5 | 18 | 10 | — | 22 | — | D | E | — | D | — | Corpse Wax Cutter |
| Inseparable Sword | 10 | 18 | 18 | — | 20 | — | D | D | — | C | — | Sacred Blade |
| Sword of Milos | 10 | 15 | 19 | — | — | — | D | D | — | — | — | Shriek of Milos |
| Marais Executioner's Sword | 11.5 | 24 | 14 | — | 23 | — | C | E | — | D | — | Eochaid's Dancing Blade |
| Ordovis's Greatsword | 12 | 25 | 13 | — | 15 | — | C | E | — | D | — | Ordovis's Vortex |
| Alabaster Lord's Sword | 8 | 16 | 12 | 18 | — | — | D | E | D | — | — | Alabaster Lord's Pull |
| Death's Poker | 8.5 | 15 | 17 | 11 | — | — | D | D | E | — | — | Ghostflame Ignition |
| Helphen's Steeple | 11.5 | 19 | 10 | 22 | — | — | D | E | D | — | — | Ruinous Ghostflame |
| Blasphemous Blade | 13.5 | 22 | 15 | — | 21 | — | D | D | — | D | — | Taker's Flames |
| Golden Order Greatsword | 10 | 16 | 21 | — | 28 | — | E | D | — | C | — | Establish Order |
| Dark Moon Greatsword | 10 | 16 | 11 | 38 | — | — | D | D | C | — | — | Moonlight Greatsword |
| Sacred Relic Sword | 11 | 14 | 24 | — | 22 | — | E | D | — | D | — | Wave of Gold |
| Lizard Greatsword *(SOTE)* | 9.5 | 14 | 12 | — | — | — | D | D | — | — | — | Stamp (Upward Cut) |
| Greatsword of Damnation *(SOTE)* | 8 | 15 | 20 | — | 20 | — | D | E | — | D | — | Golden Crux |
| Greatsword of Solitude *(SOTE)* | 15.5 | 27 | 13 | — | — | — | B | E | — | — | — | Solitary Moon Slash |

## Colossal Swords

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Zweihander | 15.5 | 19 | 11 | — | — | — | D | D | — | — | — | Stamp (Upward Cut) |
| Greatsword | 23 | 31 | 12 | — | — | — | C | E | — | — | — | Stamp (Upward Cut) |
| Watchdog's Greatsword | 22 | 30 | 10 | — | — | — | C | E | — | — | — | Stamp (Upward Cut) |
| Troll's Golden Sword | 19 | 29 | 10 | — | — | — | D | D | — | — | — | Troll's Roar |
| Troll Knight's Sword | 22 | 20 | 14 | 18 | — | — | D | D | D | — | — | Troll's Roar |
| Royal Greatsword | 20 | 26 | 18 | 22 | — | — | D | E | D | — | — | Wolf's Assault |
| Grafted Blade Greatsword | 21 | 40 | 14 | — | — | — | C | E | — | — | — | Oath of Vengeance |
| Ruins Greatsword | 23 | 50 | — | 16 | — | — | B | — | E | — | — | Wave of Destruction |
| Starscourge Greatsword | 20 | 38 | 12 | 15 | — | — | D | D | E | — | — | Starcaller Cry |
| Godslayer's Greatsword | 17.5 | 20 | 22 | — | 20 | — | D | D | — | D | — | The Queen's Black Flame |
| Maliketh's Black Blade | 22 | 34 | 12 | — | 20 | — | D | E | — | D | — | Destined Death |
| Ancient Meteoric Ore Greatsword *(SOTE)* | 22 | 49 | 10 | — | — | 19 | D | E | — | — | D | White Light Charge |
| Fire Knight's Greatsword *(SOTE)* | 16 | 42 | 18 | — | 12 | — | D | D | — | D | — | Stamp (Upward Cut) |
| Greatsword of Radahn (Light) *(SOTE)* | 26 | 32 | 24 | 15 | — | — | D | D | E | — | — | Lightspeed Slash |
| Greatsword of Radahn (Lord) *(SOTE)* | 20 | 32 | 24 | 15 | — | — | D | D | E | — | — | Promised Consort |
| Moonrithyll's Knight Sword *(SOTE)* | 18 | 20 | 14 | 18 | — | — | D | D | D | — | — | Tremendous Phalanx |

## Thrusting Swords

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Rapier | 2.5 | 7 | 13 | — | — | — | E | C | — | — | — | Impaling Thrust |
| Estoc | 4.5 | 12 | 13 | — | — | — | E | C | — | — | — | Impaling Thrust |
| Noble's Estoc | 3.5 | 9 | 10 | — | — | — | D | D | — | — | — | Impaling Thrust |
| Cleanrot Knight's Sword | 4.0 | 11 | 13 | — | — | — | D | D | — | — | — | Impaling Thrust |
| Rogier's Rapier | 3.5 | 8 | 17 | — | — | — | E | C | — | — | — | Repeating Thrust |
| Antspur Rapier | 3.0 | 10 | 20 | — | — | — | D | D | — | — | — | Impaling Thrust |
| Frozen Needle | 2.5 | 7 | 16 | 13 | — | — | E | D | D | — | — | Impaling Thrust |
| Carian Sorcery Sword *(SOTE)* | 2.5 | 10 | 19 | 16 | — | — | E | D | D | — | — | Impaling Thrust |

## Heavy Thrusting Swords

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Great Épée | 6.5 | 16 | 14 | — | — | — | D | D | — | — | — | Impaling Thrust |
| Godskin Stitcher | 7 | 14 | 17 | — | — | — | D | D | — | — | — | Impaling Thrust |
| Bloody Helice | 8 | 16 | 18 | — | — | 13 | E | D | — | — | D | Dynast's Finesse |
| Dragon King's Cragblade | 8 | 18 | 22 | — | — | — | E | D | — | — | — | Thundercloud Form |
| Queelign's Greatsword *(SOTE)* | 7.5 | 14 | 18 | — | 12 | — | D | D | — | D | — | Impaling Thrust |
| Sword Lance *(SOTE)* | 9 | 11 | 21 | — | — | — | C | E | — | — | — | Impaling Thrust |

## Curved Swords

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Scimitar | 3 | 8 | 10 | — | — | — | D | D | — | — | — | Spinning Slash |
| Falchion | 3.5 | 10 | 13 | — | — | — | D | D | — | — | — | Spinning Slash |
| Shamshir | 3.5 | 7 | 13 | — | — | — | D | D | — | — | — | Spinning Slash |
| Grossmesser | 4.5 | 14 | 12 | — | — | — | D | D | — | — | — | Spinning Slash |
| Bandit's Curved Sword | 5 | 11 | 13 | — | — | — | D | D | — | — | — | Spinning Slash |
| Shotel | 2 | 9 | 19 | — | — | — | E | D | — | — | — | Spinning Slash |
| Scavenger's Curved Sword | 3.5 | 9 | 14 | — | — | — | D | D | — | — | — | Spinning Slash |
| Mantis Blade | 4 | 10 | 12 | — | — | — | D | D | — | — | — | Spinning Slash |
| Beastman's Curved Sword | 4 | 13 | 11 | — | — | — | C | E | — | — | — | Spinning Slash |
| Flowing Curved Sword | 3.5 | 9 | 17 | — | — | — | D | D | — | — | — | Spinning Slash |
| Serpent-God's Curved Sword | 4 | 13 | 9 | — | — | — | D | E | — | — | — | Spinning Slash |
| Magma Blade | 4 | 9 | 15 | 16 | — | — | D | D | D | — | — | Magma Shower |
| Nox Flowing Sword | 3.5 | 8 | 15 | — | — | — | E | D | — | — | — | Flowing Form |
| Wing of Astel | 2.5 | 7 | 17 | 20 | — | — | E | D | D | — | — | Nebula |
| Eclipse Shotel | 3 | 14 | 24 | — | 25 | — | E | D | — | D | — | Death Flare |
| Spirit Sword *(SOTE)* | 2.5 | 8 | 16 | — | 16 | — | E | D | — | D | — | Rancor Slash |
| Falx *(SOTE)* | 4 | 13 | 15 | — | 14 | — | D | D | — | D | — | Revenger's Blade |
| Dancing Blade of Ranah *(SOTE)* | 3.5 | 9 | 20 | — | — | — | — | D | — | — | — | Unending Dance |
| Horned Warrior's Sword *(SOTE)* | 5 | 11 | 14 | — | 14 | — | D | D | — | D | — | Horn Calling |

## Curved Greatswords

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Dismounter | 6 | 19 | 16 | — | — | — | D | D | — | — | — | Spinning Slash |
| Omen Cleaver | 11.5 | 19 | 16 | — | — | — | D | D | — | — | — | Spinning Slash |
| Monk's Flameblade | 9 | 18 | 18 | — | — | — | D | D | — | — | — | Spinning Slash |
| Beastman's Cleaver | 16.5 | 25 | 14 | — | — | — | C | — | — | — | — | Spinning Slash |
| Bloodhound's Fang | 11.5 | 18 | 17 | — | — | — | D | C | — | — | — | Bloodhound's Finesse |
| Onyx Lord's Greatsword | 11.5 | 20 | 16 | 16 | — | — | D | E | D | — | — | Onyx Lord's Repulsion |
| Zamor Curved Sword | 9 | 16 | 18 | — | — | — | D | D | — | — | — | Zamor Ice Storm |
| Magma Wyrm's Scalesword | 15 | 24 | 15 | — | 18 | — | C | D | — | D | — | Magma Guillotine |
| Morgott's Cursed Sword | 7.5 | 14 | 23 | — | 17 | — | E | C | — | D | — | Cursed-Blood Slice |
| Horned Warrior's Greatsword *(SOTE)* | 22 | 19 | 16 | — | 13 | — | D | D | — | D | — | Horn Calling: Storm |
| Freyja's Greatsword *(SOTE)* | 6 | 25 | 14 | — | — | — | C | E | — | — | — | Spinning Slash |

## Katanas

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Uchigatana | 5.5 | 11 | 15 | — | — | — | D | D | — | — | — | Unsheathe |
| Nagakiba | 7 | 18 | 22 | — | — | — | D | C | — | — | — | Piercing Fang |
| Serpentbone Blade | 6 | 11 | 22 | — | — | — | E | B | — | — | — | Double Slash |
| Meteoric Ore Blade | 7.5 | 15 | 14 | 18 | — | — | D | E | D | — | — | Gravitas |
| Moonveil | 6.5 | 12 | 18 | 23 | — | — | E | D | C | — | — | Transient Moonlight |
| Rivers of Blood | 6.5 | 12 | 18 | — | — | 20 | E | D | — | — | D | Corpse Piler |
| Dragonscale Blade | 5.5 | 12 | 20 | — | — | — | D | C | — | — | — | Ice Lightning Sword |
| Hand of Malenia | 7 | 16 | 48 | — | — | — | E | C | — | — | — | Waterfowl Dance |
| Star-Lined Sword *(SOTE)* | 5 | 10 | 23 | 21 | — | — | E | C | D | — | — | Onze's Line of Stars |
| Sword of Night *(SOTE)* | 6.5 | 11 | 20 | — | — | — | — | C | — | — | — | Witching Hour Slash |

## Twinblades

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Twinblade | 7 | 10 | 18 | — | — | — | D | D | — | — | — | Spinning Slash |
| Twinned Knight Swords | 8 | 16 | 18 | — | — | — | D | E | — | — | — | Spinning Slash |
| Godskin Peeler | 8 | 17 | 22 | — | — | — | E | C | — | — | — | Black Flame Tornado |
| Gargoyle's Twinblade | 8.5 | 18 | 15 | — | — | — | C | E | — | — | — | Spinning Slash |
| Gargoyle's Black Blades | 8.5 | 18 | 15 | — | 22 | — | C | E | — | D | — | Spinning Slash |
| Eleonora's Poleblade | 6 | 12 | 21 | — | — | 19 | E | D | — | — | D | Bloodblade Dance |
| Black Steel Twinblade *(SOTE)* | 8 | 18 | 31 | — | 13 | — | D | D | — | D | — | Spinning Slash |
| Euporia *(SOTE)* | 8.5 | 16 | 16 | — | 24 | — | D | D | — | D | — | Euporia Vortex |

## Axes

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Hand Axe | 3.5 | 8 | 8 | — | — | — | D | D | — | — | — | Quickstep |
| Forked Hatchet | 2.5 | 9 | 14 | — | — | — | D | D | — | — | — | Quickstep |
| Icerind Hatchet | 3 | 11 | 16 | — | — | — | E | D | — | — | — | Hoarfrost Stomp |
| Battle Axe | 4.5 | 14 | 9 | — | — | — | D | D | — | — | — | Wild Strikes |
| Celebrant's Cleaver | 4.5 | 12 | 8 | — | — | — | D | D | — | — | — | Wild Strikes |
| Jawbone Axe | 5.5 | 14 | 8 | — | — | — | D | E | — | — | — | Wild Strikes |
| Sacrificial Axe | 5.5 | 16 | 10 | — | — | — | D | D | — | — | — | Wild Strikes |
| Iron Cleaver | 6 | 15 | 7 | — | — | — | C | E | — | — | — | Wild Strikes |
| Highland Axe | 4.5 | 14 | 13 | — | — | — | D | D | — | — | — | War Cry |
| Warped Axe | 7.5 | 24 | 8 | — | — | — | C | — | — | — | — | War Cry |
| Stormhawk Axe | 5.5 | 12 | 16 | — | — | — | D | D | — | — | — | Thunderstorm |
| Rosus' Axe | 5.5 | 18 | 10 | 18 | — | — | D | E | D | — | — | Rosus's Summons |
| Ripple Blade | 4.5 | 11 | 11 | — | — | 20 | — | — | — | — | A | Wild Strikes |
| Forked-Tongue Hatchet *(SOTE)* | 4 | 13 | 10 | — | — | — | D | C | — | — | — | Dragonform Flame |
| Smithscript Axe *(SOTE)* | 5 | 13 | 10 | 11 | 11 | — | D | D | E | E | — | Wild Strikes |
| Messmer Soldier's Axe *(SOTE)* | 5.5 | 14 | 10 | — | — | — | D | D | — | — | — | War Cry |
| Death Knight's Twin Axes *(SOTE)* | 5.5 | 14 | 12 | — | 16 | — | D | D | — | D | — | Blinkbolt: Twinaxe |

## Greataxes

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Greataxe | 13 | 30 | 8 | — | — | — | D | D | — | — | — | Barbaric Roar |
| Crescent Moon Axe | 12.5 | 22 | 12 | 18 | — | — | D | D | — | — | — | War Cry |
| Longhaft Axe | 12.5 | 24 | 8 | — | — | — | D | D | — | — | — | War Cry |
| Executioner's Greataxe | 15 | 34 | 8 | — | — | — | C | E | — | — | — | War Cry |
| Great Omenkiller Cleaver | 11 | 23 | 10 | — | — | — | D | D | — | — | — | Wild Strikes |
| Rusted Anchor | 12.5 | 26 | 8 | — | — | — | C | E | — | — | — | Barbaric Roar |
| Butchering Knife | 8.5 | 16 | 8 | — | — | — | E | C | — | — | — | Barbaric Roar |
| Gargoyle's Great Axe | 8.5 | 24 | 8 | — | — | — | C | E | — | — | — | War Cry |
| Gargoyle's Black Axe | 8.5 | 24 | 8 | — | 22 | — | D | E | — | D | — | War Cry |
| Winged Greathorn | 11 | 22 | 14 | — | — | — | D | D | — | — | — | Soul Stifler |
| Axe of Godrick | 11 | 34 | 22 | — | — | — | D | D | — | — | — | I Command Thee, Kneel! |
| Putrescence Cleaver *(SOTE)* | 13.5 | 28 | 12 | — | 18 | — | D | E | — | D | — | Spinning Guillotine |
| Death Knight's Longhaft Axe *(SOTE)* | 11.5 | 23 | 8 | — | 18 | — | D | E | — | D | — | Blinkbolt: Long-hafted Axe |
| Bonny Butchering Knife *(SOTE)* | 11 | 16 | 11 | — | — | — | C | D | — | — | — | Hone Blade |

## Hammers

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Club | 3.5 | 8 | — | — | — | — | C | — | — | — | — | Kick |
| Curved Club | 5 | 7 | — | — | — | — | D | E | — | — | — | Barbaric Roar |
| Spiked Club | 5 | 7 | — | — | — | — | D | D | — | — | — | Barbaric Roar |
| Stone Club | 7 | 8 | — | — | — | — | C | E | — | — | — | Kick |
| Mace | 4.5 | 14 | 8 | — | — | — | D | D | — | — | — | Kick |
| Morning Star | 5 | 13 | 9 | — | — | — | D | D | — | — | — | Kick |
| Warpick | 2.5 | 9 | — | — | — | — | D | D | — | — | — | Kick |
| Hammer | 6.5 | 12 | 8 | — | — | — | D | D | — | — | — | Kick |
| Monk's Flamemace | 6 | 13 | 13 | — | — | — | E | D | — | — | — | Kick |
| Varre's Bouquet | 2 | 8 | 16 | — | — | 24 | E | D | — | — | C | Blood Tax |
| Envoy's Horn | 4 | 10 | 12 | — | 16 | — | D | D | — | D | — | Oracular Bubble |
| Nox Flowing Hammer | 6.5 | 17 | 7 | — | — | — | B | D | — | — | — | Flowing Form |
| Ringed Finger | 4.5 | 15 | 9 | — | — | — | D | D | — | — | — | Claw Flick |
| Scepter of the All-Knowing | 4.5 | 12 | 18 | 21 | — | — | E | D | D | — | — | Knowledge Above All |
| Marika's Hammer *(SOTE)* | 6 | 20 | 12 | — | 19 | — | D | D | — | D | — | Gold Breaker |
| Flowerstone Gavel *(SOTE)* | 15 | 18 | 6 | — | — | 15 | D | D | — | — | D | Flower Dragonbolt |

## Great Hammers

> Heads-up: Str requirements in this category extracted as ~+14 inflated;
> treat them as approximate. Real Great Club ≈ 30 Str, Pickaxe ≈ 24 Str.

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Large Club / Great Club | 8.5 | 38 | — | — | — | — | C | — | — | — | — | Barbaric Roar |
| Curved Great Club | 10 | 44 | 10 | — | — | — | D | D | — | — | — | Barbaric Roar |
| Great Mace | 11.5 | 46 | — | — | — | — | C | — | — | — | — | Endure |
| Pickaxe | 10 | 44 | 10 | — | — | — | D | D | — | — | — | Endure |
| Brick Hammer | 12.5 | 48 | — | — | — | — | B | — | — | — | — | Barbaric Roar |
| Battle Hammer | 10 | 44 | 8 | — | — | — | C | E | — | — | — | Braggart's Roar |
| Rotten Battle Hammer | 10 | 44 | 8 | — | — | — | C | E | — | — | — | Braggart's Roar |
| Celebrant's Skull | 8.5 | 40 | 12 | — | — | — | E | D | — | — | — | Barbaric Roar |
| Great Stars | 10 | 44 | 12 | — | — | — | D | D | — | — | — | Endure |
| Greathorn Hammer | 10 | 42 | 10 | — | — | — | D | D | — | — | — | Barbaric Roar |
| Envoy's Long Horn | 9.5 | 39 | 11 | — | 18 | — | D | D | — | D | — | Bubble Shower |
| Devourer's Scepter | 11.5 | 42 | 13 | — | 25 | — | D | D | — | D | — | Devourer of Worlds |
| Black Steel Greathammer *(SOTE)* | 12 | 42 | — | — | 17 | — | C | E | — | D | — | Endure |
| Smithscript Greathammer *(SOTE)* | 9 | 41 | 11 | 11 | — | — | C | E | E | D | — | Endure |
| Cranial Vessel Candlestand *(SOTE)* | 12.5 | 48 | 8 | — | 22 | — | D | E | — | D | — | Surge of Faith |
| Beastclaw Greathammer *(SOTE)* | 9 | 42 | 10 | — | 18 | — | D | D | — | D | — | Regal Beastclaw |

## Flails

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Flail | 5 | 9 | 13 | — | — | — | D | C | — | — | — | Spinning Chain |
| Nightrider Flail | 6 | 14 | 13 | — | — | — | D | B | — | — | — | Spinning Chain |
| Chainlink Flail | 8 | 13 | 12 | — | — | — | B | E | — | — | — | Spinning Chain |
| Family Heads | 5.5 | 8 | 18 | 16 | — | — | D | A | D | — | — | Familial Rancor |
| Bastard's Stars | 5.5 | 8 | 22 | 22 | — | — | D | C | A | — | — | Nebula |
| Serpent Flail *(SOTE)* | 6 | 10 | 24 | — | 21 | — | E | D | — | D | — | Flare, O Serpent |

## Spears

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Short Spear | 4 | 10 | 10 | — | — | — | D | D | — | — | — | Impaling Thrust |
| Iron Spear | 4.5 | 11 | 13 | — | — | — | D | D | — | — | — | Charge Forth |
| Spear | 4.5 | 10 | 12 | — | — | — | E | C | — | — | — | Impaling Thrust |
| Partisan | 6.5 | 15 | 12 | — | — | — | D | D | — | — | — | Impaling Thrust |
| Pike | 7.5 | 16 | 11 | — | — | — | D | D | — | — | — | Charge Forth |
| Spiked Spear | 6 | 14 | 16 | — | — | — | D | D | — | — | — | Impaling Thrust |
| Cross-Naginata | 8 | 16 | 20 | — | — | — | D | C | — | — | — | Impaling Thrust |
| Clayman's Harpoon | 5.5 | 12 | 10 | 12 | — | — | D | E | D | — | — | Impaling Thrust |
| Celebrant's Rib-Rake | 5 | 8 | 14 | — | — | — | E | D | — | — | — | Barbaric Roar |
| Torchpole | 6 | 14 | 15 | — | — | — | D | E | — | — | — | Charge Forth |
| Inquisitor's Girandole | 7.5 | 18 | 15 | — | 16 | — | D | D | — | D | — | Charge Forth |
| Crystal Spear | 5.5 | 10 | 16 | 16 | — | — | E | D | E | — | — | Impaling Thrust |
| Rotten Crystal Spear | 5.5 | 10 | 16 | 16 | — | — | E | D | E | — | — | Charge Forth |
| Cleanrot Spear | 5.5 | 16 | 16 | — | 14 | — | D | D | — | D | — | Sacred Phalanx |
| Death Ritual Spear | 6.5 | 14 | 20 | 18 | — | — | E | D | D | — | — | Spearcall Ritual |
| Bolt of Gransax | 8.5 | 20 | 40 | — | — | — | D | D | — | — | — | Ancient Lightning Spear |
| Smithscript Spear *(SOTE)* | 4 | 9 | 12 | 11 | 11 | — | D | D | E | E | — | Impaling Thrust |
| Swift Spear *(SOTE)* | 3 | 10 | 26 | — | — | — | — | C | — | — | — | Impaling Thrust |
| Bloodfiend's Fork *(SOTE)* | 4.5 | 8 | 14 | — | — | 13 | D | E | — | — | D | Barbaric Roar |

## Great Spears

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Lance | 9 | 20 | 14 | — | — | — | D | D | — | — | — | Charge Forth |
| Treespear | 9.5 | 20 | 16 | — | 18 | — | D | D | — | D | — | Sacred Order |
| Vyke's War Spear | 8 | 16 | 20 | — | 14 | — | E | B | — | C | — | Frenzyflame Thrust |
| Serpent-Hunter | 12 | — | — | — | — | — | B | E | — | — | — | Great-Serpent Hunt |
| Siluria's Tree | 10 | 27 | 13 | — | 20 | — | D | E | — | D | — | Siluria's Woe |
| Mohgwyn's Sacred Spear | 10 | 24 | 14 | — | 27 | 10 | D | E | — | D | C | Bloodboon Ritual |
| Bloodfiend's Sacred Spear *(SOTE)* | 8 | 12 | 8 | — | 13 | — | E | E | — | C | — | Bloodfiends' Bloodboon |
| Messmer Soldier's Spear *(SOTE)* | 8.5 | 16 | 8 | — | — | — | D | — | — | — | — | Impaling Thrust |
| Spear of the Impaler *(SOTE)* | 9.5 | 14 | 35 | 18 | — | — | E | C | D | — | — | Messmer's Assault |
| Barbed Staff-Spear *(SOTE)* | 7.5 | 14 | 18 | 22 | — | — | E | E | C | — | — | Jori's Inquisition |

## Halberds

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Halberd | 8 | 16 | 13 | — | — | — | D | D | — | — | — | Charge Forth |
| Banished Knight's Halberd | 8 | 18 | 17 | — | — | — | D | D | — | — | — | Charge Forth |
| Lucerne | 7 | 13 | 16 | — | — | — | D | C | — | — | — | Charge Forth |
| Glaive | 10 | 18 | 15 | — | — | — | D | D | — | — | — | Spinning Slash |
| Vulgar Militia Shotel | 8 | 16 | 13 | — | — | — | E | C | — | — | — | Spinning Slash |
| Vulgar Militia Saw | 8 | 16 | 13 | — | — | — | D | D | — | — | — | Spinning Slash |
| Guardian's Swordspear | 9 | 16 | 13 | — | — | — | E | C | — | — | — | Spinning Slash |
| Nightrider Glaive | 12 | 18 | 15 | — | — | — | C | E | — | — | — | Spinning Slash |
| Pest's Glaive | 7 | 13 | 13 | — | — | — | D | D | — | — | — | Spinning Slash |
| Gargoyle's Halberd | 12 | 18 | 15 | — | — | — | C | E | — | — | — | Spinning Slash |
| Gargoyle's Black Halberd | 12 | 18 | 15 | — | 16 | — | C | E | — | D | — | Spinning Slash |
| Ripple Crescent Halberd | 8.5 | 13 | 13 | — | — | 16 | — | — | — | — | B | Spinning Slash |
| Golden Halberd | 13.5 | 16 | 13 | — | 12 | — | D | E | — | D | — | Golden Vow |
| Dragon Halberd | 10.5 | 16 | 13 | — | — | — | D | D | — | — | — | Spinning Slash |
| Loretta's War Sickle | 10 | 16 | 13 | 13 | — | — | D | D | D | — | — | Loretta's Slash |
| Commander's Standard | 11.5 | 16 | 14 | — | 15 | — | D | D | — | — | — | Rallying Standard |
| Spirit Glaive | 6.5 | 16 | 17 | 16 | — | — | D | C | D | — | — | Rancor Slash |
| Poleblade of the Bud *(SOTE)* | 10 | 14 | 22 | — | — | 20 | E | D | — | — | D | Romina's Purification |

## Reapers

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Scythe | 7.5 | 14 | 17 | — | — | — | D | B | — | — | — | Spinning Slash |
| Grave Scythe | 9.5 | 17 | 13 | — | — | — | D | D | — | — | — | Spinning Slash |
| Halo Scythe | 8.5 | 13 | 16 | — | 16 | — | D | D | — | D | — | Miquella's Ring of Light |
| Winged Scythe | 7.5 | 16 | 16 | — | 24 | — | E | D | — | D | — | Angel's Wings |
| Obsidian Lamina *(SOTE)* | 6.5 | 12 | 28 | — | — | 17 | E | C | — | — | D | Dynastic Sickleplay |

## Whips

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Whip | 2 | 7 | 15 | — | — | — | D | C | — | — | — | Kick |
| Thorned Whip | 2.5 | 7 | 15 | — | — | — | E | B | — | — | — | Kick |
| Urumi | 3 | 11 | 22 | — | — | — | E | B | — | — | — | Kick |
| Hoslow's Petal Whip | 3.5 | 14 | 18 | — | — | 10 | D | D | — | — | — | Kick |
| Magma Whip Candlestick | 2.5 | 7 | 15 | — | 18 | — | E | D | — | D | — | Sea of Magma |
| Giant's Red Braid | 2.5 | 12 | 15 | — | 21 | — | D | D | — | D | — | Flame Dance |
| Tooth Whip *(SOTE)* | 3 | 16 | 24 | — | — | — | E | D | — | — | — | Painful Strike |

## Fists

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Caestus | 1.5 | 8 | 8 | — | — | — | D | D | — | — | — | Endure |
| Spiked Caestus | 2 | 8 | 10 | — | — | — | D | D | — | — | — | Endure |
| Katar | 2.5 | 8 | 10 | — | — | — | D | D | — | — | — | Impaling Thrust |
| Iron Ball | 2.5 | 11 | 8 | — | — | — | D | E | — | — | — | Endure |
| Star Fist | 3 | 12 | 8 | — | — | — | D | E | — | — | — | Endure |
| Clinging Bone | 3 | 8 | 22 | — | — | — | E | C | — | — | C | Lifesteal Fist |
| Veteran's Prosthesis | 4 | 15 | 12 | — | — | — | D | D | — | — | — | Storm Kick |
| Cipher Pata | — | — | — | — | 30 | — | — | — | — | C | — | Unblockable Blade |
| Grafted Dragon | 2.5 | 14 | 9 | — | 12 | — | D | D | — | D | — | Bear Witness! |
| Pata | 4 | 11 | 15 | — | — | — | D | D | — | — | — | Impaling Thrust |
| Golem Fist | 5 | 8 | 11 | 11 | 11 | — | C | E | E | E | — | Endure |
| Thiollier's Hidden Needle *(SOTE)* | 0.5 | 10 | 16 | 15 | — | — | E | C | D | — | — | Sleep Evermore |
| Poisoned Hand *(SOTE)* | 1 | 8 | — | — | — | 28 | E | — | — | — | C | Poison Spear-Hand Strike |
| Madding Hand *(SOTE)* | 1 | 8 | 13 | 20 | — | — | D | E | E | — | — | Madding Spear-Hand Strike |

## Claws

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Hookclaws | 2 | 6 | 12 | — | — | — | E | B | — | — | — | Quickstep |
| Venomous Fang | 2.5 | 7 | 13 | — | — | — | D | C | — | — | — | Quickstep |
| Bloodhound Claws | 3 | 9 | 16 | — | — | — | D | D | — | — | — | Bloodhound's Step |
| Raptor Talons | 1.5 | 9 | 20 | — | — | — | E | C | — | — | — | Quickstep |
| Claws of Night *(SOTE)* | 3 | 8 | 18 | — | — | 11 | C | — | — | — | — | Scattershot Throw |

## Colossal Weapons

> Heads-up: this category's Str column appears slightly inflated and the
> Dex column is unreliable in the scraped data. Cross-validate before
> publishing exact numbers. Real Giant-Crusher = Str 60, Dex 12.

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Duelist Greataxe | 20 | 23 | 14 | — | — | — | E | D | — | — | — | Endure |
| Rotten Greataxe | 20 | 23 | 14 | — | — | — | E | D | — | — | — | Endure |
| Golem's Halberd | 21.5 | 30 | 14 | — | — | — | D | D | — | — | — | Charge Forth |
| Giant-Crusher | 26.5 | 60 | 12 | — | — | — | C | — | — | — | — | Endure |
| Prelate's Inferno Crozier | 23.5 | 38 | 15 | — | 14 | — | C | E | — | — | — | Prelate's Charge |
| Great Club (colossal) | 17 | 30 | 8 | — | — | — | C | — | — | — | — | Golden Land |
| Troll's Hammer | 16 | 32 | 10 | — | 10 | — | C | E | — | D | — | Troll's Roar |
| Dragon Greatclaw | 16 | 38 | 12 | — | — | — | D | D | — | — | — | Endure |
| Watchdog's Staff | 19 | 32 | 10 | — | — | — | D | D | — | — | — | Sorcery of the Crozier |
| Staff of the Avatar | 20 | 34 | 12 | — | 24 | — | C | E | — | D | — | Erdtree Slam |
| Rotten Staff | 18 | 32 | 12 | — | — | — | D | E | — | — | — | Erdtree Slam |
| Envoy's Greathorn | 19.5 | 32 | 10 | — | 24 | — | D | D | — | E | — | Great Oracular Bubble |
| Ghiza's Wheel | 19 | 30 | 10 | — | — | — | D | D | — | — | — | Spinning Wheel |
| Fallingstar Beast Jaw | 21.5 | 34 | 12 | 20 | — | — | D | D | E | — | — | Gravity Bolt |
| Axe of Godfrey | 18 | 34 | 22 | — | — | — | D | D | — | — | — | Regal Roar |
| Bloodfiend's Arm *(SOTE)* | 20 | 24 | 12 | — | — | 16 | D | E | — | — | D | Endure |
| Anvil Hammer *(SOTE)* | 22 | 39 | 13 | — | 20 | — | C | E | E | D | — | Smithing Art Spears |
| Devonia's Hammer *(SOTE)* | 20 | 30 | 12 | — | 19 | — | C | E | — | D | — | Devonia's Vortex |
| Shadow Sunflower Blossom *(SOTE)* | 16 | 24 | 14 | — | 25 | — | D | E | — | D | — | Shadow Sunflower Headbutt |
| Gazing Finger *(SOTE)* | 15 | 20 | 14 | 14 | 15 | 31 | C | — | D | E | — | Kowtower's Resentment |

---

## SOTE-only categories

### Light Greatswords (SOTE)

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Milady | 6.5 | 10 | 15 | — | — | — | D | C | — | — | — | Impaling Thrust |
| Leda's Sword | 7.5 | 11 | 22 | — | 19 | — | E | C | — | D | — | Needle Piercer |
| Rellana's Twin Blades | 8 | 13 | 16 | 16 | 16 | — | D | D | D | D | — | Moon-and-Fire Stance |

### Great Katanas (SOTE)

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Great Katana | 9 | 15 | 19 | — | — | — | D | D | — | — | — | Overhead Stance |
| Dragon-Hunter's Great Katana | 10.5 | 17 | 20 | — | — | — | D | D | — | — | — | Dragonwound Slash |
| Rakshasa's Great Katana | 9.5 | 12 | 27 | — | — | — | E | C | — | — | — | Weed Cutter |

### Backhand Blades (SOTE)

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Backhand Blade | 2 | 7 | 14 | — | — | — | D | D | — | — | — | Blind Spot |
| Smithscript Cirque | 2 | 8 | 14 | 11 | 11 | — | D | C | E | E | — | Blind Spot |
| Curseblade's Cirque | 4.5 | 8 | 19 | — | — | — | D | B | — | — | — | Deadly Dance |

### Throwing Blades (SOTE)

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Smithscript Dagger | 1.5 | 7 | 16 | 11 | 11 | — | E | C | E | E | — | Piercing Throw |

### Hand-to-Hand Arts (SOTE)

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Dryleaf Arts | 1 | 10 | 12 | — | — | — | D | D | — | — | — | Palm Blast |
| Dane's Footwork | 1 | 9 | 18 | — | — | — | D | D | — | — | — | Palm Blast |

### Beast Claws (SOTE)

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Beast Claw | 3 | 12 | 17 | — | — | — | D | D | — | — | — | Savage Claws |
| Red Bear's Claw | 4 | 15 | 13 | — | — | — | C | D | — | — | — | Red Bear Hunt |

### Perfume Bottles (SOTE)

| Name | Wt | Str | Dex | Int | Fai | Arc | Str | Dex | Int | Fai | Arc | Skill |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Firespark Perfume Bottle | 1 | 8 | 14 | — | — | — | — | C | — | — | — | Kick |
| Chilling Perfume Bottle | 1 | 8 | 14 | 13 | — | — | — | D | D | — | — | Kick |
| Frenzyflame Perfume Bottle | 1 | 8 | 14 | 12 | 12 | — | E | C | D | D | — | Kick |
| Lightning Perfume Bottle | 1 | 8 | 18 | — | 13 | — | — | C | — | C | — | Kick |
| Deadly Poison Perfume Bottle | 1 | 8 | 16 | — | — | 13 | — | C | — | — | C | Deadly Poison Spray |

---

## Recommender summary (per-category at-a-glance)

This synthesizes the tables above into the rough archetypes the recommender
should use when matching a weapon to stats / starting class:

| Category | Archetype | Primary stat(s) | Typical Str req | Typical Dex req | Notes |
|---|---|---|---|---|---|
| Daggers | Quality, low req | Dex | 5–10 | 9–14 | Many take INT/FTH/ARC secondary scaling. |
| Straight Swords | Quality | Str + Dex | 8–13 | 8–14 | Caster hybrids (Carian, Lazuli) need INT 13–18. |
| Greatswords | Quality / Str-leaning | Str | 14–25 | 9–24 | Many unique greatswords scale with FTH. |
| Colossal Swords | Heavy Str | Str | 19–50+ | 10–24 | Almost all benefit from 2-handing for Str efficiency. |
| Thrusting Swords | Dex | Dex | 7–12 | 13–20 | Counter-attack damage is the draw. |
| Heavy Thrusting Swords | Quality | Str + Dex | 14–18 | 14–22 | Stagger + thrust hybrid. |
| Curved Swords | Dex | Dex | 7–14 | 9–19 | Wing of Astel is INT, Eclipse Shotel hybrid. |
| Curved Greatswords | Quality / Str | Str + Dex | 14–25 | 14–23 | Bloodhound's Fang and Morgott's Cursed Sword are unique. |
| Katanas | Dex / Bleed | Dex | 11–18 | 15–48 | Hand of Malenia has the highest Dex req in the game. |
| Twinblades | Dex | Dex | 10–18 | 15–31 | Eleonora's Poleblade is Arc+Dex bleed. |
| Axes | Quality | Str | 8–18 | 7–16 | War Cry stagger break. |
| Greataxes | Str | Str | 22–34 | 8–22 | Best 2H Str payoff. |
| Hammers | Str | Str | 7–17 | 0–18 | Strike damage; many have no Dex req. |
| Great Hammers | Heavy Str | Str | 30–48 | 0–13 | Best stagger; pair with 2H. |
| Flails | Dex / Hybrid | Dex | 8–14 | 12–24 | Family Heads and Bastard's Stars are casters. |
| Spears | Quality | Str + Dex | 8–20 | 10–40 | Long reach + shield-friendly. |
| Great Spears | Str + Dex | Str + Dex | 16–27 | 8–35 | Charge-attack scaling. |
| Halberds | Quality | Str + Dex | 13–18 | 13–22 | Most versatile mid-game class. |
| Reapers | Quality + Fai | Dex (some Fai) | 12–17 | 13–28 | Sweep range, unique Ash of Wars. |
| Whips | Dex | Dex | 7–16 | 15–24 | High base bleed/status options. |
| Fists | Quality | Str + Dex | 8–15 | 8–22 | Light, paired weapons. |
| Claws | Dex | Dex | 6–9 | 12–20 | Innate bleed (except Venomous Fang). |
| Colossal Weapons | Heaviest Str | Str | 23–60 | 8–22 | The heaviest stagger weapons in the game. |
| Light Greatswords *(SOTE)* | Dex | Dex | 10–13 | 15–22 | Backstep + thrust attacks. |
| Great Katanas *(SOTE)* | Dex | Dex | 12–17 | 19–27 | Stance-break heavy. |
| Backhand Blades *(SOTE)* | Dex | Dex | 7–8 | 14–19 | Off-hand focused. |
| Throwing Blades *(SOTE)* | Quality | Dex | 7 | 16 | Single weapon, ranged. |
| Hand-to-Hand Arts *(SOTE)* | Quality | Str + Dex | 9–10 | 12–18 | Martial-arts paired weapons. |
| Beast Claws *(SOTE)* | Str | Str | 12–15 | 13–17 | Heavier than regular Claws. |
| Perfume Bottles *(SOTE)* | Caster / Status | Dex + element | 8 | 14–18 | Spell-tool / melee hybrid. |

---

## Open data still to gather

For a complete recommender, the next passes should pull:

- **Bows, Crossbows, Ballistas** — for archer / hybrid builds.
- **Glintstone Staves** — INT scaling, sorcery boost.
- **Sacred Seals** — FTH scaling, incantation boost.
- **Shields / Greatshields / Torches** — Str-leaning, often used off-hand.
- **Affinity-changed scaling letters** — for each weapon, how Heavy / Keen /
  Quality / Fire / Flame Art / Lightning / Sacred / Magic / Cold / Poison /
  Blood / Occult re-affinity shifts the scaling letters.

And then the **starting classes** (Vagabond, Warrior, Hero, Bandit,
Astrologer, Prophet, Samurai, Prisoner, Confessor, Wretch) with their base
stat spreads and starting equipment.
