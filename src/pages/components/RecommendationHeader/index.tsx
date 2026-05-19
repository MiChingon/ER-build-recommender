import { Box, Button, Chip, Stack, Tooltip, Typography } from "@mui/material";

const RecommendationHeader = ({
  bestClassName,
  targetLevel,
  equipLoad,
  onDownloadPdf,
}: {
  bestClassName: string;
  targetLevel: number;
  equipLoad: import("../../../lib/types").EquipLoadSummary;
  onDownloadPdf?: () => void;
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
      <Stack direction="row" spacing={2} sx={{ alignItems: "center", justifyContent: "space-between", mb: 2.5, flexWrap: "wrap" }} useFlexGap>
        <Typography variant="h6">
          Recommended build
        </Typography>
        {onDownloadPdf && (
          <Button size="small" variant="outlined" onClick={onDownloadPdf}>
            Download PDF
          </Button>
        )}
      </Stack>
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

