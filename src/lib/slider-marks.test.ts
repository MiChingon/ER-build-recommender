import { describe, expect, it } from "vitest";
import { sliderMarks } from "./slider-marks";

describe("sliderMarks", () => {
  it("returns min, 125, max for a typical range", () => {
    const marks = sliderMarks(17, 200);
    expect(marks.map((m) => m.value)).toEqual([17, 125, 200]);
    expect(marks[0].pct).toBe(0);
    expect(marks[2].pct).toBe(100);
    expect(marks[1].pct).toBeCloseTo(((125 - 17) / (200 - 17)) * 100);
  });

  it("drops the 125 mark when minLevel is above 125", () => {
    expect(sliderMarks(126, 200).map((m) => m.value)).toEqual([126, 200]);
  });

  it("dedupes when minLevel equals 125", () => {
    expect(sliderMarks(125, 200).map((m) => m.value)).toEqual([125, 200]);
  });

  it("drops 125 when it equals max", () => {
    expect(sliderMarks(17, 125).map((m) => m.value)).toEqual([17, 125]);
  });

  it("handles min === max without dividing by zero", () => {
    const marks = sliderMarks(200, 200);
    expect(marks).toEqual([{ value: 200, pct: 0 }]);
  });

  it("works at the extreme low end", () => {
    const marks = sliderMarks(1, 200);
    expect(marks.map((m) => m.value)).toEqual([1, 125, 200]);
  });
});
