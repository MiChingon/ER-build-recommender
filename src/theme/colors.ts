import { Stat } from "../data/classes";

/** Per-stat accent colors shared by the slot grid, AP panel, and stats table. */
export const STAT_COLORS: Record<Stat, string> = {
  vigor: "#e57373",
  mind: "#7986cb",
  endurance: "#ffb74d",
  strength: "#a1887f",
  dexterity: "#81c784",
  intelligence: "#64b5f6",
  faith: "#fff176",
  arcane: "#ba68c8",
};

// Per-infusion color palette. The base 13 affinities plus the two read-only
// labels ("Somber" for unique +10 weapons, "Standard" for non-infusable +25
// weapons like Great Club). Colors are tuned to match the in-game elemental
// palette where it makes sense.
export const INFUSION_COLORS: Record<string, string> = {
  Standard: "#d4af37", // gold (default Ash of War-able)
  Heavy: "#c97e4a", // burnt-orange / strength
  Keen: "#7ed957", // green / dex
  Quality: "#f5d76e", // light gold / balanced
  Fire: "#ff7043", // orange
  "Flame Art": "#ff5722", // red-orange
  Lightning: "#fff176", // pale yellow
  Sacred: "#fff3b0", // cream
  Magic: "#4fc3f7", // azure
  Cold: "#81d4fa", // ice
  Poison: "#9ccc65", // sickly green
  Blood: "#e53935", // crimson
  Occult: "#ce93d8", // purple
  Somber: "#9e9e9e", // grey (unique skill, non-infusable +10)
};

export const DAMAGE_TYPE_COLORS: Record<string, string> = {
  phy: "#ffffff",
  mag: "#3fbddd",
  fir: "#ff9900",
  lit: "#ffff00",
  hol: "#ffcc99",
};

export const STATUS_COLORS: Record<string, string> = {
  bleed: "#e53935",
  poison: "#9ccc65",
  frost: "#81d4fa",
  rot: "#ec407a",
  sleep: "#b39ddb",
  madness: "#ff7043",
};

export const STATUS_LABELS: Record<string, string> = {
  bleed: "Hemorrhage",
  poison: "Poison",
  frost: "Frostbite",
  rot: "Scarlet Rot",
  sleep: "Sleep",
  madness: "Madness",
};

/** The signature gold used across the cinematic theme. */
export const GOLD = "#d4af37";
