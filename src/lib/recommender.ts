import { classes, STAT_ORDER, type Stat, type StatVector, type StartingClass, getClass } from "../data/classes";
import { CATEGORY_BASE_AP, gradeOf, valueOf, type Weapon } from "../data/weapons";
import { DAMAGE_DATA, type DamageType } from "../data/damage-types";
import { spells, catalystBoosts } from "../data/spells";

export const DAMAGE_TYPE_LABELS: Record<DamageType, string> = {
  phy: "Physical",
  mag: "Magic",
  fir: "Fire",
  lit: "Lightning",
  hol: "Holy",
};
const DAMAGE_TYPE_ORDER: DamageType[] = ["phy", "mag", "fir", "lit", "hol"];
import { totalTalismanWeight } from "../data/talismans";
import { totalArmorWeight, totalArmorStatBoosts } from "../data/armor";
import { Affinity, AFFINITY_PRIMARIES, AFFINITY_REQ_FLOOR, ClassMatch, DEFAULT_OPTIONS, ELEMENTAL_AP_BREAKPOINT, ELEMENTAL_STATS, EquipLoadSummary, GENERIC_SKILLS, LevelingStep, LoadoutItem, MAX_UPGRADE_MULTIPLIER, PHYSICAL_AP_BREAKPOINT, Recommendation, RecommendOptions, RollCategory, SCALE_RANK, SCALING_FACTOR, SpellSuggestion, TWO_HAND_STR_MULTIPLIER, WeaponUpgrade } from "./types";

const VIGOR_ANCHORS: ReadonlyArray<readonly [number, number]> = [
  [1, 20], [50, 30], [80, 40], [100, 50], [125, 60],
];

const ENDURANCE_ANCHORS: ReadonlyArray<readonly [number, number]> = [
  [1, 10], [50, 13], [80, 18], [100, 22], [125, 25], [200, 30],
];

const MIND_ANCHORS_MELEE: ReadonlyArray<readonly [number, number]> = [
  [1, 10], [125, 12], [200, 15],
];

const MIND_ANCHORS_SPELLBLADE: ReadonlyArray<readonly [number, number]> = [
  [1, 12], [50, 15], [80, 20], [125, 25], [200, 30],
];

const MIND_ANCHORS_CASTER: ReadonlyArray<readonly [number, number]> = [
  [1, 15], [50, 20], [80, 28], [125, 35], [200, 45],
];

export type UpgradeType = "infusable" | "somber" | "standard-fixed";

export function getUpgradeType(weapon: Weapon): UpgradeType {
  const maxTable = weapon.scalingTable?.max;
  if (maxTable) {
    const keys = Object.keys(maxTable);
    if (keys.length > 1) return "infusable";
    if (keys.length === 1 && keys[0] === "Standard") {
      const standard = maxTable["Standard"];
      const hasNumeric =
        !!standard && Object.values(standard).some((v) => Array.isArray(v));
      return hasNumeric ? "somber" : "standard-fixed";
    }
  }
  return GENERIC_SKILLS.has(weapon.skill) ? "infusable" : "somber";
}

export function getMaxUpgradeLevel(weapon: Weapon): "+25" | "+10" {
  return getUpgradeType(weapon) === "somber" ? "+10" : "+25";
}

export type DamageBreakdown = {
  type: DamageType;
  base: number;
  scaling: number;
  total: number;
};

export type APEstimate = {
  base: number;
  scaling: number;
  total: number;
  breakdown: DamageBreakdown[];
};

