export type SpellType = "sorcery" | "incantation";

export type Spell = {
  id: string;
  name: string;
  type: SpellType;
  category: string;
  requirements: { intelligence?: number; faith?: number; arcane?: number };
  fpCost: number;
  slots: number;
  effect: string;
  image?: string;
  dlc?: boolean;
};

export const spells: Spell[] = [
  // ─── Sorceries ─────────────────────────────────────────────────────────────
  { id: "glintstone-pebble", name: "Glintstone Pebble", type: "sorcery", category: "Glintstone", requirements: { intelligence: 10 }, fpCost: 8, slots: 1, effect: "Fires a glintstone projectile that knocks back." },
  { id: "glintstone-arc", name: "Glintstone Arc", type: "sorcery", category: "Glintstone", requirements: { intelligence: 14 }, fpCost: 13, slots: 1, effect: "Wide arc of glintstones — sweeps multiple enemies." },
  { id: "glintstone-stars", name: "Glintstone Stars", type: "sorcery", category: "Glintstone", requirements: { intelligence: 13 }, fpCost: 17, slots: 1, effect: "Volley of small glintstones — applies hitstun." },
  { id: "crystal-release", name: "Crystal Release", type: "sorcery", category: "Crystalian", requirements: { intelligence: 17 }, fpCost: 20, slots: 1, effect: "Crystal shards burst from caster." },
  { id: "crystal-burst", name: "Crystal Burst", type: "sorcery", category: "Crystalian", requirements: { intelligence: 23 }, fpCost: 17, slots: 1, effect: "Crystal-tipped projectile with strong poise damage." },
  { id: "rock-sling", name: "Rock Sling", type: "sorcery", category: "Stonedigger", requirements: { intelligence: 18 }, fpCost: 18, slots: 1, effect: "Hurls three magic-imbued rocks; physical damage." },
  { id: "magic-glintblade", name: "Magic Glintblade", type: "sorcery", category: "Glintblade", requirements: { intelligence: 14 }, fpCost: 11, slots: 1, effect: "Delayed glintblade — strikes after a beat." },
  { id: "glintblade-phalanx", name: "Glintblade Phalanx", type: "sorcery", category: "Glintblade", requirements: { intelligence: 16 }, fpCost: 19, slots: 1, effect: "Four glintblades that home in on the target." },
  { id: "carian-slicer", name: "Carian Slicer", type: "sorcery", category: "Carian Sword", requirements: { intelligence: 13 }, fpCost: 6, slots: 1, effect: "Quick melee-range magic slash; spammable." },
  { id: "carian-piercer", name: "Carian Piercer", type: "sorcery", category: "Carian Sword", requirements: { intelligence: 17 }, fpCost: 14, slots: 1, effect: "Forward thrust with a magic greatsword." },
  { id: "carian-greatsword", name: "Carian Greatsword", type: "sorcery", category: "Carian Sword", requirements: { intelligence: 30, strength: 10 } as never, fpCost: 26, slots: 2, effect: "Conjures a colossal magic greatsword swing." },
  { id: "adulas-moonblade", name: "Adula's Moonblade", type: "sorcery", category: "Carian Sword", requirements: { intelligence: 35 }, fpCost: 26, slots: 2, effect: "Three frozen moonblade slashes; builds Frostbite." },
  { id: "comet", name: "Comet", type: "sorcery", category: "Cuckoo", requirements: { intelligence: 52 }, fpCost: 38, slots: 2, effect: "Large comet projectile — high single-target damage." },
  { id: "comet-azur", name: "Comet Azur", type: "sorcery", category: "Cuckoo", requirements: { intelligence: 60 }, fpCost: 40, slots: 3, effect: "Sustained massive beam of pure magic — boss melter." },
  { id: "stars-of-ruin", name: "Stars of Ruin", type: "sorcery", category: "Cuckoo", requirements: { intelligence: 38 }, fpCost: 33, slots: 2, effect: "Ten homing magic projectiles — tracks targets." },
  { id: "lorettas-mastery", name: "Loretta's Mastery", type: "sorcery", category: "Full Moon", requirements: { intelligence: 24 }, fpCost: 22, slots: 1, effect: "Twin magic arrows — long range." },
  { id: "rannis-dark-moon", name: "Ranni's Dark Moon", type: "sorcery", category: "Full Moon", requirements: { intelligence: 68, faith: 13 }, fpCost: 50, slots: 3, effect: "Hurls a dark moon — lowers target's Magic Defense." },
  { id: "night-comet", name: "Night Comet", type: "sorcery", category: "Night", requirements: { intelligence: 47 }, fpCost: 28, slots: 2, effect: "Invisible comet — bypasses enemy detection." },
  { id: "death-lightning", name: "Death Lightning", type: "sorcery", category: "Death", requirements: { intelligence: 18, faith: 18 }, fpCost: 18, slots: 1, effect: "Dark lightning projectile — Death damage." },
  { id: "ancient-death-rancor", name: "Ancient Death Rancor", type: "sorcery", category: "Death", requirements: { intelligence: 50 }, fpCost: 30, slots: 2, effect: "Five homing death-spirits — Death damage.", image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancient_death_of_rancor_sorcery_elden_ring_wiki_guide_200px.png" },

  // ─── Incantations ──────────────────────────────────────────────────────────
  { id: "urgent-heal", name: "Urgent Heal", type: "incantation", category: "Erdtree", requirements: { faith: 8 }, fpCost: 21, slots: 1, effect: "Restores a small amount of HP, instantly." },
  { id: "heal", name: "Heal", type: "incantation", category: "Erdtree", requirements: { faith: 12 }, fpCost: 38, slots: 1, effect: "Restores a moderate amount of HP." },
  { id: "erdtree-heal", name: "Erdtree Heal", type: "incantation", category: "Erdtree", requirements: { faith: 30 }, fpCost: 80, slots: 1, effect: "Restores a large amount of HP to caster and allies." },
  { id: "blessing-of-the-erdtree", name: "Blessing of the Erdtree", type: "incantation", category: "Erdtree", requirements: { faith: 50 }, fpCost: 78, slots: 1, effect: "Heals over time — long duration." },
  { id: "golden-vow", name: "Golden Vow", type: "incantation", category: "Erdtree", requirements: { faith: 25 }, fpCost: 45, slots: 1, effect: "Buffs attack +15% and defense +10% for caster and allies." },
  { id: "discus-of-light", name: "Discus of Light", type: "incantation", category: "Erdtree", requirements: { faith: 14 }, fpCost: 18, slots: 1, effect: "Holy discus projectile — long range." },
  { id: "catch-flame", name: "Catch Flame", type: "incantation", category: "Fire", requirements: { faith: 8 }, fpCost: 8, slots: 1, effect: "Short-range flame burst from the caster's hand." },
  { id: "flame-sling", name: "Flame Sling", type: "incantation", category: "Fire", requirements: { faith: 12 }, fpCost: 14, slots: 1, effect: "Hurls a ball of flame at medium range." },
  { id: "flame-fall-upon-them", name: "Flame, Fall Upon Them", type: "incantation", category: "Fire", requirements: { faith: 24 }, fpCost: 24, slots: 1, effect: "Rains a cluster of flames in front of caster." },
  { id: "giantsflame-take-thee", name: "Giantsflame Take Thee", type: "incantation", category: "Giant", requirements: { faith: 30 }, fpCost: 35, slots: 2, effect: "Huge fireball with explosion radius — Fire Giant flame." },
  { id: "black-flame", name: "Black Flame", type: "incantation", category: "Godslayer", requirements: { faith: 28 }, fpCost: 22, slots: 1, effect: "Hurls black flame — applies % HP damage over time." },
  { id: "black-flames-protection", name: "Black Flame's Protection", type: "incantation", category: "Godslayer", requirements: { faith: 25 }, fpCost: 35, slots: 1, effect: "Greatly boosts caster's physical absorption for 30s." },
  { id: "lightning-spear", name: "Lightning Spear", type: "incantation", category: "Dragon Cult", requirements: { faith: 20 }, fpCost: 26, slots: 1, effect: "Throws a lightning bolt from the sky." },
  { id: "honed-bolt", name: "Honed Bolt", type: "incantation", category: "Dragon Cult", requirements: { faith: 18 }, fpCost: 18, slots: 1, effect: "Vertical lightning spear — fast and accurate." },
  { id: "lansseaxs-glaive", name: "Lansseax's Glaive", type: "incantation", category: "Dragon Cult", requirements: { faith: 30 }, fpCost: 34, slots: 2, effect: "Sweeping lightning glaive — wide AoE." },
  { id: "bestial-sling", name: "Bestial Sling", type: "incantation", category: "Bestial", requirements: { faith: 10 }, fpCost: 11, slots: 1, effect: "Throws a spray of stones — fast cast." },
  { id: "beast-claw", name: "Beast Claw", type: "incantation", category: "Bestial", requirements: { faith: 8 }, fpCost: 18, slots: 1, effect: "Sweeping bestial claws emerging from the ground." },
  { id: "bestial-vitality", name: "Bestial Vitality", type: "incantation", category: "Bestial", requirements: { faith: 12 }, fpCost: 30, slots: 1, effect: "Heals over time — useful while exploring." },
  { id: "stone-of-gurranq", name: "Stone of Gurranq", type: "incantation", category: "Bestial", requirements: { faith: 13 }, fpCost: 14, slots: 1, effect: "Hurls a stone from Gurranq's collection." },
  { id: "rotten-breath", name: "Rotten Breath", type: "incantation", category: "Dragon Communion", requirements: { faith: 15, arcane: 12 }, fpCost: 35, slots: 2, effect: "Cone of rot — builds Scarlet Rot quickly." },
  { id: "glintstone-breath", name: "Glintstone Breath", type: "incantation", category: "Dragon Communion", requirements: { intelligence: 14, faith: 12, arcane: 12 }, fpCost: 30, slots: 2, effect: "Cone of magic-imbued dragon breath." },
  { id: "frenzied-burst", name: "Frenzied Burst", type: "incantation", category: "Frenzied Flame", requirements: { faith: 25 }, fpCost: 22, slots: 1, effect: "Charged eye-beam — builds Madness on target." },
  { id: "howl-of-shabriri", name: "Howl of Shabriri", type: "incantation", category: "Frenzied Flame", requirements: { faith: 22 }, fpCost: 22, slots: 1, effect: "Self-Madness buff — boosts attack at HP cost." },
];

// Catalyst id → categories of spells whose damage / effectiveness it boosts (or which it can cast at all).
// Universal catalysts (finger-seal, basic staves) have no boost — they cast everything at base power.
export const catalystBoosts: Record<string, string[]> = {
  // Staves
  "glintstone-staff": [],
  "astrologers-staff": [],
  "academy-glintstone-staff": [],
  "carian-glintstone-staff": ["Carian Sword"],
  "carian-glintblade-staff": ["Glintblade"],
  "carian-regal-scepter": ["Full Moon"],
  "meteorite-staff": ["Gravity"],
  "crystal-staff": ["Crystalian"],
  "diggers-staff": ["Stonedigger"],
  "lusats-glintstone-staff": ["Cuckoo"],
  "azurs-glintstone-staff": [],
  "prince-of-deaths-staff": ["Death"],
  "staff-of-loss": ["Night"],
  "albinauric-staff": [],
  "demi-human-queens-staff": [],
  // Seals
  "finger-seal": [],
  "godslayers-seal": ["Godslayer"],
  "erdtree-seal": ["Erdtree"],
  "gravel-stone-seal": ["Erdtree"],
  "giants-seal": ["Giant", "Fire"],
  "dragon-communion-seal": ["Dragon Communion", "Dragon Cult"],
  "frenzied-flame-seal": ["Frenzied Flame"],
  "clawmark-seal": ["Bestial"],
  "two-fingers-seal": ["Erdtree"],
  "golden-order-seal": ["Erdtree"],
};

export function getSpellById(id: string): Spell | undefined {
  return spells.find((s) => s.id === id);
}

function spellImageSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

export function spellImageUrl(spell: Spell): string {
  if (spell.image) return spell.image;
  const slug = spellImageSlug(spell.name);
  const suffix = spell.type === "sorcery" ? "sorcery" : "incantation";
  return `https://eldenring.wiki.fextralife.com/file/Elden-Ring/${slug}_${suffix}_elden_ring_wiki_guide_200px.png`;
}
