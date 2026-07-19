const ANIMALS = [
  {
    "id": "cuttlefish",
    "display_name": "Cuttlefish",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "intense"
      ],
      "work_style": [
        "improviser",
        "tinkerer"
      ],
      "signature": [
        "creativity",
        "camouflage",
        "color-change"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "goblin_shark",
    "display_name": "Goblin Shark",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "intense"
      ],
      "work_style": [
        "improviser",
        "tinkerer"
      ],
      "signature": [
        "strength",
        "lure",
        "jaw"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "anglerfish",
    "display_name": "Anglerfish",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "intense"
      ],
      "work_style": [
        "improviser",
        "tinkerer"
      ],
      "signature": [
        "lure",
        "mystery",
        "stealth"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "barreleye",
    "display_name": "Barreleye Fish",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "intense"
      ],
      "work_style": [
        "improviser",
        "tinkerer"
      ],
      "signature": [
        "vision",
        "focus",
        "dome-head"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "blue_dragon",
    "display_name": "Blue Dragon (Glaucus)",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "intense"
      ],
      "work_style": [
        "improviser",
        "tinkerer"
      ],
      "signature": [
        "defense",
        "stealth",
        "sting-theft"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "pistol_shrimp",
    "display_name": "Pistol Shrimp",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "intense"
      ],
      "work_style": [
        "improviser",
        "tinkerer"
      ],
      "signature": [
        "acceleration",
        "strength",
        "sonic-boom"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "mantis_shrimp",
    "display_name": "Mantis Shrimp",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "intense"
      ],
      "work_style": [
        "improviser",
        "tinkerer"
      ],
      "signature": [
        "velocity",
        "precision",
        "vision"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "vampire_squid",
    "display_name": "Vampire Squid",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "intense"
      ],
      "work_style": [
        "improviser",
        "tinkerer"
      ],
      "signature": [
        "stealth",
        "mystery",
        "spikes"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "giant_isopod",
    "display_name": "Giant Isopod",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "intense"
      ],
      "work_style": [
        "improviser",
        "tinkerer"
      ],
      "signature": [
        "resilience",
        "patience",
        "ancient"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "oarfish",
    "display_name": "Oarfish",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "intense"
      ],
      "work_style": [
        "improviser",
        "tinkerer"
      ],
      "signature": [
        "depth",
        "range",
        "serpent"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "yeti_crab",
    "display_name": "Yeti Crab",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "cautious"
      ],
      "work_style": [
        "experimenter",
        "tinkerer"
      ],
      "signature": [
        "independence",
        "engineering",
        "bacteria-farm"
      ]
    },
    "facets": {
      "biome": [
        "deep_sea"
      ],
      "locomotion": [
        "walker"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "sea_pig",
    "display_name": "Sea Pig",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "cautious"
      ],
      "work_style": [
        "experimenter",
        "tinkerer"
      ],
      "signature": [
        "synchrony",
        "patience",
        "legs"
      ]
    },
    "facets": {
      "biome": [
        "deep_sea"
      ],
      "locomotion": [
        "crawler"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "giant_tube_worm",
    "display_name": "Giant Tube Worm",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "intense"
      ],
      "work_style": [
        "improviser",
        "tinkerer"
      ],
      "signature": [
        "autonomy",
        "resilience",
        "vents"
      ]
    },
    "facets": {
      "biome": [
        "deep_sea"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "platypus",
    "display_name": "Platypus",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "cautious"
      ],
      "work_style": [
        "experimenter",
        "tinkerer"
      ],
      "signature": [
        "creativity",
        "precision",
        "electroreception"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "echidna",
    "display_name": "Short-beaked Echidna",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "cautious"
      ],
      "work_style": [
        "experimenter",
        "tinkerer"
      ],
      "signature": [
        "persistence",
        "stamina",
        "egg-layer"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "jerboa",
    "display_name": "Jerboa",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "cautious"
      ],
      "work_style": [
        "experimenter",
        "tinkerer"
      ],
      "signature": [
        "agility",
        "acceleration",
        "legs"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "proboscis_monkey",
    "display_name": "Proboscis Monkey",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "cautious"
      ],
      "work_style": [
        "experimenter",
        "tinkerer"
      ],
      "signature": [
        "presence",
        "community",
        "schnoz"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "saiga",
    "display_name": "Saiga Antelope",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "cautious"
      ],
      "work_style": [
        "experimenter",
        "tinkerer"
      ],
      "signature": [
        "stamina",
        "resilience",
        "snout"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "star_nosed_mole",
    "display_name": "Star-nosed Mole",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "cautious"
      ],
      "work_style": [
        "experimenter",
        "tinkerer"
      ],
      "signature": [
        "precision",
        "dexterity",
        "tentacles"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "naked_mole_rat",
    "display_name": "Naked Mole-rat",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "cautious"
      ],
      "work_style": [
        "experimenter",
        "tinkerer"
      ],
      "signature": [
        "community",
        "security",
        "queen"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "aye_aye",
    "display_name": "Aye-aye",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "cautious"
      ],
      "work_style": [
        "experimenter",
        "tinkerer"
      ],
      "signature": [
        "focus",
        "memory",
        "finger"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "tarsier",
    "display_name": "Tarsier",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "cautious"
      ],
      "work_style": [
        "experimenter",
        "tinkerer"
      ],
      "signature": [
        "vision",
        "agility",
        "eyes"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "armadillo",
    "display_name": "Nine-banded Armadillo",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "cautious"
      ],
      "work_style": [
        "experimenter",
        "tinkerer"
      ],
      "signature": [
        "defense",
        "balance",
        "ball"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "hoatzin",
    "display_name": "Hoatzin",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "adaptable",
        "curious"
      ],
      "work_style": [
        "pathfinder",
        "improviser"
      ],
      "signature": [
        "resourcefulness",
        "balance",
        "stink"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "kakapo",
    "display_name": "Kakapo",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "adaptable",
        "curious"
      ],
      "work_style": [
        "pathfinder",
        "improviser"
      ],
      "signature": [
        "soloist",
        "camouflage",
        "moss-green"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "wilsons_bird_of_paradise",
    "display_name": "Wilson’s Bird-of-paradise",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "adaptable",
        "curious"
      ],
      "work_style": [
        "pathfinder",
        "improviser"
      ],
      "signature": [
        "presence",
        "acrobatics",
        "display"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "frigatebird",
    "display_name": "Magnificent Frigatebird",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "adaptable",
        "curious"
      ],
      "work_style": [
        "pathfinder",
        "improviser"
      ],
      "signature": [
        "speed",
        "resourcefulness",
        "balloon"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "nightjar",
    "display_name": "Common Nightjar",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "adaptable",
        "curious"
      ],
      "work_style": [
        "pathfinder",
        "improviser"
      ],
      "signature": [
        "camouflage",
        "silence",
        "wide-mouth"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "oilbird",
    "display_name": "Oilbird",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "adaptable",
        "curious"
      ],
      "work_style": [
        "pathfinder",
        "improviser"
      ],
      "signature": [
        "mystery",
        "precision",
        "sonar"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "cassowary",
    "display_name": "Southern Cassowary",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "adaptable",
        "curious"
      ],
      "work_style": [
        "pathfinder",
        "improviser"
      ],
      "signature": [
        "intimidation",
        "strength",
        "casque"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "helmeted_hornbill",
    "display_name": "Helmeted Hornbill",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "adaptable",
        "curious"
      ],
      "work_style": [
        "pathfinder",
        "improviser"
      ],
      "signature": [
        "challenger",
        "strength",
        "solid"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "agamidae_glider",
    "display_name": "Flying Dragon (Draco)",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "adaptable",
        "curious"
      ],
      "work_style": [
        "pathfinder",
        "improviser"
      ],
      "signature": [
        "agility",
        "efficiency",
        "ribs"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "swiftlet",
    "display_name": "Cave Swiftlet",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "adaptable",
        "curious"
      ],
      "work_style": [
        "pathfinder",
        "improviser"
      ],
      "signature": [
        "velocity",
        "engineering",
        "spit"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "dumbo_octopus",
    "display_name": "Dumbo Octopus",
    "rarity_lane": "bizarre",
    "traits": {
      "temperament": [
        "curious",
        "intense"
      ],
      "work_style": [
        "improviser",
        "tinkerer"
      ],
      "signature": [
        "agility",
        "acrobatics",
        "hover"
      ]
    },
    "facets": {
      "biome": [
        "open_ocean",
        "deep_sea"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "painted_turtle",
    "display_name": "Painted Turtle",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "calm",
        "playful"
      ],
      "work_style": [
        "endurance",
        "builder"
      ],
      "signature": [
        "patience",
        "focus",
        "basking"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "american_bullfrog",
    "display_name": "American Bullfrog",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "calm",
        "playful"
      ],
      "work_style": [
        "endurance",
        "builder"
      ],
      "signature": [
        "presence",
        "communication",
        "voice"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "river_crayfish",
    "display_name": "River Crayfish",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "calm",
        "playful"
      ],
      "work_style": [
        "endurance",
        "builder"
      ],
      "signature": [
        "resourcefulness",
        "defense",
        "retreat"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "mallard_on_pond",
    "display_name": "Pond Duck (wild mallard)",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "calm",
        "playful"
      ],
      "work_style": [
        "endurance",
        "builder"
      ],
      "signature": [
        "flow",
        "patience",
        "buoyancy"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "gray_squirrel",
    "display_name": "North American Grey Squirrel",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "bold",
        "playful"
      ],
      "work_style": [
        "opportunist",
        "planner"
      ],
      "signature": [
        "memory",
        "agility",
        "preparation"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "red_fox",
    "display_name": "Red Fox",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "bold",
        "playful"
      ],
      "work_style": [
        "opportunist",
        "planner"
      ],
      "signature": [
        "stealth",
        "creativity",
        "cunning"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "raccoon",
    "display_name": "Raccoon",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "bold",
        "playful"
      ],
      "work_style": [
        "opportunist",
        "planner"
      ],
      "signature": [
        "dexterity",
        "resourcefulness",
        "stealth"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "white_tailed_deer",
    "display_name": "White-tailed Deer",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "bold",
        "playful"
      ],
      "work_style": [
        "opportunist",
        "planner"
      ],
      "signature": [
        "security",
        "vision",
        "intuition"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "eastern_cottontail",
    "display_name": "Eastern Cottontail",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "bold",
        "playful"
      ],
      "work_style": [
        "opportunist",
        "planner"
      ],
      "signature": [
        "speed",
        "security",
        "zigzag"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "coyote",
    "display_name": "Coyote",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "bold",
        "playful"
      ],
      "work_style": [
        "opportunist",
        "planner"
      ],
      "signature": [
        "communication",
        "resilience",
        "adaptability"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "striped_skunk",
    "display_name": "Striped Skunk",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "bold",
        "playful"
      ],
      "work_style": [
        "opportunist",
        "planner"
      ],
      "signature": [
        "intimidation",
        "defense",
        "chemical-defense"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "virginia_opossum",
    "display_name": "Virginia Opossum",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "bold",
        "playful"
      ],
      "work_style": [
        "opportunist",
        "planner"
      ],
      "signature": [
        "resilience",
        "stealth",
        "vision"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "eastern_chipmunk",
    "display_name": "Eastern Chipmunk",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "bold",
        "playful"
      ],
      "work_style": [
        "opportunist",
        "planner"
      ],
      "signature": [
        "efficiency",
        "memory",
        "cheeks"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "groundhog",
    "display_name": "Groundhog (Woodchuck)",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "bold",
        "playful"
      ],
      "work_style": [
        "opportunist",
        "planner"
      ],
      "signature": [
        "patience",
        "independence",
        "hibernation"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "rock_pigeon",
    "display_name": "Rock Pigeon",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "vigilant",
        "bold"
      ],
      "work_style": [
        "strategist",
        "builder"
      ],
      "signature": [
        "street-smart",
        "memory",
        "homing"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "house_sparrow",
    "display_name": "House Sparrow",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "vigilant",
        "bold"
      ],
      "work_style": [
        "strategist",
        "builder"
      ],
      "signature": [
        "chatter",
        "community",
        "stealth"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "american_robin",
    "display_name": "American Robin",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "vigilant",
        "bold"
      ],
      "work_style": [
        "strategist",
        "builder"
      ],
      "signature": [
        "punctuality",
        "early-riser",
        "stealth"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "european_starling",
    "display_name": "European Starling",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "vigilant",
        "bold"
      ],
      "work_style": [
        "strategist",
        "builder"
      ],
      "signature": [
        "synchrony",
        "communication",
        "swarm-logic"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "american_crow",
    "display_name": "American Crow",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "vigilant",
        "bold"
      ],
      "work_style": [
        "strategist",
        "builder"
      ],
      "signature": [
        "wisdom",
        "diplomat",
        "memory"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "blue_jay",
    "display_name": "Blue Jay",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "vigilant",
        "bold"
      ],
      "work_style": [
        "strategist",
        "builder"
      ],
      "signature": [
        "security",
        "presence",
        "warning"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "canada_goose",
    "display_name": "Canada Goose",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "vigilant",
        "bold"
      ],
      "work_style": [
        "strategist",
        "builder"
      ],
      "signature": [
        "protector",
        "loyalty",
        "stealth"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "mallard_duck",
    "display_name": "Mallard Duck",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "vigilant",
        "bold"
      ],
      "work_style": [
        "strategist",
        "builder"
      ],
      "signature": [
        "flow",
        "resourcefulness",
        "versatility"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "herring_gull",
    "display_name": "Herring Gull",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "vigilant",
        "bold"
      ],
      "work_style": [
        "strategist",
        "builder"
      ],
      "signature": [
        "stealth",
        "resourcefulness",
        "street-smart"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "mourning_dove",
    "display_name": "Mourning Dove",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "vigilant",
        "bold"
      ],
      "work_style": [
        "strategist",
        "builder"
      ],
      "signature": [
        "silence",
        "patience",
        "softness"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "north_american_river_otter",
    "display_name": "North American River Otter",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "calm",
        "playful"
      ],
      "work_style": [
        "endurance",
        "builder"
      ],
      "signature": [
        "dexterity",
        "acrobatics",
        "mud-slide"
      ]
    },
    "facets": {
      "biome": [
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "common_snapping_turtle",
    "display_name": "Common Snapping Turtle",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "calm",
        "playful"
      ],
      "work_style": [
        "endurance",
        "builder"
      ],
      "signature": [
        "grit",
        "strength",
        "jaw"
      ]
    },
    "facets": {
      "biome": [
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "common_loon",
    "display_name": "Common Loon",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "calm",
        "playful"
      ],
      "work_style": [
        "endurance",
        "builder"
      ],
      "signature": [
        "pair-bonder",
        "focus",
        "wail"
      ]
    },
    "facets": {
      "biome": [
        "river_lake",
        "coastal"
      ],
      "locomotion": [
        "diver",
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "american_beaver",
    "display_name": "American Beaver",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "calm",
        "playful"
      ],
      "work_style": [
        "endurance",
        "builder"
      ],
      "signature": [
        "engineering",
        "persistence",
        "dam"
      ]
    },
    "facets": {
      "biome": [
        "river_lake",
        "wetland"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "muskrat",
    "display_name": "Muskrat",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "calm",
        "playful"
      ],
      "work_style": [
        "endurance",
        "builder"
      ],
      "signature": [
        "precision",
        "resilience",
        "lodges"
      ]
    },
    "facets": {
      "biome": [
        "river_lake",
        "wetland"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "american_alligator",
    "display_name": "American Alligator",
    "rarity_lane": "common",
    "traits": {
      "temperament": [
        "calm",
        "playful"
      ],
      "work_style": [
        "endurance",
        "builder"
      ],
      "signature": [
        "speed",
        "strength",
        "waiting"
      ]
    },
    "facets": {
      "biome": [
        "river_lake",
        "wetland"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "walrus",
    "display_name": "Walrus",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "bold",
        "adaptable"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "community",
        "presence",
        "whiskers"
      ]
    },
    "facets": {
      "biome": [
        "arctic",
        "coastal"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "brown_pelican",
    "display_name": "Brown Pelican",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "intense",
        "cautious"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "community",
        "agility",
        "dive"
      ]
    },
    "facets": {
      "biome": [
        "coastal"
      ],
      "locomotion": [
        "flyer",
        "diver"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "atlantic_puffin",
    "display_name": "Atlantic Puffin",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "bold",
        "adaptable"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "acrobatics",
        "agility",
        "beak"
      ]
    },
    "facets": {
      "biome": [
        "coastal"
      ],
      "locomotion": [
        "diver",
        "swimmer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "osprey",
    "display_name": "Osprey",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "intense",
        "cautious"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "dexterity",
        "speed",
        "grip"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "sea_otter",
    "display_name": "Sea Otter",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "bold",
        "adaptable"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "memory",
        "precision",
        "grooming"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "harbor_seal",
    "display_name": "Harbor Seal",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "bold",
        "adaptable"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "persistence",
        "patience",
        "coastal-life"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "california_sea_lion",
    "display_name": "California Sea Lion",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "bold",
        "adaptable"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "communication",
        "presence",
        "barking"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "bottlenose_dolphin",
    "display_name": "Bottlenose Dolphin",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "bold",
        "adaptable"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "collaborator",
        "communication",
        "echolocation"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "manatee",
    "display_name": "West Indian Manatee",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "bold",
        "adaptable"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "loyalty",
        "flow",
        "peace"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "giant_pacific_octopus",
    "display_name": "Giant Pacific Octopus",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "bold",
        "adaptable"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "camouflage",
        "creativity",
        "stealth"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "green_sea_turtle",
    "display_name": "Green Sea Turtle",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "bold",
        "adaptable"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "range",
        "memory",
        "migration"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "snow_monkey",
    "display_name": "Snow Monkey (Japanese Macaque)",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "vigilant",
        "adaptable"
      ],
      "work_style": [
        "strategist",
        "endurance"
      ],
      "signature": [
        "mentor",
        "community",
        "warmth"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "gray_wolf",
    "display_name": "Gray Wolf",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "vigilant",
        "adaptable"
      ],
      "work_style": [
        "strategist",
        "endurance"
      ],
      "signature": [
        "coordinator",
        "loyalty",
        "teamwork"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "bobcat",
    "display_name": "Bobcat",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "vigilant",
        "adaptable"
      ],
      "work_style": [
        "strategist",
        "endurance"
      ],
      "signature": [
        "strength",
        "stealth",
        "solitude"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "cougar",
    "display_name": "Mountain Lion (Cougar)",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "vigilant",
        "adaptable"
      ],
      "work_style": [
        "strategist",
        "endurance"
      ],
      "signature": [
        "balance",
        "strength",
        "range"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "american_badger",
    "display_name": "American Badger",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "vigilant",
        "adaptable"
      ],
      "work_style": [
        "strategist",
        "endurance"
      ],
      "signature": [
        "grit",
        "defense",
        "tenacity"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "north_american_porcupine",
    "display_name": "North American Porcupine",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "vigilant",
        "adaptable"
      ],
      "work_style": [
        "strategist",
        "endurance"
      ],
      "signature": [
        "loyalty",
        "security",
        "prickliness"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "elk",
    "display_name": "Elk (Wapiti)",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "vigilant",
        "adaptable"
      ],
      "work_style": [
        "strategist",
        "endurance"
      ],
      "signature": [
        "wisdom",
        "stamina",
        "presence"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "pronghorn",
    "display_name": "Pronghorn",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "vigilant",
        "adaptable"
      ],
      "work_style": [
        "strategist",
        "endurance"
      ],
      "signature": [
        "velocity",
        "acceleration",
        "stealth"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "bighorn_sheep",
    "display_name": "Bighorn Sheep",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "vigilant",
        "adaptable"
      ],
      "work_style": [
        "strategist",
        "endurance"
      ],
      "signature": [
        "challenger",
        "sure-footed",
        "balance"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "red_deer",
    "display_name": "Red Deer",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "vigilant",
        "adaptable"
      ],
      "work_style": [
        "strategist",
        "endurance"
      ],
      "signature": [
        "silence",
        "presence",
        "antlers"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "bald_eagle",
    "display_name": "Bald Eagle",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "intense",
        "cautious"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "strength",
        "presence",
        "stealth"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "peregrine_falcon",
    "display_name": "Peregrine Falcon",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "intense",
        "cautious"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "precision",
        "velocity",
        "stealth"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "great_horned_owl",
    "display_name": "Great Horned Owl",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "intense",
        "cautious"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "vision",
        "silence",
        "stealth"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "snowy_owl",
    "display_name": "Snowy Owl",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "intense",
        "cautious"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "patience",
        "resilience",
        "stealth"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "sandhill_crane",
    "display_name": "Sandhill Crane",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "intense",
        "cautious"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "acrobatics",
        "pair-bonder",
        "elegance"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "red_tailed_hawk",
    "display_name": "Red-tailed Hawk",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "intense",
        "cautious"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "focus",
        "vision",
        "stealth"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "common_raven",
    "display_name": "Common Raven",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "intense",
        "cautious"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "memory",
        "wisdom",
        "stealth"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "northern_harrier",
    "display_name": "Northern Harrier",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "intense",
        "cautious"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "resilience",
        "precision",
        "hearing"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "leopard_seal",
    "display_name": "Leopard Seal",
    "rarity_lane": "less_common",
    "traits": {
      "temperament": [
        "bold",
        "adaptable"
      ],
      "work_style": [
        "sprinter",
        "perfectionist"
      ],
      "signature": [
        "independence",
        "strength",
        "grin"
      ]
    },
    "facets": {
      "biome": [
        "open_ocean",
        "coastal"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "marine_iguana",
    "display_name": "Marine Iguana",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "balance",
        "resilience",
        "salt-gland"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "reef"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "common_octopus",
    "display_name": "Common Octopus",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "efficiency",
        "creativity",
        "ink"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "hammerhead_shark",
    "display_name": "Hammerhead Shark",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "wisdom",
        "precision",
        "sensor"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "leafy_seadragon",
    "display_name": "Leafy Seadragon",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "silence",
        "camouflage",
        "leaf-camo"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "electric_eel",
    "display_name": "Electric Eel",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "focus",
        "strength",
        "voltage"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "sunfish",
    "display_name": "Ocean Sunfish (Mola)",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "stamina",
        "patience",
        "flatness"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "beluga",
    "display_name": "Beluga Whale",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "mentor",
        "communication",
        "canary"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "giant_clam",
    "display_name": "Giant Clam",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "security",
        "focus",
        "shell"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "sea_horse",
    "display_name": "Seahorse",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "sure-footed",
        "pair-bonder",
        "snout"
      ]
    },
    "facets": {
      "biome": [
        "coastal",
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "three_toed_sloth",
    "display_name": "Three-toed Sloth",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "intense"
      ],
      "work_style": [
        "defender",
        "sniffer"
      ],
      "signature": [
        "camouflage",
        "patience",
        "metabolism"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "giant_anteater",
    "display_name": "Giant Anteater",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "intense"
      ],
      "work_style": [
        "defender",
        "sniffer"
      ],
      "signature": [
        "engineering",
        "precision",
        "tongue"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "pangolin",
    "display_name": "Pangolin",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "intense"
      ],
      "work_style": [
        "defender",
        "sniffer"
      ],
      "signature": [
        "sure-footed",
        "defense",
        "scales"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "meerkat",
    "display_name": "Meerkat",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "intense"
      ],
      "work_style": [
        "defender",
        "sniffer"
      ],
      "signature": [
        "acceleration",
        "security",
        "lookout"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "spotted_hyena",
    "display_name": "Spotted Hyena",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "intense"
      ],
      "work_style": [
        "defender",
        "sniffer"
      ],
      "signature": [
        "range",
        "intimidation",
        "bone-crushing"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "wombat",
    "display_name": "Wombat",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "intense"
      ],
      "work_style": [
        "defender",
        "sniffer"
      ],
      "signature": [
        "flow",
        "strength",
        "cube-scat"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "tasmanian_devil",
    "display_name": "Tasmanian Devil",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "intense"
      ],
      "work_style": [
        "defender",
        "sniffer"
      ],
      "signature": [
        "depth",
        "grit",
        "scream"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "okapi",
    "display_name": "Okapi",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "intense"
      ],
      "work_style": [
        "defender",
        "sniffer"
      ],
      "signature": [
        "acrobatics",
        "stealth",
        "stripes"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "aardvark",
    "display_name": "Aardvark",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "intense"
      ],
      "work_style": [
        "defender",
        "sniffer"
      ],
      "signature": [
        "autonomy",
        "efficiency",
        "ears"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "fennec_fox",
    "display_name": "Fennec Fox",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "intense"
      ],
      "work_style": [
        "defender",
        "sniffer"
      ],
      "signature": [
        "mystery",
        "agility",
        "big-ears"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "grassland/savanna"
      ],
      "locomotion": [
        "runner"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "albatross",
    "display_name": "Albatross",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "playful"
      ],
      "work_style": [
        "planner",
        "observer"
      ],
      "signature": [
        "efficiency",
        "pair-bonder",
        "stealth"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "secretary_bird",
    "display_name": "Secretary Bird",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "playful"
      ],
      "work_style": [
        "planner",
        "observer"
      ],
      "signature": [
        "persistence",
        "precision",
        "legs"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "shoebill",
    "display_name": "Shoebill",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "playful"
      ],
      "work_style": [
        "planner",
        "observer"
      ],
      "signature": [
        "loyalty",
        "patience",
        "stare"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "rhinoceros_hornbill",
    "display_name": "Rhinoceros Hornbill",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "playful"
      ],
      "work_style": [
        "planner",
        "observer"
      ],
      "signature": [
        "balance",
        "presence",
        "casque"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "harpy_eagle",
    "display_name": "Harpy Eagle",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "playful"
      ],
      "work_style": [
        "planner",
        "observer"
      ],
      "signature": [
        "independence",
        "strength",
        "talons"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "lyrebird",
    "display_name": "Superb Lyrebird",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "playful"
      ],
      "work_style": [
        "planner",
        "observer"
      ],
      "signature": [
        "creativity",
        "memory",
        "mimicry"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "kiwi",
    "display_name": "Kiwi",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "playful"
      ],
      "work_style": [
        "planner",
        "observer"
      ],
      "signature": [
        "engineering",
        "focus",
        "smell"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "bee_eater",
    "display_name": "European Bee-eater",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "playful"
      ],
      "work_style": [
        "planner",
        "observer"
      ],
      "signature": [
        "stamina",
        "acrobatics",
        "agility"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "roller",
    "display_name": "Lilac-breasted Roller",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "playful"
      ],
      "work_style": [
        "planner",
        "observer"
      ],
      "signature": [
        "sure-footed",
        "agility",
        "color"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "large_group"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "tropicbird",
    "display_name": "Red-billed Tropicbird",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "playful"
      ],
      "work_style": [
        "planner",
        "observer"
      ],
      "signature": [
        "pair-bonder",
        "range",
        "tail"
      ]
    },
    "facets": {
      "biome": [
        "forest",
        "urban"
      ],
      "locomotion": [
        "flyer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "leatherback_sea_turtle",
    "display_name": "Leatherback Sea Turtle",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "synchrony",
        "range",
        "soft-shell"
      ]
    },
    "facets": {
      "biome": [
        "open_ocean"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "japanese_spider_crab",
    "display_name": "Japanese Spider Crab",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "mystery",
        "stamina",
        "span"
      ]
    },
    "facets": {
      "biome": [
        "open_ocean"
      ],
      "locomotion": [
        "walker",
        "swimmer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "moon_jellyfish",
    "display_name": "Moon Jellyfish",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "intimidation",
        "mystery",
        "transparent"
      ]
    },
    "facets": {
      "biome": [
        "open_ocean"
      ],
      "locomotion": [
        "drifter",
        "swimmer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "pair_bond"
      ],
      "diet": [
        "carnivore"
      ]
    }
  },
  {
    "id": "narwhal",
    "display_name": "Narwhal",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "chatter",
        "agility",
        "unicorn"
      ]
    },
    "facets": {
      "biome": [
        "open_ocean",
        "arctic"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "omnivore"
      ]
    }
  },
  {
    "id": "manta_ray",
    "display_name": "Manta Ray",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "street-smart",
        "acrobatics",
        "elegance"
      ]
    },
    "facets": {
      "biome": [
        "open_ocean",
        "reef"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "crepuscular"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "omnivore"
      ]
    }
  },
  {
    "id": "olive_sea_snake",
    "display_name": "Olive Sea Snake",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "punctuality",
        "stealth",
        "paddle-tail"
      ]
    },
    "facets": {
      "biome": [
        "reef",
        "coastal"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "nocturnal"
      ],
      "sociality": [
        "solitary"
      ],
      "diet": [
        "omnivore"
      ]
    }
  },
  {
    "id": "giant_river_otter",
    "display_name": "Giant River Otter",
    "rarity_lane": "unusual",
    "traits": {
      "temperament": [
        "stoic",
        "vigilant"
      ],
      "work_style": [
        "defender",
        "observer"
      ],
      "signature": [
        "mediator",
        "protector",
        "chatter"
      ]
    },
    "facets": {
      "biome": [
        "river_lake"
      ],
      "locomotion": [
        "swimmer"
      ],
      "diel": [
        "diurnal"
      ],
      "sociality": [
        "small_group"
      ],
      "diet": [
        "omnivore"
      ]
    }
  }
];
if (typeof window !== 'undefined') window.ANIMALS = ANIMALS;
if (typeof module !== 'undefined' && module.exports) module.exports = { ANIMALS };
