import { StartingClass, Stat, StatVector } from "../data/classes";
import { ScaleGrade } from "../data/weapons";

export const SCALE_RANK: Record<ScaleGrade, number> = { S: 6, A: 5, B: 4, C: 3, D: 2, E: 1 };

export const PHYSICAL_AP_BREAKPOINT = 60;
export const ELEMENTAL_AP_BREAKPOINT = 50;
export const TWO_HAND_STR_MULTIPLIER = 1.5;


export const MAX_TARGET_LEVEL = 200;
export const DEFAULT_TARGET_LEVEL = 125;

export type WeaponUpgrade = "base" | "max";

export const MAX_UPGRADE_MULTIPLIER = 2.6;
export const SOFT_CAP_STAT_VALUE = 80;

export const SCALING_FACTOR: Record<ScaleGrade, number> = {
  S: 1.0, A: 0.75, B: 0.55, C: 0.4, D: 0.25, E: 0.1,
};

export const AFFINITIES = [
  "Standard",
  "Heavy",
  "Keen",
  "Quality",
  "Fire",
  "Flame Art",
  "Lightning",
  "Sacred",
  "Magic",
  "Cold",
  "Poison",
  "Blood",
  "Occult",
] as const;
export type Affinity = (typeof AFFINITIES)[number];

export const AFFINITY_PRIMARIES: Record<Exclude<Affinity, "Standard">, Stat[]> = {
  Heavy: ["strength"],
  Keen: ["dexterity"],
  Quality: ["strength", "dexterity"],
  Fire: ["strength", "dexterity"],
  "Flame Art": ["faith"],
  Lightning: ["dexterity"],
  Sacred: ["faith"],
  Magic: ["intelligence"],
  Cold: ["intelligence"],
  Poison: ["arcane"],
  Blood: ["arcane"],
  Occult: ["arcane"],
};

export const AFFINITY_REQ_FLOOR: Partial<Record<Exclude<Affinity, "Standard">, Partial<Record<Stat, number>>>> = {
  "Flame Art": { faith: 12 },
  Sacred: { faith: 12 },
  Magic: { intelligence: 12 },
  Cold: { intelligence: 12 },
  Poison: { arcane: 10 },
  Blood: { arcane: 10 },
  Occult: { arcane: 10 },
  Lightning: { dexterity: 12 },
};

export const GENERIC_SKILLS = new Set([
  "Quickstep", "Parry", "Square Off", "Kick",
  "Stamp (Upward Cut)", "Impaling Thrust", "Repeating Thrust",
  "Spinning Slash", "Charge Forth", "Wild Strikes", "War Cry",
  "Barbaric Roar", "Endure", "Spinning Chain",
  "Lion's Claw", "Hoarfrost Stomp", "Unsheathe", "Sacred Blade",
  "Golden Vow", "Vacuum Slice", "Storm Wall", "Storm Stomp",
  "Bloody Slash", "Storm Kick", "Thunderstorm",
]);

export type RecommendOptions = {
  targetLevel: number;
  twoHand: boolean;
  affinity: Affinity;
  classId: string;
};

export const DEFAULT_OPTIONS: RecommendOptions = {
  targetLevel: 125,
  twoHand: false,
  affinity: "Standard",
  classId: ""
};

export type Recommendation = {
  target: StatVector;
  rationale: string[];
  ranking: ClassMatch[];
  best: ClassMatch;
  levelingPlan: LevelingStep[];
  effectiveStrRequirement: number;
  options: RecommendOptions;
};

export type ClassMatch = {
  cls: StartingClass;
  waste: number;
  deficit: number;
  finalLevel: number;
};

export type LevelingStep = {
  stat: Stat;
  from: number;
  to: number;
  points: number;
};

export const ELEMENTAL_STATS: Stat[] = ["intelligence", "faith", "arcane"];
