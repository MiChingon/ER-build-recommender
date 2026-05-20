import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import { spellImageUrl } from "../../../data/spells";

const SpellRecommendations = ({
  suggestions,
  loadoutWeaponIds,
}: {
  suggestions: import("../../../lib/types").SpellSuggestion[];
  loadoutWeaponIds: string[];
}) => {
  const loadoutIdSet = new Set(loadoutWeaponIds);
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
        {suggestions.map(({ spell }) => {
          const reqs = [
            spell.requirements.intelligence ? `Int ${spell.requirements.intelligence}` : null,
            spell.requirements.faith ? `Fai ${spell.requirements.faith}` : null,
            spell.requirements.arcane ? `Arc ${spell.requirements.arcane}` : null,
          ]
            .filter(Boolean)
            .join(" · ");
          // Highlight when any catalyst id wired into spell.boosted_by_catalyst
          // is actually present in the loadout. The legacy school-based
          // `boosted` flag is now ignored in favor of this explicit per-spell
          // catalyst whitelist.
          const highlight = spell.boosted_by_catalyst?.some((id) => loadoutIdSet.has(id)) ?? false;
          return (
            <Paper
              key={spell.id}
              variant="outlined"
              sx={{
                p: 1.25,
                borderColor: highlight ? "primary.main" : undefined,
                borderWidth: highlight ? 2 : 1,
                bgcolor: highlight ? "rgba(212,175,55,0.08)" : undefined,
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
                    <Chip
                      size="small"
                      label={spell.type === "sorcery" ? "Sorcery" : "Incantation"}
                      sx={{
                        bgcolor: spell.type === "sorcery" ? "rgba(79,195,247,0.15)" : "rgba(255,176,32,0.15)",
                        color: spell.type === "sorcery" ? "#4fc3f7" : "#ffb020",
                        fontWeight: 600,
                      }}
                    />
                    <Chip size="small" variant="outlined" label={spell.category} />
                    {highlight && (
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
