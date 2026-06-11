import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import InfoTip from "./InfoTip";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

const renderTip = () =>
  render(
    <InfoTip title="Helpful hint">
      <button type="button">trigger</button>
    </InfoTip>,
  );

describe("InfoTip", () => {
  it("opens immediately on touch tap and holds for 5 s", () => {
    renderTip();
    const trigger = screen.getByRole("button", { name: "trigger" });

    act(() => {
      fireEvent.pointerDown(trigger, { pointerType: "touch" });
    });
    expect(screen.getAllByText("Helpful hint").length).toBeGreaterThan(0);

    // Still open well within the hold window.
    act(() => {
      vi.advanceTimersByTime(4000);
    });
    expect(screen.getAllByText("Helpful hint").length).toBeGreaterThan(0);

    // Auto-closes after the 5 s hold.
    act(() => {
      vi.advanceTimersByTime(1100);
    });
    expect(screen.queryByText("Helpful hint")).toBeNull();
  });

  it("does not open on mouse pointerdown", () => {
    renderTip();
    const trigger = screen.getByRole("button", { name: "trigger" });
    act(() => {
      fireEvent.pointerDown(trigger, { pointerType: "mouse" });
    });
    expect(screen.queryByText("Helpful hint")).toBeNull();
  });

  it("renders children unchanged when title is empty", () => {
    render(
      <InfoTip title="">
        <button type="button">bare</button>
      </InfoTip>,
    );
    expect(screen.getByRole("button", { name: "bare" })).toBeTruthy();
  });
});
