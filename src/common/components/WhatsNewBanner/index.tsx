import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, X } from "lucide-react";
import GlassCard from "@/components/er/GlassCard";
import { fadeRise } from "@/components/er/motion";

/**
 * Identifies the announcement currently shown. Bump it for the next content
 * update: everyone who dismissed an older one sees the new one once.
 */
export const ANNOUNCEMENT_ID = "tarnished-edition-2026";

/** localStorage key holding the id of the last announcement the user closed. */
export const ANNOUNCEMENT_STORAGE_KEY = "tarnished-builds:dismissed-announcement";

// localStorage can throw (Safari private mode, storage disabled, quota). If
// it does, the banner still shows and still closes for the current visit.
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
    // Not persisted; the banner will reappear on the next visit.
  }
}

/**
 * One-time "what's new" banner. Shown until the user closes it, then never
 * again on that browser for the same ANNOUNCEMENT_ID.
 */
const WhatsNewBanner = () => {
  // Read synchronously in the initializer so returning visitors never see a
  // one-frame flash of the banner.
  const [visible, setVisible] = useState(() => readDismissed() !== ANNOUNCEMENT_ID);

  if (!visible) return null;

  const dismiss = () => {
    writeDismissed(ANNOUNCEMENT_ID);
    setVisible(false);
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeRise} className="mb-8">
      <GlassCard glow className="border-gold-500/50 pr-12">
        <section aria-labelledby="whats-new-title" className="flex items-start gap-3">
          <Sparkles className="mt-0.5 size-5 shrink-0 text-gold-400" aria-hidden />
          <div className="min-w-0">
            <h2 id="whats-new-title" className="panel-heading">
              New: Tarnished Edition DLC content
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              The <span className="text-gold-300">Idus Knight</span> and{" "}
              <span className="text-gold-300">Heavy Knight</span> starting classes are now available,
              along with the new weapons, shields and armor sets: Idus Sword, Hefty Scimitar,
              Leontiel's Greatsword, Golden Order Flail, Reed Great Katana, Ritual Thrusting Shield
              and more.
            </p>
          </div>
        </section>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute top-2 right-2 flex size-9 items-center justify-center rounded-full text-gold-500/80 transition-colors hover:bg-gold-500/10 hover:text-gold-300 focus-visible:ring-2 focus-visible:ring-gold-500/60 focus-visible:outline-none"
        >
          <X className="size-4" aria-hidden />
        </button>
      </GlassCard>
    </motion.div>
  );
};

export default WhatsNewBanner;
