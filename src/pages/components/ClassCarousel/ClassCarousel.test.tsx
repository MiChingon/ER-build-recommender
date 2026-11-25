import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ClassCarousel from "./index";
import { classes } from "@/data/classes";

const nameOverlay = () => screen.queryByTestId("class-portrait-name");

describe("ClassCarousel", () => {
  it("overlays the name on portraits that don't carry it in the artwork", () => {
    for (const id of ["idus-knight", "heavy-knight"]) {
      const cls = classes.find((c) => c.id === id)!;
      const { unmount } = render(<ClassCarousel classId={id} onChange={() => {}} />);
      expect(nameOverlay()?.textContent).toBe(cls.name);
      unmount();
    }
  });

  it("doesn't duplicate the name on portraits that already show it", () => {
    render(<ClassCarousel classId="vagabond" onChange={() => {}} />);
    expect(nameOverlay()).toBeNull();
    expect(screen.getByAltText("Vagabond portrait")).toBeTruthy();
  });

  it("only flags portraits explicitly marked as unlabeled", () => {
    const unlabeled = classes.filter((c) => c.portraitHasName === false).map((c) => c.id);
    expect(unlabeled).toEqual(["idus-knight", "heavy-knight"]);
  });
});
