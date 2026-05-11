import { classes, STAT_ORDER, type Stat, type StatVector, type StartingClass, getClass } from "../data/classes";
import { CATEGORY_BASE_AP, type Weapon } from "../data/weapons";
import { Affinity, AFFINITY_PRIMARIES, AFFINITY_REQ_FLOOR, ClassMatch, DEFAULT_OPTIONS, ELEMENTAL_AP_BREAKPOINT, ELEMENTAL_STATS, GENERIC_SKILLS, LevelingStep, MAX_UPGRADE_MULTIPLIER, PHYSICAL_AP_BREAKPOINT, Recommendation, RecommendOptions, SCALE_RANK, SCALING_FACTOR, SOFT_CAP_STAT_VALUE, TWO_HAND_STR_MULTIPLIER, WeaponUpgrade } from "./types";

const VIGOR_ANCHORS: ReadonlyArray<readonly [number, number]> = [
  [1, 20], [50, 30], [80, 40], [100, 50], [125, 60],
];

const ENDURANCE_ANCHORS: ReadonlyArray<readonly [number, number]> = [
  [1, 10], [50, 13], [80, 18], [100, 22], [125, 25], [200, 30],
];

const MIND_ANCHORS_MELEE: ReadonlyArray<readonly [number, number]> = [
  [1, 10], [50, 12], [100, 15], [200, 20],
];

const MIND_ANCHORS_SPELLBLADE: ReadonlyArray<readonly [number, number]> = [
  [1, 12], [50, 15], [80, 20], [125, 25], [200, 30],
];

const MIND_ANCHORS_CASTER: ReadonlyArray<readonly [number, number]> = [
  [1, 15], [50, 20], [80, 28], [125, 35], [200, 45],
];

export function getMaxUpgradeLevel(weapon: Weapon): "+25" | "+10" {
  return isInfusable(weapon) ? "+25" : "+10";
}

export function estimateAttackPower(
  weapon: Weapon,
  stats: StatVector,
  upgrade: WeaponUpgrade,
  twoHand: boolean,
): { base: number; scaling: number; total: number } {
  const baseAP = weapon.baseAP ?? CATEGORY_BASE_AP[weapon.category];
  const upgradeMult = upgrade === "max" ? MAX_UPGRADE_MULTIPLIER : 1.0;
  const adjustedBase = baseAP * upgradeMult;

  let scalingBonus = 0;
  for (const stat of STAT_ORDER) {
    const grade = weapon.scaling[stat];
    if (!grade) continue;
    let statValue = stats[stat];
    if (stat === "strength" && twoHand) {
      statValue = Math.floor(statValue * 1.5);
    }
    const correction = Math.min(statValue / SOFT_CAP_STAT_VALUE, 1.25);
    scalingBonus += adjustedBase * SCALING_FACTOR[grade] * correction;
  }

  return {
    base: Math.round(adjustedBase),
    scaling: Math.round(scalingBonus),
    total: Math.round(adjustedBase + scalingBonus),
  };
}

export function isInfusable(weapon: Weapon): boolean {
  return GENERIC_SKILLS.has(weapon.skill);
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

export function getVigorTarget(level: number): number {
  return interpolateAnchors(level, VIGOR_ANCHORS);
}

export function getEnduranceTarget(level: number): number {
  return interpolateAnchors(level, ENDURANCE_ANCHORS);
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
    console.log('req', req)
    if (req <= 0) continue
    const adjusted =
      stat === "strength" ? adjustStrForTwoHand(req, twoHand, cls.stats.strength) : req;
    const gap = adjusted - cls.stats[stat];
    if (gap > 0) deficit += gap;
  }
  console.log(cls.level)
  console.log('CALCULATED DEFICIT', deficit)
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
): number {
  let lvl = getMinLevelForClassAndWeapon(cls, weapon, twoHand);
  for (let i = 0; i < 8; i++) {
    const { target } = getTargetStats(weapon, {
      targetLevel: lvl,
      twoHand,
      affinity,
      classId: cls.id,
    });
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
      const gradeBest = SCALE_RANK[weapon.scaling[best]!];
      const gradeCur = SCALE_RANK[weapon.scaling[cur]!];
      return gradeCur > gradeBest ? cur : best;
    });
    return [dominant];
  }

  const bestRank = Math.max(...scalingStats.map((s) => SCALE_RANK[weapon.scaling[s]!]));
  return scalingStats.filter((s) => SCALE_RANK[weapon.scaling[s]!] === bestRank);
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

