import type { Variants } from "motion/react";

/** Standard entrance: fade in while rising slightly. */
export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/** Parent variant that staggers `fadeRise` children. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

/** Shared whileInView viewport config — animate once, slightly before entry. */
export const viewportOnce = { once: true, margin: "-60px" } as const;