export function estimateAttackPower(
  weapon: Weapon,
  stats: StatVector,
  upgrade: WeaponUpgrade,
  twoHand: boolean,
  affinity: Affinity = "Standard",
): APEstimate {
  const dmgInfo = DAMAGE_DATA.byWeaponId[weapon.id]?.[affinity];
  const aec = dmgInfo ? DAMAGE_DATA.aec[dmgInfo.aecId] : null;
  const reinforce = dmgInfo ? DAMAGE_DATA.reinforce[dmgInfo.reinforceId] : null;

  const scalingMap =
    upgrade === "base"
      ? weapon.scalingTable?.base ?? weapon.scaling
      : weapon.scalingTable?.max[affinity] ?? weapon.scaling;
  const curveOverride = weapon.scalingTable?.curve?.[affinity];

  // Pre-compute per-stat effective scaling (numeric multiplier) and correction
  const statContribution: Record<Stat, number> = {
    vigor: 0, mind: 0, endurance: 0,
    strength: 0, dexterity: 0, intelligence: 0, faith: 0, arcane: 0,
  };
  for (const stat of STAT_ORDER) {
    const entry = scalingMap[stat];
    const grade = gradeOf(entry);
    if (!grade) continue;
    let statValue = stats[stat];
    if (stat === "strength" && twoHand) statValue = Math.floor(statValue * 1.5);
    const customCurve = curveOverride?.[stat];
    const correction = customCurve
      ? interpolateFloat(statValue, customCurve)
      : scalingCorrection(stat, statValue);
    const numeric = valueOf(entry);
    const factor = numeric !== undefined ? numeric / 100 : SCALING_FACTOR[grade];
    statContribution[stat] = factor * correction;
  }

  // Build per-damage-type breakdown when we have regulation data
  const breakdown: DamageBreakdown[] = [];
  if (dmgInfo && aec) {
    for (const dt of DAMAGE_TYPE_ORDER) {
      const baseAtZero = dmgInfo.attack[dt];
      if (!baseAtZero) continue;
      const attackMult = upgrade === "max" && reinforce
        ? reinforce.attack[String(DAMAGE_TYPE_ORDER.indexOf(dt))] ?? 1
        : 1;
      const scalingMult = upgrade === "max" && reinforce ? 1 : 1; // numeric already includes reinforce in max
      const applicableStats = aec[dt] ?? [];
      const effectiveBase = baseAtZero * attackMult;
      let mult = 1;
      for (const statName of applicableStats) {
        const stat = statName as Stat;
        mult += statContribution[stat] * scalingMult;
      }
      const total = effectiveBase * mult;
      breakdown.push({
        type: dt,
        base: Math.round(effectiveBase),
        scaling: Math.round(total - effectiveBase),
        total: Math.round(total),
      });
    }
  }

  // Fallback path (no regulation data): use legacy single-phy calculation
  if (breakdown.length === 0) {
    const baseAP = weapon.baseAP ?? CATEGORY_BASE_AP[weapon.category];
    const upgradeMult = upgrade === "max" ? MAX_UPGRADE_MULTIPLIER : 1.0;
    const adjustedBase = baseAP * upgradeMult;
    let scalingBonus = 0;
    for (const stat of STAT_ORDER) {
      scalingBonus += adjustedBase * statContribution[stat];
    }
    breakdown.push({
      type: "phy",
      base: Math.round(adjustedBase),
      scaling: Math.round(scalingBonus),
      total: Math.round(adjustedBase + scalingBonus),
    });
  }

  const totalBase = breakdown.reduce((s, b) => s + b.base, 0);
  const totalScaling = breakdown.reduce((s, b) => s + b.scaling, 0);
  return {
    base: totalBase,
    scaling: totalScaling,
    total: totalBase + totalScaling,
    breakdown,
  };
}

export function isInfusable(weapon: Weapon): boolean {
  return getUpgradeType(weapon) === "infusable";
}

export function isCatalyst(weapon: Weapon): boolean {
  return weapon.category === "Glintstone Staff" || weapon.category === "Sacred Seal";
}

// Shields contribute requirement floors and equip-load weight but their scaling
// is too minor to justify pushing the player's primary stat to its soft cap.
const SHIELD_CATEGORIES = new Set(["Small Shield", "Medium Shield", "Greatshield"]);

function affinityAddsSpellScaling(affinity: Affinity): boolean {
  return (
    affinity === "Flame Art" ||
    affinity === "Sacred" ||
    affinity === "Magic" ||
    affinity === "Cold"
  );
}

function determineLoadoutProfile(items: LoadoutItem[]): MindProfile {
  if (items.length === 0) return "melee";
  const catalysts = items.filter((i) => isCatalyst(i.weapon));
  if (catalysts.length > 0) {
    return items.every((i) => isCatalyst(i.weapon)) ? "caster" : "spellblade";
  }
  const usesSpellScaling = items.some(
    (i) =>
      affinityAddsSpellScaling(i.affinity) ||
      i.weapon.scaling.intelligence !== undefined ||
      i.weapon.scaling.faith !== undefined,
  );
  return usesSpellScaling ? "spellblade" : "melee";
}

