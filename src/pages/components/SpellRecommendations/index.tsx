import { motion } from "motion/react";
import { spellImageUrl } from "../../../data/spells";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { fadeRise, staggerContainer } from "@/components/er/motion";

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
    <div>
      <div className="mb-2 flex flex-wrap items-baseline gap-2">
        <h3 className="panel-heading">{label}</h3>
        <span className="text-xs text-muted-foreground">
          castable with the recommended stats, fit within 10 memory slots
        </span>
        <Badge variant="outline">{slotsUsed} / 10 memory slots</Badge>
      </div>
      <motion.div
        className="space-y-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
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
            <motion.div
              key={spell.id}
              variants={fadeRise}
              className={cn(
                "rounded-lg border border-gold-500/20 bg-night-900/50 p-3 backdrop-blur-sm",
                highlight && "border-2 border-gold-500 bg-gold-500/10 shadow-[0_0_14px_rgba(212,175,55,0.15)]",
              )}
            >
              <div className="flex items-center gap-3">
                <img
                  src={spellImageUrl(spell)}
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.visibility = "hidden";
                  }}
                  className="size-10 shrink-0 rounded-sm bg-white/5 object-contain"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm font-semibold">{spell.name}</span>
                    <Badge
                      className="font-semibold"
                      style={
                        spell.type === "sorcery"
                          ? { backgroundColor: "rgba(79,195,247,0.15)", color: "#4fc3f7" }
                          : { backgroundColor: "rgba(255,176,32,0.15)", color: "#ffb020" }
                      }
                    >
                      {spell.type === "sorcery" ? "Sorcery" : "Incantation"}
                    </Badge>
                    <Badge variant="outline">{spell.category}</Badge>
                    {highlight && (
                      <Badge className="bg-gold-500 text-night-950">Boosted by this catalyst</Badge>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{spell.effect}</p>
                </div>
                <div className="min-w-[90px] shrink-0 text-right">
                  <span className="block text-xs text-muted-foreground">{reqs || "—"}</span>
                  <span className="block text-xs text-muted-foreground">
                    FP {spell.fpCost} · {spell.slots} slot{spell.slots === 1 ? "" : "s"}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SpellRecommendations;
