/**
 * Frame a portrait on its figure instead of its whole canvas.
 *
 * Some class artwork (e.g. the Tarnished Edition Idus Knight) has wide
 * transparent margins, so `object-contain` shrinks the whole canvas and the
 * figure looks smaller than the other classes. Given the figure's bounding
 * box in natural image pixels, this returns the absolute size/offset that
 * scales the figure to fit the frame (largest scale that keeps the whole box
 * visible), centred horizontally and resting on the frame's bottom edge — the
 * same placement `object-contain object-bottom` gives the other portraits.
 * Only transparent margin is ever cropped.
 */
export type PortraitFocus = {
  /** Natural image size in px: [width, height]. */
  natural: readonly [number, number];
  /** Figure bounding box in natural px: [left, top, right, bottom] (exclusive). */
  box: readonly [number, number, number, number];
};

export type FramedStyle = { width: number; height: number; left: number; top: number };

export function focusedPortraitStyle(
  focus: PortraitFocus,
  frame: { width: number; height: number },
): FramedStyle {
  const [x0, y0, x1, y1] = focus.box;
  const boxW = x1 - x0;
  const boxH = y1 - y0;
  const scale = Math.min(frame.width / boxW, frame.height / boxH);
  return {
    width: focus.natural[0] * scale,
    height: focus.natural[1] * scale,
    left: (frame.width - boxW * scale) / 2 - x0 * scale,
    top: frame.height - boxH * scale - y0 * scale,
  };
}
