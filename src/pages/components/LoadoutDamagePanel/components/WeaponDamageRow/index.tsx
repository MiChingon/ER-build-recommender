import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { DAMAGE_TYPE_LABELS, estimateAttackPower, getMaxUpgradeLevel } from "../../../../../lib/recommender";
import { Affinity } from "../../../../../lib/types";
import { Weapon } from "../../../../../data/weapons";
import { Stat } from "../../../../../data/classes";
import { Hand } from "../../../../../common/types";

type SlotPos = { hand: Hand; idx: number };

const DAMAGE_TYPE_COLORS: Record<string, string> = {
  phy: "#ffffff",
  mag: "#3fbddd",
  fir: "#ff9900",
  lit: "#ffff00",
  hol: "#ffcc99",
};

const WeaponDamageRow = ({
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
}) => {
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

export default WeaponDamageRow
