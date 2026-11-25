import { useState } from "react";
import { Sparkles } from "lucide-react";
import { getClass, type StartingClass } from "@/data/classes";
import { CATEGORIES, weapons, type Weapon, type WeaponCategory } from "@/data/weapons";
import { TARNISHED_WEAPON_EXTRAS } from "@/data/tarnished-edition";
import { getUpgradeType } from "@/lib/recommender";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

/**
 * Identifies the announcement currently shown. Bump it for the next content
 * update: everyone who closed an older one sees the new one once.
 */
export const ANNOUNCEMENT_ID = "tarnished-edition-2026";

/** localStorage key holding the id of the last announcement the user closed. */
export const ANNOUNCEMENT_STORAGE_KEY = "tarnished-builds:dismissed-announcement";

const NEW_CLASS_IDS = ["idus-knight", "heavy-knight"];
const NEW_ARMOR_SETS = ["Silver Grooved", "Steel", "Leontiel's", "Golden Order"];

// localStorage can throw (Safari private mode, storage disabled, quota). If
// it does, the dialog still shows and still closes for the current visit.
function readDismissed(): string | null {
  try {
    return window.localStorage.getItem(ANNOUNCEMENT_STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeDismissed(id: string) {
  try {
    window.localStorage.setItem(ANNOUNCEMENT_STORAGE_KEY, id);
  } catch {
    // Not persisted; the dialog will reappear on the next visit.
  }
}

const newClasses = NEW_CLASS_IDS.map(getClass).filter((c): c is StartingClass => !!c);

// Driven by the data overlay, so a weapon added there is listed here too.
// Grouped in the picker's category order.
const weaponsByCategory: [WeaponCategory, Weapon[]][] = (() => {
  const ids = new Set(Object.keys(TARNISHED_WEAPON_EXTRAS));
  const groups = new Map<WeaponCategory, Weapon[]>();
  for (const w of weapons) {
    if (!ids.has(w.id)) continue;
    groups.set(w.category, [...(groups.get(w.category) ?? []), w]);
  }
  return CATEGORIES.filter((c) => groups.has(c)).map((c) => [c, groups.get(c)!]);
})();

const ClassCard = ({ cls }: { cls: StartingClass }) => (
  <figure className="flex flex-col items-center gap-2 rounded-lg border border-gold-500/25 bg-black/25 p-3 text-center">
    <img
      src={cls.image}
      alt={`${cls.name} class portrait`}
      className="h-40 w-full rounded-md object-contain sm:h-48"
    />
    <figcaption className="space-y-1">
      <p className="font-display text-sm font-semibold tracking-wide text-gold-300">
        {cls.name}{" "}
        <span className="text-xs font-normal whitespace-nowrap text-gold-500/75">· Lv {cls.level}</span>
      </p>
      <p className="text-xs text-muted-foreground">{cls.description}</p>
    </figcaption>
  </figure>
);

/**
 * One-time "what's new" dialog. Shown on load until the user presses Close,
 * then never again on that browser for the same ANNOUNCEMENT_ID. Clicking
 * outside and Escape are blocked on purpose: Close is the only way out.
 */
const WhatsNewDialog = () => {
  // Read synchronously in the initializer so returning visitors never see a
  // one-frame flash of the dialog.
  const [open, setOpen] = useState(() => readDismissed() !== ANNOUNCEMENT_ID);

  const close = () => {
    writeDismissed(ANNOUNCEMENT_ID);
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogContent
        showCloseButton={false}
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        // Near-opaque (unlike plain glass-card) so the page doesn't bleed
        // through behind a long, text-heavy dialog.
        className="glass-card max-h-[90dvh] gap-5 overflow-y-auto border-gold-500/40 bg-[rgba(20,18,15,0.96)] sm:max-w-2xl"
      >
        <DialogHeader>
          <DialogTitle className="font-display flex items-center justify-center gap-2 tracking-wide text-gold-300 sm:justify-start">
            <Sparkles className="size-5 text-gold-400" aria-hidden />
            New: Tarnished Edition DLC content
          </DialogTitle>
          <DialogDescription>
            The Tarnished Edition starting classes, weapons, shields and armor sets are now
            available in the class picker, the weapon picker and the armor slots.
          </DialogDescription>
        </DialogHeader>

        <section aria-labelledby="whats-new-classes">
          <h3 id="whats-new-classes" className="panel-heading mb-2">
            New starting classes
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {newClasses.map((c) => (
              <ClassCard key={c.id} cls={c} />
            ))}
          </div>
        </section>

        <section aria-labelledby="whats-new-weapons">
          <h3 id="whats-new-weapons" className="panel-heading mb-2">
            New weapons &amp; shields
          </h3>
          <dl className="grid gap-x-4 gap-y-3 sm:grid-cols-2">
            {weaponsByCategory.map(([category, list]) => (
              <div key={category}>
                <dt className="text-xs font-semibold tracking-wide text-gold-500/80 uppercase">
                  {category}
                </dt>
                {list.map((w) => (
                  <dd key={w.id} className="mt-1 flex items-center gap-2 text-sm">
                    {w.image && (
                      <img
                        src={w.image}
                        alt=""
                        loading="lazy"
                        className="size-8 shrink-0 rounded-sm bg-white/5 object-contain"
                      />
                    )}
                    <span className="text-foreground">{w.name}</span>
                    {getUpgradeType(w) === "somber" && (
                      <span className="text-xs text-muted-foreground">(Somber)</span>
                    )}
                  </dd>
                ))}
              </div>
            ))}
          </dl>
        </section>

        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-gold-300">Armor sets:</span>{" "}
          {NEW_ARMOR_SETS.join(", ")}.
        </p>

        {/* Pinned to the bottom of the scrolling dialog so Close is always
            visible, even on small screens where the content overflows. */}
        <DialogFooter className="sticky -bottom-6 -mx-6 -mb-6 border-t border-gold-500/20 bg-[rgba(20,18,15,0.98)] px-6 py-3">

          <Button
            onClick={close}
            className="border border-gold-500/60 bg-gold-500/15 text-gold-300 hover:bg-gold-500/25"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsNewDialog;
