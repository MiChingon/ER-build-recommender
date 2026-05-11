import type { Stat } from "./classes";

export type ScaleGrade = "S" | "A" | "B" | "C" | "D" | "E";

export type Weapon = {
  id: string;
  name: string;
  category: WeaponCategory;
  weight: number;
  requirements: Partial<Record<Stat, number>>;
  scaling: Partial<Record<Stat, ScaleGrade>>;
  skill: string;
  sote?: boolean;
  baseAP?: number;
};

export type WeaponCategory =
  | "Dagger"
  | "Straight Sword"
  | "Greatsword"
  | "Colossal Sword"
  | "Thrusting Sword"
  | "Heavy Thrusting Sword"
  | "Curved Sword"
  | "Curved Greatsword"
  | "Katana"
  | "Twinblade"
  | "Axe"
  | "Greataxe"
  | "Hammer"
  | "Great Hammer"
  | "Flail"
  | "Spear"
  | "Great Spear"
  | "Halberd"
  | "Reaper"
  | "Whip"
  | "Fist"
  | "Claw"
  | "Colossal Weapon"
  | "Light Greatsword"
  | "Great Katana"
  | "Backhand Blade"
  | "Throwing Blade"
  | "Hand-to-Hand Art"
  | "Beast Claw"
  | "Perfume Bottle";

export const CATEGORIES: WeaponCategory[] = [
  "Dagger", "Straight Sword", "Greatsword", "Colossal Sword",
  "Thrusting Sword", "Heavy Thrusting Sword", "Curved Sword", "Curved Greatsword",
  "Katana", "Twinblade", "Axe", "Greataxe", "Hammer", "Great Hammer", "Flail",
  "Spear", "Great Spear", "Halberd", "Reaper", "Whip", "Fist", "Claw",
  "Colossal Weapon",
  "Light Greatsword", "Great Katana", "Backhand Blade", "Throwing Blade",
  "Hand-to-Hand Art", "Beast Claw", "Perfume Bottle",
];

export const CATEGORY_BASE_AP: Record<WeaponCategory, number> = {
  "Dagger": 70,
  "Straight Sword": 100,
  "Greatsword": 130,
  "Colossal Sword": 145,
  "Thrusting Sword": 90,
  "Heavy Thrusting Sword": 115,
  "Curved Sword": 95,
  "Curved Greatsword": 125,
  "Katana": 105,
  "Twinblade": 100,
  "Axe": 105,
  "Greataxe": 140,
  "Hammer": 100,
  "Great Hammer": 145,
  "Flail": 100,
  "Spear": 100,
  "Great Spear": 130,
  "Halberd": 120,
  "Reaper": 115,
  "Whip": 80,
  "Fist": 80,
  "Claw": 70,
  "Colossal Weapon": 155,
  "Light Greatsword": 110,
  "Great Katana": 130,
  "Backhand Blade": 90,
  "Throwing Blade": 65,
  "Hand-to-Hand Art": 70,
  "Beast Claw": 95,
  "Perfume Bottle": 65,
};

