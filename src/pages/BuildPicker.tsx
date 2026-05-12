import { useMemo, useState } from "react";
import {
  Alert,
  Autocomplete,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  LinearProgress,
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
import { CATEGORIES, weapons, type Weapon, type WeaponCategory } from "../data/weapons";
import { talismans, talismanBaseName, type Talisman } from "../data/talismans";
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
  isInfusable,
  recommend,
} from "../lib/recommender";
import { AFFINITIES, Affinity, DEFAULT_TARGET_LEVEL, MAX_TARGET_LEVEL, WeaponUpgrade } from "../lib/types";

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

export default function BuildPicker() {
  const [category, setCategory] = useState<WeaponCategory | "all">("all");
  const [weapon, setWeapon] = useState<Weapon | null>(null);
  const [affinity, setAffinity] = useState<Affinity>("Standard");
  const [classId, setClassId] = useState<string>(classes[0].id);
  const [targetLevel, setTargetLevel] = useState<number>(DEFAULT_TARGET_LEVEL);
  const [twoHand, setTwoHand] = useState(false);
  const [upgrade, setUpgrade] = useState<WeaponUpgrade>("base");
  const [talismanIds, setTalismanIds] = useState<(string | null)[]>([null, null, null, null]);
  const [armorSelection, setArmorSelection] = useState<ArmorSelection>({ ...EMPTY_ARMOR_SELECTION });

  const filteredWeapons = useMemo(
    () => (category === "all" ? weapons : weapons.filter((w) => w.category === category)),
    [category],
  );

  const weaponInfusable = weapon ? isInfusable(weapon) : false;
  const effectiveAffinity: Affinity = weaponInfusable ? affinity : "Standard";

  const selectedClass = classes.find((c) => c.id === classId);

  const minLevel = useMemo(() => {
    if (!weapon) return 1;
    return selectedClass
      ? getMinFeasibleLevel(selectedClass, weapon, twoHand, effectiveAffinity, talismanIds, armorSelection)
      : getMinLevelForWeapon(weapon, twoHand);
  }, [weapon, twoHand, selectedClass, effectiveAffinity, talismanIds, armorSelection]);

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
          })
        : null,
    [weapon, clampedTargetLevel, twoHand, effectiveAffinity, talismanIds, armorSelection, selectedClass?.id],
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
      ? getMinFeasibleLevel(selectedClass, w, th, effectiveAffinity, talismanIds, armorSelection)
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
      const nextMin = getMinFeasibleLevel(selectedClass, weapon, twoHand, effectiveAffinity, nextIds, armorSelection);
      if (targetLevel < nextMin) setTargetLevel(nextMin);
    }
  };

  const handleArmorChange = (slot: ArmorSlot, value: ArmorPiece | null) => {
    setArmorSelection((prev) => ({ ...prev, [slot]: value?.id ?? null }));
    if (weapon && selectedClass) {
      const nextSel: ArmorSelection = { ...armorSelection, [slot]: value?.id ?? null };
      const nextMin = getMinFeasibleLevel(selectedClass, weapon, twoHand, effectiveAffinity, talismanIds, nextSel);
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
    if (!weapon) return;
    const nextCls = classes.find((c) => c.id === nextId);
    const nextMin = nextCls
      ? getMinFeasibleLevel(nextCls, weapon, twoHand, effectiveAffinity, talismanIds, armorSelection)
      : getMinLevelForWeapon(weapon, twoHand);
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

                <Autocomplete
                  options={filteredWeapons}
                  value={weapon}
                  onChange={(_, v) => handleWeaponChange(v)}
                  getOptionLabel={(w) => w.name}
                  groupBy={(w) => (category === "all" ? w.category : "")}
                  isOptionEqualToValue={(a, b) => a.id === b.id}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Weapon"
                      placeholder={
                        category === "all"
                          ? "Search across all melee weapons"
                          : `Search within ${category}`
                      }
                    />
                  )}
                />

                <FormControl fullWidth disabled={!weapon || !weaponInfusable}>
                  <InputLabel id="affinity-label">Infusion (affinity)</InputLabel>
                  <Select
                    labelId="affinity-label"
                    label="Infusion (affinity)"
                    value={effectiveAffinity}
                    onChange={(e) => setAffinity(e.target.value as Affinity)}
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
                      : !weaponInfusable
                      ? "This weapon has a unique skill and cannot be infused."
                      : "Affinity overrides the weapon's primary scaling stat."}
                  </FormHelperText>
                </FormControl>

                <ArmorSlots
                  selection={armorSelection}
                  onChange={handleArmorChange}
                />

                <TalismanSlots
                  talismanIds={talismanIds}
                  onChange={handleTalismanChange}
                  loadSummary={rec?.equipLoad ?? null}
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
                    {selectedClass
                      ? `${selectedClass.name} needs`
                      : "the best-fit class needs"}{" "}
                    to wield {weapon ? weapon.name : "the weapon"}
                    {twoHand && weapon ? " (two-handed, ×1.5 Str)" : ""}. Vigor target scales:
                    50→30, 80→40, 100→50, 125+→60 (interpolated).
                  </FormHelperText>
                </Box>

                <Tooltip title="Two-handing multiplies effective Strength by ×1.5, lowering both the Str requirement and the base Str needed to hit AP breakpoints.">
                  <FormControlLabel
                    control={<Switch checked={twoHand} onChange={(e) => handleTwoHandToggle(e.target.checked)} />}
                    label="Two-hand this weapon (×1.5 Str)"
                  />
                </Tooltip>

                <Tooltip
                  title={
                    weapon
                      ? `Maxed weapon: ${getMaxUpgradeLevel(weapon)} (${isInfusable(weapon) ? "regular smithing stones" : "somber smithing stones"})`
                      : "Toggle weapon upgrade level"
                  }
                >
                  <FormControlLabel
                    control={
                      <Switch
                        checked={upgrade === "max"}
                        onChange={(e) => setUpgrade(e.target.checked ? "max" : "base")}
                      />
                    }
                    label={`Use maxed weapon ${weapon ? `(${getMaxUpgradeLevel(weapon)})` : "(+25 / +10)"}`}
                  />
                </Tooltip>

                {weapon && (
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      {weapon.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {weapon.category} · {weapon.weight} weight · Skill: {weapon.skill}
                    </Typography>
                    <Stack direction="row" spacing={1} useFlexGap sx={{ mt: 1, flexWrap: "wrap" }}>
                      {STAT_ORDER.filter((s) => weapon.requirements[s]).map((s) => (
                        <Chip
                          key={s}
                          size="small"
                          label={`${STAT_LABELS[s].slice(0, 3)} ${weapon.requirements[s]}${weapon.scaling[s] ? ` (${weapon.scaling[s]})` : ""}`}
                          sx={{ bgcolor: STAT_COLORS[s], color: "rgba(0,0,0,0.85)" }}
                        />
                      ))}
                    </Stack>
                  </Paper>
                )}
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

                  <DamagePanel
                    weapon={weapon!}
                    target={rec.target}
                    twoHand={twoHand}
                    selectedUpgrade={upgrade}
                  />

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

function ArmorSlots({
  selection,
  onChange,
}: {
  selection: ArmorSelection;
  onChange: (slot: ArmorSlot, value: ArmorPiece | null) => void;
}) {
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Armor
      </Typography>
      <Stack spacing={1.5}>
        {ARMOR_SLOTS.map((slot) => {
          const currentId = selection[slot];
          const current = findArmor(currentId) ?? null;
          const options = armorBySlot[slot];
          return (
            <Autocomplete
              key={slot}
              size="small"
              options={options}
              value={current}
              onChange={(_, v) => onChange(slot, v)}
              getOptionLabel={(a) => `${a.name} (${a.weight})`}
              isOptionEqualToValue={(a, b) => a.id === b.id}
              renderOption={(props, option) => (
                <Box component="li" {...props}>
                  <Stack direction="row" spacing={1} sx={{ width: "100%", alignItems: "center" }}>
                    <Box
                      component="img"
                      src={option.image}
                      alt=""
                      loading="lazy"
                      sx={{ width: 32, height: 32, objectFit: "contain", bgcolor: "action.hover", borderRadius: 0.5 }}
                    />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="body2" noWrap>
                        {option.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" noWrap sx={{ display: "block" }}>
                        Phy {option.phy} · Poise {option.poise}
                      </Typography>
                    </Box>
                    <Chip size="small" label={`${option.weight}`} />
                  </Stack>
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={ARMOR_SLOT_LABELS[slot]}
                  placeholder={`Search ${ARMOR_SLOT_LABELS[slot].toLowerCase()}`}
                />
              )}
            />
          );
        })}
      </Stack>
    </Box>
  );
}

function TalismanSlots({
  talismanIds,
  onChange,
  loadSummary,
}: {
  talismanIds: (string | null)[];
  onChange: (slot: number, value: Talisman | null) => void;
  loadSummary: import("../lib/types").EquipLoadSummary | null;
}) {
  const selectedBaseNames = new Set(
    talismanIds
      .map((id) => (id ? talismans.find((t) => t.id === id) : null))
      .filter((t): t is Talisman => Boolean(t))
      .map((t) => talismanBaseName(t.name)),
  );

  return (
    <Box>
      <Stack direction="row" spacing={1} sx={{ alignItems: "baseline", mb: 1 }}>
        <Typography variant="subtitle2">Talismans (up to 4)</Typography>
        {loadSummary && (
          <LoadChip summary={loadSummary} />
        )}
      </Stack>
      <Stack spacing={1.5}>
        {[0, 1, 2, 3].map((slot) => {
          const currentId = talismanIds[slot];
          const current = currentId ? talismans.find((t) => t.id === currentId) ?? null : null;
          const currentBase = current ? talismanBaseName(current.name) : null;
          const options = talismans.filter(
            (t) =>
              t.id === currentId ||
              !selectedBaseNames.has(talismanBaseName(t.name)) ||
              talismanBaseName(t.name) === currentBase,
          );
          return (
            <Autocomplete
              key={slot}
              size="small"
              options={options}
              value={current}
              onChange={(_, v) => onChange(slot, v)}
              getOptionLabel={(t) => `${t.name} (${t.weight})`}
              isOptionEqualToValue={(a, b) => a.id === b.id}
              renderOption={(props, option) => (
                <Box component="li" {...props}>
                  <Stack direction="row" spacing={1} sx={{ width: "100%", alignItems: "center" }}>
                    <Box
                      component="img"
                      src={option.image}
                      alt=""
                      loading="lazy"
                      sx={{ width: 32, height: 32, objectFit: "contain", bgcolor: "action.hover", borderRadius: 0.5 }}
                    />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography variant="body2" noWrap>
                        {option.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" noWrap sx={{ display: "block" }}>
                        {option.effect}
                      </Typography>
                    </Box>
                    <Chip size="small" label={`${option.weight}`} />
                  </Stack>
                </Box>
              )}
              renderInput={(params) => (
                <TextField {...params} label={`Slot ${slot + 1}`} placeholder="Search talismans" />
              )}
            />
          );
        })}
      </Stack>
    </Box>
  );
}

function LoadChip({ summary }: { summary: import("../lib/types").EquipLoadSummary }) {
  const color =
    summary.rollCategory === "overloaded"
      ? "error"
      : summary.rollCategory === "heavy"
      ? "warning"
      : summary.rollCategory === "medium"
      ? "primary"
      : "success";
  return (
    <Tooltip
      title={`Weapon ${summary.weaponWeight} + Talismans ${summary.talismanWeight} = ${summary.totalWeight} / ${summary.maxLoad} max equip load at target Endurance. Roll: ${summary.rollCategory}.`}
    >
      <Chip
        size="small"
        color={color}
        label={`Load ${summary.percent.toFixed(0)}% · ${summary.rollCategory}`}
      />
    </Tooltip>
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

function DamagePanel({
  weapon,
  target,
  twoHand,
  selectedUpgrade,
}: {
  weapon: Weapon;
  target: Record<Stat, number>;
  twoHand: boolean;
  selectedUpgrade: WeaponUpgrade;
}) {
  const baseEstimate = estimateAttackPower(weapon, target as never, "base", twoHand);
  const maxEstimate = estimateAttackPower(weapon, target as never, "max", twoHand);
  const maxLabel = getMaxUpgradeLevel(weapon);
  const gain = maxEstimate.total - baseEstimate.total;
  const gainPct = baseEstimate.total > 0 ? Math.round((gain / baseEstimate.total) * 100) : 0;

  const cell = (
    label: string,
    est: { base: number; scaling: number; total: number },
    highlighted: boolean,
  ) => (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        flex: 1,
        borderColor: highlighted ? "primary.main" : undefined,
        borderWidth: highlighted ? 2 : 1,
      }}
    >
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 600, mt: 0.5 }}>
        {est.total}
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>
        Base {est.base} + Scaling {est.scaling}
      </Typography>
    </Paper>
  );

  return (
    <Box>
      <Stack direction="row" spacing={1} sx={{ alignItems: "baseline", mb: 1 }}>
        <Typography variant="subtitle2">Estimated Attack Power</Typography>
        <Typography variant="caption" color="text.secondary">
          at target stats{twoHand ? ", two-handed" : ""}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        {cell("Base (+0)", baseEstimate, selectedUpgrade === "base")}
        {cell(`Maxed (${maxLabel})`, maxEstimate, selectedUpgrade === "max")}
      </Stack>
      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1 }}>
        Upgrading from +0 → {maxLabel}: +{gain} AP ({gainPct > 0 ? "+" : ""}
        {gainPct}%). Approximate model — uses category-typical base AP, ×2.6 upgrade
        multiplier, and linear scaling correction up to soft caps. Real in-game values vary
        per weapon.
      </Typography>
    </Box>
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
