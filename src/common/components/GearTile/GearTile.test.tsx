import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import GearTile from "./index";

describe("GearTile", () => {
  it("calls onClick when the tile is clicked", () => {
    const onClick = vi.fn();
    render(
      <GearTile label="T1" image="x.png" name="Erdtree's Favor" onClick={onClick} onClear={() => {}} />,
    );
    fireEvent.click(screen.getByText("T1").parentElement!);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("clear button fires onClear without bubbling to onClick", () => {
    const onClick = vi.fn();
    const onClear = vi.fn();
    render(
      <GearTile label="T1" image="x.png" name="Erdtree's Favor" onClick={onClick} onClear={onClear} />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Clear slot" }));
    expect(onClear).toHaveBeenCalledTimes(1);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("shows the empty state when no image is set", () => {
    render(<GearTile label="T2" image={null} name={null} onClick={() => {}} onClear={() => {}} />);
    expect(screen.getByText("Empty")).toBeTruthy();
    expect(screen.queryByRole("button", { name: "Clear slot" })).toBeNull();
  });

  it("activates on Enter for keyboard users", () => {
    const onClick = vi.fn();
    render(<GearTile label="T3" image={null} name={null} onClick={onClick} onClear={() => {}} />);
    fireEvent.keyDown(screen.getByText("Empty").parentElement!, { key: "Enter" });
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