function isElemental(stat: Stat): boolean {
  return ELEMENTAL_STATS.includes(stat);
}

function emptyVector(): StatVector {
  return {
    vigor: 0, mind: 0, endurance: 0,
    strength: 0, dexterity: 0,
    intelligence: 0, faith: 0, arcane: 0,
  };
}

function interpolateAnchors(
  level: number,
  anchors: ReadonlyArray<readonly [number, number]>,
): number {
  if (level <= anchors[0][0]) return anchors[0][1];
  if (level >= anchors[anchors.length - 1][0]) return anchors[anchors.length - 1][1];
  for (let i = 1; i < anchors.length; i++) {
    const [lo, vlo] = anchors[i - 1];
    const [hi, vhi] = anchors[i];
    if (level <= hi) {
      const frac = (level - lo) / (hi - lo);
      return Math.round(vlo + frac * (vhi - vlo));
    }
  }
  return anchors[anchors.length - 1][1];
}

function interpolateFloat(
  level: number,
  anchors: ReadonlyArray<readonly [number, number]>,
): number {
  if (level <= anchors[0][0]) return anchors[0][1];
  if (level >= anchors[anchors.length - 1][0]) return anchors[anchors.length - 1][1];
  for (let i = 1; i < anchors.length; i++) {
    const [lo, vlo] = anchors[i - 1];
    const [hi, vhi] = anchors[i];
    if (level <= hi) {
      const frac = (level - lo) / (hi - lo);
      return vlo + frac * (vhi - vlo);
    }
  }
  return anchors[anchors.length - 1][1];
}

// Calc Correct Graph anchors from the game's regulation data. Each anchor is
// [statValue, growValue, adjPt]. adjPt > 0 makes the segment from this anchor
// to the next concave (slow start, fast end), < 0 makes it convex.
type Anchor3 = readonly [number, number, number];
const GRAPH_PHYSICAL: ReadonlyArray<Anchor3> = [
  [1, 0, 1.2], [18, 0.25, -1.2], [60, 0.75, 1], [80, 0.9, 1], [150, 1.1, 1],
];
const GRAPH_ELEMENTAL: ReadonlyArray<Anchor3> = [
  [1, 0, 1], [20, 0.4, 1], [50, 0.8, 1], [80, 0.95, 1], [99, 1.0, 1],
];

function interpolateGameGraph(value: number, anchors: ReadonlyArray<Anchor3>): number {
  if (value <= anchors[0][0]) return anchors[0][1];
  if (value >= anchors[anchors.length - 1][0]) return anchors[anchors.length - 1][1];
  for (let i = 1; i < anchors.length; i++) {
    const [lo, vlo, adj] = anchors[i - 1];
    const [hi, vhi] = anchors[i];
    if (value <= hi) {
      let frac = Math.max(0, Math.min(1, (value - lo) / (hi - lo)));
      if (adj > 0) frac = frac ** adj;
      else if (adj < 0) frac = 1 - (1 - frac) ** -adj;
      return vlo + (vhi - vlo) * frac;
    }
  }
  return anchors[anchors.length - 1][1];
}

function scalingCorrection(stat: Stat, value: number): number {
  const anchors = ELEMENTAL_STATS.includes(stat) ? GRAPH_ELEMENTAL : GRAPH_PHYSICAL;
  return interpolateGameGraph(value, anchors);
}

export function getVigorTarget(level: number): number {
  return interpolateAnchors(level, VIGOR_ANCHORS);
}

export function getEnduranceTarget(level: number): number {
  return interpolateAnchors(level, ENDURANCE_ANCHORS);
}

const MAX_ENDURANCE = 99;

const EQUIP_LOAD_ANCHORS: ReadonlyArray<readonly [number, number]> = [
  [1, 45],
  [8, 45],
  [15, 54],
  [25, 67],
  [30, 75],
  [40, 85],
  [50, 95],
  [60, 105],
  [70, 117],
  [80, 132],
  [99, 160],
];

const TARGET_LOAD_RATIO = 0.99;

