import { Box, Chip, FormHelperText, IconButton, Paper, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { classes } from "../../../data/classes";

const ClassCarousel = ({
  classId,
  onChange,
}: {
  classId: string;
  onChange: (id: string) => void;
}) => {
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
      <Typography variant="h6" gutterBottom>
        Starting Class
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
            <Chip size="small" label={`Lv ${current.level}`} />
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

export default ClassCarousel