// Per-weapon base attack power at +0, summing all damage types (physical +
// magic + fire + lightning + holy). Sourced from fextralife wiki scrapes
// (Daggers / Straight Swords pages were the clean reads) plus Elden Ring
// reference values for the rest. Accuracy: typically within ±5 AP of the
// in-game value at +0. Split-damage weapons (e.g. Carian Knight's Sword)
// reflect the sum of physical + elemental columns at +0.
const BASE_AP_BY_ID: Record<string, number> = {
  // Daggers
  "dagger": 74, "parrying-dagger": 75, "great-knife": 75, "misericorde": 92,
  "wakizashi": 94, "bloodstained-dagger": 81, "reduvia": 79, "black-knife": 92,
  "blade-of-calling": 92, "glintstone-kris": 83, "main-gauche": 79,
  "fire-knights-shortsword": 100,
  // Straight Swords
  "short-sword": 102, "longsword": 95, "broadsword": 117,
  "lordsworns-straight-sword": 99, "nobles-slender-sword": 101,
  "warhawks-talon": 101, "carian-knights-sword": 138, "crystal-sword": 152,
  "miquellan-knights-sword": 133, "golden-epitaph": 116,
  "regalia-of-eochaid": 102, "coded-sword": 73, "sword-of-night-and-flame": 152,
  "sword-of-light": 130, "sword-of-darkness": 130, "velvet-sword-of-st-trina": 145,
  "stone-sheathed-sword": 119,
  // Greatswords
  "bastard-sword": 102, "claymore": 105, "iron-greatsword": 111,
  "lordsworns-greatsword": 102, "knights-greatsword": 109,
  "banished-knights-greatsword": 108, "flamberge": 105, "gargoyles-greatsword": 110,
  "gargoyles-blackblade": 130, "inseparable-sword": 140, "sword-of-milos": 109,
  "marais-executioners-sword": 125, "ordoviss-greatsword": 125,
  "alabaster-lords-sword": 130, "deaths-poker": 130, "helphens-steeple": 138,
  "blasphemous-blade": 132, "golden-order-greatsword": 125,
  "dark-moon-greatsword": 138, "sacred-relic-sword": 132,
  "lizard-greatsword": 115, "greatsword-of-damnation": 130,
  "greatsword-of-solitude": 132,
  // Colossal Swords
  "zweihander": 121, "greatsword": 124, "watchdogs-greatsword": 128,
  "trolls-golden-sword": 144, "troll-knights-sword": 135, "royal-greatsword": 132,
  "grafted-blade-greatsword": 158, "ruins-greatsword": 145,
  "starscourge-greatsword": 168, "godslayers-greatsword": 140,
  "maliketh-black-blade": 150, "ancient-meteoric-ore-greatsword": 145,
  "fire-knights-greatsword": 145, "greatsword-of-radahn-light": 150,
  "greatsword-of-radahn-lord": 150, "moonrithylls-knight-sword": 145,
  // Thrusting Swords
  "rapier": 68, "estoc": 82, "noble-estoc": 73, "cleanrot-knights-sword": 78,
  "rogiers-rapier": 80, "antspur-rapier": 76, "frozen-needle": 88,
  "carian-sorcery-sword": 110,
  // Heavy Thrusting Swords
  "great-epee": 99, "godskin-stitcher": 95, "bloody-helice": 100,
  "dragon-king-cragblade": 115, "queelign-greatsword": 105, "sword-lance": 110,
  // Curved Swords
  "scimitar": 80, "falchion": 84, "shamshir": 78,
  "bandits-curved-sword": 90, "shotel": 80, "scavengers-curved-sword": 80,
  "beastmans-curved-sword": 92, "magma-blade": 124,
  "wing-of-astel": 144, "eclipse-shotel": 152,
  // Curved Greatswords
  "dismounter": 122, "monks-flameblade": 130, "bloodhounds-fang": 134,
  "onyx-lords-greatsword": 138, "magma-wyrm-scalesword": 138,
  "morgotts-cursed-sword": 130,
  // Katanas
  "uchigatana": 115, "nagakiba": 110, "serpentbone-blade": 105,
  "meteoric-ore-blade": 138, "moonveil": 160, "rivers-of-blood": 152,
  "dragonscale-blade": 120, "hand-of-malenia": 124,
  // Twinblades
  "twinblade": 75, "twinned-knight-swords": 88, "godskin-peeler": 84,
  "eleonoras-poleblade": 96,
  // Axes
  "hand-axe": 89, "battle-axe": 98, "highland-axe": 99,
  "icerind-hatchet": 100, "stormhawk-axe": 98, "rosus-axe": 108,
  // Greataxes
  "greataxe": 144, "crescent-moon-axe": 138, "executioners-greataxe": 145,
  "rusted-anchor": 138, "butchering-knife": 130, "axe-of-godrick": 158,
  // Hammers
  "club": 90, "mace": 100, "morning-star": 95, "warpick": 80,
  "hammer": 92, "varres-bouquet": 95, "envoys-horn": 110,
  "marikas-hammer": 122,
  // Great Hammers
  "great-club": 124, "pickaxe": 114, "brick-hammer": 116,
  "great-stars": 124, "devourers-scepter": 130,
  // Flails
  "flail": 90, "nightrider-flail": 102, "chainlink-flail": 108,
  "family-heads": 95, "bastards-stars": 105,
  // Spears
  "short-spear": 84, "spear": 92, "partisan": 105, "pike": 96,
  "cross-naginata": 108, "inquisitors-girandole": 116, "death-ritual-spear": 122,
  "bolt-of-gransax": 135,
  // Great Spears
  "lance": 119, "treespear": 122, "vykes-war-spear": 124, "serpent-hunter": 124,
  "siluras-tree": 128, "mohgwyns-sacred-spear": 138,
  // Halberds
  "halberd": 113, "banished-knights-halberd": 117, "lucerne": 107, "glaive": 113,
  "vulgar-militia-shotel": 110, "vulgar-militia-saw": 108,
  "guardians-swordspear": 110, "nightrider-glaive": 132, "pests-glaive": 105,
  "gargoyles-halberd": 132, "gargoyles-black-halberd": 148,
  "ripple-crescent-halberd": 108, "golden-halberd": 130, "dragon-halberd": 125,
  "loretta-war-sickle": 135, "commanders-standard": 122, "spirit-glaive": 130,
  "poleblade-of-the-bud": 138,
  // Reapers
  "scythe": 105, "grave-scythe": 110, "halo-scythe": 130, "winged-scythe": 156,
  // Whips
  "whip": 90, "thorned-whip": 92, "urumi": 100, "hoslows-petal-whip": 96,
  "magma-whip-candlestick": 124, "giants-red-braid": 130,
  // Fists
  "caestus": 76, "spiked-caestus": 80, "katar": 82, "iron-ball": 90,
  "star-fist": 96, "clinging-bone": 90, "grafted-dragon": 100, "cipher-pata": 73,
  // Claws
  "hookclaws": 70, "venomous-fang": 76, "bloodhound-claws": 80, "raptor-talons": 84,
  // Colossal Weapons
  "giant-crusher": 116, "prelates-inferno-crozier": 140, "duelist-greataxe": 130,
  "rotten-greataxe": 130, "golems-halberd": 135, "troll-knight-great-club": 124,
  "dragon-greatclaw": 130, "staff-of-the-avatar": 145, "ghizas-wheel": 130,
  "fallingstar-beast-jaw": 145, "axe-of-godfrey": 155,
  // SOTE-only categories
  "milady": 105, "ledas-sword": 115, "rellanas-twin-blades": 130,
  "great-katana": 130, "dragon-hunters-great-katana": 135, "rakshasas-great-katana": 130,
  "backhand-blade": 90, "smithscript-cirque": 95, "curseblades-cirque": 100,
  "smithscript-dagger": 70,
  "dryleaf-arts": 70, "danes-footwork": 75,
  "beast-claw": 95, "red-bears-claw": 110,
  "firespark-perfume": 75, "chilling-perfume": 80, "frenzyflame-perfume": 85,
  "lightning-perfume": 80, "deadly-poison-perfume": 80,
};

const w = (
  id: string, name: string, category: WeaponCategory, weight: number,
  requirements: Partial<Record<Stat, number>>,
  scaling: Partial<Record<Stat, ScaleGrade>>,
  skill: string, sote = false, baseAP?: number,
): Weapon => ({
  id, name, category, weight, requirements, scaling, skill, sote,
  baseAP: baseAP ?? BASE_AP_BY_ID[id],
});