export function getMaxEquipLoad(endurance: number): number {
  return interpolateAnchors(endurance, EQUIP_LOAD_ANCHORS);
}

export function classifyLoad(percent: number): RollCategory {
  if (percent >= 100) return "overloaded";
  if (percent >= 70) return "heavy";
  if (percent > 30) return "medium";
  return "light";
}

function enduranceNeededFor(weight: number, ratio: number): number {
  for (let end = 1; end <= MAX_ENDURANCE; end++) {
    if (getMaxEquipLoad(end) * ratio >= weight) return end;
  }
  return MAX_ENDURANCE;
}

export type MindProfile = "melee" | "spellblade" | "caster";

export function getMindTarget(level: number, profile: MindProfile): number {
  const anchors =
    profile === "caster"
      ? MIND_ANCHORS_CASTER
      : profile === "spellblade"
      ? MIND_ANCHORS_SPELLBLADE
      : MIND_ANCHORS_MELEE;
  return interpolateAnchors(level, anchors);
}

export function getScalingTarget(
  req: number,
  isElemental: boolean,
  level: number,
): number {
  const finalBreakpoint = isElemental ? ELEMENTAL_AP_BREAKPOINT : PHYSICAL_AP_BREAKPOINT;
  const startValue = Math.max(req, req + 2);
  if (level <= 50) return startValue;
  if (level >= 200) return Math.min(80, finalBreakpoint + 20);
  if (level <= 125) {
    return Math.round(
      interpolateAnchors(level, [
        [50, startValue],
        [125, finalBreakpoint],
      ]),
    );
  }
  return Math.round(
    interpolateAnchors(level, [
      [125, finalBreakpoint],
      [200, Math.min(80, finalBreakpoint + 20)],
    ]),
  );
}

export function getMinLevelForClassAndWeapon(
  cls: StartingClass,
  weapon: Weapon,
  twoHand: boolean,
): number {
  let deficit = 0;
  for (const stat of STAT_ORDER) {
    const req = weapon.requirements[stat] ?? 0;
    if (req <= 0) continue
    const adjusted =
      stat === "strength" ? adjustStrForTwoHand(req, twoHand, cls.stats.strength) : req;
    const gap = adjusted - cls.stats[stat];
    if (gap > 0) deficit += gap;
  }
  return cls.level + deficit;
}

export function getMinLevelForWeapon(weapon: Weapon, twoHand: boolean): number {
  return Math.min(
    ...classes.map((cls) => getMinLevelForClassAndWeapon(cls, weapon, twoHand)),
  );
}

export function getMinFeasibleLevel(
  cls: StartingClass,
  weapon: Weapon,
  twoHand: boolean,
  affinity: Affinity,
  talismanIds: (string | null)[] = [],
  armorSelection: import("../data/armor").ArmorSelection = { helm: null, chest: null, gauntlets: null, legs: null },
  loadout: LoadoutItem[] = [],
): number {
  let lvl = getMinLevelForClassAndWeapon(cls, weapon, twoHand);
  for (let i = 0; i < 8; i++) {
    const { target } = getTargetStats(
      weapon,
      {
        targetLevel: lvl,
        twoHand,
        affinity,
        classId: cls.id,
        talismanIds,
        armorSelection,
        extraWeaponWeight: 0,
        loadout,
      },
      { noScalingPush: true, noBudgetFit: true },
    );
    const next = cls.level + computeDeficit(cls.stats, target);
    if (next <= lvl) return lvl;
    lvl = next;
  }
  return lvl;
}

function getPrimaryStats(weapon: Weapon, affinity: Affinity): Stat[] {
  if (affinity !== "Standard") return AFFINITY_PRIMARIES[affinity];

  const scalingStats = STAT_ORDER.filter((s) => weapon.scaling[s] !== undefined);
  if (scalingStats.length === 0) return [];

  if (!isInfusable(weapon)) {
    const dominant = scalingStats.reduce((best, cur) => {
      const reqBest = weapon.requirements[best] ?? 0;
      const reqCur = weapon.requirements[cur] ?? 0;
      if (reqCur !== reqBest) return reqCur > reqBest ? cur : best;
      const gradeBest = SCALE_RANK[gradeOf(weapon.scaling[best])!];
      const gradeCur = SCALE_RANK[gradeOf(weapon.scaling[cur])!];
      return gradeCur > gradeBest ? cur : best;
    });
    return [dominant];
  }

  const bestRank = Math.max(...scalingStats.map((s) => SCALE_RANK[gradeOf(weapon.scaling[s])!]));
  return scalingStats.filter((s) => SCALE_RANK[gradeOf(weapon.scaling[s])!] === bestRank);
}

