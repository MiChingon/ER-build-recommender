import { Box, Button, IconButton, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { Weapon } from "../../../data/weapons";
import { Affinity } from "../../../lib/types";
import { getUpgradeType } from "../../../lib/recommender";

type Hand = "right" | "left";
type SlotPos = { hand: Hand; idx: number };
type WeaponSlot = { weapon: Weapon | null; affinity: Affinity };

const InfusionControl = ({
  weapon,
  affinity,
  onClick,
}: {
  weapon: Weapon;
  affinity: Affinity;
  onClick: () => void;
}) => {
  const upgradeType = getUpgradeType(weapon);
  const disabled = upgradeType !== "infusable";
  const label = upgradeType === "somber" ? "Somber" : upgradeType === "standard-fixed" ? "Standard" : affinity;
  const color = INFUSION_COLORS[label] ?? INFUSION_COLORS.Standard;
  return (
    <Tooltip title={disabled ? "Affinity cannot be changed for this weapon" : "Change infusion"}>
      <span style={{ display: "block", width: "100%" }}>
        <Button
          fullWidth
          size="small"
          variant="outlined"
          disabled={disabled}
          onClick={(e) => {
            e.stopPropagation();
            if (!disabled) onClick();
          }}
          sx={{
            textTransform: "none",
            fontSize: "0.7rem",
            py: 0.25,
            minHeight: 0,
            lineHeight: 1.2,
            color,
            borderColor: color,
            "&:hover": { borderColor: color, backgroundColor: `${color}1a` },
            "&.Mui-disabled": { color: `${color}99`, borderColor: `${color}55` },
          }}
        >
          {label}
        </Button>
      </span>
    </Tooltip>
  );
};

// Per-infusion color palette. The base 13 affinities plus the two read-only
// labels ("Somber" for unique +10 weapons, "Standard" for non-infusable +25
// weapons like Great Club). Colors are tuned to match the in-game elemental
// palette where it makes sense.
const INFUSION_COLORS: Record<string, string> = {
  Standard: "#d4af37", // gold (default Ash of War-able)
  Heavy:    "#c97e4a", // burnt-orange / strength
  Keen:     "#7ed957", // green / dex
  Quality:  "#f5d76e", // light gold / balanced
  Fire:     "#ff7043", // orange
  "Flame Art": "#ff5722", // red-orange
  Lightning:"#fff176", // pale yellow
  Sacred:   "#fff3b0", // cream
  Magic:    "#4fc3f7", // azure
  Cold:     "#81d4fa", // ice
  Poison:   "#9ccc65", // sickly green
  Blood:    "#e53935", // crimson
  Occult:   "#ce93d8", // purple
  Somber:   "#9e9e9e", // grey (unique skill, non-infusable +10)
};

const WeaponSlotsGrid = ({
  rightHand,
  leftHand,
  active,
  onActivate,
  onPickWeapon,
  onChangeAffinity,
  onClear,
}: {
  rightHand: WeaponSlot[];
  leftHand: WeaponSlot[];
  active: SlotPos;
  onActivate: (pos: SlotPos) => void;
  onPickWeapon: (pos: SlotPos) => void;
  onChangeAffinity: (pos: SlotPos) => void;
  onClear: (pos: SlotPos) => void;
}) => {
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
            <Stack key={idx} spacing={0.5} sx={{ flex: "1 1 0", minWidth: 0 }}>
              <Paper
                variant="outlined"
                onClick={() => (slot.weapon ? onActivate({ hand, idx }) : onPickWeapon({ hand, idx }))}
                sx={{
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
                    <Tooltip title="Change weapon">
                      <IconButton
                        size="small"
                        aria-label="Change weapon"
                        onClick={(e) => { e.stopPropagation(); onPickWeapon({ hand, idx }); }}
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: { xs: 30, sm: 18 },
                          p: { xs: 0.75, sm: 0.25 },
                        }}
                      >
                        <Typography variant="caption" sx={{ fontSize: { xs: "1rem", sm: "0.8rem" }, lineHeight: 1 }}>↻</Typography>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Clear slot">
                      <IconButton
                        size="small"
                        aria-label="Clear slot"
                        onClick={(e) => { e.stopPropagation(); onClear({ hand, idx }); }}
                        sx={{ position: "absolute", top: 0, right: 0, p: { xs: 0.75, sm: 0.25 } }}
                      >
                        <Typography variant="caption" sx={{ fontSize: { xs: "1rem", sm: "0.85rem" }, lineHeight: 1 }}>×</Typography>
                      </IconButton>
                    </Tooltip>
                  </>
                ) : (
                  <Typography variant="caption" color="text.disabled">Empty</Typography>
                )}
              </Paper>
              {w && (
                <InfusionControl
                  weapon={w}
                  affinity={slot.affinity}
                  onClick={() => onChangeAffinity({ hand, idx })}
                />
              )}
            </Stack>
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
};

export default WeaponSlotsGrid;
