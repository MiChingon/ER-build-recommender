import { afterEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AnimatedNumber from "./AnimatedNumber";

afterEach(() => {
  globalThis.__mockReducedMotion = false;
});

describe("AnimatedNumber", () => {
  it("renders the value", () => {
    render(<AnimatedNumber value={125} />);
    expect(screen.getByText("125")).toBeTruthy();
  });

  it("renders a plain (non-motion) span under reduced motion", () => {
    globalThis.__mockReducedMotion = true;
    const { container } = render(<AnimatedNumber value={60} className="counter" />);
    const span = container.querySelector("span.counter");
    expect(span?.textContent).toBe("60");
  });

  it("rounds fractional values", () => {
    globalThis.__mockReducedMotion = true;
    render(<AnimatedNumber value={59.6} />);
    expect(screen.getByText("60")).toBeTruthy();
  });
});
