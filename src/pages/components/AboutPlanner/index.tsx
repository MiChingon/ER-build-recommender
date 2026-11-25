import { motion } from "motion/react";
import { classes } from "@/data/classes";
import { CATEGORIES, weapons } from "@/data/weapons";
import { armor } from "@/data/armor";
import { talismans } from "@/data/talismans";
import { spells } from "@/data/spells";
import GlassCard from "@/components/er/GlassCard";
import SectionHeading from "@/components/er/SectionHeading";
import { fadeRise, viewportOnce } from "@/components/er/motion";

// Counts come from the data modules so this copy stays accurate as content
// is added.
const categoryCount = CATEGORIES.filter((c) => weapons.some((w) => w.category === c)).length;

/**
 * Plain-language description of the planner at the bottom of the page. It
 * gives search engines (and new visitors) indexable text about what the tool
 * does and what it covers — the interactive UI above is mostly controls and
 * numbers.
 */
const AboutPlanner = () => (
  <motion.section
    aria-labelledby="about-planner"
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    variants={fadeRise}
    className="space-y-5"
  >
    <SectionHeading>
      <span id="about-planner">About Tarnished Builds</span>
    </SectionHeading>
    <GlassCard className="grid gap-6 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
      <div className="space-y-2">
        <h3 className="panel-heading">A free Elden Ring build planner</h3>
        <p>
          Pick a starting class and up to six weapons, shields or catalysts, choose your target
          Soul Level, and Tarnished Builds calculates the stat spread that wields and scales your
          whole loadout. You get the best starting class for the build, attack power per damage
          type for every affinity, status build-up, sorcery and incantation suggestions, and a
          level-by-level upgrade plan you can download as a PDF.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="panel-heading">How the recommendation works</h3>
        <p>
          Requirements are combined across every weapon you hold, then each weapon's scaling
          stats are pushed toward their soft caps. Vigor, Mind and Endurance follow level-based
          targets, Endurance is raised to keep your equipment at a medium roll, and the result is
          always fitted to the Soul Level you choose.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="panel-heading">All {classes.length} starting classes</h3>
        <p>
          {classes.map((c, i) => (
            <span key={c.id}>
              <span className="whitespace-nowrap">
                {c.name} <span className="text-gold-500/70">(Lv {c.level})</span>
                {i < classes.length - 1 ? "," : "."}
              </span>{" "}
            </span>
          ))}
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="panel-heading">Weapons, armor &amp; DLC coverage</h3>
        <p>
          {weapons.length} weapons across {categoryCount} categories, {armor.length} armor pieces,{" "}
          {talismans.length} talismans and {spells.length} sorceries and incantations — including
          the Shadow of the Erdtree expansion and the Tarnished Edition's Idus Knight and Heavy
          Knight classes, weapons and armor sets.
        </p>
      </div>
    </GlassCard>
  </motion.section>
);

export default AboutPlanner;
