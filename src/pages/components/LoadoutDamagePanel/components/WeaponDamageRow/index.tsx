import { DAMAGE_TYPE_LABELS, estimateAttackPower, estimateSpellScaling, estimateStatusBuildup, getMaxUpgradeLevel } from "../../../../../lib/recommender";
import { Affinity } from "../../../../../lib/types";
import { Weapon } from "../../../../../data/weapons";
import { Stat } from "../../../../../data/classes";
import { SlotPos } from "../../../../../common/types";
import { DAMAGE_TYPE_COLORS, GOLD, STAT_COLORS, STATUS_COLORS, STATUS_LABELS } from "../../../../../theme/colors";
import AnimatedNumber from "@/components/er/AnimatedNumber";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const WeaponDamageRow = ({
  pos,
  weapon,
  affinity,
  target,
  twoHand,
  isActive,
}: {
  pos: SlotPos;
  weapon: Weapon;
  affinity: Affinity;
  target: Record<Stat, number>;
  twoHand: boolean;
  isActive: boolean;
}) => {
  const baseEstimate = estimateAttackPower(weapon, target as never, "base", twoHand, affinity);
  const maxEstimate = estimateAttackPower(weapon, target as never, "max", twoHand, affinity);
  const maxLabel = getMaxUpgradeLevel(weapon);
  const spellScaling = estimateSpellScaling(weapon, target as never);
  const statuses = estimateStatusBuildup(weapon, target as never, affinity);
  const slotLabel = `${pos.hand === "right" ? "R" : "L"}${pos.idx + 1}`;
  return (
    <div
      className={cn(
        "rounded-lg border border-gold-500/20 bg-night-900/50 p-3 backdrop-blur-sm transition-shadow",
        isActive && "border-2 border-gold-500 bg-gold-500/10 shadow-[0_0_16px_rgba(212,175,55,0.2)]",
      )}
    >
      <div className="flex items-center gap-3">
        <Badge
          variant={isActive ? "default" : "outline"}
          className={cn(isActive && "bg-gold-500 text-night-950")}
        >
          {slotLabel}
        </Badge>
        {weapon.image ? (
          <img
            src={weapon.image}
            alt=""
            loading="lazy"
            className="size-10 shrink-0 rounded-sm bg-white/5 object-contain"
          />
        ) : (
          <span className="size-10 shrink-0 rounded-sm bg-white/5" />
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{weapon.name}</p>
          <p className="truncate text-xs text-muted-foreground">
            {weapon.category} · {affinity}
          </p>
        </div>
        <div className="min-w-[90px] shrink-0 text-right">
          <span className="block text-xs text-muted-foreground">+0 · {baseEstimate.total}</span>
          <span className="block text-sm font-semibold">
            {maxLabel} · <AnimatedNumber value={maxEstimate.total} />
          </span>
        </div>
      </div>
      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
        {maxEstimate.breakdown.map((b) => (
          <span key={b.type} className="flex items-center gap-1.5">
            <span
              className="size-2 shrink-0 rounded-full"
              style={{ backgroundColor: DAMAGE_TYPE_COLORS[b.type] ?? "#a8a29e" }}
            />
            <span className="text-xs text-muted-foreground">
              {DAMAGE_TYPE_LABELS[b.type]} {b.total}
            </span>
          </span>
        ))}
        {spellScaling && (() => {
          const spellColor = spellScaling.type === "sorcery" ? STAT_COLORS.intelligence : GOLD;
          return (
            <span className="flex items-center gap-1.5">
              <span
                className="size-2 shrink-0 rounded-full"
                style={{ backgroundColor: spellColor }}
              />
              <span className="text-xs font-semibold" style={{ color: spellColor }}>
                {spellScaling.type === "sorcery" ? "Sorcery Scaling" : "Incant Scaling"}{" "}
                {spellScaling.max} (+0: {spellScaling.base})
              </span>
            </span>
          );
        })()}
        {statuses.map((status) => (
          <span key={status.type} className="flex items-center gap-1.5">
            <span
              className="size-2 shrink-0 rounded-full"
              style={{ backgroundColor: STATUS_COLORS[status.type] }}
            />
            <span className="text-xs font-semibold" style={{ color: STATUS_COLORS[status.type] }}>
              {STATUS_LABELS[status.type]} {status.max} (+0: {status.base})
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default WeaponDamageRow;
