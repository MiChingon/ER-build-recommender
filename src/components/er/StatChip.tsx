import { STAT_LABELS, type Stat } from "../../data/classes";
import { STAT_COLORS } from "../../theme/colors";
import InfoTip from "./InfoTip";

/**
 * Glowing stat pill: requirement plus base→max scaling grades, tinted with
 * the stat's signature color.
 */
const StatChip = ({
  stat,
  requirement,
  baseGrade,
  maxLabel,
  tooltip,
}: {
  stat: Stat;
  requirement?: number;
  baseGrade?: string | null;
  maxLabel?: string | null;
  tooltip: string;
}) => {
  const color = STAT_COLORS[stat];
  return (
    <InfoTip title={tooltip}>
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
        style={{
          backgroundColor: `${color}1f`,
          border: `1px solid ${color}66`,
          boxShadow: `0 0 10px ${color}22, inset 0 0 0 1px rgba(0,0,0,0.25)`,
        }}
      >
        <span
          className="size-2 shrink-0 rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
        />
        <span
          className="text-[0.7rem] font-bold tracking-[0.06em] uppercase"
          style={{ color }}
        >
          {STAT_LABELS[stat].slice(0, 3)}
        </span>
        <span className="text-[0.78rem] font-bold" style={{ color }}>
          {requirement ?? "—"}
        </span>
        {maxLabel && (
          <span
            className="ml-0.5 inline-flex items-center gap-1 pl-2"
            style={{ borderLeft: `1px solid ${color}55` }}
          >
            <span className="text-[0.7rem] font-semibold text-white/55">{baseGrade ?? "—"}</span>
            <span className="text-[0.65rem] text-white/40">→</span>
            <span className="text-[0.72rem] font-bold" style={{ color }}>
              {maxLabel}
            </span>
          </span>
        )}
      </span>
    </InfoTip>
  );
};

export default StatChip;
