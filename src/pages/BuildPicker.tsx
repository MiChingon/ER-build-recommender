import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  Alert,
  Box,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  LinearProgress,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Slider,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { classes, STAT_LABELS, STAT_ORDER, type Stat } from "../data/classes";
import { CATEGORIES, weapons, gradeOf, valueOf, type Weapon, type WeaponCategory } from "../data/weapons";
import { talismans, talismanBaseName, type Talisman } from "../data/talismans";
import { spellImageUrl } from "../data/spells";
import {
  ARMOR_SLOTS,
  ARMOR_SLOT_LABELS,
  armorBySlot,
  findArmor,
  type ArmorPiece,
  type ArmorSelection,
  type ArmorSlot,
  EMPTY_ARMOR_SELECTION,
} from "../data/armor";
import {
  compareClassToTarget,
  estimateAttackPower,
  getMaxUpgradeLevel,
  getMinFeasibleLevel,
  getMinLevelForWeapon,
  getUpgradeType,
  isInfusable,
  recommend,
  DAMAGE_TYPE_LABELS,
} from "../lib/recommender";
import { AFFINITIES, Affinity, DEFAULT_TARGET_LEVEL, LoadoutItem, MAX_TARGET_LEVEL } from "../lib/types";

const STAT_COLORS: Record<Stat, string> = {
  vigor: "#e57373",
  mind: "#7986cb",
  endurance: "#ffb74d",
  strength: "#a1887f",
  dexterity: "#81c784",
  intelligence: "#64b5f6",
  faith: "#fff176",
  arcane: "#ba68c8",
};

type Hand = "right" | "left";
type SlotPos = { hand: Hand; idx: number };
type WeaponSlot = { weapon: Weapon | null; affinity: Affinity };

const emptySlot = (): WeaponSlot => ({ weapon: null, affinity: "Standard" });

