import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import WhatsNewBanner, { ANNOUNCEMENT_ID, ANNOUNCEMENT_STORAGE_KEY } from "./index";

const title = () => screen.queryByRole("heading", { name: /Tarnished Edition/ });

describe("WhatsNewBanner", () => {
  beforeEach(() => window.localStorage.clear());
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("shows on the first visit", () => {
    render(<WhatsNewBanner />);
    expect(title()).toBeTruthy();
  });

  it("hides and remembers the dismissal when closed", () => {
    render(<WhatsNewBanner />);
    fireEvent.click(screen.getByRole("button", { name: "Dismiss announcement" }));
    expect(title()).toBeNull();
    expect(window.localStorage.getItem(ANNOUNCEMENT_STORAGE_KEY)).toBe(ANNOUNCEMENT_ID);

    // A later visit (fresh mount) stays hidden.
    cleanup();
    render(<WhatsNewBanner />);
    expect(title()).toBeNull();
  });

  it("shows again when a previous announcement was dismissed", () => {
    window.localStorage.setItem(ANNOUNCEMENT_STORAGE_KEY, "some-older-announcement");
    render(<WhatsNewBanner />);
    expect(title()).toBeTruthy();
  });

  it("still renders and closes when localStorage is unavailable", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("denied");
    });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("denied");
    });
    render(<WhatsNewBanner />);
    expect(title()).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Dismiss announcement" }));
    expect(title()).toBeNull();
  });
});
