import { Sparkles } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Stat, StatVector, STAT_LABELS, STAT_ORDER } from "../../../data/classes";
import { STAT_COLORS } from "../../../theme/colors";
import AnimatedNumber from "@/components/er/AnimatedNumber";
import InfoTip from "@/components/er/InfoTip";

/**
 * Percent widths for the leveling-progress bar. The bar represents the
 * effective in-game stat (leveled target + armor bonus): `basePct` is the
 * part the class already has, `investPct` the points to level, and
 * `armorPct` the part gifted by armor (rendered as a glowing gold segment).
 */
export function armorSegments(base: number, target: number, armorBoost: number) {
  const effective = target + armorBoost;
  if (effective <= 0) return { basePct: 100, investPct: 0, armorPct: 0 };
  const basePct = Math.min(100, (Math.min(base, target) / effective) * 100);
  const investPct = Math.max(0, (target / effective) * 100 - basePct);
  const armorPct = Math.max(0, 100 - basePct - investPct);
  return { basePct, investPct, armorPct };
}

const TargetStatsTable = ({
  target,
  classBase,
  classBaseLabel,
  armorBoosts,
}: {
  target: Record<Stat, number>;
  classBase: Record<Stat, number>;
  classBaseLabel: string;
  armorBoosts?: Partial<StatVector>;
}) => {
  return (
    <div>
      <h3 className="panel-heading mb-2">
        Target stats <span className="text-muted-foreground normal-case">vs {classBaseLabel}</span>
      </h3>
      <div className="overflow-x-auto">
        <Table className="min-w-[400px]">
          <TableHeader>
            <TableRow className="border-gold-500/20 hover:bg-transparent">
              <TableHead>Stat</TableHead>
              <TableHead className="text-right">Base</TableHead>
              <TableHead className="text-right">Target</TableHead>
              <TableHead>Plan</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {STAT_ORDER.map((stat) => {
              const base = classBase[stat];
              const t = target[stat];
              const armorBoost = armorBoosts?.[stat] ?? 0;
              const delta = t - base;
              const color = STAT_COLORS[stat];
              const seg = armorSegments(base, t, armorBoost);
              return (
                <TableRow key={stat} className="border-gold-500/10">
                  <TableCell>
                    <span className="flex items-center gap-2">
                      <span
                        className="size-2.5 rounded-full"
                        style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}88` }}
                      />
                      <span>{STAT_LABELS[stat]}</span>
                    </span>
                  </TableCell>
                  <TableCell className="text-right">{base}</TableCell>
                  <TableCell className="text-right">
                    <span className="inline-flex items-center justify-end gap-1.5">
                      <AnimatedNumber value={t} className="font-bold" />
                      {armorBoost > 0 && (
                        <InfoTip
                          title={`Armor adds +${armorBoost} ${STAT_LABELS[stat]} — effective ${t + armorBoost} in game. That's ${armorBoost} level${armorBoost === 1 ? "" : "s"} of investment saved.`}
                        >
                          <span
                            data-testid="armor-boost-badge"
                            className="inline-flex items-center gap-0.5 rounded-full border border-gold-500/60 bg-gold-500/15 px-1.5 py-px text-[0.65rem] font-bold text-gold-300 shadow-[0_0_8px_rgba(212,175,55,0.35)]"
                          >
                            <Sparkles className="size-2.5" />+{armorBoost}
                          </span>
                        </InfoTip>
                      )}
                    </span>
                  </TableCell>
                  <TableCell className="w-[40%]">
                    {delta > 0 || armorBoost > 0 ? (
                      <span className="flex items-center gap-2">
                        <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                          {/* points the class already has */}
                          <span
                            className="absolute inset-y-0 left-0 rounded-full opacity-50"
                            style={{ width: `${seg.basePct}%`, backgroundColor: color }}
                          />
                          {/* points to invest while leveling */}
                          <span
                            className="absolute inset-y-0 transition-all duration-500"
                            style={{
                              left: `${seg.basePct}%`,
                              width: `${seg.investPct}%`,
                              backgroundColor: color,
                              boxShadow: `0 0 8px ${color}66`,
                            }}
                          />
                          {/* points gifted by armor — glowing gold */}
                          {seg.armorPct > 0 && (
                            <span
                              className="absolute inset-y-0 animate-pulse rounded-r-full bg-gradient-to-r from-gold-500 to-gold-300"
                              style={{
                                left: `${seg.basePct + seg.investPct}%`,
                                width: `${seg.armorPct}%`,
                                boxShadow: "0 0 10px rgba(212,175,55,0.7)",
                              }}
                            />
                          )}
                        </span>
                        {delta > 0 ? (
                          <span className="text-xs text-muted-foreground">+{delta}</span>
                        ) : (
                          <span className="text-xs text-muted-foreground">-</span>
                        )}
                      </span>
                    ) : delta < 0 ? (
                      <span className="text-xs text-amber-400">{delta} wasted</span>
                    ) : (
                      <span className="text-xs text-muted-foreground">-</span>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TargetStatsTable;
