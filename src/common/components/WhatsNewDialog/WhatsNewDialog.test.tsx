import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import WhatsNewDialog, { ANNOUNCEMENT_ID, ANNOUNCEMENT_STORAGE_KEY } from "./index";

const dialog = () => screen.queryByRole("dialog");
const closeButton = () => screen.getByRole("button", { name: "Close" });

describe("WhatsNewDialog", () => {
  beforeEach(() => window.localStorage.clear());
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("opens on the first visit with the new classes and weapons by category", () => {
    render(<WhatsNewDialog />);
    const d = dialog()!;
    expect(d).toBeTruthy();
    expect(within(d).getByAltText("Idus Knight class portrait")).toBeTruthy();
    expect(within(d).getByAltText("Heavy Knight class portrait")).toBeTruthy();
    expect(within(d).getByText("Light Greatsword")).toBeTruthy();
    expect(within(d).getByText("Idus Sword")).toBeTruthy();
    expect(within(d).getByText("Thrusting Shield")).toBeTruthy();
    expect(within(d).getByText("Ritual Thrusting Shield")).toBeTruthy();
  });

  it("has no corner X — Close is the only button", () => {
    render(<WhatsNewDialog />);
    expect(within(dialog()!).getAllByRole("button")).toHaveLength(1);
  });

  it("ignores Escape and clicks outside", () => {
    render(<WhatsNewDialog />);
    fireEvent.keyDown(dialog()!, { key: "Escape" });
    fireEvent.pointerDown(document.body);
    fireEvent.click(document.body);
    expect(dialog()).toBeTruthy();
    expect(window.localStorage.getItem(ANNOUNCEMENT_STORAGE_KEY)).toBeNull();
  });

  it("closes with Close and stays closed on later visits", () => {
    render(<WhatsNewDialog />);
    fireEvent.click(closeButton());
    expect(dialog()).toBeNull();
    expect(window.localStorage.getItem(ANNOUNCEMENT_STORAGE_KEY)).toBe(ANNOUNCEMENT_ID);

    cleanup();
    render(<WhatsNewDialog />);
    expect(dialog()).toBeNull();
  });

  it("opens again when a previous announcement was dismissed", () => {
    window.localStorage.setItem(ANNOUNCEMENT_STORAGE_KEY, "some-older-announcement");
    render(<WhatsNewDialog />);
    expect(dialog()).toBeTruthy();
  });

  it("still opens and closes when localStorage is unavailable", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("denied");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("denied");
    });
    render(<WhatsNewDialog />);
    expect(dialog()).toBeTruthy();
    fireEvent.click(closeButton());
    expect(dialog()).toBeNull();
  });
});
