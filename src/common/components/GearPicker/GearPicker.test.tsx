import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import GearPicker from "./index";

const OPTIONS = [
  { id: "longsword", name: "Longsword" },
  { id: "uchigatana", name: "Uchigatana" },
  { id: "halberd", name: "Halberd" },
];

describe("GearPicker", () => {
  it("filters options as the user types and shows 'No matches' when empty", () => {
    render(
      <GearPicker open title="Select weapon" options={OPTIONS} onSelect={() => {}} onClose={() => {}} />,
    );
    const search = screen.getByPlaceholderText("Search");
    fireEvent.change(search, { target: { value: "uchi" } });
    expect(screen.getByText("Uchigatana")).toBeTruthy();
    expect(screen.queryByText("Longsword")).toBeNull();

    fireEvent.change(search, { target: { value: "zzz" } });
    expect(screen.getByText("No matches")).toBeTruthy();
  });

  it("selecting an item fires onSelect and closes by default", () => {
    const onSelect = vi.fn();
    const onClose = vi.fn();
    render(
      <GearPicker open title="Select weapon" options={OPTIONS} onSelect={onSelect} onClose={onClose} />,
    );
    fireEvent.click(screen.getByText("Uchigatana"));
    expect(onSelect).toHaveBeenCalledWith(OPTIONS[1]);
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("keepOpenOnSelect keeps the dialog open", () => {
    const onClose = vi.fn();
    render(
      <GearPicker
        open
        title="Select weapon"
        options={OPTIONS}
        onSelect={() => {}}
        onClose={onClose}
        keepOpenOnSelect={() => true}
      />,
    );
    fireEvent.click(screen.getByText("Halberd"));
    expect(onClose).not.toHaveBeenCalled();
  });

  it("focuses the search input on open even with a header present", async () => {
    render(
      <GearPicker
        open
        title="Select weapon"
        options={OPTIONS}
        onSelect={() => {}}
        onClose={() => {}}
        header={<button type="button">category</button>}
      />,
    );
    const search = screen.getByPlaceholderText("Search");
    await waitFor(() => expect(document.activeElement).toBe(search));
  });

  it("renders secondary text per option", () => {
    render(
      <GearPicker
        open
        title="Select weapon"
        options={OPTIONS}
        onSelect={() => {}}
        onClose={() => {}}
        secondary={(o) => `id:${o.id}`}
      />,
    );
    expect(screen.getByText("id:longsword")).toBeTruthy();
  });
});
