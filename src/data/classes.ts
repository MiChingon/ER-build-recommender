export type Stat =
  | "vigor"
  | "mind"
  | "endurance"
  | "strength"
  | "dexterity"
  | "intelligence"
  | "faith"
  | "arcane";

export type StatVector = Record<Stat, number>;

export type StartingClass = {
  id: string;
  name: string;
  level: number;
  stats: StatVector;
  description: string;
  startingEquipment: string[];
  image: string;
};

const CLASS_IMAGE_BASE =
  "https://eldenring.wiki.fextralife.com/file/Elden-Ring";

const classImage = (slug: string) =>
  `${CLASS_IMAGE_BASE}/${slug}_class_elden_ring_wiki_guide_200px.png`;

export const STAT_LABELS: Record<Stat, string> = {
  vigor: "Vigor",
  mind: "Mind",
  endurance: "Endurance",
  strength: "Strength",
  dexterity: "Dexterity",
  intelligence: "Intelligence",
  faith: "Faith",
  arcane: "Arcane",
};

export const STAT_ORDER: Stat[] = [
  "vigor",
  "mind",
  "endurance",
  "strength",
  "dexterity",
  "intelligence",
  "faith",
  "arcane",
];

export const classes: StartingClass[] = [
  {
    id: "vagabond",
    name: "Vagabond",
    level: 9,
    stats: { vigor: 15, mind: 10, endurance: 11, strength: 14, dexterity: 13, intelligence: 9, faith: 9, arcane: 7 },
    description: "Balanced melee fighter with the best Vigor baseline. Strong default pick for Strength or Quality builds.",
    startingEquipment: ["Longsword", "Halberd", "Heater Shield", "Vagabond Knight armor set"],
    image: classImage("vagabond"),
  },
  {
    id: "warrior",
    name: "Warrior",
    level: 8,
    stats: { vigor: 11, mind: 12, endurance: 11, strength: 10, dexterity: 16, intelligence: 10, faith: 8, arcane: 9 },
    description: "Dual-wielding Dex rogue. Highest Dex baseline tied with Samurai-adjacent builds.",
    startingEquipment: ["Scimitar (x2)", "Riveted Wooden Shield", "Blue Cloth Cowl set"],
    image: classImage("warrior"),
  },
  {
    id: "hero",
    name: "Hero",
    level: 7,
    stats: { vigor: 14, mind: 9, endurance: 12, strength: 16, dexterity: 9, intelligence: 7, faith: 8, arcane: 11 },
    description: "Heavy-Strength bruiser. Highest Str baseline — optimal for greatswords, hammers, and colossal weapons.",
    startingEquipment: ["Battle Axe", "Large Leather Shield", "Champion set"],
    image: classImage("hero"),
  },
  {
    id: "bandit",
    name: "Bandit",
    level: 5,
    stats: { vigor: 10, mind: 11, endurance: 10, strength: 9, dexterity: 13, intelligence: 9, faith: 8, arcane: 14 },
    description: "Low-level Dex/Arcane archer. Highest Arc baseline — ideal for bleed, Occult, and status builds.",
    startingEquipment: ["Great Knife", "Shortbow", "Buckler", "Bandit set", "Bone Arrow (Fletched) x30"],
    image: classImage("bandit"),
  },
  {
    id: "astrologer",
    name: "Astrologer",
    level: 6,
    stats: { vigor: 9, mind: 15, endurance: 9, strength: 8, dexterity: 12, intelligence: 16, faith: 7, arcane: 9 },
    description: "Pure Intelligence caster. Highest Int baseline + Mind 15 + starting staff and two sorceries.",
    startingEquipment: ["Short Sword", "Astrologer's Staff", "Scripture Wooden Shield", "Astrologer set", "Glintstone Pebble", "Glintstone Arc"],
    image: classImage("astrologer"),
  },
  {
    id: "prophet",
    name: "Prophet",
    level: 7,
    stats: { vigor: 10, mind: 14, endurance: 8, strength: 11, dexterity: 10, intelligence: 7, faith: 16, arcane: 10 },
    description: "Pure Faith caster. Highest Fai baseline + Mind 14 + starting seal, Heal, and Catch Flame.",
    startingEquipment: ["Short Spear", "Finger Seal", "Rickety Shield", "Prophet set", "Heal", "Catch Flame"],
    image: classImage("prophet"),
  },
  {
    id: "samurai",
    name: "Samurai",
    level: 9,
    stats: { vigor: 12, mind: 11, endurance: 13, strength: 12, dexterity: 15, intelligence: 9, faith: 8, arcane: 8 },
    description: "Dex katana + bow hybrid. Highest Endurance baseline — strong for Dex builds and heavier Dex weapons.",
    startingEquipment: ["Uchigatana", "Longbow", "Red Thorn Roundshield", "Land of Reeds set", "Arrow x20", "Fire Arrow x10"],
    image: classImage("samurai"),
  },
  {
    id: "prisoner",
    name: "Prisoner",
    level: 9,
    stats: { vigor: 11, mind: 12, endurance: 11, strength: 11, dexterity: 14, intelligence: 14, faith: 6, arcane: 9 },
    description: "Spellblade hybrid. Dex 14 + Int 14 + Estoc and Glintstone Staff — best Int melee starter.",
    startingEquipment: ["Estoc", "Glintstone Staff", "Rift Shield", "Prisoner set", "Magic Glintblade"],
    image: classImage("prisoner"),
  },
  {
    id: "confessor",
    name: "Confessor",
    level: 10,
    stats: { vigor: 10, mind: 13, endurance: 10, strength: 12, dexterity: 12, intelligence: 9, faith: 14, arcane: 9 },
    description: "Faith paladin hybrid. Fai 14 + balanced Str/Dex 12 — best starter for incantation-based melee.",
    startingEquipment: ["Broadsword", "Finger Seal", "Blue Crest Heater Shield", "Confessor set", "Urgent Heal", "Assassin's Approach"],
    image: classImage("confessor"),
  },
  {
    id: "wretch",
    name: "Wretch",
    level: 1,
    stats: { vigor: 10, mind: 10, endurance: 10, strength: 10, dexterity: 10, intelligence: 10, faith: 10, arcane: 10 },
    description: "Naked level-1 blank slate. Flat 10s in every stat = zero wasted points. Best for min-max and challenge runs.",
    startingEquipment: ["Club"],
    image: classImage("wretch"),
  },
];

export function getClass(id: string): StartingClass | undefined {
  return classes.find((c) => c.id === id);
}
