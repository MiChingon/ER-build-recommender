import { Box, IconButton, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { Weapon } from "../../../data/weapons";
import { Affinity } from "../../../lib/types";
import { isInfusable } from "../../../lib/recommender";

type Hand = "right" | "left";
type SlotPos = { hand: Hand; idx: number };
type WeaponSlot = { weapon: Weapon | null; affinity: Affinity };

const WeaponSlotsGrid = ({
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

export default WeaponSlotsGrid