export default function BuildPicker() {
  const [category, setCategory] = useState<WeaponCategory | "all">("all");
  const initialHands = useMemo(() => {
    const cls = classes[0];
    const build = (ids: string[] | undefined): WeaponSlot[] => {
      const out: WeaponSlot[] = [emptySlot(), emptySlot(), emptySlot()];
      (ids ?? []).slice(0, 3).forEach((wid, i) => {
        out[i] = { weapon: weapons.find((x) => x.id === wid) ?? null, affinity: "Standard" };
      });
      return out;
    };
    return { right: build(cls.starting?.right), left: build(cls.starting?.left) };
  }, []);
  const [rightHand, setRightHand] = useState<WeaponSlot[]>(initialHands.right);
  const [leftHand, setLeftHand] = useState<WeaponSlot[]>(initialHands.left);
  const [active, setActive] = useState<SlotPos>({ hand: "right", idx: 0 });
  const [weaponPickerOpen, setWeaponPickerOpen] = useState(false);
  const [classId, setClassId] = useState<string>(classes[0].id);
  const [targetLevel, setTargetLevel] = useState<number>(DEFAULT_TARGET_LEVEL);
  const [twoHand, setTwoHand] = useState(false);
  const [talismanIds, setTalismanIds] = useState<(string | null)[]>([null, null, null, null]);
  const [armorSelection, setArmorSelection] = useState<ArmorSelection>({ ...EMPTY_ARMOR_SELECTION });

  const filteredWeapons = useMemo(
    () => (category === "all" ? weapons : weapons.filter((w) => w.category === category)),
    [category],
  );

  const slotsFor = (hand: Hand) => (hand === "right" ? rightHand : leftHand);
  const setSlotsFor = (hand: Hand) => (hand === "right" ? setRightHand : setLeftHand);
  const activeSlotData = slotsFor(active.hand)[active.idx];
  const weapon = activeSlotData.weapon;
  const affinity = activeSlotData.affinity;

  const updateSlot = (pos: SlotPos, update: Partial<WeaponSlot>) => {
    const setter = setSlotsFor(pos.hand);
    setter((prev) => prev.map((s, i) => (i === pos.idx ? { ...s, ...update } : s)));
  };
  const setWeapon = (w: Weapon | null) => updateSlot(active, { weapon: w, affinity: "Standard" });
  const setAffinity = (a: Affinity) => updateSlot(active, { affinity: a });

  const allSlots = [...rightHand, ...leftHand];
  const totalWeaponWeight =
    Math.round(allSlots.reduce((sum, s) => sum + (s.weapon?.weight ?? 0), 0) * 10) / 10;
  const extraWeaponWeight = Math.max(0, totalWeaponWeight - (weapon?.weight ?? 0));

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
    if (!weapon) return 1;
    return selectedClass
      ? getMinFeasibleLevel(selectedClass, weapon, twoHand, effectiveAffinity, talismanIds, armorSelection, loadout)
      : getMinLevelForWeapon(weapon, twoHand);
  }, [weapon, twoHand, selectedClass, effectiveAffinity, talismanIds, armorSelection, loadout]);

  const clampedTargetLevel = Math.max(minLevel, Math.min(MAX_TARGET_LEVEL, targetLevel));

  const rec = useMemo(
    () =>
      weapon
        ? recommend(weapon, {
            targetLevel: clampedTargetLevel,
            twoHand,
            affinity: effectiveAffinity,
            classId: selectedClass?.id,
            talismanIds,
            armorSelection,
            extraWeaponWeight,
            loadout,
          })
        : null,
    [weapon, clampedTargetLevel, twoHand, effectiveAffinity, talismanIds, armorSelection, selectedClass?.id, extraWeaponWeight, loadout],
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
    setTalismanIds((prev) => {
      const next = [...prev];
      next[slot] = value?.id ?? null;
      return next;
    });
    if (weapon && selectedClass) {
      const nextIds = [...talismanIds];
      nextIds[slot] = value?.id ?? null;
      const nextMin = getMinFeasibleLevel(selectedClass, weapon, twoHand, effectiveAffinity, nextIds, armorSelection, loadout);
      if (targetLevel < nextMin) setTargetLevel(nextMin);
    }
  };

  const handleArmorChange = (slot: ArmorSlot, value: ArmorPiece | null) => {
    setArmorSelection((prev) => ({ ...prev, [slot]: value?.id ?? null }));
    if (weapon && selectedClass) {
      const nextSel: ArmorSelection = { ...armorSelection, [slot]: value?.id ?? null };
      const nextMin = getMinFeasibleLevel(selectedClass, weapon, twoHand, effectiveAffinity, talismanIds, nextSel, loadout);
      if (targetLevel < nextMin) setTargetLevel(nextMin);
    }
  };

  const handleWeaponChange = (next: Weapon | null) => {
    setWeapon(next);
    setAffinity("Standard");
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
        <Typography variant="h4" component="h1" gutterBottom>
          Elden Ring Build Recommender
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Pick a weapon to see the recommended stat spread and starting class.
          Optionally compare against a specific class.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Card>
            <CardContent>
              <Stack spacing={3}>
                <Typography variant="h6">Pick your build</Typography>

                <ClassCarousel classId={classId} onChange={handleClassChange} />

                <FormControl fullWidth>
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

                <WeaponSlotsGrid
                  rightHand={rightHand}
                  leftHand={leftHand}
                  active={active}
                  onActivate={(pos) => setActive(pos)}
                  onPickWeapon={(pos) => {
                    setActive(pos);
                    setWeaponPickerOpen(true);
                  }}
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
                    <FormControl fullWidth size="small" disabled={!weapon || !weaponInfusable}>
                      <InputLabel id="affinity-label">Infusion (affinity)</InputLabel>
                      <Select
                        labelId="affinity-label"
                        label="Infusion (affinity)"
                        value={effectiveAffinity}
                        onChange={(e) => setAffinity(e.target.value as Affinity)}
                        renderValue={(v) => {
                          if (!weapon) return v as string;
                          if (weaponUpgradeType === "somber") return "Somber";
                          if (weaponUpgradeType === "standard-fixed") return "Standard";
                          return v as string;
                        }}
                      >
                        {AFFINITIES.map((a) => (
                          <MenuItem key={a} value={a}>
                            {a}
                          </MenuItem>
                        ))}
                      </Select>
                      <FormHelperText>
                        {!weapon
                          ? "Pick a weapon first."
                          : weaponUpgradeType === "somber"
                          ? "Somber weapon (+10 max) — affinity cannot be changed."
                          : weaponUpgradeType === "standard-fixed"
                          ? "Standard weapon with a fixed Ash of War — affinity cannot be changed."
                          : "Affinity overrides the weapon's primary scaling stat."}
                      </FormHelperText>
                    </FormControl>
                  }
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
                                const scalingLabel = baseG && maxLabel
                                  ? ` (+0:${baseG}→${upgradeLabel}:${maxLabel})`
                                  : maxLabel
                                  ? ` (${maxLabel})`
                                  : "";
                                return (
                                  <Tooltip
                                    key={s}
                                    title={
                                      baseG && maxLabel
                                        ? `${STAT_LABELS[s]} scaling — +0: ${baseG}, ${upgradeLabel} ${effectiveAffinity}: ${maxLabel}`
                                        : `${STAT_LABELS[s]} scaling at ${upgradeLabel}: ${maxLabel ?? "—"}`
                                    }
                                  >
                                    <Chip
                                      size="small"
                                      label={`${STAT_LABELS[s].slice(0, 3)} ${req ?? "—"}${scalingLabel}`}
                                      sx={{ bgcolor: STAT_COLORS[s], color: "rgba(0,0,0,0.85)" }}
                                    />
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
                    {selectedClass
                      ? `${selectedClass.name} needs`
                      : "the best-fit class needs"}{" "}
                    to wield {weapon ? weapon.name : "the weapon"}
                    {twoHand && weapon ? " (two-handed, ×1.5 Str)" : ""}. Vigor target scales:
                    50→30, 80→40, 100→50, 125+→60 (interpolated).
                  </FormHelperText>
                </Box>

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
                    weapon={weapon!}
                    bestClassName={rec.best.cls.name}
                    targetLevel={clampedTargetLevel}
                    equipLoad={rec.equipLoad}
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

                  <TargetStatsTable
                    target={rec.target}
                    classBase={selectedClass ? selectedClass.stats : rec.best.cls.stats}
                    classBaseLabel={
                      selectedClass ? `${selectedClass.name} base` : `${rec.best.cls.name} base (best)`
                    }
                  />

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

function WeaponSlotsGrid({
  rightHand,
  leftHand,
  active,
  onActivate,
  onPickWeapon,
  onClear,
}: {
  rightHand: WeaponSlot[];
  leftHand: WeaponSlot[];
  active: SlotPos;
  onActivate: (pos: SlotPos) => void;
  onPickWeapon: (pos: SlotPos) => void;
  onClear: (pos: SlotPos) => void;
}) {
  const row = (hand: Hand, slots: WeaponSlot[], label: string) => (
    <Box>
      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 0.5 }}>
        {label}
      </Typography>
      <Stack direction="row" spacing={1}>
        {slots.map((slot, idx) => {
          const isActive = active.hand === hand && active.idx === idx;
          const w = slot.weapon;
          return (
            <Paper
              key={idx}
              variant="outlined"
              onClick={() => (slot.weapon ? onActivate({ hand, idx }) : onPickWeapon({ hand, idx }))}
              sx={{
                flex: "1 1 0",
                minWidth: 0,
                overflow: "hidden",
                p: 1,
                cursor: "pointer",
                borderColor: isActive ? "primary.main" : undefined,
                borderWidth: isActive ? 2 : 1,
                bgcolor: isActive ? "rgba(212,175,55,0.08)" : undefined,
                position: "relative",
                minHeight: 96,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": { borderColor: isActive ? "primary.main" : "primary.light" },
              }}
            >
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ position: "absolute", top: 2, left: 6, fontSize: "0.65rem" }}
              >
                {hand === "right" ? "R" : "L"}{idx + 1}
              </Typography>
              {w ? (
                <>
                  <Box
                    component="img"
                    src={w.image}
                    alt=""
                    loading="lazy"
                    sx={{ width: 48, height: 48, objectFit: "contain", bgcolor: "action.hover", borderRadius: 0.5, flexShrink: 0 }}
                  />
                  <Tooltip title={w.name}>
                    <Typography
                      variant="caption"
                      sx={{ mt: 0.5, textAlign: "center", lineHeight: 1.2, width: "100%", display: "block" }}
                      noWrap
                    >
                      {w.name}
                    </Typography>
                  </Tooltip>
                  {slot.affinity !== "Standard" && isInfusable(w) && (
                    <Typography variant="caption" color="primary.main" sx={{ fontSize: "0.65rem" }}>
                      {slot.affinity}
                    </Typography>
                  )}
                  <Tooltip title="Change weapon">
                    <IconButton
                      size="small"
                      aria-label="Change weapon"
                      onClick={(e) => { e.stopPropagation(); onPickWeapon({ hand, idx }); }}
                      sx={{ position: "absolute", top: 0, right: 18, p: 0.25 }}
                    >
                      <Typography variant="caption" sx={{ fontSize: "0.8rem", lineHeight: 1 }}>↻</Typography>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Clear slot">
                    <IconButton
                      size="small"
                      aria-label="Clear slot"
                      onClick={(e) => { e.stopPropagation(); onClear({ hand, idx }); }}
                      sx={{ position: "absolute", top: 0, right: 0, p: 0.25 }}
                    >
                      <Typography variant="caption" sx={{ fontSize: "0.85rem", lineHeight: 1 }}>×</Typography>
                    </IconButton>
                  </Tooltip>
                </>
              ) : (
                <Typography variant="caption" color="text.disabled">Empty</Typography>
              )}
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
  return (
    <Stack spacing={1.5}>
      {row("right", rightHand, "Right hand (R1 · R2 · R3)")}
      {row("left", leftHand, "Left hand (L1 · L2 · L3)")}
    </Stack>
  );
}

function ArmorSlots({
  selection,
  onChange,
}: {
  selection: ArmorSelection;
  onChange: (slot: ArmorSlot, value: ArmorPiece | null) => void;
}) {
  const [openSlot, setOpenSlot] = useState<ArmorSlot | null>(null);
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Armor
      </Typography>
      <Stack direction="row" spacing={1}>
        {ARMOR_SLOTS.map((slot) => {
          const current = findArmor(selection[slot]) ?? null;
          return (
            <GearTile
              key={slot}
              label={ARMOR_SLOT_LABELS[slot]}
              image={current?.image ?? null}
              name={current?.name ?? null}
              onClick={() => setOpenSlot(slot)}
              onClear={() => onChange(slot, null)}
            />
          );
        })}
      </Stack>
      <GearPicker
        open={openSlot !== null}
        title={openSlot ? `Select ${ARMOR_SLOT_LABELS[openSlot]}` : ""}
        options={openSlot ? armorBySlot[openSlot] : []}
        onSelect={(item) => openSlot && onChange(openSlot, item)}
        onClose={() => setOpenSlot(null)}
        secondary={(o) => `Phy ${o.phy} · Poise ${o.poise} · Wgt ${o.weight}`}
      />
    </Box>
  );
}

function TalismanSlots({
  talismanIds,
  onChange,
}: {
  talismanIds: (string | null)[];
  onChange: (slot: number, value: Talisman | null) => void;
}) {
  const [openSlot, setOpenSlot] = useState<number | null>(null);
  const selectedBaseNames = new Set(
    talismanIds
      .map((id) => (id ? talismans.find((t) => t.id === id) : null))
      .filter((t): t is Talisman => Boolean(t))
      .map((t) => talismanBaseName(t.name)),
  );
  const pickerOptions = useMemo(() => {
    if (openSlot === null) return [] as Talisman[];
    const currentId = talismanIds[openSlot];
    const current = currentId ? talismans.find((t) => t.id === currentId) ?? null : null;
    const currentBase = current ? talismanBaseName(current.name) : null;
    return talismans.filter(
      (t) =>
        t.id === currentId ||
        !selectedBaseNames.has(talismanBaseName(t.name)) ||
        talismanBaseName(t.name) === currentBase,
    );
  }, [openSlot, talismanIds, selectedBaseNames]);

  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Talismans (up to 4)
      </Typography>
      <Stack direction="row" spacing={1}>
        {[0, 1, 2, 3].map((slot) => {
          const currentId = talismanIds[slot];
          const current = currentId ? talismans.find((t) => t.id === currentId) ?? null : null;
          return (
            <GearTile
              key={slot}
              label={`T${slot + 1}`}
              image={current?.image ?? null}
              name={current?.name ?? null}
              onClick={() => setOpenSlot(slot)}
              onClear={() => onChange(slot, null)}
            />
          );
        })}
      </Stack>
      <GearPicker
        open={openSlot !== null}
        title={openSlot !== null ? `Select talisman (T${openSlot + 1})` : ""}
        options={pickerOptions}
        onSelect={(item) => openSlot !== null && onChange(openSlot, item)}
        onClose={() => setOpenSlot(null)}
        secondary={(o) => `${o.effect} · Wgt ${o.weight}`}
      />
    </Box>
  );
}

