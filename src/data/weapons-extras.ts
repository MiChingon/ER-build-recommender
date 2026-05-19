import type { ScalingTable } from "./weapons";

type Extras = { image: string; scalingTable: ScalingTable };

export const WEAPON_EXTRAS: Partial<Record<string, Extras>> = {
  "dagger": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dagger_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          35
        ],
        "dexterity": [
          "C",
          65
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            52
          ],
          "dexterity": [
            "B",
            97
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            154
          ]
        },
        "Keen": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "S",
            175
          ]
        },
        "Quality": {
          "strength": [
            "B",
            119
          ],
          "dexterity": [
            "B",
            119
          ]
        },
        "Fire": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "E",
            12
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            34
          ],
          "faith": [
            "B",
            126
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "B",
            98
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            34
          ],
          "faith": [
            "B",
            126
          ]
        },
        "Magic": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "E",
            24
          ],
          "intelligence": [
            "B",
            131
          ]
        },
        "Cold": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "B",
            110
          ],
          "intelligence": [
            "B",
            104
          ]
        },
        "Poison": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "B",
            115
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "B",
            115
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "D",
            39
          ],
          "arcane": [
            "A",
            153
          ]
        }
      }
    }
  },
  "parrying-dagger": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/parrying_dagger_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          16
        ],
        "dexterity": [
          "C",
          76
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            154
          ]
        },
        "Keen": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "S",
            185
          ]
        },
        "Quality": {
          "strength": [
            "B",
            121
          ],
          "dexterity": [
            "B",
            121
          ]
        },
        "Fire": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            39
          ],
          "faith": [
            "B",
            115
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "B",
            96
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            39
          ],
          "faith": [
            "B",
            115
          ]
        },
        "Magic": {
          "strength": [
            "E",
            5
          ],
          "dexterity": [
            "D",
            28
          ],
          "intelligence": [
            "B",
            129
          ]
        },
        "Cold": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "B",
            129
          ],
          "intelligence": [
            "C",
            82
          ]
        },
        "Poison": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "B",
            136
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "B",
            136
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            45
          ],
          "arcane": [
            "A",
            140
          ]
        }
      }
    }
  },
  "great-knife": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_knife_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          5
        ],
        "dexterity": [
          "C",
          80
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "B",
            120
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            151
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "S",
            180
          ]
        },
        "Quality": {
          "strength": [
            "B",
            117
          ],
          "dexterity": [
            "B",
            117
          ]
        },
        "Fire": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            43
          ],
          "faith": [
            "B",
            117
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "B",
            96
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            43
          ],
          "faith": [
            "B",
            117
          ]
        },
        "Magic": {
          "strength": [
            "E",
            5
          ],
          "dexterity": [
            "D",
            31
          ],
          "intelligence": [
            "B",
            129
          ]
        },
        "Cold": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "B",
            136
          ],
          "intelligence": [
            "C",
            84
          ]
        },
        "Poison": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "A",
            144
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "A",
            144
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "D",
            48
          ],
          "arcane": [
            "A",
            144
          ]
        }
      }
    }
  },
  "misericorde": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/misericorde_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "dexterity": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            106
          ]
        },
        "Keen": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "B",
            120
          ]
        },
        "Quality": {
          "strength": [
            "C",
            85
          ],
          "dexterity": [
            "C",
            85
          ]
        },
        "Fire": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "E",
            7
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "D",
            59
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "C",
            60
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "D",
            59
          ]
        },
        "Magic": {
          "strength": [
            "E",
            5
          ],
          "dexterity": [
            "E",
            19
          ],
          "intelligence": [
            "C",
            68
          ]
        },
        "Cold": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "C",
            85
          ],
          "intelligence": [
            "D",
            44
          ]
        },
        "Poison": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "C",
            89
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "C",
            89
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            30
          ],
          "arcane": [
            "B",
            104
          ]
        }
      }
    }
  },
  "wakizashi": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/wakizashi_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          34
        ],
        "dexterity": [
          "D",
          45
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            51
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            123
          ]
        },
        "Keen": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "B",
            126
          ]
        },
        "Quality": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "B",
            104
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            23
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            71
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            23
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Magic": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "E",
            16
          ],
          "intelligence": [
            "B",
            91
          ]
        },
        "Cold": {
          "strength": [
            "D",
            57
          ],
          "dexterity": [
            "C",
            76
          ],
          "intelligence": [
            "C",
            70
          ]
        },
        "Poison": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            79
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            79
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "D",
            27
          ],
          "arcane": [
            "B",
            120
          ]
        }
      }
    }
  },
  "bloodstained-dagger": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodstained_dagger_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          70
        ],
        "dexterity": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            105
          ],
          "dexterity": [
            "D",
            30
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            174
          ]
        },
        "Keen": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "B",
            134
          ]
        },
        "Quality": {
          "strength": [
            "B",
            110
          ],
          "dexterity": [
            "B",
            110
          ]
        },
        "Fire": {
          "strength": [
            "B",
            90
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            37
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "B",
            105
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            37
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "B",
            105
          ]
        },
        "Magic": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "B",
            117
          ]
        },
        "Cold": {
          "strength": [
            "B",
            119
          ],
          "dexterity": [
            "D",
            34
          ],
          "intelligence": [
            "C",
            80
          ]
        },
        "Poison": {
          "strength": [
            "B",
            125
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            125
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            42
          ],
          "dexterity": [
            "E",
            12
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "reduvia": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/reduvia_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "D",
          40
        ],
        "arcane": [
          "D",
          55
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            72
          ],
          "arcane": [
            "B",
            99
          ]
        }
      }
    }
  },
  "black-knife": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_knife_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "D",
          55
        ],
        "faith": [
          "D",
          35
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            99
          ],
          "faith": [
            "C",
            63
          ]
        }
      }
    }
  },
  "blade-of-calling": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blade_of_calling_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "dexterity": [
          "D",
          38
        ],
        "faith": [
          "C",
          75
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "C",
            68
          ],
          "faith": [
            "B",
            135
          ]
        }
      }
    }
  },
  "glintstone-kris": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/glintstone_kris_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "D",
          45
        ],
        "intelligence": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            81
          ],
          "intelligence": [
            "C",
            72
          ]
        }
      }
    }
  },
  "main-gauche": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/main-gauche_dagger_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          30
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            137
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "A",
            157
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            88
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "B",
            112
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            88
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "B",
            112
          ]
        },
        "Magic": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "E",
            23
          ],
          "intelligence": [
            "B",
            117
          ]
        },
        "Cold": {
          "strength": [
            "D",
            51
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "B",
            92
          ]
        },
        "Poison": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "fire-knights-shortsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fire_knights_shortsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          30
        ],
        "dexterity": [
          "D",
          50
        ],
        "faith": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "C",
            75
          ],
          "faith": [
            "D",
            54
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            168
          ],
          "faith": [
            "D",
            48
          ]
        },
        "Keen": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "A",
            168
          ],
          "faith": [
            "D",
            48
          ]
        },
        "Quality": {
          "strength": [
            "B",
            129
          ],
          "dexterity": [
            "B",
            129
          ],
          "faith": [
            "D",
            48
          ]
        },
        "Fire": {
          "strength": [
            "C",
            86
          ],
          "dexterity": [
            "D",
            26
          ],
          "faith": [
            "D",
            48
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "B",
            138
          ]
        },
        "Lightning": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "B",
            102
          ],
          "faith": [
            "D",
            48
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "B",
            138
          ]
        },
        "Magic": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "E",
            19
          ],
          "intelligence": [
            "A",
            141
          ],
          "faith": [
            "D",
            48
          ]
        },
        "Cold": {
          "strength": [
            "D",
            51
          ],
          "dexterity": [
            "C",
            85
          ],
          "intelligence": [
            "B",
            132
          ],
          "faith": [
            "D",
            48
          ]
        },
        "Poison": {
          "strength": [
            "D",
            57
          ],
          "dexterity": [
            "B",
            95
          ],
          "faith": [
            "D",
            51
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            57
          ],
          "dexterity": [
            "B",
            95
          ],
          "faith": [
            "D",
            51
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            30
          ],
          "faith": [
            "E",
            10
          ],
          "arcane": [
            "A",
            167
          ]
        }
      }
    }
  },
  "short-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/short_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          37
        ],
        "dexterity": [
          "D",
          48
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            55
          ],
          "dexterity": [
            "C",
            72
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            131
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "A",
            157
          ]
        },
        "Quality": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "B",
            104
          ]
        },
        "Fire": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "B",
            105
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            77
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "B",
            105
          ]
        },
        "Magic": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "E",
            9
          ],
          "intelligence": [
            "B",
            108
          ]
        },
        "Cold": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "C",
            81
          ],
          "intelligence": [
            "C",
            84
          ]
        },
        "Poison": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "C",
            85
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "C",
            85
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "D",
            28
          ],
          "arcane": [
            "B",
            129
          ]
        }
      }
    }
  },
  "longsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/longsword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          50
        ],
        "dexterity": [
          "D",
          33
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "D",
            49
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            134
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "B",
            128
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "B",
            96
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            73
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "B",
            96
          ]
        },
        "Magic": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "B",
            101
          ]
        },
        "Cold": {
          "strength": [
            "C",
            85
          ],
          "dexterity": [
            "D",
            55
          ],
          "intelligence": [
            "C",
            80
          ]
        },
        "Poison": {
          "strength": [
            "C",
            89
          ],
          "dexterity": [
            "D",
            58
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            89
          ],
          "dexterity": [
            "D",
            58
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "E",
            19
          ],
          "arcane": [
            "B",
            126
          ]
        }
      }
    }
  },
  "broadsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/broadsword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          55
        ],
        "dexterity": [
          "E",
          22
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            82
          ],
          "dexterity": [
            "D",
            33
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            148
          ]
        },
        "Keen": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Quality": {
          "strength": [
            "B",
            95
          ],
          "dexterity": [
            "B",
            95
          ]
        },
        "Fire": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "C",
            86
          ]
        },
        "Cold": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "D",
            36
          ],
          "intelligence": [
            "C",
            60
          ]
        },
        "Poison": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "D",
            38
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "D",
            38
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            33
          ],
          "dexterity": [
            "E",
            12
          ],
          "arcane": [
            "B",
            117
          ]
        }
      }
    }
  },
  "lordsworns-straight-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lordsworns_straight_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          36
        ],
        "dexterity": [
          "D",
          36
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            54
          ],
          "dexterity": [
            "D",
            54
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            117
          ]
        },
        "Keen": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            112
          ]
        },
        "Quality": {
          "strength": [
            "B",
            95
          ],
          "dexterity": [
            "B",
            95
          ]
        },
        "Fire": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            78
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            60
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            78
          ]
        },
        "Magic": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "E",
            6
          ],
          "intelligence": [
            "C",
            79
          ]
        },
        "Cold": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            60
          ],
          "intelligence": [
            "C",
            64
          ]
        },
        "Poison": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            60
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            60
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            21
          ],
          "arcane": [
            "B",
            109
          ]
        }
      }
    }
  },
  "nobles-slender-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/nobles_slender_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          12
        ],
        "dexterity": [
          "C",
          70
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            105
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            140
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "A",
            165
          ]
        },
        "Quality": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "B",
            108
          ]
        },
        "Fire": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            37
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            79
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            37
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Magic": {
          "strength": [
            "E",
            5
          ],
          "dexterity": [
            "D",
            27
          ],
          "intelligence": [
            "B",
            105
          ]
        },
        "Cold": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            119
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            125
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            125
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "D",
            42
          ],
          "arcane": [
            "B",
            131
          ]
        }
      }
    }
  },
  "warhawks-talon": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/warhawks_talon_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          28
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            42
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            134
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "A",
            165
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "B",
            94
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            79
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "B",
            94
          ]
        },
        "Magic": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            23
          ],
          "intelligence": [
            "B",
            105
          ]
        },
        "Cold": {
          "strength": [
            "D",
            47
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "C",
            78
          ]
        },
        "Poison": {
          "strength": [
            "D",
            49
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            49
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "B",
            133
          ]
        }
      }
    }
  },
  "carian-knights-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_knights_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          35
        ],
        "dexterity": [
          "D",
          26
        ],
        "intelligence": [
          "D",
          32
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "D",
            46
          ],
          "intelligence": [
            "D",
            57
          ]
        }
      }
    }
  },
  "crystal-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crystal_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "E",
          15
        ],
        "intelligence": [
          "D",
          32
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "D",
            27
          ],
          "intelligence": [
            "D",
            57
          ]
        }
      }
    }
  },
  "miquellan-knights-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/miquellan_knights_sword_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          29
        ],
        "dexterity": [
          "D",
          29
        ],
        "faith": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            52
          ],
          "dexterity": [
            "D",
            52
          ],
          "faith": [
            "D",
            36
          ]
        }
      }
    }
  },
  "golden-epitaph": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_epitaph_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          30
        ],
        "dexterity": [
          "D",
          30
        ],
        "faith": [
          "D",
          38
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            54
          ],
          "dexterity": [
            "D",
            54
          ],
          "faith": [
            "C",
            68
          ]
        }
      }
    }
  },
  "regalia-of-eochaid": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/regalia_of_eochaid_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "dexterity": [
          "D",
          37
        ],
        "arcane": [
          "D",
          37
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "C",
            66
          ],
          "arcane": [
            "C",
            66
          ]
        }
      }
    }
  },
  "coded-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/coded_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "faith": [
          "B",
          95
        ]
      },
      "max": {
        "Standard": {
          "faith": [
            "A",
            171
          ]
        }
      }
    }
  },
  "sword-of-night-and-flame": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_night_and_flame_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          14
        ],
        "dexterity": [
          "E",
          14
        ],
        "intelligence": [
          "D",
          50
        ],
        "faith": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "D",
            25
          ],
          "intelligence": [
            "B",
            90
          ],
          "faith": [
            "B",
            90
          ]
        }
      }
    }
  },
  "sword-of-light": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_light_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          35
        ],
        "dexterity": [
          "E",
          20
        ],
        "faith": [
          "E",
          23
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "D",
            36
          ],
          "faith": [
            "D",
            41
          ]
        }
      }
    }
  },
  "sword-of-darkness": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_darkness_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          35
        ],
        "dexterity": [
          "E",
          20
        ],
        "faith": [
          "E",
          23
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "D",
            36
          ],
          "faith": [
            "D",
            41
          ]
        }
      }
    }
  },
  "bastard-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bastard_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          55
        ],
        "dexterity": [
          "D",
          27
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            82
          ],
          "dexterity": [
            "D",
            40
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            153
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            117
          ]
        },
        "Quality": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "B",
            96
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "C",
            78
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            71
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "C",
            78
          ]
        },
        "Magic": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "E",
            10
          ],
          "intelligence": [
            "C",
            86
          ]
        },
        "Cold": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "D",
            45
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "D",
            47
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "D",
            47
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            33
          ],
          "dexterity": [
            "E",
            15
          ],
          "arcane": [
            "B",
            124
          ]
        }
      }
    }
  },
  "claymore": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/claymore_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          49
        ],
        "dexterity": [
          "D",
          34
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "D",
            51
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            131
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            120
          ]
        },
        "Quality": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "B",
            102
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            71
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            13
          ],
          "intelligence": [
            "C",
            89
          ]
        },
        "Cold": {
          "strength": [
            "C",
            83
          ],
          "dexterity": [
            "D",
            57
          ],
          "intelligence": [
            "C",
            74
          ]
        },
        "Poison": {
          "strength": [
            "C",
            87
          ],
          "dexterity": [
            "C",
            60
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            87
          ],
          "dexterity": [
            "C",
            60
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            19
          ],
          "arcane": [
            "B",
            126
          ]
        }
      }
    }
  },
  "iron-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/iron_greatsword_greatswords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          65
        ],
        "dexterity": [
          "E",
          10
        ]
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "E"
        }
      }
    }
  },
  "knights-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/knights_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          33
        ],
        "dexterity": [
          "D",
          44
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            49
          ],
          "dexterity": [
            "C",
            66
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            120
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            117
          ]
        },
        "Quality": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "B",
            100
          ]
        },
        "Fire": {
          "strength": [
            "C",
            65
          ],
          "dexterity": [
            "E",
            18
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            23
          ],
          "faith": [
            "C",
            75
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            65
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            23
          ],
          "faith": [
            "C",
            75
          ]
        },
        "Magic": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "E",
            16
          ],
          "intelligence": [
            "C",
            79
          ]
        },
        "Cold": {
          "strength": [
            "D",
            55
          ],
          "dexterity": [
            "C",
            74
          ],
          "intelligence": [
            "C",
            68
          ]
        },
        "Poison": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "C",
            77
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "C",
            77
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "D",
            25
          ],
          "arcane": [
            "B",
            117
          ]
        }
      }
    }
  },
  "banished-knights-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/banished_knights_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          44
        ],
        "dexterity": [
          "D",
          36
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "D",
            54
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            131
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Quality": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "B",
            102
          ]
        },
        "Fire": {
          "strength": [
            "C",
            69
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            69
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            13
          ],
          "intelligence": [
            "C",
            84
          ]
        },
        "Cold": {
          "strength": [
            "C",
            74
          ],
          "dexterity": [
            "C",
            60
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "C",
            64
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "C",
            64
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            21
          ],
          "arcane": [
            "B",
            122
          ]
        }
      }
    }
  },
  "flamberge": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/flamberge_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          27
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            40
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            137
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "A",
            162
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            20
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            23
          ],
          "intelligence": [
            "B",
            94
          ]
        },
        "Cold": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "C",
            78
          ]
        },
        "Poison": {
          "strength": [
            "D",
            47
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            47
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "B",
            131
          ]
        }
      }
    }
  },
  "blasphemous-blade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blasphemous_blade_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          35
        ],
        "dexterity": [
          "D",
          35
        ],
        "faith": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "C",
            63
          ],
          "faith": [
            "B",
            90
          ]
        }
      }
    }
  },
  "dark-moon-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dark_moon_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "dexterity": [
          "D",
          25
        ],
        "intelligence": [
          "C",
          70
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "D",
            45
          ],
          "intelligence": [
            "B",
            126
          ]
        }
      }
    }
  },
  "golden-order-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_order_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "D",
          30
        ],
        "faith": [
          "C",
          64
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            54
          ],
          "faith": [
            "B",
            115
          ]
        }
      }
    }
  },
  "sacred-relic-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sacred_relic_sword.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "dexterity": [
          "D",
          56
        ],
        "faith": [
          "D",
          36
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "B",
            100
          ],
          "faith": [
            "C",
            64
          ]
        }
      }
    }
  },
  "marais-executioners-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/marais_executioners_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          63
        ],
        "dexterity": [
          "E",
          7
        ],
        "arcane": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            113
          ],
          "dexterity": [
            "E",
            12
          ],
          "arcane": [
            "D",
            54
          ]
        }
      }
    }
  },
  "zweihander": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/zweihander_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          38
        ],
        "dexterity": [
          "D",
          53
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            57
          ],
          "dexterity": [
            "C",
            79
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            140
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "A",
            140
          ]
        },
        "Quality": {
          "strength": [
            "B",
            114
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Fire": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "E",
            21
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "D",
            39
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "C",
            79
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "D",
            39
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "E",
            16
          ],
          "intelligence": [
            "B",
            98
          ]
        },
        "Cold": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "C",
            89
          ],
          "intelligence": [
            "C",
            80
          ]
        },
        "Poison": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "B",
            95
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "B",
            95
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "D",
            31
          ],
          "arcane": [
            "B",
            138
          ]
        }
      }
    }
  },
  "greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          61
        ],
        "dexterity": [
          "E",
          18
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            91
          ],
          "dexterity": [
            "D",
            27
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            150
          ]
        },
        "Keen": {
          "strength": [
            "D",
            29
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Quality": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "B",
            96
          ]
        },
        "Fire": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            18
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "D",
            57
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "C",
            71
          ]
        },
        "Magic": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "E",
            6
          ],
          "intelligence": [
            "C",
            82
          ]
        },
        "Cold": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "D",
            30
          ],
          "intelligence": [
            "D",
            54
          ]
        },
        "Poison": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "D",
            30
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "D",
            30
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "E",
            10
          ],
          "arcane": [
            "B",
            120
          ]
        }
      }
    }
  },
  "watchdogs-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/watchdogs_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          85
        ],
        "dexterity": [
          "E",
          6
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            127
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Heavy": {
          "strength": [
            "S",
            189
          ]
        },
        "Keen": {
          "strength": [
            "D",
            35
          ],
          "dexterity": [
            "A",
            140
          ]
        },
        "Quality": {
          "strength": [
            "B",
            121
          ],
          "dexterity": [
            "B",
            121
          ]
        },
        "Fire": {
          "strength": [
            "B",
            92
          ],
          "dexterity": [
            "E",
            21
          ]
        },
        "Flame Art": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "B",
            92
          ]
        },
        "Sacred": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Magic": {
          "strength": [
            "D",
            44
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "B",
            117
          ]
        },
        "Cold": {
          "strength": [
            "A",
            144
          ],
          "dexterity": [
            "E",
            9
          ],
          "intelligence": [
            "C",
            80
          ]
        },
        "Poison": {
          "strength": [
            "A",
            144
          ],
          "dexterity": [
            "E",
            9
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "A",
            144
          ],
          "dexterity": [
            "E",
            9
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            51
          ],
          "dexterity": [
            "E",
            6
          ],
          "arcane": [
            "B",
            138
          ]
        }
      }
    }
  },
  "grafted-blade-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/grafted_blade_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          63
        ],
        "dexterity": [
          "E",
          19
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            113
          ],
          "dexterity": [
            "D",
            34
          ]
        }
      }
    }
  },
  "ruins-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ruins_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "B",
          105
        ],
        "intelligence": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "S",
            189
          ],
          "intelligence": [
            "D",
            36
          ]
        }
      }
    }
  },
  "starscourge-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/starscourge_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          52
        ],
        "dexterity": [
          "D",
          28
        ],
        "intelligence": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "D",
            50
          ],
          "intelligence": [
            "D",
            36
          ]
        }
      }
    }
  },
  "godslayers-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godslayers_greatsword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          31
        ],
        "dexterity": [
          "D",
          56
        ],
        "faith": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            55
          ],
          "dexterity": [
            "B",
            100
          ],
          "faith": [
            "C",
            72
          ]
        }
      }
    }
  },
  "maliketh-black-blade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/malikeths_black_blade_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          62
        ],
        "dexterity": [
          "E",
          15
        ],
        "faith": [
          "D",
          50
        ]
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
        "strength": [
          "D",
          53
        ],
        "dexterity": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "D",
            45
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            134
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            120
          ]
        },
        "Quality": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "B",
            104
          ]
        },
        "Fire": {
          "strength": [
            "C",
            69
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "C",
            75
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            69
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "C",
            75
          ]
        },
        "Magic": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            9
          ],
          "intelligence": [
            "C",
            86
          ]
        },
        "Cold": {
          "strength": [
            "C",
            89
          ],
          "dexterity": [
            "D",
            51
          ],
          "intelligence": [
            "C",
            66
          ]
        },
        "Poison": {
          "strength": [
            "B",
            95
          ],
          "dexterity": [
            "D",
            53
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            95
          ],
          "dexterity": [
            "D",
            53
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            31
          ],
          "dexterity": [
            "E",
            18
          ],
          "arcane": [
            "B",
            126
          ]
        }
      }
    }
  },
  "troll-knights-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/troll_knights_sword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "D",
          45
        ],
        "intelligence": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "C",
            81
          ],
          "intelligence": [
            "D",
            54
          ]
        }
      }
    }
  },
  "royal-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/royal_greatsword__colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          37
        ],
        "dexterity": [
          "E",
          15
        ],
        "intelligence": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "D",
            27
          ],
          "intelligence": [
            "C",
            72
          ]
        }
      }
    }
  },
  "fire-knights-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fire_knights_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          28
        ],
        "dexterity": [
          "D",
          47
        ],
        "faith": [
          "D",
          25
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            42
          ],
          "dexterity": [
            "C",
            70
          ],
          "faith": [
            "D",
            45
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            154
          ],
          "faith": [
            "D",
            45
          ]
        },
        "Keen": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "A",
            140
          ],
          "faith": [
            "D",
            45
          ]
        },
        "Quality": {
          "strength": [
            "B",
            117
          ],
          "dexterity": [
            "B",
            133
          ],
          "faith": [
            "D",
            45
          ]
        },
        "Fire": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "E",
            24
          ],
          "faith": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "B",
            94
          ],
          "faith": [
            "D",
            45
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "B",
            126
          ]
        },
        "Magic": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            18
          ],
          "intelligence": [
            "B",
            129
          ],
          "faith": [
            "D",
            45
          ]
        },
        "Cold": {
          "strength": [
            "D",
            47
          ],
          "dexterity": [
            "C",
            79
          ],
          "intelligence": [
            "B",
            120
          ],
          "faith": [
            "D",
            45
          ]
        },
        "Poison": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "C",
            89
          ],
          "faith": [
            "D",
            47
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "C",
            89
          ],
          "faith": [
            "D",
            47
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "E",
            9
          ],
          "arcane": [
            "A",
            153
          ]
        }
      }
    }
  },
  "ancient-meteoric-ore-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ancient_meteoric_ore_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          50
        ],
        "dexterity": [
          "E",
          5
        ],
        "arcane": [
          "D",
          26
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            90
          ],
          "dexterity": [
            "E",
            9
          ],
          "arcane": [
            "D",
            46
          ]
        }
      }
    }
  },
  "greatsword-of-radahn-lord": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_of_radahn_(lord)_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "D",
          36
        ],
        "intelligence": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "C",
            64
          ],
          "intelligence": [
            "D",
            36
          ]
        }
      }
    }
  },
  "greatsword-of-radahn-light": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_of_radahn_(light)_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "D",
          36
        ],
        "intelligence": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "C",
            64
          ],
          "intelligence": [
            "D",
            36
          ]
        }
      }
    }
  },
  "moonrithylls-knight-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/troll_knights_sword_colossal_swords_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "D",
          45
        ],
        "intelligence": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "C",
            81
          ],
          "intelligence": [
            "D",
            54
          ]
        }
      }
    }
  },
  "rapier": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rapier_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            123
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "A",
            147
          ]
        },
        "Quality": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "B",
            98
          ]
        },
        "Fire": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            73
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Magic": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            23
          ],
          "intelligence": [
            "B",
            94
          ]
        },
        "Cold": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "C",
            64
          ]
        },
        "Poison": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "B",
            122
          ]
        }
      }
    }
  },
  "estoc": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/estoc_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          14
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            117
          ]
        },
        "Keen": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            135
          ]
        },
        "Quality": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "B",
            93
          ]
        },
        "Fire": {
          "strength": [
            "C",
            65
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            65
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "E",
            5
          ],
          "dexterity": [
            "E",
            18
          ],
          "intelligence": [
            "C",
            86
          ]
        },
        "Cold": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "D",
            58
          ]
        },
        "Poison": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            102
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            102
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "B",
            111
          ]
        }
      }
    }
  },
  "noble-estoc": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/nobles_estoc_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          37
        ],
        "dexterity": [
          "D",
          37
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            55
          ],
          "dexterity": [
            "D",
            55
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            117
          ]
        },
        "Keen": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            109
          ]
        },
        "Quality": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "B",
            96
          ]
        },
        "Fire": {
          "strength": [
            "C",
            65
          ],
          "dexterity": [
            "E",
            16
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "C",
            65
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Magic": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "C",
            82
          ]
        },
        "Cold": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "C",
            62
          ],
          "intelligence": [
            "C",
            66
          ]
        },
        "Poison": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "C",
            66
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "C",
            66
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            21
          ],
          "arcane": [
            "B",
            111
          ]
        }
      }
    }
  },
  "rogiers-rapier": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rogiers_rapier_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "dexterity": [
          "C",
          76
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            140
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "A",
            167
          ]
        },
        "Quality": {
          "strength": [
            "B",
            114
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Fire": {
          "strength": [
            "C",
            84
          ],
          "dexterity": [
            "E",
            21
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "B",
            115
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "C",
            84
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "B",
            115
          ]
        },
        "Magic": {
          "strength": [
            "E",
            5
          ],
          "dexterity": [
            "D",
            28
          ],
          "intelligence": [
            "B",
            126
          ]
        },
        "Cold": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "B",
            129
          ],
          "intelligence": [
            "C",
            80
          ]
        },
        "Poison": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "B",
            136
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "B",
            136
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            45
          ],
          "arcane": [
            "B",
            138
          ]
        }
      }
    }
  },
  "antspur-rapier": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/antspur_rapier_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          36
        ],
        "dexterity": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            54
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            128
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            123
          ]
        },
        "Quality": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "B",
            104
          ]
        },
        "Fire": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            20
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "B",
            108
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "B",
            108
          ]
        },
        "Magic": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "E",
            19
          ],
          "intelligence": [
            "B",
            105
          ]
        },
        "Cold": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            85
          ],
          "intelligence": [
            "C",
            86
          ]
        },
        "Poison": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "C",
            89
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "C",
            89
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "D",
            30
          ],
          "arcane": [
            "B",
            131
          ]
        }
      }
    }
  },
  "frozen-needle": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/frozen_needle_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            90
          ]
        }
      }
    }
  },
  "carian-sorcery-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_sorcery_sword_thrusting_sword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "D",
          39
        ],
        "intelligence": [
          "D",
          47
        ]
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "D",
          "intelligence": "B"
        }
      }
    }
  },
  "great-epee": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_epee_heavy_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          38
        ],
        "dexterity": [
          "D",
          47
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            57
          ],
          "dexterity": [
            "C",
            70
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            140
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            128
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "E",
            20
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "B",
            96
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "C",
            73
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "B",
            96
          ]
        },
        "Magic": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            18
          ],
          "intelligence": [
            "B",
            94
          ]
        },
        "Cold": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "C",
            79
          ],
          "intelligence": [
            "C",
            76
          ]
        },
        "Poison": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "C",
            81
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "C",
            81
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "D",
            27
          ],
          "arcane": [
            "B",
            129
          ]
        }
      }
    }
  },
  "godskin-stitcher": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godskin_stitcher_heavy_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          42
        ],
        "dexterity": [
          "D",
          42
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "C",
            63
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            134
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            131
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "B",
            96
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            73
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "B",
            96
          ]
        },
        "Magic": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "E",
            15
          ],
          "intelligence": [
            "B",
            94
          ]
        },
        "Cold": {
          "strength": [
            "C",
            70
          ],
          "dexterity": [
            "C",
            70
          ],
          "intelligence": [
            "C",
            74
          ]
        },
        "Poison": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "C",
            72
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "C",
            72
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "E",
            24
          ],
          "arcane": [
            "B",
            127
          ]
        }
      }
    }
  },
  "bloody-helice": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloody_helice_heavy_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "D",
          35
        ],
        "arcane": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            63
          ],
          "arcane": [
            "B",
            90
          ]
        }
      }
    }
  },
  "dragon-king-cragblade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon_kings_cragblade_heavy_thrusting_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          23
        ],
        "dexterity": [
          "D",
          57
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            41
          ],
          "dexterity": [
            "B",
            102
          ]
        }
      }
    }
  },
  "scimitar": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/scimitar_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "dexterity": [
          "D",
          57
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            37
          ],
          "dexterity": [
            "C",
            85
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            131
          ]
        },
        "Keen": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "A",
            157
          ]
        },
        "Quality": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "B",
            104
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            30
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            71
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            30
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "B",
            96
          ]
        },
        "Cold": {
          "strength": [
            "D",
            49
          ],
          "dexterity": [
            "B",
            96
          ],
          "intelligence": [
            "C",
            64
          ]
        },
        "Poison": {
          "strength": [
            "D",
            43
          ],
          "dexterity": [
            "B",
            102
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            43
          ],
          "dexterity": [
            "B",
            102
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "D",
            33
          ],
          "arcane": [
            "B",
            124
          ]
        }
      }
    }
  },
  "falchion": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/falchion_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          44
        ],
        "dexterity": [
          "D",
          44
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "C",
            66
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            142
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            128
          ]
        },
        "Quality": {
          "strength": [
            "B",
            110
          ],
          "dexterity": [
            "B",
            110
          ]
        },
        "Fire": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            20
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "B",
            110
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "B",
            110
          ]
        },
        "Magic": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            16
          ],
          "intelligence": [
            "B",
            105
          ]
        },
        "Cold": {
          "strength": [
            "C",
            74
          ],
          "dexterity": [
            "C",
            74
          ],
          "intelligence": [
            "B",
            90
          ]
        },
        "Poison": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "C",
            76
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "C",
            76
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "D",
            25
          ],
          "arcane": [
            "B",
            133
          ]
        }
      }
    }
  },
  "shamshir": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/shamshir_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          36
        ],
        "dexterity": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            54
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            137
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            134
          ]
        },
        "Quality": {
          "strength": [
            "B",
            110
          ],
          "dexterity": [
            "B",
            110
          ]
        },
        "Fire": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            20
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "B",
            108
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "B",
            108
          ]
        },
        "Magic": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "E",
            19
          ],
          "intelligence": [
            "B",
            103
          ]
        },
        "Cold": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            85
          ],
          "intelligence": [
            "C",
            82
          ]
        },
        "Poison": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "C",
            87
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "C",
            87
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "D",
            30
          ],
          "arcane": [
            "B",
            131
          ]
        }
      }
    }
  },
  "bandits-curved-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bandits_curved_sword_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          35
        ],
        "dexterity": [
          "D",
          48
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            52
          ],
          "dexterity": [
            "C",
            72
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            131
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            128
          ]
        },
        "Quality": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "B",
            104
          ]
        },
        "Fire": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "B",
            96
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            73
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "B",
            96
          ]
        },
        "Magic": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "E",
            18
          ],
          "intelligence": [
            "B",
            96
          ]
        },
        "Cold": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "C",
            81
          ],
          "intelligence": [
            "C",
            74
          ]
        },
        "Poison": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            83
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            83
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "D",
            28
          ],
          "arcane": [
            "B",
            126
          ]
        }
      }
    }
  },
  "shotel": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/shotel_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          18
        ],
        "dexterity": [
          "D",
          58
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "C",
            87
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            123
          ]
        },
        "Keen": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "A",
            145
          ]
        },
        "Quality": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "B",
            98
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            71
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "E",
            18
          ],
          "intelligence": [
            "C",
            89
          ]
        },
        "Cold": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "B",
            98
          ],
          "intelligence": [
            "C",
            60
          ]
        },
        "Poison": {
          "strength": [
            "D",
            32
          ],
          "dexterity": [
            "B",
            104
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            32
          ],
          "dexterity": [
            "B",
            104
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            34
          ],
          "arcane": [
            "B",
            115
          ]
        }
      }
    }
  },
  "scavengers-curved-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/scavengers_curved_sword_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          40
        ],
        "dexterity": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            112
          ]
        },
        "Keen": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "B",
            112
          ]
        },
        "Quality": {
          "strength": [
            "B",
            91
          ],
          "dexterity": [
            "B",
            91
          ]
        },
        "Fire": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "E",
            21
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "C",
            79
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Magic": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            15
          ],
          "intelligence": [
            "B",
            115
          ]
        },
        "Cold": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "C",
            85
          ],
          "intelligence": [
            "B",
            90
          ]
        },
        "Poison": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "C",
            89
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "C",
            89
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "D",
            30
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "beastmans-curved-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/beastmans_curved_sword_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          65
        ],
        "dexterity": [
          "E",
          18
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            97
          ],
          "dexterity": [
            "D",
            27
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            161
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            123
          ]
        },
        "Quality": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "B",
            102
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            46
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            66
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            69
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            46
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            66
          ]
        },
        "Magic": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "B",
            96
          ]
        },
        "Cold": {
          "strength": [
            "B",
            110
          ],
          "dexterity": [
            "D",
            30
          ],
          "intelligence": [
            "C",
            66
          ]
        },
        "Poison": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "D",
            32
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "D",
            32
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            39
          ],
          "dexterity": [
            "E",
            10
          ],
          "arcane": [
            "B",
            126
          ]
        }
      }
    }
  },
  "magma-blade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/magma_blade_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "D",
          31
        ],
        "faith": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "D",
            55
          ],
          "faith": [
            "C",
            72
          ]
        }
      }
    }
  },
  "wing-of-astel": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/wing_of_astel_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "D",
          45
        ],
        "intelligence": [
          "D",
          55
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            81
          ],
          "intelligence": [
            "B",
            99
          ]
        }
      }
    }
  },
  "eclipse-shotel": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/eclipse_shotel_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "D",
          35
        ],
        "faith": [
          "D",
          45
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "C",
            63
          ],
          "faith": [
            "C",
            81
          ]
        }
      }
    }
  },
  "dismounter": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dismounter_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          47
        ],
        "dexterity": [
          "D",
          37
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            70
          ],
          "dexterity": [
            "D",
            55
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            131
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            128
          ]
        },
        "Quality": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "B",
            108
          ]
        },
        "Fire": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "B",
            96
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            73
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "B",
            96
          ]
        },
        "Magic": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "B",
            98
          ]
        },
        "Cold": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "C",
            62
          ],
          "intelligence": [
            "C",
            66
          ]
        },
        "Poison": {
          "strength": [
            "C",
            83
          ],
          "dexterity": [
            "C",
            66
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            83
          ],
          "dexterity": [
            "C",
            66
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            21
          ],
          "arcane": [
            "B",
            127
          ]
        }
      }
    }
  },
  "monks-flameblade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/monks_flameblade_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          37
        ],
        "dexterity": [
          "D",
          52
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            55
          ],
          "dexterity": [
            "C",
            78
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            134
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            131
          ]
        },
        "Quality": {
          "strength": [
            "B",
            110
          ],
          "dexterity": [
            "B",
            110
          ]
        },
        "Fire": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "E",
            20
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "C",
            81
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Magic": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            19
          ],
          "intelligence": [
            "B",
            103
          ]
        },
        "Cold": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "C",
            87
          ],
          "intelligence": [
            "C",
            80
          ]
        },
        "Poison": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "B",
            93
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "B",
            93
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "D",
            30
          ],
          "arcane": [
            "B",
            135
          ]
        }
      }
    }
  },
  "bloodhounds-fang": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodhounds_fang_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          41
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "B",
            108
          ]
        }
      }
    }
  },
  "onyx-lords-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/onyx_lords_greatsword_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          50
        ],
        "dexterity": [
          "E",
          10
        ],
        "intelligence": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            90
          ],
          "dexterity": [
            "E",
            18
          ],
          "intelligence": [
            "B",
            90
          ]
        }
      }
    }
  },
  "magma-wyrm-scalesword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/magma_wyrms_scalesword_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          60
        ],
        "dexterity": [
          "D",
          25
        ],
        "faith": [
          "D",
          55
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "D",
            45
          ],
          "faith": [
            "B",
            99
          ]
        }
      }
    }
  },
  "morgotts-cursed-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/morgotts_cursed_sword_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "dexterity": [
          "C",
          60
        ],
        "arcane": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            54
          ]
        }
      }
    }
  },
  "uchigatana": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/uchigatana_katana_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          36
        ],
        "dexterity": [
          "D",
          55
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            54
          ],
          "dexterity": [
            "C",
            82
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            142
          ]
        },
        "Keen": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "A",
            142
          ]
        },
        "Quality": {
          "strength": [
            "B",
            112
          ],
          "dexterity": [
            "B",
            112
          ]
        },
        "Fire": {
          "strength": [
            "C",
            84
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "B",
            108
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            84
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "B",
            108
          ]
        },
        "Magic": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "E",
            10
          ],
          "intelligence": [
            "B",
            112
          ]
        },
        "Cold": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "B",
            93
          ],
          "intelligence": [
            "C",
            80
          ]
        },
        "Poison": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "B",
            93
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "B",
            93
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "D",
            33
          ],
          "arcane": [
            "B",
            138
          ]
        }
      }
    }
  },
  "nagakiba": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/nagakiba_katana_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          27
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            40
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            137
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "A",
            160
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "B",
            101
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            77
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "B",
            101
          ]
        },
        "Magic": {
          "strength": [
            "E",
            5
          ],
          "dexterity": [
            "E",
            11
          ],
          "intelligence": [
            "B",
            105
          ]
        },
        "Cold": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "C",
            68
          ]
        },
        "Poison": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "B",
            102
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "B",
            102
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "B",
            131
          ]
        }
      }
    }
  },
  "serpentbone-blade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpentbone_blade_katana_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "C",
          75
        ]
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
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "E",
          17
        ],
        "intelligence": [
          "D",
          36
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "D",
            30
          ],
          "intelligence": [
            "C",
            64
          ]
        }
      }
    }
  },
  "moonveil": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/moonveil_katana_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          12
        ],
        "dexterity": [
          "D",
          50
        ],
        "intelligence": [
          "C",
          60
        ]
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
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "D",
          50
        ],
        "arcane": [
          "D",
          33
        ]
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
        "strength": [
          "D",
          30
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            54
          ],
          "dexterity": [
            "B",
            108
          ]
        }
      }
    }
  },
  "hand-of-malenia": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hand_of_malenia_katana_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          5
        ],
        "dexterity": [
          "C",
          75
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "B",
            135
          ]
        }
      }
    }
  },
  "twinblade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/twinblade_twinblade_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          35
        ],
        "dexterity": [
          "D",
          43
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            52
          ],
          "dexterity": [
            "C",
            64
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            126
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            120
          ]
        },
        "Quality": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "B",
            102
          ]
        },
        "Fire": {
          "strength": [
            "C",
            69
          ],
          "dexterity": [
            "E",
            13
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "C",
            78
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "C",
            69
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "C",
            78
          ]
        },
        "Magic": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "E",
            15
          ],
          "intelligence": [
            "C",
            82
          ]
        },
        "Cold": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "C",
            72
          ],
          "intelligence": [
            "C",
            62
          ]
        },
        "Poison": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "C",
            72
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "C",
            72
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "D",
            25
          ],
          "arcane": [
            "B",
            118
          ]
        }
      }
    }
  },
  "twinned-knight-swords": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/twinned_knight_swords_twinblade_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          54
        ],
        "dexterity": [
          "E",
          24
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "D",
            36
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            134
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            117
          ]
        },
        "Quality": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "B",
            102
          ]
        },
        "Fire": {
          "strength": [
            "C",
            69
          ],
          "dexterity": [
            "E",
            13
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            71
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "C",
            69
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            71
          ]
        },
        "Magic": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "E",
            9
          ],
          "intelligence": [
            "C",
            79
          ]
        },
        "Cold": {
          "strength": [
            "B",
            91
          ],
          "dexterity": [
            "D",
            39
          ],
          "intelligence": [
            "D",
            54
          ]
        },
        "Poison": {
          "strength": [
            "B",
            91
          ],
          "dexterity": [
            "D",
            39
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            91
          ],
          "dexterity": [
            "D",
            39
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            31
          ],
          "dexterity": [
            "E",
            13
          ],
          "arcane": [
            "B",
            118
          ]
        }
      }
    }
  },
  "godskin-peeler": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godskin_peeler_twinblade_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          19
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            126
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "A",
            147
          ]
        },
        "Quality": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "B",
            98
          ]
        },
        "Fire": {
          "strength": [
            "C",
            69
          ],
          "dexterity": [
            "E",
            13
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "C",
            71
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "C",
            69
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "C",
            71
          ]
        },
        "Magic": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "E",
            23
          ],
          "intelligence": [
            "C",
            82
          ]
        },
        "Cold": {
          "strength": [
            "D",
            32
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "D",
            54
          ]
        },
        "Poison": {
          "strength": [
            "D",
            32
          ],
          "dexterity": [
            "B",
            102
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            32
          ],
          "dexterity": [
            "B",
            102
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "B",
            120
          ]
        }
      }
    }
  },
  "eleonoras-poleblade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/eleonoras_poleblade_twinblade_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "D",
          40
        ],
        "arcane": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            72
          ],
          "arcane": [
            "D",
            54
          ]
        }
      }
    }
  },
  "hand-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hand_axe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          30
        ],
        "dexterity": [
          "D",
          55
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "C",
            82
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            140
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "B",
            137
          ]
        },
        "Quality": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "B",
            104
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "C",
            87
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            71
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "C",
            87
          ]
        },
        "Magic": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "E",
            20
          ],
          "intelligence": [
            "C",
            89
          ]
        },
        "Cold": {
          "strength": [
            "D",
            51
          ],
          "dexterity": [
            "B",
            93
          ],
          "intelligence": [
            "D",
            58
          ]
        },
        "Poison": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "B",
            98
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "B",
            98
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            33
          ],
          "arcane": [
            "B",
            129
          ]
        }
      }
    }
  },
  "battle-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/battle_axe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          48
        ],
        "dexterity": [
          "D",
          33
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "D",
            49
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            140
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "B",
            126
          ]
        },
        "Quality": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "B",
            102
          ]
        },
        "Fire": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            11
          ],
          "intelligence": [
            "C",
            84
          ]
        },
        "Cold": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "D",
            55
          ],
          "intelligence": [
            "C",
            64
          ]
        },
        "Poison": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "D",
            55
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "D",
            55
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            19
          ],
          "arcane": [
            "B",
            122
          ]
        }
      }
    }
  },
  "highland-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/highland_axe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          42
        ],
        "dexterity": [
          "D",
          36
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "D",
            54
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            128
          ]
        },
        "Keen": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "B",
            117
          ]
        },
        "Quality": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "B",
            102
          ]
        },
        "Fire": {
          "strength": [
            "C",
            65
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            65
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "E",
            13
          ],
          "intelligence": [
            "C",
            82
          ]
        },
        "Cold": {
          "strength": [
            "C",
            70
          ],
          "dexterity": [
            "C",
            60
          ],
          "intelligence": [
            "D",
            54
          ]
        },
        "Poison": {
          "strength": [
            "C",
            70
          ],
          "dexterity": [
            "C",
            60
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            70
          ],
          "dexterity": [
            "C",
            60
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "E",
            21
          ],
          "arcane": [
            "B",
            118
          ]
        }
      }
    }
  },
  "icerind-hatchet": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/icerind_hatchet_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            108
          ]
        }
      }
    }
  },
  "stormhawk-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/stormhawk_axe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          44
        ],
        "dexterity": [
          "D",
          34
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "C",
            61
          ]
        }
      }
    }
  },
  "rosus-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rosus_axe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          50
        ],
        "dexterity": [
          "E",
          22
        ],
        "intelligence": [
          "D",
          45
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            90
          ],
          "dexterity": [
            "D",
            39
          ],
          "intelligence": [
            "C",
            81
          ]
        }
      }
    }
  },
  "greataxe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/greataxe_greataxe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          55
        ],
        "dexterity": [
          "D",
          31
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            82
          ],
          "dexterity": [
            "D",
            46
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            140
          ]
        },
        "Keen": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "B",
            123
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "C",
            73
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            71
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "C",
            73
          ]
        },
        "Magic": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "E",
            11
          ],
          "intelligence": [
            "C",
            89
          ]
        },
        "Cold": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "D",
            51
          ],
          "intelligence": [
            "C",
            76
          ]
        },
        "Poison": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "D",
            55
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "D",
            55
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            33
          ],
          "dexterity": [
            "E",
            18
          ],
          "arcane": [
            "B",
            131
          ]
        }
      }
    }
  },
  "crescent-moon-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crescent_moon_axe_greataxe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          39
        ],
        "dexterity": [
          "D",
          49
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "C",
            73
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            142
          ]
        },
        "Keen": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "B",
            131
          ]
        },
        "Quality": {
          "strength": [
            "B",
            110
          ],
          "dexterity": [
            "B",
            110
          ]
        },
        "Fire": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "D",
            25
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "D",
            25
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            18
          ],
          "intelligence": [
            "B",
            91
          ]
        },
        "Cold": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "C",
            83
          ],
          "intelligence": [
            "C",
            60
          ]
        },
        "Poison": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "C",
            83
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "C",
            83
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "D",
            28
          ],
          "arcane": [
            "B",
            133
          ]
        }
      }
    }
  },
  "executioners-greataxe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/executioners_greataxe_greataxe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          64
        ],
        "dexterity": [
          "E",
          12
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "E",
            18
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            158
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            120
          ]
        },
        "Quality": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "B",
            100
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "C",
            69
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            71
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "C",
            69
          ]
        },
        "Magic": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "C",
            79
          ]
        },
        "Cold": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "E",
            19
          ],
          "intelligence": [
            "D",
            52
          ]
        },
        "Poison": {
          "strength": [
            "B",
            114
          ],
          "dexterity": [
            "E",
            20
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            114
          ],
          "dexterity": [
            "E",
            20
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            37
          ],
          "dexterity": [
            "E",
            6
          ],
          "arcane": [
            "B",
            115
          ]
        }
      }
    }
  },
  "rusted-anchor": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rusted_anchor_greataxe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          68
        ],
        "dexterity": [
          "E",
          14
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "E",
            21
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            158
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            117
          ]
        },
        "Quality": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "B",
            100
          ]
        },
        "Fire": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "C",
            73
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "C",
            73
          ]
        },
        "Magic": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "C",
            84
          ]
        },
        "Cold": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "E",
            22
          ],
          "intelligence": [
            "D",
            56
          ]
        },
        "Poison": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "E",
            22
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "E",
            22
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            40
          ],
          "dexterity": [
            "E",
            7
          ],
          "arcane": [
            "B",
            124
          ]
        }
      }
    }
  },
  "butchering-knife": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/butchering_knife_greataxe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "dexterity": [
          "C",
          73
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            109
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            142
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "A",
            162
          ]
        },
        "Quality": {
          "strength": [
            "B",
            110
          ],
          "dexterity": [
            "B",
            110
          ]
        },
        "Fire": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            37
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            81
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            37
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Magic": {
          "strength": [
            "E",
            5
          ],
          "dexterity": [
            "D",
            27
          ],
          "intelligence": [
            "B",
            101
          ]
        },
        "Cold": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "B",
            123
          ],
          "intelligence": [
            "C",
            70
          ]
        },
        "Poison": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "B",
            131
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "B",
            131
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            43
          ],
          "arcane": [
            "B",
            133
          ]
        }
      }
    }
  },
  "axe-of-godrick": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/axe_of_godrick_greataxe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          48
        ],
        "dexterity": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            86
          ],
          "dexterity": [
            "C",
            72
          ]
        }
      }
    }
  },
  "club": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/club_hammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          75
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            112
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            159
          ]
        },
        "Keen": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "A",
            145
          ]
        },
        "Quality": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "B",
            115
          ]
        },
        "Fire": {
          "strength": [
            "C",
            86
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            32
          ],
          "faith": [
            "B",
            110
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            86
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            32
          ],
          "faith": [
            "B",
            110
          ]
        },
        "Magic": {
          "strength": [
            "D",
            39
          ],
          "intelligence": [
            "B",
            105
          ]
        },
        "Cold": {
          "strength": [
            "B",
            127
          ],
          "intelligence": [
            "C",
            74
          ]
        },
        "Poison": {
          "strength": [
            "B",
            134
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            134
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "B",
            90
          ],
          "arcane": [
            "B",
            127
          ]
        }
      }
    }
  },
  "mace": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/mace_hammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          55
        ],
        "dexterity": [
          "D",
          35
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            82
          ],
          "dexterity": [
            "D",
            52
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            151
          ]
        },
        "Keen": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "B",
            137
          ]
        },
        "Quality": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "B",
            115
          ]
        },
        "Fire": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            79
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Magic": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            6
          ],
          "intelligence": [
            "B",
            105
          ]
        },
        "Cold": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "D",
            58
          ],
          "intelligence": [
            "B",
            90
          ]
        },
        "Poison": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "D",
            58
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "D",
            58
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            33
          ],
          "dexterity": [
            "E",
            21
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "morning-star": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/morning_star_hammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          47
        ],
        "dexterity": [
          "D",
          37
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            70
          ],
          "dexterity": [
            "D",
            55
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            131
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "B",
            128
          ]
        },
        "Quality": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "B",
            108
          ]
        },
        "Fire": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "B",
            96
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            73
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "B",
            96
          ]
        },
        "Magic": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            6
          ],
          "intelligence": [
            "B",
            98
          ]
        },
        "Cold": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "C",
            62
          ],
          "intelligence": [
            "C",
            74
          ]
        },
        "Poison": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "C",
            62
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "C",
            62
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            21
          ],
          "arcane": [
            "B",
            127
          ]
        }
      }
    }
  },
  "warpick": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/warpick_hammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          41
        ],
        "dexterity": [
          "D",
          41
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            61
          ],
          "dexterity": [
            "C",
            61
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            131
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            126
          ]
        },
        "Quality": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "B",
            102
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "B",
            94
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            71
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "B",
            94
          ]
        },
        "Magic": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "B",
            96
          ]
        },
        "Cold": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "C",
            68
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "C",
            68
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "C",
            68
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "E",
            24
          ],
          "arcane": [
            "B",
            124
          ]
        }
      }
    }
  },
  "hammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hammer_hammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          60
        ],
        "dexterity": [
          "D",
          25
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            90
          ],
          "dexterity": [
            "D",
            37
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            158
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "B",
            126
          ]
        },
        "Quality": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "B",
            100
          ]
        },
        "Fire": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            32
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            32
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "E",
            9
          ],
          "intelligence": [
            "B",
            91
          ]
        },
        "Cold": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "D",
            41
          ],
          "intelligence": [
            "C",
            68
          ]
        },
        "Poison": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "D",
            43
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "D",
            43
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "E",
            15
          ],
          "arcane": [
            "B",
            129
          ]
        }
      }
    }
  },
  "varres-bouquet": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/varres_bouquet_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "D",
          40
        ],
        "arcane": [
          "C",
          65
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            72
          ],
          "arcane": [
            "B",
            117
          ]
        }
      }
    }
  },
  "envoys-horn": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/envoys_horn_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          37
        ],
        "dexterity": [
          "D",
          44
        ],
        "faith": [
          "D",
          37
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "C",
            79
          ],
          "faith": [
            "C",
            66
          ]
        }
      }
    }
  },
  "marikas-hammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/marikas_hammer_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          55
        ],
        "dexterity": [
          "D",
          31
        ],
        "faith": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            99
          ],
          "dexterity": [
            "D",
            55
          ],
          "faith": [
            "C",
            72
          ]
        }
      }
    }
  },
  "great-club": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_club_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          81
        ],
        "faith": [
          "E",
          20
        ]
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
        "strength": [
          "D",
          55
        ],
        "dexterity": [
          "D",
          25
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            82
          ],
          "dexterity": [
            "D",
            37
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            148
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Quality": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "B",
            96
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            75
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            71
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            75
          ]
        },
        "Magic": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "E",
            9
          ],
          "intelligence": [
            "C",
            84
          ]
        },
        "Cold": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "D",
            41
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "D",
            43
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "D",
            43
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            33
          ],
          "dexterity": [
            "E",
            15
          ],
          "arcane": [
            "B",
            122
          ]
        }
      }
    }
  },
  "brick-hammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/brick_hammer_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "B",
          96
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "A",
            144
          ]
        },
        "Heavy": {
          "strength": [
            "S",
            208
          ]
        },
        "Keen": {
          "strength": [
            "D",
            31
          ],
          "dexterity": [
            "A",
            159
          ]
        },
        "Quality": {
          "strength": [
            "B",
            133
          ],
          "dexterity": [
            "B",
            133
          ]
        },
        "Fire": {
          "strength": [
            "B",
            107
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "C",
            72
          ],
          "faith": [
            "B",
            110
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            66
          ],
          "dexterity": [
            "B",
            115
          ]
        },
        "Sacred": {
          "strength": [
            "C",
            72
          ],
          "faith": [
            "B",
            110
          ]
        },
        "Magic": {
          "strength": [
            "C",
            66
          ],
          "intelligence": [
            "B",
            115
          ]
        },
        "Cold": {
          "strength": [
            "A",
            163
          ],
          "intelligence": [
            "B",
            96
          ]
        },
        "Poison": {
          "strength": [
            "A",
            163
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "A",
            163
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "B",
            114
          ],
          "arcane": [
            "A",
            145
          ]
        }
      }
    }
  },
  "great-stars": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_stars_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          53
        ],
        "dexterity": [
          "D",
          37
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "D",
            55
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            148
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "B",
            128
          ]
        },
        "Quality": {
          "strength": [
            "B",
            112
          ],
          "dexterity": [
            "B",
            112
          ]
        },
        "Fire": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "C",
            89
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            79
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "C",
            89
          ]
        },
        "Magic": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "B",
            98
          ]
        },
        "Cold": {
          "strength": [
            "C",
            89
          ],
          "dexterity": [
            "C",
            62
          ],
          "intelligence": [
            "C",
            80
          ]
        },
        "Poison": {
          "strength": [
            "B",
            95
          ],
          "dexterity": [
            "C",
            66
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            95
          ],
          "dexterity": [
            "C",
            66
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            31
          ],
          "dexterity": [
            "E",
            21
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "devourers-scepter": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/devourers_scepter_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          48
        ],
        "dexterity": [
          "D",
          48
        ],
        "faith": [
          "D",
          37
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            86
          ],
          "dexterity": [
            "C",
            86
          ],
          "faith": [
            "C",
            66
          ]
        }
      }
    }
  },
  "flail": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/flail_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          34
        ],
        "dexterity": [
          "D",
          52
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            51
          ],
          "dexterity": [
            "C",
            78
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            137
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "A",
            140
          ]
        },
        "Quality": {
          "strength": [
            "B",
            112
          ],
          "dexterity": [
            "B",
            112
          ]
        },
        "Fire": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Magic": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "E",
            19
          ],
          "intelligence": [
            "B",
            101
          ]
        },
        "Cold": {
          "strength": [
            "D",
            57
          ],
          "dexterity": [
            "C",
            87
          ],
          "intelligence": [
            "C",
            76
          ]
        },
        "Poison": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "B",
            93
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "B",
            93
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "D",
            30
          ],
          "arcane": [
            "B",
            131
          ]
        }
      }
    }
  },
  "nightrider-flail": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/nightrider_flail_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          21
        ],
        "dexterity": [
          "C",
          66
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            31
          ],
          "dexterity": [
            "B",
            99
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            137
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "A",
            162
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            23
          ],
          "faith": [
            "B",
            98
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            77
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            23
          ],
          "faith": [
            "B",
            98
          ]
        },
        "Magic": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            24
          ],
          "intelligence": [
            "B",
            101
          ]
        },
        "Cold": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "B",
            112
          ],
          "intelligence": [
            "C",
            68
          ]
        },
        "Poison": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            117
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            117
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            39
          ],
          "arcane": [
            "B",
            131
          ]
        }
      }
    }
  },
  "chainlink-flail": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/chainlink_flail_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          78
        ],
        "dexterity": [
          "E",
          13
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            117
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Heavy": {
          "strength": [
            "S",
            182
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "A",
            140
          ]
        },
        "Quality": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "B",
            115
          ]
        },
        "Fire": {
          "strength": [
            "C",
            88
          ],
          "dexterity": [
            "E",
            21
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            9
          ],
          "faith": [
            "B",
            117
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "C",
            88
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            9
          ],
          "faith": [
            "B",
            117
          ]
        },
        "Magic": {
          "strength": [
            "D",
            29
          ],
          "dexterity": [
            "E",
            6
          ],
          "intelligence": [
            "B",
            117
          ]
        },
        "Cold": {
          "strength": [
            "B",
            133
          ],
          "dexterity": [
            "E",
            20
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "A",
            140
          ],
          "dexterity": [
            "E",
            22
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "A",
            140
          ],
          "dexterity": [
            "E",
            22
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            46
          ],
          "dexterity": [
            "E",
            7
          ],
          "arcane": [
            "B",
            138
          ]
        }
      }
    }
  },
  "family-heads": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/family_heads_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "C",
          80
        ],
        "intelligence": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "A",
            144
          ],
          "intelligence": [
            "D",
            36
          ]
        }
      }
    }
  },
  "bastards-stars": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bastards_stars_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "D",
          35
        ],
        "intelligence": [
          "C",
          80
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            63
          ],
          "intelligence": [
            "A",
            144
          ]
        }
      }
    }
  },
  "short-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/short-spear__weapons-elden-ring-wiki-guide-200.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          33
        ],
        "dexterity": [
          "D",
          44
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            49
          ],
          "dexterity": [
            "C",
            66
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            123
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            117
          ]
        },
        "Quality": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "B",
            100
          ]
        },
        "Fire": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            10
          ],
          "intelligence": [
            "C",
            89
          ]
        },
        "Cold": {
          "strength": [
            "D",
            55
          ],
          "dexterity": [
            "C",
            74
          ],
          "intelligence": [
            "C",
            68
          ]
        },
        "Poison": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "C",
            77
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "C",
            77
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "D",
            25
          ],
          "arcane": [
            "B",
            117
          ]
        }
      }
    }
  },
  "spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spear_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "D",
          55
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "C",
            82
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            120
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            137
          ]
        },
        "Quality": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "B",
            93
          ]
        },
        "Fire": {
          "strength": [
            "C",
            65
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            65
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "E",
            5
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "C",
            82
          ]
        },
        "Cold": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "B",
            93
          ],
          "intelligence": [
            "D",
            52
          ]
        },
        "Poison": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            98
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            98
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            33
          ],
          "arcane": [
            "B",
            113
          ]
        }
      }
    }
  },
  "partisan": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/partisan_spear-elden-ring-wiki-guide-200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          41
        ],
        "dexterity": [
          "D",
          29
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            61
          ],
          "dexterity": [
            "D",
            43
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            117
          ]
        },
        "Keen": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            103
          ]
        },
        "Quality": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "B",
            93
          ]
        },
        "Fire": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            9
          ],
          "faith": [
            "C",
            71
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "D",
            58
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            9
          ],
          "faith": [
            "C",
            71
          ]
        },
        "Magic": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            6
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Cold": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "D",
            49
          ],
          "intelligence": [
            "C",
            60
          ]
        },
        "Poison": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "D",
            49
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "D",
            49
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "E",
            16
          ],
          "arcane": [
            "B",
            106
          ]
        }
      }
    }
  },
  "pike": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/pike_spear-elden-ring-wiki-guide-200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          49
        ],
        "dexterity": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "D",
            45
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            137
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Quality": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "B",
            96
          ]
        },
        "Fire": {
          "strength": [
            "C",
            69
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            89
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            69
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            89
          ]
        },
        "Magic": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "B",
            91
          ]
        },
        "Cold": {
          "strength": [
            "C",
            83
          ],
          "dexterity": [
            "D",
            51
          ],
          "intelligence": [
            "C",
            70
          ]
        },
        "Poison": {
          "strength": [
            "C",
            83
          ],
          "dexterity": [
            "D",
            51
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            83
          ],
          "dexterity": [
            "D",
            51
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            18
          ],
          "arcane": [
            "B",
            120
          ]
        }
      }
    }
  },
  "cross-naginata": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cross-naginata_elden_ring_wiki_guide_75px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "dexterity": [
          "C",
          60
        ]
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
        "strength": [
          "D",
          35
        ],
        "dexterity": [
          "D",
          35
        ],
        "faith": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "C",
            63
          ],
          "faith": [
            "B",
            90
          ]
        }
      }
    }
  },
  "death-ritual-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/death_ritual_spear_weapons_elden_ring_wiki_guide_75px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          23
        ],
        "dexterity": [
          "D",
          53
        ],
        "intelligence": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            41
          ],
          "dexterity": [
            "B",
            95
          ],
          "intelligence": [
            "D",
            54
          ]
        }
      }
    }
  },
  "bolt-of-gransax": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bolt_of_gransax-elden-ring-wiki-guide.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          30
        ],
        "dexterity": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            54
          ],
          "dexterity": [
            "C",
            72
          ]
        }
      }
    }
  },
  "lance": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lance_greatspear_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          50
        ],
        "dexterity": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "C",
            60
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            145
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "B",
            131
          ]
        },
        "Quality": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "B",
            115
          ]
        },
        "Fire": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "B",
            105
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            81
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "B",
            105
          ]
        },
        "Magic": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "E",
            10
          ],
          "intelligence": [
            "B",
            105
          ]
        },
        "Cold": {
          "strength": [
            "C",
            85
          ],
          "dexterity": [
            "C",
            68
          ],
          "intelligence": [
            "B",
            90
          ]
        },
        "Poison": {
          "strength": [
            "C",
            85
          ],
          "dexterity": [
            "C",
            68
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            85
          ],
          "dexterity": [
            "C",
            68
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "E",
            24
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "treespear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/treespear_greatspear_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "dexterity": [
          "D",
          44
        ],
        "faith": [
          "D",
          30
        ]
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
  "vykes-war-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/vykes_war_spear_greatspear_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "C",
          60
        ],
        "faith": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            108
          ],
          "faith": [
            "C",
            72
          ]
        }
      }
    }
  },
  "serpent-hunter": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpent-hunter_greatspear_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "B",
          95
        ],
        "dexterity": [
          "E",
          5
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "A",
            171
          ],
          "dexterity": [
            "E",
            9
          ]
        }
      }
    }
  },
  "siluras-tree": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/silurias_tree_greatspear_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          58
        ],
        "dexterity": [
          "E",
          15
        ],
        "faith": [
          "D",
          45
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "C",
            81
          ]
        }
      }
    }
  },
  "mohgwyns-sacred-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/mohgwyns_sacred_spear_great_spears_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          40
        ],
        "dexterity": [
          "E",
          15
        ],
        "arcane": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "D",
            27
          ],
          "arcane": [
            "C",
            72
          ]
        }
      }
    }
  },
  "halberd": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/halberd_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          54
        ],
        "dexterity": [
          "D",
          38
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "D",
            57
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            151
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "B",
            137
          ]
        },
        "Quality": {
          "strength": [
            "B",
            112
          ],
          "dexterity": [
            "B",
            112
          ]
        },
        "Fire": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "B",
            101
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            79
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "B",
            101
          ]
        },
        "Magic": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "E",
            9
          ],
          "intelligence": [
            "B",
            103
          ]
        },
        "Cold": {
          "strength": [
            "B",
            91
          ],
          "dexterity": [
            "C",
            64
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "C",
            68
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "C",
            68
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            31
          ],
          "dexterity": [
            "E",
            22
          ],
          "arcane": [
            "A",
            140
          ]
        }
      }
    }
  },
  "banished-knights-halberd": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/banished_knights_halberd_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          40
        ],
        "dexterity": [
          "D",
          52
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            78
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            148
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "B",
            137
          ]
        },
        "Quality": {
          "strength": [
            "B",
            114
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Fire": {
          "strength": [
            "C",
            84
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "B",
            108
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            84
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "B",
            108
          ]
        },
        "Magic": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            13
          ],
          "intelligence": [
            "B",
            108
          ]
        },
        "Cold": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "C",
            87
          ],
          "intelligence": [
            "B",
            92
          ]
        },
        "Poison": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "B",
            93
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "B",
            93
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "D",
            30
          ],
          "arcane": [
            "A",
            140
          ]
        }
      }
    }
  },
  "lucerne": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lucerne_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          30
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            145
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "A",
            162
          ]
        },
        "Quality": {
          "strength": [
            "B",
            112
          ],
          "dexterity": [
            "B",
            112
          ]
        },
        "Fire": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "B",
            98
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            77
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "B",
            98
          ]
        },
        "Magic": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            15
          ],
          "intelligence": [
            "B",
            101
          ]
        },
        "Cold": {
          "strength": [
            "D",
            51
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "glaive": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/glaive_halberds_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "D",
          43
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "C",
            64
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            142
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            131
          ]
        },
        "Quality": {
          "strength": [
            "B",
            112
          ],
          "dexterity": [
            "B",
            112
          ]
        },
        "Fire": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            81
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Magic": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "E",
            10
          ],
          "intelligence": [
            "B",
            103
          ]
        },
        "Cold": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "C",
            72
          ],
          "intelligence": [
            "C",
            78
          ]
        },
        "Poison": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "C",
            76
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "C",
            76
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "D",
            25
          ],
          "arcane": [
            "B",
            133
          ]
        }
      }
    }
  },
  "vulgar-militia-shotel": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/vulgar_militia_shotel_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "C",
          80
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "B",
            120
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            154
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "A",
            172
          ]
        },
        "Quality": {
          "strength": [
            "B",
            117
          ],
          "dexterity": [
            "B",
            117
          ]
        },
        "Fire": {
          "strength": [
            "B",
            94
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            28
          ],
          "faith": [
            "B",
            124
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "B",
            94
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            28
          ],
          "faith": [
            "B",
            124
          ]
        },
        "Magic": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "E",
            20
          ],
          "intelligence": [
            "B",
            126
          ]
        },
        "Cold": {
          "strength": [
            "E",
            17
          ],
          "dexterity": [
            "B",
            136
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "E",
            17
          ],
          "dexterity": [
            "A",
            144
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "E",
            17
          ],
          "dexterity": [
            "A",
            144
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "D",
            48
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "vulgar-militia-saw": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/vulgar_militia_saw_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          35
        ],
        "dexterity": [
          "D",
          56
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            52
          ],
          "dexterity": [
            "C",
            84
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            148
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "B",
            137
          ]
        },
        "Quality": {
          "strength": [
            "B",
            114
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Fire": {
          "strength": [
            "C",
            84
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "B",
            115
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            84
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "B",
            115
          ]
        },
        "Magic": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "B",
            112
          ]
        },
        "Cold": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "B",
            95
          ],
          "intelligence": [
            "C",
            80
          ]
        },
        "Poison": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "B",
            100
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "B",
            100
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "D",
            33
          ],
          "arcane": [
            "B",
            138
          ]
        }
      }
    }
  },
  "guardians-swordspear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/guardians_swordspear_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          5
        ],
        "dexterity": [
          "C",
          64
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "B",
            96
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            123
          ]
        },
        "Keen": {
          "dexterity": [
            "A",
            168
          ]
        },
        "Quality": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "B",
            96
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            7
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "C",
            71
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            5
          ],
          "dexterity": [
            "E",
            15
          ],
          "intelligence": [
            "C",
            86
          ]
        },
        "Cold": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "B",
            108
          ],
          "intelligence": [
            "D",
            54
          ]
        },
        "Poison": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "B",
            114
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "B",
            114
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "D",
            37
          ],
          "arcane": [
            "B",
            104
          ]
        }
      }
    }
  },
  "nightrider-glaive": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/nightrider_glaive_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          79
        ],
        "dexterity": [
          "E",
          5
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            118
          ],
          "dexterity": [
            "E",
            7
          ]
        },
        "Heavy": {
          "strength": [
            "S",
            184
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "A",
            145
          ]
        },
        "Quality": {
          "strength": [
            "B",
            117
          ],
          "dexterity": [
            "B",
            117
          ]
        },
        "Fire": {
          "strength": [
            "B",
            90
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "B",
            115
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "B",
            115
          ]
        },
        "Magic": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "B",
            117
          ]
        },
        "Cold": {
          "strength": [
            "B",
            134
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "C",
            66
          ]
        },
        "Poison": {
          "strength": [
            "B",
            134
          ],
          "dexterity": [
            "E",
            7
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            134
          ],
          "dexterity": [
            "E",
            7
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            46
          ],
          "dexterity": [
            "E",
            6
          ],
          "arcane": [
            "B",
            127
          ]
        }
      }
    }
  },
  "pests-glaive": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/pests_glaive_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          36
        ],
        "dexterity": [
          "D",
          59
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            54
          ],
          "dexterity": [
            "C",
            88
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            145
          ]
        },
        "Keen": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "A",
            142
          ]
        },
        "Quality": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "B",
            115
          ]
        },
        "Fire": {
          "strength": [
            "C",
            84
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "B",
            108
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            84
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "B",
            108
          ]
        },
        "Magic": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "B",
            110
          ]
        },
        "Cold": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "B",
            100
          ],
          "intelligence": [
            "C",
            78
          ]
        },
        "Poison": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "B",
            106
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "B",
            106
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "D",
            34
          ],
          "arcane": [
            "A",
            144
          ]
        }
      }
    }
  },
  "gargoyles-halberd": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles-halberd-weapon-elden-ring-wiki-guide.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          74
        ],
        "dexterity": [
          "E",
          10
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            111
          ],
          "dexterity": [
            "E",
            15
          ]
        },
        "Heavy": {
          "strength": [
            "S",
            182
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "A",
            140
          ]
        },
        "Quality": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "B",
            115
          ]
        },
        "Fire": {
          "strength": [
            "C",
            86
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            9
          ],
          "faith": [
            "B",
            108
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            86
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            9
          ],
          "faith": [
            "B",
            108
          ]
        },
        "Magic": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            6
          ],
          "intelligence": [
            "B",
            110
          ]
        },
        "Cold": {
          "strength": [
            "B",
            125
          ],
          "dexterity": [
            "E",
            17
          ],
          "intelligence": [
            "C",
            66
          ]
        },
        "Poison": {
          "strength": [
            "B",
            133
          ],
          "dexterity": [
            "E",
            17
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            133
          ],
          "dexterity": [
            "E",
            17
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            43
          ],
          "dexterity": [
            "E",
            6
          ],
          "arcane": [
            "B",
            127
          ]
        }
      }
    }
  },
  "gargoyles-black-halberd": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles-black-halberd-weapon-elden-ring-wiki-guide.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          47
        ],
        "dexterity": [
          "E",
          15
        ],
        "faith": [
          "D",
          25
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            84
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "D",
            45
          ]
        }
      }
    }
  },
  "ripple-crescent-halberd": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ripple_crescent_halberd_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "arcane": [
          "B",
          135
        ]
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
        "strength": [
          "D",
          50
        ],
        "dexterity": [
          "E",
          15
        ],
        "faith": [
          "D",
          32
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            90
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "D",
            57
          ]
        }
      }
    }
  },
  "dragon-halberd": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon_halberd_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          51
        ],
        "dexterity": [
          "D",
          35
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            91
          ],
          "dexterity": [
            "C",
            63
          ]
        }
      }
    }
  },
  "loretta-war-sickle": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lorettas_war_sickle_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          36
        ],
        "dexterity": [
          "D",
          45
        ],
        "intelligence": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "C",
            81
          ],
          "intelligence": [
            "C",
            72
          ]
        }
      }
    }
  },
  "commanders-standard": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/commanders_standard_halberd_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          55
        ],
        "dexterity": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            99
          ],
          "dexterity": [
            "D",
            54
          ]
        }
      }
    }
  },
  "spirit-glaive": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spirit_glaive_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          30
        ],
        "dexterity": [
          "D",
          48
        ],
        "intelligence": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            54
          ],
          "dexterity": [
            "C",
            86
          ],
          "intelligence": [
            "D",
            54
          ]
        }
      }
    }
  },
  "poleblade-of-the-bud": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/poleblade_of_the_bud_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          5
        ],
        "dexterity": [
          "D",
          25
        ],
        "arcane": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            45
          ],
          "arcane": [
            "B",
            90
          ]
        }
      }
    }
  },
  "scythe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/scythe_reaper_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          23
        ],
        "dexterity": [
          "C",
          65
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "B",
            97
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            137
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "A",
            157
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "E",
            20
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            34
          ],
          "faith": [
            "C",
            87
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "C",
            77
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            34
          ],
          "faith": [
            "C",
            87
          ]
        },
        "Magic": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            24
          ],
          "intelligence": [
            "B",
            98
          ]
        },
        "Cold": {
          "strength": [
            "D",
            38
          ],
          "dexterity": [
            "B",
            110
          ],
          "intelligence": [
            "C",
            60
          ]
        },
        "Poison": {
          "strength": [
            "D",
            39
          ],
          "dexterity": [
            "B",
            115
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            39
          ],
          "dexterity": [
            "B",
            115
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "D",
            39
          ],
          "arcane": [
            "B",
            133
          ]
        }
      }
    }
  },
  "grave-scythe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/grave_scythe_reaper_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          42
        ],
        "dexterity": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "D",
            45
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            123
          ]
        },
        "Keen": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            103
          ]
        },
        "Quality": {
          "strength": [
            "B",
            95
          ],
          "dexterity": [
            "B",
            95
          ]
        },
        "Fire": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "E",
            16
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "C",
            64
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "D",
            58
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "C",
            64
          ]
        },
        "Magic": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "E",
            11
          ],
          "intelligence": [
            "C",
            70
          ]
        },
        "Cold": {
          "strength": [
            "C",
            70
          ],
          "dexterity": [
            "D",
            51
          ],
          "intelligence": [
            "D",
            50
          ]
        },
        "Poison": {
          "strength": [
            "C",
            74
          ],
          "dexterity": [
            "D",
            53
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            74
          ],
          "dexterity": [
            "D",
            53
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "E",
            18
          ],
          "arcane": [
            "B",
            109
          ]
        }
      }
    }
  },
  "halo-scythe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/halo_scythe_reaper_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          28
        ],
        "dexterity": [
          "D",
          42
        ],
        "faith": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            50
          ],
          "dexterity": [
            "C",
            75
          ],
          "faith": [
            "D",
            36
          ]
        }
      }
    }
  },
  "winged-scythe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/winged_scythe_reaper_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "D",
          35
        ],
        "faith": [
          "D",
          45
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "C",
            63
          ],
          "faith": [
            "C",
            81
          ]
        }
      }
    }
  },
  "whip": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/whip_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          34
        ],
        "dexterity": [
          "D",
          45
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            51
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            126
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            128
          ]
        },
        "Quality": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "B",
            104
          ]
        },
        "Fire": {
          "strength": [
            "C",
            65
          ],
          "dexterity": [
            "E",
            18
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "C",
            66
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            65
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "C",
            66
          ]
        },
        "Magic": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            23
          ],
          "intelligence": [
            "C",
            77
          ]
        },
        "Cold": {
          "strength": [
            "D",
            57
          ],
          "dexterity": [
            "C",
            76
          ],
          "intelligence": [
            "C",
            78
          ]
        },
        "Poison": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            79
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            79
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            42
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "thorned-whip": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/thorned_whip_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            128
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "A",
            150
          ]
        },
        "Quality": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "B",
            100
          ]
        },
        "Fire": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "D",
            43
          ],
          "faith": [
            "C",
            64
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "D",
            43
          ],
          "faith": [
            "C",
            64
          ]
        },
        "Magic": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            31
          ],
          "intelligence": [
            "C",
            75
          ]
        },
        "Cold": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "C",
            60
          ]
        },
        "Poison": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "B",
            122
          ]
        }
      }
    }
  },
  "urumi": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/urumi_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "dexterity": [
          "C",
          70
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            105
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            142
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "S",
            184
          ]
        },
        "Quality": {
          "strength": [
            "B",
            110
          ],
          "dexterity": [
            "B",
            110
          ]
        },
        "Fire": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "E",
            20
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            50
          ],
          "faith": [
            "C",
            75
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "C",
            77
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            50
          ],
          "faith": [
            "C",
            75
          ]
        },
        "Magic": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            36
          ],
          "intelligence": [
            "B",
            91
          ]
        },
        "Cold": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "B",
            119
          ],
          "intelligence": [
            "C",
            68
          ]
        },
        "Poison": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "B",
            125
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "B",
            125
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            42
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "hoslows-petal-whip": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hoslows_petal_whip_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          28
        ],
        "dexterity": [
          "D",
          43
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            42
          ],
          "dexterity": [
            "C",
            64
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            117
          ]
        },
        "Keen": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Quality": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "B",
            93
          ]
        },
        "Fire": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "E",
            16
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "D",
            30
          ],
          "faith": [
            "D",
            52
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "D",
            58
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "D",
            30
          ],
          "faith": [
            "D",
            52
          ]
        },
        "Magic": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            22
          ],
          "intelligence": [
            "C",
            65
          ]
        },
        "Cold": {
          "strength": [
            "D",
            47
          ],
          "dexterity": [
            "C",
            72
          ],
          "intelligence": [
            "D",
            48
          ]
        },
        "Poison": {
          "strength": [
            "D",
            49
          ],
          "dexterity": [
            "C",
            76
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            49
          ],
          "dexterity": [
            "C",
            76
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "D",
            25
          ],
          "arcane": [
            "B",
            108
          ]
        }
      }
    }
  },
  "magma-whip-candlestick": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/magma_whip_candlestick_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "D",
          50
        ],
        "faith": [
          "D",
          38
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            90
          ],
          "faith": [
            "C",
            68
          ]
        }
      }
    }
  },
  "giants-red-braid": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/giant's_red_braid_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          55
        ],
        "dexterity": [
          "D",
          25
        ],
        "faith": [
          "D",
          50
        ]
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
        "strength": [
          "D",
          48
        ],
        "dexterity": [
          "D",
          43
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "C",
            64
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            148
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "B",
            137
          ]
        },
        "Quality": {
          "strength": [
            "B",
            114
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Fire": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "E",
            21
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "C",
            79
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Magic": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            15
          ],
          "intelligence": [
            "B",
            110
          ]
        },
        "Cold": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "C",
            72
          ],
          "intelligence": [
            "B",
            90
          ]
        },
        "Poison": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "C",
            72
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "C",
            72
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "D",
            25
          ],
          "arcane": [
            "B",
            138
          ]
        }
      }
    }
  },
  "spiked-caestus": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spiked_caestus_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          48
        ],
        "dexterity": [
          "D",
          43
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "C",
            64
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            148
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "B",
            137
          ]
        },
        "Quality": {
          "strength": [
            "B",
            114
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Fire": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "E",
            21
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "C",
            79
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Magic": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            15
          ],
          "intelligence": [
            "B",
            110
          ]
        },
        "Cold": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "C",
            72
          ],
          "intelligence": [
            "B",
            90
          ]
        },
        "Poison": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "C",
            72
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "C",
            72
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "D",
            25
          ],
          "arcane": [
            "B",
            138
          ]
        }
      }
    }
  },
  "katar": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/katar_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          30
        ],
        "dexterity": [
          "D",
          45
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            120
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            123
          ]
        },
        "Quality": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "B",
            100
          ]
        },
        "Fire": {
          "strength": [
            "C",
            65
          ],
          "dexterity": [
            "E",
            18
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            23
          ],
          "faith": [
            "C",
            75
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            65
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            23
          ],
          "faith": [
            "C",
            75
          ]
        },
        "Magic": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "E",
            16
          ],
          "intelligence": [
            "C",
            86
          ]
        },
        "Cold": {
          "strength": [
            "D",
            51
          ],
          "dexterity": [
            "C",
            76
          ],
          "intelligence": [
            "C",
            66
          ]
        },
        "Poison": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "C",
            79
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "C",
            79
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            27
          ],
          "arcane": [
            "B",
            113
          ]
        }
      }
    }
  },
  "iron-ball": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/iron_ball_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          56
        ],
        "dexterity": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            84
          ],
          "dexterity": [
            "D",
            30
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            150
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Quality": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "B",
            96
          ]
        },
        "Fire": {
          "strength": [
            "C",
            65
          ],
          "dexterity": [
            "E",
            18
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            69
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            65
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            69
          ]
        },
        "Magic": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "C",
            87
          ]
        },
        "Cold": {
          "strength": [
            "B",
            95
          ],
          "dexterity": [
            "D",
            34
          ],
          "intelligence": [
            "C",
            60
          ]
        },
        "Poison": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            33
          ],
          "dexterity": [
            "E",
            12
          ],
          "arcane": [
            "B",
            115
          ]
        }
      }
    }
  },
  "star-fist": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/star_fist_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          56
        ],
        "dexterity": [
          "E",
          17
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            84
          ],
          "dexterity": [
            "D",
            25
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            145
          ]
        },
        "Keen": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            112
          ]
        },
        "Quality": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "B",
            93
          ]
        },
        "Fire": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "E",
            16
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            9
          ],
          "faith": [
            "C",
            66
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "C",
            63
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            9
          ],
          "faith": [
            "C",
            66
          ]
        },
        "Magic": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "E",
            6
          ],
          "intelligence": [
            "C",
            82
          ]
        },
        "Cold": {
          "strength": [
            "B",
            95
          ],
          "dexterity": [
            "D",
            28
          ],
          "intelligence": [
            "D",
            58
          ]
        },
        "Poison": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "D",
            30
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "D",
            30
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            33
          ],
          "dexterity": [
            "E",
            9
          ],
          "arcane": [
            "B",
            111
          ]
        }
      }
    }
  },
  "clinging-bone": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/clinging_bone_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "C",
          65
        ],
        "arcane": [
          "D",
          35
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            117
          ],
          "arcane": [
            "C",
            63
          ]
        }
      }
    }
  },
  "grafted-dragon": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/grafted_dragon_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          40
        ],
        "dexterity": [
          "D",
          25
        ],
        "faith": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "D",
            45
          ],
          "faith": [
            "D",
            54
          ]
        }
      }
    }
  },
  "cipher-pata": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cipher_pata_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "faith": [
          "C",
          80
        ]
      },
      "max": {
        "Standard": {
          "faith": [
            "A",
            144
          ]
        }
      }
    }
  },
  "hookclaws": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hookclaws_claw_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          22
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            33
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            131
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "A",
            152
          ]
        },
        "Quality": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "B",
            104
          ]
        },
        "Fire": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            23
          ],
          "intelligence": [
            "B",
            98
          ]
        },
        "Cold": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "C",
            64
          ]
        },
        "Poison": {
          "strength": [
            "D",
            38
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            38
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "B",
            124
          ]
        }
      }
    }
  },
  "venomous-fang": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/venomous_fang_claw_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          38
        ],
        "dexterity": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            57
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            142
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            137
          ]
        },
        "Quality": {
          "strength": [
            "B",
            114
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Fire": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "E",
            20
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "D",
            36
          ],
          "faith": [
            "C",
            89
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "C",
            81
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "D",
            36
          ],
          "faith": [
            "C",
            89
          ]
        },
        "Magic": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            19
          ],
          "intelligence": [
            "B",
            112
          ]
        },
        "Cold": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "C",
            85
          ],
          "intelligence": [
            "C",
            88
          ]
        },
        "Poison": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "C",
            89
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "C",
            89
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "D",
            30
          ],
          "arcane": [
            "B",
            133
          ]
        }
      }
    }
  },
  "bloodhound-claws": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodhound_claws_claw_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          43
        ],
        "dexterity": [
          "D",
          35
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "D",
            52
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            128
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            120
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            69
          ],
          "dexterity": [
            "E",
            18
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "C",
            78
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            69
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "C",
            78
          ]
        },
        "Magic": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "E",
            13
          ],
          "intelligence": [
            "B",
            91
          ]
        },
        "Cold": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "D",
            58
          ],
          "intelligence": [
            "C",
            70
          ]
        },
        "Poison": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "C",
            62
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "C",
            62
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            21
          ],
          "arcane": [
            "B",
            118
          ]
        }
      }
    }
  },
  "raptor-talons": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/raptor_talons_claw_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "C",
          72
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "B",
            108
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            145
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "A",
            170
          ]
        },
        "Quality": {
          "strength": [
            "B",
            114
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Fire": {
          "strength": [
            "C",
            86
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            54
          ],
          "faith": [
            "C",
            87
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            86
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            54
          ],
          "faith": [
            "C",
            87
          ]
        },
        "Magic": {
          "strength": [
            "E",
            5
          ],
          "dexterity": [
            "D",
            27
          ],
          "intelligence": [
            "B",
            115
          ]
        },
        "Cold": {
          "strength": [
            "E",
            17
          ],
          "dexterity": [
            "B",
            121
          ],
          "intelligence": [
            "C",
            82
          ]
        },
        "Poison": {
          "strength": [
            "E",
            17
          ],
          "dexterity": [
            "B",
            129
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "E",
            17
          ],
          "dexterity": [
            "B",
            129
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "C",
            75
          ],
          "arcane": [
            "B",
            124
          ]
        }
      }
    }
  },
  "giant-crusher": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/giant-crusher_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          86
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            129
          ]
        },
        "Heavy": {
          "strength": [
            "S",
            189
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "A",
            148
          ]
        },
        "Quality": {
          "strength": [
            "B",
            119
          ],
          "dexterity": [
            "B",
            119
          ]
        },
        "Fire": {
          "strength": [
            "B",
            90
          ],
          "dexterity": [
            "E",
            20
          ]
        },
        "Flame Art": {
          "strength": [
            "C",
            61
          ],
          "faith": [
            "B",
            94
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Sacred": {
          "strength": [
            "C",
            61
          ],
          "faith": [
            "B",
            94
          ]
        },
        "Magic": {
          "strength": [
            "D",
            44
          ],
          "intelligence": [
            "B",
            110
          ]
        },
        "Cold": {
          "strength": [
            "A",
            146
          ],
          "intelligence": [
            "C",
            76
          ]
        },
        "Poison": {
          "strength": [
            "A",
            153
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "A",
            153
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "B",
            102
          ],
          "arcane": [
            "B",
            131
          ]
        }
      }
    }
  },
  "prelates-inferno-crozier": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/prelates_inferno_crozier_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          76
        ],
        "dexterity": [
          "E",
          10
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            114
          ],
          "dexterity": [
            "E",
            15
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            174
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            134
          ]
        },
        "Quality": {
          "strength": [
            "B",
            112
          ],
          "dexterity": [
            "B",
            112
          ]
        },
        "Fire": {
          "strength": [
            "C",
            84
          ],
          "dexterity": [
            "E",
            14
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            57
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "C",
            78
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "C",
            84
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            57
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "C",
            78
          ]
        },
        "Magic": {
          "strength": [
            "D",
            39
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "B",
            101
          ]
        },
        "Cold": {
          "strength": [
            "B",
            129
          ],
          "dexterity": [
            "E",
            17
          ],
          "intelligence": [
            "C",
            68
          ]
        },
        "Poison": {
          "strength": [
            "B",
            136
          ],
          "dexterity": [
            "E",
            17
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            136
          ],
          "dexterity": [
            "E",
            17
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "B",
            90
          ],
          "arcane": [
            "B",
            131
          ]
        }
      }
    }
  },
  "duelist-greataxe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/duelist_greataxe_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          17
        ],
        "dexterity": [
          "D",
          58
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "C",
            87
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            126
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "A",
            140
          ]
        },
        "Quality": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "B",
            96
          ]
        },
        "Fire": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "E",
            18
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            30
          ],
          "faith": [
            "C",
            62
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            63
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            30
          ],
          "faith": [
            "C",
            62
          ]
        },
        "Magic": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "E",
            22
          ],
          "intelligence": [
            "C",
            70
          ]
        },
        "Cold": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "B",
            98
          ],
          "intelligence": [
            "D",
            52
          ]
        },
        "Poison": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "B",
            104
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "B",
            104
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            34
          ],
          "arcane": [
            "B",
            113
          ]
        }
      }
    }
  },
  "rotten-greataxe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_greataxe_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          17
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            128
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "A",
            142
          ]
        },
        "Quality": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "B",
            100
          ]
        },
        "Fire": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "E",
            18
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "C",
            62
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            63
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "C",
            62
          ]
        },
        "Magic": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "E",
            23
          ],
          "intelligence": [
            "C",
            70
          ]
        },
        "Cold": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "D",
            52
          ]
        },
        "Poison": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "B",
            117
          ]
        }
      }
    }
  },
  "golems-halberd": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golems_halberd_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          58
        ],
        "dexterity": [
          "D",
          26
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            87
          ],
          "dexterity": [
            "D",
            39
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            163
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            125
          ]
        },
        "Quality": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "B",
            104
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "C",
            71
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            71
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "C",
            71
          ]
        },
        "Magic": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "E",
            11
          ],
          "intelligence": [
            "C",
            64
          ]
        },
        "Cold": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "D",
            43
          ],
          "intelligence": [
            "C",
            66
          ]
        },
        "Poison": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "D",
            45
          ],
          "arcane": [
            "D",
            63
          ]
        },
        "Blood": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "D",
            45
          ],
          "arcane": [
            "D",
            63
          ]
        },
        "Occult": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "E",
            15
          ],
          "arcane": [
            "B",
            127
          ]
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
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "D",
          35
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "C",
            63
          ]
        }
      }
    }
  },
  "staff-of-the-avatar": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/staff_of_the_avatar_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          84
        ],
        "dexterity": [
          "E",
          20
        ],
        "faith": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "A",
            151
          ],
          "dexterity": [
            "D",
            36
          ],
          "faith": [
            "B",
            90
          ]
        }
      }
    }
  },
  "ghizas-wheel": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ghiza's_wheel_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          42
        ],
        "dexterity": [
          "D",
          42
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "C",
            75
          ]
        }
      }
    }
  },
  "fallingstar-beast-jaw": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fallingstar_beast_jaw_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          41
        ],
        "dexterity": [
          "D",
          41
        ],
        "intelligence": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "C",
            73
          ],
          "intelligence": [
            "D",
            36
          ]
        }
      }
    }
  },
  "axe-of-godfrey": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/axe_of_godfrey_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          47
        ],
        "dexterity": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            84
          ],
          "dexterity": [
            "D",
            54
          ]
        }
      }
    }
  },
  "milady": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/milady_light_greatswords_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          30
        ],
        "dexterity": [
          "D",
          55
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "C",
            82
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            128
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            126
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "E",
            20
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "D",
            28
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "C",
            73
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "D",
            28
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Magic": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "E",
            20
          ],
          "intelligence": [
            "B",
            91
          ]
        },
        "Cold": {
          "strength": [
            "D",
            51
          ],
          "dexterity": [
            "B",
            93
          ],
          "intelligence": [
            "C",
            76
          ]
        },
        "Poison": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "B",
            98
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "B",
            98
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            33
          ],
          "arcane": [
            "B",
            129
          ]
        }
      }
    }
  },
  "ledas-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ledas_sword_light_greatswords_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "dexterity": [
          "C",
          60
        ],
        "faith": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "B",
            108
          ],
          "faith": [
            "D",
            54
          ]
        }
      }
    }
  },
  "rellanas-twin-blades": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rellanas_twinblade_light_greatswords_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          37
        ],
        "dexterity": [
          "D",
          37
        ],
        "intelligence": [
          "D",
          34
        ],
        "faith": [
          "D",
          34
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "C",
            66
          ],
          "intelligence": [
            "C",
            61
          ],
          "faith": [
            "C",
            61
          ]
        }
      }
    }
  },
  "great-katana": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_katana_great_katana_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          30
        ],
        "dexterity": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            123
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            123
          ]
        },
        "Quality": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "B",
            98
          ]
        },
        "Fire": {
          "strength": [
            "C",
            69
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            69
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "E",
            19
          ],
          "intelligence": [
            "C",
            84
          ]
        },
        "Cold": {
          "strength": [
            "D",
            51
          ],
          "dexterity": [
            "C",
            85
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "C",
            89
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "C",
            89
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            30
          ],
          "arcane": [
            "B",
            122
          ]
        }
      }
    }
  },
  "dragon-hunters-great-katana": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon-hunters_great_katana_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          37
        ],
        "dexterity": [
          "D",
          37
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "C",
            66
          ]
        }
      }
    }
  },
  "rakshasas-great-katana": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rakshasas_great_katana_great_katana_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "dexterity": [
          "C",
          61
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "B",
            109
          ]
        }
      }
    }
  },
  "backhand-blade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/backhand_blade_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "D",
          55
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "C",
            82
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            154
          ]
        },
        "Keen": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "S",
            175
          ]
        },
        "Quality": {
          "strength": [
            "B",
            119
          ],
          "dexterity": [
            "B",
            119
          ]
        },
        "Fire": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "E",
            12
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "D",
            28
          ],
          "faith": [
            "B",
            126
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "B",
            98
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "D",
            28
          ],
          "faith": [
            "B",
            126
          ]
        },
        "Magic": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            20
          ],
          "intelligence": [
            "B",
            131
          ]
        },
        "Cold": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "B",
            93
          ],
          "intelligence": [
            "B",
            104
          ]
        },
        "Poison": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "B",
            98
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "B",
            98
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "D",
            33
          ],
          "arcane": [
            "A",
            153
          ]
        }
      }
    }
  },
  "smithscript-cirque": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithscript_cirque_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          35
        ],
        "dexterity": [
          "D",
          50
        ],
        "intelligence": [
          "E",
          10
        ],
        "faith": [
          "E",
          10
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            52
          ],
          "dexterity": [
            "C",
            75
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            159
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Keen": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "S",
            182
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Quality": {
          "strength": [
            "B",
            125
          ],
          "dexterity": [
            "B",
            125
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Fire": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "E",
            12
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            27
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "B",
            131
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            27
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "B",
            131
          ]
        },
        "Magic": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "E",
            19
          ],
          "intelligence": [
            "B",
            108
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Cold": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "C",
            85
          ],
          "intelligence": [
            "B",
            108
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Poison": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "C",
            89
          ],
          "intelligence": [
            "E",
            19
          ],
          "faith": [
            "E",
            19
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "C",
            89
          ],
          "intelligence": [
            "E",
            19
          ],
          "faith": [
            "E",
            19
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "D",
            30
          ],
          "intelligence": [
            "E",
            15
          ],
          "faith": [
            "E",
            15
          ],
          "arcane": [
            "A",
            160
          ]
        }
      }
    }
  },
  "curseblades-cirque": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/curseblades_cirque_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "C",
          75
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            135
          ]
        }
      }
    }
  },
  "smithscript-dagger": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithscript_dagger_throwing_blade_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "C",
          65
        ],
        "intelligence": [
          "E",
          10
        ],
        "faith": [
          "E",
          10
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "B",
            97
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            159
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Keen": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "S",
            182
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Quality": {
          "strength": [
            "B",
            125
          ],
          "dexterity": [
            "B",
            125
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Fire": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "E",
            12
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            34
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "B",
            131
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            34
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "B",
            131
          ]
        },
        "Magic": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            24
          ],
          "intelligence": [
            "B",
            136
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Cold": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "B",
            110
          ],
          "intelligence": [
            "B",
            108
          ],
          "faith": [
            "E",
            18
          ]
        },
        "Poison": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            115
          ],
          "intelligence": [
            "E",
            19
          ],
          "faith": [
            "E",
            19
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            115
          ],
          "intelligence": [
            "E",
            19
          ],
          "faith": [
            "E",
            19
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            39
          ],
          "intelligence": [
            "E",
            15
          ],
          "faith": [
            "E",
            15
          ],
          "arcane": [
            "A",
            160
          ]
        }
      }
    }
  },
  "dryleaf-arts": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dryleaf_arts_hand-to-hand_arts_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "D",
          45
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            148
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "B",
            134
          ]
        },
        "Quality": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "B",
            115
          ]
        },
        "Fire": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "E",
            21
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "E",
            23
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "C",
            77
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "E",
            23
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Magic": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            16
          ],
          "intelligence": [
            "B",
            108
          ]
        },
        "Cold": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "C",
            76
          ],
          "intelligence": [
            "B",
            90
          ]
        },
        "Poison": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "C",
            76
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "C",
            76
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "D",
            27
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "danes-footwork": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/danes_footwork_hand-to-hand_arts_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "D",
          45
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            148
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "B",
            134
          ]
        },
        "Quality": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "B",
            115
          ]
        },
        "Fire": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "E",
            21
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "E",
            23
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "C",
            77
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "E",
            23
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Magic": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            16
          ],
          "intelligence": [
            "B",
            108
          ]
        },
        "Cold": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "C",
            76
          ],
          "intelligence": [
            "B",
            90
          ]
        },
        "Poison": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "C",
            76
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "C",
            76
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "D",
            27
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "beast-claw": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/beast_claw_beast_claws_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          55
        ],
        "dexterity": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            82
          ],
          "dexterity": [
            "D",
            45
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            140
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            131
          ]
        },
        "Quality": {
          "strength": [
            "B",
            110
          ],
          "dexterity": [
            "B",
            110
          ]
        },
        "Fire": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "E",
            20
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            39
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "C",
            87
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "C",
            79
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            39
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "C",
            87
          ]
        },
        "Magic": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "E",
            11
          ],
          "intelligence": [
            "B",
            108
          ]
        },
        "Cold": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "D",
            51
          ],
          "intelligence": [
            "C",
            84
          ]
        },
        "Poison": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "D",
            53
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "D",
            53
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            33
          ],
          "dexterity": [
            "E",
            18
          ],
          "arcane": [
            "B",
            129
          ]
        }
      }
    }
  },
  "red-bears-claw": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/red_bears_claw_beast_claws_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          62
        ],
        "dexterity": [
          "E",
          18
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            111
          ],
          "dexterity": [
            "D",
            32
          ]
        }
      }
    }
  },
  "firespark-perfume": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/firespark_perfume_bottle_perfume_bottles_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "dexterity": [
          "C",
          80
        ]
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
        "dexterity": [
          "D",
          40
        ],
        "intelligence": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "dexterity": "D",
          "intelligence": "D"
        }
      }
    }
  },
  "frenzyflame-perfume": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/frenzyflame_perfume_bottle_perfume_bottles_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          18
        ],
        "dexterity": [
          "D",
          40
        ],
        "intelligence": [
          "E",
          18
        ],
        "faith": [
          "E",
          18
        ]
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "D",
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
        "dexterity": [
          "D",
          40
        ],
        "faith": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "dexterity": "D",
          "faith": "D"
        }
      }
    }
  },
  "deadly-poison-perfume": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/deadly_poison_perfume_bottle_perfume_bottles_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "dexterity": [
          "D",
          40
        ],
        "arcane": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "dexterity": [
            "C",
            72
          ],
          "arcane": [
            "C",
            72
          ]
        }
      }
    }
  },
  "staff-of-the-great-beyond": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/staff_of_the_great_beyond_glintstone_staff_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          12
        ],
        "intelligence": [
          "D",
          46
        ],
        "faith": [
          "D",
          46
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            36
          ],
          "intelligence": [
            "B",
            138
          ],
          "faith": [
            "B",
            138
          ]
        }
      }
    }
  },
  "maternal-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dryleaf_seal_glinstone_staff_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_75px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          12
        ],
        "intelligence": [
          "D",
          55
        ],
        "arcane": [
          "D",
          55
        ]
      },
      "max": {
        "Standard": {
          "strength": "E",
          "intelligence": "B",
          "arcane": "B"
        }
      }
    }
  },
  "astrologers-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/astrologers_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          12
        ],
        "intelligence": [
          "C",
          89
        ]
      },
      "max": {
        "Standard": {
          "strength": "E",
          "intelligence": "A"
        }
      }
    }
  },
  "glintstone-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/glintstone_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          12
        ],
        "intelligence": [
          "C",
          85
        ]
      },
      "max": {
        "Standard": {
          "strength": "E",
          "intelligence": "A"
        }
      }
    }
  },
  "academy-glintstone-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/academy_glintstone_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          12
        ],
        "intelligence": [
          "B",
          91
        ]
      },
      "max": {
        "Standard": {
          "strength": "E",
          "intelligence": "A"
        }
      }
    }
  },
  "diggers-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/diggers_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "intelligence": [
          "C",
          76
        ]
      },
      "max": {
        "Standard": {
          "strength": "D",
          "intelligence": "B"
        }
      }
    }
  },
  "demi-human-queens-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/demi-human_queens_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "intelligence": [
          "C",
          75
        ]
      },
      "max": {
        "Standard": {
          "strength": "D",
          "intelligence": "B"
        }
      }
    }
  },
  "azurs-glintstone-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/azurs_glintstone_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "intelligence": [
          "B",
          92
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            75
          ],
          "intelligence": [
            "S",
            276
          ]
        }
      }
    }
  },
  "lusats-glintstone-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lusats_glintstone_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "intelligence": [
          "B",
          110
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            75
          ],
          "intelligence": [
            "S",
            330
          ]
        }
      }
    }
  },
  "carian-glintstone-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_glintstone_staff_glintstone_staffs-elden-ring-wiki-guide-200.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          12
        ],
        "intelligence": [
          "C",
          85
        ]
      },
      "max": {
        "Standard": {
          "strength": "E",
          "intelligence": "A"
        }
      }
    }
  },
  "carian-glintblade-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_glintblade_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          12
        ],
        "dexterity": [
          "E",
          10
        ],
        "intelligence": [
          "C",
          88
        ]
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "A"
        }
      }
    }
  },
  "carian-regal-scepter": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_regal_scepter_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          12
        ],
        "dexterity": [
          "E",
          10
        ],
        "intelligence": [
          "B",
          96
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "D",
            30
          ],
          "intelligence": [
            "S",
            288
          ]
        }
      }
    }
  },
  "albinauric-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/albinauric_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          12
        ],
        "intelligence": [
          "D",
          30
        ],
        "arcane": [
          "C",
          70
        ]
      },
      "max": {
        "Standard": {
          "strength": "E",
          "intelligence": "D",
          "arcane": "B"
        }
      }
    }
  },
  "staff-of-loss": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/staff_of_loss_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          12
        ],
        "dexterity": [
          "E",
          10
        ],
        "intelligence": [
          "C",
          84
        ]
      },
      "max": {
        "Standard": {
          "strength": "E",
          "dexterity": "E",
          "intelligence": "A"
        }
      }
    }
  },
  "gelmir-glintstone-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gelmir_glintstone_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          12
        ],
        "intelligence": [
          "D",
          40
        ],
        "faith": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": "E",
          "intelligence": "C",
          "faith": "C"
        }
      }
    }
  },
  "crystal-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crystal_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "intelligence": [
          "B",
          94
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            75
          ],
          "intelligence": [
            "S",
            282
          ]
        }
      }
    }
  },
  "rotten-crystal-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_crystal_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "intelligence": [
          "B",
          93
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            75
          ],
          "intelligence": [
            "S",
            279
          ]
        }
      }
    }
  },
  "meteorite-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/meteorite_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "intelligence": [
          "S",
          192
        ]
      },
      "max": {}
    }
  },
  "staff-of-the-guilty": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/staff_of_the_guilty_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "faith": [
          "C",
          76
        ]
      },
      "max": {
        "Standard": {
          "strength": "D",
          "faith": "B"
        }
      }
    }
  },
  "prince-of-deaths-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/prince_of_deaths_staff_glintstonestaff_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          12
        ],
        "intelligence": [
          "D",
          58
        ],
        "faith": [
          "D",
          58
        ]
      },
      "max": {
        "Standard": {
          "strength": "E",
          "intelligence": "B",
          "faith": "B"
        }
      }
    }
  },
  "dryleaf-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dryleaf_seal_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_75px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "faith": [
          "C",
          80
        ]
      },
      "max": {
        "Standard": {
          "strength": "D",
          "faith": "A"
        }
      }
    }
  },
  "fire-knights-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fire_knights_seal_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "faith": [
          "C",
          82
        ]
      },
      "max": {
        "Standard": {
          "strength": "D",
          "faith": "A"
        }
      }
    }
  },
  "spiraltree-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spiraltree_seal_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "faith": [
          "C",
          76
        ]
      },
      "max": {
        "Standard": {
          "strength": "D",
          "faith": "B"
        }
      }
    }
  },
  "finger-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/finger_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "faith": [
          "C",
          83
        ]
      },
      "max": {
        "Standard": {
          "strength": "D",
          "faith": "A"
        }
      }
    }
  },
  "erdtree-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "faith": [
          "C",
          89
        ]
      },
      "max": {
        "Standard": {
          "faith": [
            "S",
            267
          ]
        }
      }
    }
  },
  "golden-order-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_order_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "intelligence": [
          "D",
          53
        ],
        "faith": [
          "D",
          53
        ]
      },
      "max": {
        "Standard": {
          "intelligence": [
            "A",
            159
          ],
          "faith": [
            "A",
            159
          ]
        }
      }
    }
  },
  "gravel-stone-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gravel_stone_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "faith": [
          "C",
          81
        ]
      },
      "max": {
        "Standard": {
          "strength": "D",
          "faith": "A"
        }
      }
    }
  },
  "giants-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/giants_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "faith": [
          "C",
          77
        ]
      },
      "max": {
        "Standard": {
          "strength": "D",
          "faith": "B"
        }
      }
    }
  },
  "godslayers-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godslayers_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "faith": [
          "C",
          85
        ]
      },
      "max": {
        "Standard": {
          "strength": "D",
          "faith": "A"
        }
      }
    }
  },
  "clawmark-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/clawmark_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          40
        ],
        "faith": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": "C",
          "faith": "C"
        }
      }
    }
  },
  "frenzied-flame-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/frenzied_flame_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "E",
          20
        ],
        "intelligence": [
          "E",
          20
        ],
        "faith": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            60
          ],
          "intelligence": [
            "C",
            60
          ],
          "faith": [
            "B",
            120
          ]
        }
      }
    }
  },
  "dragon-communion-seal": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon_communion_seal_sacred_seal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "faith": [
          "D",
          30
        ],
        "arcane": [
          "C",
          75
        ]
      },
      "max": {
        "Standard": {
          "faith": [
            "B",
            90
          ],
          "arcane": [
            "S",
            225
          ]
        }
      }
    }
  },
  "lizard-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lizard_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          28
        ],
        "dexterity": [
          "D",
          48
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            42
          ],
          "dexterity": [
            "C",
            72
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            114
          ]
        },
        "Keen": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "B",
            137
          ]
        },
        "Quality": {
          "strength": [
            "C",
            89
          ],
          "dexterity": [
            "C",
            89
          ]
        },
        "Fire": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "D",
            25
          ],
          "faith": [
            "C",
            87
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            73
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "D",
            25
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            18
          ],
          "intelligence": [
            "C",
            84
          ]
        },
        "Cold": {
          "strength": [
            "D",
            47
          ],
          "dexterity": [
            "C",
            81
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "D",
            49
          ],
          "dexterity": [
            "C",
            85
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            49
          ],
          "dexterity": [
            "C",
            85
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "D",
            28
          ],
          "arcane": [
            "B",
            115
          ]
        }
      }
    }
  },
  "erdsteel-dagger": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdsteel_dagger_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          30
        ],
        "dexterity": [
          "D",
          30
        ],
        "faith": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "D",
            45
          ],
          "faith": [
            "D",
            54
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            140
          ],
          "faith": [
            "D",
            43
          ]
        },
        "Keen": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "A",
            145
          ],
          "faith": [
            "D",
            43
          ]
        },
        "Quality": {
          "strength": [
            "B",
            119
          ],
          "dexterity": [
            "B",
            119
          ],
          "faith": [
            "D",
            43
          ]
        },
        "Fire": {
          "strength": [
            "C",
            86
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "D",
            43
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "B",
            126
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            86
          ],
          "faith": [
            "D",
            43
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "B",
            126
          ]
        },
        "Magic": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "E",
            11
          ],
          "intelligence": [
            "B",
            117
          ],
          "faith": [
            "D",
            43
          ]
        },
        "Cold": {
          "strength": [
            "D",
            51
          ],
          "dexterity": [
            "D",
            51
          ],
          "intelligence": [
            "B",
            98
          ],
          "faith": [
            "D",
            43
          ]
        },
        "Poison": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "D",
            53
          ],
          "faith": [
            "D",
            45
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            53
          ],
          "dexterity": [
            "D",
            53
          ],
          "faith": [
            "D",
            45
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "D",
            36
          ],
          "arcane": [
            "A",
            142
          ]
        }
      }
    }
  },
  "celebrants-sickle": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/celebrants-sickle_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "dexterity": [
          "C",
          67
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            100
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            137
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "A",
            172
          ]
        },
        "Quality": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "B",
            108
          ]
        },
        "Fire": {
          "strength": [
            "C",
            86
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            36
          ],
          "faith": [
            "B",
            101
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            86
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "D",
            36
          ],
          "faith": [
            "B",
            101
          ]
        },
        "Magic": {
          "strength": [
            "E",
            5
          ],
          "dexterity": [
            "D",
            26
          ],
          "intelligence": [
            "B",
            112
          ]
        },
        "Cold": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "B",
            114
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "B",
            119
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "B",
            119
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "D",
            39
          ],
          "arcane": [
            "B",
            131
          ]
        }
      }
    }
  },
  "ivory-sickle": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ivory_sickle_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          23
        ],
        "dexterity": [
          "D",
          59
        ],
        "intelligence": [
          "D",
          40
        ]
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
  "crystal-knife": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crystal_knife_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          40
        ],
        "dexterity": [
          "D",
          25
        ],
        "intelligence": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "D",
          "intelligence": "C"
        }
      }
    }
  },
  "scorpions-stinger": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/scorpions_stinger_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          30
        ],
        "dexterity": [
          "C",
          70
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            54
          ],
          "dexterity": [
            "B",
            126
          ]
        }
      }
    }
  },
  "cinquedea": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cinquedea_dagger_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          57
        ],
        "dexterity": [
          "E",
          17
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "D",
            30
          ]
        }
      }
    }
  },
  "velvet-sword-of-st-trina": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/velvet_sword_of_st_trina_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "D",
          33
        ],
        "intelligence": [
          "E",
          24
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "D",
            59
          ],
          "intelligence": [
            "D",
            43
          ]
        }
      }
    }
  },
  "stone-sheathed-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/stone-sheathed_sword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          65
        ],
        "dexterity": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            117
          ],
          "dexterity": [
            "D",
            54
          ]
        }
      }
    }
  },
  "weathered-straight-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/weathered_straight_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          34
        ],
        "dexterity": [
          "D",
          44
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            51
          ],
          "dexterity": [
            "C",
            66
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            123
          ]
        },
        "Keen": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "B",
            123
          ]
        },
        "Quality": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "B",
            100
          ]
        },
        "Fire": {
          "strength": [
            "C",
            69
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            23
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            69
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            23
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "E",
            16
          ],
          "intelligence": [
            "C",
            89
          ]
        },
        "Cold": {
          "strength": [
            "D",
            57
          ],
          "dexterity": [
            "C",
            74
          ],
          "intelligence": [
            "C",
            78
          ]
        },
        "Poison": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            77
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            77
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "D",
            25
          ],
          "arcane": [
            "B",
            118
          ]
        }
      }
    }
  },
  "cane-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cane_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "D",
          55
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "C",
            82
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            120
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "A",
            140
          ]
        },
        "Quality": {
          "strength": [
            "B",
            95
          ],
          "dexterity": [
            "B",
            95
          ]
        },
        "Fire": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            28
          ],
          "faith": [
            "C",
            71
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            28
          ],
          "faith": [
            "C",
            71
          ]
        },
        "Magic": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            20
          ],
          "intelligence": [
            "C",
            84
          ]
        },
        "Cold": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "B",
            93
          ],
          "intelligence": [
            "C",
            63
          ]
        },
        "Poison": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            98
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            98
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            33
          ],
          "arcane": [
            "B",
            109
          ]
        }
      }
    }
  },
  "lazuli-glintstone-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lazuli_glintstone_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          38
        ],
        "dexterity": [
          "E",
          15
        ],
        "intelligence": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "D",
            27
          ],
          "intelligence": [
            "D",
            54
          ]
        }
      }
    }
  },
  "rotten-crystal-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_crystal_sword_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          44
        ],
        "dexterity": [
          "E",
          15
        ],
        "intelligence": [
          "D",
          32
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "D",
            27
          ],
          "intelligence": [
            "D",
            57
          ]
        }
      }
    }
  },
  "ornamental-straight-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ornamental_straight_sword_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "D",
          55
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            99
          ]
        }
      }
    }
  },
  "sword-of-st-trina": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_st_trina_straight_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          28
        ],
        "dexterity": [
          "D",
          40
        ],
        "intelligence": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            50
          ],
          "dexterity": [
            "C",
            72
          ],
          "intelligence": [
            "D",
            36
          ]
        }
      }
    }
  },
  "greatsword-of-damnation": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_of_damnation_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          38
        ],
        "dexterity": [
          "E",
          21
        ],
        "faith": [
          "D",
          25
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "D",
            37
          ],
          "faith": [
            "D",
            45
          ]
        }
      }
    }
  },
  "greatsword-of-solitude": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/greatsword_of_solitude_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "B",
          95
        ],
        "dexterity": [
          "E",
          15
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "A",
            171
          ],
          "dexterity": [
            "D",
            27
          ]
        }
      }
    }
  },
  "lordsworns-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lordsworns_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          43
        ],
        "dexterity": [
          "D",
          37
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "D",
            55
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            126
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            117
          ]
        },
        "Quality": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "B",
            102
          ]
        },
        "Fire": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "C",
            84
          ]
        },
        "Cold": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "C",
            62
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "C",
            66
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "C",
            66
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            21
          ],
          "arcane": [
            "B",
            122
          ]
        }
      }
    }
  },
  "forked-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/forked_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          35
        ],
        "dexterity": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            52
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            128
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            126
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "E",
            20
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "C",
            73
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Magic": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "E",
            19
          ],
          "intelligence": [
            "B",
            91
          ]
        },
        "Cold": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "C",
            85
          ],
          "intelligence": [
            "C",
            76
          ]
        },
        "Poison": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "C",
            89
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "C",
            89
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "D",
            30
          ],
          "arcane": [
            "B",
            129
          ]
        }
      }
    }
  },
  "gargoyles-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          76
        ],
        "dexterity": [
          "E",
          5
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            114
          ],
          "dexterity": [
            "E",
            7
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            171
          ]
        },
        "Keen": {
          "strength": [
            "D",
            41
          ],
          "dexterity": [
            "B",
            123
          ]
        },
        "Quality": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "B",
            108
          ]
        },
        "Fire": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            39
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            81
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            39
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Magic": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "B",
            103
          ]
        },
        "Cold": {
          "strength": [
            "B",
            129
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "B",
            136
          ],
          "dexterity": [
            "E",
            7
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            136
          ],
          "dexterity": [
            "E",
            7
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "E",
            6
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "gargoyles-blackblade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles_blackblade_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          40
        ],
        "dexterity": [
          "E",
          15
        ],
        "faith": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "D",
            54
          ]
        }
      }
    }
  },
  "inseparable-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/inseparable_sword_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          27
        ],
        "dexterity": [
          "D",
          27
        ],
        "faith": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            48
          ],
          "dexterity": [
            "D",
            48
          ],
          "faith": [
            "B",
            108
          ]
        }
      }
    }
  },
  "sword-of-milos": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_milos_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          34
        ],
        "dexterity": [
          "D",
          47
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            61
          ],
          "dexterity": [
            "C",
            84
          ]
        }
      }
    }
  },
  "ordoviss-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ordoviss_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          79
        ],
        "dexterity": [
          "E",
          10
        ],
        "faith": [
          "D",
          35
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "A",
            142
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "C",
            63
          ]
        }
      }
    }
  },
  "alabaster-lords-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/alabaster_lords_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          58
        ],
        "dexterity": [
          "E",
          20
        ],
        "intelligence": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "D",
            36
          ],
          "intelligence": [
            "D",
            54
          ]
        }
      }
    }
  },
  "deaths-poker": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/deaths_poker_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          35
        ],
        "dexterity": [
          "D",
          50
        ],
        "intelligence": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "B",
            90
          ],
          "intelligence": [
            "D",
            36
          ]
        }
      }
    }
  },
  "helphens-steeple": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/helphens_steeple.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          35
        ],
        "dexterity": [
          "E",
          10
        ],
        "intelligence": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "E",
            18
          ],
          "intelligence": [
            "B",
            90
          ]
        }
      }
    }
  },
  "cleanrot-knights-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cleanrot_knight's_sword_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "D",
            45
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            126
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            109
          ]
        },
        "Quality": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "B",
            96
          ]
        },
        "Fire": {
          "strength": [
            "C",
            65
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            65
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Magic": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "C",
            86
          ]
        },
        "Cold": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "D",
            51
          ],
          "intelligence": [
            "C",
            66
          ]
        },
        "Poison": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "D",
            51
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "D",
            51
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            18
          ],
          "arcane": [
            "B",
            113
          ]
        }
      }
    }
  },
  "sword-lance": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_lance_heavy_thrusting_sword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          65
        ],
        "dexterity": [
          "E",
          8
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            97
          ],
          "dexterity": [
            "E",
            12
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            173
          ]
        },
        "Keen": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            126
          ]
        },
        "Quality": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "B",
            102
          ]
        },
        "Fire": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "E",
            16
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            46
          ],
          "dexterity": [
            "E",
            5
          ],
          "faith": [
            "C",
            69
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "C",
            73
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            46
          ],
          "dexterity": [
            "E",
            5
          ],
          "faith": [
            "C",
            69
          ]
        },
        "Magic": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "E",
            2
          ],
          "intelligence": [
            "C",
            84
          ]
        },
        "Cold": {
          "strength": [
            "B",
            110
          ],
          "dexterity": [
            "E",
            13
          ],
          "intelligence": [
            "D",
            50
          ]
        },
        "Poison": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "E",
            11
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "E",
            11
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "E",
            6
          ],
          "arcane": [
            "B",
            111
          ]
        }
      }
    }
  },
  "queeligns-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/queeligns_greatsword_heavy_thrusting_sword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          30
        ],
        "dexterity": [
          "D",
          45
        ],
        "faith": [
          "D",
          25
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "C",
            67
          ],
          "faith": [
            "D",
            45
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            145
          ],
          "faith": [
            "D",
            45
          ]
        },
        "Keen": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "A",
            145
          ],
          "faith": [
            "D",
            45
          ]
        },
        "Quality": {
          "strength": [
            "B",
            119
          ],
          "dexterity": [
            "B",
            119
          ],
          "faith": [
            "D",
            45
          ]
        },
        "Fire": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            24
          ],
          "faith": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "B",
            94
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "C",
            84
          ],
          "faith": [
            "D",
            36
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Magic": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "B",
            117
          ],
          "faith": [
            "D",
            45
          ]
        },
        "Cold": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "C",
            68
          ],
          "intelligence": [
            "B",
            120
          ],
          "faith": [
            "D",
            45
          ]
        },
        "Poison": {
          "strength": [
            "D",
            57
          ],
          "dexterity": [
            "C",
            85
          ],
          "faith": [
            "D",
            47
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            57
          ],
          "dexterity": [
            "C",
            85
          ],
          "faith": [
            "D",
            47
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "E",
            9
          ],
          "arcane": [
            "A",
            153
          ]
        }
      }
    }
  },
  "spirit-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spirit_sword_1_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "D",
          40
        ],
        "intelligence": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            72
          ],
          "intelligence": [
            "C",
            72
          ]
        }
      }
    }
  },
  "falx": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/falx_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          30
        ],
        "dexterity": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            54
          ],
          "dexterity": [
            "B",
            90
          ]
        }
      }
    }
  },
  "dancing-blade-of-ranah": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dancing_blade_of_ranah_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "dexterity": [
          "B",
          95
        ]
      },
      "max": {
        "Standard": {
          "dexterity": [
            "A",
            171
          ]
        }
      }
    }
  },
  "horned-warriors-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/horned_warriors_sword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          29
        ],
        "dexterity": [
          "D",
          44
        ],
        "faith": [
          "E",
          24
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            52
          ],
          "dexterity": [
            "C",
            79
          ],
          "faith": [
            "D",
            43
          ]
        }
      }
    }
  },
  "grossmesser": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/grossmesser_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          47
        ],
        "dexterity": [
          "D",
          36
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            70
          ],
          "dexterity": [
            "D",
            54
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            134
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            120
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            71
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Magic": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "E",
            9
          ],
          "intelligence": [
            "B",
            96
          ]
        },
        "Cold": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "C",
            60
          ],
          "intelligence": [
            "C",
            78
          ]
        },
        "Poison": {
          "strength": [
            "C",
            83
          ],
          "dexterity": [
            "C",
            64
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            83
          ],
          "dexterity": [
            "C",
            64
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            21
          ],
          "arcane": [
            "B",
            126
          ]
        }
      }
    }
  },
  "mantis-blade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/mantis_blade_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          36
        ],
        "dexterity": [
          "D",
          48
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            54
          ],
          "dexterity": [
            "C",
            72
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            134
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            131
          ]
        },
        "Quality": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "B",
            108
          ]
        },
        "Fire": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            25
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            73
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "D",
            25
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Magic": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            11
          ],
          "intelligence": [
            "B",
            98
          ]
        },
        "Cold": {
          "strength": [
            "C",
            60
          ],
          "dexterity": [
            "C",
            81
          ],
          "intelligence": [
            "C",
            80
          ]
        },
        "Poison": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "C",
            85
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "C",
            85
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "D",
            28
          ],
          "arcane": [
            "B",
            127
          ]
        }
      }
    }
  },
  "flowing-curved-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/flowing_curved_sword_curved_sword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "dexterity": [
          "D",
          55
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            37
          ],
          "dexterity": [
            "C",
            82
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            128
          ]
        },
        "Keen": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "A",
            155
          ]
        },
        "Quality": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "B",
            102
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            19
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            28
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "C",
            71
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            28
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "B",
            94
          ]
        },
        "Cold": {
          "strength": [
            "D",
            41
          ],
          "dexterity": [
            "B",
            93
          ],
          "intelligence": [
            "C",
            64
          ]
        },
        "Poison": {
          "strength": [
            "D",
            43
          ],
          "dexterity": [
            "B",
            98
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            43
          ],
          "dexterity": [
            "B",
            98
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "D",
            33
          ],
          "arcane": [
            "B",
            122
          ]
        }
      }
    }
  },
  "serpent-gods-curved-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpent-god's_curved_sword_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          55
        ],
        "dexterity": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            82
          ],
          "dexterity": [
            "D",
            30
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            148
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            112
          ]
        },
        "Quality": {
          "strength": [
            "B",
            95
          ],
          "dexterity": [
            "B",
            95
          ]
        },
        "Fire": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "E",
            18
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            69
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            63
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            69
          ]
        },
        "Magic": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "C",
            86
          ]
        },
        "Cold": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "D",
            34
          ],
          "intelligence": [
            "C",
            60
          ]
        },
        "Poison": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            33
          ],
          "dexterity": [
            "E",
            12
          ],
          "arcane": [
            "B",
            113
          ]
        }
      }
    }
  },
  "nox-flowing-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/nox_flowing_sword_curved_sword_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            90
          ]
        }
      }
    }
  },
  "horned-warriors-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/horned_warriors_greatsword_curved_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          51
        ],
        "dexterity": [
          "D",
          25
        ],
        "faith": [
          "D",
          25
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            91
          ],
          "dexterity": [
            "D",
            45
          ],
          "faith": [
            "D",
            45
          ]
        }
      }
    }
  },
  "freyjas-greatsword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/freyjas_greatsword_greatsword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          60
        ],
        "dexterity": [
          "E",
          10
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            90
          ],
          "dexterity": [
            "E",
            15
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            156
          ]
        },
        "Keen": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            123
          ]
        },
        "Quality": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "B",
            100
          ]
        },
        "Fire": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "E",
            16
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            37
          ],
          "dexterity": [
            "E",
            5
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "C",
            77
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            37
          ],
          "dexterity": [
            "E",
            5
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "D",
            31
          ],
          "dexterity": [
            "E",
            3
          ],
          "intelligence": [
            "C",
            89
          ]
        },
        "Cold": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "E",
            17
          ],
          "intelligence": [
            "D",
            56
          ]
        },
        "Poison": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "E",
            17
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "E",
            17
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "E",
            6
          ],
          "arcane": [
            "B",
            106
          ]
        }
      }
    }
  },
  "omen-cleaver": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/omen_cleaver_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          44
        ],
        "dexterity": [
          "D",
          43
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "C",
            64
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            134
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            120
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "E",
            20
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "B",
            101
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "C",
            79
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "B",
            101
          ]
        },
        "Magic": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            15
          ],
          "intelligence": [
            "B",
            101
          ]
        },
        "Cold": {
          "strength": [
            "C",
            74
          ],
          "dexterity": [
            "C",
            72
          ],
          "intelligence": [
            "C",
            68
          ]
        },
        "Poison": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "C",
            76
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "C",
            76
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "D",
            25
          ],
          "arcane": [
            "B",
            131
          ]
        }
      }
    }
  },
  "beastmans-cleaver": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/beastmans_cleaver_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          76
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            114
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            171
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            131
          ]
        },
        "Quality": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "B",
            108
          ]
        },
        "Fire": {
          "strength": [
            "C",
            84
          ],
          "dexterity": [
            "E",
            18
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            46
          ],
          "faith": [
            "C",
            87
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "C",
            84
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            46
          ],
          "faith": [
            "C",
            87
          ]
        },
        "Magic": {
          "strength": [
            "D",
            39
          ],
          "intelligence": [
            "B",
            96
          ]
        },
        "Cold": {
          "strength": [
            "B",
            129
          ],
          "intelligence": [
            "C",
            60
          ]
        },
        "Poison": {
          "strength": [
            "B",
            136
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            136
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            45
          ],
          "arcane": [
            "B",
            115
          ]
        }
      }
    }
  },
  "zamor-curved-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/zamor_curved_sword_curved_greatsword_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          40
        ],
        "dexterity": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "B",
            90
          ]
        }
      }
    }
  },
  "star-lined-sword": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/star-lined_sword_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "dexterity": [
          "C",
          75
        ],
        "intelligence": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "B",
            135
          ],
          "intelligence": [
            "D",
            54
          ]
        }
      }
    }
  },
  "sword-of-night": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sword_of_night_katana_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "dexterity": [
          "C",
          63
        ]
      },
      "max": {
        "Standard": {
          "dexterity": [
            "B",
            113
          ]
        }
      }
    }
  },
  "black-steel-twinblade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_steel_twinblade_twinblade_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "dexterity": [
          "D",
          55
        ],
        "faith": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            37
          ],
          "dexterity": [
            "C",
            82
          ],
          "faith": [
            "D",
            54
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            128
          ],
          "faith": [
            "D",
            54
          ]
        },
        "Keen": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "B",
            117
          ],
          "faith": [
            "D",
            54
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ],
          "faith": [
            "D",
            54
          ]
        },
        "Fire": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "E",
            13
          ],
          "faith": [
            "D",
            28
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            28
          ],
          "faith": [
            "C",
            87
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "C",
            69
          ],
          "faith": [
            "D",
            54
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            28
          ],
          "faith": [
            "C",
            75
          ]
        },
        "Magic": {
          "strength": [
            "E",
            6
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "C",
            89
          ],
          "faith": [
            "D",
            54
          ]
        },
        "Cold": {
          "strength": [
            "D",
            38
          ],
          "dexterity": [
            "C",
            83
          ],
          "intelligence": [
            "C",
            66
          ],
          "faith": [
            "D",
            54
          ]
        },
        "Poison": {
          "strength": [
            "D",
            43
          ],
          "dexterity": [
            "B",
            98
          ],
          "faith": [
            "D",
            57
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            43
          ],
          "dexterity": [
            "B",
            98
          ],
          "faith": [
            "D",
            57
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "E",
            12
          ],
          "arcane": [
            "B",
            131
          ]
        }
      }
    }
  },
  "euporia": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/euporia_twinblade_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          25
        ],
        "dexterity": [
          "D",
          25
        ],
        "faith": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "D",
            45
          ],
          "faith": [
            "B",
            90
          ]
        }
      }
    }
  },
  "gargoyles-twinblade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles_twinblade_twinblade_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          66
        ],
        "dexterity": [
          "E",
          10
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            99
          ],
          "dexterity": [
            "E",
            15
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            158
          ]
        },
        "Keen": {
          "strength": [
            "D",
            39
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Quality": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "B",
            100
          ]
        },
        "Fire": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            46
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "C",
            71
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            46
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "C",
            71
          ]
        },
        "Magic": {
          "strength": [
            "D",
            33
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "C",
            89
          ]
        },
        "Cold": {
          "strength": [
            "B",
            112
          ],
          "dexterity": [
            "E",
            17
          ],
          "intelligence": [
            "C",
            60
          ]
        },
        "Poison": {
          "strength": [
            "B",
            117
          ],
          "dexterity": [
            "E",
            17
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            117
          ],
          "dexterity": [
            "E",
            17
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            39
          ],
          "dexterity": [
            "E",
            6
          ],
          "arcane": [
            "B",
            115
          ]
        }
      }
    }
  },
  "gargoyles-black-blades": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles_black_blades_twinblade_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          66
        ],
        "dexterity": [
          "E",
          10
        ],
        "faith": [
          "D",
          25
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            118
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "D",
            45
          ]
        }
      }
    }
  },
  "forked-tongue-hatchet": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/forked-tongue_hatchet_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          33
        ],
        "dexterity": [
          "D",
          45
        ]
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "D"
        }
      }
    }
  },
  "smithscript-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithscript_axe_axes_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          48
        ],
        "dexterity": [
          "D",
          33
        ],
        "intelligence": [
          "E",
          5
        ],
        "faith": [
          "E",
          5
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            72
          ],
          "dexterity": [
            "D",
            49
          ],
          "intelligence": [
            "E",
            9
          ],
          "faith": [
            "E",
            9
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            134
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Keen": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "B",
            126
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Quality": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "B",
            104
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Fire": {
          "strength": [
            "C",
            69
          ],
          "dexterity": [
            "E",
            4
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            67
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Magic": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "E",
            10
          ],
          "intelligence": [
            "C",
            84
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Cold": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "D",
            55
          ],
          "intelligence": [
            "C",
            62
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Poison": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "D",
            55
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "D",
            55
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            13
          ],
          "intelligence": [
            "E",
            6
          ],
          "faith": [
            "E",
            6
          ],
          "arcane": [
            "B",
            129
          ]
        }
      }
    }
  },
  "messmer-soldiers-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/messmer_soldiers_axe_axes_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          41
        ],
        "dexterity": [
          "D",
          41
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            61
          ],
          "dexterity": [
            "C",
            61
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            131
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "B",
            126
          ]
        },
        "Quality": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "B",
            104
          ]
        },
        "Fire": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "E",
            15
          ],
          "intelligence": [
            "C",
            84
          ]
        },
        "Cold": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "C",
            68
          ],
          "intelligence": [
            "C",
            64
          ]
        },
        "Poison": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "C",
            68
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "C",
            68
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "E",
            24
          ],
          "arcane": [
            "B",
            124
          ]
        }
      }
    }
  },
  "death-knights-twin-axes": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/death_knights_twin_axes_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          42
        ],
        "dexterity": [
          "D",
          27
        ],
        "faith": [
          "D",
          35
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "D",
            48
          ],
          "faith": [
            "C",
            63
          ]
        }
      }
    }
  },
  "forked-hatchet": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/forked_hatchet_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          29
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            43
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            137
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "A",
            162
          ]
        },
        "Quality": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "B",
            108
          ]
        },
        "Fire": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            73
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Magic": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            23
          ],
          "intelligence": [
            "B",
            103
          ]
        },
        "Cold": {
          "strength": [
            "D",
            49
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "C",
            80
          ]
        },
        "Poison": {
          "strength": [
            "D",
            51
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            51
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "B",
            135
          ]
        }
      }
    }
  },
  "warped-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/warped_axe_weapons_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          85
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            127
          ]
        },
        "Heavy": {
          "strength": [
            "S",
            189
          ]
        },
        "Keen": {
          "strength": [
            "D",
            32
          ],
          "dexterity": [
            "A",
            142
          ]
        },
        "Quality": {
          "strength": [
            "B",
            119
          ],
          "dexterity": [
            "B",
            119
          ]
        },
        "Fire": {
          "strength": [
            "C",
            88
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "C",
            68
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "C",
            88
          ]
        },
        "Sacred": {
          "strength": [
            "C",
            61
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "D",
            49
          ],
          "intelligence": [
            "B",
            98
          ]
        },
        "Cold": {
          "strength": [
            "A",
            144
          ],
          "intelligence": [
            "C",
            76
          ]
        },
        "Poison": {
          "strength": [
            "A",
            144
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "A",
            144
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "B",
            102
          ],
          "arcane": [
            "B",
            129
          ]
        }
      }
    }
  },
  "jawbone-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/jawbone_axe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          60
        ],
        "dexterity": [
          "E",
          22
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            90
          ],
          "dexterity": [
            "D",
            33
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            163
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "B",
            126
          ]
        },
        "Quality": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "B",
            104
          ]
        },
        "Fire": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "C",
            84
          ]
        },
        "Cold": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "D",
            36
          ],
          "intelligence": [
            "D",
            56
          ]
        },
        "Poison": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "D",
            38
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "D",
            38
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "E",
            12
          ],
          "arcane": [
            "B",
            124
          ]
        }
      }
    }
  },
  "iron-cleaver": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/iron_cleaver_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          74
        ],
        "dexterity": [
          "E",
          18
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            111
          ],
          "dexterity": [
            "D",
            27
          ]
        },
        "Heavy": {
          "strength": [
            "S",
            179
          ]
        },
        "Keen": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "A",
            140
          ]
        },
        "Quality": {
          "strength": [
            "B",
            112
          ],
          "dexterity": [
            "B",
            112
          ]
        },
        "Fire": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            9
          ],
          "faith": [
            "B",
            94
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            9
          ],
          "faith": [
            "B",
            94
          ]
        },
        "Magic": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            6
          ],
          "intelligence": [
            "B",
            108
          ]
        },
        "Cold": {
          "strength": [
            "B",
            125
          ],
          "dexterity": [
            "D",
            30
          ],
          "intelligence": [
            "C",
            64
          ]
        },
        "Poison": {
          "strength": [
            "B",
            133
          ],
          "dexterity": [
            "D",
            32
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            133
          ],
          "dexterity": [
            "D",
            32
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            43
          ],
          "dexterity": [
            "E",
            10
          ],
          "arcane": [
            "A",
            140
          ]
        }
      }
    }
  },
  "celebrants-cleaver": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/celebrants-cleaver_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          49
        ],
        "dexterity": [
          "D",
          32
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "D",
            48
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            128
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "B",
            123
          ]
        },
        "Quality": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "B",
            104
          ]
        },
        "Fire": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            11
          ],
          "intelligence": [
            "C",
            84
          ]
        },
        "Cold": {
          "strength": [
            "C",
            83
          ],
          "dexterity": [
            "D",
            53
          ],
          "intelligence": [
            "C",
            64
          ]
        },
        "Poison": {
          "strength": [
            "C",
            83
          ],
          "dexterity": [
            "D",
            53
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            83
          ],
          "dexterity": [
            "D",
            53
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            18
          ],
          "arcane": [
            "B",
            122
          ]
        }
      }
    }
  },
  "sacrificial-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sacrificial_axe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          46
        ],
        "dexterity": [
          "D",
          32
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            69
          ],
          "dexterity": [
            "D",
            48
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            134
          ]
        },
        "Keen": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "B",
            117
          ]
        },
        "Quality": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "B",
            100
          ]
        },
        "Fire": {
          "strength": [
            "C",
            65
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            65
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            11
          ],
          "intelligence": [
            "C",
            82
          ]
        },
        "Cold": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "D",
            53
          ],
          "intelligence": [
            "C",
            62
          ]
        },
        "Poison": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "D",
            53
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "D",
            53
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            18
          ],
          "arcane": [
            "B",
            118
          ]
        }
      }
    }
  },
  "ripple-blade": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ripple_blade_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "arcane": [
          "A",
          158
        ]
      },
      "max": {
        "Standard": {
          "arcane": "S"
        }
      }
    }
  },
  "putrescence-cleaver": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/putrescence_cleaver_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "E",
          10
        ],
        "arcane": [
          "D",
          35
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "E",
            18
          ],
          "arcane": [
            "C",
            63
          ]
        }
      }
    }
  },
  "death-knights-longhaft-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/death_knights_longhaft_axe_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          55
        ],
        "dexterity": [
          "E",
          10
        ],
        "faith": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            99
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "D",
            54
          ]
        }
      }
    }
  },
  "bonny-butchering-knife": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bonny_butchering_knife_greataxe_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          60
        ],
        "dexterity": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "D",
            54
          ]
        }
      }
    }
  },
  "longhaft-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/longhaft_axe_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          50
        ],
        "dexterity": [
          "D",
          39
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "D",
            58
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            145
          ]
        },
        "Keen": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "B",
            128
          ]
        },
        "Quality": {
          "strength": [
            "B",
            110
          ],
          "dexterity": [
            "B",
            110
          ]
        },
        "Fire": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            77
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "B",
            94
          ]
        },
        "Cold": {
          "strength": [
            "C",
            85
          ],
          "dexterity": [
            "C",
            66
          ],
          "intelligence": [
            "C",
            62
          ]
        },
        "Poison": {
          "strength": [
            "C",
            85
          ],
          "dexterity": [
            "C",
            66
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            85
          ],
          "dexterity": [
            "C",
            66
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "E",
            22
          ],
          "arcane": [
            "B",
            135
          ]
        }
      }
    }
  },
  "great-omenkiller-cleaver": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_omenkiller_cleaver_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          55
        ],
        "dexterity": [
          "D",
          35
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            82
          ],
          "dexterity": [
            "D",
            52
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            145
          ]
        },
        "Keen": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "B",
            128
          ]
        },
        "Quality": {
          "strength": [
            "B",
            112
          ],
          "dexterity": [
            "B",
            112
          ]
        },
        "Fire": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            77
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "E",
            13
          ],
          "intelligence": [
            "B",
            94
          ]
        },
        "Cold": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "D",
            58
          ],
          "intelligence": [
            "C",
            62
          ]
        },
        "Poison": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "D",
            58
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "D",
            58
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            33
          ],
          "dexterity": [
            "E",
            21
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "gargoyles-great-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles_great_axe_greataxe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          84
        ],
        "dexterity": [
          "E",
          7
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            126
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Heavy": {
          "strength": [
            "S",
            192
          ]
        },
        "Keen": {
          "strength": [
            "D",
            46
          ],
          "dexterity": [
            "A",
            140
          ]
        },
        "Quality": {
          "strength": [
            "B",
            123
          ],
          "dexterity": [
            "B",
            123
          ]
        },
        "Fire": {
          "strength": [
            "B",
            94
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "B",
            94
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "B",
            103
          ]
        },
        "Magic": {
          "strength": [
            "D",
            42
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "B",
            105
          ]
        },
        "Cold": {
          "strength": [
            "A",
            142
          ],
          "dexterity": [
            "E",
            11
          ],
          "intelligence": [
            "B",
            90
          ]
        },
        "Poison": {
          "strength": [
            "A",
            150
          ],
          "dexterity": [
            "E",
            11
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "A",
            150
          ],
          "dexterity": [
            "E",
            11
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            49
          ],
          "dexterity": [
            "E",
            7
          ],
          "arcane": [
            "B",
            138
          ]
        }
      }
    }
  },
  "gargoyles-black-axe": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gargoyles_black_axe_greataxe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          47
        ],
        "dexterity": [
          "E",
          10
        ],
        "faith": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            84
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "D",
            54
          ]
        }
      }
    }
  },
  "winged-greathorn": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/winged_greathorn_greataxe_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          50
        ],
        "dexterity": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            90
          ],
          "dexterity": [
            "B",
            90
          ]
        }
      }
    }
  },
  "flowerstone-gavel": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/flowerstone_gavel_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          39
        ],
        "dexterity": [
          "D",
          25
        ],
        "arcane": [
          "D",
          39
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            70
          ],
          "dexterity": [
            "D",
            45
          ],
          "arcane": [
            "C",
            70
          ]
        }
      }
    }
  },
  "curved-club": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/curved_club_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          62
        ],
        "dexterity": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "D",
            30
          ]
        },
        "Heavy": {
          "strength": [
            "S",
            176
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "B",
            134
          ]
        },
        "Quality": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "B",
            108
          ]
        },
        "Fire": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            9
          ],
          "faith": [
            "B",
            94
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            9
          ],
          "faith": [
            "B",
            94
          ]
        },
        "Magic": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "E",
            6
          ],
          "intelligence": [
            "B",
            105
          ]
        },
        "Cold": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "D",
            34
          ],
          "intelligence": [
            "C",
            64
          ]
        },
        "Poison": {
          "strength": [
            "B",
            110
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            110
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "E",
            12
          ],
          "arcane": [
            "B",
            124
          ]
        }
      }
    }
  },
  "spiked-club": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spiked_club_hammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          54
        ],
        "dexterity": [
          "D",
          42
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "C",
            63
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            151
          ]
        },
        "Keen": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "B",
            134
          ]
        },
        "Quality": {
          "strength": [
            "B",
            117
          ],
          "dexterity": [
            "B",
            117
          ]
        },
        "Fire": {
          "strength": [
            "C",
            86
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "B",
            110
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            86
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "B",
            110
          ]
        },
        "Magic": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "E",
            15
          ],
          "intelligence": [
            "B",
            112
          ]
        },
        "Cold": {
          "strength": [
            "B",
            91
          ],
          "dexterity": [
            "C",
            70
          ],
          "intelligence": [
            "C",
            86
          ]
        },
        "Poison": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "C",
            74
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "C",
            74
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            31
          ],
          "dexterity": [
            "E",
            24
          ],
          "arcane": [
            "A",
            145
          ]
        }
      }
    }
  },
  "stone-club": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/stone_club_clubs_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          75
        ],
        "dexterity": [
          "E",
          15
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            112
          ],
          "dexterity": [
            "E",
            22
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            174
          ]
        },
        "Keen": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "B",
            137
          ]
        },
        "Quality": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "B",
            115
          ]
        },
        "Fire": {
          "strength": [
            "C",
            86
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            39
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            86
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            39
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Magic": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "B",
            108
          ]
        },
        "Cold": {
          "strength": [
            "B",
            127
          ],
          "dexterity": [
            "E",
            24
          ],
          "intelligence": [
            "C",
            62
          ]
        },
        "Poison": {
          "strength": [
            "B",
            134
          ],
          "dexterity": [
            "D",
            26
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            134
          ],
          "dexterity": [
            "D",
            26
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            45
          ],
          "dexterity": [
            "E",
            9
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "monks-flamemace": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/monks_flamemace_hammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "B",
            90
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            120
          ]
        },
        "Keen": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "A",
            150
          ]
        },
        "Quality": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "B",
            98
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "C",
            75
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            71
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            32
          ],
          "faith": [
            "C",
            75
          ]
        },
        "Magic": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            23
          ],
          "intelligence": [
            "C",
            86
          ]
        },
        "Cold": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "D",
            56
          ]
        },
        "Poison": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            36
          ],
          "arcane": [
            "B",
            122
          ]
        }
      }
    }
  },
  "nox-flowing-hammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/nox_flowing_hammer_hammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          69
        ],
        "dexterity": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            124
          ],
          "dexterity": [
            "D",
            36
          ]
        }
      }
    }
  },
  "ringed-finger": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ringed_finger_hammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          60
        ],
        "dexterity": [
          "D",
          25
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "D",
            45
          ]
        }
      }
    }
  },
  "scepter-of-the-all-knowing": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/scepter_of_the_all-knowing_hammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "D",
          47
        ],
        "intelligence": [
          "D",
          47
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "C",
            84
          ],
          "intelligence": [
            "C",
            84
          ]
        }
      }
    }
  },
  "black-steel-greathammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_steel_greathammer_great_hammer_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          65
        ],
        "dexterity": [
          "E",
          5
        ],
        "faith": [
          "D",
          35
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            97
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "C",
            63
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            169
          ],
          "faith": [
            "D",
            52
          ]
        },
        "Keen": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "B",
            126
          ],
          "faith": [
            "D",
            52
          ]
        },
        "Quality": {
          "strength": [
            "B",
            110
          ],
          "dexterity": [
            "B",
            110
          ],
          "faith": [
            "D",
            52
          ]
        },
        "Fire": {
          "strength": [
            "C",
            88
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "D",
            27
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "E",
            1
          ],
          "faith": [
            "B",
            96
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "C",
            75
          ],
          "faith": [
            "D",
            52
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "E",
            1
          ],
          "faith": [
            "C",
            71
          ]
        },
        "Magic": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "E",
            1
          ],
          "intelligence": [
            "C",
            84
          ],
          "faith": [
            "D",
            52
          ]
        },
        "Cold": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "C",
            62
          ],
          "faith": [
            "D",
            52
          ]
        },
        "Poison": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "D",
            55
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "D",
            55
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "E",
            1
          ],
          "faith": [
            "E",
            13
          ],
          "arcane": [
            "A",
            151
          ]
        }
      }
    }
  },
  "smithscript-greathammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithscript_greathammer_great_hammer_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          58
        ],
        "dexterity": [
          "E",
          16
        ],
        "intelligence": [
          "E",
          5
        ],
        "faith": [
          "E",
          5
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            87
          ],
          "dexterity": [
            "E",
            24
          ],
          "intelligence": [
            "E",
            9
          ],
          "faith": [
            "E",
            9
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            163
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Keen": {
          "strength": [
            "D",
            37
          ],
          "dexterity": [
            "B",
            117
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Quality": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "B",
            102
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Fire": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            9
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            41
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "C",
            75
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            65
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "C",
            75
          ]
        },
        "Magic": {
          "strength": [
            "D",
            26
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "C",
            68
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Cold": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "E",
            22
          ],
          "intelligence": [
            "D",
            50
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Poison": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "D",
            28
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "D",
            28
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "E",
            9
          ],
          "intelligence": [
            "E",
            6
          ],
          "faith": [
            "E",
            6
          ],
          "arcane": [
            "B",
            127
          ]
        }
      }
    }
  },
  "large-club": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/large_club_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          74
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            111
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            166
          ]
        },
        "Keen": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            123
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            39
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            77
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            39
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "D",
            28
          ],
          "intelligence": [
            "B",
            91
          ]
        },
        "Cold": {
          "strength": [
            "B",
            125
          ],
          "intelligence": [
            "C",
            66
          ]
        },
        "Poison": {
          "strength": [
            "B",
            133
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            133
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "C",
            88
          ],
          "arcane": [
            "B",
            111
          ]
        }
      }
    }
  },
  "curved-great-club": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/curved_great_club_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          49
        ],
        "dexterity": [
          "D",
          35
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "D",
            52
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            131
          ]
        },
        "Keen": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "B",
            123
          ]
        },
        "Quality": {
          "strength": [
            "B",
            102
          ],
          "dexterity": [
            "B",
            102
          ]
        },
        "Fire": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            13
          ],
          "intelligence": [
            "C",
            89
          ]
        },
        "Cold": {
          "strength": [
            "C",
            83
          ],
          "dexterity": [
            "D",
            58
          ],
          "intelligence": [
            "C",
            74
          ]
        },
        "Poison": {
          "strength": [
            "C",
            87
          ],
          "dexterity": [
            "C",
            62
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            87
          ],
          "dexterity": [
            "C",
            62
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            21
          ],
          "arcane": [
            "B",
            127
          ]
        }
      }
    }
  },
  "great-mace": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_mace_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          80
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            120
          ]
        },
        "Heavy": {
          "strength": [
            "S",
            179
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            134
          ]
        },
        "Quality": {
          "strength": [
            "B",
            114
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Fire": {
          "strength": [
            "C",
            86
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            43
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            86
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            43
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Magic": {
          "strength": [
            "D",
            31
          ],
          "intelligence": [
            "B",
            102
          ]
        },
        "Cold": {
          "strength": [
            "B",
            136
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "A",
            144
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "A",
            144
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "B",
            96
          ],
          "arcane": [
            "B",
            122
          ]
        }
      }
    }
  },
  "battle-hammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/battle_hammer_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          79
        ],
        "dexterity": [
          "E",
          14
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            118
          ],
          "dexterity": [
            "E",
            21
          ]
        },
        "Heavy": {
          "strength": [
            "S",
            176
          ]
        },
        "Keen": {
          "strength": [
            "D",
            29
          ],
          "dexterity": [
            "B",
            137
          ]
        },
        "Quality": {
          "strength": [
            "B",
            117
          ],
          "dexterity": [
            "B",
            117
          ]
        },
        "Fire": {
          "strength": [
            "C",
            86
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            41
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "B",
            96
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            86
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            41
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "B",
            96
          ]
        },
        "Magic": {
          "strength": [
            "D",
            29
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "B",
            108
          ]
        },
        "Cold": {
          "strength": [
            "B",
            134
          ],
          "dexterity": [
            "E",
            22
          ],
          "intelligence": [
            "C",
            74
          ]
        },
        "Poison": {
          "strength": [
            "A",
            142
          ],
          "dexterity": [
            "E",
            24
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "A",
            142
          ],
          "dexterity": [
            "E",
            24
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            46
          ],
          "dexterity": [
            "E",
            7
          ],
          "arcane": [
            "A",
            142
          ]
        }
      }
    }
  },
  "rotten-battle-hammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_battle_hammer_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          79
        ],
        "dexterity": [
          "E",
          15
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            118
          ],
          "dexterity": [
            "E",
            22
          ]
        },
        "Heavy": {
          "strength": [
            "S",
            179
          ]
        },
        "Keen": {
          "strength": [
            "D",
            29
          ],
          "dexterity": [
            "B",
            137
          ]
        },
        "Quality": {
          "strength": [
            "B",
            117
          ],
          "dexterity": [
            "B",
            117
          ]
        },
        "Fire": {
          "strength": [
            "C",
            88
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            41
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "B",
            98
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            88
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            41
          ],
          "dexterity": [
            "E",
            7
          ],
          "faith": [
            "B",
            98
          ]
        },
        "Magic": {
          "strength": [
            "D",
            29
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "B",
            110
          ]
        },
        "Cold": {
          "strength": [
            "B",
            134
          ],
          "dexterity": [
            "E",
            24
          ],
          "intelligence": [
            "C",
            74
          ]
        },
        "Poison": {
          "strength": [
            "A",
            142
          ],
          "dexterity": [
            "D",
            26
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "A",
            142
          ],
          "dexterity": [
            "D",
            26
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            46
          ],
          "dexterity": [
            "E",
            9
          ],
          "arcane": [
            "A",
            142
          ]
        }
      }
    }
  },
  "celebrants-skull": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/celebrants_skull_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          42
        ],
        "dexterity": [
          "D",
          42
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "C",
            63
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            131
          ]
        },
        "Keen": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "B",
            126
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            9
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            75
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            21
          ],
          "faith": [
            "C",
            82
          ]
        },
        "Magic": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "E",
            15
          ],
          "intelligence": [
            "C",
            89
          ]
        },
        "Cold": {
          "strength": [
            "C",
            70
          ],
          "dexterity": [
            "C",
            70
          ],
          "intelligence": [
            "C",
            74
          ]
        },
        "Poison": {
          "strength": [
            "C",
            74
          ],
          "dexterity": [
            "C",
            74
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            74
          ],
          "dexterity": [
            "C",
            74
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "E",
            24
          ],
          "arcane": [
            "B",
            127
          ]
        }
      }
    }
  },
  "greathorn-hammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/greathorn_hammer_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          55
        ],
        "dexterity": [
          "D",
          39
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            82
          ],
          "dexterity": [
            "D",
            58
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            151
          ]
        },
        "Keen": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            137
          ]
        },
        "Quality": {
          "strength": [
            "B",
            115
          ],
          "dexterity": [
            "B",
            115
          ]
        },
        "Fire": {
          "strength": [
            "C",
            84
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "B",
            101
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            84
          ]
        },
        "Sacred": {
          "strength": [
            "D",
            28
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "B",
            101
          ]
        },
        "Magic": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "B",
            105
          ]
        },
        "Cold": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "C",
            66
          ]
        },
        "Poison": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "C",
            70
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "C",
            70
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            33
          ],
          "dexterity": [
            "E",
            22
          ],
          "arcane": [
            "A",
            142
          ]
        }
      }
    }
  },
  "envoys-long-horn": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/envoys_long_horn_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          38
        ],
        "dexterity": [
          "D",
          27
        ],
        "faith": [
          "C",
          60
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "D",
            48
          ],
          "faith": [
            "B",
            108
          ]
        }
      }
    }
  },
  "cranial-vessel-candlestand": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cranial_vessel_candlestand_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          55
        ],
        "dexterity": [
          "E",
          15
        ],
        "faith": [
          "D",
          55
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            99
          ],
          "dexterity": [
            "D",
            27
          ],
          "faith": [
            "B",
            99
          ]
        }
      }
    }
  },
  "beastclaw-greathammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/beastclaw_greathammer_warhammer_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          43
        ],
        "dexterity": [
          "D",
          38
        ],
        "faith": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            77
          ],
          "dexterity": [
            "C",
            68
          ],
          "faith": [
            "D",
            54
          ]
        }
      }
    }
  },
  "serpent-flail": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpent_flail_flails_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          5
        ],
        "dexterity": [
          "D",
          45
        ],
        "faith": [
          "D",
          50
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "C",
            81
          ],
          "faith": [
            "B",
            90
          ]
        }
      }
    }
  },
  "smithscript-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithscript_spear_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          35
        ],
        "dexterity": [
          "D",
          42
        ],
        "intelligence": [
          "E",
          5
        ],
        "faith": [
          "E",
          5
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            52
          ],
          "dexterity": [
            "C",
            63
          ],
          "intelligence": [
            "E",
            9
          ],
          "faith": [
            "E",
            9
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            137
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Keen": {
          "strength": [
            "E",
            22
          ],
          "dexterity": [
            "B",
            128
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Quality": {
          "strength": [
            "B",
            112
          ],
          "dexterity": [
            "B",
            112
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Fire": {
          "strength": [
            "C",
            71
          ],
          "dexterity": [
            "E",
            9
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "C",
            71
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "B",
            92
          ]
        },
        "Magic": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            10
          ],
          "intelligence": [
            "B",
            94
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Cold": {
          "strength": [
            "D",
            58
          ],
          "dexterity": [
            "C",
            70
          ],
          "intelligence": [
            "C",
            78
          ],
          "faith": [
            "E",
            7
          ]
        },
        "Poison": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "C",
            74
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "C",
            74
          ],
          "intelligence": [
            "E",
            7
          ],
          "faith": [
            "E",
            7
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            24
          ],
          "intelligence": [
            "E",
            6
          ],
          "faith": [
            "E",
            6
          ],
          "arcane": [
            "B",
            131
          ]
        }
      }
    }
  },
  "swift-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/swift_spear_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "dexterity": [
          "C",
          70
        ]
      },
      "max": {
        "Standard": {
          "dexterity": [
            "B",
            105
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            137
          ]
        },
        "Keen": {
          "dexterity": [
            "S",
            177
          ]
        },
        "Quality": {
          "strength": [
            "B",
            106
          ],
          "dexterity": [
            "B",
            106
          ]
        },
        "Fire": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "dexterity": [
            "D",
            25
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "C",
            79
          ]
        },
        "Sacred": {
          "dexterity": [
            "D",
            25
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "dexterity": [
            "E",
            18
          ],
          "intelligence": [
            "C",
            89
          ]
        },
        "Cold": {
          "dexterity": [
            "B",
            119
          ],
          "intelligence": [
            "C",
            62
          ]
        },
        "Poison": {
          "dexterity": [
            "B",
            125
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "dexterity": [
            "B",
            125
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "dexterity": [
            "C",
            73
          ],
          "arcane": [
            "B",
            113
          ]
        }
      }
    }
  },
  "bloodfiends-fork": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodfiends_fork_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "E",
          5
        ],
        "arcane": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            7
          ],
          "arcane": [
            "D",
            54
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            135
          ],
          "arcane": [
            "D",
            45
          ]
        },
        "Keen": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "B",
            112
          ],
          "arcane": [
            "D",
            45
          ]
        },
        "Quality": {
          "strength": [
            "B",
            98
          ],
          "dexterity": [
            "B",
            98
          ],
          "arcane": [
            "D",
            45
          ]
        },
        "Fire": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            9
          ],
          "arcane": [
            "D",
            45
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            10
          ],
          "faith": [
            "B",
            90
          ],
          "arcane": [
            "D",
            45
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "C",
            67
          ],
          "arcane": [
            "D",
            45
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            10
          ],
          "faith": [
            "B",
            90
          ],
          "arcane": [
            "D",
            45
          ]
        },
        "Magic": {
          "strength": [
            "E",
            7
          ],
          "intelligence": [
            "B",
            94
          ],
          "arcane": [
            "D",
            45
          ]
        },
        "Cold": {
          "strength": [
            "C",
            76
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "C",
            80
          ],
          "arcane": [
            "D",
            45
          ]
        },
        "Poison": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "E",
            7
          ],
          "arcane": [
            "C",
            76
          ]
        },
        "Blood": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "E",
            7
          ],
          "arcane": [
            "C",
            76
          ]
        },
        "Occult": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "E",
            3
          ],
          "arcane": [
            "A",
            145
          ]
        }
      }
    }
  },
  "iron-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/iron_spear_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          44
        ],
        "dexterity": [
          "D",
          33
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            66
          ],
          "dexterity": [
            "D",
            49
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            126
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Quality": {
          "strength": [
            "B",
            100
          ],
          "dexterity": [
            "B",
            100
          ]
        },
        "Fire": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            87
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            14
          ],
          "dexterity": [
            "E",
            10
          ],
          "faith": [
            "C",
            87
          ]
        },
        "Magic": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "C",
            89
          ]
        },
        "Cold": {
          "strength": [
            "C",
            74
          ],
          "dexterity": [
            "D",
            55
          ],
          "intelligence": [
            "C",
            72
          ]
        },
        "Poison": {
          "strength": [
            "C",
            74
          ],
          "dexterity": [
            "D",
            55
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            74
          ],
          "dexterity": [
            "D",
            55
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            19
          ],
          "arcane": [
            "B",
            117
          ]
        }
      }
    }
  },
  "spiked-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spiked_spear_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          37
        ],
        "dexterity": [
          "D",
          37
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            55
          ],
          "dexterity": [
            "D",
            55
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            117
          ]
        },
        "Keen": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            114
          ]
        },
        "Quality": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "B",
            96
          ]
        },
        "Fire": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            63
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "E",
            12
          ],
          "faith": [
            "C",
            80
          ]
        },
        "Magic": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            9
          ],
          "intelligence": [
            "C",
            82
          ]
        },
        "Cold": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "C",
            62
          ],
          "intelligence": [
            "C",
            66
          ]
        },
        "Poison": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "C",
            62
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            62
          ],
          "dexterity": [
            "C",
            62
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            21
          ],
          "arcane": [
            "B",
            111
          ]
        }
      }
    }
  },
  "claymans-harpoon": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/claymans_harpoon_spear_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          50
        ],
        "dexterity": [
          "E",
          15
        ],
        "intelligence": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "E",
            22
          ],
          "intelligence": [
            "D",
            54
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            163
          ],
          "intelligence": [
            "D",
            34
          ]
        },
        "Keen": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "B",
            126
          ],
          "intelligence": [
            "D",
            34
          ]
        },
        "Quality": {
          "strength": [
            "B",
            108
          ],
          "dexterity": [
            "B",
            108
          ],
          "intelligence": [
            "D",
            34
          ]
        },
        "Fire": {
          "strength": [
            "C",
            88
          ],
          "dexterity": [
            "E",
            10
          ],
          "intelligence": [
            "D",
            25
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "D",
            25
          ],
          "faith": [
            "B",
            119
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            88
          ],
          "intelligence": [
            "D",
            25
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "D",
            25
          ],
          "faith": [
            "B",
            119
          ]
        },
        "Magic": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "E",
            5
          ],
          "intelligence": [
            "B",
            98
          ]
        },
        "Cold": {
          "strength": [
            "C",
            85
          ],
          "dexterity": [
            "E",
            24
          ],
          "intelligence": [
            "C",
            66
          ]
        },
        "Poison": {
          "strength": [
            "C",
            89
          ],
          "dexterity": [
            "D",
            26
          ],
          "intelligence": [
            "C",
            89
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            89
          ],
          "dexterity": [
            "D",
            26
          ],
          "intelligence": [
            "C",
            89
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "E",
            6
          ],
          "intelligence": [
            "C",
            70
          ],
          "arcane": [
            "B",
            136
          ]
        }
      }
    }
  },
  "celebrants-rib-rake": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/celebrants_rib-rake_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "D",
          57
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            30
          ],
          "dexterity": [
            "C",
            85
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            117
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "A",
            142
          ]
        },
        "Quality": {
          "strength": [
            "B",
            95
          ],
          "dexterity": [
            "B",
            95
          ]
        },
        "Fire": {
          "strength": [
            "C",
            67
          ],
          "dexterity": [
            "E",
            8
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            8
          ],
          "dexterity": [
            "C",
            67
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            19
          ],
          "faith": [
            "C",
            85
          ]
        },
        "Magic": {
          "strength": [
            "E",
            5
          ],
          "dexterity": [
            "E",
            14
          ],
          "intelligence": [
            "C",
            89
          ]
        },
        "Cold": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "B",
            96
          ],
          "intelligence": [
            "C",
            60
          ]
        },
        "Poison": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "B",
            96
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            34
          ],
          "dexterity": [
            "B",
            96
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            33
          ],
          "arcane": [
            "B",
            117
          ]
        }
      }
    }
  },
  "torchpole": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/torchpole_spear_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          41
        ],
        "dexterity": [
          "D",
          41
        ]
      },
      "max": {
        "Standard": {
          "strength": "D",
          "dexterity": "D"
        }
      }
    }
  },
  "crystal-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crystal_spear_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          21
        ],
        "dexterity": [
          "D",
          51
        ],
        "intelligence": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            37
          ],
          "dexterity": [
            "B",
            91
          ],
          "intelligence": [
            "D",
            36
          ]
        }
      }
    }
  },
  "rotten-crystal-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_crystal_spear_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          21
        ],
        "dexterity": [
          "D",
          51
        ],
        "intelligence": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            37
          ],
          "dexterity": [
            "B",
            91
          ],
          "intelligence": [
            "D",
            36
          ]
        }
      }
    }
  },
  "cleanrot-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cleanrot_spear_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          35
        ],
        "dexterity": [
          "D",
          35
        ],
        "faith": [
          "D",
          25
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            63
          ],
          "dexterity": [
            "C",
            63
          ],
          "faith": [
            "D",
            45
          ]
        }
      }
    }
  },
  "bloodfiends-sacred-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodfiends_sacred_spear_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "E",
          4
        ],
        "arcane": [
          "C",
          75
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "E",
            7
          ],
          "arcane": [
            "B",
            135
          ]
        }
      }
    }
  },
  "messmer-soldiers-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/messmer_soldiers_spear_spears_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          47
        ],
        "dexterity": [
          "D",
          47
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            70
          ],
          "dexterity": [
            "C",
            70
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            151
          ]
        },
        "Keen": {
          "strength": [
            "E",
            23
          ],
          "dexterity": [
            "B",
            137
          ]
        },
        "Quality": {
          "strength": [
            "B",
            119
          ],
          "dexterity": [
            "B",
            119
          ]
        },
        "Fire": {
          "strength": [
            "C",
            86
          ],
          "dexterity": [
            "E",
            10
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "B",
            110
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            86
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "E",
            16
          ],
          "faith": [
            "B",
            110
          ]
        },
        "Magic": {
          "strength": [
            "E",
            11
          ],
          "dexterity": [
            "E",
            11
          ],
          "intelligence": [
            "B",
            110
          ]
        },
        "Cold": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "C",
            79
          ],
          "intelligence": [
            "B",
            94
          ]
        },
        "Poison": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "C",
            79
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "C",
            79
          ],
          "dexterity": [
            "C",
            79
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "D",
            27
          ],
          "arcane": [
            "A",
            142
          ]
        }
      }
    }
  },
  "spear-of-the-impaler": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spear_of_the_impaler_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          5
        ],
        "dexterity": [
          "C",
          60
        ],
        "faith": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "B",
            108
          ],
          "faith": [
            "C",
            72
          ]
        }
      }
    }
  },
  "barbed-staff-spear": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/barbed_staff-spear_spears_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "dexterity": [
          "E",
          23
        ],
        "faith": [
          "C",
          80
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "D",
            41
          ],
          "faith": [
            "A",
            144
          ]
        }
      }
    }
  },
  "obsidian-lamina": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/obsidian_lamina_reaper_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "C",
          60
        ],
        "arcane": [
          "D",
          25
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            18
          ],
          "dexterity": [
            "B",
            108
          ],
          "arcane": [
            "D",
            45
          ]
        }
      }
    }
  },
  "tooth-whip": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/tooth_whip_whips_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "dexterity": [
          "D",
          58
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "B",
            104
          ]
        }
      }
    }
  },
  "pata": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/pata_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          27
        ],
        "dexterity": [
          "D",
          42
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            40
          ],
          "dexterity": [
            "C",
            63
          ]
        },
        "Heavy": {
          "strength": [
            "B",
            114
          ]
        },
        "Keen": {
          "strength": [
            "E",
            16
          ],
          "dexterity": [
            "B",
            103
          ]
        },
        "Quality": {
          "strength": [
            "B",
            91
          ],
          "dexterity": [
            "B",
            91
          ]
        },
        "Fire": {
          "strength": [
            "D",
            54
          ],
          "dexterity": [
            "E",
            12
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "E",
            18
          ],
          "faith": [
            "C",
            62
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            12
          ],
          "dexterity": [
            "D",
            54
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            9
          ],
          "dexterity": [
            "E",
            14
          ],
          "faith": [
            "C",
            62
          ]
        },
        "Magic": {
          "strength": [
            "E",
            7
          ],
          "dexterity": [
            "E",
            13
          ],
          "intelligence": [
            "C",
            63
          ]
        },
        "Cold": {
          "strength": [
            "D",
            43
          ],
          "dexterity": [
            "C",
            68
          ],
          "intelligence": [
            "D",
            48
          ]
        },
        "Poison": {
          "strength": [
            "D",
            43
          ],
          "dexterity": [
            "C",
            68
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "D",
            43
          ],
          "dexterity": [
            "C",
            68
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "E",
            24
          ],
          "arcane": [
            "B",
            104
          ]
        }
      }
    }
  },
  "golem-fist": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golem_fist_fist_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          60
        ],
        "dexterity": [
          "E",
          5
        ],
        "intelligence": [
          "E",
          5
        ],
        "faith": [
          "E",
          5
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            90
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "E",
            9
          ],
          "faith": [
            "E",
            9
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            148
          ],
          "intelligence": [
            "E",
            5
          ],
          "faith": [
            "E",
            5
          ]
        },
        "Keen": {
          "strength": [
            "E",
            19
          ],
          "dexterity": [
            "B",
            114
          ],
          "intelligence": [
            "E",
            5
          ],
          "faith": [
            "E",
            5
          ]
        },
        "Quality": {
          "strength": [
            "B",
            96
          ],
          "dexterity": [
            "B",
            96
          ],
          "intelligence": [
            "E",
            5
          ],
          "faith": [
            "E",
            5
          ]
        },
        "Fire": {
          "strength": [
            "D",
            54
          ],
          "dexterity": [
            "E",
            18
          ],
          "intelligence": [
            "E",
            5
          ],
          "faith": [
            "E",
            5
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            1
          ],
          "intelligence": [
            "E",
            5
          ],
          "faith": [
            "D",
            59
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            13
          ],
          "dexterity": [
            "D",
            56
          ],
          "intelligence": [
            "E",
            5
          ],
          "faith": [
            "E",
            5
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            1
          ],
          "intelligence": [
            "E",
            5
          ],
          "faith": [
            "D",
            59
          ]
        },
        "Magic": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "E",
            1
          ],
          "intelligence": [
            "C",
            65
          ],
          "faith": [
            "E",
            5
          ]
        },
        "Cold": {
          "strength": [
            "B",
            93
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "D",
            52
          ],
          "faith": [
            "E",
            5
          ]
        },
        "Poison": {
          "strength": [
            "B",
            91
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "E",
            5
          ],
          "faith": [
            "E",
            5
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Blood": {
          "strength": [
            "B",
            91
          ],
          "dexterity": [
            "E",
            7
          ],
          "intelligence": [
            "E",
            5
          ],
          "faith": [
            "E",
            5
          ],
          "arcane": [
            "D",
            43
          ]
        },
        "Occult": {
          "strength": [
            "D",
            36
          ],
          "dexterity": [
            "E",
            3
          ],
          "intelligence": [
            "E",
            4
          ],
          "faith": [
            "E",
            4
          ],
          "arcane": [
            "B",
            118
          ]
        }
      }
    }
  },
  "thiolliers-hidden-needle": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/thiolliers_hidden_needle_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          15
        ],
        "dexterity": [
          "C",
          67
        ],
        "intelligence": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            27
          ],
          "dexterity": [
            "B",
            120
          ],
          "intelligence": [
            "C",
            72
          ]
        }
      }
    }
  },
  "poisoned-hand": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/poisoned_hand_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "arcane": [
          "C",
          80
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            18
          ],
          "arcane": [
            "A",
            144
          ]
        }
      }
    }
  },
  "madding-hand": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/madding_hand_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          33
        ],
        "dexterity": [
          "E",
          17
        ],
        "intelligence": [
          "E",
          17
        ],
        "faith": [
          "E",
          17
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            59
          ],
          "dexterity": [
            "D",
            30
          ],
          "intelligence": [
            "D",
            30
          ],
          "faith": [
            "D",
            30
          ]
        }
      }
    }
  },
  "veterans-prosthesis": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/veterans_prosthesis_fist_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          42
        ],
        "dexterity": [
          "D",
          33
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            75
          ],
          "dexterity": [
            "D",
            59
          ]
        }
      }
    }
  },
  "claws-of-night": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/claws_of_night_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "dexterity": [
          "C",
          71
        ]
      },
      "max": {
        "Standard": {
          "dexterity": [
            "B",
            127
          ]
        }
      }
    }
  },
  "bloodfiends-arm": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bloodfiends_arm_colossal_weapon_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          43
        ],
        "dexterity": [
          "E",
          10
        ],
        "arcane": [
          "D",
          43
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "E",
            15
          ],
          "arcane": [
            "C",
            77
          ]
        },
        "Heavy": {
          "strength": [
            "A",
            161
          ],
          "arcane": [
            "D",
            28
          ]
        },
        "Keen": {
          "strength": [
            "E",
            24
          ],
          "dexterity": [
            "B",
            120
          ],
          "arcane": [
            "D",
            28
          ]
        },
        "Quality": {
          "strength": [
            "B",
            104
          ],
          "dexterity": [
            "B",
            104
          ],
          "arcane": [
            "D",
            28
          ]
        },
        "Fire": {
          "strength": [
            "C",
            73
          ],
          "dexterity": [
            "E",
            10
          ],
          "arcane": [
            "D",
            28
          ]
        },
        "Flame Art": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            5
          ],
          "faith": [
            "C",
            73
          ],
          "arcane": [
            "D",
            28
          ]
        },
        "Lightning": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "C",
            75
          ],
          "arcane": [
            "D",
            28
          ]
        },
        "Sacred": {
          "strength": [
            "E",
            21
          ],
          "dexterity": [
            "E",
            5
          ],
          "faith": [
            "C",
            73
          ],
          "arcane": [
            "D",
            28
          ]
        },
        "Magic": {
          "strength": [
            "E",
            15
          ],
          "dexterity": [
            "E",
            2
          ],
          "intelligence": [
            "C",
            77
          ],
          "arcane": [
            "D",
            28
          ]
        },
        "Cold": {
          "strength": [
            "C",
            68
          ],
          "dexterity": [
            "E",
            15
          ],
          "intelligence": [
            "D",
            56
          ],
          "arcane": [
            "D",
            28
          ]
        },
        "Poison": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "E",
            15
          ],
          "arcane": [
            "C",
            73
          ]
        },
        "Blood": {
          "strength": [
            "C",
            64
          ],
          "dexterity": [
            "E",
            15
          ],
          "arcane": [
            "C",
            73
          ]
        },
        "Occult": {
          "strength": [
            "D",
            25
          ],
          "dexterity": [
            "E",
            6
          ],
          "arcane": [
            "A",
            158
          ]
        }
      }
    }
  },
  "anvil-hammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/anvil_hammer_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          65
        ],
        "dexterity": [
          "E",
          10
        ],
        "intelligence": [
          "E",
          10
        ],
        "faith": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            117
          ],
          "dexterity": [
            "E",
            18
          ],
          "intelligence": [
            "E",
            18
          ],
          "faith": [
            "D",
            54
          ]
        }
      }
    }
  },
  "devonias-hammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/devonias_hammer_unique_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          70
        ],
        "dexterity": [
          "E",
          20
        ],
        "faith": [
          "D",
          35
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            126
          ],
          "dexterity": [
            "D",
            36
          ],
          "faith": [
            "C",
            63
          ]
        }
      }
    }
  },
  "shadow-sunflower-blossom": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/shadow_sunflower_blossom_colossal_weapon_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          45
        ],
        "dexterity": [
          "E",
          5
        ],
        "faith": [
          "D",
          55
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            81
          ],
          "dexterity": [
            "E",
            9
          ],
          "faith": [
            "B",
            99
          ]
        }
      }
    }
  },
  "gazing-finger": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gazing_finger_colossal_weapon_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          66
        ],
        "intelligence": [
          "D",
          30
        ],
        "faith": [
          "E",
          10
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            118
          ],
          "intelligence": [
            "D",
            54
          ],
          "faith": [
            "E",
            18
          ]
        }
      }
    }
  },
  "trolls-hammer": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/trolls_hammer_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "C",
          70
        ],
        "dexterity": [
          "E",
          15
        ],
        "faith": [
          "D",
          25
        ]
      },
      "max": {
        "Standard": {
          "strength": "C",
          "dexterity": "E",
          "faith": "D"
        }
      }
    }
  },
  "watchdogs-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/watchdog_staff_colossal_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          48
        ],
        "dexterity": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            86
          ],
          "dexterity": [
            "D",
            54
          ]
        }
      }
    }
  },
  "rotten-staff": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rotten_staff_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          53
        ],
        "dexterity": [
          "E",
          20
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "B",
            95
          ],
          "dexterity": [
            "D",
            36
          ]
        }
      }
    }
  },
  "envoys-greathorn": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/envoys_greathorn_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          48
        ],
        "dexterity": [
          "D",
          48
        ],
        "faith": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "C",
            86
          ],
          "dexterity": [
            "C",
            86
          ],
          "faith": [
            "D",
            54
          ]
        }
      }
    }
  },
  "shortbow": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/shortbow_lightbow_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          17
        ],
        "dexterity": [
          "E",
          17
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            17
          ],
          "dexterity": [
            "E",
            17
          ]
        }
      }
    }
  },
  "longbow": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/longbow_weapon_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          20
        ],
        "dexterity": [
          "D",
          26
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            20
          ],
          "dexterity": [
            "D",
            26
          ]
        }
      }
    }
  },
  "buckler": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/buckler_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          10
        ],
        "dexterity": [
          "D",
          30
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            10
          ],
          "dexterity": [
            "D",
            30
          ]
        }
      }
    }
  },
  "red-thorn-roundshield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/red_thorn_roundshield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          24
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            24
          ]
        }
      }
    }
  },
  "heater-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/heater_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            40
          ]
        }
      }
    }
  },
  "riveted-wooden-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/riveted_wooden_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          24
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            24
          ]
        }
      }
    }
  },
  "large-leather-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/large_leather_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            40
          ]
        }
      }
    }
  },
  "scripture-wooden-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/scripture_wooden_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          24
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            24
          ]
        }
      }
    }
  },
  "rickety-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rickety_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          24
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            24
          ]
        }
      }
    }
  },
  "rift-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rift_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "E",
          24
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "E",
            24
          ]
        }
      }
    }
  },
  "blue-crest-heater-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blue_crest_heater_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": {
        "strength": [
          "D",
          40
        ]
      },
      "max": {
        "Standard": {
          "strength": [
            "D",
            40
          ]
        }
      }
    }
  },
  "blue-white-wooden-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/blue_white_wooden_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": { "strength": ["E", 18] },
      "max": { "Standard": { "strength": ["E", 32] } }
    }
  },
  "pillory-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/pillory_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": { "strength": ["E", 20] },
      "max": { "Standard": { "strength": ["E", 36] } }
    }
  },
  "iron-roundshield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/iron_roundshield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": { "strength": ["E", 22] },
      "max": { "Standard": { "strength": ["E", 40] } }
    }
  },
  "gilded-iron-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gilded_iron_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": { "strength": ["E", 24] },
      "max": { "Standard": { "strength": ["E", 42] } }
    }
  },
  "man-serpents-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/man_serpents_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": { "strength": ["E", 22] },
      "max": { "Standard": { "strength": ["E", 40] } }
    }
  },
  "ice-crest-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ice_crest_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": { "strength": ["E", 22] },
      "max": { "Standard": { "strength": ["E", 40] } }
    }
  },
  "perfumers-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/perfumers_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": { "strength": ["E", 16] },
      "max": { "Standard": { "strength": ["E", 30] } }
    }
  },
  "shield-of-the-guilty": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/shield_of_the_guilty_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": { "strength": ["D", 34] },
      "max": { "Standard": { "strength": ["D", 58] } }
    }
  },
  "spiralhorn-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spiralhorn_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": { "strength": ["E", 22] },
      "max": { "Standard": { "strength": ["E", 40] } }
    }
  },
  "smoldering-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/smoldering_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": { "strength": ["E", 22] },
      "max": { "Standard": { "strength": ["E", 40] } }
    }
  },
  "coil-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/coil_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": { "strength": ["E", 26] },
      "max": { "Standard": { "strength": ["E", 46] } }
    }
  },
  "smithscript-shield": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/smithscript_shield_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": { "strength": ["D", 38] },
      "max": { "Standard": { "strength": ["D", 65] } }
    }
  },
  "shield-of-night": {
    "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/shield_of_night_elden_ring_wiki_guide_200px.png",
    "scalingTable": {
      "base": { "strength": ["E", 22] },
      "max": { "Standard": { "strength": ["E", 40] } }
    }
  },
  "hawk-crest-wooden-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/hawk_crest_wooden_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 36] }, "max": { "Standard": { "strength": ["D", 62] } } } },
  "horse-crest-wooden-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/horse_crest_wooden_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 36] }, "max": { "Standard": { "strength": ["D", 62] } } } },
  "candletree-wooden-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/candletree_wooden_shield_medium_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 36] }, "max": { "Standard": { "strength": ["D", 62] } } } },
  "flame-crest-wooden-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/flame_crest_wooden_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 36] }, "max": { "Standard": { "strength": ["D", 62] } } } },
  "marred-wooden-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/marred_wooden_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 38] }, "max": { "Standard": { "strength": ["D", 65] } } } },
  "sun-realm-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/sun_realm_shield_medium_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 36] }, "max": { "Standard": { "strength": ["D", 62] } } } },
  "round-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/round_shield_medium_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 38] }, "max": { "Standard": { "strength": ["D", 65] } } } },
  "black-leather-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_leather_shield_1_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 32] }, "max": { "Standard": { "strength": ["D", 56] } } } },
  "marred-leather-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/marred_leather_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 32] }, "max": { "Standard": { "strength": ["D", 56] } } } },
  "red-crest-heater-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/red_crest_heater_shield_medium_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 40] }, "max": { "Standard": { "strength": ["D", 70] } } } },
  "beast-crest-heater-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/beast_crest_heater_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 40] }, "max": { "Standard": { "strength": ["D", 70] } } } },
  "inverted-hawk-heater-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/inverted_hawk_heater_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 40] }, "max": { "Standard": { "strength": ["D", 70] } } } },
  "eclipse-crest-heater-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/eclipse_crest_heater_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 40] }, "max": { "Standard": { "strength": ["D", 70] } } } },
  "kite-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/kite_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 45] }, "max": { "Standard": { "strength": ["D", 78] } } } },
  "blue-gold-kite-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gold_kite_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 48] }, "max": { "Standard": { "strength": ["D", 82] } } } },
  "scorpion-kite-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/scorpion_kite_shield_medium_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 45] }, "max": { "Standard": { "strength": ["D", 78] } } } },
  "twinbird-kite-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/twinbird_kite_shield_medium_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 45] }, "max": { "Standard": { "strength": ["D", 78] } } } },
  "brass-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/brass_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 55] }, "max": { "Standard": { "strength": ["D", 95] } } } },
  "banished-knights-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/banished_knights_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 52] }, "max": { "Standard": { "strength": ["D", 88] } } } },
  "albinauric-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/albinauric_shield_small_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 44] }, "max": { "Standard": { "strength": ["D", 76] } } } },
  "beastmans-jar-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/beastmans_jar_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["E", 30] }, "max": { "Standard": { "strength": ["E", 52] } } } },
  "carian-knights-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/carian_knights_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 38] }, "max": { "Standard": { "strength": ["D", 65] } } } },
  "silver-mirrorshield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/silver_mirrorshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 36] }, "max": { "Standard": { "strength": ["D", 62] } } } },
  "great-turtle-shell": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/great_turtle_shell_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 48] }, "max": { "Standard": { "strength": ["D", 82] } } } },
  "golden-lion-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_lion_shield_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["C", 60] }, "max": { "Standard": { "strength": ["C", 102] } } } },
  "serpent-crest-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpent_crest_shield_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 50] }, "max": { "Standard": { "strength": ["D", 86] } } } },
  "wolf-crest-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/wolf_crest_shield_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 50] }, "max": { "Standard": { "strength": ["D", 86] } } } },
  "messmer-soldier-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/messmer_soldier_shield_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 45] }, "max": { "Standard": { "strength": ["D", 78] } } } },
  "wooden-greatshield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/wooden_greatshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 50] }, "max": { "Standard": { "strength": ["D", 86] } } } },
  "lordsworns-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/lordsworns_shield_greatshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 54] }, "max": { "Standard": { "strength": ["D", 92] } } } },
  "briar-greatshield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/briar_greatshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 56] }, "max": { "Standard": { "strength": ["D", 96] } } } },
  "spiked-palisade-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/spiked_palisade_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 58] }, "max": { "Standard": { "strength": ["D", 100] } } } },
  "icon-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/icon_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 60] }, "max": { "Standard": { "strength": ["D", 102] } } } },
  "golden-beast-crest-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_beast_crest_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 62] }, "max": { "Standard": { "strength": ["D", 106] } } } },
  "manor-towershield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/manor_towershield_greatshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 70] }, "max": { "Standard": { "strength": ["D", 120] } } } },
  "crossed-tree-towershield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crossed_tree_towershield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 70] }, "max": { "Standard": { "strength": ["D", 120] } } } },
  "inverted-hawk-towershield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/invert_hawk_towershield_greatshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 70] }, "max": { "Standard": { "strength": ["D", 120] } } } },
  "dragon-towershield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragon_towershield_greatshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 72] }, "max": { "Standard": { "strength": ["D", 124] } } } },
  "distinguished-greatshield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/distinguished_greatshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 74] }, "max": { "Standard": { "strength": ["D", 128] } } } },
  "gilded-greatshield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/gilded_greatshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 76] }, "max": { "Standard": { "strength": ["D", 130] } } } },
  "cuckoo-greatshield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/cuckoo_greatshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 70] }, "max": { "Standard": { "strength": ["D", 120] } } } },
  "redmane-greatshield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/redmane_greatshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 68] }, "max": { "Standard": { "strength": ["D", 116] } } } },
  "golden-greatshield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/golden_greatshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 74] }, "max": { "Standard": { "strength": ["D", 128] } } } },
  "haligtree-crest-greatshield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/haligtree_crest_greatshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 76] }, "max": { "Standard": { "strength": ["D", 130] } } } },
  "crucible-hornshield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/crucible_hornshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 64] }, "max": { "Standard": { "strength": ["D", 110] } } } },
  "dragonclaw-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/dragonclaw__shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 68] }, "max": { "Standard": { "strength": ["D", 116] } } } },
  "fingerprint-stone-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/fingerprint_stone_shield_greatshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 90] }, "max": { "Standard": { "strength": ["D", 155] } } } },
  "eclipse-crest-greatshield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/eclipse_crest_greatshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 70] }, "max": { "Standard": { "strength": ["D", 120] } } } },
  "ants-skull-plate": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ants_skull_plate_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 68] }, "max": { "Standard": { "strength": ["D", 116] } } } },
  "erdtree-greatshield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree_greatshield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 70] }, "max": { "Standard": { "strength": ["D", 120] } } } },
  "jellyfish-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/jellyfish_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 58] }, "max": { "Standard": { "strength": ["D", 100] } } } },
  "visage-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/visage_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 86] }, "max": { "Standard": { "strength": ["D", 148] } } } },
  "one-eyed-shield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/eyed_shield_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 76] }, "max": { "Standard": { "strength": ["D", 130] } } } },
  "verdigris-greatshield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/verdigris_greatshield_greatshields_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 110] }, "max": { "Standard": { "strength": ["D", 190] } } } },
  "black-steel-greatshield": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_steel_greatshield_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 75] }, "max": { "Standard": { "strength": ["D", 128] } } } },
  "bone-bow": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/bone_bow_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["E", 18], "dexterity": ["E", 22] }, "max": { "Standard": { "strength": ["E", 32], "dexterity": ["E", 38] } } } },
  "composite-bow": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/composite_bow_light_bow_weapon_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["E", 20], "dexterity": ["D", 38] }, "max": { "Standard": { "strength": ["E", 34], "dexterity": ["D", 65] } } } },
  "red-branch-shortbow": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/red_branch_shortbow_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["E", 18], "dexterity": ["D", 40] }, "max": { "Standard": { "strength": ["E", 30], "dexterity": ["D", 68] } } } },
  "misbegotten-shortbow": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/misbegotten_shortbow_light_bow_weapon_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 38], "dexterity": ["E", 20] }, "max": { "Standard": { "strength": ["D", 65], "dexterity": ["E", 34] } } } },
  "harp-bow": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/harp_bow_light_bow_weapon_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["E", 18], "dexterity": ["E", 22] }, "max": { "Standard": { "strength": ["E", 30], "dexterity": ["E", 38] } } } },
  "albinauric-bow": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/albinauric_bow_weapon_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["E", 20], "dexterity": ["D", 42] }, "max": { "Standard": { "strength": ["E", 34], "dexterity": ["D", 72] } } } },
  "black-bow": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/black_bow_weapon_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["E", 22], "dexterity": ["D", 48] }, "max": { "Standard": { "strength": ["E", 38], "dexterity": ["D", 82] } } } },
  "horn-bow": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/horn_bow_weapon_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["D", 36], "dexterity": ["D", 38] }, "max": { "Standard": { "strength": ["D", 62], "dexterity": ["D", 65] } } } },
  "serpent-bow": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/serpent_bow_weapon_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["E", 20], "dexterity": ["D", 38] }, "max": { "Standard": { "strength": ["E", 34], "dexterity": ["D", 65] } } } },
  "erdtree-bow": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/erdtree_bow_weapon_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["E", 18], "dexterity": ["D", 32] }, "max": { "Standard": { "strength": ["E", 30], "dexterity": ["D", 55] } } } },
  "pulley-bow": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/pulley_bow_weapon_elden_ring_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["E", 20], "dexterity": ["D", 30] }, "max": { "Standard": { "strength": ["E", 34], "dexterity": ["D", 52] } } } },
  "ansbachs-longbow": { "image": "https://eldenring.wiki.fextralife.com/file/Elden-Ring/ansbachs_longbow_elden_ring_shadow_of_the_erdtree_dlc_wiki_guide_200px.png", "scalingTable": { "base": { "strength": ["E", 22], "dexterity": ["D", 60] }, "max": { "Standard": { "strength": ["E", 38], "dexterity": ["D", 102] } } } }
};
