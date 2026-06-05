import type { StatVector } from "./classes";

// Hand-curated attribute boosts for helms and chests, sourced from the
// "Notes & Tips" / Special Effect text on each piece's fextralife wiki page.
// This overlay is authoritative: at module load (see the merge at the bottom of
// armor.ts) it overwrites any machine-parsed statBoosts on matched ids.
// Only the 8 player attributes are tracked here; HP / FP / Stamina / Focus and
// defensive penalties carried by these pieces are intentionally omitted.
//
// The three "(Altered)" chest variants share the identical in-game special
// effect as their base garb, so they carry the same boost.
export const ARMOR_STAT_BOOSTS_OVERLAY: Record<string, Partial<StatVector>> = {
  // Academy / sorcerer crowns
  "h-haima-glintstone-crown": { intelligence: 2, strength: 2 },
  "h-hierodas-glintstone-crown": { intelligence: 2, endurance: 2 },
  "h-lazuli-glintstone-crown": { intelligence: 3, dexterity: 3 },
  "h-karolos-glintstone-crown": { intelligence: 3 },
  "h-olivinus-glintstone-crown": { intelligence: 3 },
  "h-twinsage-glintstone-crown": { intelligence: 6 },
  "h-witchs-glintstone-crown": { intelligence: 3, arcane: 3 },
  "h-queens-crescent-crown": { intelligence: 3 },

  // Imp Heads (one attribute each)
  "h-imp-head-lion": { vigor: 2 },
  "h-imp-head-wolf": { endurance: 2 },
  "h-imp-head-fanged": { strength: 2 },
  "h-imp-head-long-tongued": { dexterity: 2 },
  "h-imp-head-cat": { intelligence: 2 },
  "h-imp-head-corpse": { faith: 2 },
  "h-imp-head-elder": { arcane: 2 },

  // Divine / horned warrior helms (DLC)
  "h-horned-warrior-helm": { strength: 5 },
  "h-circlet-of-light": { intelligence: 1, faith: 1, arcane: 1 },
  "h-divine-beast-head": { strength: 4, dexterity: 4 },
  "h-divine-beast-helm": { strength: 3, dexterity: 3 },
  "h-divine-bird-helm": { strength: 3, dexterity: 4 },

  // Masks and hoods
  "h-salzas-hood": { intelligence: 2 },
  "h-high-priest-hat": { intelligence: 1, arcane: 1 },
  "h-curseblade-mask": { dexterity: 5 },
  "h-rulers-mask": { faith: 1 },
  "h-consorts-mask": { dexterity: 1 },
  "h-omensmirk-mask": { strength: 2 },
  "h-marais-mask": { arcane: 1 },
  "h-mask-of-confidence": { arcane: 3 },
  "h-albinauric-mask": { arcane: 4 },
  "h-silver-tear-mask": { arcane: 8 },
  "h-okina-mask": { dexterity: 3 },
  "h-thiolliers-mask": { arcane: 3 },
  "h-preceptors-big-hat": { mind: 3 },
  "h-sacred-crown-helm": { faith: 1 },
  "h-haligtree-helm": { faith: 1 },
  "h-greathood": { intelligence: 2, faith: 2 },
  "h-crimson-hood": { vigor: 1 },
  "h-navy-hood": { mind: 1 },

  // Chests
  "c-thiolliers-garb": { arcane: 2 },
  "c-thiolliers-garb-altered": { arcane: 2 },
  "c-commoners-garb": { faith: 1 },
  "c-commoners-garb-altered": { faith: 1 },
  "c-commoners-simple-garb": { faith: 1 },
  "c-commoners-simple-garb-altered": { faith: 1 },
};
