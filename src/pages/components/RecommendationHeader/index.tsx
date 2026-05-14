import { Box, Chip, Stack, Tooltip, Typography } from "@mui/material";
import { Weapon } from "../../../data/weapons";

const RecommendationHeader = ({
  weapon,
  bestClassName,
  targetLevel,
  equipLoad,
}: {
  weapon: Weapon;
  bestClassName: string;
  targetLevel: number;
  equipLoad: import("../../../lib/types").EquipLoadSummary;
}) => {
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

export default RecommendationHeader