function GearTile({
  label,
  image,
  name,
  onClick,
  onClear,
}: {
  label: string;
  image: string | null;
  name: string | null;
  onClick: () => void;
  onClear: () => void;
}) {
  return (
    <Paper
      variant="outlined"
      onClick={onClick}
      sx={{
        flex: "1 1 0",
        minWidth: 0,
        overflow: "hidden",
        p: 1,
        cursor: "pointer",
        position: "relative",
        minHeight: 96,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": { borderColor: "primary.light" },
      }}
    >
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ position: "absolute", top: 2, left: 6, fontSize: "0.65rem" }}
      >
        {label}
      </Typography>
      {image ? (
        <>
          <Box
            component="img"
            src={image}
            alt=""
            loading="lazy"
            sx={{ width: 48, height: 48, objectFit: "contain", bgcolor: "action.hover", borderRadius: 0.5, flexShrink: 0 }}
          />
          {name && (
            <Tooltip title={name}>
              <Typography
                variant="caption"
                sx={{ mt: 0.5, textAlign: "center", lineHeight: 1.2, width: "100%", display: "block" }}
                noWrap
              >
                {name}
              </Typography>
            </Tooltip>
          )}
          <IconButton
            size="small"
            aria-label="Clear slot"
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
            sx={{ position: "absolute", top: 0, right: 0, p: 0.25 }}
          >
            <Typography variant="caption" sx={{ fontSize: "0.85rem", lineHeight: 1 }}>
              ×
            </Typography>
          </IconButton>
        </>
      ) : (
        <Typography variant="caption" color="text.disabled">
          Empty
        </Typography>
      )}
    </Paper>
  );
}

