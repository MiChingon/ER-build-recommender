// Tarnished Edition / Tarnished Pack content (2 classes, 7 weapons, 1 shield).
//
// Hand-maintained overlay — the scrapers that produce weapons-extras.ts and
// damage-types.ts predate this content and the regulation dump they read has
// no rows for it yet. When those generators are re-run against a dump that
// includes these items, delete the matching entries here.
//
// Sources: fextralife item pages, cross-checked against eldenring.wiki.gg
// (identical +0 values on both). Derivation:
//   - Standard +0 attack is the wiki's +0 value.
//   - Every other affinity's +0 attack is the wiki's +25 value divided by the
//     standard reinforce multiplier for that affinity (DAMAGE_DATA.reinforce),
//     so estimateAttackPower reproduces the wiki's +25 numbers.
//   - Per-affinity scaling is stored as plain letter grades (the wikis show no
//     numeric scaling for these items), so AP uses SCALING_FACTOR.
//   - Somber weapons carry `somber: true` on their Weapon row in weapons.ts
//     because a letters-only Standard table would otherwise read as
//     "standard-fixed" in getUpgradeType.
//   - Images come from static0.fextralifeimages.com (the old 200px files do
//     not exist for these items); index.html's CSP allows that host.
import type { AffinityDamage } from "./damage-types";
import type { ScalingTable } from "./weapons";

