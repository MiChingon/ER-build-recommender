import { Stat } from "../../data/classes";

export type Hand = "right" | "left";

export type SlotPos = { hand: Hand; idx: number };

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