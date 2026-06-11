import { useMemo } from "react";
import { motion } from "motion/react";
import { Info } from "lucide-react";
import { classes, STAT_LABELS, STAT_ORDER, type Stat } from "../data/classes";
import { CATEGORIES, weapons, gradeOf, valueOf, type Weapon, type WeaponCategory } from "../data/weapons";
import { type Talisman } from "../data/talismans";
import {
  type ArmorPiece,
  type ArmorSelection,
  type ArmorSlot,
  EMPTY_ARMOR_SELECTION,
  totalArmorStatBoosts,
} from "../data/armor";
import {
  compareClassToTarget,
  getMinFeasibleLevel,
  getMinLevelForWeapon,
  getUpgradeType,
  isInfusable,
  recommend,
} from "../lib/recommender";
import { Affinity, DEFAULT_TARGET_LEVEL, LoadoutItem, MAX_TARGET_LEVEL } from "../lib/types";
import { sliderMarks } from "../lib/slider-marks";
import SpellRecommendations from "./components/SpellRecommendations";
import Rationale from "./components/Rationale";
import ClassCarousel from "./components/ClassCarousel";
import WeaponSlotsGrid from "./components/WeaponSlotsGrid";
import GearPicker from "../common/components/GearPicker";
import AffinityPicker from "../common/components/AffinityPicker";
import ArmorSlots from "./components/ArmorSlots";
import TalismanSlots from "./components/TalismanSlots";
import LoadoutDamagePanel from "./components/LoadoutDamagePanel";
import { Hand, SlotPos } from "../common/types";
import RecommendationHeader from "./components/RecommendationHeader";
import { generateBuildPdf } from "../lib/pdf-report";
import { trackPdfDownload } from "../lib/analytics";
import ClassRanking from "./components/ClassRanking";
import TargetStatsTable from "./components/TargetStatsTable";
import useBuildPickerState, { BuildPickerProps } from "./hooks/use-build-picker-state";
import GlassCard from "@/components/er/GlassCard";
import SectionHeading from "@/components/er/SectionHeading";
import StatChip from "@/components/er/StatChip";
import InfoTip from "@/components/er/InfoTip";
import AnimatedNumber from "@/components/er/AnimatedNumber";
import { fadeRise, viewportOnce } from "@/components/er/motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

type WeaponSlot = { weapon: Weapon | null; affinity: Affinity };

const emptySlot = (): WeaponSlot => ({ weapon: null, affinity: "Standard" });

const initialBuildPickerState: BuildPickerProps = {
  category: "all",
  rightHand: [],
  leftHand: [],
  active: {
    hand: "right",
    idx: 0
  },
  weaponPickerOpen: false,
  affinityPickerPos: null,
  classId: classes[0].id,
  targetLevel: DEFAULT_TARGET_LEVEL,
  twoHand: false,
  talismanIds: [null, null, null, null],
  armorSelection: { ...EMPTY_ARMOR_SELECTION }
}