export const TARNISHED_WEAPON_EXTRAS: Record<string, { image: string; scalingTable: ScalingTable }> = {
  "idus-sword": {
    "image": "https://static0.fextralifeimages.com/file/eldenring/a/a2/Idus_Sword-elden-ring-wiki-guide.png",
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
          "strength": "C",
          "dexterity": "C"
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
          "dexterity": "E",
          "arcane": "C"
        }
      }
    }
  },
  "hefty-scimitar": {
    "image": "https://static0.fextralifeimages.com/file/eldenring/0/08/Hefty_Scimitar-elden-ring-wiki-guide.png",
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
          "intelligence": "B"
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
  "reverse-bladed-sword": {
    "image": "https://static0.fextralifeimages.com/file/eldenring/d/d0/Reverse-Bladed_Sword-elden-ring-wiki-guide.png",
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
          "strength": "C",
          "dexterity": "C"
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
  "reed-great-katana": {
    "image": "https://static0.fextralifeimages.com/file/eldenring/2/2c/Reed_Great_Katana-elden-ring-wiki-guide.png",
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
          "strength": "C",
          "dexterity": "C"
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
          "dexterity": "E",
          "arcane": "C"
        }
      }
    }
  },
  "ritual-thrusting-shield": {
    "image": "https://static0.fextralifeimages.com/file/eldenring/4/40/Ritual_Thrusting_Shield-elden-ring-wiki-guide.png",
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
          "strength": "C",
          "dexterity": "C"
        },
        "Fire": {
          "strength": "D",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "E",
          "dexterity": "E",
          "faith": "D"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "D"
        },
        "Sacred": {
          "strength": "E",
          "dexterity": "E",
          "faith": "D"
        },
        "Magic": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "C"
        },
        "Cold": {
          "strength": "D",
          "dexterity": "D",
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
          "dexterity": "E",
          "arcane": "B"
        }
      }
    }
  },
  "silver-grooved-shield": {
    "image": "https://static0.fextralifeimages.com/file/eldenring/c/c0/Silver-Grooved-Shield-elden-ring-wiki-guide.png",
    "scalingTable": {
      "base": {
        "strength": "D"
      },
      "max": {
        "Standard": {
          "strength": "C"
        },
        "Heavy": {
          "strength": "B"
        },
        "Keen": {
          "strength": "E",
          "dexterity": "C"
        },
        "Quality": {
          "strength": "C",
          "dexterity": "C"
        },
        "Fire": {
          "strength": "D",
          "dexterity": "E"
        },
        "Flame Art": {
          "strength": "D",
          "faith": "D"
        },
        "Lightning": {
          "strength": "E",
          "dexterity": "D"
        },
        "Sacred": {
          "strength": "D",
          "faith": "D"
        },
        "Magic": {
          "strength": "E",
          "intelligence": "D"
        },
        "Cold": {
          "strength": "C",
          "intelligence": "D"
        },
        "Poison": {
          "strength": "C",
          "arcane": "D"
        },
        "Blood": {
          "strength": "C",
          "arcane": "D"
        },
        "Occult": {
          "strength": "D",
          "arcane": "C"
        }
      }
    }
  },
  "leontiels-greatsword": {
    "image": "https://static0.fextralifeimages.com/file/eldenring/f/f5/Leontiels_Greatsword-elden-ring-wiki-guide.png",
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
  "golden-order-flail": {
    "image": "https://static0.fextralifeimages.com/file/eldenring/f/f1/Golden-Order-Flail-elden-ring-wiki-guide.png",
    "scalingTable": {
      "base": {
        "strength": "E",
        "dexterity": "E",
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
  }
};

export const TARNISHED_DAMAGE: Record<string, Record<string, AffinityDamage>> = {
  "idus-sword": {
    "Standard": {
      "attack": {
        "phy": 124
      },
      "aecId": 10000,
      "reinforceId": 0
    },
    "Heavy": {
      "attack": {
        "phy": 120
      },
      "aecId": 10000,
      "reinforceId": 100
    },
    "Keen": {
      "attack": {
        "phy": 120
      },
      "aecId": 10000,
      "reinforceId": 200
    },
    "Quality": {
      "attack": {
        "phy": 120
      },
      "aecId": 10000,
      "reinforceId": 300
    },
    "Fire": {
      "attack": {
        "phy": 120,
        "fir": 120
      },
      "aecId": 10005,
      "reinforceId": 400
    },
    "Flame Art": {
      "attack": {
        "phy": 120,
        "fir": 120
      },
      "aecId": 10000,
      "reinforceId": 500
    },
    "Lightning": {
      "attack": {
        "phy": 120,
        "lit": 120
      },
      "aecId": 10000,
      "reinforceId": 600
    },
    "Sacred": {
      "attack": {
        "phy": 120,
        "hol": 120
      },
      "aecId": 10000,
      "reinforceId": 700
    },
    "Magic": {
      "attack": {
        "phy": 120,
        "mag": 120
      },
      "aecId": 10000,
      "reinforceId": 800
    },
    "Cold": {
      "attack": {
        "phy": 120,
        "mag": 103
      },
      "aecId": 10000,
      "reinforceId": 900
    },
    "Poison": {
      "attack": {
        "phy": 120
      },
      "aecId": 10013,
      "reinforceId": 1000
    },
    "Blood": {
      "attack": {
        "phy": 120
      },
      "aecId": 10013,
      "reinforceId": 1100
    },
    "Occult": {
      "attack": {
        "phy": 120
      },
      "aecId": 10013,
      "reinforceId": 1200
    }
  },
  "hefty-scimitar": {
    "Standard": {
      "attack": {
        "phy": 135
      },
      "aecId": 10000,
      "reinforceId": 0
    },
    "Heavy": {
      "attack": {
        "phy": 130
      },
      "aecId": 10000,
      "reinforceId": 100
    },
    "Keen": {
      "attack": {
        "phy": 130
      },
      "aecId": 10000,
      "reinforceId": 200
    },
    "Quality": {
      "attack": {
        "phy": 130
      },
      "aecId": 10000,
      "reinforceId": 300
    },
    "Fire": {
      "attack": {
        "phy": 130,
        "fir": 130
      },
      "aecId": 10005,
      "reinforceId": 400
    },
    "Flame Art": {
      "attack": {
        "phy": 130,
        "fir": 130
      },
      "aecId": 10000,
      "reinforceId": 500
    },
    "Lightning": {
      "attack": {
        "phy": 130,
        "lit": 130
      },
      "aecId": 10000,
      "reinforceId": 600
    },
    "Sacred": {
      "attack": {
        "phy": 130,
        "hol": 130
      },
      "aecId": 10000,
      "reinforceId": 700
    },
    "Magic": {
      "attack": {
        "phy": 130,
        "mag": 130
      },
      "aecId": 10000,
      "reinforceId": 800
    },
    "Cold": {
      "attack": {
        "phy": 130,
        "mag": 103
      },
      "aecId": 10000,
      "reinforceId": 900
    },
    "Poison": {
      "attack": {
        "phy": 130
      },
      "aecId": 10013,
      "reinforceId": 1000
    },
    "Blood": {
      "attack": {
        "phy": 130
      },
      "aecId": 10013,
      "reinforceId": 1100
    },
    "Occult": {
      "attack": {
        "phy": 130
      },
      "aecId": 10013,
      "reinforceId": 1200
    }
  },
  "reverse-bladed-sword": {
    "Standard": {
      "attack": {
        "phy": 115
      },
      "aecId": 10000,
      "reinforceId": 0
    },
    "Heavy": {
      "attack": {
        "phy": 110
      },
      "aecId": 10000,
      "reinforceId": 100
    },
    "Keen": {
      "attack": {
        "phy": 110
      },
      "aecId": 10000,
      "reinforceId": 5000
    },
    "Quality": {
      "attack": {
        "phy": 110
      },
      "aecId": 10000,
      "reinforceId": 300
    },
    "Fire": {
      "attack": {
        "phy": 110,
        "fir": 110
      },
      "aecId": 10005,
      "reinforceId": 400
    },
    "Flame Art": {
      "attack": {
        "phy": 110,
        "fir": 110
      },
      "aecId": 10000,
      "reinforceId": 500
    },
    "Lightning": {
      "attack": {
        "phy": 110,
        "lit": 110
      },
      "aecId": 10000,
      "reinforceId": 600
    },
    "Sacred": {
      "attack": {
        "phy": 110,
        "hol": 110
      },
      "aecId": 10000,
      "reinforceId": 700
    },
    "Magic": {
      "attack": {
        "phy": 110,
        "mag": 110
      },
      "aecId": 10000,
      "reinforceId": 800
    },
    "Cold": {
      "attack": {
        "phy": 110,
        "mag": 94
      },
      "aecId": 10000,
      "reinforceId": 900
    },
    "Poison": {
      "attack": {
        "phy": 110
      },
      "aecId": 10013,
      "reinforceId": 1000
    },
    "Blood": {
      "attack": {
        "phy": 110
      },
      "aecId": 10013,
      "reinforceId": 1100
    },
    "Occult": {
      "attack": {
        "phy": 110
      },
      "aecId": 10013,
      "reinforceId": 1200
    }
  },
  "reed-great-katana": {
    "Standard": {
      "attack": {
        "phy": 158
      },
      "aecId": 10000,
      "reinforceId": 0
    },
    "Heavy": {
      "attack": {
        "phy": 152
      },
      "aecId": 10000,
      "reinforceId": 100
    },
    "Keen": {
      "attack": {
        "phy": 152
      },
      "aecId": 10000,
      "reinforceId": 200
    },
    "Quality": {
      "attack": {
        "phy": 152
      },
      "aecId": 10000,
      "reinforceId": 300
    },
    "Fire": {
      "attack": {
        "phy": 152,
        "fir": 152
      },
      "aecId": 10005,
      "reinforceId": 400
    },
    "Flame Art": {
      "attack": {
        "phy": 152,
        "fir": 152
      },
      "aecId": 10000,
      "reinforceId": 500
    },
    "Lightning": {
      "attack": {
        "phy": 152,
        "lit": 152
      },
      "aecId": 10000,
      "reinforceId": 600
    },
    "Sacred": {
      "attack": {
        "phy": 152,
        "hol": 152
      },
      "aecId": 10000,
      "reinforceId": 700
    },
    "Magic": {
      "attack": {
        "phy": 152,
        "mag": 152
      },
      "aecId": 10000,
      "reinforceId": 800
    },
    "Cold": {
      "attack": {
        "phy": 152,
        "mag": 130
      },
      "aecId": 10000,
      "reinforceId": 900
    },
    "Poison": {
      "attack": {
        "phy": 152
      },
      "aecId": 10013,
      "reinforceId": 1000
    },
    "Blood": {
      "attack": {
        "phy": 152
      },
      "aecId": 10013,
      "reinforceId": 1100
    },
    "Occult": {
      "attack": {
        "phy": 152
      },
      "aecId": 10013,
      "reinforceId": 1200
    }
  },
  "ritual-thrusting-shield": {
    "Standard": {
      "attack": {
        "phy": 135
      },
      "aecId": 10000,
      "reinforceId": 0
    },
    "Heavy": {
      "attack": {
        "phy": 131
      },
      "aecId": 10000,
      "reinforceId": 100
    },
    "Keen": {
      "attack": {
        "phy": 131
      },
      "aecId": 10000,
      "reinforceId": 200
    },
    "Quality": {
      "attack": {
        "phy": 131
      },
      "aecId": 10000,
      "reinforceId": 300
    },
    "Fire": {
      "attack": {
        "phy": 131,
        "fir": 131
      },
      "aecId": 10005,
      "reinforceId": 400
    },
    "Flame Art": {
      "attack": {
        "phy": 131,
        "fir": 131
      },
      "aecId": 10000,
      "reinforceId": 500
    },
    "Lightning": {
      "attack": {
        "phy": 130,
        "lit": 130
      },
      "aecId": 10000,
      "reinforceId": 600
    },
    "Sacred": {
      "attack": {
        "phy": 131,
        "hol": 131
      },
      "aecId": 10000,
      "reinforceId": 700
    },
    "Magic": {
      "attack": {
        "phy": 131,
        "mag": 131
      },
      "aecId": 10000,
      "reinforceId": 800
    },
    "Cold": {
      "attack": {
        "phy": 131,
        "mag": 113
      },
      "aecId": 10000,
      "reinforceId": 900
    },
    "Poison": {
      "attack": {
        "phy": 131
      },
      "aecId": 10013,
      "reinforceId": 1000
    },
    "Blood": {
      "attack": {
        "phy": 131
      },
      "aecId": 10013,
      "reinforceId": 1100
    },
    "Occult": {
      "attack": {
        "phy": 131
      },
      "aecId": 10013,
      "reinforceId": 1200
    }
  },
  "silver-grooved-shield": {
    "Standard": {
      "attack": {
        "phy": 61
      },
      "aecId": 10000,
      "reinforceId": 0
    },
    "Heavy": {
      "attack": {
        "phy": 59
      },
      "aecId": 10000,
      "reinforceId": 100
    },
    "Keen": {
      "attack": {
        "phy": 59
      },
      "aecId": 10000,
      "reinforceId": 200
    },
    "Quality": {
      "attack": {
        "phy": 59
      },
      "aecId": 10000,
      "reinforceId": 300
    },
    "Fire": {
      "attack": {
        "phy": 59,
        "fir": 59
      },
      "aecId": 10005,
      "reinforceId": 400
    },
    "Flame Art": {
      "attack": {
        "phy": 59,
        "fir": 59
      },
      "aecId": 10000,
      "reinforceId": 500
    },
    "Lightning": {
      "attack": {
        "phy": 59,
        "lit": 59
      },
      "aecId": 10000,
      "reinforceId": 600
    },
    "Sacred": {
      "attack": {
        "phy": 59,
        "hol": 59
      },
      "aecId": 10000,
      "reinforceId": 700
    },
    "Magic": {
      "attack": {
        "phy": 59,
        "mag": 59
      },
      "aecId": 10000,
      "reinforceId": 800
    },
    "Cold": {
      "attack": {
        "phy": 59,
        "mag": 50
      },
      "aecId": 10000,
      "reinforceId": 900
    },
    "Poison": {
      "attack": {
        "phy": 59
      },
      "aecId": 10013,
      "reinforceId": 1000
    },
    "Blood": {
      "attack": {
        "phy": 59
      },
      "aecId": 10013,
      "reinforceId": 1100
    },
    "Occult": {
      "attack": {
        "phy": 59
      },
      "aecId": 10013,
      "reinforceId": 1200
    }
  },
  "leontiels-greatsword": {
    "Standard": {
      "attack": {
        "phy": 130
      },
      "aecId": 10000,
      "reinforceId": 2200
    }
  },
  "golden-order-flail": {
    "Standard": {
      "attack": {
        "phy": 75,
        "hol": 92
      },
      "aecId": 10000,
      "reinforceId": 2200
    }
  }
};
