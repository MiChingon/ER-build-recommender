import { RotateCcw, X } from "lucide-react";
import { Weapon } from "../../../data/weapons";
import { Affinity } from "../../../lib/types";
import { getUpgradeType } from "../../../lib/recommender";
import { INFUSION_COLORS } from "../../../theme/colors";
import { Hand, SlotPos } from "../../../common/types";
import InfoTip from "@/components/er/InfoTip";
import { cn } from "@/lib/utils";

type WeaponSlot = { weapon: Weapon | null; affinity: Affinity };

const InfusionControl = ({
  weapon,
  affinity,
  onClick,
}: {
  weapon: Weapon;
  affinity: Affinity;
  onClick: () => void;
}) => {
  const upgradeType = getUpgradeType(weapon);
  const disabled = upgradeType !== "infusable";
  const label = upgradeType === "somber" ? "Somber" : upgradeType === "standard-fixed" ? "Standard" : affinity;
  const color = INFUSION_COLORS[label] ?? INFUSION_COLORS.Standard;
  return (
    <InfoTip title={disabled ? "Affinity cannot be changed for this weapon" : "Change infusion"}>
      <span className="block w-full">
        <button
          type="button"
          disabled={disabled}
          onClick={(e) => {
            e.stopPropagation();
            if (!disabled) onClick();
          }}
          className="w-full rounded-md border px-2 py-0.5 text-[0.7rem] leading-tight transition-colors disabled:cursor-not-allowed"
          style={{
            color: disabled ? `${color}99` : color,
            borderColor: disabled ? `${color}55` : color,
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            if (!disabled) e.currentTarget.style.backgroundColor = `${color}1a`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          {label}
        </button>
      </span>
    </InfoTip>
  );
};

const WeaponSlotsGrid = ({
  rightHand,
  leftHand,
  active,
  onActivate,
  onPickWeapon,
  onChangeAffinity,
  onClear,
}: {
  rightHand: WeaponSlot[];
  leftHand: WeaponSlot[];
  active: SlotPos;
  onActivate: (pos: SlotPos) => void;
  onPickWeapon: (pos: SlotPos) => void;
  onChangeAffinity: (pos: SlotPos) => void;
  onClear: (pos: SlotPos) => void;
}) => {
  const row = (hand: Hand, slots: WeaponSlot[], label: string) => (
    <div>
      <p className="mb-1 text-xs text-muted-foreground">{label}</p>
      <div className="flex gap-2">
        {slots.map((slot, idx) => {
          const isActive = active.hand === hand && active.idx === idx;
          const w = slot.weapon;
          return (
            <div key={`${hand}-${idx}`} className="flex min-w-0 flex-1 flex-col gap-1">
              <div
                role="button"
                tabIndex={0}
                onClick={() => (slot.weapon ? onActivate({ hand, idx }) : onPickWeapon({ hand, idx }))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    if (slot.weapon) onActivate({ hand, idx });
                    else onPickWeapon({ hand, idx });
                  }
                }}
                className={cn(
                  "relative flex min-h-24 min-w-0 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border bg-night-900/50 p-2 backdrop-blur-sm transition-all duration-200",
                  isActive
                    ? "border-2 border-gold-500 bg-gold-500/10 shadow-[0_0_16px_rgba(212,175,55,0.25)]"
                    : "border-gold-500/20 hover:-translate-y-0.5 hover:border-gold-500/60 hover:shadow-[0_0_14px_rgba(212,175,55,0.18)]",
                )}
              >
                <span className="absolute top-0.5 left-1.5 text-[0.65rem] text-muted-foreground">
                  {hand === "right" ? "R" : "L"}
                  {idx + 1}
                </span>
                {w ? (
                  <>
                    {w.image ? (
                      <img
                        src={w.image}
                        alt=""
                        loading="lazy"
                        className="size-12 shrink-0 rounded-sm bg-white/5 object-contain"
                      />
                    ) : (
                      <span className="size-12 shrink-0 rounded-sm bg-white/5" />
                    )}
                    <InfoTip title={w.name}>
                      <span className="mt-1 block w-full truncate text-center text-xs leading-tight">
                        {w.name}
                      </span>
                    </InfoTip>
                    <InfoTip title="Change weapon">
                      <button
                        type="button"
                        aria-label="Change weapon"
                        onClick={(e) => {
                          e.stopPropagation();
                          onPickWeapon({ hand, idx });
                        }}
                        className="absolute top-0 right-7 rounded p-1.5 text-muted-foreground opacity-80 transition-colors hover:text-gold-300 sm:right-5 sm:p-1"
                      >
                        <RotateCcw className="size-3.5" />
                      </button>
                    </InfoTip>
                    <InfoTip title="Clear slot">
                      <button
                        type="button"
                        aria-label="Clear slot"
                        onClick={(e) => {
                          e.stopPropagation();
                          onClear({ hand, idx });
                        }}
                        className="absolute top-0 right-0 rounded p-1.5 text-muted-foreground opacity-80 transition-colors hover:text-gold-300 sm:p-1"
                      >
                        <X className="size-3.5" />
                      </button>
                    </InfoTip>
                  </>
                ) : (
                  <span className="text-xs text-stone-500">Empty</span>
                )}
              </div>
              {w && (
                <InfusionControl
                  weapon={w}
                  affinity={slot.affinity}
                  onClick={() => onChangeAffinity({ hand, idx })}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
  return (
    <div className="space-y-3">
      {row("right", rightHand, "Right hand (R1 · R2 · R3)")}
      {row("left", leftHand, "Left hand (L1 · L2 · L3)")}
    </div>
  );
};

export default WeaponSlotsGrid;