type GearOption = { id: string; name: string; image?: string };

function GearPicker<T extends GearOption>({
  open,
  title,
  options,
  onSelect,
  onClose,
  secondary,
  header,
}: {
  open: boolean;
  title: string;
  options: T[];
  onSelect: (item: T) => void;
  onClose: () => void;
  secondary?: (item: T) => string;
  header?: ReactNode;
}) {
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);
  const q = query.trim().toLowerCase();
  const filtered = q
    ? options.filter((o) => o.name.toLowerCase().includes(q))
    : options;
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        {header ? <Box sx={{ mb: 1.5 }}>{header}</Box> : null}
        <TextField
          fullWidth
          autoFocus
          size="small"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          sx={{ mb: 1 }}
        />
        <List dense sx={{ maxHeight: 420, overflow: "auto" }}>
          {filtered.length === 0 ? (
            <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: "center" }}>
              No matches
            </Typography>
          ) : (
            filtered.map((o) => (
              <ListItemButton
                key={o.id}
                onClick={() => {
                  onSelect(o);
                  onClose();
                }}
              >
                <ListItemAvatar>
                  {o.image ? (
                    <Box
                      component="img"
                      src={o.image}
                      alt=""
                      loading="lazy"
                      sx={{ width: 36, height: 36, objectFit: "contain", bgcolor: "action.hover", borderRadius: 0.5 }}
                    />
                  ) : (
                    <Box sx={{ width: 36, height: 36, bgcolor: "action.hover", borderRadius: 0.5 }} />
                  )}
                </ListItemAvatar>
                <ListItemText
                  primary={o.name}
                  secondary={secondary ? secondary(o) : undefined}
                  slotProps={{ secondary: { noWrap: true } }}
                />
              </ListItemButton>
            ))
          )}
        </List>
      </DialogContent>
    </Dialog>
  );
}

