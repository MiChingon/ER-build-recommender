import type { ScalingTable } from "./weapons";

type Extras = { image: string; scalingTable: ScalingTable };

export const WEAPON_EXTRAS: Partial<Record<string, Extras>> = {
  "dagger": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dagger_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "D",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "B",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "B"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "B"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "A"
        }
      }
    }
  },
  "parrying-dagger": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/parrying_dagger_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "S"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "B",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "B"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "D",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "A"
        }
      }
    }
  },
  "great-knife": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_knife_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "S"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "B",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "B"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "D",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "E",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "E",
          "dexterity": "A",
          "arcane": "D"
        },
        "Blood": {
          "strength": "E",
          "dexterity": "A",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "A"
        }
      }
    }
  },
  "misericorde": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/misericorde_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "C",
          "dexterity": "C"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "D"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "D"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "E",
          "dexterity": "C",
          "intelligence": "D"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "wakizashi": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/wakizashi_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "bloodstained-dagger": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodstained_dagger_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "B",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "B"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "D",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "reduvia": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/reduvia_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "arcane": "D"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "C",
          "arcane": "B"
        }
      }
    }
  },
  "black-knife": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_knife_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B",
          "faith": "C"
        }
      }
    }
  },
  "blade-of-calling": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blade_of_calling_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C",
          "faith": "B"
        }
      }
    }
  },
  "glintstone-kris": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/glintstone_kris_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "C",
          "intelligence": "C"
        }
      }
    }
  },
  "main-gauche": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/main-gauche_dagger_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "B"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "fire-knights-shortsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fire_knights_shortsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C",
          "faith": "D"
        },
        "Heavy": {
          "strength": "A",
          "faith": "D"
        },
        "Keen": {
          "strength": "D",
          "dexterity": "A",
          "faith": "D"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B",
          "faith": "D"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "D",
          "faith": "D"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "D",
          "dexterity": "B",
          "faith": "D"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "A",
          "faith": "D"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "C",
          "intelligence": "B",
          "faith": "D"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "faith": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "faith": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "faith": "E",
          "arcane": "A"
        }
      }
    }
  },
  "short-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/short_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "longsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/longsword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "broadsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/broadsword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "lordsworns-straight-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lordsworns_straight_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "nobles-slender-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/nobles_slender_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "D",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "E",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "E",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "E",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "warhawks-talon": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/warhawks_talon_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "carian-knights-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_knights_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D",
          "intelligence": "D"
        }
      }
    }
  },
  "crystal-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crystal_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D",
          "intelligence": "D"
        }
      }
    }
  },
  "miquellan-knights-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/miquellan_knights_sword_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "E"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "D",
          "faith": "D"
        }
      }
    }
  },
  "golden-epitaph": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_epitaph_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "D",
          "faith": "C"
        }
      }
    }
  },
  "regalia-of-eochaid": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/regalia_of_eochaid_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "arcane": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C",
          "arcane": "C"
        }
      }
    }
  },
  "coded-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/coded_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "faith": "B"
      },
      "max": {
        "Standard": {
          "faith": "A"
        }
      }
    }
  },
  "sword-of-night-and-flame": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_night_and_flame_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "E",
        "intelligence": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "D",
          "intelligence": "B",
          "faith": "B"
        }
      }
    }
  },
  "sword-of-light": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_light_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E",
        "faith": "E"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D",
          "faith": "D"
        }
      }
    }
  },
  "sword-of-darkness": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_darkness_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E",
        "faith": "E"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D",
          "faith": "D"
        }
      }
    }
  },
  "bastard-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bastard_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "claymore": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/claymore_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "iron-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/iron_greatsword_greatswords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "E"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "E",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "E",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "knights-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/knights_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "banished-knights-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/banished_knights_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "flamberge": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/flamberge_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "blasphemous-blade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blasphemous_blade_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C",
          "faith": "B"
        }
      }
    }
  },
  "dark-moon-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dark_moon_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "intelligence": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "D",
          "intelligence": "B"
        }
      }
    }
  },
  "golden-order-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_order_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "faith": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        }
      }
    }
  },
  "sacred-relic-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sacred_relic_sword.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B",
          "faith": "C"
        }
      }
    }
  },
  "marais-executioners-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/marais_executioners_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E",
        "arcane": "D"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "E",
          "arcane": "D"
        }
      }
    }
  },
  "zweihander": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/zweihander_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "D",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "D"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "D",
          "intelligence": "D"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "watchdogs-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/watchdogs_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "E"
        },
        "Heavy": {
          "strength": "S"
        },
        "Keen": {
          "strength": "D",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "B",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "C",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "B"
        },
        "Sacred": {
          "strength": "C",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "D",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "A",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "A",
          "dexterity": "E",
          "arcane": "D"
        },
        "Blood": {
          "strength": "A",
          "dexterity": "E",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "grafted-blade-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/grafted_blade_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "D"
        }
      }
    }
  },
  "ruins-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ruins_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "B",
        "intelligence": "E"
      },
      "max": {
        "Standard": {
          "strength": "S",
          "intelligence": "D"
        }
      }
    }
  },
  "starscourge-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/starscourge_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "intelligence": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "D",
          "intelligence": "D"
        }
      }
    }
  },
  "godslayers-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godslayers_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B",
          "faith": "C"
        }
      }
    }
  },
  "maliketh-black-blade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "D",
          "faith": "B"
        }
      }
    }
  },
  "trolls-golden-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/trolls_golden_sword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "troll-knights-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/troll_knights_sword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "D"
        }
      }
    }
  },
  "royal-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/royal_greatsword__colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D",
          "intelligence": "C"
        }
      }
    }
  },
  "fire-knights-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fire_knights_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C",
          "faith": "D"
        },
        "Heavy": {
          "strength": "A",
          "faith": "D"
        },
        "Keen": {
          "strength": "D",
          "dexterity": "A",
          "faith": "D"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B",
          "faith": "D"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E",
          "faith": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "B",
          "faith": "D"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B",
          "faith": "D"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "C",
          "intelligence": "B",
          "faith": "D"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "C",
          "faith": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "C",
          "faith": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "faith": "E",
          "arcane": "A"
        }
      }
    }
  },
  "ancient-meteoric-ore-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancient_meteoric_ore_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E",
        "arcane": "D"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "E",
          "arcane": "D"
        }
      }
    }
  },
  "greatsword-of-radahn-lord": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_of_radahn_(lord)_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "intelligence": "E"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "D"
        }
      }
    }
  },
  "greatsword-of-radahn-light": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_of_radahn_(light)_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "intelligence": "E"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "D"
        }
      }
    }
  },
  "moonrithylls-knight-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/troll_knights_sword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "D"
        }
      }
    }
  },
  "rapier": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rapier_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "estoc": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/estoc_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "E",
          "dexterity": "B",
          "intelligence": "D"
        },
        "Poison": {
          "strength": "E",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "E",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "noble-estoc": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/nobles_estoc_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "rogiers-rapier": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rogiers_rapier_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "D",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "E",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "antspur-rapier": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/antspur_rapier_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "frozen-needle": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/frozen_needle_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        }
      }
    }
  },
  "carian-sorcery-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_sorcery_sword_thrusting_sword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "D",
          "intelligence": "S"
        }
      }
    }
  },
  "great-epee": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_epee_heavy_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "godskin-stitcher": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godskin_stitcher_heavy_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "bloody-helice": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloody_helice_heavy_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "arcane": "D"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "C",
          "arcane": "B"
        }
      }
    }
  },
  "dragon-king-cragblade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon_kings_cragblade_heavy_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        }
      }
    }
  },
  "scimitar": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/scimitar_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "falchion": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/falchion_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "B"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "shamshir": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/shamshir_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "bandits-curved-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bandits_curved_sword_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "shotel": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/shotel_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "scavengers-curved-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/scavengers_curved_sword_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "B"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "beastmans-curved-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/beastmans_curved_sword_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "magma-blade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/magma_blade_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D",
          "faith": "C"
        }
      }
    }
  },
  "wing-of-astel": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/wing_of_astel_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "C",
          "intelligence": "B"
        }
      }
    }
  },
  "eclipse-shotel": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/eclipse_shotel_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C",
          "faith": "C"
        }
      }
    }
  },
  "dismounter": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dismounter_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "monks-flameblade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/monks_flameblade_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "bloodhounds-fang": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodhounds_fang_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "B"
        }
      }
    }
  },
  "onyx-lords-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/onyx_lords_greatsword_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "E",
          "intelligence": "B"
        }
      }
    }
  },
  "magma-wyrm-scalesword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/magma_wyrms_scalesword_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "D",
          "faith": "B"
        }
      }
    }
  },
  "morgotts-cursed-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/morgotts_cursed_sword_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C",
        "arcane": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        }
      }
    }
  },
  "uchigatana": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/uchigatana_katana_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "nagakiba": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/nagakiba_katana_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "serpentbone-blade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpentbone_blade_katana_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B"
        }
      }
    }
  },
  "meteoric-ore-blade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/meteoric_ore_blade_katana_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D",
          "intelligence": "C"
        }
      }
    }
  },
  "moonveil": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/moonveil_katana_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "intelligence": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B",
          "intelligence": "B"
        }
      }
    }
  },
  "rivers-of-blood": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rivers_of_blood_katana_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "arcane": "D"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B",
          "arcane": "D"
        }
      }
    }
  },
  "dragonscale-blade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragonscale_blade_katana_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        }
      }
    }
  },
  "hand-of-malenia": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hand_of_malenia_katana_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B"
        }
      }
    }
  },
  "twinblade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/twinblade_twinblade_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "twinned-knight-swords": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/twinned_knight_swords_twinblade_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "D",
          "intelligence": "D"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "godskin-peeler": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godskin_peeler_twinblade_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "D"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "eleonoras-poleblade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/eleonoras_poleblade_twinblade_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "arcane": "D"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "C",
          "arcane": "D"
        }
      }
    }
  },
  "hand-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hand_axe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "D"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "battle-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/battle_axe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "highland-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/highland_axe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "D"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "icerind-hatchet": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/icerind_hatchet_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        }
      }
    }
  },
  "stormhawk-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/stormhawk_axe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C"
        }
      }
    }
  },
  "rosus-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rosus_axe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "D",
          "intelligence": "C"
        }
      }
    }
  },
  "greataxe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/greataxe_greataxe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "crescent-moon-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crescent_moon_axe_greataxe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "executioners-greataxe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/executioners_greataxe_greataxe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "E"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "E",
          "intelligence": "D"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "E",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "E",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "rusted-anchor": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rusted_anchor_greataxe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "E"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "D",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "E",
          "intelligence": "D"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "E",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "E",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "butchering-knife": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/butchering_knife_greataxe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "D",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "E",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "axe-of-godrick": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/axe_of_godrick_greataxe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C"
        }
      }
    }
  },
  "club": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/club_hammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C"
      },
      "max": {
        "Standard": {
          "strength": "B"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "faith": "B"
        },
        "Magic": {
          "strength": "D",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "B",
          "arcane": "B"
        }
      }
    }
  },
  "mace": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/mace_hammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "D",
          "intelligence": "B"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "morning-star": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/morning_star_hammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "warpick": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/warpick_hammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "hammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hammer_hammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "varres-bouquet": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/varres_bouquet_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "arcane": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "C",
          "arcane": "B"
        }
      }
    }
  },
  "envoys-horn": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/envoys_horn_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C",
          "faith": "C"
        }
      }
    }
  },
  "marikas-hammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/marikas_hammer_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "D",
          "faith": "C"
        }
      }
    }
  },
  "great-club": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_club_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "faith": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "faith": "D"
        }
      }
    }
  },
  "pickaxe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/pickaxe_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "brick-hammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/brick_hammer_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "B"
      },
      "max": {
        "Standard": {
          "strength": "A"
        },
        "Heavy": {
          "strength": "S"
        },
        "Keen": {
          "strength": "D",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "B",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "C",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "B"
        },
        "Sacred": {
          "strength": "C",
          "faith": "B"
        },
        "Magic": {
          "strength": "C",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "A",
          "intelligence": "B"
        },
        "Poison": {
          "strength": "A",
          "arcane": "D"
        },
        "Blood": {
          "strength": "A",
          "arcane": "D"
        },
        "Occult": {
          "strength": "B",
          "arcane": "A"
        }
      }
    }
  },
  "great-stars": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_stars_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "devourers-scepter": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/devourers_scepter_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C",
          "faith": "C"
        }
      }
    }
  },
  "flail": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/flail_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "nightrider-flail": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/nightrider_flail_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "chainlink-flail": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/chainlink_flail_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "E"
        },
        "Heavy": {
          "strength": "S"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "D",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "A",
          "dexterity": "E",
          "arcane": "D"
        },
        "Blood": {
          "strength": "A",
          "dexterity": "E",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "family-heads": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/family_heads_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C",
        "intelligence": "E"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "A",
          "intelligence": "D"
        }
      }
    }
  },
  "bastards-stars": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bastards_stars_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "intelligence": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "C",
          "intelligence": "A"
        }
      }
    }
  },
  "short-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/short-spear__weapons-elden-ring-wiki-guide-200.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spear_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "D"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "partisan": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/partisan_spear-elden-ring-wiki-guide-200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "D",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "D"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "pike": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/pike_spear-elden-ring-wiki-guide-200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "cross-naginata": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cross-naginata_elden_ring_wiki_guide_75px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "inquisitors-girandole": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/inquisitor's_girandole_weapons_elden_ring_wiki_guide_75px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C",
          "faith": "B"
        }
      }
    }
  },
  "death-ritual-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/death_ritual_spear_weapons_elden_ring_wiki_guide_75px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "D"
        }
      }
    }
  },
  "bolt-of-gransax": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bolt_of_gransax-elden-ring-wiki-guide.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        }
      }
    }
  },
  "lance": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lance_greatspear_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "B"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "treespear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/treespear_greatspear_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C",
          "faith": "D"
        }
      }
    }
  },
  "vykes-war-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/vykes_war_spear_greatspear_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B",
          "faith": "C"
        }
      }
    }
  },
  "serpent-hunter": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpent-hunter_greatspear_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "B",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "A",
          "dexterity": "E"
        }
      }
    }
  },
  "siluras-tree": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/silurias_tree_greatspear_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "D",
          "faith": "C"
        }
      }
    }
  },
  "mohgwyns-sacred-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/mohgwyns_sacred_spear_great_spears_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E",
        "arcane": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D",
          "arcane": "C"
        }
      }
    }
  },
  "halberd": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/halberd_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        }
      }
    }
  },
  "banished-knights-halberd": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/banished_knights_halberd_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C"
        }
      }
    }
  },
  "lucerne": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lucerne_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        }
      }
    }
  },
  "glaive": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/glaive_halberds_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C"
        }
      }
    }
  },
  "vulgar-militia-shotel": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/vulgar_militia_shotel_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B"
        }
      }
    }
  },
  "vulgar-militia-saw": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/vulgar_militia_saw_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        }
      }
    }
  },
  "guardians-swordspear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/guardians_swordspear_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B"
        }
      }
    }
  },
  "nightrider-glaive": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/nightrider_glaive_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "E"
        }
      }
    }
  },
  "pests-glaive": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/pests_glaive_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        }
      }
    }
  },
  "gargoyles-halberd": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles-halberd-weapon-elden-ring-wiki-guide.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "E"
        }
      }
    }
  },
  "gargoyles-black-halberd": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles-black-halberd-weapon-elden-ring-wiki-guide.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D",
          "faith": "D"
        }
      }
    }
  },
  "ripple-crescent-halberd": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ripple_crescent_halberd_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "arcane": "B"
      },
      "max": {
        "Standard": {
          "arcane": "S"
        }
      }
    }
  },
  "golden-halberd": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_halberd_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "D",
          "faith": "D"
        }
      }
    }
  },
  "dragon-halberd": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon_halberd_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "C"
        }
      }
    }
  },
  "loretta-war-sickle": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lorettas_war_sickle_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        }
      }
    }
  },
  "commanders-standard": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/commanders_standard_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "D"
        }
      }
    }
  },
  "spirit-glaive": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spirit_glaive_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C",
          "intelligence": "D"
        }
      }
    }
  },
  "poleblade-of-the-bud": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/poleblade_of_the_bud_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "arcane": "D"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "scythe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/scythe_reaper_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "grave-scythe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/grave_scythe_reaper_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "D",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "D"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "D",
          "intelligence": "D"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "halo-scythe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/halo_scythe_reaper_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "E"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C",
          "faith": "D"
        }
      }
    }
  },
  "winged-scythe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/winged_scythe_reaper_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C",
          "faith": "C"
        }
      }
    }
  },
  "whip": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/whip_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "thorned-whip": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/thorned_whip_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "urumi": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/urumi_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "S"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "D",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "E",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "hoslows-petal-whip": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hoslows_petal_whip_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "D",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "D"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "D"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "D"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "C",
          "intelligence": "D"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "magma-whip-candlestick": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/magma_whip_candlestick_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B",
          "faith": "C"
        }
      }
    }
  },
  "giants-red-braid": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/giant's_red_braid_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "D",
          "faith": "B"
        }
      }
    }
  },
  "caestus": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/caestus_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "spiked-caestus": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spiked_caestus_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "katar": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/katar_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "iron-ball": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/iron_ball_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "star-fist": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/star_fist_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "clinging-bone": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/clinging_bone_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C",
        "arcane": "D"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B",
          "arcane": "C"
        }
      }
    }
  },
  "grafted-dragon": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/grafted_dragon_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D",
          "faith": "D"
        }
      }
    }
  },
  "cipher-pata": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cipher_pata_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "faith": "C"
      },
      "max": {
        "Standard": {
          "faith": "A"
        }
      }
    }
  },
  "hookclaws": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hookclaws_claw_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "venomous-fang": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/venomous_fang_claw_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "bloodhound-claws": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodhound_claws_claw_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "raptor-talons": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/raptor_talons_claw_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "D",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "E",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "E",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "E",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "C",
          "arcane": "B"
        }
      }
    }
  },
  "giant-crusher": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/giant-crusher_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C"
      },
      "max": {
        "Standard": {
          "strength": "B"
        },
        "Heavy": {
          "strength": "S"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "B",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "C",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "B"
        },
        "Sacred": {
          "strength": "C",
          "faith": "B"
        },
        "Magic": {
          "strength": "D",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "A",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "A",
          "arcane": "D"
        },
        "Blood": {
          "strength": "A",
          "arcane": "D"
        },
        "Occult": {
          "strength": "B",
          "arcane": "B"
        }
      }
    }
  },
  "prelates-inferno-crozier": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/prelates_inferno_crozier_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "E"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "D",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "E",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "E",
          "arcane": "D"
        },
        "Occult": {
          "strength": "B",
          "arcane": "B"
        }
      }
    }
  },
  "duelist-greataxe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/duelist_greataxe_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "D"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "rotten-greataxe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_greataxe_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "A"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "D"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "golems-halberd": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golems_halberd_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "D",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "troll-knight-great-club": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_club_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "faith": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "faith": "D"
        }
      }
    }
  },
  "dragon-greatclaw": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon_greatclaw_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C"
        }
      }
    }
  },
  "staff-of-the-avatar": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/staff_of_the_avatar_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "A",
          "dexterity": "D",
          "faith": "B"
        }
      }
    }
  },
  "ghizas-wheel": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ghiza's_wheel_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C"
        }
      }
    }
  },
  "fallingstar-beast-jaw": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fallingstar_beast_jaw_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "intelligence": "E"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "D"
        }
      }
    }
  },
  "axe-of-godfrey": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/axe_of_godfrey_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "D"
        }
      }
    }
  },
  "milady": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/milady_light_greatswords_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "intelligence": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "B",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "ledas-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ledas_sword_light_greatswords_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B",
          "faith": "D"
        }
      }
    }
  },
  "rellanas-twin-blades": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rellanas_twinblade_light_greatswords_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "intelligence": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C",
          "faith": "C"
        }
      }
    }
  },
  "great-katana": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_katana_great_katana_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "C",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "D",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "D",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "dragon-hunters-great-katana": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon-hunters_great_katana_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C"
        }
      }
    }
  },
  "rakshasas-great-katana": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rakshasas_great_katana_great_katana_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        }
      }
    }
  },
  "backhand-blade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/backhand_blade_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "D",
          "dexterity": "S"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "B",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "B"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "B",
          "intelligence": "B"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "B",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "B",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "D",
          "arcane": "A"
        }
      }
    }
  },
  "smithscript-cirque": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithscript_cirque_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D",
        "intelligence": "E",
        "faith": "E"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C",
          "intelligence": "E",
          "faith": "E"
        },
        "Heavy": {
          "strength": "A",
          "intelligence": "E",
          "faith": "E"
        },
        "Keen": {
          "strength": "D",
          "dexterity": "S",
          "intelligence": "E",
          "faith": "E"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B",
          "intelligence": "E",
          "faith": "E"
        },
        "Fire": {
          "strength": "B",
          "dexterity": "E",
          "intelligence": "E",
          "faith": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "D",
          "intelligence": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "B",
          "intelligence": "E",
          "faith": "E"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "D",
          "intelligence": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B",
          "faith": "E"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "C",
          "intelligence": "B",
          "faith": "E"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "E",
          "faith": "E",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "E",
          "faith": "E",
          "arcane": "D"
        },
        "Occult": {
          "strength": "E",
          "dexterity": "D",
          "intelligence": "E",
          "faith": "E",
          "arcane": "A"
        }
      }
    }
  },
  "curseblades-cirque": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/curseblades_cirque_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "B"
        }
      }
    }
  },
  "smithscript-dagger": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithscript_dagger_throwing_blade_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "C",
        "intelligence": "E",
        "faith": "E"
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "D",
          "intelligence": "E",
          "faith": "E",
          "arcane": "A"
        }
      }
    }
  },
  "dryleaf-arts": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dryleaf_arts_hand-to-hand_arts_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "B"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "danes-footwork": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/danes_footwork_hand-to-hand_arts_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C"
        },
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Quality": {
          "strength": "B",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "B"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "B"
        },
        "Poison": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "dexterity": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "D",
          "arcane": "B"
        }
      }
    }
  },
  "beast-claw": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/beast_claw_beast_claws_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "dexterity": "D"
      },
      "max": {
        "Heavy": {
          "strength": "A"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "B"
        },
        "Fire": {
          "strength": "C",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "C"
        },
        "Sacred": {
          "strength": "D",
          "dexterity": "E",
          "faith": "C"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "B"
        },
        "Cold": {
          "strength": "B",
          "dexterity": "D",
          "intelligence": "C"
        },
        "Poison": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Blood": {
          "strength": "B",
          "dexterity": "D",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "red-bears-claw": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/red_bears_claw_beast_claws_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "dexterity": "E"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "dexterity": "D"
        }
      }
    }
  },
  "firespark-perfume": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/firespark_perfume_bottle_perfume_bottles_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "dexterity": "C"
      },
      "max": {
        "Standard": {
          "dexterity": "B"
        }
      }
    }
  },
  "chilling-perfume": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/chilling_perfume_bottle_perfume_bottles_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "dexterity": "D",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "dexterity": "C",
          "intelligence": "C"
        }
      }
    }
  },
  "frenzyflame-perfume": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/frenzyflame_perfume_bottle_perfume_bottles_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "D",
        "intelligence": "E",
        "faith": "E"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "C",
          "intelligence": "D",
          "faith": "D"
        }
      }
    }
  },
  "lightning-perfume": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lightning_perfume_bottle_perfume_bottles_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "dexterity": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "dexterity": "C",
          "faith": "C"
        }
      }
    }
  },
  "deadly-poison-perfume": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/deadly_poison_perfume_bottle_perfume_bottles_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "dexterity": "D",
        "arcane": "D"
      },
      "max": {
        "Standard": {
          "dexterity": "C",
          "arcane": "C"
        }
      }
    }
  },
  "staff-of-the-great-beyond": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/staff_of_the_great_beyond_glintstone_staff_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "intelligence": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "intelligence": "B",
          "faith": "B"
        }
      }
    }
  },
  "maternal-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dryleaf_seal_glinstone_staff_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_75px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "intelligence": "D",
        "arcane": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "intelligence": "A",
          "arcane": "A"
        }
      }
    }
  },
  "astrologers-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/astrologers_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "intelligence": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "intelligence": "S"
        }
      }
    }
  },
  "glintstone-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/glintstone_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "intelligence": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "intelligence": "S"
        }
      }
    }
  },
  "academy-glintstone-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/academy_glintstone_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "intelligence": "B"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "intelligence": "S"
        }
      }
    }
  },
  "diggers-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/diggers_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "C",
        "intelligence": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "intelligence": "S"
        }
      }
    }
  },
  "demi-human-queens-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/demi-human_queens_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "intelligence": "C"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "intelligence": "S"
        }
      }
    }
  },
  "azurs-glintstone-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/azurs_glintstone_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "intelligence": "B"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "intelligence": "S"
        }
      }
    }
  },
  "lusats-glintstone-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lusats_glintstone_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "intelligence": "B"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "intelligence": "S"
        }
      }
    }
  },
  "carian-glintstone-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_glintstone_staff_glintstone_staffs-elden-ring-wiki-guide-200.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "intelligence": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "intelligence": "S"
        }
      }
    }
  },
  "carian-glintblade-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_glintblade_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "E",
        "intelligence": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "D",
          "intelligence": "S"
        }
      }
    }
  },
  "carian-regal-scepter": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_regal_scepter_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "E",
        "intelligence": "B"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "D",
          "intelligence": "S"
        }
      }
    }
  },
  "albinauric-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/albinauric_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "intelligence": "D",
        "arcane": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "intelligence": "B",
          "arcane": "S"
        }
      }
    }
  },
  "staff-of-loss": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/staff_of_loss_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "E",
        "intelligence": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "D",
          "intelligence": "S"
        }
      }
    }
  },
  "gelmir-glintstone-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gelmir_glintstone_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "intelligence": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "intelligence": "B",
          "faith": "B"
        }
      }
    }
  },
  "crystal-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crystal_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "intelligence": "B"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "intelligence": "S"
        }
      }
    }
  },
  "rotten-crystal-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_crystal_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "intelligence": "B"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "intelligence": "S"
        }
      }
    }
  },
  "meteorite-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/meteorite_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "intelligence": "S"
      },
      "max": {}
    }
  },
  "staff-of-the-guilty": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/staff_of_the_guilty_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "faith": "C"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "faith": "S"
        }
      }
    }
  },
  "prince-of-deaths-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/prince_of_deaths_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "intelligence": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "intelligence": "A",
          "faith": "A"
        }
      }
    }
  },
  "dryleaf-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dryleaf_seal_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_75px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "faith": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "faith": "S"
        }
      }
    }
  },
  "fire-knights-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fire_knights_seal_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "faith": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "faith": "S"
        }
      }
    }
  },
  "spiraltree-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spiraltree_seal_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "faith": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "faith": "S"
        }
      }
    }
  },
  "finger-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/finger_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "faith": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "faith": "S"
        }
      }
    }
  },
  "erdtree-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "faith": "C"
      },
      "max": {
        "Standard": {
          "faith": "S"
        }
      }
    }
  },
  "golden-order-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_order_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "intelligence": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "intelligence": "A",
          "faith": "A"
        }
      }
    }
  },
  "gravel-stone-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gravel_stone_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "faith": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "faith": "S"
        }
      }
    }
  },
  "giants-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/giants_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "faith": "S"
        }
      }
    }
  },
  "godslayers-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godslayers_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "faith": "C"
      },
      "max": {
        "Standard": {
          "strength": "D",
          "faith": "S"
        }
      }
    }
  },
  "clawmark-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/clawmark_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "D",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "B",
          "faith": "B"
        }
      }
    }
  },
  "frenzied-flame-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/frenzied_flame_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "E",
        "intelligence": "E",
        "faith": "D"
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "C",
          "intelligence": "C",
          "faith": "B"
        }
      }
    }
  },
  "dragon-communion-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon_communion_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "faith": "D",
        "arcane": "C"
      },
      "max": {
        "Standard": {
          "faith": "B",
          "arcane": "S"
        }
      }
    }
  }
};
