/**
 * Mark positions for the Soul Level slider. Radix Slider has no native marks,
 * so the UI absolutely positions labels at these percent offsets. The midpoint
 * mark (125, the community-standard PvP level) is dropped when it falls outside
 * the (min, max) range or collides with an endpoint.
 */
export function sliderMarks(
  min: number,
  max: number,
  mid = 125,
): { value: number; pct: number }[] {
  const values = [min];
  if (mid > min && mid < max) values.push(mid);
  if (max > min) values.push(max);
  return values.map((value) => ({
    value,
    pct: max === min ? 0 : ((value - min) / (max - min)) * 100,
  }));
}