function ClassCarousel({
  classId,
  onChange,
}: {
  classId: string;
  onChange: (id: string) => void;
}) {
  const currentIndex = Math.max(
    0,
    classes.findIndex((c) => c.id === classId),
  );
  const current = classes[currentIndex];

  const go = (delta: number) => {
    const next = (currentIndex + delta + classes.length) % classes.length;
    onChange(classes[next].id);
  };

  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Starting class
      </Typography>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <IconButton
            aria-label="Previous class"
            onClick={() => go(-1)}
            size="large"
          >
            <ChevronLeftIcon />
          </IconButton>
          <Stack
            spacing={1}
            sx={{ flex: 1, alignItems: "center", textAlign: "center" }}
          >
            <Box
              component="img"
              src={current.image}
              alt={`${current.name} portrait`}
              loading="lazy"
              sx={{
                width: 160,
                height: 260,
                objectFit: "contain",
                objectPosition: "center bottom",
                borderRadius: 1,
                bgcolor: "action.hover",
                pt: 1,
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {current.name}
            </Typography>
            <Chip size="small" label={`Lv ${current.level}`} />
            <Typography variant="caption" color="text.secondary">
              {currentIndex + 1} / {classes.length}
            </Typography>
          </Stack>
          <IconButton
            aria-label="Next class"
            onClick={() => go(1)}
            size="large"
          >
            <ChevronRightIcon />
          </IconButton>
        </Stack>
      </Paper>
      <FormHelperText sx={{ mx: 1.75 }}>
        Build is computed against this class's starting stats.
      </FormHelperText>
    </Box>
  );
}

const DAMAGE_TYPE_COLORS: Record<string, string> = {
  phy: "#ffffff",
  mag: "#3fbddd",
  fir: "#ff9900",
  lit: "#ffff00",
  hol: "#ffcc99",
};

function LoadoutDamagePanel({
  loadout,
  active,
  target,
  twoHand,
}: {
  loadout: { pos: SlotPos; weapon: Weapon; affinity: Affinity }[];
  active: SlotPos;
  target: Record<Stat, number>;
  twoHand: boolean;
}) {
  return (
    <Box>
      <Stack direction="row" spacing={1} sx={{ alignItems: "baseline", mb: 1 }}>
        <Typography variant="subtitle2">Estimated Attack Power</Typography>
        <Typography variant="caption" color="text.secondary">
          at target stats{twoHand ? ", two-handed" : ""}
        </Typography>
      </Stack>
      {loadout.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No weapons selected.
        </Typography>
      ) : (
        <Stack spacing={1}>
          {loadout.map(({ pos, weapon, affinity }) => (
            <WeaponDamageRow
              key={`${pos.hand}-${pos.idx}`}
              pos={pos}
              weapon={weapon}
              affinity={affinity}
              target={target}
              twoHand={twoHand}
              isActive={pos.hand === active.hand && pos.idx === active.idx}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
}

function WeaponDamageRow({
  pos,
  weapon,
  affinity,
  target,
  twoHand,
  isActive,
}: {
  pos: SlotPos;
  weapon: Weapon;
  affinity: Affinity;
  target: Record<Stat, number>;
  twoHand: boolean;
  isActive: boolean;
}) {
  const baseEstimate = estimateAttackPower(weapon, target as never, "base", twoHand, affinity);
  const maxEstimate = estimateAttackPower(weapon, target as never, "max", twoHand, affinity);
  const maxLabel = getMaxUpgradeLevel(weapon);
  const slotLabel = `${pos.hand === "right" ? "R" : "L"}${pos.idx + 1}`;
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 1.5,
        borderColor: isActive ? "primary.main" : undefined,
        borderWidth: isActive ? 2 : 1,
        bgcolor: isActive ? "rgba(212,175,55,0.08)" : undefined,
      }}
    >
      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
        <Chip size="small" label={slotLabel} variant={isActive ? "filled" : "outlined"} color={isActive ? "primary" : "default"} />
        {weapon.image ? (
          <Box
            component="img"
            src={weapon.image}
            alt=""
            loading="lazy"
            sx={{ width: 40, height: 40, objectFit: "contain", bgcolor: "action.hover", borderRadius: 0.5, flexShrink: 0 }}
          />
        ) : (
          <Box sx={{ width: 40, height: 40, bgcolor: "action.hover", borderRadius: 0.5, flexShrink: 0 }} />
        )}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="body2" noWrap sx={{ fontWeight: 600 }}>
            {weapon.name}
          </Typography>
          <Typography variant="caption" color="text.secondary" noWrap sx={{ display: "block" }}>
            {weapon.category} · {affinity}
          </Typography>
        </Box>
        <Box sx={{ textAlign: "right", flexShrink: 0, minWidth: 90 }}>
          <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>
            +0 · {baseEstimate.total}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            {maxLabel} · {maxEstimate.total}
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 1, flexWrap: "wrap" }}>
        {maxEstimate.breakdown.map((b) => (
          <Stack key={b.type} direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
            <Box
              sx={{
                width: 8, height: 8, borderRadius: "50%",
                bgcolor: DAMAGE_TYPE_COLORS[b.type] ?? "text.secondary",
                flexShrink: 0,
              }}
            />
            <Typography variant="caption" color="text.secondary">
              {DAMAGE_TYPE_LABELS[b.type]} {b.total}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
}

function RecommendationHeader({
  weapon,
  bestClassName,
  targetLevel,
  equipLoad,
}: {
  weapon: Weapon;
  bestClassName: string;
  targetLevel: number;
  equipLoad: import("../lib/types").EquipLoadSummary;
}) {
  const loadColor =
    equipLoad.rollCategory === "overloaded"
      ? "error"
      : equipLoad.rollCategory === "heavy"
      ? "warning"
      : equipLoad.rollCategory === "medium"
      ? "primary"
      : "success";
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Recommended build for {weapon.name}
      </Typography>
      <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: "wrap" }}>
        <Chip color="primary" label={`Best class: ${bestClassName}`} />
        <Chip label={`Target Soul Level: ${targetLevel}`} variant="outlined" />
        <Tooltip
          title={`Weapon ${equipLoad.weaponWeight} + Talismans ${equipLoad.talismanWeight} = ${equipLoad.totalWeight} / ${equipLoad.maxLoad} max equip load. Roll: ${equipLoad.rollCategory}.`}
        >
          <Chip
            color={loadColor}
            variant="outlined"
            label={`Equip Load: ${equipLoad.totalWeight} / ${equipLoad.maxLoad} (${equipLoad.percent.toFixed(0)}%)`}
          />
        </Tooltip>
      </Stack>
    </Box>
  );
}

function TargetStatsTable({
  target,
  classBase,
  classBaseLabel,
}: {
  target: Record<Stat, number>;
  classBase: Record<Stat, number>;
  classBaseLabel: string;
}) {
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Target stats vs {classBaseLabel}
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Stat</TableCell>
            <TableCell align="right">Base</TableCell>
            <TableCell align="right">Target</TableCell>
            <TableCell>Plan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {STAT_ORDER.map((stat) => {
            const base = classBase[stat];
            const t = target[stat];
            const delta = t - base;
            const pct = t > 0 ? Math.min(100, (base / t) * 100) : 100;
            return (
              <TableRow key={stat}>
                <TableCell>
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                    <Box
                      sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: STAT_COLORS[stat] }}
                    />
                    <span>{STAT_LABELS[stat]}</span>
                  </Stack>
                </TableCell>
                <TableCell align="right">{base}</TableCell>
                <TableCell align="right">
                  <b>{t}</b>
                </TableCell>
                <TableCell sx={{ width: "40%" }}>
                  {delta > 0 ? (
                    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                      <LinearProgress
                        variant="determinate"
                        value={pct}
                        sx={{ flex: 1, height: 6, borderRadius: 3 }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        +{delta}
                      </Typography>
                    </Stack>
                  ) : delta < 0 ? (
                    <Typography variant="caption" color="warning.main">
                      {delta} wasted
                    </Typography>
                  ) : (
                    <Typography variant="caption" color="text.secondary">
                      —
                    </Typography>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
}

function SpellRecommendations({
  suggestions,
}: {
  suggestions: import("../lib/types").SpellSuggestion[];
}) {
  const hasSorceries = suggestions.some((s) => s.spell.type === "sorcery");
  const hasIncantations = suggestions.some((s) => s.spell.type === "incantation");
  const label =
    hasSorceries && hasIncantations
      ? "Suggested spells"
      : hasSorceries
      ? "Suggested sorceries"
      : "Suggested incantations";
  const slotsUsed = suggestions.reduce((sum, s) => sum + s.spell.slots, 0);
  return (
    <Box>
      <Stack direction="row" spacing={1} sx={{ alignItems: "baseline", mb: 1, flexWrap: "wrap" }} useFlexGap>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="caption" color="text.secondary">
          castable with the recommended stats, fit within 10 memory slots
        </Typography>
        <Chip size="small" variant="outlined" label={`${slotsUsed} / 10 memory slots`} />
      </Stack>
      <Stack spacing={1}>
        {suggestions.map(({ spell, boosted }) => {
          const reqs = [
            spell.requirements.intelligence ? `Int ${spell.requirements.intelligence}` : null,
            spell.requirements.faith ? `Fai ${spell.requirements.faith}` : null,
            spell.requirements.arcane ? `Arc ${spell.requirements.arcane}` : null,
          ]
            .filter(Boolean)
            .join(" · ");
          return (
            <Paper
              key={spell.id}
              variant="outlined"
              sx={{
                p: 1.25,
                borderColor: boosted ? "primary.main" : undefined,
                borderWidth: boosted ? 2 : 1,
                bgcolor: boosted ? "rgba(212,175,55,0.08)" : undefined,
              }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  src={spellImageUrl(spell)}
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
                  }}
                  sx={{ width: 40, height: 40, objectFit: "contain", bgcolor: "action.hover", borderRadius: 0.5, flexShrink: 0 }}
                />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap" }} useFlexGap>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {spell.name}
                    </Typography>
                    <Chip size="small" variant="outlined" label={spell.category} />
                    {boosted && (
                      <Chip size="small" color="primary" label="Boosted by this catalyst" />
                    )}
                  </Stack>
                  <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.25 }}>
                    {spell.effect}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "right", flexShrink: 0, minWidth: 90 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>
                    {reqs || "—"}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>
                    FP {spell.fpCost} · {spell.slots} slot{spell.slots === 1 ? "" : "s"}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
}

function Rationale({ rationale }: { rationale: string[] }) {
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Why these targets
      </Typography>
      <Stack component="ul" sx={{ pl: 2, m: 0 }} spacing={0.5}>
        {rationale.map((r, i) => (
          <Typography key={i} component="li" variant="body2" color="text.secondary">
            {r}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}

function ClassRanking({
  matches,
  highlightId,
  targetLevel,
}: {
  matches: ReturnType<typeof recommend>["ranking"];
  highlightId: string;
  targetLevel: number;
}) {
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Class ranking
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
        Waste = starting points stuck above the target. Deficit = points still to invest. "Lv
        needed" is the minimum Soul Level that class would need to reach all targets — green
        if it fits within your target of {targetLevel}, red if it goes over.
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Class</TableCell>
            <TableCell align="right">Start Lv</TableCell>
            <TableCell align="right">Waste</TableCell>
            <TableCell align="right">Deficit</TableCell>
            <TableCell align="right">Lv needed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matches.map(({ cls, waste, deficit, finalLevel }) => {
            const highlight = cls.id === highlightId;
            const fits = finalLevel <= targetLevel;
            return (
              <TableRow
                key={cls.id}
                sx={{
                  bgcolor: highlight ? "action.selected" : undefined,
                  "& td": { fontWeight: highlight ? 600 : undefined },
                }}
              >
                <TableCell>{cls.name}</TableCell>
                <TableCell align="right">{cls.level}</TableCell>
                <TableCell align="right">{waste}</TableCell>
                <TableCell align="right">{deficit}</TableCell>
                <TableCell align="right" sx={{ color: fits ? "success.main" : "error.main" }}>
                  {finalLevel}
                  {fits ? "" : ` (+${finalLevel - targetLevel})`}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
}
