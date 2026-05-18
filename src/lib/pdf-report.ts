import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { STAT_LABELS, STAT_ORDER, type Stat, type StartingClass, type StatVector } from "../data/classes";
import {
  DAMAGE_TYPE_LABELS,
  estimateAttackPower,
  estimateSpellScaling,
  estimateStatusBuildup,
  getMaxUpgradeLevel,
  recommend,
} from "./recommender";
import type { LoadoutItem, Recommendation } from "./types";
import type { Weapon } from "../data/weapons";
import { ARMOR_SLOTS, ARMOR_SLOT_LABELS, findArmor } from "../data/armor";
import { talismans as ALL_TALISMANS } from "../data/talismans";

const STATUS_LABELS: Record<string, string> = {
  bleed: "Hemorrhage",
  poison: "Poison",
  frost: "Frostbite",
  rot: "Scarlet Rot",
  sleep: "Sleep",
  madness: "Madness",
};

// jsPDF's default Helvetica is WinAnsi-only — Unicode glyphs like → · × ÷ —
// render garbled and unusually wide, pushing text past the right margin.
// Replace them with ASCII equivalents before drawing.
function sanitize(text: string): string {
  return text
    .replace(/→/g, "->")
    .replace(/·/g, "-")
    .replace(/×/g, "x")
    .replace(/÷/g, "/")
    .replace(/—/g, "-")
    .replace(/–/g, "-")
    .replace(/’/g, "'")
    .replace(/‘/g, "'")
    .replace(/“/g, '"')
    .replace(/”/g, '"');
}

const MAX_SL = 200;

const PRIORITY_ORDER: Stat[] = [
  "vigor",
  "strength",
  "dexterity",
  "intelligence",
  "faith",
  "arcane",
  "endurance",
  "mind",
];

// Walk class base → target one point at a time, going through PRIORITY_ORDER
// (vigor → primary scaling → endurance → mind). Each iteration emits one row
// showing the Soul Level reached and which stat got the point.
export function buildLevelByLevelPlan(
  classBase: StatVector,
  target: StatVector,
  classLevel: number,
): Array<{ level: number; stat: Stat; value: number }> {
  const out: Array<{ level: number; stat: Stat; value: number }> = [];
  const current: StatVector = { ...classBase };
  let lvl = classLevel;
  for (const stat of PRIORITY_ORDER) {
    while (current[stat] < target[stat]) {
      lvl += 1;
      current[stat] += 1;
      out.push({ level: lvl, stat, value: current[stat] });
    }
  }
  return out;
}