export const weapons: Weapon[] = [
  // Daggers
  w("dagger", "Dagger", "Dagger", 1.5, { strength: 5, dexterity: 9 }, { strength: "D", dexterity: "C" }, "Quickstep"),
  w("parrying-dagger", "Parrying Dagger", "Dagger", 1.5, { strength: 5, dexterity: 14 }, { strength: "E", dexterity: "C" }, "Parry"),
  w("great-knife", "Great Knife", "Dagger", 1.5, { strength: 6, dexterity: 12 }, { strength: "E", dexterity: "C" }, "Quickstep"),
  w("misericorde", "Misericorde", "Dagger", 2.0, { strength: 7, dexterity: 12 }, { strength: "E", dexterity: "D" }, "Quickstep"),
  w("wakizashi", "Wakizashi", "Dagger", 3.0, { strength: 9, dexterity: 13 }, { strength: "D", dexterity: "D" }, "Quickstep"),
  w("bloodstained-dagger", "Bloodstained Dagger", "Dagger", 2.0, { strength: 9, dexterity: 12 }, { strength: "C", dexterity: "E" }, "Quickstep"),
  w("reduvia", "Reduvia", "Dagger", 2.5, { strength: 5, dexterity: 13, arcane: 13 }, { strength: "E", dexterity: "D", arcane: "D" }, "Reduvia Blood Blade"),
  w("black-knife", "Black Knife", "Dagger", 2.0, { strength: 8, dexterity: 12, faith: 18 }, { strength: "E", dexterity: "D", faith: "D" }, "Blade of Death"),
  w("blade-of-calling", "Blade of Calling", "Dagger", 1.5, { strength: 6, dexterity: 13, faith: 15 }, { strength: "D", dexterity: "D", faith: "C" }, "Blade of Gold"),
  w("glintstone-kris", "Glintstone Kris", "Dagger", 1.5, { strength: 5, dexterity: 12, intelligence: 16 }, { strength: "E", dexterity: "D", intelligence: "D" }, "Glintstone Dart"),
  w("main-gauche", "Main-gauche", "Dagger", 2.5, { strength: 7, dexterity: 15 }, { strength: "D", dexterity: "D" }, "Parry", true),
  w("fire-knights-shortsword", "Fire Knight's Shortsword", "Dagger", 2.0, { strength: 8, dexterity: 13, faith: 12 }, { strength: "D", dexterity: "C", faith: "D" }, "Quickstep", true),

  // Straight Swords
  w("short-sword", "Short Sword", "Straight Sword", 3, { strength: 8, dexterity: 10 }, { strength: "D", dexterity: "D" }, "Kick"),
  w("longsword", "Longsword", "Straight Sword", 3.5, { strength: 10, dexterity: 10 }, { strength: "D", dexterity: "D" }, "Square Off"),
  w("broadsword", "Broadsword", "Straight Sword", 4, { strength: 10, dexterity: 10 }, { strength: "D", dexterity: "E" }, "Square Off"),
  w("lordsworns-straight-sword", "Lordsworn's Straight Sword", "Straight Sword", 3.5, { strength: 10, dexterity: 10 }, { strength: "D", dexterity: "D" }, "Square Off"),
  w("nobles-slender-sword", "Noble's Slender Sword", "Straight Sword", 3.5, { strength: 8, dexterity: 11 }, { strength: "E", dexterity: "C" }, "Square Off"),
  w("warhawks-talon", "Warhawk's Talon", "Straight Sword", 3, { strength: 10, dexterity: 16 }, { strength: "D", dexterity: "C" }, "Spinning Slash"),
  w("carian-knights-sword", "Carian Knight's Sword", "Straight Sword", 4, { strength: 10, dexterity: 10, intelligence: 18 }, { strength: "D", dexterity: "D", intelligence: "D" }, "Carian Grandeur"),
  w("crystal-sword", "Crystal Sword", "Straight Sword", 4.5, { strength: 13, dexterity: 10, intelligence: 15 }, { strength: "D", dexterity: "E", intelligence: "D" }, "Spinning Slash"),
  w("miquellan-knights-sword", "Miquellan Knight's Sword", "Straight Sword", 3.5, { strength: 11, dexterity: 11, faith: 16 }, { strength: "D", dexterity: "D", faith: "E" }, "Sacred Blade"),
  w("golden-epitaph", "Golden Epitaph", "Straight Sword", 3.5, { strength: 12, dexterity: 10, faith: 14 }, { strength: "D", dexterity: "D", faith: "D" }, "Last Rites"),
  w("regalia-of-eochaid", "Regalia of Eochaid", "Straight Sword", 5.5, { strength: 12, dexterity: 18, arcane: 15 }, { strength: "E", dexterity: "D", arcane: "D" }, "Eochaid's Dancing Blade"),
  w("coded-sword", "Coded Sword", "Straight Sword", 2.5, { faith: 20 }, { faith: "B" }, "Unblockable Blade"),
  w("sword-of-night-and-flame", "Sword of Night and Flame", "Straight Sword", 4, { strength: 12, dexterity: 12, intelligence: 24, faith: 24 }, { strength: "E", dexterity: "E", intelligence: "D", faith: "D" }, "Night-and-Flame Stance"),
  w("sword-of-light", "Sword of Light", "Straight Sword", 4, { strength: 14, dexterity: 11, faith: 24 }, { strength: "D", dexterity: "E", faith: "E" }, "Light", true),
  w("sword-of-darkness", "Sword of Darkness", "Straight Sword", 4, { strength: 14, dexterity: 11, arcane: 24 }, { strength: "D", dexterity: "E", arcane: "E" }, "Darkness", true),

  // Greatswords
  w("bastard-sword", "Bastard Sword", "Greatsword", 9, { strength: 16, dexterity: 10 }, { strength: "D", dexterity: "D" }, "Stamp (Upward Cut)"),
  w("claymore", "Claymore", "Greatsword", 9, { strength: 16, dexterity: 13 }, { strength: "D", dexterity: "D" }, "Lion's Claw"),
  w("iron-greatsword", "Iron Greatsword", "Greatsword", 12, { strength: 18, dexterity: 10 }, { strength: "C", dexterity: "E" }, "Stamp (Upward Cut)"),
  w("knights-greatsword", "Knight's Greatsword", "Greatsword", 10, { strength: 16, dexterity: 12 }, { strength: "D", dexterity: "D" }, "Stamp (Upward Cut)"),
  w("banished-knights-greatsword", "Banished Knight's Greatsword", "Greatsword", 10, { strength: 17, dexterity: 9 }, { strength: "D", dexterity: "D" }, "Stamp (Upward Cut)"),
  w("flamberge", "Flamberge", "Greatsword", 10, { strength: 15, dexterity: 14 }, { strength: "D", dexterity: "C" }, "Stamp (Upward Cut)"),
  w("blasphemous-blade", "Blasphemous Blade", "Greatsword", 13.5, { strength: 22, dexterity: 15, faith: 21 }, { strength: "D", dexterity: "D", faith: "D" }, "Taker's Flames"),
  w("dark-moon-greatsword", "Dark Moon Greatsword", "Greatsword", 10, { strength: 16, dexterity: 11, intelligence: 38 }, { strength: "D", dexterity: "D", intelligence: "C" }, "Moonlight Greatsword"),
  w("golden-order-greatsword", "Golden Order Greatsword", "Greatsword", 10, { strength: 16, dexterity: 21, faith: 28 }, { strength: "E", dexterity: "D", faith: "C" }, "Establish Order"),
  w("sacred-relic-sword", "Sacred Relic Sword", "Greatsword", 11, { strength: 14, dexterity: 24, faith: 22 }, { strength: "E", dexterity: "D", faith: "D" }, "Wave of Gold"),
  w("marais-executioners-sword", "Marais Executioner's Sword", "Greatsword", 11.5, { strength: 24, dexterity: 14, arcane: 23 }, { strength: "C", dexterity: "E", arcane: "D" }, "Eochaid's Dancing Blade"),

  // Colossal Swords
  w("zweihander", "Zweihander", "Colossal Sword", 15.5, { strength: 19, dexterity: 11 }, { strength: "D", dexterity: "D" }, "Stamp (Upward Cut)"),
  w("greatsword", "Greatsword", "Colossal Sword", 23, { strength: 31, dexterity: 12 }, { strength: "C", dexterity: "E" }, "Stamp (Upward Cut)"),
  w("watchdogs-greatsword", "Watchdog's Greatsword", "Colossal Sword", 22, { strength: 30, dexterity: 10 }, { strength: "C", dexterity: "E" }, "Stamp (Upward Cut)"),
  w("grafted-blade-greatsword", "Grafted Blade Greatsword", "Colossal Sword", 21, { strength: 40, dexterity: 14 }, { strength: "C", dexterity: "E" }, "Oath of Vengeance"),
  w("ruins-greatsword", "Ruins Greatsword", "Colossal Sword", 23, { strength: 50, intelligence: 16 }, { strength: "B", intelligence: "E" }, "Wave of Destruction"),
  w("starscourge-greatsword", "Starscourge Greatsword", "Colossal Sword", 20, { strength: 38, dexterity: 12, intelligence: 15 }, { strength: "D", dexterity: "D", intelligence: "E" }, "Starcaller Cry"),
  w("godslayers-greatsword", "Godslayer's Greatsword", "Colossal Sword", 17.5, { strength: 20, dexterity: 22, faith: 20 }, { strength: "D", dexterity: "D", faith: "D" }, "The Queen's Black Flame"),
  w("maliketh-black-blade", "Maliketh's Black Blade", "Colossal Sword", 22, { strength: 34, dexterity: 12, faith: 20 }, { strength: "D", dexterity: "E", faith: "D" }, "Destined Death"),
  w("trolls-golden-sword", "Troll's Golden Sword", "Colossal Sword", 19, { strength: 29, dexterity: 10 }, { strength: "D", dexterity: "D" }, "Troll's Roar"),
  w("troll-knights-sword", "Troll Knight's Sword", "Colossal Sword", 18, { strength: 20, dexterity: 14, intelligence: 18 }, { strength: "D", dexterity: "D", intelligence: "D" }, "Troll's Roar"),
  w("royal-greatsword", "Royal Greatsword", "Colossal Sword", 20, { strength: 26, dexterity: 18, intelligence: 22 }, { strength: "D", dexterity: "E", intelligence: "D" }, "Wolf's Assault"),
  w("fire-knights-greatsword", "Fire Knight's Greatsword", "Colossal Sword", 16, { strength: 22, dexterity: 18, faith: 12 }, { strength: "D", dexterity: "D", faith: "D" }, "Stamp (Upward Cut)"),
  w("ancient-meteoric-ore-greatsword", "Ancient Meteoric Ore Greatsword", "Colossal Sword", 22, { strength: 35, dexterity: 10, intelligence: 19 }, { strength: "D", dexterity: "E", intelligence: "D" }, "White Light Charge"),
  w("greatsword-of-radahn-lord", "Greatsword of Radahn (Lord)", "Colossal Sword", 19, { strength: 32, dexterity: 24, intelligence: 15 }, { strength: "D", dexterity: "D", intelligence: "E" }, "Promised Consort"),
  w("greatsword-of-radahn-light", "Greatsword of Radahn (Light)", "Colossal Sword", 19, { strength: 32, dexterity: 24, intelligence: 15 }, { strength: "D", dexterity: "D", intelligence: "E" }, "Lightspeed Slash"),
  w("moonrithylls-knight-sword", "Moonrithyll's Knight Sword", "Colossal Sword", 18, { strength: 20, dexterity: 14, intelligence: 18 }, { strength: "D", dexterity: "D", intelligence: "D" }, "Tremendous Phalanx"),

  // Thrusting Swords
  w("rapier", "Rapier", "Thrusting Sword", 2.5, { strength: 7, dexterity: 13 }, { strength: "E", dexterity: "C" }, "Impaling Thrust"),
  w("estoc", "Estoc", "Thrusting Sword", 4.5, { strength: 12, dexterity: 13 }, { strength: "E", dexterity: "C" }, "Impaling Thrust"),
  w("noble-estoc", "Noble's Estoc", "Thrusting Sword", 3.5, { strength: 9, dexterity: 10 }, { strength: "D", dexterity: "D" }, "Impaling Thrust"),
  w("rogiers-rapier", "Rogier's Rapier", "Thrusting Sword", 3.5, { strength: 8, dexterity: 17 }, { strength: "E", dexterity: "C" }, "Repeating Thrust"),
  w("antspur-rapier", "Antspur Rapier", "Thrusting Sword", 3.0, { strength: 10, dexterity: 20 }, { strength: "D", dexterity: "D" }, "Impaling Thrust"),
  w("frozen-needle", "Frozen Needle", "Thrusting Sword", 2.5, { strength: 7, dexterity: 16, intelligence: 13 }, { strength: "E", dexterity: "D", intelligence: "D" }, "Impaling Thrust"),
  w("carian-sorcery-sword", "Carian Sorcery Sword", "Thrusting Sword", 2.5, { strength: 10, dexterity: 19, intelligence: 16 }, { strength: "E", dexterity: "D", intelligence: "D" }, "Impaling Thrust", true),

  // Heavy Thrusting Swords
  w("great-epee", "Great Épée", "Heavy Thrusting Sword", 6.5, { strength: 16, dexterity: 14 }, { strength: "D", dexterity: "D" }, "Impaling Thrust"),
  w("godskin-stitcher", "Godskin Stitcher", "Heavy Thrusting Sword", 7, { strength: 14, dexterity: 17 }, { strength: "D", dexterity: "D" }, "Impaling Thrust"),
  w("bloody-helice", "Bloody Helice", "Heavy Thrusting Sword", 8, { strength: 16, dexterity: 18, arcane: 13 }, { strength: "E", dexterity: "D", arcane: "D" }, "Dynast's Finesse"),
  w("dragon-king-cragblade", "Dragon King's Cragblade", "Heavy Thrusting Sword", 8, { strength: 18, dexterity: 22 }, { strength: "E", dexterity: "D" }, "Thundercloud Form"),

  // Curved Swords
  w("scimitar", "Scimitar", "Curved Sword", 3, { strength: 8, dexterity: 10 }, { strength: "D", dexterity: "D" }, "Spinning Slash"),
  w("falchion", "Falchion", "Curved Sword", 3.5, { strength: 10, dexterity: 13 }, { strength: "D", dexterity: "D" }, "Spinning Slash"),
  w("shamshir", "Shamshir", "Curved Sword", 3.5, { strength: 7, dexterity: 13 }, { strength: "D", dexterity: "D" }, "Spinning Slash"),
  w("bandits-curved-sword", "Bandit's Curved Sword", "Curved Sword", 5, { strength: 11, dexterity: 13 }, { strength: "D", dexterity: "D" }, "Spinning Slash"),
  w("shotel", "Shotel", "Curved Sword", 2, { strength: 9, dexterity: 19 }, { strength: "E", dexterity: "D" }, "Spinning Slash"),
  w("scavengers-curved-sword", "Scavenger's Curved Sword", "Curved Sword", 3.5, { strength: 9, dexterity: 14 }, { strength: "D", dexterity: "D" }, "Spinning Slash"),
  w("beastmans-curved-sword", "Beastman's Curved Sword", "Curved Sword", 4, { strength: 13, dexterity: 11 }, { strength: "C", dexterity: "E" }, "Spinning Slash"),
  w("magma-blade", "Magma Blade", "Curved Sword", 4, { strength: 9, dexterity: 15, intelligence: 16 }, { strength: "D", dexterity: "D", intelligence: "D" }, "Magma Shower"),
  w("wing-of-astel", "Wing of Astel", "Curved Sword", 2.5, { strength: 7, dexterity: 17, intelligence: 20 }, { strength: "E", dexterity: "D", intelligence: "D" }, "Nebula"),
  w("eclipse-shotel", "Eclipse Shotel", "Curved Sword", 3, { strength: 14, dexterity: 24, faith: 25 }, { strength: "E", dexterity: "D", faith: "D" }, "Death Flare"),

  // Curved Greatswords
  w("dismounter", "Dismounter", "Curved Greatsword", 6, { strength: 19, dexterity: 16 }, { strength: "D", dexterity: "D" }, "Spinning Slash"),
  w("monks-flameblade", "Monk's Flameblade", "Curved Greatsword", 9, { strength: 18, dexterity: 18 }, { strength: "D", dexterity: "D" }, "Spinning Slash"),
  w("bloodhounds-fang", "Bloodhound's Fang", "Curved Greatsword", 11.5, { strength: 18, dexterity: 17 }, { strength: "D", dexterity: "C" }, "Bloodhound's Finesse"),
  w("onyx-lords-greatsword", "Onyx Lord's Greatsword", "Curved Greatsword", 11.5, { strength: 20, dexterity: 16, intelligence: 16 }, { strength: "D", dexterity: "E", intelligence: "D" }, "Onyx Lord's Repulsion"),
  w("magma-wyrm-scalesword", "Magma Wyrm's Scalesword", "Curved Greatsword", 15, { strength: 24, dexterity: 15, faith: 18 }, { strength: "C", dexterity: "D", faith: "D" }, "Magma Guillotine"),
  w("morgotts-cursed-sword", "Morgott's Cursed Sword", "Curved Greatsword", 7.5, { strength: 14, dexterity: 23, faith: 17 }, { strength: "E", dexterity: "C", faith: "D" }, "Cursed-Blood Slice"),

  // Katanas
  w("uchigatana", "Uchigatana", "Katana", 5.5, { strength: 11, dexterity: 15 }, { strength: "D", dexterity: "D" }, "Unsheathe"),
  w("nagakiba", "Nagakiba", "Katana", 7, { strength: 18, dexterity: 22 }, { strength: "D", dexterity: "C" }, "Piercing Fang"),
  w("serpentbone-blade", "Serpentbone Blade", "Katana", 6, { strength: 11, dexterity: 22 }, { strength: "E", dexterity: "B" }, "Double Slash"),
  w("meteoric-ore-blade", "Meteoric Ore Blade", "Katana", 7.5, { strength: 15, dexterity: 14, intelligence: 18 }, { strength: "D", dexterity: "E", intelligence: "D" }, "Gravitas"),
  w("moonveil", "Moonveil", "Katana", 6.5, { strength: 12, dexterity: 18, intelligence: 23 }, { strength: "E", dexterity: "D", intelligence: "C" }, "Transient Moonlight"),
  w("rivers-of-blood", "Rivers of Blood", "Katana", 6.5, { strength: 12, dexterity: 18, arcane: 20 }, { strength: "E", dexterity: "D", arcane: "D" }, "Corpse Piler"),
  w("dragonscale-blade", "Dragonscale Blade", "Katana", 5.5, { strength: 12, dexterity: 20 }, { strength: "D", dexterity: "C" }, "Ice Lightning Sword"),
  w("hand-of-malenia", "Hand of Malenia", "Katana", 7, { strength: 16, dexterity: 48 }, { strength: "E", dexterity: "C" }, "Waterfowl Dance"),

  // Twinblades
  w("twinblade", "Twinblade", "Twinblade", 7, { strength: 10, dexterity: 18 }, { strength: "D", dexterity: "D" }, "Spinning Slash"),
  w("twinned-knight-swords", "Twinned Knight Swords", "Twinblade", 8, { strength: 16, dexterity: 18 }, { strength: "D", dexterity: "E" }, "Spinning Slash"),
  w("godskin-peeler", "Godskin Peeler", "Twinblade", 8, { strength: 17, dexterity: 22 }, { strength: "E", dexterity: "C" }, "Black Flame Tornado"),
  w("eleonoras-poleblade", "Eleonora's Poleblade", "Twinblade", 6, { strength: 12, dexterity: 21, arcane: 19 }, { strength: "E", dexterity: "D", arcane: "D" }, "Bloodblade Dance"),

  // Axes
  w("hand-axe", "Hand Axe", "Axe", 3.5, { strength: 8, dexterity: 8 }, { strength: "D", dexterity: "D" }, "Quickstep"),
  w("battle-axe", "Battle Axe", "Axe", 4.5, { strength: 14, dexterity: 9 }, { strength: "D", dexterity: "D" }, "Wild Strikes"),
  w("highland-axe", "Highland Axe", "Axe", 4.5, { strength: 14, dexterity: 13 }, { strength: "D", dexterity: "D" }, "War Cry"),
  w("icerind-hatchet", "Icerind Hatchet", "Axe", 3, { strength: 11, dexterity: 16 }, { strength: "E", dexterity: "D" }, "Hoarfrost Stomp"),
  w("stormhawk-axe", "Stormhawk Axe", "Axe", 5.5, { strength: 12, dexterity: 16 }, { strength: "D", dexterity: "D" }, "Thunderstorm"),
  w("rosus-axe", "Rosus' Axe", "Axe", 5.5, { strength: 18, dexterity: 10, intelligence: 18 }, { strength: "D", dexterity: "E", intelligence: "D" }, "Rosus's Summons"),

  // Greataxes
  w("greataxe", "Greataxe", "Greataxe", 13, { strength: 30, dexterity: 8 }, { strength: "D", dexterity: "D" }, "Barbaric Roar"),
  w("crescent-moon-axe", "Crescent Moon Axe", "Greataxe", 12.5, { strength: 22, dexterity: 12, intelligence: 18 }, { strength: "D", dexterity: "D" }, "War Cry"),
  w("executioners-greataxe", "Executioner's Greataxe", "Greataxe", 15, { strength: 34, dexterity: 8 }, { strength: "C", dexterity: "E" }, "War Cry"),
  w("rusted-anchor", "Rusted Anchor", "Greataxe", 12.5, { strength: 26, dexterity: 8 }, { strength: "C", dexterity: "E" }, "Barbaric Roar"),
  w("butchering-knife", "Butchering Knife", "Greataxe", 8.5, { strength: 16, dexterity: 8 }, { strength: "E", dexterity: "C" }, "Barbaric Roar"),
  w("axe-of-godrick", "Axe of Godrick", "Greataxe", 11, { strength: 34, dexterity: 22 }, { strength: "D", dexterity: "D" }, "I Command Thee, Kneel!"),

  // Hammers
  w("club", "Club", "Hammer", 3.5, { strength: 8 }, { strength: "C" }, "Kick"),
  w("mace", "Mace", "Hammer", 4.5, { strength: 14, dexterity: 8 }, { strength: "D", dexterity: "D" }, "Kick"),
  w("morning-star", "Morning Star", "Hammer", 5, { strength: 13, dexterity: 9 }, { strength: "D", dexterity: "D" }, "Kick"),
  w("warpick", "Warpick", "Hammer", 2.5, { strength: 9 }, { strength: "D", dexterity: "D" }, "Kick"),
  w("hammer", "Hammer", "Hammer", 6.5, { strength: 12, dexterity: 8 }, { strength: "D", dexterity: "D" }, "Kick"),
  w("varres-bouquet", "Varré's Bouquet", "Hammer", 2, { strength: 8, dexterity: 16, arcane: 24 }, { strength: "E", dexterity: "D", arcane: "C" }, "Blood Tax"),
  w("envoys-horn", "Envoy's Horn", "Hammer", 4, { strength: 10, dexterity: 12, faith: 16 }, { strength: "D", dexterity: "D", faith: "D" }, "Oracular Bubble"),
  w("marikas-hammer", "Marika's Hammer", "Hammer", 6, { strength: 20, dexterity: 12, faith: 19 }, { strength: "D", dexterity: "D", faith: "D" }, "Gold Breaker", true),

  // Great Hammers
  w("great-club", "Great Club", "Great Hammer", 9, { strength: 30 }, { strength: "C" }, "Barbaric Roar"),
  w("pickaxe", "Pickaxe", "Great Hammer", 10, { strength: 24, dexterity: 10 }, { strength: "D", dexterity: "D" }, "Endure"),
  w("brick-hammer", "Brick Hammer", "Great Hammer", 12.5, { strength: 26 }, { strength: "B" }, "Barbaric Roar"),
  w("great-stars", "Great Stars", "Great Hammer", 10, { strength: 30, dexterity: 12 }, { strength: "D", dexterity: "D" }, "Endure"),
  w("devourers-scepter", "Devourer's Scepter", "Great Hammer", 11.5, { strength: 28, dexterity: 13, faith: 25 }, { strength: "D", dexterity: "D", faith: "D" }, "Devourer of Worlds"),

  // Flails
  w("flail", "Flail", "Flail", 5, { strength: 9, dexterity: 13 }, { strength: "D", dexterity: "C" }, "Spinning Chain"),
  w("nightrider-flail", "Nightrider Flail", "Flail", 6, { strength: 14, dexterity: 13 }, { strength: "D", dexterity: "B" }, "Spinning Chain"),
  w("chainlink-flail", "Chainlink Flail", "Flail", 8, { strength: 13, dexterity: 12 }, { strength: "B", dexterity: "E" }, "Spinning Chain"),
  w("family-heads", "Family Heads", "Flail", 5.5, { strength: 8, dexterity: 18, intelligence: 16 }, { strength: "D", dexterity: "A", intelligence: "D" }, "Familial Rancor"),
  w("bastards-stars", "Bastard's Stars", "Flail", 5.5, { strength: 8, dexterity: 22, intelligence: 22 }, { strength: "D", dexterity: "C", intelligence: "A" }, "Nebula"),

  // Spears
  w("short-spear", "Short Spear", "Spear", 4, { strength: 10, dexterity: 10 }, { strength: "D", dexterity: "D" }, "Impaling Thrust"),
  w("spear", "Spear", "Spear", 4.5, { strength: 10, dexterity: 12 }, { strength: "E", dexterity: "C" }, "Impaling Thrust"),
  w("partisan", "Partisan", "Spear", 6.5, { strength: 15, dexterity: 12 }, { strength: "D", dexterity: "D" }, "Impaling Thrust"),
  w("pike", "Pike", "Spear", 7.5, { strength: 16, dexterity: 11 }, { strength: "D", dexterity: "D" }, "Charge Forth"),
  w("cross-naginata", "Cross-Naginata", "Spear", 8, { strength: 16, dexterity: 20 }, { strength: "D", dexterity: "C" }, "Impaling Thrust"),
  w("inquisitors-girandole", "Inquisitor's Girandole", "Spear", 7.5, { strength: 18, dexterity: 15, faith: 16 }, { strength: "D", dexterity: "D", faith: "D" }, "Charge Forth"),
  w("death-ritual-spear", "Death Ritual Spear", "Spear", 6.5, { strength: 14, dexterity: 20, intelligence: 18 }, { strength: "E", dexterity: "D", intelligence: "D" }, "Spearcall Ritual"),
  w("bolt-of-gransax", "Bolt of Gransax", "Spear", 8.5, { strength: 20, dexterity: 40 }, { strength: "D", dexterity: "D" }, "Ancient Lightning Spear"),

  // Great Spears
  w("lance", "Lance", "Great Spear", 9, { strength: 20, dexterity: 14 }, { strength: "D", dexterity: "D" }, "Charge Forth"),
  w("treespear", "Treespear", "Great Spear", 9.5, { strength: 20, dexterity: 16, faith: 18 }, { strength: "D", dexterity: "D", faith: "D" }, "Sacred Order"),
  w("vykes-war-spear", "Vyke's War Spear", "Great Spear", 8, { strength: 16, dexterity: 20, faith: 14 }, { strength: "E", dexterity: "B", faith: "C" }, "Frenzyflame Thrust"),
  w("serpent-hunter", "Serpent-Hunter", "Great Spear", 12, {}, { strength: "B", dexterity: "E" }, "Great-Serpent Hunt"),
  w("siluras-tree", "Siluria's Tree", "Great Spear", 10, { strength: 27, dexterity: 13, faith: 20 }, { strength: "D", dexterity: "E", faith: "D" }, "Siluria's Woe"),
  w("mohgwyns-sacred-spear", "Mohgwyn's Sacred Spear", "Great Spear", 10, { strength: 24, dexterity: 14, faith: 27, arcane: 10 }, { strength: "D", dexterity: "E", faith: "D", arcane: "C" }, "Bloodboon Ritual"),

  // Halberds
  w("halberd", "Halberd", "Halberd", 8, { strength: 14, dexterity: 12 }, { strength: "D", dexterity: "D" }, "Charge Forth"),
  w("banished-knights-halberd", "Banished Knight's Halberd", "Halberd", 8, { strength: 14, dexterity: 12 }, { strength: "D", dexterity: "D" }, "Charge Forth"),
  w("lucerne", "Lucerne", "Halberd", 7, { strength: 15, dexterity: 12 }, { strength: "D", dexterity: "C" }, "Charge Forth"),
  w("glaive", "Glaive", "Halberd", 10, { strength: 18, dexterity: 15 }, { strength: "D", dexterity: "D" }, "Spinning Slash"),
  w("vulgar-militia-shotel", "Vulgar Militia Shotel", "Halberd", 8, { strength: 14, dexterity: 16 }, { strength: "E", dexterity: "C" }, "Spinning Slash"),
  w("vulgar-militia-saw", "Vulgar Militia Saw", "Halberd", 8, { strength: 15, dexterity: 13 }, { strength: "D", dexterity: "D" }, "Spinning Slash"),
  w("guardians-swordspear", "Guardian's Swordspear", "Halberd", 9, { strength: 17, dexterity: 16 }, { strength: "E", dexterity: "C" }, "Spinning Slash"),
  w("nightrider-glaive", "Nightrider Glaive", "Halberd", 12, { strength: 26, dexterity: 10 }, { strength: "C", dexterity: "E" }, "Spinning Slash"),
  w("pests-glaive", "Pest's Glaive", "Halberd", 7, { strength: 13, dexterity: 13 }, { strength: "D", dexterity: "D" }, "Spinning Slash"),
  w("gargoyles-halberd", "Gargoyle's Halberd", "Halberd", 12, { strength: 26, dexterity: 10 }, { strength: "C", dexterity: "E" }, "Spinning Slash"),
  w("gargoyles-black-halberd", "Gargoyle's Black Halberd", "Halberd", 12, { strength: 26, dexterity: 10, faith: 22 }, { strength: "C", dexterity: "E", faith: "D" }, "Spinning Slash"),
  w("ripple-crescent-halberd", "Ripple Crescent Halberd", "Halberd", 8.5, { strength: 12, dexterity: 12, arcane: 20 }, { arcane: "B" }, "Spinning Slash"),
  w("golden-halberd", "Golden Halberd", "Halberd", 13.5, { strength: 30, dexterity: 14, faith: 12 }, { strength: "D", dexterity: "E", faith: "D" }, "Golden Vow"),
  w("dragon-halberd", "Dragon Halberd", "Halberd", 10.5, { strength: 22, dexterity: 10 }, { strength: "D", dexterity: "D" }, "Spinning Slash"),
  w("loretta-war-sickle", "Loretta's War Sickle", "Halberd", 10, { strength: 20, dexterity: 15, intelligence: 20 }, { strength: "D", dexterity: "D", intelligence: "D" }, "Loretta's Slash"),
  w("commanders-standard", "Commander's Standard", "Halberd", 11.5, { strength: 24, dexterity: 14 }, { strength: "D", dexterity: "D" }, "Rallying Standard"),
  w("spirit-glaive", "Spirit Glaive", "Halberd", 6.5, { strength: 14, dexterity: 17, intelligence: 16 }, { strength: "D", dexterity: "C", intelligence: "D" }, "Rancor Slash"),
  w("poleblade-of-the-bud", "Poleblade of the Bud", "Halberd", 10, { strength: 14, dexterity: 22, arcane: 20 }, { strength: "E", dexterity: "D", arcane: "D" }, "Romina's Purification", true),

  // Reapers
  w("scythe", "Scythe", "Reaper", 7.5, { strength: 14, dexterity: 17 }, { strength: "D", dexterity: "B" }, "Spinning Slash"),
  w("grave-scythe", "Grave Scythe", "Reaper", 9.5, { strength: 17, dexterity: 13 }, { strength: "D", dexterity: "D" }, "Spinning Slash"),
  w("halo-scythe", "Halo Scythe", "Reaper", 8.5, { strength: 13, dexterity: 16, faith: 16 }, { strength: "D", dexterity: "D", faith: "D" }, "Miquella's Ring of Light"),
  w("winged-scythe", "Winged Scythe", "Reaper", 7.5, { strength: 16, dexterity: 16, faith: 24 }, { strength: "E", dexterity: "D", faith: "D" }, "Angel's Wings"),

  // Whips
  w("whip", "Whip", "Whip", 2, { strength: 7, dexterity: 15 }, { strength: "D", dexterity: "C" }, "Kick"),
  w("thorned-whip", "Thorned Whip", "Whip", 2.5, { strength: 7, dexterity: 15 }, { strength: "E", dexterity: "B" }, "Kick"),
  w("urumi", "Urumi", "Whip", 3, { strength: 11, dexterity: 22 }, { strength: "E", dexterity: "B" }, "Kick"),
  w("hoslows-petal-whip", "Hoslow's Petal Whip", "Whip", 3.5, { strength: 14, dexterity: 18, arcane: 10 }, { strength: "D", dexterity: "D" }, "Kick"),
  w("magma-whip-candlestick", "Magma Whip Candlestick", "Whip", 2.5, { strength: 7, dexterity: 15, faith: 18 }, { strength: "E", dexterity: "D", faith: "D" }, "Sea of Magma"),
  w("giants-red-braid", "Giant's Red Braid", "Whip", 2.5, { strength: 12, dexterity: 15, faith: 21 }, { strength: "D", dexterity: "D", faith: "D" }, "Flame Dance"),

  // Fists
  w("caestus", "Caestus", "Fist", 1.5, { strength: 8, dexterity: 8 }, { strength: "D", dexterity: "D" }, "Endure"),
  w("spiked-caestus", "Spiked Caestus", "Fist", 2, { strength: 8, dexterity: 10 }, { strength: "D", dexterity: "D" }, "Endure"),
  w("katar", "Katar", "Fist", 2.5, { strength: 8, dexterity: 10 }, { strength: "D", dexterity: "D" }, "Impaling Thrust"),
  w("iron-ball", "Iron Ball", "Fist", 2.5, { strength: 11, dexterity: 8 }, { strength: "D", dexterity: "E" }, "Endure"),
  w("star-fist", "Star Fist", "Fist", 3, { strength: 12, dexterity: 8 }, { strength: "D", dexterity: "E" }, "Endure"),
  w("clinging-bone", "Clinging Bone", "Fist", 3, { strength: 8, dexterity: 22 }, { strength: "E", dexterity: "C" }, "Lifesteal Fist"),
  w("grafted-dragon", "Grafted Dragon", "Fist", 2.5, { strength: 14, dexterity: 9, faith: 12 }, { strength: "D", dexterity: "D", faith: "D" }, "Bear Witness!"),
  w("cipher-pata", "Cipher Pata", "Fist", 1.5, { faith: 30 }, { faith: "C" }, "Unblockable Blade"),

  // Claws
  w("hookclaws", "Hookclaws", "Claw", 2, { strength: 6, dexterity: 12 }, { strength: "E", dexterity: "B" }, "Quickstep"),
  w("venomous-fang", "Venomous Fang", "Claw", 2.5, { strength: 7, dexterity: 13 }, { strength: "D", dexterity: "C" }, "Quickstep"),
  w("bloodhound-claws", "Bloodhound Claws", "Claw", 3, { strength: 9, dexterity: 16 }, { strength: "D", dexterity: "D" }, "Bloodhound's Step"),
  w("raptor-talons", "Raptor Talons", "Claw", 1.5, { strength: 9, dexterity: 20 }, { strength: "E", dexterity: "C" }, "Quickstep"),

  // Colossal Weapons
  w("giant-crusher", "Giant-Crusher", "Colossal Weapon", 26.5, { strength: 60, dexterity: 12 }, { strength: "C" }, "Endure"),
  w("prelates-inferno-crozier", "Prelate's Inferno Crozier", "Colossal Weapon", 23.5, { strength: 38, dexterity: 15, faith: 14 }, { strength: "C", dexterity: "E" }, "Prelate's Charge"),
  w("duelist-greataxe", "Duelist Greataxe", "Colossal Weapon", 20, { strength: 23, dexterity: 14 }, { strength: "E", dexterity: "D" }, "Endure"),
  w("rotten-greataxe", "Rotten Greataxe", "Colossal Weapon", 20, { strength: 23, dexterity: 14 }, { strength: "E", dexterity: "D" }, "Endure"),
  w("golems-halberd", "Golem's Halberd", "Colossal Weapon", 21.5, { strength: 30, dexterity: 14 }, { strength: "D", dexterity: "D" }, "Charge Forth"),
  w("troll-knight-great-club", "Great Club (colossal)", "Colossal Weapon", 17, { strength: 30, dexterity: 8 }, { strength: "C" }, "Golden Land"),
  w("dragon-greatclaw", "Dragon Greatclaw", "Colossal Weapon", 16, { strength: 38, dexterity: 12 }, { strength: "D", dexterity: "D" }, "Endure"),
  w("staff-of-the-avatar", "Staff of the Avatar", "Colossal Weapon", 20, { strength: 34, dexterity: 12, faith: 24 }, { strength: "C", dexterity: "E", faith: "D" }, "Erdtree Slam"),
  w("ghizas-wheel", "Ghiza's Wheel", "Colossal Weapon", 19, { strength: 30, dexterity: 10 }, { strength: "D", dexterity: "D" }, "Spinning Wheel"),
  w("fallingstar-beast-jaw", "Fallingstar Beast Jaw", "Colossal Weapon", 21.5, { strength: 34, dexterity: 12, intelligence: 20 }, { strength: "D", dexterity: "D", intelligence: "E" }, "Gravity Bolt"),
  w("axe-of-godfrey", "Axe of Godfrey", "Colossal Weapon", 18, { strength: 34, dexterity: 22 }, { strength: "D", dexterity: "D" }, "Regal Roar"),

  // SOTE-only categories
  w("milady", "Milady", "Light Greatsword", 6.5, { strength: 10, dexterity: 15 }, { strength: "D", dexterity: "C" }, "Impaling Thrust", true),
  w("ledas-sword", "Leda's Sword", "Light Greatsword", 7.5, { strength: 11, dexterity: 22, faith: 19 }, { strength: "E", dexterity: "C", faith: "D" }, "Needle Piercer", true),
  w("rellanas-twin-blades", "Rellana's Twin Blades", "Light Greatsword", 8, { strength: 13, dexterity: 16, intelligence: 16, faith: 16 }, { strength: "D", dexterity: "D", intelligence: "D", faith: "D" }, "Moon-and-Fire Stance", true),

  w("great-katana", "Great Katana", "Great Katana", 9, { strength: 15, dexterity: 19 }, { strength: "D", dexterity: "D" }, "Overhead Stance", true),
  w("dragon-hunters-great-katana", "Dragon-Hunter's Great Katana", "Great Katana", 10.5, { strength: 17, dexterity: 20 }, { strength: "D", dexterity: "D" }, "Dragonwound Slash", true),
  w("rakshasas-great-katana", "Rakshasa's Great Katana", "Great Katana", 9.5, { strength: 12, dexterity: 27 }, { strength: "E", dexterity: "C" }, "Weed Cutter", true),

  w("backhand-blade", "Backhand Blade", "Backhand Blade", 2, { strength: 7, dexterity: 14 }, { strength: "D", dexterity: "D" }, "Blind Spot", true),
  w("smithscript-cirque", "Smithscript Cirque", "Backhand Blade", 2, { strength: 8, dexterity: 14, intelligence: 11, faith: 11 }, { strength: "D", dexterity: "C", intelligence: "E", faith: "E" }, "Blind Spot", true),
  w("curseblades-cirque", "Curseblade's Cirque", "Backhand Blade", 4.5, { strength: 8, dexterity: 19 }, { strength: "D", dexterity: "B" }, "Deadly Dance", true),

  w("smithscript-dagger", "Smithscript Dagger", "Throwing Blade", 1.5, { strength: 7, dexterity: 16, intelligence: 11, faith: 11 }, { strength: "E", dexterity: "C", intelligence: "E", faith: "E" }, "Piercing Throw", true),

  w("dryleaf-arts", "Dryleaf Arts", "Hand-to-Hand Art", 1, { strength: 10, dexterity: 12 }, { strength: "D", dexterity: "D" }, "Palm Blast", true),
  w("danes-footwork", "Dane's Footwork", "Hand-to-Hand Art", 1, { strength: 9, dexterity: 18 }, { strength: "D", dexterity: "D" }, "Palm Blast", true),

  w("beast-claw", "Beast Claw", "Beast Claw", 3, { strength: 12, dexterity: 17 }, { strength: "D", dexterity: "D" }, "Savage Claws", true),
  w("red-bears-claw", "Red Bear's Claw", "Beast Claw", 4, { strength: 15, dexterity: 13 }, { strength: "C", dexterity: "D" }, "Red Bear Hunt", true),

  w("firespark-perfume", "Firespark Perfume Bottle", "Perfume Bottle", 1, { strength: 8, dexterity: 14 }, { dexterity: "C" }, "Kick", true),
  w("chilling-perfume", "Chilling Perfume Bottle", "Perfume Bottle", 1, { strength: 8, dexterity: 14, intelligence: 13 }, { dexterity: "D", intelligence: "D" }, "Kick", true),
  w("frenzyflame-perfume", "Frenzyflame Perfume Bottle", "Perfume Bottle", 1, { strength: 8, dexterity: 14, intelligence: 12, faith: 12 }, { strength: "E", dexterity: "C", intelligence: "D", faith: "D" }, "Kick", true),
  w("lightning-perfume", "Lightning Perfume Bottle", "Perfume Bottle", 1, { strength: 8, dexterity: 18, faith: 13 }, { dexterity: "C", faith: "C" }, "Kick", true),
  w("deadly-poison-perfume", "Deadly Poison Perfume Bottle", "Perfume Bottle", 1, { strength: 8, dexterity: 16, arcane: 13 }, { dexterity: "C", arcane: "C" }, "Deadly Poison Spray", true),
];

export function getWeapon(id: string): Weapon | undefined {
  return weapons.find((w) => w.id === id);
}

export function weaponsByCategory(category: WeaponCategory): Weapon[] {
  return weapons.filter((w) => w.category === category);
}
