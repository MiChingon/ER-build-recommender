import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import TargetStatsTable, { armorSegments } from "./index";
import type { Stat } from "../../../data/classes";

beforeEach(() => {
  // Plain values from AnimatedNumber keep assertions deterministic.
  globalThis.__mockReducedMotion = true;
});

const STATS: Record<Stat, number> = {
  vigor: 60,
  mind: 12,
  endurance: 25,
  strength: 60,
  dexterity: 22,
  intelligence: 9,
  faith: 9,
  arcane: 7,
};

const BASE: Record<Stat, number> = {
  vigor: 15,
  mind: 10,
  endurance: 11,
  strength: 14,
  dexterity: 13,
  intelligence: 9,
  faith: 9,
  arcane: 7,
};

describe("armorSegments", () => {
  it("splits base / invest / armor portions of the effective stat", () => {
    const seg = armorSegments(10, 40, 10); // effective 50
    expect(seg.basePct).toBeCloseTo(20);
    expect(seg.investPct).toBeCloseTo(60);
    expect(seg.armorPct).toBeCloseTo(20);
    expect(seg.basePct + seg.investPct + seg.armorPct).toBeCloseTo(100);
  });

  it("has no armor segment without a boost", () => {
    const seg = armorSegments(15, 60, 0);
    expect(seg.armorPct).toBe(0);
    expect(seg.basePct).toBeCloseTo(25);
    expect(seg.investPct).toBeCloseTo(75);
  });

  it("caps the base segment when base exceeds target (wasted points)", () => {
    const seg = armorSegments(80, 60, 0);
    expect(seg.basePct).toBeLessThanOrEqual(100);
    expect(seg.armorPct).toBe(0);
  });

  it("survives a zero target", () => {
    expect(armorSegments(0, 0, 0)).toEqual({ basePct: 100, investPct: 0, armorPct: 0 });
  });
});

describe("TargetStatsTable armor showcase", () => {
  it("renders the glowing +N badge only for boosted stats", () => {
    render(
      <TargetStatsTable
        target={STATS}
        classBase={BASE}
        classBaseLabel="Vagabond base"
        armorBoosts={{ arcane: 2 }}
      />,
    );
    const badges = screen.getAllByTestId("armor-boost-badge");
    expect(badges.length).toBe(1);
    expect(badges[0].textContent).toBe("+2");
  });

  it("renders no badge when armorBoosts is empty", () => {
    render(
      <TargetStatsTable target={STATS} classBase={BASE} classBaseLabel="Vagabond base" armorBoosts={{}} />,
    );
    expect(screen.queryByTestId("armor-boost-badge")).toBeNull();
  });

  it("shows the +delta investment per stat row", () => {
    render(
      <TargetStatsTable target={STATS} classBase={BASE} classBaseLabel="Vagabond base" />,
    );
    expect(screen.getByText("+45")).toBeTruthy(); // vigor 15 → 60
    expect(screen.getByText("+46")).toBeTruthy(); // strength 14 → 60
  });
});
