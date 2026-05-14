export type DamageType = 'phy' | 'mag' | 'fir' | 'lit' | 'hol';

export type AffinityDamage = {
  attack: Partial<Record<DamageType, number>>;
  aecId: number;
  reinforceId: number;
};

export type ReinforceEntry = {
  maxLevel: number;
  attack: Record<string, number>;
  attributeScaling: Record<string, number>;
};

export const DAMAGE_DATA: {
  byWeaponId: Record<string, Record<string, AffinityDamage>>;
  aec: Record<string, Partial<Record<DamageType, string[]>>>;
  reinforce: Record<string, ReinforceEntry>;
} = {
  "byWeaponId": {
    "dagger": {
      "Standard": {
        "attack": {
          "phy": 74
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 71
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 71
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 71
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 71,
          "fir": 71
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 71,
          "fir": 71
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 71,
          "lit": 71
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 71,
          "hol": 71
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 71,
          "mag": 71
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 71,
          "mag": 60
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 71
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 71
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 71
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "parrying-dagger": {
      "Standard": {
        "attack": {
          "phy": 75
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 72
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 72
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 72
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 72,
          "fir": 72
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 72,
          "fir": 72
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 72,
          "lit": 72
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 72,
          "hol": 72
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 72,
          "mag": 72
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 72,
          "mag": 61
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 72
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 72
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 72
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "great-knife": {
      "Standard": {
        "attack": {
          "phy": 75
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 72
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 72
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 72
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 72,
          "fir": 72
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 72,
          "fir": 72
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 72,
          "lit": 72
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 72,
          "hol": 72
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 72,
          "mag": 72
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 72,
          "mag": 61
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 72
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 72
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 72
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "misericorde": {
      "Standard": {
        "attack": {
          "phy": 92
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 88
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 88
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 88
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 88,
          "fir": 88
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 88,
          "fir": 88
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 88,
          "lit": 88
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 88,
          "hol": 88
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 88,
          "mag": 88
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 88,
          "mag": 75
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 88
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 88
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 88
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "wakizashi": {
      "Standard": {
        "attack": {
          "phy": 94
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 90
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 90
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 90
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 90,
          "fir": 90
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 90,
          "fir": 90
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 90,
          "lit": 90
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 90,
          "hol": 90
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 90,
          "mag": 90
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 90,
          "mag": 77
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 90
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 90
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 90
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "bloodstained-dagger": {
      "Standard": {
        "attack": {
          "phy": 81
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 77
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 77
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 77
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 77,
          "fir": 77
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 77,
          "fir": 77
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 77,
          "lit": 77
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 77,
          "hol": 77
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 77,
          "mag": 77
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 77,
          "mag": 65
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 77
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 77
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 77
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "reduvia": {
      "Standard": {
        "attack": {
          "phy": 79
        },
        "aecId": 10013,
        "reinforceId": 2200
      }
    },
    "black-knife": {
      "Standard": {
        "attack": {
          "phy": 66,
          "hol": 65
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "blade-of-calling": {
      "Standard": {
        "attack": {
          "phy": 71,
          "hol": 43
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "glintstone-kris": {
      "Standard": {
        "attack": {
          "phy": 57,
          "mag": 68
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "main-gauche": {
      "Standard": {
        "attack": {
          "phy": 79
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 75
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 75
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 75
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 75,
          "fir": 75
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 75,
          "fir": 75
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 75,
          "lit": 75
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 75,
          "hol": 75
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 75,
          "mag": 75
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 75,
          "mag": 64
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 75
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 75
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 75
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "fire-knights-shortsword": {
      "Standard": {
        "attack": {
          "phy": 75,
          "fir": 22
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 63,
          "fir": 18
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 63,
          "fir": 18
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 63,
          "fir": 18
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 63,
          "fir": 80
        },
        "aecId": 20010500,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 63,
          "fir": 80
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 63,
          "fir": 18,
          "lit": 63
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 63,
          "fir": 18,
          "hol": 63
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 63,
          "mag": 63,
          "fir": 18
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 63,
          "mag": 54,
          "fir": 18
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 63,
          "fir": 18
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 63,
          "fir": 18
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 63,
          "fir": 18
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "short-sword": {
      "Standard": {
        "attack": {
          "phy": 102
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 97
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 97
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 97
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 97,
          "fir": 97
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 97,
          "fir": 97
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 97,
          "lit": 97
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 97,
          "hol": 97
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 97,
          "mag": 97
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 97,
          "mag": 78
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 97
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 97
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 97
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "longsword": {
      "Standard": {
        "attack": {
          "phy": 110
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 105
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 105
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 105
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 105,
          "fir": 105
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 105,
          "fir": 105
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 105,
          "lit": 105
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 105,
          "hol": 105
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 105,
          "mag": 105
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 105,
          "mag": 84
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 105
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Occult": {
        "attack": {
          "phy": 105
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "broadsword": {
      "Standard": {
        "attack": {
          "phy": 117
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 112
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 112
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 112
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 112,
          "fir": 112
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 112,
          "fir": 112
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 112,
          "lit": 112
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 112,
          "hol": 112
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 112,
          "mag": 112
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 112,
          "mag": 90
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 112
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 112
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 112
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "lordsworns-straight-sword": {
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
        "reinforceId": 200
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
          "mag": 88
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
    "nobles-slender-sword": {
      "Standard": {
        "attack": {
          "phy": 101
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 96
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 96
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 96
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 96,
          "fir": 96
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 96,
          "fir": 96
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 96,
          "lit": 96
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 96,
          "hol": 96
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 96,
          "mag": 96
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 96,
          "mag": 77
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 96
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 96
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 96
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "warhawks-talon": {
      "Standard": {
        "attack": {
          "phy": 101
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 96
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 96
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 96
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 96,
          "fir": 96
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 96,
          "fir": 96
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 96,
          "lit": 96
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 96,
          "hol": 96
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 96,
          "mag": 96
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 96,
          "mag": 77
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 96
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 96
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 96
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "carian-knights-sword": {
      "Standard": {
        "attack": {
          "phy": 88,
          "mag": 88
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "crystal-sword": {
      "Standard": {
        "attack": {
          "phy": 106,
          "mag": 68
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "miquellan-knights-sword": {
      "Standard": {
        "attack": {
          "phy": 105,
          "hol": 68
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "golden-epitaph": {
      "Standard": {
        "attack": {
          "phy": 85,
          "hol": 85
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "regalia-of-eochaid": {
      "Standard": {
        "attack": {
          "phy": 89,
          "mag": 57
        },
        "aecId": 10100,
        "reinforceId": 2200
      }
    },
    "coded-sword": {
      "Standard": {
        "attack": {
          "hol": 85
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "sword-of-night-and-flame": {
      "Standard": {
        "attack": {
          "phy": 87,
          "mag": 56,
          "fir": 56
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "sword-of-light": {
      "Standard": {
        "attack": {
          "phy": 93,
          "hol": 93
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "sword-of-darkness": {
      "Standard": {
        "attack": {
          "phy": 93,
          "hol": 93
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "bastard-sword": {
      "Standard": {
        "attack": {
          "phy": 138
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 133
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 133
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 133
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 133,
          "fir": 133
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 133,
          "fir": 133
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 133,
          "lit": 133
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 133,
          "hol": 133
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 133,
          "mag": 133
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 133,
          "mag": 100
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 133
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Occult": {
        "attack": {
          "phy": 133
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "claymore": {
      "Standard": {
        "attack": {
          "phy": 138
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 133
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 133
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 133
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 133,
          "fir": 133
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 133,
          "fir": 133
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 133,
          "lit": 133
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 133,
          "hol": 133
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 133,
          "mag": 133
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 133,
          "mag": 100
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 133
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 133
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 133
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "iron-greatsword": {
      "Standard": {
        "attack": {
          "phy": 149
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 144
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 144
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 144
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 144,
          "fir": 144
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 144,
          "fir": 144
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 144,
          "lit": 144
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 144,
          "hol": 144
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 144,
          "mag": 144
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 144,
          "mag": 108
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 144
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 144
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 144
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "knights-greatsword": {
      "Standard": {
        "attack": {
          "phy": 141
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 136
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 136
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 136
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Flame Art": {
        "attack": {
          "phy": 136,
          "fir": 136
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 136,
          "lit": 136
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 136,
          "hol": 136
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 136,
          "mag": 136
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 136,
          "mag": 102
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 136
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 136
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 136
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "banished-knights-greatsword": {
      "Standard": {
        "attack": {
          "phy": 142
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 137
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 137
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 137
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 137,
          "fir": 137
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 137,
          "fir": 137
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 137,
          "lit": 137
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 137,
          "hol": 137
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 137,
          "mag": 137
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 137,
          "mag": 103
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 137
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 137
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 137
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "flamberge": {
      "Standard": {
        "attack": {
          "phy": 129
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 125
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 125
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 125
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 125,
          "fir": 125
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 125,
          "fir": 125
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 125,
          "lit": 125
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 125,
          "hol": 125
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 125,
          "mag": 125
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 125,
          "mag": 94
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 125
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 125
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 125
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "blasphemous-blade": {
      "Standard": {
        "attack": {
          "phy": 121,
          "fir": 78
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "dark-moon-greatsword": {
      "Standard": {
        "attack": {
          "phy": 82,
          "mag": 98
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "golden-order-greatsword": {
      "Standard": {
        "attack": {
          "phy": 86,
          "hol": 103
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "sacred-relic-sword": {
      "Standard": {
        "attack": {
          "phy": 118,
          "hol": 76
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "marais-executioners-sword": {
      "Standard": {
        "attack": {
          "phy": 94,
          "mag": 61
        },
        "aecId": 10100,
        "reinforceId": 2200
      }
    },
    "lizard-greatsword": {
      "Standard": {
        "attack": {
          "phy": 140
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 134
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 134
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 134
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 134,
          "fir": 134
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 134,
          "fir": 134
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 134,
          "lit": 134
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 134,
          "hol": 134
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 134,
          "mag": 134
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 134,
          "mag": 114
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 134
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 134
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 134
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "zweihander": {
      "Standard": {
        "attack": {
          "phy": 141
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 136
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 136
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 136
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 136,
          "fir": 136
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 136,
          "fir": 136
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 136,
          "lit": 136
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 136,
          "hol": 136
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 136,
          "mag": 136
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 136,
          "mag": 102
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 136
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 136
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 136
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "greatsword": {
      "Standard": {
        "attack": {
          "phy": 164
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 159
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 159
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 159
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 159,
          "fir": 159
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 159,
          "fir": 159
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 159,
          "lit": 159
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 159,
          "hol": 159
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 159,
          "mag": 159
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 159,
          "mag": 119
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 159
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 159
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 159
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "watchdogs-greatsword": {
      "Standard": {
        "attack": {
          "phy": 142
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 137
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 137
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 137
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 137,
          "fir": 137
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 137,
          "fir": 137
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 137,
          "lit": 137
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 137,
          "hol": 137
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 137,
          "mag": 137
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 137,
          "mag": 103
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 137
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 137
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 137
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "grafted-blade-greatsword": {
      "Standard": {
        "attack": {
          "phy": 162
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "ruins-greatsword": {
      "Standard": {
        "attack": {
          "phy": 124,
          "mag": 37
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "starscourge-greatsword": {
      "Standard": {
        "attack": {
          "phy": 129,
          "mag": 83
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "godslayers-greatsword": {
      "Standard": {
        "attack": {
          "phy": 119,
          "fir": 77
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "maliketh-black-blade": {
      "Standard": {
        "attack": {
          "phy": 127,
          "hol": 82
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "trolls-golden-sword": {
      "Standard": {
        "attack": {
          "phy": 155
        },
        "aecId": 10000,
        "reinforceId": 0
      }
    },
    "troll-knights-sword": {
      "Standard": {
        "attack": {
          "phy": 124,
          "mag": 80
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "royal-greatsword": {
      "Standard": {
        "attack": {
          "phy": 112,
          "mag": 134
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "fire-knights-greatsword": {
      "Standard": {
        "attack": {
          "phy": 147,
          "fir": 44
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 127,
          "fir": 35
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 127,
          "fir": 35
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 127,
          "fir": 35
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 127,
          "fir": 160
        },
        "aecId": 20010500,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 127,
          "fir": 160
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 127,
          "fir": 35,
          "lit": 127
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 127,
          "fir": 35,
          "hol": 127
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 127,
          "mag": 127,
          "fir": 35
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 127,
          "mag": 108,
          "fir": 35
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 127,
          "fir": 35
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 127,
          "fir": 35
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 127,
          "fir": 35
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "ancient-meteoric-ore-greatsword": {
      "Standard": {
        "attack": {
          "phy": 154,
          "mag": 46
        },
        "aecId": 10100,
        "reinforceId": 2200
      }
    },
    "greatsword-of-radahn-lord": {
      "Standard": {
        "attack": {
          "phy": 127,
          "mag": 82
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "greatsword-of-radahn-light": {
      "Standard": {
        "attack": {
          "phy": 127,
          "mag": 82
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "moonrithylls-knight-sword": {
      "Standard": {
        "attack": {
          "phy": 124,
          "mag": 80
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "rapier": {
      "Standard": {
        "attack": {
          "phy": 96
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 92
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 92
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 92
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 92,
          "fir": 92
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 92,
          "fir": 92
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 92,
          "lit": 92
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 92,
          "hol": 92
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 92,
          "mag": 92
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 92,
          "mag": 74
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 92
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 92
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 92
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "estoc": {
      "Standard": {
        "attack": {
          "phy": 107
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 102
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 102
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 102
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 102,
          "fir": 102
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 102,
          "fir": 102
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 102,
          "lit": 102
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 102,
          "hol": 102
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 102,
          "mag": 102
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 102,
          "mag": 82
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 102
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 102
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 102
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "noble-estoc": {
      "Standard": {
        "attack": {
          "phy": 104
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 99
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 99
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 99
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 99,
          "fir": 99
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 99,
          "fir": 99
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 99,
          "lit": 99
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 99,
          "hol": 99
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 99,
          "mag": 99
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 99,
          "mag": 79
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 99
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 99
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 99
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "rogiers-rapier": {
      "Standard": {
        "attack": {
          "phy": 93
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 89
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 89
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 89
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 89,
          "fir": 89
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 89,
          "fir": 89
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 89,
          "lit": 89
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 89,
          "hol": 89
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 89,
          "mag": 89
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 89,
          "mag": 71
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 89
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 89
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 89
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "antspur-rapier": {
      "Standard": {
        "attack": {
          "phy": 98
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 94
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 94
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 94
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 94,
          "fir": 94
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 94,
          "fir": 94
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 94,
          "lit": 94
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 94,
          "hol": 94
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 94,
          "mag": 94
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 94,
          "mag": 75
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 94
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 94
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 94
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "frozen-needle": {
      "Standard": {
        "attack": {
          "phy": 99
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "carian-sorcery-sword": {
      "Standard": {
        "attack": {
          "phy": 69,
          "mag": 69
        },
        "aecId": 10000,
        "reinforceId": 1300
      }
    },
    "great-epee": {
      "Standard": {
        "attack": {
          "phy": 124
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 119
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 119
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 119
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 119,
          "fir": 119
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 119,
          "fir": 119
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 119,
          "lit": 119
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 119,
          "hol": 119
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 119,
          "mag": 119
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 119,
          "mag": 95
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 119
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 119
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 119
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "godskin-stitcher": {
      "Standard": {
        "attack": {
          "phy": 127
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 121
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 121
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 121
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 121,
          "fir": 121
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 121,
          "fir": 121
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 121,
          "lit": 121
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 121,
          "hol": 121
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 121,
          "mag": 121
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 121,
          "mag": 97
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 121
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 121
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 121
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "bloody-helice": {
      "Standard": {
        "attack": {
          "phy": 121
        },
        "aecId": 10013,
        "reinforceId": 2200
      }
    },
    "dragon-king-cragblade": {
      "Standard": {
        "attack": {
          "phy": 92,
          "lit": 59
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "scimitar": {
      "Standard": {
        "attack": {
          "phy": 106
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 101
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 101
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 101
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 101,
          "fir": 101
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 101,
          "fir": 101
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 101,
          "lit": 101
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 101,
          "hol": 101
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 101,
          "mag": 101
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 101,
          "mag": 81
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 101
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Occult": {
        "attack": {
          "phy": 101
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "falchion": {
      "Standard": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 104
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 104
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 104
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 104,
          "fir": 104
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 104,
          "fir": 104
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 104,
          "lit": 104
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 104,
          "hol": 104
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 104,
          "mag": 104
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 104,
          "mag": 83
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 104
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 104
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 104
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "shamshir": {
      "Standard": {
        "attack": {
          "phy": 108
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 103
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 103
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 103
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 103,
          "fir": 103
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 103,
          "fir": 103
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 103,
          "lit": 103
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 103,
          "hol": 103
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 103,
          "mag": 103
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 103,
          "mag": 82
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 103
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 103
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 103
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "bandits-curved-sword": {
      "Standard": {
        "attack": {
          "phy": 118
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 113
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 113
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 113
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 113,
          "fir": 113
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 113,
          "fir": 113
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 113,
          "lit": 113
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 113,
          "hol": 113
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 113,
          "mag": 113
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 113,
          "mag": 90
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 113
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 113
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 113
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "shotel": {
      "Standard": {
        "attack": {
          "phy": 96
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 92
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 92
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 92
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 92,
          "fir": 92
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 92,
          "fir": 92
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 92,
          "lit": 92
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 92,
          "hol": 92
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 92,
          "mag": 92
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 92,
          "mag": 74
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 92
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 92
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 92
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "scavengers-curved-sword": {
      "Standard": {
        "attack": {
          "phy": 105
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 100
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 100
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 100
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 100,
          "fir": 100
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 100,
          "fir": 100
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 100,
          "lit": 100
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 100,
          "hol": 100
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 100,
          "mag": 100
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 100,
          "mag": 80
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 100
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 100
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 100
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "beastmans-curved-sword": {
      "Standard": {
        "attack": {
          "phy": 113
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 108
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 108
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 108
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 108,
          "fir": 108
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 108,
          "fir": 108
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 108,
          "lit": 108
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 108,
          "hol": 108
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 108,
          "mag": 108
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 108,
          "mag": 86
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 108
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 108
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 108
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "magma-blade": {
      "Standard": {
        "attack": {
          "phy": 96,
          "fir": 62
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "wing-of-astel": {
      "Standard": {
        "attack": {
          "phy": 65,
          "mag": 78
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "eclipse-shotel": {
      "Standard": {
        "attack": {
          "phy": 77,
          "hol": 77
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "dismounter": {
      "Standard": {
        "attack": {
          "phy": 138
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 132
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 132
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 132
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 132,
          "fir": 132
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 132,
          "fir": 132
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 132,
          "lit": 132
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 132,
          "hol": 132
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 132,
          "mag": 132
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 132,
          "mag": 106
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 132
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 132
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 132
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "monks-flameblade": {
      "Standard": {
        "attack": {
          "phy": 134
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 128
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 128
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 128
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 128,
          "fir": 128
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 128,
          "fir": 128
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 128,
          "lit": 128
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 128,
          "hol": 128
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 128,
          "mag": 128
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 128,
          "mag": 102
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 128
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 128
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 128
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "bloodhounds-fang": {
      "Standard": {
        "attack": {
          "phy": 141
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "onyx-lords-greatsword": {
      "Standard": {
        "attack": {
          "phy": 118,
          "mag": 76
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "magma-wyrm-scalesword": {
      "Standard": {
        "attack": {
          "phy": 114,
          "fir": 74
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "morgotts-cursed-sword": {
      "Standard": {
        "attack": {
          "phy": 120
        },
        "aecId": 10013,
        "reinforceId": 2200
      }
    },
    "uchigatana": {
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
        "reinforceId": 200
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
          "mag": 88
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
    "nagakiba": {
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
          "mag": 88
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
    "serpentbone-blade": {
      "Standard": {
        "attack": {
          "phy": 120
        },
        "aecId": 10000,
        "reinforceId": 0
      }
    },
    "meteoric-ore-blade": {
      "Standard": {
        "attack": {
          "phy": 112,
          "mag": 72
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "moonveil": {
      "Standard": {
        "attack": {
          "phy": 73,
          "mag": 87
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "rivers-of-blood": {
      "Standard": {
        "attack": {
          "phy": 76,
          "fir": 76
        },
        "aecId": 10100,
        "reinforceId": 2200
      }
    },
    "dragonscale-blade": {
      "Standard": {
        "attack": {
          "phy": 110
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "hand-of-malenia": {
      "Standard": {
        "attack": {
          "phy": 117
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "twinblade": {
      "Standard": {
        "attack": {
          "phy": 119
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 114
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 114
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 114
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 114,
          "fir": 114
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 114,
          "fir": 114
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 114,
          "lit": 114
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 114,
          "hol": 114
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 114,
          "mag": 114
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 114,
          "mag": 91
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 114
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Occult": {
        "attack": {
          "phy": 114
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "twinned-knight-swords": {
      "Standard": {
        "attack": {
          "phy": 122
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 117
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 117
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 117
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 117,
          "fir": 117
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 117,
          "fir": 117
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 117,
          "lit": 117
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 117,
          "hol": 117
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 117,
          "mag": 117
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 117,
          "mag": 94
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 117
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 117
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 117
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "godskin-peeler": {
      "Standard": {
        "attack": {
          "phy": 121
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 116
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 116
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 116
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 116,
          "fir": 116
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 116,
          "fir": 116
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 116,
          "lit": 116
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 116,
          "hol": 116
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 116,
          "mag": 116
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 116,
          "mag": 93
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 116
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 116
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 116
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "eleonoras-poleblade": {
      "Standard": {
        "attack": {
          "phy": 72,
          "fir": 72
        },
        "aecId": 10100,
        "reinforceId": 2200
      }
    },
    "hand-axe": {
      "Standard": {
        "attack": {
          "phy": 117
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 112
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 112
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 112
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 112,
          "fir": 112
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 112,
          "fir": 112
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 112,
          "lit": 112
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 112,
          "hol": 112
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 112,
          "mag": 112
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 112,
          "mag": 90
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 112
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 112
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 112
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "battle-axe": {
      "Standard": {
        "attack": {
          "phy": 128
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 122
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 122
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 122
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 122,
          "fir": 122
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 122,
          "fir": 122
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 122,
          "lit": 122
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 122,
          "hol": 122
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 122,
          "mag": 122
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 122,
          "mag": 98
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 122
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 122
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 122
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "highland-axe": {
      "Standard": {
        "attack": {
          "phy": 128
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 122
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 122
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 122
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 122,
          "fir": 122
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 122,
          "fir": 122
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 122,
          "lit": 122
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 122,
          "hol": 122
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 122,
          "mag": 122
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 122,
          "mag": 98
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 122
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Occult": {
        "attack": {
          "phy": 122
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "icerind-hatchet": {
      "Standard": {
        "attack": {
          "phy": 115
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "stormhawk-axe": {
      "Standard": {
        "attack": {
          "phy": 136
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "rosus-axe": {
      "Standard": {
        "attack": {
          "phy": 112,
          "mag": 72
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "greataxe": {
      "Standard": {
        "attack": {
          "phy": 151
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 146
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 146
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 146
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 146,
          "fir": 146
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 146,
          "fir": 146
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 146,
          "lit": 146
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 146,
          "hol": 146
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 146,
          "mag": 146
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 146,
          "mag": 110
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 146
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 146
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 146
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "crescent-moon-axe": {
      "Standard": {
        "attack": {
          "phy": 146
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 141
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 141
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 141
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 141,
          "fir": 141
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 141,
          "fir": 141
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 141,
          "lit": 141
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 141,
          "hol": 141
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 141,
          "mag": 141
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 141,
          "mag": 106
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 141
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 141
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 141
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "executioners-greataxe": {
      "Standard": {
        "attack": {
          "phy": 150
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 145
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 145
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 145
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 145,
          "fir": 145
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 145,
          "fir": 145
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 145,
          "lit": 145
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 145,
          "hol": 145
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 145,
          "mag": 145
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 145,
          "mag": 109
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 145
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 145
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 145
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "rusted-anchor": {
      "Standard": {
        "attack": {
          "phy": 147
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 142
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 142
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 142
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 142,
          "fir": 142
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 142,
          "fir": 142
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 142,
          "lit": 142
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 142,
          "hol": 142
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 142,
          "mag": 142
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 142,
          "mag": 107
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 142
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 142
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 142
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "butchering-knife": {
      "Standard": {
        "attack": {
          "phy": 134
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 129
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 129
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 129
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 129,
          "fir": 129
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 129,
          "fir": 129
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 129,
          "lit": 129
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 129,
          "hol": 129
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 129,
          "mag": 129
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 129,
          "mag": 97
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 129
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 129
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 129
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "axe-of-godrick": {
      "Standard": {
        "attack": {
          "phy": 142
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "club": {
      "Standard": {
        "attack": {
          "phy": 103
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 98
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 98
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 98
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 98,
          "fir": 98
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 98,
          "fir": 98
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 98,
          "lit": 98
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 98,
          "hol": 98
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 98,
          "mag": 98
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 98,
          "mag": 78
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 98
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Occult": {
        "attack": {
          "phy": 98
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "mace": {
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
        "reinforceId": 200
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
          "mag": 88
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
    "morning-star": {
      "Standard": {
        "attack": {
          "phy": 118
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 113
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 113
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 113
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 113,
          "fir": 113
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 113,
          "fir": 113
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 113,
          "lit": 113
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 113,
          "hol": 113
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 113,
          "mag": 113
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 113,
          "mag": 90
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 113
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 113
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 113
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "warpick": {
      "Standard": {
        "attack": {
          "phy": 108
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 103
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 103
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 103
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 103,
          "fir": 103
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 103,
          "fir": 103
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 103,
          "lit": 103
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 103,
          "hol": 103
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 103,
          "mag": 103
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 103,
          "mag": 82
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 103
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 103
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 103
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "hammer": {
      "Standard": {
        "attack": {
          "phy": 124
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 119
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 119
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 119
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 119,
          "fir": 119
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 119,
          "fir": 119
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 119,
          "lit": 119
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 119,
          "hol": 119
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 119,
          "mag": 119
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 119,
          "mag": 95
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 119
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 119
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 119
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "varres-bouquet": {
      "Standard": {
        "attack": {
          "phy": 46
        },
        "aecId": 10013,
        "reinforceId": 2200
      }
    },
    "envoys-horn": {
      "Standard": {
        "attack": {
          "phy": 96,
          "hol": 62
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "marikas-hammer": {
      "Standard": {
        "attack": {
          "phy": 101,
          "hol": 65
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "great-club": {
      "Standard": {
        "attack": {
          "phy": 154,
          "hol": 46
        },
        "aecId": 10000,
        "reinforceId": 0
      }
    },
    "pickaxe": {
      "Standard": {
        "attack": {
          "phy": 144
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 139
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 139
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 139
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 139,
          "fir": 139
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 139,
          "fir": 139
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 139,
          "lit": 139
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 139,
          "hol": 139
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 139,
          "mag": 139
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 139,
          "mag": 104
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 139
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 139
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 139
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "brick-hammer": {
      "Standard": {
        "attack": {
          "phy": 122
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 118
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 118
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 118
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 118,
          "fir": 118
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 118,
          "fir": 118
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 118,
          "lit": 118
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 118,
          "hol": 118
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 118,
          "mag": 118
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 118,
          "mag": 89
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 118
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 118
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 118
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "great-stars": {
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
          "mag": 98
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
    "devourers-scepter": {
      "Standard": {
        "attack": {
          "phy": 112,
          "fir": 69
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "flail": {
      "Standard": {
        "attack": {
          "phy": 112
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 107
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 107
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 107
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 107,
          "fir": 107
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 107,
          "fir": 107
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 107,
          "lit": 107
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 107,
          "hol": 107
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 107,
          "mag": 107
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 107,
          "mag": 86
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 107
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 107
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 107
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "nightrider-flail": {
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
          "mag": 88
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
    "chainlink-flail": {
      "Standard": {
        "attack": {
          "phy": 112
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 107
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 107
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 107
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 107,
          "fir": 107
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 107,
          "fir": 107
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 107,
          "lit": 107
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 107,
          "hol": 107
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 107,
          "mag": 107
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 107,
          "mag": 86
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 107
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 107
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 107
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "family-heads": {
      "Standard": {
        "attack": {
          "phy": 90,
          "mag": 58
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "bastards-stars": {
      "Standard": {
        "attack": {
          "phy": 68,
          "mag": 81
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "short-spear": {
      "Standard": {
        "attack": {
          "phy": 112
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 107
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 107
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 107
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 107,
          "fir": 107
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 107,
          "fir": 107
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 107,
          "lit": 107
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 107,
          "hol": 107
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 107,
          "mag": 107
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 107,
          "mag": 86
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 107
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 107
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 107
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "spear": {
      "Standard": {
        "attack": {
          "phy": 114
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 109,
          "fir": 109
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 109,
          "fir": 109
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 109,
          "lit": 109
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 109,
          "hol": 109
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 109,
          "mag": 109
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 109,
          "mag": 87
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 109
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Occult": {
        "attack": {
          "phy": 109
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "partisan": {
      "Standard": {
        "attack": {
          "phy": 123
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 118
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 118
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 118
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 118,
          "fir": 118
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 118,
          "fir": 118
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 118,
          "lit": 118
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 118,
          "hol": 118
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 118,
          "mag": 118
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 118,
          "mag": 94
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 118
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 118
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 118
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "pike": {
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
        "reinforceId": 200
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
          "mag": 88
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
    "cross-naginata": {
      "Standard": {
        "attack": {
          "phy": 122
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 117
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 117
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 117
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 117,
          "fir": 117
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 117,
          "fir": 117
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 117,
          "lit": 117
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 117,
          "hol": 117
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 117,
          "mag": 117
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 117,
          "mag": 94
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 117
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 117
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 117
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "inquisitors-girandole": {
      "Standard": {
        "attack": {
          "phy": 102,
          "fir": 66
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "death-ritual-spear": {
      "Standard": {
        "attack": {
          "phy": 99,
          "mag": 64
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "bolt-of-gransax": {
      "Standard": {
        "attack": {
          "phy": 98,
          "lit": 63
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "lance": {
      "Standard": {
        "attack": {
          "phy": 123
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 118
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 118
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 118
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 118,
          "fir": 118
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 118,
          "fir": 118
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 118,
          "lit": 118
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 118,
          "hol": 118
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 118,
          "mag": 118
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 118,
          "mag": 94
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 118
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Occult": {
        "attack": {
          "phy": 118
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "treespear": {
      "Standard": {
        "attack": {
          "phy": 122,
          "hol": 79
        },
        "aecId": 10000,
        "reinforceId": 0
      }
    },
    "vykes-war-spear": {
      "Standard": {
        "attack": {
          "phy": 103,
          "fir": 66
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "serpent-hunter": {
      "Standard": {
        "attack": {
          "phy": 111
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "siluras-tree": {
      "Standard": {
        "attack": {
          "phy": 90,
          "hol": 90
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "mohgwyns-sacred-spear": {
      "Standard": {
        "attack": {
          "phy": 96,
          "fir": 62
        },
        "aecId": 10100,
        "reinforceId": 2200
      }
    },
    "halberd": {
      "Standard": {
        "attack": {
          "phy": 125
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
          "mag": 96
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
    "banished-knights-halberd": {
      "Standard": {
        "attack": {
          "phy": 125
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
          "mag": 96
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
    "lucerne": {
      "Standard": {
        "attack": {
          "phy": 121
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 116
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 116
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 116
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 116,
          "fir": 116
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 116,
          "fir": 116
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 116,
          "lit": 116
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 116,
          "hol": 116
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 116,
          "mag": 116
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 116,
          "mag": 93
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 116
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 116
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 116
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "glaive": {
      "Standard": {
        "attack": {
          "phy": 132
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 126
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 126
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 126
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 126,
          "fir": 126
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 126,
          "fir": 126
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 126,
          "lit": 126
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 126,
          "hol": 126
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 126,
          "mag": 126
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 126,
          "mag": 101
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 126
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 126
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 126
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "vulgar-militia-shotel": {
      "Standard": {
        "attack": {
          "phy": 121
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 116
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 116
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 116
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 116,
          "fir": 116
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 116,
          "fir": 116
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 116,
          "lit": 116
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 116,
          "hol": 116
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 116,
          "mag": 116
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 116,
          "mag": 93
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 116
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 116
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 116
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "vulgar-militia-saw": {
      "Standard": {
        "attack": {
          "phy": 126
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
          "mag": 96
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
    "guardians-swordspear": {
      "Standard": {
        "attack": {
          "phy": 139
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 133
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 133
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 133
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 133,
          "fir": 133
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 133,
          "fir": 133
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 133,
          "lit": 133
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 133,
          "hol": 133
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 133,
          "mag": 133
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 133,
          "mag": 106
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 133
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 133
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 133
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "nightrider-glaive": {
      "Standard": {
        "attack": {
          "phy": 129
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 123
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 123
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 123
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 123,
          "fir": 123
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 123,
          "fir": 123
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 123,
          "lit": 123
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 123,
          "hol": 123
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 123,
          "mag": 123
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 123,
          "mag": 98
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 123
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 123
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 123
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "pests-glaive": {
      "Standard": {
        "attack": {
          "phy": 120
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 115
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 115
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 115
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 115,
          "fir": 115
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 115,
          "fir": 115
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 115,
          "lit": 115
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 115,
          "hol": 115
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 115,
          "mag": 115
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 115,
          "mag": 92
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 115
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 115
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 115
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "gargoyles-halberd": {
      "Standard": {
        "attack": {
          "phy": 131
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 125
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 125
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 125
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 125,
          "fir": 125
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 125,
          "fir": 125
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 125,
          "lit": 125
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 125,
          "hol": 125
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 125,
          "mag": 125
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 125,
          "mag": 100
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 125
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 125
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 125
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "gargoyles-black-halberd": {
      "Standard": {
        "attack": {
          "phy": 103,
          "hol": 123
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "ripple-crescent-halberd": {
      "Standard": {
        "attack": {
          "phy": 86
        },
        "aecId": 10013,
        "reinforceId": 0
      }
    },
    "golden-halberd": {
      "Standard": {
        "attack": {
          "phy": 134,
          "hol": 87
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "dragon-halberd": {
      "Standard": {
        "attack": {
          "phy": 135
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "loretta-war-sickle": {
      "Standard": {
        "attack": {
          "phy": 110,
          "mag": 71
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "commanders-standard": {
      "Standard": {
        "attack": {
          "phy": 138
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "spirit-glaive": {
      "Standard": {
        "attack": {
          "phy": 121,
          "mag": 36
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "poleblade-of-the-bud": {
      "Standard": {
        "attack": {
          "phy": 131
        },
        "aecId": 15000,
        "reinforceId": 2200
      }
    },
    "scythe": {
      "Standard": {
        "attack": {
          "phy": 125
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
        "reinforceId": 5000
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
          "mag": 96
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
    "grave-scythe": {
      "Standard": {
        "attack": {
          "phy": 144
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 138
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 138
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 138
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 138,
          "fir": 138
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 138,
          "fir": 138
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 138,
          "lit": 138
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 138,
          "hol": 138
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 138,
          "mag": 138
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 138,
          "mag": 110
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 138
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 138
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 138
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "halo-scythe": {
      "Standard": {
        "attack": {
          "phy": 118,
          "hol": 76
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "winged-scythe": {
      "Standard": {
        "attack": {
          "phy": 87,
          "hol": 104
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "whip": {
      "Standard": {
        "attack": {
          "phy": 103
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 98
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 98
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 98
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 98,
          "fir": 98
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 98,
          "fir": 98
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 98,
          "lit": 98
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 98,
          "hol": 98
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 98,
          "mag": 98
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 98,
          "mag": 78
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 98
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 98
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 98
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "thorned-whip": {
      "Standard": {
        "attack": {
          "phy": 105
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 100
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 100
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 100
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 100,
          "fir": 100
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 100,
          "fir": 100
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 100,
          "lit": 100
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 100,
          "hol": 100
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 100,
          "mag": 100
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 100,
          "mag": 80
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 100
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 100
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 100
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "urumi": {
      "Standard": {
        "attack": {
          "phy": 101
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 96
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 96
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 96
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 96,
          "fir": 96
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 96,
          "fir": 96
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 96,
          "lit": 96
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 96,
          "hol": 96
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 96,
          "mag": 96
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 96,
          "mag": 77
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 96
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 96
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 96
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "hoslows-petal-whip": {
      "Standard": {
        "attack": {
          "phy": 113
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 108
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 108
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 108
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 108,
          "fir": 108
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 108,
          "fir": 108
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 108,
          "lit": 108
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 108,
          "hol": 108
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 108,
          "mag": 108
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 108,
          "mag": 86
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 108
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 108
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 108
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "magma-whip-candlestick": {
      "Standard": {
        "attack": {
          "phy": 74,
          "fir": 74
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "giants-red-braid": {
      "Standard": {
        "attack": {
          "phy": 84,
          "fir": 54
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "caestus": {
      "Standard": {
        "attack": {
          "phy": 90
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 86
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 86
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 86
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 86,
          "fir": 86
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 86,
          "fir": 86
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 86,
          "lit": 86
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 86,
          "hol": 86
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 86,
          "mag": 86
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 86,
          "mag": 69
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 86
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 86
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 86
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "spiked-caestus": {
      "Standard": {
        "attack": {
          "phy": 91
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 87
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 87
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 87
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 87,
          "fir": 87
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 87,
          "fir": 87
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 87,
          "lit": 87
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 87,
          "hol": 87
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 87,
          "mag": 87
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 87,
          "mag": 70
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 87
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 87
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 87
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "katar": {
      "Standard": {
        "attack": {
          "phy": 97
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 93
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 93
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 93
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 93,
          "fir": 93
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 93,
          "fir": 93
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 93,
          "lit": 93
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 93,
          "hol": 93
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 93,
          "mag": 93
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 93,
          "mag": 74
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 93
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 93
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 93
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "iron-ball": {
      "Standard": {
        "attack": {
          "phy": 101
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 96
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 96
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 96
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 96,
          "fir": 96
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 96,
          "fir": 96
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 96,
          "lit": 96
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 96,
          "hol": 96
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 96,
          "mag": 96
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 96,
          "mag": 77
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 96
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 96
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 96
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "star-fist": {
      "Standard": {
        "attack": {
          "phy": 105
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 100
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 100
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 100
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 100,
          "fir": 100
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 100,
          "fir": 100
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 100,
          "lit": 100
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 100,
          "hol": 100
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 100,
          "mag": 100
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 100,
          "mag": 80
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 100
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 100
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 100
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "clinging-bone": {
      "Standard": {
        "attack": {
          "phy": 80,
          "mag": 24
        },
        "aecId": 10100,
        "reinforceId": 2200
      }
    },
    "grafted-dragon": {
      "Standard": {
        "attack": {
          "phy": 89,
          "fir": 57
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "cipher-pata": {
      "Standard": {
        "attack": {
          "hol": 85
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "hookclaws": {
      "Standard": {
        "attack": {
          "phy": 93
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 89
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 89
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 89
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 89,
          "fir": 89
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 89,
          "fir": 89
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 89,
          "lit": 89
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 89,
          "hol": 89
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 89,
          "mag": 89
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 89,
          "mag": 71
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 89
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 89
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 89
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "venomous-fang": {
      "Standard": {
        "attack": {
          "phy": 97
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 93
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 93
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 93
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 93,
          "fir": 93
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 93,
          "fir": 93
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 93,
          "lit": 93
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 93,
          "hol": 93
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 93,
          "mag": 93
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 93,
          "mag": 74
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 93
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 93
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 93
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "bloodhound-claws": {
      "Standard": {
        "attack": {
          "phy": 99
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 95
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 95
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 95
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 95,
          "fir": 95
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 95,
          "fir": 95
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 95,
          "lit": 95
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 95,
          "hol": 95
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 95,
          "mag": 95
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 95,
          "mag": 76
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 95
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 95
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 95
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "raptor-talons": {
      "Standard": {
        "attack": {
          "phy": 86
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 82
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 82
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 82
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 82,
          "fir": 82
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 82,
          "fir": 82
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 82,
          "lit": 82
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 82,
          "hol": 82
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 82,
          "mag": 82
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 82,
          "mag": 66
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 82
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 82
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 82
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "giant-crusher": {
      "Standard": {
        "attack": {
          "phy": 155
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 150
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 150
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 150
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 150,
          "fir": 150
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 150,
          "fir": 150
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 150,
          "lit": 150
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 150,
          "hol": 150
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 150,
          "mag": 150
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 150,
          "mag": 113
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 150
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 150
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 150
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "prelates-inferno-crozier": {
      "Standard": {
        "attack": {
          "phy": 156
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 151
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 151
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 151
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 151,
          "fir": 151
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 151,
          "fir": 151
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 151,
          "lit": 151
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 151,
          "hol": 151
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 151,
          "mag": 151
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 151,
          "mag": 113
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 151
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 151
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 151
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "duelist-greataxe": {
      "Standard": {
        "attack": {
          "phy": 170
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 164
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 164
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 164
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 164,
          "fir": 164
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 164,
          "fir": 164
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 164,
          "lit": 164
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 164,
          "hol": 164
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 164,
          "mag": 164
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 164,
          "mag": 123
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 164
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 164
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 164
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "rotten-greataxe": {
      "Standard": {
        "attack": {
          "phy": 162
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 157
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 157
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 157
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 157,
          "fir": 157
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 157,
          "fir": 157
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 157,
          "lit": 157
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 157,
          "hol": 157
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 157,
          "mag": 157
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 157,
          "mag": 118
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 157
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 157
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 157
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "golems-halberd": {
      "Standard": {
        "attack": {
          "phy": 158
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 153
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 153
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 153
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 153,
          "fir": 153
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 153,
          "fir": 153
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 153,
          "lit": 153
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 153,
          "hol": 153
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 153,
          "mag": 153
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 153,
          "mag": 115
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 153
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 153
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 153
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "troll-knight-great-club": {},
    "dragon-greatclaw": {
      "Standard": {
        "attack": {
          "phy": 120,
          "lit": 78
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "staff-of-the-avatar": {
      "Standard": {
        "attack": {
          "phy": 113,
          "hol": 73
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "ghizas-wheel": {
      "Standard": {
        "attack": {
          "phy": 156
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "fallingstar-beast-jaw": {
      "Standard": {
        "attack": {
          "phy": 131,
          "mag": 85
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "axe-of-godfrey": {
      "Standard": {
        "attack": {
          "phy": 165
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "milady": {
      "Standard": {
        "attack": {
          "phy": 116
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 112
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 112
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 112
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 112,
          "fir": 112
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 112,
          "fir": 112
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 112,
          "lit": 112
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 112,
          "hol": 112
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 112,
          "mag": 112
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 112,
          "mag": 95
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 112
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 112
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 112
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "ledas-sword": {
      "Standard": {
        "attack": {
          "phy": 101,
          "hol": 65
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "rellanas-twin-blades": {
      "Standard": {
        "attack": {
          "phy": 103,
          "mag": 66,
          "fir": 66
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "great-katana": {
      "Standard": {
        "attack": {
          "phy": 145
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 140
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 140
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 140
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 140,
          "fir": 140
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 140,
          "fir": 140
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 140,
          "lit": 140
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 140,
          "hol": 140
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 140,
          "mag": 140
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 140,
          "mag": 119
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 140
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 140
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 140
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "dragon-hunters-great-katana": {
      "Standard": {
        "attack": {
          "phy": 152
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "rakshasas-great-katana": {
      "Standard": {
        "attack": {
          "phy": 155
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "backhand-blade": {
      "Standard": {
        "attack": {
          "phy": 105
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 100
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 100
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 100
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 100,
          "fir": 100
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 100,
          "fir": 100
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 100,
          "lit": 100
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 100,
          "hol": 100
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 100,
          "mag": 100
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 100,
          "mag": 85
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 100
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 100
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 100
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "smithscript-cirque": {
      "Standard": {
        "attack": {
          "phy": 100
        },
        "aecId": 20010100,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 90
        },
        "aecId": 20010100,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 90
        },
        "aecId": 20010100,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 90
        },
        "aecId": 20010100,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 90,
          "fir": 90
        },
        "aecId": 20010101,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 90,
          "fir": 90
        },
        "aecId": 20010103,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 90,
          "lit": 90
        },
        "aecId": 20010100,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 90,
          "hol": 90
        },
        "aecId": 20010105,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 90,
          "mag": 90
        },
        "aecId": 20010104,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 90,
          "mag": 77
        },
        "aecId": 20010104,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 90
        },
        "aecId": 20010102,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 90
        },
        "aecId": 20010102,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 90
        },
        "aecId": 20010102,
        "reinforceId": 1200
      }
    },
    "curseblades-cirque": {
      "Standard": {
        "attack": {
          "phy": 108
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "smithscript-dagger": {
      "Standard": {
        "attack": {
          "phy": 62
        },
        "aecId": 20010100,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 55
        },
        "aecId": 20010100,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 55
        },
        "aecId": 20010100,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 55
        },
        "aecId": 20010100,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 55,
          "fir": 55
        },
        "aecId": 20010101,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 55,
          "fir": 55
        },
        "aecId": 20010103,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 55,
          "lit": 55
        },
        "aecId": 20010100,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 55,
          "hol": 55
        },
        "aecId": 20010105,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 55,
          "mag": 55
        },
        "aecId": 20010104,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 55,
          "mag": 47
        },
        "aecId": 20010104,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 55
        },
        "aecId": 20010102,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 55
        },
        "aecId": 20010102,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 55
        },
        "aecId": 20010102,
        "reinforceId": 1200
      }
    },
    "dryleaf-arts": {
      "Standard": {
        "attack": {
          "phy": 86
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 82
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 82
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 82
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 82,
          "fir": 82
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 82,
          "fir": 82
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 82,
          "lit": 82
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 82,
          "hol": 82
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 82,
          "mag": 82
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 82,
          "mag": 70
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 82
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 82
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 82
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "danes-footwork": {
      "Standard": {
        "attack": {
          "phy": 86
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 82
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 82
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 82
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 82,
          "fir": 82
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 82,
          "fir": 82
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 82,
          "lit": 82
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 82,
          "hol": 82
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 82,
          "mag": 82
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 82,
          "mag": 70
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 82
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 82
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 82
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "beast-claw": {
      "Standard": {
        "attack": {
          "phy": 98
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 94
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 94
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 94
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 94,
          "fir": 94
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 94,
          "fir": 94
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 94,
          "lit": 94
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 94,
          "hol": 94
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 94,
          "mag": 94
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 94,
          "mag": 80
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 94
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 94
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 94
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "red-bears-claw": {
      "Standard": {
        "attack": {
          "phy": 104
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "firespark-perfume": {
      "Standard": {
        "attack": {
          "fir": 110
        },
        "aecId": 20000000,
        "reinforceId": 0
      }
    },
    "chilling-perfume": {
      "Standard": {
        "attack": {
          "mag": 105
        },
        "aecId": 20000000,
        "reinforceId": 0
      }
    },
    "frenzyflame-perfume": {
      "Standard": {
        "attack": {
          "fir": 105
        },
        "aecId": 20000000,
        "reinforceId": 0
      }
    },
    "lightning-perfume": {
      "Standard": {
        "attack": {
          "lit": 110
        },
        "aecId": 20000000,
        "reinforceId": 0
      }
    },
    "deadly-poison-perfume": {
      "Standard": {
        "attack": {
          "phy": 92
        },
        "aecId": 20000000,
        "reinforceId": 2200
      }
    },
    "staff-of-the-great-beyond": {
      "Standard": {
        "attack": {
          "phy": 27
        },
        "aecId": 20010,
        "reinforceId": 2400
      }
    },
    "maternal-staff": {
      "Standard": {
        "attack": {
          "phy": 26
        },
        "aecId": 20030,
        "reinforceId": 1900
      }
    },
    "astrologers-staff": {
      "Standard": {
        "attack": {
          "phy": 25
        },
        "aecId": 20000,
        "reinforceId": 1900
      }
    },
    "glintstone-staff": {
      "Standard": {
        "attack": {
          "phy": 25
        },
        "aecId": 20000,
        "reinforceId": 1900
      }
    },
    "academy-glintstone-staff": {
      "Standard": {
        "attack": {
          "phy": 25
        },
        "aecId": 20000,
        "reinforceId": 1900
      }
    },
    "diggers-staff": {
      "Standard": {
        "attack": {
          "phy": 38
        },
        "aecId": 20000,
        "reinforceId": 1900
      }
    },
    "demi-human-queens-staff": {
      "Standard": {
        "attack": {
          "phy": 31
        },
        "aecId": 20000,
        "reinforceId": 1900
      }
    },
    "azurs-glintstone-staff": {
      "Standard": {
        "attack": {
          "phy": 24
        },
        "aecId": 20000,
        "reinforceId": 2400
      }
    },
    "lusats-glintstone-staff": {
      "Standard": {
        "attack": {
          "phy": 24
        },
        "aecId": 20000,
        "reinforceId": 2400
      }
    },
    "carian-glintstone-staff": {
      "Standard": {
        "attack": {
          "phy": 25
        },
        "aecId": 20000,
        "reinforceId": 1900
      }
    },
    "carian-glintblade-staff": {
      "Standard": {
        "attack": {
          "phy": 22
        },
        "aecId": 20000,
        "reinforceId": 1900
      }
    },
    "carian-regal-scepter": {
      "Standard": {
        "attack": {
          "phy": 24
        },
        "aecId": 20000,
        "reinforceId": 2400
      }
    },
    "albinauric-staff": {
      "Standard": {
        "attack": {
          "phy": 17
        },
        "aecId": 20030,
        "reinforceId": 1900
      }
    },
    "staff-of-loss": {
      "Standard": {
        "attack": {
          "phy": 22
        },
        "aecId": 20000,
        "reinforceId": 1900
      }
    },
    "gelmir-glintstone-staff": {
      "Standard": {
        "attack": {
          "phy": 29
        },
        "aecId": 20010,
        "reinforceId": 1900
      }
    },
    "crystal-staff": {
      "Standard": {
        "attack": {
          "phy": 31
        },
        "aecId": 20000,
        "reinforceId": 2400
      }
    },
    "rotten-crystal-staff": {
      "Standard": {
        "attack": {
          "phy": 42
        },
        "aecId": 20000,
        "reinforceId": 2400
      }
    },
    "meteorite-staff": {
      "Standard": {
        "attack": {
          "phy": 39
        },
        "aecId": 20000,
        "reinforceId": 3000
      }
    },
    "staff-of-the-guilty": {
      "Standard": {
        "attack": {
          "phy": 38
        },
        "aecId": 20020,
        "reinforceId": 1900
      }
    },
    "prince-of-deaths-staff": {
      "Standard": {
        "attack": {
          "phy": 25
        },
        "aecId": 20010,
        "reinforceId": 1900
      }
    },
    "dryleaf-seal": {
      "Standard": {
        "attack": {
          "phy": 25
        },
        "aecId": 30000,
        "reinforceId": 1900
      }
    },
    "fire-knights-seal": {
      "Standard": {
        "attack": {
          "phy": 25
        },
        "aecId": 30000,
        "reinforceId": 1900
      }
    },
    "spiraltree-seal": {
      "Standard": {
        "attack": {
          "phy": 25
        },
        "aecId": 30000,
        "reinforceId": 1900
      }
    },
    "finger-seal": {
      "Standard": {
        "attack": {
          "phy": 25
        },
        "aecId": 30000,
        "reinforceId": 1900
      }
    },
    "erdtree-seal": {
      "Standard": {
        "attack": {
          "phy": 25,
          "hol": 15
        },
        "aecId": 30000,
        "reinforceId": 2400
      }
    },
    "golden-order-seal": {
      "Standard": {
        "attack": {
          "phy": 24
        },
        "aecId": 30010,
        "reinforceId": 2400
      }
    },
    "gravel-stone-seal": {
      "Standard": {
        "attack": {
          "phy": 25
        },
        "aecId": 30000,
        "reinforceId": 1900
      }
    },
    "giants-seal": {
      "Standard": {
        "attack": {
          "phy": 25
        },
        "aecId": 30000,
        "reinforceId": 1900
      }
    },
    "godslayers-seal": {
      "Standard": {
        "attack": {
          "phy": 25
        },
        "aecId": 30000,
        "reinforceId": 1900
      }
    },
    "clawmark-seal": {
      "Standard": {
        "attack": {
          "phy": 31
        },
        "aecId": 30020,
        "reinforceId": 1900
      }
    },
    "frenzied-flame-seal": {
      "Standard": {
        "attack": {
          "phy": 25
        },
        "aecId": 30040,
        "reinforceId": 2400
      }
    },
    "dragon-communion-seal": {
      "Standard": {
        "attack": {
          "phy": 25
        },
        "aecId": 30030,
        "reinforceId": 2400
      }
    },
    "erdsteel-dagger": {
      "Standard": {
        "attack": {
          "phy": 67
        },
        "aecId": 12000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 64
        },
        "aecId": 12000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 64
        },
        "aecId": 12000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 64
        },
        "aecId": 12000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 64,
          "fir": 64
        },
        "aecId": 12005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 64,
          "fir": 64
        },
        "aecId": 12000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 64,
          "lit": 64
        },
        "aecId": 12000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 64,
          "hol": 64
        },
        "aecId": 12000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 64,
          "mag": 64
        },
        "aecId": 12000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 64,
          "mag": 54
        },
        "aecId": 12000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 64
        },
        "aecId": 12005,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 64
        },
        "aecId": 12005,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 64
        },
        "aecId": 12005,
        "reinforceId": 1200
      }
    },
    "celebrants-sickle": {
      "Standard": {
        "attack": {
          "phy": 79
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 75
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 75
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 75
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 75,
          "fir": 75
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 75,
          "fir": 75
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 75,
          "lit": 75
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 75,
          "hol": 75
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 75,
          "mag": 75
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 75,
          "mag": 64
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 75
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 75
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 75
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "ivory-sickle": {
      "Standard": {
        "attack": {
          "phy": 60,
          "mag": 60
        },
        "aecId": 10000,
        "reinforceId": 0
      }
    },
    "crystal-knife": {
      "Standard": {
        "attack": {
          "phy": 82,
          "mag": 53
        },
        "aecId": 10000,
        "reinforceId": 0
      }
    },
    "scorpions-stinger": {
      "Standard": {
        "attack": {
          "phy": 79
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "cinquedea": {
      "Standard": {
        "attack": {
          "phy": 98
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "velvet-sword-of-st-trina": {
      "Standard": {
        "attack": {
          "phy": 95,
          "mag": 61
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "stone-sheathed-sword": {
      "Standard": {
        "attack": {
          "phy": 89
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "weathered-straight-sword": {
      "Standard": {
        "attack": {
          "phy": 103
        },
        "aecId": 10000,
        "reinforceId": 0
      }
    },
    "cane-sword": {
      "Standard": {
        "attack": {
          "phy": 96
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 92
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 92
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 92
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 92,
          "fir": 92
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 92,
          "fir": 92
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 92,
          "lit": 92
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 92,
          "hol": 92
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 92,
          "mag": 92
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 92,
          "mag": 74
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 92
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 92
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 92
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "lazuli-glintstone-sword": {
      "Standard": {
        "attack": {
          "phy": 79,
          "mag": 94
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "rotten-crystal-sword": {
      "Standard": {
        "attack": {
          "phy": 102,
          "mag": 66
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "ornamental-straight-sword": {
      "Standard": {
        "attack": {
          "phy": 101
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "sword-of-st-trina": {
      "Standard": {
        "attack": {
          "phy": 107,
          "mag": 32
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "greatsword-of-damnation": {
      "Standard": {
        "attack": {
          "phy": 123,
          "hol": 79
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "greatsword-of-solitude": {
      "Standard": {
        "attack": {
          "phy": 120
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "lordsworns-greatsword": {
      "Standard": {
        "attack": {
          "phy": 136
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
          "phy": 131,
          "lit": 131
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
          "mag": 98
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
    "forked-greatsword": {
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
          "mag": 90
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
    "gargoyles-greatsword": {
      "Standard": {
        "attack": {
          "phy": 133
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 129
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 129
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 129
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 129,
          "fir": 129
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 129,
          "fir": 129
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 129,
          "lit": 129
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 129,
          "hol": 129
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 129,
          "mag": 129
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 129,
          "mag": 97
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 129
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 129
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 129
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "gargoyles-blackblade": {
      "Standard": {
        "attack": {
          "phy": 102,
          "hol": 122
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "inseparable-sword": {
      "Standard": {
        "attack": {
          "phy": 98,
          "hol": 98
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "sword-of-milos": {
      "Standard": {
        "attack": {
          "phy": 141
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "ordoviss-greatsword": {
      "Standard": {
        "attack": {
          "phy": 107,
          "hol": 69
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "alabaster-lords-sword": {
      "Standard": {
        "attack": {
          "phy": 128,
          "mag": 38
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "deaths-poker": {
      "Standard": {
        "attack": {
          "phy": 123,
          "mag": 36
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "helphens-steeple": {
      "Standard": {
        "attack": {
          "phy": 101,
          "mag": 101
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "cleanrot-knights-sword": {
      "Standard": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 104
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 104
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 104
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 104,
          "fir": 104
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 104,
          "fir": 104
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 104,
          "lit": 104
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 104,
          "hol": 104
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 104,
          "mag": 104
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 104,
          "mag": 83
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 104
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 104
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 104
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "sword-lance": {
      "Standard": {
        "attack": {
          "phy": 132
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 126
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 126
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 126
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 126,
          "fir": 126
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 126,
          "fir": 126
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 126,
          "lit": 126
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 126,
          "hol": 126
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 126,
          "mag": 126
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 126,
          "mag": 107
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 126
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 126
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 126
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "queeligns-greatsword": {
      "Standard": {
        "attack": {
          "phy": 122,
          "fir": 36
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 106,
          "fir": 29
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 106,
          "fir": 29
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 106,
          "fir": 29
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 106,
          "fir": 133
        },
        "aecId": 20010500,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 106,
          "fir": 133
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 106,
          "fir": 29,
          "lit": 106
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 106,
          "fir": 29,
          "hol": 106
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 106,
          "mag": 106,
          "fir": 29
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 106,
          "mag": 90,
          "fir": 29
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 106,
          "fir": 29
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 106,
          "fir": 29
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 106,
          "fir": 29
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "spirit-sword": {
      "Standard": {
        "attack": {
          "phy": 92,
          "mag": 59
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "falx": {
      "Standard": {
        "attack": {
          "phy": 107
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "dancing-blade-of-ranah": {
      "Standard": {
        "attack": {
          "phy": 88
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "horned-warriors-sword": {
      "Standard": {
        "attack": {
          "phy": 108
        },
        "aecId": 12000,
        "reinforceId": 2200
      }
    },
    "grossmesser": {
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
        "reinforceId": 200
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
          "mag": 88
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
    "mantis-blade": {
      "Standard": {
        "attack": {
          "phy": 112
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 107
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 107
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 107
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 107,
          "fir": 107
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 107,
          "fir": 107
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 107,
          "lit": 107
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 107,
          "hol": 107
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 107,
          "mag": 107
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 107,
          "mag": 86
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 107
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 107
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 107
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "flowing-curved-sword": {
      "Standard": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 0
      }
    },
    "serpent-gods-curved-sword": {
      "Standard": {
        "attack": {
          "phy": 113
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 108
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 108
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 108
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 108,
          "fir": 108
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 108,
          "fir": 108
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 108,
          "lit": 108
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 108,
          "hol": 108
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 108,
          "mag": 108
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 108,
          "mag": 86
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 108
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 108
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 108
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "nox-flowing-sword": {
      "Standard": {
        "attack": {
          "phy": 112
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "horned-warriors-greatsword": {
      "Standard": {
        "attack": {
          "phy": 130
        },
        "aecId": 12000,
        "reinforceId": 2200
      }
    },
    "freyjas-greatsword": {
      "Standard": {
        "attack": {
          "phy": 146
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 140
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 140
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 140
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 140,
          "fir": 140
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 140,
          "fir": 140
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 140,
          "lit": 140
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 140,
          "hol": 140
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 140,
          "mag": 140
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 140,
          "mag": 119
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 140
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 140
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 140
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "omen-cleaver": {
      "Standard": {
        "attack": {
          "phy": 142
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 136
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 136
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 136
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 136,
          "fir": 136
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 136,
          "fir": 136
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 136,
          "lit": 136
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 136,
          "hol": 136
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 136,
          "mag": 136
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 136,
          "mag": 109
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 136
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 136
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 136
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "beastmans-cleaver": {
      "Standard": {
        "attack": {
          "phy": 143
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 137
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 137
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 137
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 137,
          "fir": 137
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 137,
          "fir": 137
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 137,
          "lit": 137
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 137,
          "hol": 137
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 137,
          "mag": 137
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 137,
          "mag": 110
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 137
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 137
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 137
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "zamor-curved-sword": {
      "Standard": {
        "attack": {
          "phy": 130
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "star-lined-sword": {
      "Standard": {
        "attack": {
          "phy": 82,
          "mag": 82
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "sword-of-night": {
      "Standard": {
        "attack": {
          "phy": 110,
          "mag": 33
        },
        "aecId": 20010000,
        "reinforceId": 2200
      }
    },
    "black-steel-twinblade": {
      "Standard": {
        "attack": {
          "phy": 112,
          "hol": 33
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 107,
          "hol": 33
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 107,
          "hol": 33
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 107,
          "hol": 33
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 107,
          "fir": 107,
          "hol": 33
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 107,
          "fir": 107,
          "hol": 33
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 107,
          "lit": 107,
          "hol": 33
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 107,
          "hol": 132
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 107,
          "mag": 107,
          "hol": 33
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 107,
          "mag": 91,
          "hol": 33
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 107,
          "hol": 33
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 107,
          "hol": 33
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 107,
          "hol": 33
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "euporia": {
      "Standard": {
        "attack": {
          "phy": 84,
          "hol": 100
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "gargoyles-twinblade": {
      "Standard": {
        "attack": {
          "phy": 123
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 118
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 118
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 118
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 118,
          "fir": 118
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 118,
          "fir": 118
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 118,
          "lit": 118
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 118,
          "hol": 118
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 118,
          "mag": 118
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 118,
          "mag": 94
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 118
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 118
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 118
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "gargoyles-black-blades": {
      "Standard": {
        "attack": {
          "phy": 81,
          "hol": 97
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "forked-tongue-hatchet": {
      "Standard": {
        "attack": {
          "phy": 125
        },
        "aecId": 10000,
        "reinforceId": 0
      }
    },
    "smithscript-axe": {
      "Standard": {
        "attack": {
          "phy": 131
        },
        "aecId": 20010100,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 125
        },
        "aecId": 20010100,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 125
        },
        "aecId": 20010100,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 125
        },
        "aecId": 20010100,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 125,
          "fir": 125
        },
        "aecId": 20010101,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 125,
          "fir": 125
        },
        "aecId": 20010103,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 125,
          "lit": 125
        },
        "aecId": 20010100,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 125,
          "hol": 125
        },
        "aecId": 20010105,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 125,
          "mag": 125
        },
        "aecId": 20010104,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 125,
          "mag": 106
        },
        "aecId": 20010104,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 125
        },
        "aecId": 20010102,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 125
        },
        "aecId": 20010102,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 125
        },
        "aecId": 20010102,
        "reinforceId": 1200
      }
    },
    "messmer-soldiers-axe": {
      "Standard": {
        "attack": {
          "phy": 133
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 127
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 127
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 127
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 127,
          "fir": 127
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 127,
          "fir": 127
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 127,
          "lit": 127
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 127,
          "hol": 127
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 127,
          "mag": 127
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 127,
          "mag": 108
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 127
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 127
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 127
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "death-knights-twin-axes": {
      "Standard": {
        "attack": {
          "phy": 101,
          "lit": 65
        },
        "aecId": 20010300,
        "reinforceId": 2200
      }
    },
    "forked-hatchet": {
      "Standard": {
        "attack": {
          "phy": 113
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 108
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 108
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 108
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 108,
          "fir": 108
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 108,
          "fir": 108
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 108,
          "lit": 108
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 108,
          "hol": 108
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 108,
          "mag": 108
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 108,
          "mag": 86
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 108
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 108
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 108
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "warped-axe": {
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
        "reinforceId": 6000
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
          "mag": 90
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
    "jawbone-axe": {
      "Standard": {
        "attack": {
          "phy": 130
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 124
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 124
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 124
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 124,
          "fir": 124
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 124,
          "fir": 124
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 124,
          "lit": 124
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 124,
          "hol": 124
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 124,
          "mag": 124
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 124,
          "mag": 99
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 124
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 124
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 124
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "iron-cleaver": {
      "Standard": {
        "attack": {
          "phy": 125
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 120
        },
        "aecId": 10000,
        "reinforceId": 6000
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
          "mag": 96
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
    "celebrants-cleaver": {
      "Standard": {
        "attack": {
          "phy": 125
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
          "mag": 96
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
    "sacrificial-axe": {
      "Standard": {
        "attack": {
          "phy": 133
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 127
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 127
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 127
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 127,
          "fir": 127
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 127,
          "fir": 127
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 127,
          "lit": 127
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 127,
          "hol": 127
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 127,
          "mag": 127
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 127,
          "mag": 102
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 127
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 127
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 127
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "ripple-blade": {
      "Standard": {
        "attack": {
          "phy": 75
        },
        "aecId": 10013,
        "reinforceId": 0
      }
    },
    "putrescence-cleaver": {
      "Standard": {
        "attack": {
          "phy": 141,
          "mag": 42
        },
        "aecId": 10100,
        "reinforceId": 2200
      }
    },
    "death-knights-longhaft-axe": {
      "Standard": {
        "attack": {
          "phy": 113,
          "lit": 73
        },
        "aecId": 20010300,
        "reinforceId": 2200
      }
    },
    "bonny-butchering-knife": {
      "Standard": {
        "attack": {
          "phy": 134
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "longhaft-axe": {
      "Standard": {
        "attack": {
          "phy": 146
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 141
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 141
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 141
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 141,
          "fir": 141
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 141,
          "fir": 141
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 141,
          "lit": 141
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 141,
          "hol": 141
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 141,
          "mag": 141
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 141,
          "mag": 106
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 141
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 141
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 141
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "great-omenkiller-cleaver": {
      "Standard": {
        "attack": {
          "phy": 142
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 137
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 137
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 137
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 137,
          "fir": 137
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 137,
          "fir": 137
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 137,
          "lit": 137
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 137,
          "hol": 137
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 137,
          "mag": 137
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 137,
          "mag": 103
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 137
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 137
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 137
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "gargoyles-great-axe": {
      "Standard": {
        "attack": {
          "phy": 123
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 119
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 119
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 119
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 119,
          "fir": 119
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 119,
          "fir": 119
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 119,
          "lit": 119
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 119,
          "hol": 119
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 119,
          "mag": 119
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 119,
          "mag": 89
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 119
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 119
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 119
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "gargoyles-black-axe": {
      "Standard": {
        "attack": {
          "phy": 100,
          "hol": 120
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "winged-greathorn": {
      "Standard": {
        "attack": {
          "phy": 130
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "flowerstone-gavel": {
      "Standard": {
        "attack": {
          "phy": 121
        },
        "aecId": 15000,
        "reinforceId": 2200
      }
    },
    "curved-club": {
      "Standard": {
        "attack": {
          "phy": 114
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 109,
          "fir": 109
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 109,
          "fir": 109
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 109,
          "lit": 109
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 109,
          "hol": 109
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 109,
          "mag": 109
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 109,
          "mag": 87
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 109
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 109
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 109
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "spiked-club": {
      "Standard": {
        "attack": {
          "phy": 114
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 109,
          "fir": 109
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 109,
          "fir": 109
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 109,
          "lit": 109
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 109,
          "hol": 109
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 109,
          "mag": 109
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 109,
          "mag": 87
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 109
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 109
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 109
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "stone-club": {
      "Standard": {
        "attack": {
          "phy": 122
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 117
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 117
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 117
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 117,
          "fir": 117
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 117,
          "fir": 117
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 117,
          "lit": 117
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 117,
          "hol": 117
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 117,
          "mag": 117
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 117,
          "mag": 94
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 117
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 117
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 117
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "monks-flamemace": {
      "Standard": {
        "attack": {
          "phy": 126
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
        "reinforceId": 5000
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
          "mag": 96
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
    "nox-flowing-hammer": {
      "Standard": {
        "attack": {
          "phy": 122
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "ringed-finger": {
      "Standard": {
        "attack": {
          "phy": 121
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "scepter-of-the-all-knowing": {
      "Standard": {
        "attack": {
          "phy": 99,
          "mag": 64
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "black-steel-greathammer": {
      "Standard": {
        "attack": {
          "phy": 140,
          "hol": 42
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 133,
          "hol": 42
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 133,
          "hol": 42
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 133,
          "hol": 42
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 133,
          "fir": 133,
          "hol": 42
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 133,
          "fir": 133,
          "hol": 42
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 133,
          "lit": 133,
          "hol": 42
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 133,
          "hol": 165
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 133,
          "mag": 133,
          "hol": 42
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 133,
          "mag": 113,
          "hol": 42
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 133,
          "hol": 42
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 133,
          "hol": 42
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 133,
          "hol": 42
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "smithscript-greathammer": {
      "Standard": {
        "attack": {
          "phy": 141
        },
        "aecId": 20010100,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 133
        },
        "aecId": 20010100,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 133
        },
        "aecId": 20010100,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 133
        },
        "aecId": 20010100,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 133,
          "fir": 133
        },
        "aecId": 20010101,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 133,
          "fir": 133
        },
        "aecId": 20010103,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 133,
          "lit": 133
        },
        "aecId": 20010100,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 133,
          "hol": 133
        },
        "aecId": 20010105,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 133,
          "mag": 133
        },
        "aecId": 20010104,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 133,
          "mag": 113
        },
        "aecId": 20010104,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 133
        },
        "aecId": 20010102,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 133
        },
        "aecId": 20010102,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 133
        },
        "aecId": 20010102,
        "reinforceId": 1200
      }
    },
    "large-club": {
      "Standard": {
        "attack": {
          "phy": 131
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 127
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 127
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 127
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 127,
          "fir": 127
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 127,
          "fir": 127
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 127,
          "lit": 127
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 127,
          "hol": 127
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 127,
          "mag": 127
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 127,
          "mag": 95
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 127
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 127
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 127
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "curved-great-club": {
      "Standard": {
        "attack": {
          "phy": 145
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 140
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 140
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 140
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 140,
          "fir": 140
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 140,
          "fir": 140
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 140,
          "lit": 140
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 140,
          "hol": 140
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 140,
          "mag": 140
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 140,
          "mag": 105
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 140
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 140
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 140
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "great-mace": {
      "Standard": {
        "attack": {
          "phy": 134
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 129
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 129
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 129
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 129,
          "fir": 129
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 129,
          "fir": 129
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 129,
          "lit": 129
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 129,
          "hol": 129
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 129,
          "mag": 129
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 129,
          "mag": 97
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 129
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 129
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 129
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "battle-hammer": {
      "Standard": {
        "attack": {
          "phy": 131
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 127
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 127
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 127
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 127,
          "fir": 127
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 127,
          "fir": 127
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 127,
          "lit": 127
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 127,
          "hol": 127
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 127,
          "mag": 127
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 127,
          "mag": 95
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 127
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 127
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 127
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "rotten-battle-hammer": {
      "Standard": {
        "attack": {
          "phy": 126
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 122
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 122
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 122
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 122,
          "fir": 122
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 122,
          "fir": 122
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 122,
          "lit": 122
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 122,
          "hol": 122
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 122,
          "mag": 122
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 122,
          "mag": 92
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 122
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 122
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 122
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "celebrants-skull": {
      "Standard": {
        "attack": {
          "phy": 138
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 133
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 133
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 133
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 133,
          "fir": 133
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 133,
          "fir": 133
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 133,
          "lit": 133
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 133,
          "hol": 133
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 133,
          "mag": 133
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 133,
          "mag": 100
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 133
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 133
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 133
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "greathorn-hammer": {
      "Standard": {
        "attack": {
          "phy": 134
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 129
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 129
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 129
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 129,
          "fir": 129
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 129,
          "fir": 129
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 129,
          "lit": 129
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 129,
          "hol": 129
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 129,
          "mag": 129
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 129,
          "mag": 97
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 129
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 129
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 129
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "envoys-long-horn": {
      "Standard": {
        "attack": {
          "phy": 120,
          "hol": 78
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "cranial-vessel-candlestand": {
      "Standard": {
        "attack": {
          "phy": 98,
          "fir": 98
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "beastclaw-greathammer": {
      "Standard": {
        "attack": {
          "phy": 116,
          "hol": 75
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "serpent-flail": {
      "Standard": {
        "attack": {
          "phy": 77,
          "fir": 92
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "smithscript-spear": {
      "Standard": {
        "attack": {
          "phy": 107
        },
        "aecId": 20010100,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 98
        },
        "aecId": 20010100,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 98
        },
        "aecId": 20010100,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 98
        },
        "aecId": 20010100,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 98,
          "fir": 98
        },
        "aecId": 20010101,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 98,
          "fir": 98
        },
        "aecId": 20010103,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 98,
          "lit": 98
        },
        "aecId": 20010100,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 98,
          "hol": 98
        },
        "aecId": 20010105,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 98,
          "mag": 98
        },
        "aecId": 20010104,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 98,
          "mag": 83
        },
        "aecId": 20010104,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 98
        },
        "aecId": 20010102,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 98
        },
        "aecId": 20010102,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 98
        },
        "aecId": 20010102,
        "reinforceId": 1200
      }
    },
    "swift-spear": {
      "Standard": {
        "attack": {
          "phy": 99
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 92
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 92
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 92
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 92,
          "fir": 97
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 92,
          "fir": 97
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 92,
          "lit": 97
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 92,
          "hol": 97
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 92,
          "mag": 97
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 92,
          "mag": 82
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 92
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 92
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 92
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "bloodfiends-fork": {
      "Standard": {
        "attack": {
          "phy": 103
        },
        "aecId": 20010600,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 98
        },
        "aecId": 20010600,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 98
        },
        "aecId": 20010600,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 98
        },
        "aecId": 20010600,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 98,
          "fir": 98
        },
        "aecId": 20010601,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 98,
          "fir": 98
        },
        "aecId": 20010600,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 98,
          "lit": 98
        },
        "aecId": 20010600,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 98,
          "hol": 98
        },
        "aecId": 20010600,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 98,
          "mag": 98
        },
        "aecId": 20010600,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 98,
          "mag": 83
        },
        "aecId": 20010600,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 98
        },
        "aecId": 20010600,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 98
        },
        "aecId": 20010600,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 98
        },
        "aecId": 20010600,
        "reinforceId": 1200
      }
    },
    "iron-spear": {
      "Standard": {
        "attack": {
          "phy": 114
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 109,
          "fir": 109
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 109,
          "fir": 109
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 109,
          "lit": 109
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 109,
          "hol": 109
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 109,
          "mag": 109
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 109,
          "mag": 87
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 109
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 109
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 109
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "spiked-spear": {
      "Standard": {
        "attack": {
          "phy": 120
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 115
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 115
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 115
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 115,
          "fir": 115
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 115,
          "fir": 115
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 115,
          "lit": 115
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 115,
          "hol": 115
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 115,
          "mag": 115
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 115,
          "mag": 92
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 115
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 115
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 115
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "claymans-harpoon": {
      "Standard": {
        "attack": {
          "phy": 99,
          "mag": 64
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 95,
          "mag": 51
        },
        "aecId": 10000,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 95,
          "mag": 51
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 95,
          "mag": 51
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 95,
          "mag": 51,
          "fir": 95
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 95,
          "mag": 51,
          "fir": 95
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 95,
          "mag": 51,
          "lit": 95
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 95,
          "mag": 51,
          "hol": 95
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 95,
          "mag": 127
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 95,
          "mag": 127
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 95,
          "mag": 51
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 95,
          "mag": 51
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 95,
          "mag": 51
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "celebrants-rib-rake": {
      "Standard": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 104
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 104
        },
        "aecId": 10000,
        "reinforceId": 5000
      },
      "Quality": {
        "attack": {
          "phy": 104
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 104,
          "fir": 104
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 104,
          "fir": 104
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 104,
          "lit": 104
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 104,
          "hol": 104
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 104,
          "mag": 104
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 104,
          "mag": 83
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 104
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 104
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 104
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "torchpole": {
      "Standard": {
        "attack": {
          "phy": 104,
          "fir": 31
        },
        "aecId": 10000,
        "reinforceId": 0
      }
    },
    "crystal-spear": {
      "Standard": {
        "attack": {
          "phy": 110,
          "mag": 33
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "rotten-crystal-spear": {
      "Standard": {
        "attack": {
          "phy": 104,
          "mag": 31
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "cleanrot-spear": {
      "Standard": {
        "attack": {
          "phy": 102,
          "hol": 66
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "bloodfiends-sacred-spear": {
      "Standard": {
        "attack": {
          "phy": 115
        },
        "aecId": 15000,
        "reinforceId": 2200
      }
    },
    "messmer-soldiers-spear": {
      "Standard": {
        "attack": {
          "phy": 122
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 117
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 117
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 117
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 117,
          "fir": 117
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 117,
          "fir": 117
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 117,
          "lit": 117
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 117,
          "hol": 117
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 117,
          "mag": 117
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 117,
          "mag": 99
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 117
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 117
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 117
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "spear-of-the-impaler": {
      "Standard": {
        "attack": {
          "phy": 85,
          "fir": 102
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "barbed-staff-spear": {
      "Standard": {
        "attack": {
          "phy": 86,
          "hol": 86
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "obsidian-lamina": {
      "Standard": {
        "attack": {
          "phy": 120
        },
        "aecId": 15000,
        "reinforceId": 2200
      }
    },
    "tooth-whip": {
      "Standard": {
        "attack": {
          "phy": 109
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "pata": {
      "Standard": {
        "attack": {
          "phy": 104
        },
        "aecId": 10000,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 99
        },
        "aecId": 10000,
        "reinforceId": 100
      },
      "Keen": {
        "attack": {
          "phy": 99
        },
        "aecId": 10000,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 99
        },
        "aecId": 10000,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 99,
          "fir": 99
        },
        "aecId": 10005,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 99,
          "fir": 99
        },
        "aecId": 10000,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 99,
          "lit": 99
        },
        "aecId": 10000,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 99,
          "hol": 99
        },
        "aecId": 10000,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 99,
          "mag": 99
        },
        "aecId": 10000,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 99,
          "mag": 84
        },
        "aecId": 10000,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 99
        },
        "aecId": 10013,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 99
        },
        "aecId": 10013,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 99
        },
        "aecId": 10013,
        "reinforceId": 1200
      }
    },
    "golem-fist": {
      "Standard": {
        "attack": {
          "phy": 110
        },
        "aecId": 20010100,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 104
        },
        "aecId": 20010100,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 104
        },
        "aecId": 20010100,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 104
        },
        "aecId": 20010100,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 104,
          "fir": 104
        },
        "aecId": 20010101,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 104,
          "fir": 104
        },
        "aecId": 20010103,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 104,
          "lit": 104
        },
        "aecId": 20010100,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 104,
          "hol": 104
        },
        "aecId": 20010105,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 104,
          "mag": 104
        },
        "aecId": 20010104,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 104,
          "mag": 88
        },
        "aecId": 20010104,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 104
        },
        "aecId": 20010102,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 104
        },
        "aecId": 20010102,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 104
        },
        "aecId": 20010102,
        "reinforceId": 1200
      }
    },
    "thiolliers-hidden-needle": {
      "Standard": {
        "attack": {
          "phy": 70,
          "mag": 45
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "poisoned-hand": {
      "Standard": {
        "attack": {
          "phy": 76
        },
        "aecId": 15000,
        "reinforceId": 2200
      }
    },
    "madding-hand": {
      "Standard": {
        "attack": {
          "phy": 53,
          "fir": 63
        },
        "aecId": 20010400,
        "reinforceId": 2200
      }
    },
    "veterans-prosthesis": {
      "Standard": {
        "attack": {
          "phy": 83,
          "lit": 53
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "claws-of-night": {
      "Standard": {
        "attack": {
          "phy": 79,
          "mag": 51
        },
        "aecId": 20010000,
        "reinforceId": 2200
      }
    },
    "bloodfiends-arm": {
      "Standard": {
        "attack": {
          "phy": 147
        },
        "aecId": 20010600,
        "reinforceId": 0
      },
      "Heavy": {
        "attack": {
          "phy": 142
        },
        "aecId": 20010600,
        "reinforceId": 6000
      },
      "Keen": {
        "attack": {
          "phy": 142
        },
        "aecId": 20010600,
        "reinforceId": 200
      },
      "Quality": {
        "attack": {
          "phy": 142
        },
        "aecId": 20010600,
        "reinforceId": 300
      },
      "Fire": {
        "attack": {
          "phy": 142,
          "fir": 142
        },
        "aecId": 20010601,
        "reinforceId": 400
      },
      "Flame Art": {
        "attack": {
          "phy": 142,
          "fir": 142
        },
        "aecId": 20010600,
        "reinforceId": 500
      },
      "Lightning": {
        "attack": {
          "phy": 142,
          "lit": 142
        },
        "aecId": 20010600,
        "reinforceId": 600
      },
      "Sacred": {
        "attack": {
          "phy": 142,
          "hol": 142
        },
        "aecId": 20010600,
        "reinforceId": 700
      },
      "Magic": {
        "attack": {
          "phy": 142,
          "mag": 142
        },
        "aecId": 20010600,
        "reinforceId": 800
      },
      "Cold": {
        "attack": {
          "phy": 142,
          "mag": 121
        },
        "aecId": 20010600,
        "reinforceId": 900
      },
      "Poison": {
        "attack": {
          "phy": 142
        },
        "aecId": 20010600,
        "reinforceId": 1000
      },
      "Blood": {
        "attack": {
          "phy": 142
        },
        "aecId": 20010600,
        "reinforceId": 1100
      },
      "Occult": {
        "attack": {
          "phy": 142
        },
        "aecId": 20010600,
        "reinforceId": 1200
      }
    },
    "anvil-hammer": {
      "Standard": {
        "attack": {
          "phy": 131,
          "fir": 85
        },
        "aecId": 20010100,
        "reinforceId": 2200
      }
    },
    "devonias-hammer": {
      "Standard": {
        "attack": {
          "phy": 147,
          "hol": 44
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "shadow-sunflower-blossom": {
      "Standard": {
        "attack": {
          "phy": 114,
          "hol": 114
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "gazing-finger": {
      "Standard": {
        "attack": {
          "phy": 133,
          "mag": 86
        },
        "aecId": 20010700,
        "reinforceId": 2200
      }
    },
    "trolls-hammer": {
      "Standard": {
        "attack": {
          "phy": 153,
          "fir": 45
        },
        "aecId": 10000,
        "reinforceId": 0
      }
    },
    "watchdogs-staff": {
      "Standard": {
        "attack": {
          "phy": 165
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "rotten-staff": {
      "Standard": {
        "attack": {
          "phy": 165
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    },
    "envoys-greathorn": {
      "Standard": {
        "attack": {
          "phy": 121,
          "hol": 78
        },
        "aecId": 10000,
        "reinforceId": 2200
      }
    }
  },
  "aec": {
    "10000": {
      "phy": [
        "strength",
        "dexterity"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "faith"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "10005": {
      "phy": [
        "strength",
        "dexterity"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "strength"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "10013": {
      "phy": [
        "strength",
        "dexterity",
        "arcane"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "faith"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "10100": {
      "phy": [
        "strength",
        "dexterity",
        "arcane"
      ],
      "mag": [
        "intelligence",
        "arcane"
      ],
      "fir": [
        "faith",
        "arcane"
      ],
      "lit": [
        "dexterity",
        "arcane"
      ],
      "hol": [
        "faith",
        "arcane"
      ]
    },
    "12000": {
      "phy": [
        "strength",
        "dexterity",
        "faith"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "faith"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "12005": {
      "phy": [
        "strength",
        "dexterity",
        "faith"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "strength"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "15000": {
      "phy": [
        "strength",
        "dexterity",
        "faith",
        "arcane"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "faith"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "20000": {
      "phy": [
        "intelligence"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "intelligence"
      ],
      "lit": [
        "intelligence"
      ],
      "hol": [
        "intelligence"
      ]
    },
    "20010": {
      "phy": [
        "faith",
        "intelligence"
      ],
      "mag": [
        "faith",
        "intelligence"
      ],
      "fir": [
        "faith",
        "intelligence"
      ],
      "lit": [
        "faith",
        "intelligence"
      ],
      "hol": [
        "faith",
        "intelligence"
      ]
    },
    "20020": {
      "phy": [
        "faith"
      ],
      "mag": [
        "faith"
      ],
      "fir": [
        "faith"
      ],
      "lit": [
        "faith"
      ],
      "hol": [
        "faith"
      ]
    },
    "20030": {
      "phy": [
        "intelligence",
        "arcane"
      ],
      "mag": [
        "intelligence",
        "arcane"
      ],
      "fir": [
        "intelligence",
        "arcane"
      ],
      "lit": [
        "intelligence",
        "arcane"
      ],
      "hol": [
        "intelligence",
        "arcane"
      ]
    },
    "30000": {
      "phy": [
        "faith"
      ],
      "mag": [
        "faith"
      ],
      "fir": [
        "faith"
      ],
      "lit": [
        "faith"
      ],
      "hol": [
        "faith"
      ]
    },
    "30010": {
      "phy": [
        "faith",
        "intelligence"
      ],
      "mag": [
        "faith",
        "intelligence"
      ],
      "fir": [
        "faith",
        "intelligence"
      ],
      "lit": [
        "faith",
        "intelligence"
      ],
      "hol": [
        "faith",
        "intelligence"
      ]
    },
    "30020": {
      "phy": [
        "strength",
        "faith"
      ],
      "mag": [
        "strength",
        "faith"
      ],
      "fir": [
        "strength",
        "faith"
      ],
      "lit": [
        "strength",
        "faith"
      ],
      "hol": [
        "strength",
        "faith"
      ]
    },
    "30030": {
      "phy": [
        "faith",
        "arcane"
      ],
      "mag": [
        "faith",
        "arcane"
      ],
      "fir": [
        "faith",
        "arcane"
      ],
      "lit": [
        "faith",
        "arcane"
      ],
      "hol": [
        "faith",
        "arcane"
      ]
    },
    "30040": {
      "phy": [
        "strength",
        "dexterity",
        "faith",
        "intelligence"
      ],
      "mag": [
        "strength",
        "dexterity",
        "faith",
        "intelligence"
      ],
      "fir": [
        "strength",
        "dexterity",
        "faith",
        "intelligence"
      ],
      "lit": [
        "strength",
        "dexterity",
        "faith",
        "intelligence"
      ],
      "hol": [
        "strength",
        "dexterity",
        "faith",
        "intelligence"
      ]
    },
    "20000000": {
      "phy": [
        "strength",
        "dexterity",
        "arcane"
      ],
      "mag": [
        "strength",
        "dexterity",
        "intelligence"
      ],
      "fir": [
        "strength",
        "dexterity",
        "faith",
        "intelligence"
      ],
      "lit": [
        "strength",
        "dexterity",
        "faith"
      ],
      "hol": [
        "strength",
        "dexterity",
        "faith"
      ]
    },
    "20010000": {
      "phy": [
        "strength",
        "dexterity"
      ],
      "mag": [
        "dexterity",
        "intelligence"
      ],
      "fir": [
        "faith"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "20010100": {
      "phy": [
        "strength",
        "dexterity",
        "faith",
        "intelligence"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "faith"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "20010101": {
      "phy": [
        "strength",
        "dexterity",
        "faith",
        "intelligence"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "strength",
        "faith"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "20010102": {
      "phy": [
        "strength",
        "dexterity",
        "faith",
        "intelligence",
        "arcane"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "faith"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "20010103": {
      "phy": [
        "strength",
        "dexterity",
        "arcane"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "faith"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "20010104": {
      "phy": [
        "strength",
        "dexterity",
        "arcane"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "faith"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "20010105": {
      "phy": [
        "strength",
        "dexterity",
        "arcane"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "faith"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "20010300": {
      "phy": [
        "strength",
        "dexterity"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "faith"
      ],
      "lit": [
        "faith"
      ],
      "hol": [
        "faith"
      ]
    },
    "20010400": {
      "phy": [
        "strength",
        "dexterity"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "strength",
        "dexterity",
        "faith",
        "intelligence"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "20010500": {
      "phy": [
        "strength",
        "dexterity"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "strength",
        "faith"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "20010600": {
      "phy": [
        "strength",
        "dexterity",
        "faith",
        "arcane"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "faith"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "20010601": {
      "phy": [
        "strength",
        "dexterity",
        "faith",
        "arcane"
      ],
      "mag": [
        "intelligence"
      ],
      "fir": [
        "strength"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    },
    "20010700": {
      "phy": [
        "strength",
        "dexterity"
      ],
      "mag": [
        "faith",
        "intelligence"
      ],
      "fir": [
        "faith"
      ],
      "lit": [
        "dexterity"
      ],
      "hol": [
        "faith"
      ]
    }
  },
  "reinforce": {
    "0": {
      "maxLevel": 25,
      "attack": {
        "0": 2.45,
        "1": 2.45,
        "2": 2.45,
        "3": 2.45,
        "4": 2.45
      },
      "attributeScaling": {
        "str": 1.5,
        "dex": 1.5,
        "int": 1.8,
        "fai": 1.8,
        "arc": 1.8
      }
    },
    "100": {
      "maxLevel": 25,
      "attack": {
        "0": 2.35,
        "1": 2.35,
        "2": 2.35,
        "3": 2.35,
        "4": 2.35
      },
      "attributeScaling": {
        "str": 2.8,
        "dex": 0,
        "int": 1.8,
        "fai": 1.8,
        "arc": 1.8
      }
    },
    "200": {
      "maxLevel": 25,
      "attack": {
        "0": 2.35,
        "1": 2.35,
        "2": 2.35,
        "3": 2.35,
        "4": 2.35
      },
      "attributeScaling": {
        "str": 1.3,
        "dex": 2.8,
        "int": 1.8,
        "fai": 1.8,
        "arc": 1.8
      }
    },
    "300": {
      "maxLevel": 25,
      "attack": {
        "0": 2.05,
        "1": 2.05,
        "2": 2.05,
        "3": 2.05,
        "4": 2.05
      },
      "attributeScaling": {
        "str": 1.9,
        "dex": 1.9,
        "int": 1.8,
        "fai": 1.8,
        "arc": 1.8
      }
    },
    "400": {
      "maxLevel": 25,
      "attack": {
        "0": 1.7,
        "1": 1.7,
        "2": 1.7,
        "3": 1.7,
        "4": 1.7
      },
      "attributeScaling": {
        "str": 2.1,
        "dex": 1.2,
        "int": 1.8,
        "fai": 1.8,
        "arc": 1.8
      }
    },
    "500": {
      "maxLevel": 25,
      "attack": {
        "0": 2,
        "1": 2,
        "2": 2,
        "3": 2,
        "4": 2
      },
      "attributeScaling": {
        "str": 1.8,
        "dex": 1.8,
        "int": 1.8,
        "fai": 2.3,
        "arc": 1.8
      }
    },
    "600": {
      "maxLevel": 25,
      "attack": {
        "0": 1.74,
        "1": 1.74,
        "2": 1.74,
        "3": 1.74,
        "4": 1.74
      },
      "attributeScaling": {
        "str": 1.2,
        "dex": 2.1,
        "int": 1.8,
        "fai": 1.8,
        "arc": 1.8
      }
    },
    "700": {
      "maxLevel": 25,
      "attack": {
        "0": 2,
        "1": 2,
        "2": 2,
        "3": 2,
        "4": 2
      },
      "attributeScaling": {
        "str": 1.8,
        "dex": 1.8,
        "int": 1.8,
        "fai": 2.3,
        "arc": 1.8
      }
    },
    "800": {
      "maxLevel": 25,
      "attack": {
        "0": 2,
        "1": 2,
        "2": 2,
        "3": 2,
        "4": 2
      },
      "attributeScaling": {
        "str": 1.3,
        "dex": 1.3,
        "int": 2.35,
        "fai": 1.8,
        "arc": 1.8
      }
    },
    "900": {
      "maxLevel": 25,
      "attack": {
        "0": 1.8,
        "1": 1.8,
        "2": 1.8,
        "3": 1.8,
        "4": 1.8
      },
      "attributeScaling": {
        "str": 1.9,
        "dex": 1.9,
        "int": 2,
        "fai": 1.8,
        "arc": 1.8
      }
    },
    "1000": {
      "maxLevel": 25,
      "attack": {
        "0": 2.15,
        "1": 2.15,
        "2": 2.15,
        "3": 2.15,
        "4": 2.15
      },
      "attributeScaling": {
        "str": 1.9,
        "dex": 1.9,
        "int": 1.9,
        "fai": 1.9,
        "arc": 1.45
      }
    },
    "1100": {
      "maxLevel": 25,
      "attack": {
        "0": 2.15,
        "1": 2.15,
        "2": 2.15,
        "3": 2.15,
        "4": 2.15
      },
      "attributeScaling": {
        "str": 1.9,
        "dex": 1.9,
        "int": 1.9,
        "fai": 1.9,
        "arc": 1.45
      }
    },
    "1200": {
      "maxLevel": 25,
      "attack": {
        "0": 2.25,
        "1": 2.25,
        "2": 2.25,
        "3": 2.25,
        "4": 2.25
      },
      "attributeScaling": {
        "str": 1.5,
        "dex": 1.5,
        "int": 1.5,
        "fai": 1.5,
        "arc": 1.8
      }
    },
    "1300": {
      "maxLevel": 25,
      "attack": {
        "0": 1.9,
        "1": 1.9,
        "2": 2.45,
        "3": 2.45,
        "4": 2.45
      },
      "attributeScaling": {
        "str": 1.5,
        "dex": 1.5,
        "int": 4.3,
        "fai": 2.4,
        "arc": 2.4
      }
    },
    "1900": {
      "maxLevel": 25,
      "attack": {
        "0": 1.75,
        "1": 1.75,
        "2": 1.75,
        "3": 1.75,
        "4": 1.75
      },
      "attributeScaling": {
        "str": 3,
        "dex": 3,
        "int": 3,
        "fai": 3,
        "arc": 3
      }
    },
    "2200": {
      "maxLevel": 10,
      "attack": {
        "0": 2.45,
        "1": 2.45,
        "2": 2.45,
        "3": 2.45,
        "4": 2.45
      },
      "attributeScaling": {
        "str": 1.8,
        "dex": 1.8,
        "int": 1.8,
        "fai": 1.8,
        "arc": 1.8
      }
    },
    "2400": {
      "maxLevel": 10,
      "attack": {
        "0": 2.45,
        "1": 2.45,
        "2": 2.45,
        "3": 2.45,
        "4": 2.45
      },
      "attributeScaling": {
        "str": 3,
        "dex": 3,
        "int": 3,
        "fai": 3,
        "arc": 3
      }
    },
    "3000": {
      "maxLevel": 0,
      "attack": {
        "0": 1,
        "1": 1,
        "2": 1,
        "3": 1,
        "4": 1
      },
      "attributeScaling": {
        "str": 1,
        "dex": 1,
        "int": 1,
        "fai": 1,
        "arc": 1
      }
    },
    "5000": {
      "maxLevel": 25,
      "attack": {
        "0": 2.2,
        "1": 2.2,
        "2": 2.2,
        "3": 2.2,
        "4": 2.2
      },
      "attributeScaling": {
        "str": 1.3,
        "dex": 2.5,
        "int": 1.8,
        "fai": 1.8,
        "arc": 1.8
      }
    },
    "6000": {
      "maxLevel": 25,
      "attack": {
        "0": 2.2,
        "1": 2.2,
        "2": 2.2,
        "3": 2.2,
        "4": 2.2
      },
      "attributeScaling": {
        "str": 2.6,
        "dex": 1.2,
        "int": 1.8,
        "fai": 1.8,
        "arc": 1.8
      }
    }
  }
};
