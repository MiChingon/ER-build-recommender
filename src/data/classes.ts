import { ArmorSelection } from "./armor";

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
  starting?: { right?: string[]; left?: string[] };
  armor: ArmorSelection
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
    starting: { right: ["longsword", "halberd"], left: ["heater-shield"] },
    armor: {
      helm: "h-vagabond-knight-helm",
      chest: "c-vagabond-knight-armor",
      gauntlets: "g-vagabond-knight-gauntlets",
      legs: "l-vagabond-knight-greaves",
    }
  },
  {
    id: "warrior",
    name: "Warrior",
    level: 8,
    stats: { vigor: 11, mind: 12, endurance: 11, strength: 10, dexterity: 16, intelligence: 10, faith: 8, arcane: 9 },
    description: "Dual-wielding Dex rogue. Highest Dex baseline tied with Samurai-adjacent builds.",
    startingEquipment: ["Scimitar (x2)", "Riveted Wooden Shield", "Blue Cloth Cowl set"],
    image: classImage("warrior"),
    starting: { right: ["scimitar"], left: ["scimitar", "riveted-wooden-shield"] },
    armor: {
      helm: "h-blue-cloth-cowl",
      chest: "c-blue-cloth-vest",
      gauntlets: "g-warrior-gauntlets",
      legs: "l-warrior-greaves",
    }
  },
  {
    id: "hero",
    name: "Hero",
    level: 7,
    stats: { vigor: 14, mind: 9, endurance: 12, strength: 16, dexterity: 9, intelligence: 7, faith: 8, arcane: 11 },
    description: "Heavy-Strength bruiser. Highest Str baseline — optimal for greatswords, hammers, and colossal weapons.",
    startingEquipment: ["Battle Axe", "Large Leather Shield", "Champion set"],
    image: classImage("hero"),
    starting: { right: ["battle-axe"], left: ["large-leather-shield"] },
    armor: {
      chest: "c-champion-pauldron",
      gauntlets: "g-champion-bracers",
      legs: "l-champion-gaiters",
      helm: "h-champion-headband",
    }
  },
  {
    id: "bandit",
    name: "Bandit",
    level: 5,
    stats: { vigor: 10, mind: 11, endurance: 10, strength: 9, dexterity: 13, intelligence: 9, faith: 8, arcane: 14 },
    description: "Low-level Dex/Arcane archer. Highest Arc baseline — ideal for bleed, Occult, and status builds.",
    startingEquipment: ["Great Knife", "Shortbow", "Buckler", "Bandit set", "Bone Arrow (Fletched) x30"],
    image: classImage("bandit"),
    starting: { right: ["great-knife", "shortbow"], left: ["buckler"] },
    armor: {
      helm: "h-bandit-mask",
      chest: "c-bandit-garb",
      gauntlets: "g-bandit-manchettes",
      legs: "l-bandit-boots"
    }
  },
  {
    id: "astrologer",
    name: "Astrologer",
    level: 6,
    stats: { vigor: 9, mind: 15, endurance: 9, strength: 8, dexterity: 12, intelligence: 16, faith: 7, arcane: 9 },
    description: "Pure Intelligence caster. Highest Int baseline + Mind 15 + starting staff and two sorceries.",
    startingEquipment: ["Short Sword", "Astrologer's Staff", "Scripture Wooden Shield", "Astrologer set", "Glintstone Pebble", "Glintstone Arc"],
    image: classImage("astrologer"),
    starting: { right: ["short-sword", "astrologers-staff"], left: ["scripture-wooden-shield"] },
    armor: {
      helm: "h-astrologer-hood",
      chest: "c-astrologer-robe",
      gauntlets: "g-astrologer-gloves",
      legs: "l-astrologer-trousers"
    }
  },
  {
    id: "prophet",
    name: "Prophet",
    level: 7,
    stats: { vigor: 10, mind: 14, endurance: 8, strength: 11, dexterity: 10, intelligence: 7, faith: 16, arcane: 10 },
    description: "Pure Faith caster. Highest Fai baseline + Mind 14 + starting seal, Heal, and Catch Flame.",
    startingEquipment: ["Short Spear", "Finger Seal", "Rickety Shield", "Prophet set", "Heal", "Catch Flame"],
    image: classImage("prophet"),
    starting: { right: ["short-spear", "finger-seal"], left: ["rickety-shield"] },
    armor: {
      helm: "h-prophet-blindfold",
      chest: "c-prophet-robe",
      gauntlets: null,
      legs: "l-prophet-trousers"
    }
  },
  {
    id: "samurai",
    name: "Samurai",
    level: 9,
    stats: { vigor: 12, mind: 11, endurance: 13, strength: 12, dexterity: 15, intelligence: 9, faith: 8, arcane: 8 },
    description: "Dex katana + bow hybrid. Highest Endurance baseline — strong for Dex builds and heavier Dex weapons.",
    startingEquipment: ["Uchigatana", "Longbow", "Red Thorn Roundshield", "Land of Reeds set", "Arrow x20", "Fire Arrow x10"],
    image: classImage("samurai"),
    starting: { right: ["uchigatana", "longbow"], left: ["red-thorn-roundshield"] },
    armor: {
      helm: "h-land-of-reeds-helm",
      chest: "c-land-of-reeds-armor-altered",
      gauntlets: "g-land-of-reeds-gauntlets",
      legs: "l-land-of-reeds-greaves"
    }
  },
  {
    id: "prisoner",
    name: "Prisoner",
    level: 9,
    stats: { vigor: 11, mind: 12, endurance: 11, strength: 11, dexterity: 14, intelligence: 14, faith: 6, arcane: 9 },
    description: "Spellblade hybrid. Dex 14 + Int 14 + Estoc and Glintstone Staff — best Int melee starter.",
    startingEquipment: ["Estoc", "Glintstone Staff", "Rift Shield", "Prisoner set", "Magic Glintblade"],
    image: classImage("prisoner"),
    starting: { right: ["estoc", "glintstone-staff"], left: ["rift-shield"] },
    armor: {
      helm: "h-prisoner-iron-mask",
      chest: "c-prisoner-clothing",
      gauntlets: null,
      legs: "l-prisoner-trousers"
    }
  },
  {
    id: "confessor",
    name: "Confessor",
    level: 10,
    stats: { vigor: 10, mind: 13, endurance: 10, strength: 12, dexterity: 12, intelligence: 9, faith: 14, arcane: 9 },
    description: "Faith paladin hybrid. Fai 14 + balanced Str/Dex 12 — best starter for incantation-based melee.",
    startingEquipment: ["Broadsword", "Finger Seal", "Blue Crest Heater Shield", "Confessor set", "Urgent Heal", "Assassin's Approach"],
    image: classImage("confessor"),
    starting: { right: ["broadsword", "finger-seal"], left: ["blue-crest-heater-shield"] },
    armor: {
      helm: "h-confessor-hood",
      chest: "c-confessor-armor",
      gauntlets: "g-confessor-gloves",
      legs: "l-confessor-boots"
    }
  },
  {
    id: "wretch",
    name: "Wretch",
    level: 1,
    stats: { vigor: 10, mind: 10, endurance: 10, strength: 10, dexterity: 10, intelligence: 10, faith: 10, arcane: 10 },
    description: "Naked level-1 blank slate. Flat 10s in every stat = zero wasted points. Best for min-max and challenge runs.",
    startingEquipment: ["Club"],
    image: classImage("wretch"),
    starting: { right: ["club"] },
    armor: {
      helm: "h-wretch's-hood",
      chest: "c-wretch's-armor",
      gauntlets: "g-wretch's-gauntlets",
      legs: "l-wretch's-trousers"
    }
  },
];

export function getClass(id: string): StartingClass | undefined {
  return classes.find((c) => c.id === id);
}