export function generateBuildPdf(opts: {
  weapon: Weapon;
  rec: Recommendation;
  loadout: LoadoutItem[];
  classData: StartingClass;
}) {
  const { weapon, rec, loadout, classData } = opts;
  const doc = new jsPDF({ unit: "pt" });

  // Header
  doc.setFontSize(20);
  doc.text("Elden Ring Build Recommendation", 40, 50);

  doc.setFontSize(12);
  doc.setTextColor(120);
  doc.text(`Generated for ${classData.name} (Lv ${classData.level})`, 40, 70);
  doc.setTextColor(0);

  // Summary chips
  doc.setFontSize(11);
  let y = 100;
  const summary: Array<[string, string]> = [
    ["Best class", rec.best.cls.name],
    ["Active weapon", `${weapon.name} (${weapon.category})`],
    ["Target Soul Level", `${rec.options.targetLevel}`],
    ["Equip load", `${rec.equipLoad.totalWeight} / ${rec.equipLoad.maxLoad} (${rec.equipLoad.percent.toFixed(0)}% — ${rec.equipLoad.rollCategory})`],
    ["Two-handing", rec.options.twoHand ? "yes" : "no"],
  ];
  for (const [k, v] of summary) {
    doc.setFont("helvetica", "bold");
    doc.text(`${k}:`, 40, y);
    doc.setFont("helvetica", "normal");
    doc.text(v, 140, y);
    y += 16;
  }

  // Loadout — per-weapon AP, damage-type breakdown, status build-up, and
  // sorcery/incant scaling for catalysts.
  y += 8;
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("Loadout", 40, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  y += 18;
  if (loadout.length === 0) {
    doc.text("(none)", 50, y);
    y += 14;
  } else {
    for (const item of loadout) {
      const base = estimateAttackPower(item.weapon, rec.target, "base", rec.options.twoHand, item.affinity);
      const max = estimateAttackPower(item.weapon, rec.target, "max", rec.options.twoHand, item.affinity);
      const maxLabel = getMaxUpgradeLevel(item.weapon);
      const spell = estimateSpellScaling(item.weapon, rec.target);
      const statuses = estimateStatusBuildup(item.weapon, rec.target, item.affinity);

      const wName = sanitize(item.weapon.name);
      doc.setFont("helvetica", "bold");
      doc.text(wName, 50, y);
      doc.setFont("helvetica", "normal");
      doc.text(sanitize(`- ${item.weapon.category} - ${item.affinity}`), 50 + doc.getTextWidth(wName) + 8, y);
      y += 13;

      doc.text(`+0 total: ${base.total}    ${maxLabel} total: ${max.total}`, 60, y);
      y += 13;

      // Per-damage-type breakdown at max
      const dmgRow = max.breakdown
        .map((b) => `${DAMAGE_TYPE_LABELS[b.type]} ${b.total}`)
        .join(" - ");
      if (dmgRow) {
        doc.text(`Damage @ ${maxLabel}: ${dmgRow}`, 60, y);
        y += 13;
      }

      // Status build-up rows
      for (const status of statuses) {
        doc.text(
          `${STATUS_LABELS[status.type] ?? status.type}: ${status.max} (base ${status.base})`,
          60,
          y,
        );
        y += 13;
      }

      // Spell scaling for catalysts
      if (spell) {
        const label = spell.type === "sorcery" ? "Sorcery Scaling" : "Incant Scaling";
        doc.text(`${label}: ${spell.max} (base ${spell.base})`, 60, y);
        y += 13;
      }

      y += 4;
      // Page break safety
      if (y > 760) {
        doc.addPage();
        y = 60;
      }
    }
  }

  // Armor section (only when at least one slot is filled).
  const armorRows = ARMOR_SLOTS
    .map((slot) => {
      const piece = findArmor(rec.options.armorSelection[slot]);
      return piece ? { slot, piece } : null;
    })
    .filter((x): x is { slot: typeof ARMOR_SLOTS[number]; piece: NonNullable<ReturnType<typeof findArmor>> } => x !== null);
  if (armorRows.length > 0) {
    y += 6;
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text("Armor", 40, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    y += 10;
    autoTable(doc, {
      startY: y,
      head: [["Slot", "Piece", "Phy", "Poise", "Wgt"]],
      body: armorRows.map(({ slot, piece }) => [
        ARMOR_SLOT_LABELS[slot],
        sanitize(piece.name),
        piece.phy,
        piece.poise,
        piece.weight,
      ]),
      theme: "striped",
      headStyles: { fillColor: [180, 144, 50] },
      styles: { fontSize: 9 },
      columnStyles: {
        0: { cellWidth: 80 },
        2: { halign: "right", cellWidth: 50 },
        3: { halign: "right", cellWidth: 50 },
        4: { halign: "right", cellWidth: 50 },
      },
    });
    // @ts-expect-error jspdf-autotable adds lastAutoTable
    y = doc.lastAutoTable.finalY;
  }

  // Talismans section (only when at least one slot is filled).
  const pickedTalismans = (rec.options.talismanIds ?? [])
    .map((id) => (id ? ALL_TALISMANS.find((t) => t.id === id) ?? null : null))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  if (pickedTalismans.length > 0) {
    y += 14;
    if (y > 720) {
      doc.addPage();
      y = 60;
    }
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text("Talismans", 40, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    y += 10;
    autoTable(doc, {
      startY: y,
      head: [["#", "Talisman", "Effect", "Wgt"]],
      body: pickedTalismans.map((t, i) => [
        `T${i + 1}`,
        sanitize(t.name),
        sanitize(t.effect),
        t.weight,
      ]),
      theme: "striped",
      headStyles: { fillColor: [180, 144, 50] },
      styles: { fontSize: 9, cellPadding: 4 },
      columnStyles: {
        0: { cellWidth: 30 },
        1: { cellWidth: 140 },
        3: { halign: "right", cellWidth: 40 },
      },
    });
    // @ts-expect-error jspdf-autotable adds lastAutoTable
    y = doc.lastAutoTable.finalY;
  }

  // Stats table
  y += 16;
  autoTable(doc, {
    startY: y,
    head: [["Stat", "Class base", "Target", "Invest"]],
    body: STAT_ORDER.map((s) => {
      const base = classData.stats[s];
      const tgt = rec.target[s];
      const delta = tgt - base;
      return [STAT_LABELS[s], base, tgt, delta > 0 ? `+${delta}` : delta < 0 ? `${delta} (wasted)` : "-"];
    }),
    theme: "striped",
    headStyles: { fillColor: [180, 144, 50] },
    styles: { fontSize: 10 },
  });

  // Rationale
  // @ts-expect-error jspdf-autotable adds lastAutoTable
  let nextY = doc.lastAutoTable.finalY + 20;
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("Why these targets", 40, nextY);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  nextY += 14;
  for (const line of rec.rationale) {
    const wrapped = doc.splitTextToSize(sanitize(`- ${line}`), 510);
    doc.text(wrapped, 50, nextY);
    nextY += wrapped.length * 12;
  }

  // Spell suggestions (only when the loadout has at least one catalyst).
  if (rec.spellSuggestions.length > 0) {
    if (nextY > 700) {
      doc.addPage();
      nextY = 60;
    } else {
      nextY += 20;
    }
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.text("Suggested spells (within 10 memory slots)", 40, nextY);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    nextY += 10;
    autoTable(doc, {
      startY: nextY,
      head: [["Spell", "Type", "Category", "Reqs", "FP / Slots", "Boost"]],
      body: rec.spellSuggestions.map(({ spell, boosted }) => {
        const reqs = [
          spell.requirements.intelligence ? `Int ${spell.requirements.intelligence}` : null,
          spell.requirements.faith ? `Fai ${spell.requirements.faith}` : null,
          spell.requirements.arcane ? `Arc ${spell.requirements.arcane}` : null,
        ]
          .filter(Boolean)
          .join(" - ");
        return [
          sanitize(spell.name),
          spell.type === "sorcery" ? "Sorcery" : "Incantation",
          sanitize(spell.category),
          reqs || "-",
          `FP ${spell.fpCost} / ${spell.slots}`,
          boosted ? "Yes" : "",
        ];
      }),
      theme: "striped",
      headStyles: { fillColor: [180, 144, 50] },
      styles: { fontSize: 9 },
    });
    // @ts-expect-error jspdf-autotable adds lastAutoTable
    nextY = doc.lastAutoTable.finalY;
  }

  // Per-level leveling plan (class.level + 1 → 200)
  // Compute the Lv 200 recommendation so the plan extends the player's
  // current target all the way to the soft cap of 200.
  const rec200 = recommend(weapon, {
    ...rec.options,
    targetLevel: MAX_SL,
  });
  const plan = buildLevelByLevelPlan(classData.stats, rec200.target, classData.level);

  // Render the plan as a wide multi-page table.
  doc.addPage();
  doc.setFontSize(16);
  doc.setFont("helvetica", "bold");
  doc.text("Per-level upgrade plan", 40, 50);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(120);
  doc.text(
    `From ${classData.name} starting Lv ${classData.level} up to Soul Level ${MAX_SL}. ` +
      `Bump the listed stat at each level — order goes Vigor → primary scaling → Endurance → Mind.`,
    40,
    70,
    { maxWidth: 510 },
  );
  doc.setTextColor(0);

  autoTable(doc, {
    startY: 100,
    head: [["Soul Level", "Stat", "New value"]],
    body: plan.map((p) => [p.level, STAT_LABELS[p.stat], p.value]),
    theme: "grid",
    headStyles: { fillColor: [180, 144, 50] },
    styles: { fontSize: 9 },
    columnStyles: {
      0: { halign: "right", cellWidth: 80 },
      1: { cellWidth: 120 },
      2: { halign: "right", cellWidth: 80 },
    },
  });

  // Footer note
  doc.setFontSize(8);
  doc.setTextColor(150);
  const today = new Date().toLocaleDateString();
  doc.text(`Generated ${today} — Elden Ring Build Recommender`, 40, 800);

  const filename = `elden-ring-build-${classData.id}-${weapon.id}-lv${rec.options.targetLevel}.pdf`;
  doc.save(filename);
}