function adjustStrForTwoHand(value: number, twoHand: boolean, strengthStartingValue: number): number {
  if (!twoHand || value <= 0) return value;
  if (strengthStartingValue > value / TWO_HAND_STR_MULTIPLIER) return value;
  return Math.ceil(value / TWO_HAND_STR_MULTIPLIER);
}

export function getEffectiveStrRequirement(weapon: Weapon, twoHand: boolean, strengthStartingValue: number): number {
  const req = weapon.requirements.strength ?? 0;
  return adjustStrForTwoHand(req, twoHand, strengthStartingValue);
}

export function getTargetStats(
  weapon: Weapon,
  opts: RecommendOptions,
  internal?: { noScalingPush?: boolean; noBudgetFit?: boolean },
): { target: StatVector; rationale: string[] } {
  const rationale: string[] = [];
  const startingClass = getClass(opts.classId);
  const target: StatVector = startingClass ? { ...startingClass.stats } : emptyVector();

  const loadoutItems: LoadoutItem[] =
    opts.loadout && opts.loadout.length > 0 ? opts.loadout : [{ weapon, affinity: opts.affinity }];

  for (const item of loadoutItems) {
    for (const stat of STAT_ORDER) {
      const req = item.weapon.requirements[stat] ?? 0;
      if (req <= 0) continue;
      const adjusted =
        stat === "strength"
          ? adjustStrForTwoHand(req, opts.twoHand, startingClass?.stats.strength ?? 0)
          : req;
      if (target[stat] < adjusted) target[stat] = adjusted;
    }
  }
  if (opts.twoHand && (weapon.requirements.strength ?? 0) > 0) {
    rationale.push(
      `Strength req ${weapon.requirements.strength} → ${target.strength} (two-handed: ÷${TWO_HAND_STR_MULTIPLIER})`,
    );
  }
  if (loadoutItems.length > 1) {
    const otherNames = loadoutItems
      .filter((i) => i.weapon.id !== weapon.id)
      .map((i) => i.weapon.name);
    if (otherNames.length > 0) {
      rationale.push(`Requirements aggregated across loadout: ${otherNames.join(", ")}`);
    }
  }

  for (const item of loadoutItems) {
    if (item.affinity === "Standard") continue;
    const floor = AFFINITY_REQ_FLOOR[item.affinity];
    if (!floor) continue;
    for (const stat of STAT_ORDER) {
      const f = floor[stat];
      if (f !== undefined && target[stat] < f) {
        target[stat] = f;
        rationale.push(`${stat} → ${f} (${item.affinity} infusion floor on ${item.weapon.name})`);
      }
    }
  }

  if (!internal?.noScalingPush) {
    for (const item of loadoutItems) {
      if (SHIELD_CATEGORIES.has(item.weapon.category)) continue;
      const wpnPrimaries = getPrimaryStats(item.weapon, item.affinity);
      for (const stat of wpnPrimaries) {
        const reqRaw = item.weapon.requirements[stat] ?? 0;
        const elemental = isElemental(stat);
        const rawTarget = getScalingTarget(reqRaw, elemental, opts.targetLevel);
        const breakpoint =
          stat === "strength"
            ? adjustStrForTwoHand(rawTarget, opts.twoHand, startingClass?.stats[stat] ?? 0)
            : rawTarget;
        if (target[stat] < breakpoint) {
          target[stat] = breakpoint;
          const source =
            item.affinity === "Standard"
              ? `${item.weapon.scaling[stat] ?? "—"} scaling`
              : `${item.affinity} affinity`;
          const note =
            stat === "strength" && opts.twoHand
              ? `${stat} → ${breakpoint} (${item.weapon.name}: ${source}, level-${opts.targetLevel} target ÷${TWO_HAND_STR_MULTIPLIER} two-handed)`
              : `${stat} → ${breakpoint} (${item.weapon.name}: ${source}, ${elemental ? "elemental" : "physical"} target at Lv ${opts.targetLevel})`;
          rationale.push(note);
        }
      }
    }
  }

  const vigorFloor = getVigorTarget(opts.targetLevel);
  target.vigor = Math.max(target.vigor, vigorFloor);
  rationale.unshift(`Vigor → ${vigorFloor} (target Soul Level ${opts.targetLevel})`);

  const enduranceTarget = getEnduranceTarget(opts.targetLevel);
  target.endurance = Math.max(target.endurance, enduranceTarget);
  rationale.push(`Endurance → ${enduranceTarget} (Stamina + Equip Load, scales with level)`);

  const armorBoosts = totalArmorStatBoosts(opts.armorSelection);

  const talismanWeight = totalTalismanWeight(opts.talismanIds);
  const armorWeight = totalArmorWeight(opts.armorSelection);
  const extraWpn = opts.extraWeaponWeight ?? 0;
  const totalWeaponWeight = weapon.weight + extraWpn;
  const carriedWeight = totalWeaponWeight + talismanWeight + armorWeight;
  const enduranceForLoad = Math.max(
    0,
    enduranceNeededFor(carriedWeight, TARGET_LOAD_RATIO) - (armorBoosts.endurance ?? 0),
  );
  if (enduranceForLoad > target.endurance) {
    target.endurance = Math.min(MAX_ENDURANCE, enduranceForLoad);
    rationale.push(
      `Endurance → ${target.endurance} (lifts weapons ${totalWeaponWeight.toFixed(1)} + armor ${armorWeight.toFixed(1)} + talismans ${talismanWeight.toFixed(1)} without overload)`,
    );
  }

  const mindProfile: MindProfile = determineLoadoutProfile(loadoutItems);
  const mindTarget = getMindTarget(opts.targetLevel, mindProfile);
  target.mind = Math.max(target.mind, mindTarget);
  const profileReason =
    mindProfile === "caster"
      ? "all wielded items are catalysts — FP for spellcasting"
      : mindProfile === "spellblade"
      ? "loadout mixes melee + spell scaling — moderate FP for buffs/incantations"
      : "loadout is pure melee — minimum FP, points prioritized for AP";
  rationale.push(
    `Mind → ${mindTarget} (${mindProfile} profile at Lv ${opts.targetLevel}; ${profileReason})`,
  );

  for (const item of loadoutItems) {
    for (const stat of STAT_ORDER) {
      const req = item.weapon.requirements[stat];
      if (req === undefined) continue;
      const adjusted =
        stat === "strength"
          ? adjustStrForTwoHand(req, opts.twoHand, startingClass?.stats[stat] ?? 0)
          : req;
      if (adjusted > target[stat]) target[stat] = adjusted;
    }
  }

  // Fit scaling-stat overage to the available level budget. After all mandatory
  // floors (Vigor, Endurance, Mind, every weapon's hard reqs, affinity floors)
  // are set, any remaining budget is distributed proportionally across the
  // primary-scaling stats. If the loadout demands more scaling than the level
  // can fund, each scaling stat gets a proportional share of the remaining
  // budget instead of overshooting the target Soul Level.
  if (startingClass && !internal?.noBudgetFit) {
    const maxPoints = Math.max(0, opts.targetLevel - startingClass.level);
    const scalingStats: Stat[] = ["strength", "dexterity", "intelligence", "faith", "arcane"];
    const scalingFloors: Record<Stat, number> = {
      vigor: 0, mind: 0, endurance: 0, strength: 0, dexterity: 0, intelligence: 0, faith: 0, arcane: 0,
    };
    for (const s of scalingStats) {
      let floor = startingClass.stats[s];
      for (const item of loadoutItems) {
        const req = item.weapon.requirements[s] ?? 0;
        const adj = s === "strength" ? adjustStrForTwoHand(req, opts.twoHand, startingClass.stats.strength) : req;
        if (adj > floor) floor = adj;
        if (item.affinity !== "Standard") {
          const affFloor = AFFINITY_REQ_FLOOR[item.affinity]?.[s];
          if (affFloor !== undefined && affFloor > floor) floor = affFloor;
        }
      }
      scalingFloors[s] = floor;
    }
    const overage = (s: Stat) => Math.max(0, target[s] - scalingFloors[s]);
    const totalOverage = scalingStats.reduce((sum, s) => sum + overage(s), 0);
    const currentDeficit = computeDeficit(startingClass.stats, target);
    const mandatoryInv = Math.max(0, currentDeficit - totalOverage);
    const availableForScaling = Math.max(0, maxPoints - mandatoryInv);
    if (totalOverage > availableForScaling) {
      const factor = availableForScaling / totalOverage;
      let allocated = 0;
      const cuts: Array<[Stat, number, number]> = [];
      for (const s of scalingStats) {
        const o = overage(s);
        if (o <= 0) continue;
        const newOverage = Math.floor(o * factor);
        cuts.push([s, target[s], scalingFloors[s] + newOverage]);
        target[s] = scalingFloors[s] + newOverage;
        allocated += newOverage;
      }
      let leftover = availableForScaling - allocated;
      const sortedByDesired = scalingStats
        .map((s) => ({ s, desired: overage(s), current: target[s] - scalingFloors[s] }))
        .filter((x) => x.desired > x.current)
        .sort((a, b) => b.desired - a.desired);
      for (const { s } of sortedByDesired) {
        if (leftover <= 0) break;
        target[s] += 1;
        leftover -= 1;
      }
      const beforeAfter = cuts
        .map(([s, before, after]) => `${s} ${before}→${after}`)
        .join(", ");
      rationale.push(
        `Scaling reduced to fit Lv ${opts.targetLevel} budget (${availableForScaling} pts left after mandatory): ${beforeAfter}.`,
      );
    }
  }

  // Apply armor stat boosts last so they reduce the leveling investment for
  // scaling breakpoints. They do NOT count toward weapon stat requirements —
  // the player must invest enough on their own to wield the weapon at full AP.
  for (const stat of STAT_ORDER) {
    const bonus = armorBoosts[stat] ?? 0;
    if (bonus <= 0) continue;
    const before = target[stat];
    const classBase = startingClass?.stats[stat] ?? 0;
    const req = weapon.requirements[stat] ?? 0;
    const reqAdj = stat === "strength" ? adjustStrForTwoHand(req, opts.twoHand, classBase) : req;
    const floor = Math.max(classBase, reqAdj);
    target[stat] = Math.max(floor, target[stat] - bonus);
    if (target[stat] < before) {
      rationale.push(
        `${stat} → ${target[stat]} (helm grants +${bonus}, saves ${before - target[stat]} pts; requirement still met without helm)`,
      );
    }
  }

  return { target, rationale };
}

