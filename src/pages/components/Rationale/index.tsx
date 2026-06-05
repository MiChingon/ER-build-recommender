import { Box, Stack, Typography } from "@mui/material";

const Rationale = ({ rationale }: { rationale: string[] }) => {
  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        Why these targets
      </Typography>
      <Stack component="ul" sx={{ pl: 2, m: 0 }} spacing={0.5}>
        {rationale.map((r) => (
          <Typography key={r} component="li" variant="body2" color="text.secondary">
            {r}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}

export default Rationale