export function getTargetStats(weapon: Weapon, opts: RecommendOptions): { target: StatVector; rationale: string[] } {
  const rationale: string[] = [];
  const startingClass = getClass(opts.classId);
  const target: StatVector = startingClass ? { ...startingClass.stats } : emptyVector();

  for (const stat of STAT_ORDER) {
    const req = weapon.requirements[stat] ?? 0;
    if (req <= 0) continue;
    const adjusted =
      stat === "strength"
        ? adjustStrForTwoHand(req, opts.twoHand, startingClass?.stats.strength ?? 0)
        : req;
    if (target[stat] < adjusted) target[stat] = adjusted;
  }
  if (opts.twoHand && (weapon.requirements.strength ?? 0) > 0) {
    rationale.push(
      `Strength req ${weapon.requirements.strength} → ${target.strength} (two-handed: ÷${TWO_HAND_STR_MULTIPLIER})`,
    );
  }

  if (opts.affinity !== "Standard") {
    const floor = AFFINITY_REQ_FLOOR[opts.affinity];
    if (floor) {
      for (const stat of STAT_ORDER) {
        const f = floor[stat];
        if (f !== undefined && target[stat] < f) {
          target[stat] = f;
          rationale.push(`${stat} → ${f} (${opts.affinity} infusion floor)`);
        }
      }
    }
  }

  const primaryStats = getPrimaryStats(weapon, opts.affinity);
  for (const stat of primaryStats) {
    const reqRaw = weapon.requirements[stat] ?? 0;
    const elemental = isElemental(stat);
    const rawTarget = getScalingTarget(reqRaw, elemental, opts.targetLevel);
    const breakpoint =
      stat === "strength" ? adjustStrForTwoHand(rawTarget, opts.twoHand, startingClass?.stats[stat] ?? 0) : rawTarget;
    if (target[stat] < breakpoint) {
      target[stat] = breakpoint;
      const source =
        opts.affinity === "Standard"
          ? `${weapon.scaling[stat] ?? "—"} scaling`
          : `${opts.affinity} affinity`;
      const note =
        stat === "strength" && opts.twoHand
          ? `${stat} → ${breakpoint} (${source}, level-${opts.targetLevel} target ÷${TWO_HAND_STR_MULTIPLIER} two-handed)`
          : `${stat} → ${breakpoint} (${source}, ${elemental ? "elemental" : "physical"} target at Lv ${opts.targetLevel})`;
      rationale.push(note);
    }
  }

  const vigorFloor = getVigorTarget(opts.targetLevel);
  target.vigor = Math.max(target.vigor, vigorFloor);
  rationale.unshift(`Vigor → ${vigorFloor} (target Soul Level ${opts.targetLevel})`);

  const enduranceTarget = getEnduranceTarget(opts.targetLevel);
  target.endurance = Math.max(target.endurance, enduranceTarget);
  rationale.push(`Endurance → ${enduranceTarget} (Stamina + Equip Load, scales with level)`);

  const affinityAddsSpellScaling =
    opts.affinity === "Flame Art" ||
    opts.affinity === "Sacred" ||
    opts.affinity === "Magic" ||
    opts.affinity === "Cold";
  const usesSpellScaling =
    weapon.scaling.intelligence !== undefined ||
    weapon.scaling.faith !== undefined ||
    affinityAddsSpellScaling;
  const isPureCaster =
    (weapon.requirements.intelligence !== undefined ||
      weapon.requirements.faith !== undefined) &&
    !weapon.scaling.strength &&
    !weapon.scaling.dexterity;

  const mindProfile: MindProfile = isPureCaster
    ? "caster"
    : usesSpellScaling
    ? "spellblade"
    : "melee";
  const mindTarget = getMindTarget(opts.targetLevel, mindProfile);
  target.mind = Math.max(target.mind, mindTarget);
  rationale.push(
    `Mind → ${mindTarget} (${mindProfile} profile at Lv ${opts.targetLevel})`,
  );

  for (const stat of STAT_ORDER) {
    const req = weapon.requirements[stat];
    if (req === undefined) continue;
    const adjusted = stat === "strength" ? adjustStrForTwoHand(req, opts.twoHand, startingClass?.stats[stat] ?? 0) : req;
    if (adjusted > target[stat]) target[stat] = adjusted;
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

export function recommend(weapon: Weapon, opts: Partial<RecommendOptions> = {}): Recommendation {
  const fullOpts: RecommendOptions = { ...DEFAULT_OPTIONS, ...opts };
  const { target, rationale } = getTargetStats(weapon, fullOpts);
  console.log('target', target)
  const ranking = rankClasses(target);
  const best = ranking[0];
  const levelingPlan = buildLevelingPlan(best.cls.stats, target);
  return {
    target,
    rationale,
    ranking,
    best,
    levelingPlan,
    effectiveStrRequirement: getEffectiveStrRequirement(weapon, fullOpts.twoHand, getClass(opts.classId ?? '')?.stats.strength ?? 0),
    options: fullOpts,
  };
}

export function compareClassToTarget(cls: StartingClass, target: StatVector): ClassMatch {
  const waste = computeWaste(cls.stats, target);
  const deficit = computeDeficit(cls.stats, target);
  const finalLevel = cls.level + deficit;
  return { cls, waste, deficit, finalLevel };
}