export function computeWaste(classBase: StatVector, target: StatVector): number {
  let waste = 0;
  for (const stat of STAT_ORDER) {
    const excess = classBase[stat] - target[stat];
    if (excess > 0) waste += excess;
  }
  return waste;
}

export function computeDeficit(classBase: StatVector, target: StatVector): number {
  let deficit = 0;
  for (const stat of STAT_ORDER) {
    const gap = target[stat] - classBase[stat];
    if (gap > 0) deficit += gap;
  }
  return deficit;
}

export function rankClasses(target: StatVector): ClassMatch[] {
  return classes
    .map((cls) => {
      const waste = computeWaste(cls.stats, target);
      const deficit = computeDeficit(cls.stats, target);
      const finalLevel = cls.level + deficit;
      return { cls, waste, deficit, finalLevel };
    })
    .sort((a, b) => {
      if (a.waste !== b.waste) return a.waste - b.waste;
      if (a.finalLevel !== b.finalLevel) return a.finalLevel - b.finalLevel;
      return a.cls.level - b.cls.level;
    });
}

export function buildLevelingPlan(classBase: StatVector, target: StatVector): LevelingStep[] {
  const steps: LevelingStep[] = [];
  for (const stat of STAT_ORDER) {
    const from = classBase[stat];
    const to = target[stat] = 0 ? from : target[stat];

    if (to >= from) steps.push({ stat, from, to, points: to - from });
  }
  return steps.sort((a, b) => b.points - a.points);
}

