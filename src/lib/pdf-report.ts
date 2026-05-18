import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { STAT_LABELS, STAT_ORDER, type Stat, type StartingClass, type StatVector } from "../data/classes";
import { recommend } from "./recommender";
import type { LoadoutItem, Recommendation } from "./types";
import type { Weapon } from "../data/weapons";

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

  // Loadout list
  y += 8;
  doc.setFontSize(13);
  doc.setFont("helvetica", "bold");
  doc.text("Loadout", 40, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  y += 16;
  if (loadout.length === 0) {
    doc.text("(none)", 50, y);
    y += 14;
  } else {
    for (const item of loadout) {
      doc.text(`• ${item.weapon.name} (${item.weapon.category}) — ${item.affinity}`, 50, y);
      y += 14;
    }
  }

  // Stats table
  y += 8;
  autoTable(doc, {
    startY: y,
    head: [["Stat", "Class base", "Target", "Invest"]],
    body: STAT_ORDER.map((s) => {
      const base = classData.stats[s];
      const tgt = rec.target[s];
      const delta = tgt - base;
      return [STAT_LABELS[s], base, tgt, delta > 0 ? `+${delta}` : delta < 0 ? `${delta} (wasted)` : "—"];
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
    const wrapped = doc.splitTextToSize(`• ${line}`, 510);
    doc.text(wrapped, 50, nextY);
    nextY += wrapped.length * 12;
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
