import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Weapon } from "../../../data/weapons";
import { Affinity, AFFINITIES } from "../../../lib/types";
import { INFUSION_COLORS } from "../../../theme/colors";
import { cn } from "@/lib/utils";

const AffinityPicker = ({
  open,
  weapon,
  currentAffinity,
  onSelect,
  onClose,
}: {
  open: boolean;
  weapon: Weapon | null;
  currentAffinity: Affinity;
  onSelect: (a: Affinity) => void;
  onClose: () => void;
}) => {
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        className="glass-card max-w-[calc(100%-2rem)] gap-3 border-gold-500/30 sm:max-w-sm"
        aria-describedby={undefined}
      >
        <DialogTitle className="font-display tracking-wide text-gold-300">
          Change infusion
        </DialogTitle>
        {weapon && (
          <div className="flex items-center gap-3">
            {weapon.image ? (
              <img
                src={weapon.image}
                alt=""
                loading="lazy"
                className="size-12 shrink-0 rounded-sm bg-white/5 object-contain"
              />
            ) : (
              <span className="size-12 shrink-0 rounded-sm bg-white/5" />
            )}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{weapon.name}</p>
              <p className="truncate text-xs text-muted-foreground">{weapon.category}</p>
            </div>
          </div>
        )}
        <ul className="max-h-[420px] overflow-y-auto">
          {AFFINITIES.map((a) => {
            const color = INFUSION_COLORS[a] ?? INFUSION_COLORS.Standard;
            const selected = a === currentAffinity;
            return (
              <li key={a}>
                <button
                  type="button"
                  onClick={() => {
                    onSelect(a);
                    onClose();
                  }}
                  className={cn(
                    "flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-left text-sm transition-colors hover:bg-gold-500/10 focus-visible:bg-gold-500/10 focus-visible:outline-none",
                    selected && "bg-gold-500/15 ring-1 ring-gold-500/60",
                  )}
                >
                  <span
                    className="size-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
                  />
                  {a}
                </button>
              </li>
            );
          })}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default AffinityPicker;