export const MAX_MEMORY_SLOTS = 10;

export function recommendSpells(
  target: StatVector,
  loadout: LoadoutItem[],
  maxMemorySlots = MAX_MEMORY_SLOTS,
): SpellSuggestion[] {
  const catalysts = loadout.filter((i) => isCatalyst(i.weapon));
  if (catalysts.length === 0) return [];
  const hasStaff = catalysts.some((i) => i.weapon.category === "Glintstone Staff");
  const hasSeal = catalysts.some((i) => i.weapon.category === "Sacred Seal");

  const boostedCategories = new Set<string>();
  for (const item of catalysts) {
    for (const c of catalystBoosts[item.weapon.id] ?? []) boostedCategories.add(c);
  }

  const castable = spells.filter((s) => {
    if (s.type === "sorcery" && !hasStaff) return false;
    if (s.type === "incantation" && !hasSeal) return false;
    const r = s.requirements;
    if ((r.intelligence ?? 0) > target.intelligence) return false;
    if ((r.faith ?? 0) > target.faith) return false;
    if ((r.arcane ?? 0) > target.arcane) return false;
    return true;
  });

  const scored = castable.map((s) => {
    const reqSum =
      (s.requirements.intelligence ?? 0) +
      (s.requirements.faith ?? 0) +
      (s.requirements.arcane ?? 0);
    const boosted = boostedCategories.has(s.category);
    return { spell: s, boosted, score: (boosted ? 10000 : 0) + reqSum };
  });
  scored.sort((a, b) => b.score - a.score);

  // Greedy memory-slot fit: walk down the score-sorted list and pick each
  // spell only if its memory-slot cost still fits under the cap.
  const selected: SpellSuggestion[] = [];
  let slotsUsed = 0;
  for (const { spell, boosted } of scored) {
    if (slotsUsed + spell.slots > maxMemorySlots) continue;
    selected.push({ spell, boosted });
    slotsUsed += spell.slots;
    if (slotsUsed === maxMemorySlots) break;
  }
  return selected;
}

