import { afterEach, describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EmberCanvas from "./EmberCanvas";

afterEach(() => {
  globalThis.__mockReducedMotion = false;
});

describe("EmberCanvas", () => {
  it("renders nothing under prefers-reduced-motion", () => {
    globalThis.__mockReducedMotion = true;
    const { container } = render(<EmberCanvas />);
    expect(container.querySelector("canvas")).toBeNull();
  });

  it("renders an aria-hidden canvas otherwise and cleans up on unmount", () => {
    const { container, unmount } = render(<EmberCanvas />);
    const canvas = container.querySelector("canvas");
    expect(canvas).toBeTruthy();
    expect(canvas?.getAttribute("aria-hidden")).toBe("true");
    // jsdom has no 2d context — the effect must bail without crashing.
    unmount();
  });
});
