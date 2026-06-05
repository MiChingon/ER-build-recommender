export type Talisman = {
  id: string;
  name: string;
  weight: number;
  effect: string;
  dlc: boolean;
  image: string;
};

export const talismans: Talisman[] = [
  {
    "id": "crimson-amber-medallion",
    "name": "Crimson Amber Medallion",
    "weight": 0.3,
    "effect": "Boosts maximum HP by 6%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crimson_amber_medallion_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "crimson-amber-medallion-+1",
    "name": "Crimson Amber Medallion +1",
    "weight": 0.3,
    "effect": "Boosts maximum HP by 7%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crimson_amber_medallion__1_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "crimson-amber-medallion-+2",
    "name": "Crimson Amber Medallion +2",
    "weight": 0.3,
    "effect": "Boosts maximum HP by 8%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crimson-amber-medallion-2-tools-elden-ring-wiki-guide.png"
  },
  {
    "id": "crimson-amber-medallion-+3",
    "name": "Crimson Amber Medallion +3",
    "weight": 0.6,
    "effect": "Boosts maximum HP by 10%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crimson_amber_medallion_3_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "crimson-seed-talisman",
    "name": "Crimson Seed Talisman",
    "weight": 0.8,
    "effect": "Boosts HP restoration from the Flask of Crimson Tears by 20%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crimson_seed_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "crimson-seed-talisman-+1",
    "name": "Crimson Seed Talisman +1",
    "weight": 1.1,
    "effect": "Boosts HP restoration from the Flask of Crimson Tears by 30%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crimson_seed_talisman_1_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "blessed-dew-talisman",
    "name": "Blessed Dew Talisman",
    "weight": 0.6,
    "effect": "Restores 2 HP per second",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blessed-dew-talisman-elden-ring-wiki-guide-200px.png"
  },
  {
    "id": "cerulean-amber-medallion",
    "name": "Cerulean Amber Medallion",
    "weight": 0.3,
    "effect": "Boosts maximum FP by 7%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cerulean_amber_medallion_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "cerulean-amber-medallion-+1",
    "name": "Cerulean Amber Medallion +1",
    "weight": 0.3,
    "effect": "Boosts maximum FP by 9%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cerulean_amber_medallion__1_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "cerulean-amber-medallion-+2",
    "name": "Cerulean Amber Medallion +2",
    "weight": 0.3,
    "effect": "Boosts maximum FP by 11%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cerulean-amber-medallion-2-talisman-elden-ring-wiki-guide.png"
  },
  {
    "id": "cerulean-amber-medallion-+3",
    "name": "Cerulean Amber Medallion +3",
    "weight": 0.6,
    "effect": "Boosts maximum FP by 12.5%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cerulean_amber_medallion_3_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "cerulean-seed-talisman",
    "name": "Cerulean Seed Talisman",
    "weight": 0.8,
    "effect": "Boosts FP restoration from Flask of Cerulean Tears by 20%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cerulean_seed_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "cerulean-seed-talisman-+1",
    "name": "Cerulean Seed Talisman +1",
    "weight": 1.1,
    "effect": "Boosts FP restoration from Flask of Cerulean Tears by 30%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cerulean_seed_talisman_1_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "blessed-blue-dew-talisman",
    "name": "Blessed Blue Dew Talisman",
    "weight": 1.2,
    "effect": "Slowly restores FP (0.5 FP per second)",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blessed_blue_dew_talisman_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "talisman-of-lord-s-bestowal",
    "name": "Talisman of Lord's Bestowal",
    "weight": 3,
    "effect": "Increases poise after using a flask of tears. ~54% poise for 2 seconds.",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/talisman_of_lords_bestowal_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "viridian-amber-medallion",
    "name": "Viridian Amber Medallion",
    "weight": 0.6,
    "effect": "Boosts maximum stamina by 11%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/viridian_amber_medallion_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "viridian-amber-medallion-+1",
    "name": "Viridian Amber Medallion +1",
    "weight": 0.6,
    "effect": "Boosts maximum stamina by 13%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/viridian_amber_medallion__1_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "viridian-amber-medallion-+2",
    "name": "Viridian Amber Medallion +2",
    "weight": 0.6,
    "effect": "Boosts maximum stamina by 15%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/viridian_amber_medallion__2_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "viridian-amber-medallion-+3",
    "name": "Viridian Amber Medallion +3",
    "weight": 0.6,
    "effect": "Boosts maximum stamina by 17%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/viridian_amber_medallion_3_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "green-turtle-talisman",
    "name": "Green Turtle Talisman",
    "weight": 0.7,
    "effect": "Raises stamina recovery speed by 8/s (17.7%).",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/green_turtle_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "two-headed-turtle-talisman",
    "name": "Two-Headed Turtle Talisman",
    "weight": 1,
    "effect": "Raises Stamina recovery speed 22.2%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/two-headed_turtle_talisman_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "arsenal-charm",
    "name": "Arsenal Charm",
    "weight": 1.5,
    "effect": "Raises maximum Equip Load by 15%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/arsenal_charm_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "arsenal-charm+1",
    "name": "Arsenal Charm+1",
    "weight": 1.5,
    "effect": "Raises maximum Equip Load by 17%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/arsenal_charm__1_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "great-jar-s-arsenal",
    "name": "Great-Jar's Arsenal",
    "weight": 1.5,
    "effect": "Raises maximum Equip Load by 19%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great-jars_arsenal_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "erdtree-s-favor",
    "name": "Erdtree's Favor",
    "weight": 1.5,
    "effect": "Raises maximum HP (3%), Stamina (7%), and Equip Load (5%)",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtrees_favor_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "erdtree-s-favor-+1",
    "name": "Erdtree's Favor +1",
    "weight": 1.5,
    "effect": "Raises maximum HP (3.5%), Stamina (8.5%), and Equip Load (6.5%)",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtrees_favor__1_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "erdtree-s-favor-+2",
    "name": "Erdtree's Favor +2",
    "weight": 1.5,
    "effect": "Raises maximum HP (4%), Stamina (10%), and Equip Load (8%)",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtrees_favor__2_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "radagon-s-scarseal",
    "name": "Radagon's Scarseal",
    "weight": 0.8,
    "effect": "Raises Vigor , Endurance , Strength , and Dexterity by 3, but increases all damage taken by 10%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/radagons_scarseal_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "radagon-s-soreseal",
    "name": "Radagon's Soreseal",
    "weight": 0.8,
    "effect": "Raises Vigor , Endurance , Strength , and Dexterity by 5, but increases all damage taken by 15%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/radagons_ soreseal_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "marika-s-scarseal",
    "name": "Marika's Scarseal",
    "weight": 0.8,
    "effect": "Raises Mind , Intelligence , Faith , and Arcane by 3, but increases all damage taken by 10%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/marikas_scarseal_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "marika-s-soreseal",
    "name": "Marika's Soreseal",
    "weight": 0.8,
    "effect": "Raises Mind , Intelligence , Faith , and Arcane by 5, but increases all damage taken by 15%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/marikas_soreseal_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "starscourge-heirloom",
    "name": "Starscourge Heirloom",
    "weight": 0.8,
    "effect": "Raises Strength by 5.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/starscourge_heirloom_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "prosthesis-wearer-heirloom",
    "name": "Prosthesis-Wearer Heirloom",
    "weight": 0.8,
    "effect": "Raises Dexterity by 5.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/prosthesis-wearer_heriloom_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "stargazer-heirloom",
    "name": "Stargazer Heirloom",
    "weight": 0.6,
    "effect": "Raises Intelligence by 5.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/stargazer_heirloom_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "two-fingers-heirloom",
    "name": "Two Fingers Heirloom",
    "weight": 0.6,
    "effect": "Raises Faith by 5.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/two_fingers_heirloom_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "outer-god-heirloom",
    "name": "Outer God Heirloom",
    "weight": 0.6,
    "effect": "Raises Arcane by 5",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/outer_god_heirloom_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "dragoncrest-shield-talisman",
    "name": "Dragoncrest Shield Talisman",
    "weight": 0.8,
    "effect": "Reduces Physical Damage taken by 10%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragoncrest_shield_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "dragoncrest-shield-talisman-+1",
    "name": "Dragoncrest Shield Talisman +1",
    "weight": 0.8,
    "effect": "Reduces Physical Damage taken by 13%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragoncrest_shield_talisman__1_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "dragoncrest-shield-talisman-+2",
    "name": "Dragoncrest Shield Talisman +2",
    "weight": 0.8,
    "effect": "Reduces Physical Damage taken by 17%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragoncrest-shield-talisman-2-elden-ring-wiki-guide.png"
  },
  {
    "id": "dragoncrest-greatshield-talisman",
    "name": "Dragoncrest Greatshield Talisman",
    "weight": 0.8,
    "effect": "Reduces Physical Damage taken by 20%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragoncrest_greatshield_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "spelldrake-talisman",
    "name": "Spelldrake Talisman",
    "weight": 0.6,
    "effect": "Reduces Magic Damage taken by 13%. (Effect reduced to 4% in PvP )",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spelldrake_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "spelldrake-talisman+1",
    "name": "Spelldrake Talisman+1",
    "weight": 0.6,
    "effect": "Reduces Magic Damage taken by 17%. (Effect reduced to 5% in PvP )",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spelldrake_talisman__1_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "spelldrake-talisman+2",
    "name": "Spelldrake Talisman+2",
    "weight": 0.6,
    "effect": "Reduces Magic Damage taken by 20%. (Effect reduced to 6% in PvP )",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spelldrake_talisman__2_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "spelldrake-talisman-+3",
    "name": "Spelldrake Talisman +3",
    "weight": 0.9,
    "effect": "Reduces Magic Damage taken by 22%. (Effect reduced to 7% in PvP )",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spelldrake_talisman_3_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "flamedrake-talisman",
    "name": "Flamedrake Talisman",
    "weight": 0.6,
    "effect": "Reduces Fire Damage taken by 13% (Effect reduced to 4% in PvP )",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/flamedrake_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "flamedrake-talisman-+1",
    "name": "Flamedrake Talisman +1",
    "weight": 0.6,
    "effect": "Reduces Fire Damage taken by 17% (Effect reduced to 5% in PvP )",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/flamedrake-talisman-1-talisman-elden-ring-wiki-guide.png"
  },
  {
    "id": "flamedrake-talisman-+2",
    "name": "Flamedrake Talisman +2",
    "weight": 0.6,
    "effect": "Reduces Fire Damage taken by 20% (Effect reduced to 6% in PvP )",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/flamedrake-talisman-2-talisman-elden-ring-wiki-guide-200.png"
  },
  {
    "id": "flamedrake-talisman-+3",
    "name": "Flamedrake Talisman +3",
    "weight": 0.9,
    "effect": "Reduces Fire Damage taken by 22% (Effect reduced to 7% in PvP )",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/flamedrake_talisman_3_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "boltdrake-talisman",
    "name": "Boltdrake Talisman",
    "weight": 0.6,
    "effect": "Boosts Lightning Damage negation by 13%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/boltdrake_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "boltdrake-talisman-+1",
    "name": "Boltdrake Talisman +1",
    "weight": 0.6,
    "effect": "Boosts Lightning Damage negation by 17%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/boltdrake-talisman-+1-shield--elden-ring-wiki-guide-200.png"
  },
  {
    "id": "boltdrake-talisman-+2",
    "name": "Boltdrake Talisman +2",
    "weight": 0.6,
    "effect": "Boosts Lightning Damage negation by 20%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/boltdrake_talisman_2_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "boltdrake-talisman-+3",
    "name": "Boltdrake Talisman +3",
    "weight": 0.9,
    "effect": "Boosts Lightning Damage negation by 22%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/boltdrake_talisman_3_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "haligdrake-talisman",
    "name": "Haligdrake Talisman",
    "weight": 0.6,
    "effect": "Reduces Holy Damage taken by 13%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/haligdrake_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "haligdrake-talisman-+1",
    "name": "Haligdrake Talisman +1",
    "weight": 0.6,
    "effect": "Reduces Holy Damage taken by 17%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/haligdrake_talisman__1_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "haligdrake-talisman-+2",
    "name": "Haligdrake Talisman +2",
    "weight": 0.6,
    "effect": "Reduces Holy Damage taken by 20%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/haligdrake_talisman__2_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "golden-braid",
    "name": "Golden Braid",
    "weight": 0.9,
    "effect": "Boosts holy damage negation by 22%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_braid_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "pearldrake-talisman",
    "name": "Pearldrake Talisman",
    "weight": 0.9,
    "effect": "Boosts non-physical damage negation by 5%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/pearldrake_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "pearldrake-talisman-+1",
    "name": "Pearldrake Talisman +1",
    "weight": 0.9,
    "effect": "Boosts non-physical damage negation by 7%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/pearldrake_talisman__1_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "pearldrake-talisman-+2",
    "name": "Pearldrake Talisman +2",
    "weight": 0.9,
    "effect": "Boosts non-physical damage negation by 9%",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/pearldrake_talisman__2_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "pearldrake-talisman-+3",
    "name": "Pearldrake Talisman +3",
    "weight": 1.2,
    "effect": "Boosts non-physical damage negation by 11%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/pearldrake_talisman_3_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "immunizing-horn-charm",
    "name": "Immunizing Horn Charm",
    "weight": 0.6,
    "effect": "Raises Immunity by 90",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/immunizing_horn_charm_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "immunizing-horn-charm-+1",
    "name": "Immunizing Horn Charm +1",
    "weight": 0.6,
    "effect": "Raises Immunity by 140",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/immunizing_horn_charm__1_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "immunizing-horn-charm-+2",
    "name": "Immunizing Horn Charm +2",
    "weight": 0.9,
    "effect": "Raises Immunity by 180",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/immunizing_horn_charm_2_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "stalwart-horn-charm",
    "name": "Stalwart Horn Charm",
    "weight": 0.6,
    "effect": "Raises Robustness by 90",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/stalwart_horn_charm_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "stalwart-horn-charm-+1",
    "name": "Stalwart Horn Charm +1",
    "weight": 0.6,
    "effect": "Raises Robustness by 140",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/stalwart_horn_charm__1_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "stalwart-horn-charm-+2",
    "name": "Stalwart Horn Charm +2",
    "weight": 0.9,
    "effect": "Raises Robustness by 180",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/stalwart_horn_charm_2_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "clarifying-horn-charm",
    "name": "Clarifying Horn Charm",
    "weight": 0.6,
    "effect": "Raises Focus by 140",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/clarifying_horn_charm_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "clarifying-horn-charm-+1",
    "name": "Clarifying Horn Charm +1",
    "weight": 0.6,
    "effect": "Raises Focus by 190",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/clarifying_horn_charm__1_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "clarifying-horn-charm-+2",
    "name": "Clarifying Horn Charm +2",
    "weight": 0.9,
    "effect": "Raises Focus by 230",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/clarifying_horn_charm_2_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "mottled-necklace",
    "name": "Mottled Necklace",
    "weight": 0.9,
    "effect": "Raises Immunity , Robustness , and Focus by 40",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/mottled_necklace_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "mottled-necklace-+1",
    "name": "Mottled Necklace +1",
    "weight": 0.9,
    "effect": "Raises Immunity , Robustness , and Focus by 60",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/mottled-necklace-1-talisman-elden-ring-wiki-guide.png"
  },
  {
    "id": "mottled-necklace-+2",
    "name": "Mottled Necklace +2",
    "weight": 1.2,
    "effect": "Raises Immunity , Robustness , and Focus by 100",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/mottled_necklace_2_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "prince-of-death-s-pustule",
    "name": "Prince of Death's Pustule",
    "weight": 0.6,
    "effect": "Raises Vitality by 90.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/prince_of_deaths_pustule_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "prince-of-death-s-cyst",
    "name": "Prince of Death's Cyst",
    "weight": 0.6,
    "effect": "Raises Vitality by 140.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/prince_of_deaths_cyst_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "ailment-talisman",
    "name": "Ailment Talisman",
    "weight": 0.6,
    "effect": "Boosts resistance stats by roughly 350 for a short time after a status effect is applied to you",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ailment_talisman_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "dagger-talisman",
    "name": "Dagger Talisman",
    "weight": 1.1,
    "effect": "Increases Critical Damage by 17%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dagger_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "curved-sword-talisman",
    "name": "Curved Sword Talisman",
    "weight": 0.7,
    "effect": "Increases Guard Counter damage by 20%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/curved_sword_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "twinblade-talisman",
    "name": "Twinblade Talisman",
    "weight": 0.7,
    "effect": "Increases damage of final hit in attack chains by 45%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/twinblade_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "axe-talisman",
    "name": "Axe Talisman",
    "weight": 0.8,
    "effect": "Increases Charge Attack damage by 10%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/axe_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "hammer-talisman",
    "name": "Hammer Talisman",
    "weight": 0.9,
    "effect": "Increases Stamina damage against blocking enemies by 40%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hammer_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "spear-talisman",
    "name": "Spear Talisman",
    "weight": 0.5,
    "effect": "Increases Counterattack damage of thrusting weapons by 15%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spear_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "lance-talisman",
    "name": "Lance Talisman",
    "weight": 0.7,
    "effect": "Increases damage of attacks while on horseback by 15%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lance_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "claw-talisman",
    "name": "Claw Talisman",
    "weight": 0.7,
    "effect": "Increases Jump Attack damage by 15%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/claw_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "two-handed-sword-talisman",
    "name": "Two-Handed Sword Talisman",
    "weight": 1.2,
    "effect": "Enhances attacks with two-handed weapons by 15%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/two-handed_sword_talisman_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "greatshield-talisman",
    "name": "Greatshield Talisman",
    "weight": 0.9,
    "effect": "Reduces stamina damage taken while blocking by 20%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatshield_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "pearl-shield-talisman",
    "name": "Pearl Shield Talisman",
    "weight": 0.9,
    "effect": "Boosts all non-physical damage negation by 20% while guarding",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/pearl_shield_talisman_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "retaliatory-crossed-tree",
    "name": "Retaliatory Crossed-Tree",
    "weight": 0.3,
    "effect": "Enhances attacks executed after rolling or backstepping by 17%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/retaliatory_crossed-tree_1_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "lacerating-crossed-tree",
    "name": "Lacerating Crossed-Tree",
    "weight": 0.8,
    "effect": "Enhances dash attacks by 15% in PvE and 7.5% in PvP",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lacerating_crossed-tree_1_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "arrow-s-sting-talisman",
    "name": "Arrow's Sting Talisman",
    "weight": 0.7,
    "effect": "Raises attack power of arrows and bolts by 10%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/arrows_sting_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "arrow-s-reach-talisman",
    "name": "Arrow's Reach Talisman",
    "weight": 0.7,
    "effect": "Increases bow effective range by 65%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/arrows_reach_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "arrow-s-soaring-sting-talisman",
    "name": "Arrow's Soaring Sting Talisman",
    "weight": 1.1,
    "effect": "Increases the effective range of bows by 50% and raises attack power of arrows and bolts by 8%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/arrows_soaring_sting_talisman_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "sharpshot-talisman",
    "name": "Sharpshot Talisman",
    "weight": 0.6,
    "effect": "Boosts attack power of precision-aimed shots by 12%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sharpshot_talisman_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "graven-school-talisman",
    "name": "Graven-School Talisman",
    "weight": 0.7,
    "effect": "Increases damage of Sorceries by 4%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/graven-school_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "graven-mass-talisman",
    "name": "Graven-Mass Talisman",
    "weight": 1,
    "effect": "Increases damage of Sorceries by 8%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/graven-mass_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "faithful-s-canvas-talisman",
    "name": "Faithful's Canvas Talisman",
    "weight": 0.7,
    "effect": "Increases damage of Incantations by 4%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/faithfuls_canvas_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "flock-s-canvas-talisman",
    "name": "Flock's Canvas Talisman",
    "weight": 1,
    "effect": "Increases damage of Incantations by 8%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/flocks_canvas_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "primal-glintstone-blade",
    "name": "Primal Glintstone Blade",
    "weight": 0.6,
    "effect": "Spells consume 25% less FP , but maximum HP is reduced by 15%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/primal_glintstone_blade_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "moon-of-nokstella",
    "name": "Moon of Nokstella",
    "weight": 0.8,
    "effect": "Increases memory slots by 2.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/moon_of_nokstella_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "old-lord-s-talisman",
    "name": "Old Lord's Talisman",
    "weight": 0.5,
    "effect": "Extends spell effect duration by 30%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/old_lords_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "radagon-icon",
    "name": "Radagon Icon",
    "weight": 0.7,
    "effect": "Shortens spell casting time by 30 Virtual Dexterity .",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/radagon_icon_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "beloved-stardust",
    "name": "Beloved Stardust",
    "weight": 1.3,
    "effect": "Shortens casting speed +99 for sorcery and incantations by the utmost, but increases damage taken by 30%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/beloved_stardust_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "roar-medallion",
    "name": "Roar Medallion",
    "weight": 0.7,
    "effect": "Increases damage of roars and breath attacks by 15%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/roar_medallion_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "companion-jar",
    "name": "Companion Jar",
    "weight": 0.6,
    "effect": "Increases damage of throwing pots by 20%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/companion_jar_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "perfumer-s-talisman",
    "name": "Perfumer's Talisman",
    "weight": 0.6,
    "effect": "Increases damage of perfume items by 20%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/perfumers_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "carian-filigreed-crest",
    "name": "Carian Filigreed Crest",
    "weight": 0.8,
    "effect": "Lowers FP consumed by Skills by 25%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_filigreed_crest_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "warrior-jar-shard",
    "name": "Warrior Jar Shard",
    "weight": 0.9,
    "effect": "Boosts the attack power of Skills by 10%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/warrior_jar_shard_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "shard-of-alexander",
    "name": "Shard of Alexander",
    "weight": 0.9,
    "effect": "Greatly boosts the attack power of Skills by 15%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/shard_of_alexander_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "godfrey-icon",
    "name": "Godfrey Icon",
    "weight": 0.8,
    "effect": "Increases attack power of charged Spells and Skills by 15%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godfrey_icon_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "rellana-s-cameo",
    "name": "Rellana's Cameo",
    "weight": 0.8,
    "effect": "Enhances attacks by 45% after maintaining the same stance for 1 second.",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rellanas_cameo_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "shattered-stone-talisman",
    "name": "Shattered Stone Talisman",
    "weight": 0.8,
    "effect": "Raises potency of kicking and stomping skills by 10%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/shattered_stone_talisman_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "smithing-talisman",
    "name": "Smithing Talisman",
    "weight": 1.3,
    "effect": "Enhances weapon-throwing attacks by 10%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithing_talisman_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "enraged-divine-beast",
    "name": "Enraged Divine Beast",
    "weight": 0.7,
    "effect": "Raises potency of storms by 10%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/enraged_divine_beast_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "talisman-of-the-dread",
    "name": "Talisman of the Dread",
    "weight": 0.6,
    "effect": "Raises potency of magma by 15%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/talisman_of_the_dread_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "bull-goat-s-talisman",
    "name": "Bull-Goat's Talisman",
    "weight": 0.5,
    "effect": "Raises Poise by 33%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bull-goats_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "blue-dancer-charm",
    "name": "Blue Dancer Charm",
    "weight": 0.9,
    "effect": "Raises physical scaling damage with lower equipment load by up to 15%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blue_dancer_charm_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "verdigris-discus",
    "name": "Verdigris Discus",
    "weight": 4.5,
    "effect": "Raises defense with higher equipment load. Heavy Load (7.5% PVP/10% PVE) Overload (15%PVP/20%PVE)",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/verdigris_discus_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "magic-scorpion-charm",
    "name": "Magic Scorpion Charm",
    "weight": 0.8,
    "effect": "Raises Magic Damage by 12%, but increases Physical Damage taken by 10%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/magic_scorpion_charm_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "fire-scorpion-charm",
    "name": "Fire Scorpion Charm",
    "weight": 0.8,
    "effect": "Raises Fire Damage, but increases Physical Damage taken by 10%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fire_scorpion_charm_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "lightning-scorpion-charm",
    "name": "Lightning Scorpion Charm",
    "weight": 0.8,
    "effect": "Raises Lightning Damage, but increases Physical Damage taken by 10%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lightning_scorpion_charm_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "sacred-scorpion-charm",
    "name": "Sacred Scorpion Charm",
    "weight": 0.8,
    "effect": "Raises Holy Damage, but increases Physical Damage taken by 10%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sacred_scorpion_charm_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "crucible-scale-talisman",
    "name": "Crucible Scale Talisman",
    "weight": 1.1,
    "effect": "Reduces damage taken from critical hits by 30%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible_scale_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "crucible-feather-talisman",
    "name": "Crucible Feather Talisman",
    "weight": 0.8,
    "effect": "Improves dodge rolling by +6 iframes, but increases damage taken by 30%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible_feather_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "crucible-knot-talisman",
    "name": "Crucible Knot Talisman",
    "weight": 0.5,
    "effect": "Prevents taking increased damage and being staggered from headshots.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible_knot_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "fine-crucible-feather-talisman",
    "name": "Fine Crucible Feather Talisman",
    "weight": 0.6,
    "effect": "Improves backsteps but increases damage taken by 15%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fine_crucible_feather_talisman_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "talisman-of-all-crucibles",
    "name": "Talisman of All Crucibles",
    "weight": 1.9,
    "effect": "Grants effects of all crucible talismans",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/talisman_of_all_crucibles_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "red-feathered-branchsword",
    "name": "Red-Feathered Branchsword",
    "weight": 1.4,
    "effect": "Raises attack power by 20% when HP is below 20%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/red-feathered_branchsword_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "blue-feathered-branchsword",
    "name": "Blue-Feathered Branchsword",
    "weight": 1.1,
    "effect": "Reduces damage taken by 50% when HP is below 20%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blue-feathered_branchsword_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "ritual-sword-talisman",
    "name": "Ritual Sword Talisman",
    "weight": 0.9,
    "effect": "Raises attack power by 10% when HP is at maximum.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ritual_sword_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "ritual-shield-talisman",
    "name": "Ritual Shield Talisman",
    "weight": 0.9,
    "effect": "Reduces damage taken by 30% when HP is at maximum.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ritual_shield_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "assassin-s-crimson-dagger",
    "name": "Assassin's Crimson Dagger",
    "weight": 0.8,
    "effect": "Critical hits restore 10% + 85 HP .",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/assassins_crimson_dagger_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "assassin-s-cerulean-dagger",
    "name": "Assassin's Cerulean Dagger",
    "weight": 0.8,
    "effect": "Critical hits restores 15 FP .",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/assassins_cerulean_dagger_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "winged-sword-insignia",
    "name": "Winged Sword Insignia",
    "weight": 1.4,
    "effect": "Raises attack power with successive attacks (3% → 5% → 10%).",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/winged_sword_insignia_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "rotten-winged-sword-insignia",
    "name": "Rotten Winged Sword Insignia",
    "weight": 1.4,
    "effect": "Greatly raises attack power with successive attacks (6% → 8% → 13%).",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_winged_sword_insignia_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "millicent-s-prosthesis",
    "name": "Millicent's Prosthesis",
    "weight": 1.6,
    "effect": "Raises dexterity by 5 and raises attack power with successive attacks (4% → 6% → 11%).",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/millicents_prosthesis_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "godskin-swaddling-cloth",
    "name": "Godskin Swaddling Cloth",
    "weight": 0.9,
    "effect": "Successive attacks restore 3% + 30 HP .",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godskin_swaddling_cloth_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "kindred-of-rot-s-exultation",
    "name": "Kindred of Rot's Exultation",
    "weight": 0.9,
    "effect": "Poisoning or rot in vicinity increases attack power by 20% for 20s.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/kindred_of_rots_exultation_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "lord-of-blood-s-exultation",
    "name": "Lord of Blood's Exultation",
    "weight": 0.9,
    "effect": "Blood loss in vicinity increases attack power by 20% for 20s.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lord_of_bloods_exultation_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "aged-one-s-exultation",
    "name": "Aged One's Exultation",
    "weight": 0.9,
    "effect": "Madness in the vicinity increases attack power by 20%",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/aged_ones_exultation_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "st-trina-s-smile",
    "name": "St. Trina's Smile",
    "weight": 0.9,
    "effect": "Sleep in the vicinity increases attack power by 20% for 30 seconds.",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/st._trinas_smile_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "blade-of-mercy",
    "name": "Blade of Mercy",
    "weight": 1.3,
    "effect": "Raises attack power by 20% for 20 seconds after each critical hit",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blade_of_mercy_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "taker-s-cameo",
    "name": "Taker's Cameo",
    "weight": 1,
    "effect": "Restores 3% + 30 HP upon defeating enemies.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/takers_cameo_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "ancestral-spirit-s-horn",
    "name": "Ancestral Spirit's Horn",
    "weight": 1.2,
    "effect": "Restores 3 FP upon defeating enemies.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancestral_spirits_horn_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "crusade-insignia",
    "name": "Crusade Insignia",
    "weight": 1.2,
    "effect": "Raises attack power by 15% for 20 seconds after defeating an enemy",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crusade_insignia_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "dried-bouquet",
    "name": "Dried Bouquet",
    "weight": 0.8,
    "effect": "Raises attack power by 15% for 20 seconds when summoned spirit dies",
    "dlc": true,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dried_bouquet_talisman_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png"
  },
  {
    "id": "gold-scarab",
    "name": "Gold Scarab",
    "weight": 1.2,
    "effect": "Increases runes obtained from defeated enemies by 20%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gold_scarab_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "silver-scarab",
    "name": "Silver Scarab",
    "weight": 1.2,
    "effect": "Raises item discovery by 75.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/silver_scarab_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "crepus-s-vial",
    "name": "Crepus's Vial",
    "weight": 0.7,
    "effect": "Eliminates all sound made by the wearer during movement.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crepuss_vial_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "concealing-veil",
    "name": "Concealing Veil",
    "weight": 0.9,
    "effect": "Conceals wearer while crouching away from foes.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/concealing_veil_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "longtail-cat-talisman",
    "name": "Longtail Cat Talisman",
    "weight": 0.6,
    "effect": "Renders the wearer immune to non-lethal Fall Damage .",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/longtail_cat_talisman_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "furled-finger-s-trick-mirror",
    "name": "Furled Finger's Trick-Mirror",
    "weight": 0.7,
    "effect": "Take on appearance of a Host of Fingers.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/furled_fingers_trick-mirror_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "host-s-trick-mirror",
    "name": "Host's Trick-Mirror",
    "weight": 0.7,
    "effect": "Take on appearance of a cooperator.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hosts_trick-mirror_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "shabriri-s-woe",
    "name": "Shabriri's Woe",
    "weight": 0.6,
    "effect": "Constantly attracts enemies' aggression.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/shabriris_woe_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "daedicar-s-woe",
    "name": "Daedicar's Woe",
    "weight": 0.8,
    "effect": "Increases damage taken by 100%.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/daedicars_woe_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "sacrificial-twig",
    "name": "Sacrificial Twig",
    "weight": 1,
    "effect": "Will be lost on death in place of runes.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sacrificial_twig_talisman_elden_ring_wiki_guide_200px.png"
  },
  {
    "id": "entwining-umbilical-cord",
    "name": "Entwining Umbilical Cord",
    "weight": 0.5,
    "effect": "Changes demeanour of wearer's actions.",
    "dlc": false,
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/entwining_umbilical_cord_talisman_elden_ring_wiki_guide_200px.png"
  }
];

const talismansById = new Map(talismans.map((t) => [t.id, t]));

export function talismanBaseName(name: string): string {
  return name.replace(/\s*\+\d+$/, "").trim();
}

export function totalTalismanWeight(ids: (string | null)[]): number {
  let sum = 0;
  for (const id of ids) {
    if (!id) continue;
    const t = talismansById.get(id);
    if (t) sum += t.weight;
  }
  return Math.round(sum * 10) / 10;
}
