import { useMemo } from "react";
import {
  Alert,
  Box,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Slider,
  Stack,
  Switch,
  Tooltip,
  Typography,
} from "@mui/material";
import { classes, STAT_LABELS, STAT_ORDER, type Stat } from "../data/classes";
import { CATEGORIES, weapons, gradeOf, valueOf, type Weapon, type WeaponCategory } from "../data/weapons";
import { type Talisman } from "../data/talismans";
import {
  type ArmorPiece,
  type ArmorSelection,
  type ArmorSlot,
  EMPTY_ARMOR_SELECTION,
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
import SpellRecommendations from "./components/SpellRecommendations";
import Rationale from "./components/Rationale";
import ClassCarousel from "./components/ClassCarousel";
import WeaponSlotsGrid from "./components/WeaponSlotsGrid";
import GearPicker from "../common/components/GearPicker";
import AffinityPicker from "../common/components/AffinityPicker";
import ArmorSlots from "./components/ArmorSlots";
import TalismanSlots from "./components/TalismanSlots";
import LoadoutDamagePanel from "./components/LoadoutDamagePanel";
import { Hand, SlotPos, STAT_COLORS } from "../common/types";
import RecommendationHeader from "./components/RecommendationHeader";
import { generateBuildPdf } from "../lib/pdf-report";
import ClassRanking from "./components/ClassRanking";
import TargetStatsTable from "./components/TargetStatsTable";
import useBuildPickerState from "./hooks/use-build-picker-state";

type WeaponSlot = { weapon: Weapon | null; affinity: Affinity };

const emptySlot = (): WeaponSlot => ({ weapon: null, affinity: "Standard" });

export interface BuildPickerProps {
  category: WeaponCategory | "all"
  rightHand: WeaponSlot[]
  leftHand: WeaponSlot[]
  active: SlotPos
  weaponPickerOpen: boolean
  affinityPickerPos: SlotPos | null
  classId: string
  targetLevel: number
  twoHand: boolean
  talismanIds: (string | null)[]
  armorSelection: ArmorSelection
}

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
  }, []);

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
      allSlots
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
  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="body1" color="text.secondary">
          Pick weapons to see the recommended stat spread and starting class.
          Download a PDF file with your level-up plan.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Card>
            <CardContent>
              <Stack spacing={3}>
                <ClassCarousel classId={classId} onChange={handleClassChange} />

                <WeaponSlotsGrid
                  rightHand={rightHand}
                  leftHand={leftHand}
                  active={active}
                  onActivate={(pos) => setActive(pos)}
                  onPickWeapon={(pos) => {
                    setActive(pos);
                    setWeaponPickerOpen(true);
                  }}
                  onChangeAffinity={(pos) => setAffinityPickerPos(pos)}
                  onClear={(pos) => updateSlot(pos, { weapon: null, affinity: "Standard" })}
                />

                <GearPicker
                  open={weaponPickerOpen}
                  title={`Select weapon — ${active.hand === "right" ? "R" : "L"}${active.idx + 1}`}
                  options={filteredWeapons}
                  onSelect={(w) => handleWeaponChange(w)}
                  onClose={() => setWeaponPickerOpen(false)}
                  secondary={(w) => `${w.category} · ${w.weight} wgt`}
                  header={
                    <FormControl fullWidth size="small">
                      <InputLabel id="category-label">Weapon category</InputLabel>
                      <Select
                        labelId="category-label"
                        label="Weapon category"
                        value={category}
                        onChange={(e) =>
                          handleCategoryChange(e.target.value as WeaponCategory | "all")
                        }
                      >
                        <MenuItem value="all">All categories</MenuItem>
                        {CATEGORIES.map((c) => (
                          <MenuItem key={c} value={c}>
                            {c}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
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

                {weapon && (
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Stack direction="row" spacing={2} sx={{ alignItems: "flex-start" }}>
                      {weapon.image && (
                        <Box
                          component="img"
                          src={weapon.image}
                          alt={`${weapon.name} icon`}
                          loading="lazy"
                          sx={{ width: 72, height: 72, objectFit: "contain", bgcolor: "action.hover", borderRadius: 0.5, flexShrink: 0 }}
                        />
                      )}
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography variant="subtitle2" gutterBottom>
                          {weapon.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>
                          {weapon.category} · {weapon.weight} weight · Skill: {weapon.skill}
                        </Typography>
                        {(() => {
                          const maxScaling = weapon.scalingTable?.max[effectiveAffinity] ?? weapon.scaling;
                          const baseScaling = weapon.scalingTable?.base;
                          const allStats = new Set<Stat>([
                            ...(Object.keys(weapon.requirements) as Stat[]),
                            ...(Object.keys(maxScaling) as Stat[]),
                            ...(baseScaling ? (Object.keys(baseScaling) as Stat[]) : []),
                          ]);
                          const upgradeLabel = weaponInfusable ? "+25" : "+10";
                          return (
                            <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 1, flexWrap: "wrap" }}>
                              {STAT_ORDER.filter((s) => allStats.has(s)).map((s) => {
                                const req = weapon.requirements[s];
                                const baseG = gradeOf(baseScaling?.[s]);
                                const maxG = gradeOf(maxScaling[s]);
                                const maxN = valueOf(maxScaling[s]);
                                const maxLabel = maxG ? (maxN !== undefined ? `${maxG}(${maxN})` : maxG) : null;
                                const color = STAT_COLORS[s];
                                return (
                                  <Tooltip
                                    key={s}
                                    title={
                                      baseG && maxLabel
                                        ? `${STAT_LABELS[s]} scaling — +0: ${baseG}, ${upgradeLabel} ${effectiveAffinity}: ${maxLabel}`
                                        : `${STAT_LABELS[s]} scaling at ${upgradeLabel}: ${maxLabel ?? "—"}`
                                    }
                                  >
                                    <Box
                                      sx={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 0.75,
                                        px: 1.1,
                                        py: 0.4,
                                        borderRadius: 999,
                                        bgcolor: `${color}1f`,
                                        border: `1px solid ${color}66`,
                                        boxShadow: `0 0 10px ${color}22, inset 0 0 0 1px rgba(0,0,0,0.25)`,
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          width: 8,
                                          height: 8,
                                          borderRadius: "50%",
                                          bgcolor: color,
                                          boxShadow: `0 0 6px ${color}`,
                                          flexShrink: 0,
                                        }}
                                      />
                                      <Typography
                                        component="span"
                                        sx={{
                                          color,
                                          fontWeight: 700,
                                          fontSize: "0.7rem",
                                          letterSpacing: 0.6,
                                          textTransform: "uppercase",
                                        }}
                                      >
                                        {STAT_LABELS[s].slice(0, 3)}
                                      </Typography>
                                      <Typography
                                        component="span"
                                        sx={{ color, fontWeight: 700, fontSize: "0.78rem" }}
                                      >
                                        {req ?? "—"}
                                      </Typography>
                                      {maxLabel && (
                                        <Box
                                          sx={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 0.4,
                                            pl: 0.85,
                                            ml: 0.15,
                                            borderLeft: `1px solid ${color}55`,
                                          }}
                                        >
                                          <Typography
                                            component="span"
                                            sx={{
                                              color: "rgba(255,255,255,0.55)",
                                              fontSize: "0.7rem",
                                              fontWeight: 600,
                                            }}
                                          >
                                            {baseG ?? "—"}
                                          </Typography>
                                          <Typography
                                            component="span"
                                            sx={{ color: "rgba(255,255,255,0.4)", fontSize: "0.65rem" }}
                                          >
                                            →
                                          </Typography>
                                          <Typography
                                            component="span"
                                            sx={{ color, fontWeight: 700, fontSize: "0.72rem" }}
                                          >
                                            {maxLabel}
                                          </Typography>
                                        </Box>
                                      )}
                                    </Box>
                                  </Tooltip>
                                );
                              })}
                            </Stack>
                          );
                        })()}
                      </Box>
                    </Stack>
                  </Paper>
                )}

                <Tooltip title="Two-handing multiplies effective Strength by ×1.5, lowering both the Str requirement and the base Str needed to hit AP breakpoints. Applies to every weapon in the loadout.">
                  <FormControlLabel
                    control={<Switch checked={twoHand} onChange={(e) => handleTwoHandToggle(e.target.checked)} />}
                    label="Two-hand weapons (×1.5 Str)"
                  />
                </Tooltip>

                <ArmorSlots
                  selection={armorSelection}
                  onChange={handleArmorChange}
                />

                <TalismanSlots
                  talismanIds={talismanIds}
                  onChange={handleTalismanChange}
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          {!rec || !selectedClass ? (
            <Card>
              <CardContent>
                <Alert severity="info">
                  {!selectedClass && !rec
                    ? "Pick a starting class and a weapon to see the recommended build."
                    : !selectedClass
                    ? "Pick a starting class to see the recommended build."
                    : "Pick a weapon to see the recommended build."}
                </Alert>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent>
                <Stack spacing={3}>
                  <RecommendationHeader
                    bestClassName={rec.best.cls.name}
                    targetLevel={clampedTargetLevel}
                    equipLoad={rec.equipLoad}
                    onDownloadPdf={
                      selectedClass
                        ? () =>
                            generateBuildPdf({
                              weapon: anchorWeapon!,
                              rec,
                              loadout,
                              classData: selectedClass,
                            })
                        : undefined
                    }
                  />

                  <Box>
                    <Stack direction="row" spacing={2} sx={{ alignItems: "baseline", mb: 1 }}>
                      <Typography variant="subtitle2">Target Soul Level</Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {clampedTargetLevel}
                      </Typography>
                    </Stack>
                    <Box sx={{ px: 1 }}>
                      <Slider
                        value={clampedTargetLevel}
                        onChange={(_, v) => handleLevelChange(Array.isArray(v) ? v[0] : v)}
                        min={minLevel}
                        max={MAX_TARGET_LEVEL}
                        step={1}
                        marks={[
                          { value: minLevel, label: `${minLevel}` },
                          { value: 125, label: "125" },
                          { value: MAX_TARGET_LEVEL, label: `${MAX_TARGET_LEVEL}` },
                        ]}
                        valueLabelDisplay="auto"
                      />
                    </Box>
                    <FormHelperText>
                      Minimum is the level{" "}
                      {selectedClass ? `${selectedClass.name} needs` : "the best-fit class needs"}{" "}
                      to wield {anchorWeapon ? anchorWeapon.name : "the weapon"}
                      {twoHand && anchorWeapon ? " (two-handed, ×1.5 Str)" : ""}. Vigor target scales:
                      50→30, 80→40, 100→50, 125+→60 (interpolated).
                    </FormHelperText>
                  </Box>

                  <TargetStatsTable
                    target={rec.target}
                    classBase={selectedClass ? selectedClass.stats : rec.best.cls.stats}
                    classBaseLabel={
                      selectedClass ? `${selectedClass.name} base` : `${rec.best.cls.name} base (best)`
                    }
                  />

                  <LoadoutDamagePanel
                    loadout={displayLoadout}
                    active={active}
                    target={rec.target}
                    twoHand={twoHand}
                  />

                  {rec.spellSuggestions.length > 0 && (
                    <SpellRecommendations suggestions={rec.spellSuggestions} />
                  )}

                  <Rationale rationale={rec.rationale} />

                  <ClassRanking
                    matches={rec.ranking}
                    highlightId={selectedClass?.id ?? rec.best.cls.id}
                    targetLevel={clampedTargetLevel}
                  />

                  {selectedClassMatch && selectedClass?.id !== rec.best.cls.id && (
                    <Alert severity="info">
                      You're using <b>{selectedClass!.name}</b> ({selectedClassMatch.waste}{" "}
                      wasted points; this build needs Lv {selectedClassMatch.finalLevel} on
                      that class). The optimal pick is <b>{rec.best.cls.name}</b> (
                      {rec.best.waste} wasted, needs Lv {rec.best.finalLevel}).
                    </Alert>
                  )}
                </Stack>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Stack>
  );
}

export default BuildPicker;
