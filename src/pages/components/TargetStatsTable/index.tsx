import { Box, LinearProgress, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { Stat, STAT_LABELS, STAT_ORDER } from "../../../data/classes";
import { STAT_COLORS } from "../../../common/types";

const TargetStatsTable = ({
  target,
  classBase,
  classBaseLabel,
}: {
  target: Record<Stat, number>;
  classBase: Record<Stat, number>;
  classBaseLabel: string;
}) => {
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

export default TargetStatsTable
