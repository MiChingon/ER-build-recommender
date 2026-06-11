import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import WeaponSlotsGrid from "./index";
import { weapons, type Weapon } from "../../../data/weapons";
import { getUpgradeType } from "../../../lib/recommender";
import type { Affinity } from "../../../lib/types";

const infusable = weapons.find((w) => getUpgradeType(w) === "infusable")!;
const somber = weapons.find((w) => getUpgradeType(w) === "somber")!;

type Slot = { weapon: Weapon | null; affinity: Affinity };

const emptyHand = (): Slot[] => [
  { weapon: null, affinity: "Standard" },
  { weapon: null, affinity: "Standard" },
  { weapon: null, affinity: "Standard" },
];

const renderGrid = (overrides: Partial<Parameters<typeof WeaponSlotsGrid>[0]> = {}) => {
  const handlers = {
    onActivate: vi.fn(),
    onPickWeapon: vi.fn(),
    onChangeAffinity: vi.fn(),
    onClear: vi.fn(),
  };
  const right = emptyHand();
  right[0] = { weapon: infusable, affinity: "Standard" };
  render(
    <WeaponSlotsGrid
      rightHand={right}
      leftHand={emptyHand()}
      active={{ hand: "right", idx: 0 }}
      {...handlers}
      {...overrides}
    />,
  );
  return handlers;
};

const tile = (label: string) =>
  screen
    .getAllByRole("button")
    .find((b) => b.textContent?.startsWith(label) && b.getAttribute("role") === "button")!;

describe("WeaponSlotsGrid interaction rules", () => {
  it("empty slot click → onPickWeapon (activate + open picker)", () => {
    const h = renderGrid();
    fireEvent.click(tile("R2"));
    expect(h.onPickWeapon).toHaveBeenCalledWith({ hand: "right", idx: 1 });
    expect(h.onActivate).not.toHaveBeenCalled();
  });

  it("filled slot click → onActivate only (no picker)", () => {
    const h = renderGrid();
    fireEvent.click(tile("R1"));
    expect(h.onActivate).toHaveBeenCalledWith({ hand: "right", idx: 0 });
    expect(h.onPickWeapon).not.toHaveBeenCalled();
  });

  it("↻ button → onPickWeapon for that slot, without activating via bubble", () => {
    const h = renderGrid();
    fireEvent.click(screen.getByRole("button", { name: "Change weapon" }));
    expect(h.onPickWeapon).toHaveBeenCalledWith({ hand: "right", idx: 0 });
    expect(h.onActivate).not.toHaveBeenCalled();
  });

  it("× button → onClear for that slot, without bubbling", () => {
    const h = renderGrid();
    fireEvent.click(screen.getByRole("button", { name: "Clear slot" }));
    expect(h.onClear).toHaveBeenCalledWith({ hand: "right", idx: 0 });
    expect(h.onActivate).not.toHaveBeenCalled();
  });

  it("infusion button opens the affinity picker for infusable weapons", () => {
    const h = renderGrid();
    fireEvent.click(screen.getByRole("button", { name: "Standard" }));
    expect(h.onChangeAffinity).toHaveBeenCalledWith({ hand: "right", idx: 0 });
  });

  it("infusion button is disabled for somber weapons", () => {
    const right = emptyHand();
    right[0] = { weapon: somber, affinity: "Standard" };
    const h = renderGrid({ rightHand: right });
    const btn = screen.getByRole("button", { name: "Somber" });
    expect((btn as HTMLButtonElement).disabled).toBe(true);
    fireEvent.click(btn);
    expect(h.onChangeAffinity).not.toHaveBeenCalled();
  });

  it("highlights the active slot with the gold border treatment", () => {
    renderGrid();
    expect(tile("R1").className).toContain("border-gold-500 ");
    expect(tile("R2").className).not.toContain("border-gold-500 ");
  });
});
