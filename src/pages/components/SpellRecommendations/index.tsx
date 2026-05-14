import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { spellImageUrl } from "../../../data/spells";

const SpellRecommendations = ({
  suggestions,
}: {
  suggestions: import("../../../lib/types").SpellSuggestion[];
}) => {
  const hasSorceries = suggestions.some((s) => s.spell.type === "sorcery");
  const hasIncantations = suggestions.some((s) => s.spell.type === "incantation");
  const label =
    hasSorceries && hasIncantations
      ? "Suggested spells"
      : hasSorceries
      ? "Suggested sorceries"
      : "Suggested incantations";
  const slotsUsed = suggestions.reduce((sum, s) => sum + s.spell.slots, 0);
  return (
    <Box>
      <Stack direction="row" spacing={1} sx={{ alignItems: "baseline", mb: 1, flexWrap: "wrap" }} useFlexGap>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="caption" color="text.secondary">
          castable with the recommended stats, fit within 10 memory slots
        </Typography>
        <Chip size="small" variant="outlined" label={`${slotsUsed} / 10 memory slots`} />
      </Stack>
      <Stack spacing={1}>
        {suggestions.map(({ spell, boosted }) => {
          const reqs = [
            spell.requirements.intelligence ? `Int ${spell.requirements.intelligence}` : null,
            spell.requirements.faith ? `Fai ${spell.requirements.faith}` : null,
            spell.requirements.arcane ? `Arc ${spell.requirements.arcane}` : null,
          ]
            .filter(Boolean)
            .join(" · ");
          return (
            <Paper
              key={spell.id}
              variant="outlined"
              sx={{
                p: 1.25,
                borderColor: boosted ? "primary.main" : undefined,
                borderWidth: boosted ? 2 : 1,
                bgcolor: boosted ? "rgba(212,175,55,0.08)" : undefined,
              }}
            >
              <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
                <Box
                  component="img"
                  src={spellImageUrl(spell)}
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
                  }}
                  sx={{ width: 40, height: 40, objectFit: "contain", bgcolor: "action.hover", borderRadius: 0.5, flexShrink: 0 }}
                />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap" }} useFlexGap>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {spell.name}
                    </Typography>
                    <Chip size="small" variant="outlined" label={spell.category} />
                    {boosted && (
                      <Chip size="small" color="primary" label="Boosted by this catalyst" />
                    )}
                  </Stack>
                  <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 0.25 }}>
                    {spell.effect}
                  </Typography>
                </Box>
                <Box sx={{ textAlign: "right", flexShrink: 0, minWidth: 90 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>
                    {reqs || "—"}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: "block" }}>
                    FP {spell.fpCost} · {spell.slots} slot{spell.slots === 1 ? "" : "s"}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
}

export default SpellRecommendations
