import { Box, Divider, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { recommend } from "../../../lib/recommender";

const ClassRanking = ({
  matches,
  highlightId,
  targetLevel,
}: {
  matches: ReturnType<typeof recommend>["ranking"];
  highlightId: string;
  targetLevel: number;
}) => {
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Class ranking
      </Typography>
      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1 }}>
        Waste = starting points stuck above the target. Deficit = points still to invest. "Lv
        needed" is the minimum Soul Level that class would need to reach all targets; green
        if it fits within your target of {targetLevel}, red if it goes over.
      </Typography>
      <Box sx={{ overflowX: "auto" }}>
        <Table size="small" sx={{ minWidth: 460 }}>
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
      </Box>
      <Divider sx={{ mt: 2 }} />
    </Box>
  );
}

export default ClassRanking