export function recommend(weapon: Weapon, opts: Partial<RecommendOptions> = {}): Recommendation {
  const fullOpts: RecommendOptions = { ...DEFAULT_OPTIONS, ...opts };
  const { target, rationale } = getTargetStats(weapon, fullOpts);
  const ranking = rankClasses(target);
  const best = ranking[0];
  const levelingPlan = buildLevelingPlan(best.cls.stats, target);

  const talismanWeight = totalTalismanWeight(fullOpts.talismanIds);
  const armorWeight = totalArmorWeight(fullOpts.armorSelection);
  const totalWpn = weapon.weight + (fullOpts.extraWeaponWeight ?? 0);
  const totalWeight = totalWpn + talismanWeight + armorWeight;
  const armorBoostsFinal = totalArmorStatBoosts(fullOpts.armorSelection);
  const effectiveEndurance = Math.min(MAX_ENDURANCE, target.endurance + (armorBoostsFinal.endurance ?? 0));
  const maxLoad = getMaxEquipLoad(effectiveEndurance);
  const percent = maxLoad > 0 ? (totalWeight / maxLoad) * 100 : 100;
  const equipLoad: EquipLoadSummary = {
    weaponWeight: Math.round(totalWpn * 10) / 10,
    talismanWeight: Math.round(talismanWeight * 10) / 10,
    armorWeight: Math.round(armorWeight * 10) / 10,
    totalWeight: Math.round(totalWeight * 10) / 10,
    maxLoad: Math.round(maxLoad * 10) / 10,
    percent: Math.round(percent * 10) / 10,
    rollCategory: classifyLoad(percent),
  };

  return {
    target,
    rationale,
    ranking,
    best,
    levelingPlan,
    effectiveStrRequirement: getEffectiveStrRequirement(weapon, fullOpts.twoHand, getClass(opts.classId ?? '')?.stats.strength ?? 0),
    options: fullOpts,
    equipLoad,
    spellSuggestions: recommendSpells(
      target,
      fullOpts.loadout.length > 0 ? fullOpts.loadout : [{ weapon, affinity: fullOpts.affinity }],
    ),
  };
}

export function compareClassToTarget(cls: StartingClass, target: StatVector): ClassMatch {
  const waste = computeWaste(cls.stats, target);
  const deficit = computeDeficit(cls.stats, target);
  const finalLevel = cls.level + deficit;
  return { cls, waste, deficit, finalLevel };
}
