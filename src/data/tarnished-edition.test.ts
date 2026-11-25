import { describe, expect, it } from "vitest";
import { weapons } from "./weapons";
import { classes } from "./classes";
import { findArmor, totalArmorStatBoosts } from "./armor";
import { estimateAttackPower, getUpgradeType } from "../lib/recommender";
import type { StatVector } from "./classes";
import type { Affinity } from "../lib/types";

// Stats at which scaling contributes nothing (0 in every attribute), so the
// estimate reduces to base attack × reinforce multiplier — the wiki's +25/+10
// "Attack Power" column without the stat bonus.
const ZERO: StatVector = {
  vigor: 0, mind: 0, endurance: 0, strength: 0,
  dexterity: 0, intelligence: 0, faith: 0, arcane: 0,
};

const byId = (id: string) => {
  const w = weapons.find((x) => x.id === id);
  if (!w) throw new Error(`missing weapon ${id}`);
  return w;
};

describe("Tarnished Edition content", () => {
  it("adds both starting classes with gear that resolves", () => {
    for (const id of ["idus-knight", "heavy-knight"]) {
      const c = classes.find((x) => x.id === id);
      expect(c).toBeDefined();
      // Level = stat sum - 79 for every Elden Ring class.
      const sum = Object.values(c!.stats).reduce((a, b) => a + b, 0);
      expect(c!.level).toBe(sum - 79);
      for (const wid of [...(c!.starting?.right ?? []), ...(c!.starting?.left ?? [])]) {
        expect(weapons.some((w) => w.id === wid)).toBe(true);
      }
      for (const aid of Object.values(c!.armor)) {
        expect(findArmor(aid)).toBeDefined();
      }
    }
  });

  it("classifies upgrade paths", () => {
    expect(getUpgradeType(byId("idus-sword"))).toBe("infusable");
    expect(getUpgradeType(byId("reed-great-katana"))).toBe("infusable");
    expect(getUpgradeType(byId("leontiels-greatsword"))).toBe("somber");
    expect(getUpgradeType(byId("golden-order-flail"))).toBe("somber");
  });

  it.each<[string, Affinity, number]>([
    ["idus-sword", "Standard", 303],
    ["idus-sword", "Heavy", 282],
    ["idus-sword", "Fire", 408],
    ["hefty-scimitar", "Standard", 330],
    ["reverse-bladed-sword", "Keen", 242],
    ["reed-great-katana", "Occult", 342],
    ["ritual-thrusting-shield", "Standard", 330],
    ["leontiels-greatsword", "Standard", 318],
    ["golden-order-flail", "Standard", 408],
  ])("%s %s at max matches the wiki base AP (%i)", (id, affinity, expected) => {
    const ap = estimateAttackPower(byId(id), ZERO, "max", false, affinity);
    expect(Math.abs(ap.base - expected)).toBeLessThanOrEqual(2);
  });

  it("Gold Tattoo set grants +4 Faith", () => {
    expect(
      totalArmorStatBoosts({
        helm: "h-broken-gold-mask",
        chest: "c-gold-tattoo-chest",
        gauntlets: "g-gold-tattoo-arm",
        legs: "l-gold-tattoo-leg",
      }),
    ).toEqual({ faith: 4 });
  });
});