const BuildPicker = () => {
  const cls = classes[0];

  const initialHands = useMemo(() => {
    const build = (ids: string[] | undefined): WeaponSlot[] => {
      const out: WeaponSlot[] = [emptySlot(), emptySlot(), emptySlot()];
      (ids ?? []).slice(0, 3).forEach((wid, i) => {
        out[i] = { weapon: weapons.find((x) => x.id === wid) ?? null, affinity: "Standard" };
      });
      return out;
    };
    return { right: build(cls.starting?.right), left: build(cls.starting?.left) };
  }, [cls.starting?.right, cls.starting?.left]);

  const initialArmor = cls.armor

  const { state, actions } = useBuildPickerState({ ...initialBuildPickerState, rightHand: initialHands.right, leftHand: initialHands.left, armorSelection: initialArmor });

  const { category, classId, targetLevel, twoHand, talismanIds, armorSelection, rightHand, leftHand, active, weaponPickerOpen, affinityPickerPos } = state;
  const { setCategory, setClassId, setTargetLevel, setTwoHand, setTalismanIds, setArmorSelection, setRightHand, setLeftHand, setActive, setWeaponPickerOpen, setAffinityPickerPos } = actions;

  const filteredWeapons = useMemo(
    () => (category === "all" ? weapons : weapons.filter((w) => w.category === category)),
    [category],
  );

  const slotsFor = (hand: Hand) => (hand === "right" ? rightHand : leftHand);
  const activeSlotData = slotsFor(active.hand)[active.idx];
  const weapon = activeSlotData.weapon;
  const affinity = activeSlotData.affinity;

  const updateSlot = (pos: SlotPos, update: Partial<WeaponSlot>) => {
    const isRight = pos.hand === "right";
    if (isRight) {
      setRightHand(rightHand.map((s, i) => (i === pos.idx ? { ...s, ...update } : s)));
    } else {
      setLeftHand(leftHand.map((s, i) => (i === pos.idx ? { ...s, ...update } : s)));
    }
  };

  const setWeapon = (w: Weapon | null) => updateSlot(active, { weapon: w, affinity: "Standard" });
  const setAffinity = (a: Affinity) => updateSlot(active, { affinity: a });

  const allSlots = [...rightHand, ...leftHand];
  const totalWeaponWeight =
    Math.round(allSlots.reduce((sum, s) => sum + (s.weapon?.weight ?? 0), 0) * 10) / 10;
  const weaponUpgradeType = weapon ? getUpgradeType(weapon) : null;
  const weaponInfusable = weaponUpgradeType === "infusable";
  const effectiveAffinity: Affinity = weaponInfusable ? affinity : "Standard";

  const loadout = useMemo<LoadoutItem[]>(
    () =>
      [...rightHand, ...leftHand]
        .filter((s): s is { weapon: Weapon; affinity: Affinity } => s.weapon !== null)
        .map((s) => ({
          weapon: s.weapon,
          affinity: isInfusable(s.weapon) ? s.affinity : "Standard",
        })),
    [rightHand, leftHand],
  );

  // Anchor weapon: the slot used for AP-panel breakdown + spell scaling.
  // Falls back to any non-empty loadout weapon when the active slot is empty
  // so the recommendation still renders if the user has weapons in other
  // slots (clicking on an empty slot shouldn't clear the panel).
  const anchorWeapon: Weapon | null = weapon ?? loadout[0]?.weapon ?? null;
  const anchorAffinity: Affinity = weapon ? effectiveAffinity : loadout[0]?.affinity ?? "Standard";

  const displayLoadout = useMemo(() => {
    const out: { pos: SlotPos; weapon: Weapon; affinity: Affinity }[] = [];
    rightHand.forEach((s, i) => {
      if (s.weapon) {
        out.push({
          pos: { hand: "right", idx: i },
          weapon: s.weapon,
          affinity: isInfusable(s.weapon) ? s.affinity : "Standard",
        });
      }
    });
    leftHand.forEach((s, i) => {
      if (s.weapon) {
        out.push({
          pos: { hand: "left", idx: i },
          weapon: s.weapon,
          affinity: isInfusable(s.weapon) ? s.affinity : "Standard",
        });
      }
    });
    return out;
  }, [rightHand, leftHand]);

  const selectedClass = classes.find((c) => c.id === classId);

  const minLevel = useMemo(() => {
    if (!anchorWeapon) return 1;
    return selectedClass
      ? getMinFeasibleLevel(selectedClass, anchorWeapon, twoHand, anchorAffinity, talismanIds, armorSelection, loadout)
      : getMinLevelForWeapon(anchorWeapon, twoHand);
  }, [anchorWeapon, anchorAffinity, twoHand, selectedClass, talismanIds, armorSelection, loadout]);

  const clampedTargetLevel = Math.max(minLevel, Math.min(MAX_TARGET_LEVEL, targetLevel));

  // Equip-load math: total weapon weight is the sum across all six slots.
  // Subtract the anchor weapon's weight to derive the "extra" weight from
  // the other slots (the recommender uses anchor.weight + extraWeaponWeight).
  const anchorExtraWeight = Math.max(0, totalWeaponWeight - (anchorWeapon?.weight ?? 0));

  const rec = useMemo(
    () =>
      anchorWeapon
        ? recommend(anchorWeapon, {
            targetLevel: clampedTargetLevel,
            twoHand,
            affinity: anchorAffinity,
            classId: selectedClass?.id,
            talismanIds,
            armorSelection,
            extraWeaponWeight: anchorExtraWeight,
            loadout,
          })
        : null,
    [anchorWeapon, anchorAffinity, clampedTargetLevel, twoHand, talismanIds, armorSelection, selectedClass?.id, anchorExtraWeight, loadout],
  );

  const armorBoosts = useMemo(() => totalArmorStatBoosts(armorSelection), [armorSelection]);

  const selectedClassMatch =
    rec && selectedClass ? compareClassToTarget(selectedClass, rec.target) : null;

  const handleCategoryChange = (next: WeaponCategory | "all") => {
    setCategory(next);
    if (weapon && next !== "all" && weapon.category !== next) {
      setWeapon(null);
      setAffinity("Standard");
    }
  };

  const computeMinFor = (w: Weapon, th: boolean) =>
    selectedClass
      ? getMinFeasibleLevel(selectedClass, w, th, effectiveAffinity, talismanIds, armorSelection, loadout)
      : getMinLevelForWeapon(w, th);

  const handleTalismanChange = (slot: number, value: Talisman | null) => {
    const next = [...talismanIds];
    next[slot] = value?.id ?? null;
    setTalismanIds(next);
    if (weapon && selectedClass) {
      const nextIds = [...talismanIds];
      nextIds[slot] = value?.id ?? null;
      const nextMin = getMinFeasibleLevel(selectedClass, weapon, twoHand, effectiveAffinity, nextIds, armorSelection, loadout);
      if (targetLevel < nextMin) setTargetLevel(nextMin);
    }
  };

  const handleArmorChange = (slot: ArmorSlot, value: ArmorPiece | null) => {

    setArmorSelection({ ...armorSelection, [slot]: value?.id ?? null });
    if (weapon && selectedClass) {
      const nextSel: ArmorSelection = { ...armorSelection, [slot]: value?.id ?? null };
      const nextMin = getMinFeasibleLevel(selectedClass, weapon, twoHand, effectiveAffinity, talismanIds, nextSel, loadout);
      if (targetLevel < nextMin) setTargetLevel(nextMin);
    }
  };

  const handleWeaponChange = (next: Weapon | null) => {
    // setWeapon already resets affinity to "Standard"; calling setAffinity here
    // would fire a second updateSlot with the stale closure copy of rightHand /
    // leftHand and overwrite the weapon back to null.
    setWeapon(next);
    if (next) {
      const nextMin = computeMinFor(next, twoHand);
      if (targetLevel < nextMin) setTargetLevel(nextMin);
    }
  };

  const handleTwoHandToggle = (checked: boolean) => {
    setTwoHand(checked);
    if (weapon) {
      const nextMin = computeMinFor(weapon, checked);
      if (targetLevel < nextMin) setTargetLevel(nextMin);
    }
  };

  const handleLevelChange = (v: number) => {
    const clamped = Math.max(minLevel, Math.min(MAX_TARGET_LEVEL, Math.floor(v) || minLevel));
    setTargetLevel(clamped);
  };

  const handleClassChange = (nextId: string) => {
    setClassId(nextId);
    const nextCls = classes.find((c) => c.id === nextId);

    // Preset weapon slots from the class's starting equipment
    const buildSlots = (ids: string[] | undefined): WeaponSlot[] => {
      const out: WeaponSlot[] = [emptySlot(), emptySlot(), emptySlot()];
      (ids ?? []).slice(0, 3).forEach((wid, i) => {
        const w = weapons.find((x) => x.id === wid) ?? null;
        out[i] = { weapon: w, affinity: "Standard" };
      });
      return out;
    };
    const newRight = buildSlots(nextCls?.starting?.right);
    const newLeft = buildSlots(nextCls?.starting?.left);
    setRightHand(newRight);
    setLeftHand(newLeft);

    // Active = first non-empty slot (prefer R1)
    const firstFilled = (() => {
      for (let i = 0; i < 3; i++) if (newRight[i].weapon) return { hand: "right" as const, idx: i };
      for (let i = 0; i < 3; i++) if (newLeft[i].weapon) return { hand: "left" as const, idx: i };
      return { hand: "right" as const, idx: 0 };
    })();
    setActive(firstFilled);

    const activeWeapon = firstFilled.hand === "right"
      ? newRight[firstFilled.idx].weapon
      : newLeft[firstFilled.idx].weapon;
    if (!activeWeapon || !nextCls) return;
    const nextLoadout: LoadoutItem[] = [...newRight, ...newLeft]
      .filter((s): s is { weapon: Weapon; affinity: Affinity } => s.weapon !== null)
      .map((s) => ({
        weapon: s.weapon,
        affinity: isInfusable(s.weapon) ? s.affinity : "Standard",
      }));
    const nextMin = getMinFeasibleLevel(nextCls, activeWeapon, twoHand, "Standard", talismanIds, armorSelection, nextLoadout);
    if (targetLevel < nextMin) setTargetLevel(nextMin);
  };

  const marks = sliderMarks(minLevel, MAX_TARGET_LEVEL);

  const weaponDetail = weapon && (() => {
    const maxScaling = weapon.scalingTable?.max[effectiveAffinity] ?? weapon.scaling;
    const baseScaling = weapon.scalingTable?.base;
    const allStats = new Set<Stat>([
      ...(Object.keys(weapon.requirements) as Stat[]),
      ...(Object.keys(maxScaling) as Stat[]),
      ...(baseScaling ? (Object.keys(baseScaling) as Stat[]) : []),
    ]);
    const upgradeLabel = weaponInfusable ? "+25" : "+10";
    return (
      <GlassCard>
        <div className="flex items-start gap-4">
          {weapon.image && (
            <img
              src={weapon.image}
              alt={`${weapon.name} icon`}
              loading="lazy"
              className="size-18 shrink-0 rounded-sm bg-white/5 object-contain"
            />
          )}
          <div className="min-w-0 flex-1">
            <p className="font-display text-sm font-semibold tracking-wide text-gold-300">{weapon.name}</p>
            <p className="mb-2 text-sm text-muted-foreground">
              {weapon.category} · {weapon.weight} weight · Skill: {weapon.skill}
            </p>
            <div className="flex flex-wrap gap-2">
              {STAT_ORDER.filter((s) => allStats.has(s)).map((s) => {
                const req = weapon.requirements[s];
                const baseG = gradeOf(baseScaling?.[s]);
                const maxG = gradeOf(maxScaling[s]);
                const maxN = valueOf(maxScaling[s]);
                const maxLabel = maxG ? (maxN !== undefined ? `${maxG}(${maxN})` : maxG) : null;
                return (
                  <StatChip
                    key={s}
                    stat={s}
                    requirement={req}
                    baseGrade={baseG}
                    maxLabel={maxLabel}
                    tooltip={
                      baseG && maxLabel
                        ? `${STAT_LABELS[s]} scaling — +0: ${baseG}, ${upgradeLabel} ${effectiveAffinity}: ${maxLabel}`
                        : `${STAT_LABELS[s]} scaling at ${upgradeLabel}: ${maxLabel ?? "—"}`
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
      </GlassCard>
    );
  })();

  const emptyStateMessage =
    !selectedClass && !rec
      ? "Pick a starting class and a weapon to see the recommended build."
      : !selectedClass
      ? "Pick a starting class to see the recommended build."
      : "Pick a weapon to see the recommended build.";

  return (
    <div className="space-y-10">
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-2xl space-y-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={fadeRise}>
          <h1 className="font-display text-glow bg-gradient-to-b from-gold-300 via-gold-400 to-gold-700 bg-clip-text text-3xl font-bold tracking-[0.08em] text-transparent sm:text-4xl">
            Forge Your Legend
          </h1>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Pick weapons to see the recommended stat spread and starting class.
            Download a PDF file with your level-up plan.
          </p>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeRise}>
          <ClassCarousel classId={classId} onChange={handleClassChange} />
        </motion.div>
      </section>

      <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-6">
        {/* ── The Arsenal (sticky builder column) ──────────────────────── */}
        <aside className="space-y-5 lg:sticky lg:top-20 lg:col-span-5 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:pr-1 lg:pb-4">
          <SectionHeading>The Arsenal</SectionHeading>

          <GlassCard>
            <WeaponSlotsGrid
              rightHand={rightHand}
              leftHand={leftHand}
              active={active}
              onActivate={(pos) => setActive(pos)}
              onPickWeapon={(pos) => {
                setActive(pos);
                // Reset the category filter to "all" each time the picker
                // opens so the user isn't stuck inside whichever category
                // they last browsed.
                setCategory("all");
                setWeaponPickerOpen(true);
              }}
              onChangeAffinity={(pos) => setAffinityPickerPos(pos)}
              onClear={(pos) => updateSlot(pos, { weapon: null, affinity: "Standard" })}
            />
          </GlassCard>

          <GearPicker
            open={weaponPickerOpen}
            title={`Select weapon — ${active.hand === "right" ? "R" : "L"}${active.idx + 1}`}
            options={filteredWeapons}
            onSelect={(w) => handleWeaponChange(w)}
            onClose={() => setWeaponPickerOpen(false)}
            secondary={(w) => `${w.category} · ${w.weight} wgt`}
            header={
              <Select
                value={category}
                onValueChange={(v) => handleCategoryChange(v as WeaponCategory | "all")}
              >
                <SelectTrigger className="w-full" aria-label="Weapon category">
                  <SelectValue placeholder="Weapon category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All categories</SelectItem>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            }
          />

          <AffinityPicker
            open={affinityPickerPos !== null}
            weapon={affinityPickerPos ? slotsFor(affinityPickerPos.hand)[affinityPickerPos.idx].weapon : null}
            currentAffinity={affinityPickerPos ? slotsFor(affinityPickerPos.hand)[affinityPickerPos.idx].affinity : "Standard"}
            onSelect={(a) => {
              if (affinityPickerPos) updateSlot(affinityPickerPos, { affinity: a });
            }}
            onClose={() => setAffinityPickerPos(null)}
          />

          {weaponDetail}

          <InfoTip title="Two-handing multiplies effective Strength by ×1.5, lowering both the Str requirement and the base Str needed to hit AP breakpoints. Applies to every weapon in the loadout.">
            <label className="flex w-fit cursor-pointer items-center gap-3">
              <Switch checked={twoHand} onCheckedChange={handleTwoHandToggle} />
              <span className="text-sm">Two-hand weapons (×1.5 Str)</span>
            </label>
          </InfoTip>

          <GlassCard>
            <ArmorSlots selection={armorSelection} onChange={handleArmorChange} />
          </GlassCard>

          <GlassCard>
            <TalismanSlots talismanIds={talismanIds} onChange={handleTalismanChange} />
          </GlassCard>
        </aside>

        {/* ── The Verdict (recommendation panel) ───────────────────────── */}
        <section className="mt-10 space-y-5 lg:col-span-7 lg:mt-0">
          <SectionHeading>The Verdict</SectionHeading>

          {!rec || !selectedClass ? (
            <GlassCard className="flex items-center gap-3 p-6">
              <Info className="size-5 shrink-0 text-gold-400" />
              <p className="text-sm text-muted-foreground">{emptyStateMessage}</p>
            </GlassCard>
          ) : (
            <>
              <motion.div variants={fadeRise} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                <GlassCard glow>
                  <RecommendationHeader
                    bestClassName={rec.best.cls.name}
                    targetLevel={clampedTargetLevel}
                    equipLoad={rec.equipLoad}
                    onDownloadPdf={
                      selectedClass
                        ? () => {
                            trackPdfDownload(selectedClass.name);
                            generateBuildPdf({
                              weapon: anchorWeapon!,
                              rec,
                              loadout,
                              classData: selectedClass,
                            });
                          }
                        : undefined
                    }
                  />
                </GlassCard>
              </motion.div>

              <motion.div variants={fadeRise} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                <GlassCard>
                  <div className="mb-3 flex items-baseline gap-3">
                    <h3 className="panel-heading">
                      Target Soul Level
                    </h3>
                    <AnimatedNumber value={clampedTargetLevel} className="text-xl font-bold text-gold-300" />
                  </div>
                  <div className="px-1">
                    <Slider
                      value={[clampedTargetLevel]}
                      onValueChange={([v]) => handleLevelChange(v)}
                      min={minLevel}
                      max={MAX_TARGET_LEVEL}
                      step={1}
                      aria-label="Target Soul Level"
                    />
                    <div className="relative mt-1.5 h-4 text-[0.65rem] text-muted-foreground">
                      {marks.map((m) => (
                        <span
                          key={m.value}
                          className="absolute -translate-x-1/2"
                          style={{ left: `${m.pct}%` }}
                        >
                          {m.value}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Minimum is the level{" "}
                    {selectedClass ? `${selectedClass.name} needs` : "the best-fit class needs"}{" "}
                    to wield {anchorWeapon ? anchorWeapon.name : "the weapon"}
                    {twoHand && anchorWeapon ? " (two-handed, ×1.5 Str)" : ""}. Vigor target scales:
                    50→30, 80→40, 100→50, 125+→60 (interpolated).
                  </p>
                </GlassCard>
              </motion.div>

              <motion.div variants={fadeRise} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                <GlassCard>
                  <TargetStatsTable
                    target={rec.target}
                    classBase={selectedClass ? selectedClass.stats : rec.best.cls.stats}
                    classBaseLabel={
                      selectedClass ? `${selectedClass.name} base` : `${rec.best.cls.name} base (best)`
                    }
                    armorBoosts={armorBoosts}
                  />
                </GlassCard>
              </motion.div>

              <motion.div variants={fadeRise} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                <GlassCard>
                  <LoadoutDamagePanel
                    loadout={displayLoadout}
                    active={active}
                    target={rec.target}
                    twoHand={twoHand}
                  />
                </GlassCard>
              </motion.div>

              {rec.spellSuggestions.length > 0 && (
                <motion.div variants={fadeRise} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                  <GlassCard>
                    <SpellRecommendations
                      suggestions={rec.spellSuggestions}
                      loadoutWeaponIds={loadout.map((i) => i.weapon.id)}
                    />
                  </GlassCard>
                </motion.div>
              )}

              <motion.div variants={fadeRise} initial="hidden" whileInView="visible" viewport={viewportOnce}>
                <GlassCard>
                  <div className="space-y-5">
                    <Rationale rationale={rec.rationale} />
                    <ClassRanking
                      matches={rec.ranking}
                      highlightId={selectedClass?.id ?? rec.best.cls.id}
                      targetLevel={clampedTargetLevel}
                    />
                  </div>
                </GlassCard>
              </motion.div>

              {selectedClassMatch && selectedClass?.id !== rec.best.cls.id && (
                <GlassCard className="flex items-start gap-3 border-gold-500/40">
                  <Info className="mt-0.5 size-5 shrink-0 text-gold-400" />
                  <p className="text-sm text-muted-foreground">
                    You're using <b className="text-foreground">{selectedClass!.name}</b> ({selectedClassMatch.waste}{" "}
                    wasted points; this build needs Lv {selectedClassMatch.finalLevel} on
                    that class). The optimal pick is <b className="text-foreground">{rec.best.cls.name}</b> (
                    {rec.best.waste} wasted, needs Lv {rec.best.finalLevel}).
                  </p>
                </GlassCard>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
}

export default BuildPicker;
