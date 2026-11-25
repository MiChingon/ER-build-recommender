import { describe, expect, it } from "vitest";
import { focusedPortraitStyle } from "./portrait-frame";

const frame = { width: 160, height: 237 };

describe("focusedPortraitStyle", () => {
  it("scales the figure box to the frame height and rests it on the bottom", () => {
    // Idus Knight: 270x316 canvas, figure at x 35..220, y 8..287.
    const s = focusedPortraitStyle({ natural: [270, 316], box: [35, 8, 220, 287] }, frame);
    const scale = 237 / 279;
    expect(s.width).toBeCloseTo(270 * scale);
    expect(s.height).toBeCloseTo(316 * scale);
    // Figure bottom lands on the frame bottom, figure top on the frame top.
    expect(s.top + 287 * scale).toBeCloseTo(237);
    expect(s.top + 8 * scale).toBeCloseTo(0);
    // Figure is centred horizontally and stays fully inside the frame.
    const figLeft = s.left + 35 * scale;
    const figRight = s.left + 220 * scale;
    expect(figLeft).toBeGreaterThanOrEqual(0);
    expect(figRight).toBeLessThanOrEqual(160);
    expect(figLeft).toBeCloseTo(160 - figRight);
  });

  it("is limited by width when the figure is wider than the frame ratio", () => {
    const s = focusedPortraitStyle({ natural: [400, 200], box: [0, 0, 400, 200] }, frame);
    expect(s.width).toBeCloseTo(160);
    expect(s.left).toBeCloseTo(0);
    expect(s.top + s.height).toBeCloseTo(237);
  });
});
