// Syrrhēxis army data. Edit the values below; keep the first line as is.
window.NHB_DATA = {
  "meta": {
    "version": "0.9.6",
    "synced": "2026-10-22",
    "sources": {
      "Hittite Empire Army": "1aqMPs2Pi5car6pUzcuWmHXArGss_RZdkgATe5OsbVrw",
      "Achaemenid Persia Army": "1hdxpY5jUEu8OthLoyHbMcwjkEKV4eRC4tXijL7JVfDo",
      "Classical Greek Army": "1BUBl-gO0YafmrCJfNGqbFdqRxZeiNY9I9MNKAoba0vA",
      "Aztec Empire": "12noIQ0WgjsegrjLU29fVc4S2WrwG_o-jPZjbFQGhtp0",
      "Rulebook": "1tvn1uBqGOZn7Pl0J9rnmLn1HmIgHXGNTkLf1ieOjQ7o",
      "Imperial Roman Army": "14dX5ecHdMNlfWm32rendILQWMlW2It7TxS3Bn89E_dc",
      "Supplemental Mercenaries": "1oN0n_AQu4VIO-QcwFPHcK8ezs-0dSBv3L8UV0jXVt-M"
    }
  },
  "armies": [
    {
      "id": "hittite",
      "name": "Hittite Empire",
      "units": [
        {
          "id": "levy-infantry",
          "name": "Levy Infantry",
          "type": "Warrior",
          "move": 6,
          "training": 4,
          "points": 9,
          "comps": [
            [
              4,
              5
            ],
            [
              3,
              5
            ]
          ],
          "equip": [
            "ŠUKUR"
          ],
          "gear": [],
          "body": null,
          "shield": null,
          "opts": [
            {
              "label": "Weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "ŠUKUR spear",
                  "w": [
                    "ŠUKUR"
                  ],
                  "c": 0
                },
                {
                  "name": "ḪA.ZI.IN axe",
                  "w": [
                    "ḪA.ZI.IN"
                  ],
                  "c": 0
                },
                {
                  "name": "GIŠ.TUKUL club",
                  "w": [
                    "GIŠ.TUKUL"
                  ],
                  "c": 0
                }
              ]
            },
            {
              "label": "Shields",
              "kind": "add",
              "shield": "Shield",
              "c": 1,
              "unlessWeapon": "ŠUKUR"
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Taskmaster",
                  5
                ]
              ]
            },
            {
              "one": [
                [
                  "Lead Captain",
                  3
                ]
              ]
            }
          ],
          "rules": [
            "Levy"
          ],
          "weapons": {
            "ŠUKUR": [
              "9",
              "4",
              "6",
              "Reach (1). Note: Reduced accuracy"
            ],
            "ḪA.ZI.IN": [
              "3",
              "2",
              "5",
              "Cleaving Blade (4). Note: Reduced accuracy"
            ],
            "GIŠ.TUKUL": [
              "3",
              "2",
              "4",
              "Sunder (2). Note: Reduced accuracy"
            ]
          }
        },
        {
          "id": "hattian-infantry",
          "name": "Hattian Infantry",
          "type": "Warrior",
          "move": 6,
          "training": 5,
          "points": 12,
          "comps": [
            [
              4,
              4
            ],
            [
              3,
              4
            ]
          ],
          "equip": [
            "ŠUKUR"
          ],
          "gear": [
            "GÍR"
          ],
          "body": null,
          "shield": null,
          "opts": [
            {
              "label": "Weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "ŠUKUR spear",
                  "w": [
                    "ŠUKUR"
                  ],
                  "c": 0
                },
                {
                  "name": "GÍR.GAL sword",
                  "w": [
                    "GÍR.GAL"
                  ],
                  "c": 0
                },
                {
                  "name": "GÍR.GAL.GUR sword",
                  "w": [
                    "GÍR.GAL.GUR"
                  ],
                  "c": 0
                },
                {
                  "name": "ḪA.ZI.IN axe",
                  "w": [
                    "ḪA.ZI.IN"
                  ],
                  "c": 0
                }
              ]
            },
            {
              "label": "Shield",
              "kind": "add",
              "shield": "Shield",
              "c": 1
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  3
                ],
                [
                  "Standard Bearer",
                  8
                ]
              ]
            }
          ],
          "rules": [],
          "weapons": {
            "ŠUKUR": [
              "9",
              "5",
              "6",
              "Reach (1). With Shield equipped: -1 Accuracy and Unwieldy (1)"
            ],
            "GÍR.GAL": [
              "3",
              "5",
              "6",
              "Parrying Blade"
            ],
            "GÍR.GAL.GUR": [
              "3",
              "4",
              "5",
              "Cleaving Blade (3)"
            ],
            "ḪA.ZI.IN": [
              "3",
              "3",
              "5",
              "Cleaving Blade (4)"
            ],
            "GÍR": [
              "1",
              "6",
              "5",
              ""
            ]
          }
        },
        {
          "id": "hattian-royal-guard",
          "name": "Hattian Royal Guard",
          "type": "Warrior",
          "move": 5,
          "training": 6,
          "points": 16,
          "comps": [
            [
              2,
              5
            ],
            [
              2,
              4
            ]
          ],
          "equip": [
            "ŠUKUR"
          ],
          "gear": [
            "GÍR"
          ],
          "body": "TÚG.ŠIRʾAM",
          "shield": null,
          "opts": [
            {
              "label": "Weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "ŠUKUR spear",
                  "w": [
                    "ŠUKUR"
                  ],
                  "c": 0
                },
                {
                  "name": "GÍR.GAL sword",
                  "w": [
                    "GÍR.GAL"
                  ],
                  "c": 0
                },
                {
                  "name": "GÍR.GAL.GUR sword",
                  "w": [
                    "GÍR.GAL.GUR"
                  ],
                  "c": 0
                },
                {
                  "name": "ḪA.ZI.IN axe",
                  "w": [
                    "ḪA.ZI.IN"
                  ],
                  "c": 0
                }
              ]
            },
            {
              "label": "Shield",
              "kind": "add",
              "shield": "Shield",
              "c": 2
            }
          ],
          "chars": [
            {
              "req": true,
              "one": [
                [
                  "Lead Captain",
                  6
                ],
                [
                  "Standard Bearer",
                  14
                ]
              ]
            },
            {
              "one": [
                [
                  "Lord",
                  15
                ]
              ]
            }
          ],
          "rules": [
            "Guard",
            "Noble"
          ],
          "armors": {
            "TÚG.ŠIRʾAM": {
              "v": 1,
              "melee": 1,
              "text": "+1 Armor in Melee Combat",
              "move": -1
            }
          },
          "weapons": {
            "ŠUKUR": [
              "9",
              "6",
              "6",
              "Reach (1). With Shield equipped: -1 Accuracy and Unwieldy (1). Note: Increased accuracy"
            ],
            "GÍR.GAL": [
              "3",
              "6",
              "6",
              "Parrying Blade. Note: Increased accuracy"
            ],
            "GÍR.GAL.GUR": [
              "3",
              "4",
              "5",
              "Cleaving Blade (3)"
            ],
            "ḪA.ZI.IN": [
              "3",
              "3",
              "5",
              "Cleaving Blade (4)"
            ],
            "GÍR": [
              "1",
              "7",
              "5",
              "Note: Increased accuracy"
            ]
          }
        },
        {
          "id": "royal-retinue",
          "name": "Royal Retinue",
          "type": "Warrior",
          "move": 5,
          "training": 7,
          "points": 15,
          "comps": [
            [
              1,
              5
            ]
          ],
          "equip": [
            "ŠUKUR"
          ],
          "gear": [
            "GÍR"
          ],
          "body": "TÚG.ŠIRʾAM",
          "shield": null,
          "opts": [
            {
              "label": "Weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "ŠUKUR spear",
                  "w": [
                    "ŠUKUR"
                  ],
                  "c": 0
                },
                {
                  "name": "GÍR.GAL sword",
                  "w": [
                    "GÍR.GAL"
                  ],
                  "c": 0
                },
                {
                  "name": "GÍR.GAL.GUR sword",
                  "w": [
                    "GÍR.GAL.GUR"
                  ],
                  "c": 0
                },
                {
                  "name": "ḪA.ZI.IN axe",
                  "w": [
                    "ḪA.ZI.IN"
                  ],
                  "c": 0
                }
              ]
            },
            {
              "label": "Shield",
              "kind": "add",
              "shield": "Shield",
              "c": 3
            }
          ],
          "chars": [
            {
              "req": true,
              "one": [
                [
                  "Lord",
                  17
                ],
                [
                  "Commander",
                  40
                ],
                [
                  "Army Musician",
                  60
                ]
              ]
            },
            {
              "one": [
                [
                  "Standard Bearer",
                  20
                ]
              ]
            }
          ],
          "rules": [
            "Noble"
          ],
          "armors": {
            "TÚG.ŠIRʾAM": {
              "v": 1,
              "melee": 1,
              "text": "+1 Armor in Melee Combat",
              "move": -1
            }
          },
          "weapons": {
            "ŠUKUR": [
              "9",
              "6",
              "6",
              "Reach (1). With Shield equipped: -1 Accuracy and Unwieldy (1). Note: Increased accuracy"
            ],
            "GÍR.GAL": [
              "3",
              "6",
              "6",
              "Parrying Blade. Note: Increased accuracy"
            ],
            "GÍR.GAL.GUR": [
              "3",
              "4",
              "5",
              "Cleaving Blade (3)"
            ],
            "ḪA.ZI.IN": [
              "3",
              "3",
              "5",
              "Cleaving Blade (4)"
            ],
            "GÍR": [
              "1",
              "7",
              "5",
              "Note: Increased accuracy"
            ]
          }
        },
        {
          "id": "hattian-archers",
          "name": "Hattian Archers",
          "type": "Light Warrior",
          "move": 7,
          "training": 5,
          "points": 9,
          "comps": [
            [
              4,
              4
            ],
            [
              2,
              6
            ]
          ],
          "equip": [
            "GIŠ.BAN"
          ],
          "gear": [
            "GÍR"
          ],
          "body": null,
          "shield": null,
          "opts": [],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  5
                ],
                [
                  "Volleymaster",
                  10
                ]
              ]
            }
          ],
          "rules": [],
          "weapons": {
            "GIŠ.BAN": [
              "24”",
              "5",
              "4",
              "Direct Fire"
            ],
            "GÍR": [
              "1",
              "6",
              "5",
              ""
            ]
          }
        },
        {
          "id": "allied-archers",
          "name": "Allied Archers",
          "type": "Light Warrior",
          "move": 7,
          "training": 4,
          "points": 10,
          "comps": [
            [
              4,
              4
            ],
            [
              2,
              6
            ]
          ],
          "equip": [
            "GIŠ.BAN"
          ],
          "gear": [
            "GÍR"
          ],
          "body": null,
          "shield": null,
          "opts": [],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  4
                ]
              ]
            },
            {
              "one": [
                [
                  "Bowmaster",
                  10
                ]
              ]
            }
          ],
          "rules": [
            "Mercenary"
          ],
          "weapons": {
            "GIŠ.BAN": [
              "24”",
              "6",
              "4",
              "Recurve Bow, Direct Fire. Note: Increased accuracy"
            ],
            "GÍR": [
              "1",
              "6",
              "4",
              "Note: Reduced strength"
            ]
          }
        },
        {
          "id": "hattian-peltasts",
          "name": "Hattian Peltasts",
          "type": "Skirmishing Warrior",
          "move": 7,
          "training": 5,
          "points": 11,
          "range": [
            8,
            12
          ],
          "equip": [
            "ŠUKUR.TUR"
          ],
          "gear": [],
          "body": null,
          "shield": null,
          "opts": [
            {
              "label": "Weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "ŠUKUR.TUR javelins",
                  "w": [
                    "ŠUKUR.TUR"
                  ],
                  "c": 0
                },
                {
                  "name": "ḪA.ZI.IN axe",
                  "w": [
                    "ḪA.ZI.IN"
                  ],
                  "c": 0
                }
              ]
            },
            {
              "label": "Buckler",
              "kind": "add",
              "shield": "Buckler",
              "c": 1
            }
          ],
          "chars": [
          {
            "one": [
              [
                "Lead Captain",
                5
              ],
              [
                "Skirmish Captain",
                8
              ],
              [
                "Ranger Captain",
                6
              ]
            ]
          }
        ],
        "rules": [
            "Ambush"
          ],
          "weapons": {
            "ŠUKUR.TUR": [
              "6 / 8”",
              "5",
              "6",
              "Throwing Weapon"
            ],
            "ḪA.ZI.IN": [
              "3",
              "3",
              "5",
              "Cleaving Blade (4)"
            ]
          }
        },
        {
          "id": "allied-peltasts",
          "name": "Allied Peltasts",
          "type": "Skirmishing Warrior",
          "move": 7,
          "training": 4,
          "points": 10,
          "range": [
            6,
            10
          ],
          "equip": [
            "ŠUKUR.TUR"
          ],
          "gear": [],
          "body": null,
          "shield": null,
          "opts": [
            {
              "label": "Weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "ŠUKUR.TUR javelins",
                  "w": [
                    "ŠUKUR.TUR"
                  ],
                  "c": 0
                },
                {
                  "name": "KUŠ.DALUŠ sling and GÍR dagger",
                  "w": [
                    "KUŠ.DALUŠ",
                    "GÍR"
                  ],
                  "c": 1
                }
              ]
            },
            {
              "label": "Buckler",
              "kind": "add",
              "shield": "Buckler",
              "c": 1
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Ranger Captain",
                  6
                ]
              ]
            }
          ],
          "rules": [
            "Ambush",
            "Mercenary"
          ],
          "weapons": {
            "ŠUKUR.TUR": [
              "6 / 8”",
              "5",
              "6",
              "Throwing Weapon"
            ],
            "KUŠ.DALUŠ": [
              "28”",
              "5",
              "4",
              ""
            ],
            "GÍR": [
              "1",
              "6",
              "5",
              ""
            ]
          }
        },
        {
          "id": "hattian-chariots",
          "name": "Hattian Chariots",
          "type": "Chariot",
          "move": 10,
          "training": 6,
          "points": 72,
          "comps": [
            [
              1,
              4
            ],
            [
              1,
              2
            ]
          ],
          "crew": {
            "driver": 1,
            "crew": 2,
            "horses": 2
          },
          "equip": [
            "ŠUKUR.TUR",
            "Horses"
          ],
          "gear": [],
          "body": null,
          "shield": "Shield",
          "opts": [
            {
              "label": "Crew weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "ŠUKUR.TUR javelins and Shield",
                  "w": [
                    "ŠUKUR.TUR",
                    "Horses"
                  ],
                  "c": 0,
                  "shield": "Shield"
                },
                {
                  "name": "GIŠ.BAN bow",
                  "w": [
                    "GIŠ.BAN",
                    "Horses"
                  ],
                  "c": 0,
                  "shield": null
                },
                {
                  "name": "ŠUKUR spear",
                  "w": [
                    "ŠUKUR",
                    "Horses"
                  ],
                  "c": 1,
                  "shield": null
                }
              ]
            },
            {
              "label": "TÚG.ŠIRʾAM armor (crew)",
              "kind": "add",
              "body": "TÚG.ŠIRʾAM",
              "c": 6
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lord",
                  15
                ]
              ]
            }
          ],
          "rules": [
            "Feign Charge"
          ],
          "custom": {
            "Runners": "During the End of Round phase, if this unit does not have a Run, Charge, or Flee token and is not locked in combat, it gets bonus attacks. Select an enemy unit within 6” to target with 2 bonus attacks, at Accuracy 5 and Strength 5. These attacks cannot be modified."
          },
          "armors": {
            "TÚG.ŠIRʾAM": {
              "v": 1,
              "melee": 1,
              "text": "+1 Armor in Melee Combat"
            }
          },
          "weapons": {
            "ŠUKUR.TUR": [
              "5 / 8”",
              "5",
              "6",
              "2 Attacks. Throwing Weapon. Note: Reduced length"
            ],
            "Horses": [
              "3",
              "5",
              "5",
              "2 Attacks, can only use on Charge. May be used in conjunction with ŠUKUR.TUR or ŠUKUR"
            ],
            "GIŠ.BAN": [
              "24”",
              "5",
              "4",
              "2 Attacks. Direct Fire"
            ],
            "ŠUKUR": [
              "8",
              "5",
              "6",
              "2 Attacks. Note: Reduced length"
            ]
          }
        },
        {
          "id": "allied-chariots",
          "name": "Allied Chariots",
          "type": "Chariot",
          "move": 11,
          "training": 5,
          "points": 47,
          "comps": [
            [
              1,
              2
            ]
          ],
          "crew": {
            "driver": 1,
            "crew": 1,
            "horses": 2
          },
          "equip": [
            "GIŠ.BAN",
            "Horses"
          ],
          "gear": [
            "GÍR"
          ],
          "body": "TÚG.ŠIRʾAM",
          "shield": null,
          "opts": [],
          "chars": [
            {
              "one": [
                [
                  "Tribal Leader",
                  8
                ]
              ]
            }
          ],
          "rules": [
            "Mercenary"
          ],
          "armors": {
            "TÚG.ŠIRʾAM": {
              "v": 1,
              "melee": 1,
              "text": "+1 Armor in Melee Combat"
            }
          },
          "weapons": {
            "GIŠ.BAN": [
              "24”",
              "6",
              "4",
              "2 Attacks. Recurve Bow, Direct Fire. Note: Increased Accuracy"
            ],
            "Horses": [
              "3",
              "5",
              "5",
              "2 Attacks, can only use on Charge"
            ],
            "GÍR": [
              "0",
              "5",
              "5",
              "1 Attack, cannot be used on Charge. Note: Reduced accuracy"
            ]
          }
        }
      ]
    },
    {
      "id": "persia",
      "name": "Achaemenid Persia",
      "units": [
        {
          "id": "sparabara",
          "name": "Sparabārā",
          "type": "Warrior",
          "move": 6,
          "training": 6,
          "points": 13,
          "comps": [
            [
              4,
              5
            ],
            [
              2,
              6
            ]
          ],
          "equip": [
            "Aršti",
            "Θanu"
          ],
          "gear": [
            "Akīnakah Kamna"
          ],
          "body": "Light Armor",
          "shield": null,
          "mixed": {
            "front": {
              "label": "1st Rank",
              "w": [
                "Aršti"
              ],
              "shield": "Spara"
            },
            "rest": {
              "label": "Other ranks",
              "w": [
                "Θanu"
              ],
              "shield": null
            }
          },
          "opts": [],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  5
                ]
              ],
              "note": "1st Rank"
            },
            {
              "one": [
                [
                  "Musician",
                  5
                ]
              ],
              "note": "1st Rank"
            },
            {
              "one": [
                [
                  "Volleymaster",
                  10
                ]
              ],
              "note": "2nd Rank"
            },
            {
              "one": [
                [
                  "Standard Bearer",
                  8
                ]
              ],
              "note": "2nd Rank"
            }
          ],
          "rules": [
            "Mixed Unit"
          ],
          "armors": {
            "Spara": {
              "v": 1,
              "move": -1,
              "vsStr": "−1 Armor against attacks of Strength 6+",
              "text": "-1 Armor against Weapon Attacks with Strength 6 or Greater. Attacks against this unit from its front arc use the 1st Rank's Armor. -1 Armor while the unit has a Run or Flee Action Token",
              "grants": [
                "Pavise"
              ],
              "runflee": -1
            }
          },
          "weapons": {
            "Aršti": [
              "8",
              "5",
              "6",
              "Reach (1)"
            ],
            "Θanu": [
              "24”",
              "6",
              "4",
              "Recurve Bow, Direct Fire"
            ],
            "Akīnakah Kamna": [
              "1",
              "6",
              "5",
              ""
            ]
          },
          "frontArcArmor": true
        },
        {
          "id": "kardaka",
          "name": "Kardakā",
          "type": "Warrior",
          "move": 6,
          "training": 4,
          "points": 10,
          "comps": [
            [
              4,
              6
            ],
            [
              3,
              5
            ]
          ],
          "equip": [
            "Aršti"
          ],
          "gear": [
            "Akīnakah Kamna"
          ],
          "body": "Light Armor",
          "shield": "Shield",
          "opts": [
            {
              "label": "Weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "Aršti spear",
                  "w": [
                    "Aršti"
                  ],
                  "c": 0
                },
                {
                  "name": "Arštaya javelins",
                  "w": [
                    "Arštaya"
                  ],
                  "c": 1
                },
                {
                  "name": "Akīnakah sword",
                  "w": [
                    "Akīnakah"
                  ],
                  "c": 0
                }
              ]
            },
            {
              "label": "Heavy Shield (replaces Shield)",
              "kind": "add",
              "shield": "Heavy Shield",
              "c": 2
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  2
                ],
                [
                  "Taskmaster",
                  6
                ]
              ]
            },
            {
              "one": [
                [
                  "Standard Bearer",
                  5
                ]
              ]
            }
          ],
          "rules": [
            "Levy"
          ],
          "weapons": {
            "Aršti": [
              "8",
              "5",
              "5",
              "Reach (1). Note: Reduced strength"
            ],
            "Akīnakah": [
              "2",
              "5",
              "5",
              "Thrusting Blade. Note: Reduced accuracy"
            ],
            "Arštaya": [
              "6 / 8”",
              "5",
              "5",
              "Throwing Weapon. Note: Reduced strength"
            ],
            "Akīnakah Kamna": [
              "1",
              "6",
              "5",
              ""
            ]
          }
        },
        {
          "id": "anusiya",
          "name": "Anušiyā",
          "type": "Warrior",
          "move": 6,
          "training": 7,
          "points": 17,
          "comps": [
            [
              3,
              5
            ],
            [
              2,
              4
            ]
          ],
          "equip": [
            "Θanu"
          ],
          "gear": [
            "Akīnakah"
          ],
          "body": "Light Armor",
          "shield": "Shield",
          "opts": [
            {
              "label": "Weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "Θanu bow",
                  "w": [
                    "Θanu"
                  ],
                  "c": 0
                },
                {
                  "name": "Aršti spear",
                  "w": [
                    "Aršti"
                  ],
                  "c": 1
                },
                {
                  "name": "Arštaya javelins",
                  "w": [
                    "Arštaya"
                  ],
                  "c": 0
                }
              ]
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  8
                ],
                [
                  "Bowmaster",
                  10
                ],
                [
                  "Lord",
                  17
                ]
              ]
            },
            {
              "one": [
                [
                  "Musician",
                  8
                ]
              ]
            }
          ],
          "rules": [
            "Guard",
            "Disciplined"
          ],
          "weapons": {
            "Θanu": [
              "24”",
              "7",
              "4",
              "Recurve Bow, Direct Fire. Note: Increased accuracy"
            ],
            "Aršti": [
              "8",
              "6",
              "6",
              "Reach (1). Note: Increased accuracy"
            ],
            "Arštaya": [
              "6 / 8”",
              "6",
              "6",
              "Throwing Weapon. Note: Increased accuracy"
            ],
            "Akīnakah": [
              "2",
              "6",
              "5",
              "Thrusting Blade"
            ]
          }
        },
        {
          "id": "anusiya-retinue",
          "name": "Anušiyā Retinue",
          "type": "Warrior",
          "move": 5,
          "training": 8,
          "points": 15,
          "comps": [
            [
              1,
              5
            ]
          ],
          "equip": [],
          "gear": [
            "Akīnakah"
          ],
          "body": "Light Armor",
          "shield": "Shield",
          "opts": [
            {
              "label": "Aršti spear",
              "kind": "add",
              "w": [
                "Aršti"
              ],
              "c": 1
            }
          ],
          "chars": [
            {
              "req": true,
              "one": [
                [
                  "Lead Captain",
                  8
                ]
              ]
            },
            {
              "req": true,
              "one": [
                [
                  "Army Standard Bearer",
                  28
                ],
                [
                  "Army Musician",
                  60
                ],
                [
                  "Commander",
                  40
                ]
              ]
            }
          ],
          "rules": [
            "Disciplined"
          ],
          "weapons": {
            "Aršti": [
              "8",
              "6",
              "6",
              "Reach (1). Note: Increased accuracy"
            ],
            "Akīnakah": [
              "2",
              "6",
              "5",
              "Thrusting Blade"
            ]
          }
        },
        {
          "id": "takabara",
          "name": "Takabārā",
          "type": "Light Warrior",
          "move": 7,
          "training": 5,
          "points": 11,
          "comps": [
            [
              3,
              4
            ],
            [
              2,
              5
            ]
          ],
          "equip": [
            "Aršti"
          ],
          "gear": [
            "Akīnakah Kamna"
          ],
          "body": null,
          "shield": "Shield",
          "opts": [
            {
              "label": "Weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "Aršti spear",
                  "w": [
                    "Aršti"
                  ],
                  "c": 0
                },
                {
                  "name": "Arštaya javelins",
                  "w": [
                    "Arštaya"
                  ],
                  "c": 0
                },
                {
                  "name": "Fradaxšanā sling",
                  "w": [
                    "Fradaxšanā"
                  ],
                  "c": 0
                }
              ]
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  5
                ],
                [
                  "Ranger Captain",
                  5
                ]
              ]
            },
            {
              "one": [
                [
                  "Taskmaster",
                  4
                ]
              ]
            },
            {
              "one": [
                [
                  "Houndmaster",
                  10
                ]
              ]
            }
          ],
          "rules": [
            "Scout",
            "Levy"
          ],
          "weapons": {
            "Aršti": [
              "8",
              "5",
              "6",
              "Reach (1)"
            ],
            "Arštaya": [
              "6 / 8”",
              "5",
              "6",
              "Throwing Weapon"
            ],
            "Fradaxšanā": [
              "28”",
              "5",
              "4",
              "Can only Shoot in Open Order"
            ],
            "Akīnakah Kamna": [
              "1",
              "6",
              "5",
              ""
            ]
          }
        },
        {
          "id": "asabara",
          "name": "Asabārā",
          "type": "Cavalry",
          "move": 10,
          "training": 7,
          "points": 22,
          "comps": [
            [
              2,
              4
            ],
            [
              1,
              4
            ]
          ],
          "equip": [
            "Arštaya"
          ],
          "gear": [
            "Akīnakah"
          ],
          "body": "Light Armor",
          "shield": null,
          "opts": [
            {
              "label": "Weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "Arštaya javelins",
                  "w": [
                    "Arštaya"
                  ],
                  "c": 0
                },
                {
                  "name": "Aršti spear",
                  "w": [
                    "Aršti"
                  ],
                  "c": 0
                }
              ]
            },
            {
              "label": "Medium Armor",
              "kind": "add",
              "body": "Medium Armor",
              "c": 2
            },
            {
              "label": "Shield",
              "kind": "add",
              "shield": "Shield",
              "c": 2
            },
            {
              "label": "Barding",
              "kind": "add",
              "barding": "Barding",
              "c": 2
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  12
                ],
                [
                  "Standard Bearer",
                  8
                ],
                [
                  "Lord",
                  17
                ]
              ]
            }
          ],
          "rules": [
            "Feign Charge"
          ],
          "weapons": {
            "Arštaya": [
              "6 / 8”",
              "6",
              "6",
              "Throwing Weapon. Note: Increased accuracy"
            ],
            "Aršti": [
              "8",
              "6",
              "6",
              "Note: Increased accuracy"
            ],
            "Akīnakah": [
              "2",
              "6",
              "5",
              "Thrusting Blade"
            ]
          }
        },
        {
          "id": "asabara-retinue",
          "name": "Asabārā Retinue",
          "type": "Cavalry",
          "move": 8,
          "training": 8,
          "points": 19,
          "comps": [
            [
              1,
              3
            ]
          ],
          "equip": [
            "Arštaya"
          ],
          "gear": [
            "Akīnakah"
          ],
          "body": "Light Armor",
          "shield": null,
          "opts": [
            {
              "label": "Weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "Arštaya javelins",
                  "w": [
                    "Arštaya"
                  ],
                  "c": 0
                },
                {
                  "name": "Aršti spear",
                  "w": [
                    "Aršti"
                  ],
                  "c": 0
                }
              ]
            },
            {
              "label": "Medium Armor",
              "kind": "add",
              "body": "Medium Armor",
              "c": 3
            },
            {
              "label": "Shield",
              "kind": "add",
              "shield": "Shield",
              "c": 3
            },
            {
              "label": "Barding",
              "kind": "add",
              "barding": "Barding",
              "c": 3
            }
          ],
          "chars": [
            {
              "req": true,
              "one": [
                [
                  "Lead Captain",
                  12
                ],
                [
                  "Lord",
                  20
                ]
              ]
            },
            {
              "req": true,
              "one": [
                [
                  "Army Standard Bearer",
                  28
                ],
                [
                  "Army Musician",
                  60
                ],
                [
                  "Commander",
                  40
                ]
              ]
            }
          ],
          "rules": [
            "Feign Charge"
          ],
          "weapons": {
            "Arštaya": [
              "6 / 8”",
              "6",
              "6",
              "Throwing Weapon. Note: Increased accuracy"
            ],
            "Aršti": [
              "8",
              "6",
              "6",
              "Note: Increased accuracy"
            ],
            "Akīnakah": [
              "2",
              "7",
              "5",
              "Thrusting Blade. Note: Increased accuracy"
            ]
          }
        },
        {
          "id": "asagartiya",
          "name": "Asagartiyā",
          "type": "Light Cavalry",
          "move": 12,
          "training": 5,
          "points": 19,
          "comps": [
          [
            2,
            4
          ],
          [
            2,
            3
          ]
        ],
          "equip": [
            "Kamanda"
          ],
          "gear": [
            "Akīnakah Kamna"
          ],
          "body": null,
          "shield": null,
          "opts": [],
          "chars": [
            {
              "one": [
                [
                  "Tribal Leader",
                  14
                ]
              ]
            },
            {
              "one": [
                [
                  "Birdmaster",
                  8
                ]
              ]
            }
          ],
          "rules": [
            "Feign Charge",
            "Scout",
            "Levy"
          ],
          "weapons": {
            "Kamanda": [
              "5”",
              "6",
              "-",
              "Throwing Weapon. On hit, increase the amount of Morale lost to Suppression from 1 to the enemy’s Training value, then make a bonus attack with a melee weapon (even if not in base contact) at -1 Accuracy. Ignores Evasion."
            ],
            "Akīnakah Kamna": [
              "1",
              "6",
              "5",
              ""
            ]
          }
        },
        {
          "id": "saka",
          "name": "Sakā",
          "type": "Light Cavalry",
          "move": 12,
          "training": 5,
          "points": 20,
          "comps": [
          [
            2,
            4
          ],
          [
            2,
            3
          ]
        ],
          "equip": [
            "Θanu"
          ],
          "gear": [
            "Akīnakah Kamna"
          ],
          "body": "Light Armor",
          "shield": null,
          "opts": [
            {
              "label": "Weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "Θanu bow",
                  "w": [
                    "Θanu"
                  ],
                  "c": 0
                },
                {
                  "name": "Sagaris axe",
                  "w": [
                    "Sagaris"
                  ],
                  "c": 1
                },
                {
                  "name": "Arštaya javelins",
                  "w": [
                    "Arštaya"
                  ],
                  "c": 0
                }
              ]
            },
            {
              "label": "Shield",
              "kind": "add",
              "shield": "Shield",
              "c": 1
            },
            {
              "label": "Barding",
              "kind": "add",
              "barding": "Barding",
              "c": 2
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  10
                ],
                [
                  "Tribal Leader",
                  14
                ]
              ]
            }
          ],
          "rules": [
            "Feign Retreat",
            "Scout",
            "Parthian Shot",
            "Levy"
          ],
          "weapons": {
            "Θanu": [
              "24”",
              "7",
              "4",
              "Recurve Bow, Direct Fire"
            ],
            "Sagaris": [
              "3",
              "4",
              "5",
              "Cleaving Blade (4)"
            ],
            "Arštaya": [
              "6 / 8”",
              "6",
              "6",
              "Throwing Weapon"
            ],
            "Akīnakah Kamna": [
              "1",
              "6",
              "5",
              ""
            ]
          }
        },
        {
          "id": "ratha",
          "name": "Raθā",
          "type": "Chariot",
          "move": 10,
          "training": 6,
          "points": 47,
          "comps": [
            [
              1,
              4
            ],
            [
              1,
              2
            ]
          ],
          "crew": {
            "driver": 1,
            "crew": 1,
            "horses": 2
          },
          "equip": [
            "Θanu",
            "Horses"
          ],
          "gear": [
            "Akīnakah Kamna"
          ],
          "body": "Light Armor",
          "shield": null,
          "opts": [
            {
              "label": "Crew weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "Θanu bow",
                  "w": [
                    "Θanu",
                    "Horses"
                  ],
                  "c": 0
                },
                {
                  "name": "Arštaya javelins",
                  "w": [
                    "Arštaya",
                    "Horses"
                  ],
                  "c": 0
                }
              ]
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Standard Bearer",
                  15
                ]
              ]
            }
          ],
          "rules": [
            "Feign Charge"
          ],
          "weapons": {
            "Θanu": [
              "24”",
              "7",
              "4",
              "2 Attacks. Recurve Bow, Direct Fire. Note: Increased accuracy"
            ],
            "Arštaya": [
              "6 / 8”",
              "6",
              "6",
              "1 Attack Melee, 2 Attacks Shooting. Throwing Weapon. Note: Increased accuracy"
            ],
            "Horses": [
              "3",
              "5",
              "5",
              "2 Attacks, can only use on Charge. May be used in conjunction with Arštaya"
            ],
            "Akīnakah Kamna": [
              "0",
              "5",
              "5",
              "1 Attack, cannot be used on Charge. Note: Reduced accuracy"
            ]
          }
        },
        {
          "id": "ratha-apaxsa",
          "name": "Raθā-Dāça",
          "type": "Chariot",
          "move": 12,
          "training": 7,
          "points": 48,
          "comps": [
            [
              1,
              3
            ],
            [
              1,
              2
            ]
          ],
          "crew": {
            "driver": 1,
            "crew": 0,
            "horses": 2
          },
          "equip": [
            "Dāça",
            "Horses"
          ],
          "gear": [
            "Akīnakah"
          ],
          "body": "Light Armor",
          "shield": null,
          "opts": [
            {
              "label": "Driver: Arštaya javelins",
              "kind": "add",
              "w": [
                "Arštaya"
              ],
              "c": 5
            }
          ],
          "chars": [],
          "rules": [
            "Run Them Down",
            "Suicidal",
            "Terrify All"
          ],
          "weapons": {
            "Dāça": [
              "0",
              "9",
              "7",
              "2 Attacks, can only be used on Charge. Before rolling to hit, each enemy unit in the Melee takes a Fear Test; against units that pass, this weapon has Accuracy 5. Destroy model after resolving Wounds."
            ],
            "Horses": [
              "3",
              "5",
              "5",
              "2 Attacks, can only use on Charge. May be used in conjunction with Dāça"
            ],
            "Arštaya": [
              "6 / 8”",
              "6",
              "6",
              "1 Attack Melee, 2 Attacks Shooting. Throwing Weapon. Note: Increased accuracy"
            ],
            "Akīnakah": [
              "1",
              "6",
              "5",
              "1 Attack, cannot be used on Charge. Thrusting Blade"
            ]
          }
        },
        {
          "id": "ratha-retinue",
          "name": "Raθā Retinue",
          "type": "Chariot",
          "move": 10,
          "training": 8,
          "points": 84,
          "comps": [
            [
              1,
              2
            ]
          ],
          "crew": {
            "driver": 1,
            "crew": 2,
            "horses": 4
          },
          "equip": [
            "Arštaya",
            "Horses"
          ],
          "gear": [
            "Akīnakah"
          ],
          "body": "Light Armor",
          "shield": null,
          "opts": [
            {
              "label": "Crew weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "Arštaya javelins",
                  "w": [
                    "Arštaya",
                    "Horses"
                  ],
                  "c": 0
                },
                {
                  "name": "Aršti spear",
                  "w": [
                    "Aršti",
                    "Horses"
                  ],
                  "c": 0
                }
              ]
            }
          ],
          "chars": [
            {
              "req": true,
              "one": [
                [
                  "Commander",
                  30
                ],
                [
                  "Lord",
                  15
                ]
              ]
            }
          ],
          "rules": [],
          "weapons": {
            "Arštaya": [
              "6 / 8”",
              "6",
              "6",
              "2 Attack Melee, 3 Attacks Shooting. Throwing Weapon. Note: Increased accuracy"
            ],
            "Aršti": [
              "7",
              "6",
              "6",
              "3 Attacks. Note: Increased accuracy"
            ],
            "Horses": [
              "3",
              "5",
              "5",
              "4 Attacks, can only use on Charge. May be used in conjunction with Arštaya or Aršti"
            ],
            "Akīnakah": [
              "1",
              "6",
              "5",
              "2 Attacks, cannot be used on Charge. Thrusting Blade"
            ]
          }
        },
        {
          "id": "piru",
          "name": "Pīrū",
          "type": "Elephant",
          "move": 8,
          "training": 8,
          "points": 105,
          "comps": [
            [
              1,
              2
            ]
          ],
          "crew": {
            "mahout": 1,
            "crew": 1
          },
          "equip": [
            "Θanu",
            "Elephant"
          ],
          "gear": [],
          "body": null,
          "shield": null,
          "opts": [
            {
              "label": "1 Additional Crewman",
              "kind": "add",
              "crewPlus": 1,
              "c": 12
            },
            {
              "label": "Crew weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "Θanu bow",
                  "w": [
                    "Θanu",
                    "Elephant"
                  ],
                  "c": 0
                },
                {
                  "name": "Aršti spear",
                  "w": [
                    "Aršti",
                    "Elephant"
                  ],
                  "c": 5
                },
                {
                  "name": "Arštaya javelins",
                  "w": [
                    "Arštaya",
                    "Elephant"
                  ],
                  "c": 8
                }
              ]
            }
          ],
          "chars": [],
          "rules": [
            "Terrify Non-Elephant",
            "Mercenary"
          ],
          "weapons": {
            "Θanu": [
              "24”",
              "7",
              "4",
              "1 attack per Crewman, plus 1. Recurve Bow, Direct Fire. Note: Increased accuracy"
            ],
            "Arštaya": [
              "4 / 8”",
              "6",
              "6",
              "1 attack per Crewman, plus 1 if Shooting. Throwing Weapon. Note: Increased accuracy"
            ],
            "Aršti": [
              "5",
              "6",
              "6",
              "1 attack per Crewman. Note: Increased accuracy but reduced length"
            ],
            "Elephant": [
              "10",
              "5",
              "10",
              "1 attack. 2 extra attacks on Charge"
            ]
          }
        }
      ]
    },
    {
      "id": "greek",
      "name": "Classical Greece",
      "units": [
        {
          "id": "hoplitai",
          "name": "Hoplîtai",
          "type": "Warrior",
          "move": 6,
          "training": 7,
          "points": 17,
          "comps": [
            [
              4,
              6
            ],
            [
              4,
              5
            ]
          ],
          "equip": [
            "Dóry"
          ],
          "gear": [
            "Xíphos"
          ],
          "body": "Light Armor",
          "shield": "Heavy Shield",
          "opts": [
            {
              "label": "Sidearm",
              "kind": "swap",
              "choices": [
                {
                  "name": "Xíphos sword",
                  "gear": [
                    "Xíphos"
                  ],
                  "c": 0
                },
                {
                  "name": "Kopís sword",
                  "gear": [
                    "Kopís"
                  ],
                  "c": 1
                },
                {
                  "name": "Lakōnikón Xíphos",
                  "gear": [
                    "Lakōnikón Xíphos"
                  ],
                  "c": 0
                }
              ]
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  8
                ]
              ]
            },
            {
              "one": [
                [
                  "Rear Captain",
                  8
                ]
              ]
            },
            {
              "one": [
                [
                  "Musician",
                  7
                ]
              ]
            }
          ],
          "rules": [
            "Phalanx"
          ],
          "weapons": {
            "Dóry": [
              "10",
              "5",
              "6",
              "Reach (1), Unwieldy (1)"
            ],
            "Xíphos": [
              "3",
              "5",
              "6",
              "Parrying Blade"
            ],
            "Kopís": [
              "4",
              "4",
              "5",
              "Cleaving Blade (3)"
            ],
            "Lakōnikón Xíphos": [
              "2",
              "6",
              "6",
              "Parrying Blade"
            ]
          }
        },
        {
          "id": "hieros-lochos",
          "name": "Hieròs Lóchos",
          "type": "Warrior",
          "move": 6,
          "training": 8,
          "points": 21,
          "comps": [
            [
              4,
              5
            ],
            [
              3,
              5
            ]
          ],
          "equip": [
            "Dóry"
          ],
          "gear": [
            "Xíphos"
          ],
          "body": "Light Armor",
          "shield": "Heavy Shield",
          "opts": [
            {
              "label": "Sidearm",
              "kind": "swap",
              "choices": [
                {
                  "name": "Xíphos sword",
                  "gear": [
                    "Xíphos"
                  ],
                  "c": 0
                },
                {
                  "name": "Kopís sword",
                  "gear": [
                    "Kopís"
                  ],
                  "c": 0
                }
              ]
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  8
                ]
              ],
              "req": true
            },
            {
              "one": [
                [
                  "Rear Captain",
                  8
                ]
              ],
              "req": true
            },
            {
              "one": [
                [
                  "Musician",
                  8
                ]
              ]
            }
          ],
          "rules": [
            "Phalanx",
            "Disciplined"
          ],
          "custom": {
            "Sacred Band": "While this unit is at Half Strength or Mass Casualties, it gains Frenzy and Suicidal."
          },
          "weapons": {
            "Dóry": [
              "10",
              "6",
              "6",
              "Reach (1), Unwieldy (1)"
            ],
            "Kopís": [
              "4",
              "5",
              "5",
              "Cleaving Blade (3)"
            ],
            "Xíphos": [
              "3",
              "6",
              "6",
              "Parrying Blade"
            ]
          }
        },
        {
          "id": "hoplitai-retinue",
          "name": "Hoplîtai Retinue",
          "type": "Warrior",
          "move": 5,
          "training": 8,
          "points": 16,
          "comps": [
            [
              1,
              5
            ]
          ],
          "equip": [
            "Dóry"
          ],
          "gear": [
            "Xíphos"
          ],
          "body": "Light Armor",
          "shield": "Heavy Shield",
          "opts": [
            {
              "label": "Sidearm",
              "kind": "swap",
              "choices": [
                {
                  "name": "Xíphos sword",
                  "gear": [
                    "Xíphos"
                  ],
                  "c": 0
                },
                {
                  "name": "Kopís sword",
                  "gear": [
                    "Kopís"
                  ],
                  "c": 0
                },
                {
                  "name": "Lakōnikón Xíphos",
                  "gear": [
                    "Lakōnikón Xíphos"
                  ],
                  "c": 0
                }
              ]
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  8
                ]
              ],
              "req": true
            },
            {
              "one": [
                [
                  "Army Musician",
                  60
                ],
                [
                  "Commander",
                  40
                ]
              ],
              "req": true
            }
          ],
          "rules": [
            "Disciplined"
          ],
          "weapons": {
            "Dóry": [
              "10",
              "6",
              "6",
              "Reach (1), Unwieldy (1)"
            ],
            "Xíphos": [
              "3",
              "6",
              "6",
              "Parrying Blade"
            ],
            "Kopís": [
              "4",
              "5",
              "5",
              "Cleaving Blade (3)"
            ],
            "Lakōnikón Xíphos": [
              "2",
              "7",
              "6",
              "Parrying Blade"
            ]
          }
        },
        {
          "id": "peltastai",
          "name": "Peltastaí",
          "type": "Light Warrior",
          "move": 7,
          "training": 5,
          "points": 12,
          "comps": [
            [
              4,
              4
            ],
            [
              2,
              5
            ]
          ],
          "equip": [
            "Akóntion"
          ],
          "gear": [
            "Encheirídion"
          ],
          "body": null,
          "shield": "Shield",
          "opts": [
            {
              "label": "Light Armor",
              "kind": "add",
              "body": "Light Armor",
              "c": 1
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  5
                ],
                [
                  "Skirmish Captain",
                  8
                ]
              ]
            }
          ],
          "rules": [
            "Scout",
            "Surefooted (Stony Plain)"
          ],
          "weapons": {
            "Akóntion": [
              "6 / 8”",
              "5",
              "6",
              "Throwing Weapon"
            ],
            "Encheirídion": [
              "1",
              "6",
              "5",
              ""
            ]
          }
        },
        {
          "id": "toxotai",
          "name": "Toxótai",
          "type": "Light Warrior",
          "move": 7,
          "training": 5,
          "points": 10,
          "comps": [
            [
              4,
              4
            ],
            [
              2,
              5
            ]
          ],
          "equip": [
            "Tóxon"
          ],
          "gear": [
            "Encheirídion"
          ],
          "body": null,
          "shield": null,
          "opts": [
            {
              "label": "Shield",
              "kind": "add",
              "shield": "Shield",
              "c": 1
            },
            {
              "label": "Light Armor",
              "kind": "add",
              "body": "Light Armor",
              "c": 1
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Volleymaster",
                  10
                ],
                [
                  "Bowmaster",
                  10
                ]
              ]
            }
          ],
          "rules": [],
          "weapons": {
            "Tóxon": [
              "24”",
              "5",
              "4",
              "Direct Fire"
            ],
            "Encheirídion": [
              "1",
              "6",
              "5",
              ""
            ]
          }
        },
        {
          "id": "sphendonetai",
          "name": "Sphendonêtai",
          "type": "Skirmishing Warrior",
          "move": 7,
          "training": 5,
          "points": 12,
          "range": [
            4,
            10
          ],
          "equip": [
            "Sphendónē"
          ],
          "gear": [
            "Encheirídion"
          ],
          "body": null,
          "shield": null,
          "opts": [],
          "chars": [
            {
              "one": [
                [
                  "Ranger Captain",
                  6
                ],
                [
                  "Volleymaster",
                  10
                ]
              ]
            }
          ],
          "rules": [],
          "custom": {
            "Syrízousa Molybdís": "For each pair of successful hits with the Sphendónē, the defending player loses an additional 1 Army Morale due to Suppression."
          },
          "weapons": {
            "Sphendónē": [
              "28”",
              "6",
              "4",
              ""
            ],
            "Encheirídion": [
              "1",
              "6",
              "5",
              ""
            ]
          }
        },
        {
          "id": "psiloi",
          "name": "Psiloí",
          "type": "Skirmishing Warrior",
          "move": 7,
          "training": 5,
          "points": 10,
          "range": [
            6,
            12
          ],
          "equip": [
            "Akóntion"
          ],
          "gear": [],
          "body": null,
          "shield": null,
          "opts": [
            {
              "label": "Weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "Akóntion javelins",
                  "w": [
                    "Akóntion"
                  ],
                  "c": 0
                },
                {
                  "name": "Sphendónē sling",
                  "w": [
                    "Sphendónē"
                  ],
                  "c": 0
                }
              ]
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Ranger Captain",
                  6
                ],
                [
                  "Skirmish Captain",
                  8
                ]
              ]
            }
          ],
          "rules": [
            "Ambush"
          ],
          "custom": {
            "Syrízousa Molybdís": "For each pair of successful hits with the Sphendónē, the defending player loses an additional 1 Army Morale due to Suppression."
          },
          "weapons": {
            "Akóntion": [
              "6 / 8”",
              "5",
              "5",
              "Throwing Weapon"
            ],
            "Sphendónē": [
              "28”",
              "5",
              "4",
              ""
            ]
          }
        },
        {
          "id": "hippeis",
          "name": "Hippeîs",
          "type": "Light Cavalry",
          "move": 12,
          "training": 6,
          "points": 20,
          "range": [
            4,
            8
          ],
          "equip": [
            "Dóry"
          ],
          "gear": [
            "Xíphos"
          ],
          "body": "Light Armor",
          "shield": null,
          "opts": [
            {
              "label": "Sidearm",
              "kind": "swap",
              "choices": [
                {
                  "name": "Xíphos sword",
                  "gear": [
                    "Xíphos"
                  ],
                  "c": 0
                },
                {
                  "name": "Kopís sword",
                  "gear": [
                    "Kopís"
                  ],
                  "c": 1
                }
              ]
            },
            {
              "label": "Shield",
              "kind": "add",
              "shield": "Shield",
              "c": 2
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  10
                ],
                [
                  "Musician",
                  8
                ]
              ]
            }
          ],
          "rules": [
            "Feign Charge",
            "Scout"
          ],
          "weapons": {
            "Dóry": [
              "10",
              "5",
              "6",
              ""
            ],
            "Xíphos": [
              "3",
              "5",
              "6",
              "Parrying Blade"
            ],
            "Kopís": [
              "4",
              "4",
              "5",
              "Cleaving Blade (3)"
            ]
          }
        },
        {
          "id": "hippeis-retinue",
          "name": "Hippeîs Retinue",
          "type": "Light Cavalry",
          "move": 10,
          "training": 7,
          "points": 19,
          "range": [
            3,
            4
          ],
          "equip": [
            "Dóry"
          ],
          "gear": [
            "Xíphos"
          ],
          "body": "Light Armor",
          "shield": null,
          "opts": [
            {
              "label": "Sidearm",
              "kind": "swap",
              "choices": [
                {
                  "name": "Xíphos sword",
                  "gear": [
                    "Xíphos"
                  ],
                  "c": 0
                },
                {
                  "name": "Kopís sword",
                  "gear": [
                    "Kopís"
                  ],
                  "c": 1
                }
              ]
            },
            {
              "label": "Shield",
              "kind": "add",
              "shield": "Shield",
              "c": 3
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  12
                ]
              ],
              "req": true
            },
            {
              "one": [
                [
                  "Commander",
                  40
                ]
              ],
              "req": true
            }
          ],
          "rules": [
            "Feign Charge",
            "Disciplined"
          ],
          "weapons": {
            "Dóry": [
              "10",
              "6",
              "6",
              ""
            ],
            "Xíphos": [
              "3",
              "6",
              "6",
              "Parrying Blade"
            ],
            "Kopís": [
              "4",
              "5",
              "5",
              "Cleaving Blade (3)"
            ]
          }
        }
      ]
    },
    {
      "id": "rome",
      "name": "Imperial Rome",
      "units": [
        {
          "id": "legionarius",
          "name": "Lēgiōnāriī",
          "type": "Warrior",
          "move": 6,
          "training": 7,
          "points": 21,
          "comps": [
            [
              4,
              4
            ],
            [
              3,
              3
            ]
          ],
          "equip": [
            "Pīlum"
          ],
          "gear": [
            "Gladius",
            "Pugiō"
          ],
          "body": "Medium Armor",
          "shield": "Heavy Shield",
          "opts": [],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  8
                ]
              ],
              "req": true
            },
            {
              "one": [
                [
                  "Rear Captain",
                  8
                ]
              ]
            },
            {
              "one": [
                [
                  "Standard Bearer",
                  14
                ]
              ]
            },
            {
              "one": [
                [
                  "Musician",
                  7
                ]
              ]
            }
          ],
          "rules": [],
          "custom": {
            "Testūdō": "When this unit takes the Hold action, it may move half its move and Shooting attacks against it suffer a -2 penalty to hit. It may also use its Pīlum in Melee: Length 6, -1 Strength, and loses Sunder (2).",
            "Iacite Pīla": "When this unit takes the Charge action, it may first make a Shooting attack against the unit it intends to charge at a -2 penalty to hit."
          },
          "weapons": {
            "Pīlum": [
              "6”",
              "5",
              "6",
              "Throwing Weapon, Sunder (2)"
            ],
            "Gladius": [
              "4",
              "5",
              "6",
              "Thrusting Blade"
            ],
            "Pugiō": [
              "1",
              "6",
              "5",
              ""
            ]
          }
        },
        {
          "id": "veteranus",
          "name": "Veterānī",
          "type": "Warrior",
          "move": 6,
          "training": 7,
          "points": 23,
          "comps": [
            [
              4,
              4
            ],
            [
              3,
              3
            ]
          ],
          "equip": [
            "Pīlum"
          ],
          "gear": [
            "Gladius",
            "Pugiō"
          ],
          "body": "Medium Armor",
          "shield": "Heavy Shield",
          "opts": [],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  8
                ]
              ],
              "req": true
            },
            {
              "one": [
                [
                  "Rear Captain",
                  8
                ]
              ]
            },
            {
              "one": [
                [
                  "Standard Bearer",
                  14
                ]
              ]
            },
            {
              "one": [
                [
                  "Musician",
                  7
                ]
              ]
            }
          ],
          "rules": [],
          "custom": {
            "Testūdō": "When this unit takes the Hold action, it may move half its move and Shooting attacks against it suffer a -2 penalty to hit. It may also use its Pīlum in Melee: Length 6, -1 Strength, and loses Sunder (2).",
            "Iacite Pīla": "When this unit takes the Charge action, it may first make a Shooting attack against the unit it intends to charge at a -2 penalty to hit."
          },
          "weapons": {
            "Pīlum": [
              "6”",
              "6",
              "6",
              "Throwing Weapon, Sunder (2)"
            ],
            "Gladius": [
              "4",
              "6",
              "6",
              "Thrusting Blade"
            ],
            "Pugiō": [
              "1",
              "6",
              "5",
              ""
            ]
          }
        },
        {
          "id": "legionarius-retinue",
          "name": "Lēgiōnāriī Retinue",
          "type": "Warrior",
          "move": 5,
          "training": 8,
          "points": 19,
          "comps": [
            [
              2,
              3
            ]
          ],
          "equip": [
            "Pīlum"
          ],
          "gear": [
            "Gladius",
            "Pugiō"
          ],
          "body": "Medium Armor",
          "shield": "Heavy Shield",
          "opts": [],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  8
                ]
              ],
              "req": true
            },
            {
              "one": [
                [
                  "Houndmaster",
                  13
                ]
              ]
            },
            {
              "one": [
                [
                  "Army Standard Bearer",
                  28
                ],
                [
                  "Army Musician",
                  60
                ],
                [
                  "Commander",
                  40
                ]
              ],
              "req": true
            }
          ],
          "rules": [],
          "custom": {
            "Testūdō": "When this unit takes the Hold action, it may move half its move and Shooting attacks against it suffer a -2 penalty to hit. It may also use its Pīlum in Melee: Length 6, -1 Strength, and loses Sunder (2).",
            "Iacite Pīla": "When this unit takes the Charge action, it may first make a Shooting attack against the unit it intends to charge at a -2 penalty to hit."
          },
          "weapons": {
            "Pīlum": [
              "6”",
              "6",
              "6",
              "Throwing Weapon, Sunder (2)"
            ],
            "Gladius": [
              "4",
              "6",
              "6",
              "Thrusting Blade"
            ],
            "Pugiō": [
              "1",
              "7",
              "5",
              ""
            ]
          }
        },
        {
          "id": "praetoriani-retinue",
          "name": "Praetōriānī Retinue",
          "type": "Warrior",
          "move": 5,
          "training": 8,
          "points": 20,
          "comps": [
            [
              1,
              5
            ]
          ],
          "equip": [
            "Pīlum"
          ],
          "gear": [
            "Gladius",
            "Pugiō"
          ],
          "body": "Medium Armor",
          "shield": "Heavy Shield",
          "opts": [],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  8
                ]
              ],
              "req": true
            },
            {
              "one": [
                [
                  "Commander",
                  40
                ]
              ],
              "req": true
            },
            {
              "one": [
                [
                  "Houndmaster",
                  13
                ]
              ]
            }
          ],
          "rules": [],
          "custom": {
            "Testūdō": "When this unit takes the Hold action, it may move half its move and Shooting attacks against it suffer a -2 penalty to hit. It may also use its Pīlum in Melee: Length 6, -1 Strength, and loses Sunder (2).",
            "Iacite Pīla": "When this unit takes the Charge action, it may first make a Shooting attack against the unit it intends to charge at a -2 penalty to hit.",
            "Fidēlitās": "While this unit has its Commander, it gains Disciplined. Once per game, its controlling player may suffer 1 wound with no save and remove the Commander to recover 1 used Command Card."
          },
          "weapons": {
            "Pīlum": [
              "6”",
              "6",
              "6",
              "Throwing Weapon, Sunder (2)"
            ],
            "Gladius": [
              "4",
              "6",
              "6",
              "Thrusting Blade"
            ],
            "Pugiō": [
              "1",
              "7",
              "5",
              ""
            ]
          }
        },
        {
          "id": "auxilia",
          "name": "Auxilia",
          "type": "Light Warrior",
          "move": 7,
          "training": 5,
          "points": 12,
          "comps": [
            [
              4,
              4
            ],
            [
              3,
              4
            ],
            [
              2,
              4
            ]
          ],
          "equip": [
            "Hasta"
          ],
          "gear": [],
          "body": null,
          "shield": "Shield",
          "opts": [
            {
              "label": "Weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "Hasta spear",
                  "w": [
                    "Hasta"
                  ],
                  "c": 0
                },
                {
                  "name": "Lancea javelins",
                  "w": [
                    "Lancea"
                  ],
                  "c": 1
                },
                {
                  "name": "Spatha sword",
                  "w": [
                    "Spatha"
                  ],
                  "c": 0
                },
                {
                  "name": "Clāva mace",
                  "w": [
                    "Clāva"
                  ],
                  "c": 0
                }
              ]
            },
            {
              "label": "Light Armor",
              "kind": "add",
              "body": "Light Armor",
              "c": 1
            }
          ],
          "chars": [
          {
            "one": [
              [
                "Lead Captain",
                5
              ]
            ],
            "req": true
          },
          {
            "one": [
              [
                "Standard Bearer",
                8
              ]
            ]
          },
          {
            "one": [
              [
                "Houndmaster",
                10
              ]
            ]
          },
          {
            "one": [
              [
                "Ranger Captain",
                5
              ]
            ]
          }
        ],
        "rules": [],
          "weapons": {
            "Hasta": [
              "8",
              "5",
              "6",
              "Reach (1)"
            ],
            "Lancea": [
              "6 / 8”",
              "6",
              "5",
              "Throwing Weapon"
            ],
            "Clāva": [
              "3",
              "3",
              "4",
              "Sunder (2)"
            ],
            "Spatha": [
              "5",
              "5",
              "5",
              ""
            ]
          }
        },
        {
          "id": "sagittarius",
          "name": "Sagittāriī",
          "type": "Light Warrior",
          "move": 7,
          "training": 5,
          "points": 10,
          "comps": [
            [
              3,
              4
            ],
            [
              2,
              4
            ]
          ],
          "equip": [
            "Arcus"
          ],
          "gear": [
            "Pugiō"
          ],
          "body": null,
          "shield": null,
          "opts": [
            {
              "label": "Armor",
              "kind": "swap",
              "choices": [
                {
                  "name": "No armor",
                  "c": 0
                },
                {
                  "name": "Light Armor",
                  "body": "Light Armor",
                  "c": 1
                },
                {
                  "name": "Medium Armor",
                  "body": "Medium Armor",
                  "c": 2
                }
              ]
            },
            {
              "label": "Spatha sword",
              "kind": "add",
              "w": [
                "Spatha"
              ],
              "c": 1
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Volleymaster",
                  10
                ],
                [
                  "Bowmaster",
                  10
                ]
              ]
            },
            {
              "one": [
                [
                  "Standard Bearer",
                  8
                ]
              ]
            }
          ],
          "rules": [],
          "weapons": {
            "Arcus": [
              "24”",
              "5",
              "4",
              "Recurve Bow, Direct Fire"
            ],
            "Spatha": [
              "5",
              "4",
              "5",
              "Note: Reduced accuracy"
            ],
            "Pugiō": [
              "1",
              "5",
              "5",
              "Note: Reduced accuracy"
            ]
          }
        },
        {
          "id": "cohors-equitata",
          "name": "Cohors Equitāta",
          "type": "Cavalry",
          "move": 12,
          "training": 6,
          "points": 24,
          "comps": [
            [
              2,
              4
            ],
            [
              2,
              3
            ]
          ],
          "equip": [
            "Hasta"
          ],
          "gear": [
            "Spatha"
          ],
          "body": "Medium Armor",
          "shield": "Shield",
          "opts": [
            {
              "label": "Weapon",
              "kind": "swap",
              "choices": [
                {
                  "name": "Hasta spear",
                  "w": [
                    "Hasta"
                  ],
                  "c": 0
                },
                {
                  "name": "Lancea javelins",
                  "w": [
                    "Lancea"
                  ],
                  "c": 0
                }
              ]
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  10
                ]
              ],
              "req": true
            },
            {
              "one": [
                [
                  "Rear Captain",
                  10
                ]
              ]
            },
            {
              "one": [
                [
                  "Standard Bearer",
                  12
                ]
              ]
            },
            {
              "one": [
                [
                  "Musician",
                  8
                ]
              ]
            }
          ],
          "rules": [
            "Feign Charge"
          ],
          "weapons": {
            "Hasta": [
              "8",
              "5",
              "6",
              "No Reach"
            ],
            "Lancea": [
              "6 / 8”",
              "5",
              "5",
              "Throwing Weapon"
            ],
            "Spatha": [
              "5",
              "5",
              "5",
              ""
            ]
          }
        },
        {
          "id": "cohors-equitata-retinue",
          "name": "Cohors Equitāta Retinue",
          "type": "Cavalry",
          "move": 10,
          "training": 7,
          "points": 20,
          "comps": [
            [
              1,
              4
            ]
          ],
          "equip": [
            "Hasta"
          ],
          "gear": [
            "Spatha"
          ],
          "body": "Light Armor",
          "shield": "Shield",
          "opts": [],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  12
                ],
                [
                  "Lord",
                  17
                ]
              ],
              "req": true
            },
            {
              "one": [
                [
                  "Army Standard Bearer",
                  25
                ],
                [
                  "Army Musician",
                  60
                ],
                [
                  "Commander",
                  40
                ]
              ],
              "req": true
            }
          ],
          "rules": [
            "Feign Charge"
          ],
          "weapons": {
            "Hasta": [
              "8",
              "6",
              "6",
              "Note: Increased Accuracy"
            ],
            "Spatha": [
              "5",
              "6",
              "5",
              "Note: Increased Accuracy"
            ]
          }
        },
        {
          "id": "explorator",
          "name": "Explōrātōrēs",
          "type": "Light Cavalry",
          "move": 14,
          "training": 7,
          "points": 20,
          "comps": [
            [
              2,
              3
            ],
            [
              1,
              4
            ]
          ],
          "equip": [],
          "gear": [
            "Spatha",
            "Pugiō"
          ],
          "body": null,
          "shield": "Shield",
          "opts": [
            {
              "label": "Lancea javelins",
              "kind": "add",
              "w": [
                "Lancea"
              ],
              "c": 2
            },
            {
              "label": "Light Armor",
              "kind": "add",
              "body": "Light Armor",
              "c": 2
            }
          ],
          "chars": [
          {
            "one": [
              [
                "Birdmaster",
                8
              ]
            ]
          },
          {
            "one": [
              [
                "Ranger Captain",
                8
              ]
            ]
          },
          {
            "one": [
              [
                "Standard Bearer",
                12
              ]
            ]
          }
        ],
        "rules": [
            "Scout",
            "Ambush"
          ],
          "weapons": {
            "Lancea": [
              "6 / 8”",
              "6",
              "5",
              "Throwing Weapon"
            ],
            "Spatha": [
              "5",
              "6",
              "5",
              ""
            ],
            "Pugiō": [
              "1",
              "7",
              "5",
              ""
            ]
          }
        },
        {
          "id": "scorpio",
          "name": "Scorpiō",
          "type": "Light Warmachine",
          "move": 5,
          "training": 6,
          "points": 12,
          "engine": 60,
          "engineUS": 3,
          "range": [
            3,
            6
          ],
          "equip": [
            "Scorpiō Bolt"
          ],
          "gear": [
            "Gladius",
            "Pugiō"
          ],
          "body": "Medium Armor",
          "shield": null,
          "opts": [],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  6
                ]
              ]
            }
          ],
          "rules": [],
          "weapons": {
            "Scorpiō Bolt": [
              "48”",
              "7",
              "8",
              "1 Attack. Direct Fire, Piercing Shot (1), Massive Suppression (5), Cumbersome"
            ],
            "Gladius": [
              "4",
              "5",
              "6",
              "Thrusting Blade"
            ],
            "Pugiō": [
              "1",
              "6",
              "5",
              ""
            ]
          }
        },
        {
          "id": "carroballista",
          "name": "Carroballista",
          "type": "Light Warmachine",
          "move": 6,
          "training": 6,
          "points": 12,
          "engine": 70,
          "engineUS": 3,
          "range": [
            2,
            4
          ],
          "equip": [
            "Carroballista Bolt"
          ],
          "gear": [
            "Gladius",
            "Pugiō"
          ],
          "body": "Medium Armor",
          "shield": null,
          "opts": [],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  6
                ]
              ]
            }
          ],
          "rules": [],
          "custom": {
            "Mule Cart": "This unit may take the Run action, but cannot Shoot in a round it Runs. It turns as a Chariot (see Wheeled Vehicle)."
          },
          "weapons": {
            "Carroballista Bolt": [
              "36”",
              "6",
              "7",
              "1 Attack. Direct Fire, Piercing Shot (1), Massive Suppression (3), Cumbersome"
            ],
            "Gladius": [
              "4",
              "5",
              "6",
              "Thrusting Blade"
            ],
            "Pugiō": [
              "1",
              "6",
              "5",
              ""
            ]
          }
        }
      ]
    },
    {
      "id": "aztec",
      "name": "Aztec Empire",
      "units": [
        {
          "id": "yaonamicqui",
          "name": "Yāōnāmicqueh",
          "type": "Skirmishing Warrior",
          "move": 7,
          "training": 5,
          "points": 9,
          "range": [
            15,
            20
          ],
          "equip": [
            "Mācuahuitl"
          ],
          "gear": [],
          "body": null,
          "shield": null,
          "armors": {
            "Chīmalli": {
              "v": 1,
              "vs6": 1,
              "text": "-1 Armor against Weapon Attacks with Strength 6 or Greater"
            },
            "Ichcahuipilli": {
              "v": 1,
              "vs6": 1,
              "text": "-1 Armor against Weapon Attacks with Strength 6 or Greater"
            }
          },
          "opts": [
            {
              "label": "Tepoztōpīlli spear (replaces Mācuahuitl)",
              "kind": "count",
              "c": 1,
              "w": [
                "Tepoztōpīlli"
              ],
              "replaces": "Mācuahuitl",
              "group": "weapon"
            },
            {
              "label": "Quauholōlli club (replaces Mācuahuitl)",
              "kind": "count",
              "c": 0,
              "w": [
                "Quauholōlli"
              ],
              "replaces": "Mācuahuitl",
              "group": "weapon"
            },
            {
              "label": "Chīmalli shields (whole unit)",
              "kind": "add",
              "shield": "Chīmalli",
              "c": 1
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  5
                ],
                [
                  "Ranger Captain",
                  6
                ]
              ]
            }
          ],
          "rules": [
            "Mixed Unit"
          ],
          "weapons": {
            "Mācuahuitl": [
              "4",
              "5",
              "3",
              "Melee Suppression, Cleaving Blade (3)"
            ],
            "Tepoztōpīlli": [
              "8",
              "5",
              "4",
              "Melee Suppression. -1 Strength against Armor 3 or Greater"
            ],
            "Quauholōlli": [
              "3",
              "3",
              "4",
              "Sunder (2)"
            ]
          },
          "custom": {
            "Matched Armor": "Every model in the unit must have the same armor."
          }
        },
        {
          "id": "cuauhocelotl",
          "name": "Cuāuhocēlōmeh",
          "type": "Light Warrior",
          "move": 7,
          "training": 7,
          "points": 14,
          "comps": [
            [
              3,
              5
            ],
            [
              2,
              4
            ]
          ],
          "equip": [
            "Mācuahuitl"
          ],
          "gear": [
            "Tecpatl"
          ],
          "body": "Ichcahuipilli",
          "shield": null,
          "armors": {
            "Chīmalli": {
              "v": 1,
              "vs6": 1,
              "text": "-1 Armor against Weapon Attacks with Strength 6 or Greater"
            },
            "Ichcahuipilli": {
              "v": 1,
              "vs6": 1,
              "text": "-1 Armor against Weapon Attacks with Strength 6 or Greater"
            }
          },
          "opts": [
            {
              "label": "Tepoztōpīlli spear (replaces Mācuahuitl)",
              "kind": "count",
              "c": 1,
              "w": [
                "Tepoztōpīlli"
              ],
              "replaces": "Mācuahuitl",
              "group": "weapon"
            },
            {
              "label": "Quauholōlli club (replaces Mācuahuitl)",
              "kind": "count",
              "c": 0,
              "w": [
                "Quauholōlli"
              ],
              "replaces": "Mācuahuitl",
              "group": "weapon"
            },
            {
              "label": "Atlatl dart-thrower",
              "kind": "count",
              "c": 2,
              "w": [
                "Atlatl"
              ]
            },
            {
              "label": "Chīmalli shields (whole unit)",
              "kind": "add",
              "shield": "Chīmalli",
              "c": 1
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  7
                ]
              ],
              "req": true
            },
            {
              "one": [
                [
                  "Shaman",
                  10
                ],
                [
                  "Standard Bearer",
                  14
                ],
                [
                  "Ranger Captain",
                  6
                ]
              ]
            }
          ],
          "rules": [
            "Mixed Unit"
          ],
          "weapons": {
            "Mācuahuitl": [
              "4",
              "6",
              "3",
              "Melee Suppression, Cleaving Blade (3)"
            ],
            "Tepoztōpīlli": [
              "8",
              "6",
              "4",
              "Melee Suppression. -1 Strength against Armor 3 or Greater"
            ],
            "Quauholōlli": [
              "3",
              "4",
              "4",
              "Sunder (2)"
            ],
            "Atlatl": [
              "14”",
              "4",
              "5",
              "Throwing Weapon. On hit, increase the amount of Morale lost to Suppression from 1 to 2"
            ],
            "Tecpatl": [
              "1",
              "6",
              "4",
              ""
            ]
          },
          "custom": {
            "Matched Armor": "Every model in the unit must have the same armor."
          }
        },
        {
          "id": "cuauhocelotl-retinue",
          "name": "Cuāuhocēlōmeh Retinue",
          "type": "Light Warrior",
          "move": 6,
          "training": 8,
          "points": 14,
          "comps": [
            [
              1,
              5
            ]
          ],
          "equip": [
            "Mācuahuitl"
          ],
          "gear": [
            "Tecpatl"
          ],
          "body": "Ichcahuipilli",
          "shield": "Chīmalli",
          "armors": {
            "Chīmalli": {
              "v": 1,
              "vs6": 1,
              "text": "-1 Armor against Weapon Attacks with Strength 6 or Greater"
            },
            "Ichcahuipilli": {
              "v": 1,
              "vs6": 1,
              "text": "-1 Armor against Weapon Attacks with Strength 6 or Greater"
            }
          },
          "opts": [],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  8
                ],
                [
                  "Shaman",
                  10
                ]
              ],
              "req": true
            },
            {
              "one": [
                [
                  "Commander",
                  40
                ],
                [
                  "Army Musician",
                  60
                ],
                [
                  "Army Standard Bearer",
                  28
                ],
                [
                  "Lord",
                  20
                ]
              ],
              "req": true
            }
          ],
          "rules": [],
          "weapons": {
            "Mācuahuitl": [
              "4",
              "6",
              "3",
              "Melee Suppression, Cleaving Blade (3)"
            ],
            "Tecpatl": [
              "1",
              "6",
              "4",
              ""
            ]
          }
        },
        {
          "id": "cuachic",
          "name": "Cuāchicqueh",
          "type": "Light Warrior",
          "move": 7,
          "training": 8,
          "points": 17,
          "comps": [
            [
              3,
              4
            ],
            [
              2,
              4
            ]
          ],
          "equip": [
            "Mācuahuitl"
          ],
          "gear": [
            "Tecpatl"
          ],
          "body": "Ichcahuipilli",
          "shield": null,
          "armors": {
            "Chīmalli": {
              "v": 1,
              "vs6": 1,
              "text": "-1 Armor against Weapon Attacks with Strength 6 or Greater"
            },
            "Ichcahuipilli": {
              "v": 1,
              "vs6": 1,
              "text": "-1 Armor against Weapon Attacks with Strength 6 or Greater"
            }
          },
          "opts": [
            {
              "label": "Tepoztōpīlli spear (replaces Mācuahuitl)",
              "kind": "count",
              "c": 1,
              "w": [
                "Tepoztōpīlli"
              ],
              "replaces": "Mācuahuitl",
              "group": "weapon"
            },
            {
              "label": "Quauholōlli club (replaces Mācuahuitl)",
              "kind": "count",
              "c": 0,
              "w": [
                "Quauholōlli"
              ],
              "replaces": "Mācuahuitl",
              "group": "weapon"
            },
            {
              "label": "Atlatl dart-thrower",
              "kind": "count",
              "c": 2,
              "w": [
                "Atlatl"
              ]
            },
            {
              "label": "Chīmalli shields (whole unit)",
              "kind": "add",
              "shield": "Chīmalli",
              "c": 1
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  8
                ]
              ],
              "req": true
            },
            {
              "one": [
                [
                  "Shaman",
                  10
                ],
                [
                  "Standard Bearer",
                  16
                ],
                [
                  "Ranger Captain",
                  6
                ]
              ]
            }
          ],
          "rules": [
            "Disciplined",
            "Mixed Unit"
          ],
          "weapons": {
            "Mācuahuitl": [
              "4",
              "6",
              "3",
              "Melee Suppression, Cleaving Blade (3)"
            ],
            "Tepoztōpīlli": [
              "8",
              "6",
              "4",
              "Melee Suppression. -1 Strength against Armor 3 or Greater"
            ],
            "Quauholōlli": [
              "3",
              "4",
              "4",
              "Sunder (2)"
            ],
            "Atlatl": [
              "14”",
              "4",
              "5",
              "Throwing Weapon. On hit, increase the amount of Morale lost to Suppression from 1 to 2"
            ],
            "Tecpatl": [
              "1",
              "6",
              "4",
              ""
            ]
          },
          "custom": {
            "Shorn Ones": "A model with both Ichcahuipilli and Chīmalli loses only 1 Armor, not 2, against Weapon Attacks with Strength 6 or Greater.",
            "Matched Armor": "Every model in the unit must have the same armor."
          },
          "shorn": true
        },
        {
          "id": "quimichtin",
          "name": "Quimichtin",
          "type": "Skirmishing Warrior",
          "move": 7,
          "training": 7,
          "points": 9,
          "range": [
            4,
            8
          ],
          "equip": [],
          "gear": [
            "Tecpatl"
          ],
          "body": null,
          "shield": null,
          "armors": {
            "Chīmalli": {
              "v": 1,
              "vs6": 1,
              "text": "-1 Armor against Weapon Attacks with Strength 6 or Greater"
            },
            "Ichcahuipilli": {
              "v": 1,
              "vs6": 1,
              "text": "-1 Armor against Weapon Attacks with Strength 6 or Greater"
            }
          },
          "opts": [
            {
              "label": "Tepoztōpīlli spear (replaces Tecpatl)",
              "kind": "count",
              "c": 2,
              "w": [
                "Tepoztōpīlli"
              ]
            },
            {
              "label": "Chīmalli shields (whole unit)",
              "kind": "add",
              "shield": "Chīmalli",
              "c": 1
            }
          ],
          "chars": [],
          "rules": [
            "Scout",
            "Mixed Unit"
          ],
          "custom": {
            "Little Mouse": "If this unit is deployed via the Scout special rule, after the unit is placed, the opponent shows the controlling player 1 Command Card they did not pick, at random.",
            "Matched Armor": "Every model in the unit must have the same armor."
          },
          "weapons": {
            "Tepoztōpīlli": [
              "8",
              "6",
              "4",
              "Melee Suppression. -1 Strength against Armor 3 or Greater"
            ],
            "Tecpatl": [
              "1",
              "6",
              "4",
              ""
            ]
          }
        },
        {
          "id": "yaominqui",
          "name": "Yāōminqueh",
          "type": "Skirmishing Warrior",
          "move": 7,
          "training": 5,
          "points": 10,
          "range": [
            10,
            15
          ],
          "equip": [
            "Tēmātlatl"
          ],
          "gear": [],
          "body": null,
          "shield": null,
          "armors": {
            "Chīmalli": {
              "v": 1,
              "vs6": 1,
              "text": "-1 Armor against Weapon Attacks with Strength 6 or Greater"
            },
            "Ichcahuipilli": {
              "v": 1,
              "vs6": 1,
              "text": "-1 Armor against Weapon Attacks with Strength 6 or Greater"
            }
          },
          "opts": [
            {
              "label": "Tlahhuītōlli bow (replaces sling)",
              "kind": "count",
              "c": 0,
              "w": [
                "Tlahhuītōlli"
              ],
              "replaces": "Tēmātlatl"
            },
            {
              "label": "Chīmalli shields (whole unit)",
              "kind": "add",
              "shield": "Chīmalli",
              "c": 1
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  5
                ],
                [
                  "Ranger Captain",
                  6
                ]
              ]
            }
          ],
          "rules": [
            "Mixed Unit"
          ],
          "weapons": {
            "Tēmātlatl": [
              "28”",
              "5",
              "4",
              "On hit, increase the amount of Morale lost to Suppression from 1 to 2"
            ],
            "Tlahhuītōlli": [
              "24”",
              "5",
              "4",
              "Direct Fire"
            ]
          },
          "custom": {
            "Matched Armor": "Every model in the unit must have the same armor."
          }
        },
        {
          "id": "yaomotlatqui",
          "name": "Yāōmotlatqueh",
          "type": "Skirmishing Warrior",
          "move": 7,
          "training": 5,
          "points": 10,
          "range": [
            6,
            10
          ],
          "equip": [
            "Atlatl"
          ],
          "gear": [],
          "body": null,
          "shield": null,
          "armors": {
            "Chīmalli": {
              "v": 1,
              "vs6": 1,
              "text": "-1 Armor against Weapon Attacks with Strength 6 or Greater"
            },
            "Ichcahuipilli": {
              "v": 1,
              "vs6": 1,
              "text": "-1 Armor against Weapon Attacks with Strength 6 or Greater"
            }
          },
          "opts": [
            {
              "label": "Mācuahuitl sword",
              "kind": "count",
              "c": 1,
              "w": [
                "Mācuahuitl"
              ]
            },
            {
              "label": "Chīmalli shields (whole unit)",
              "kind": "add",
              "shield": "Chīmalli",
              "c": 1
            }
          ],
          "chars": [
            {
              "one": [
                [
                  "Lead Captain",
                  5
                ],
                [
                  "Skirmish Captain",
                  8
                ]
              ]
            }
          ],
          "rules": [
            "Ambush",
            "Mixed Unit"
          ],
          "weapons": {
            "Atlatl": [
              "14”",
              "4",
              "5",
              "Throwing Weapon. On hit, increase the amount of Morale lost to Suppression from 1 to 2"
            ],
            "Mācuahuitl": [
              "4",
              "4",
              "3",
              "Melee Suppression, Cleaving Blade (3)"
            ]
          },
          "custom": {
            "Matched Armor": "Every model in the unit must have the same armor."
          }
        }
      ]
    }
  ],
  "labels": {
    "ŠUKUR": "bronze spear",
    "ŠUKUR.TUR": "bronze javelins",
    "ḪA.ZI.IN": "bronze battle-axe",
    "GIŠ.TUKUL": "wooden war club",
    "GÍR.GAL": "bronze sword",
    "GÍR.GAL.GUR": "curved sickle sword",
    "GÍR": "bronze dagger",
    "GIŠ.BAN": "composite bow",
    "KUŠ.DALUŠ": "sling",
    "TÚG.ŠIRʾAM": "long scale coat",
    "Aršti": "short spear",
    "Arštaya": "javelins",
    "Θanu": "composite bow",
    "Akīnakah": "short sword",
    "Akīnakah Kamna": "dagger",
    "Fradaxšanā": "sling",
    "Kamanda": "lasso",
    "Sagaris": "battle-axe",
    "Dāça": "scythe blades",
    "Spara": "wicker shield",
    "Dóry": "long spear",
    "Xíphos": "short sword",
    "Kopís": "curved chopping sword",
    "Lakōnikón Xíphos": "short Spartan sword",
    "Akóntion": "javelins",
    "Encheirídion": "dagger",
    "Tóxon": "bow",
    "Sphendónē": "sling",
    "Pīlum": "heavy javelin",
    "Lancea": "light javelins",
    "Hasta": "thrusting spear",
    "Gladius": "short sword",
    "Spatha": "long sword",
    "Pugiō": "dagger",
    "Clāva": "wooden mace",
    "Arcus": "composite bow",
    "Scorpiō Bolt": "bolt-thrower",
    "Carroballista Bolt": "cart-mounted bolt-thrower",
    "Mācuahuitl": "obsidian-edged sword",
    "Tepoztōpīlli": "obsidian-bladed spear",
    "Quauholōlli": "ball-headed club",
    "Atlatl": "dart-thrower",
    "Tecpatl": "flint dagger",
    "Tēmātlatl": "sling",
    "Tlahhuītōlli": "bow",
    "Ichcahuipilli": "quilted cotton armor",
    "Chīmalli": "round shield",
    "Phásganon": "bronze slashing sword",
    "Énchos": "spear",
    "Falcāta": "curved chopping sword",
    "Rhomphaía": "two-handed curved blade",
    "Sīca": "curved dagger",
    "Aġeġn": "longbow",
    "Nizak": "javelins",
    "Dašoyn": "dagger",
    "Parsatik": "sling",
    "Rìu Xéo": "bronze boot-shaped axe",
    "Dao Găm": "bronze dagger",
    "Funda Longa": "long sling",
    "Funda Media": "medium sling",
    "Funda Brevis": "short sling",
    "Pḏt": "long self bow",
    "Wḏȝt": "knife",
    "Contus": "heavy lance",
    "Θanvar": "composite bow",
    "Karəta": "dagger",
    "Iacula": "light javelins",
    "Culter": "knife",
    "Qaštā": "composite bow",
    "Rumḥā": "javelins",
    "Sakkīnā": "knife"
  },
  "mercs": {
    "id": "mercs",
    "name": "Supplemental Mercenaries",
    "units": [
      {
        "id": "greek-hoplites",
        "name": "Greek Hoplites",
        "type": "Warrior",
        "move": 6,
        "training": 5,
        "points": 15,
        "comps": [
          [
            4,
            5
          ],
          [
            3,
            5
          ]
        ],
        "equip": [
          "Dóry"
        ],
        "gear": [
          "Xíphos"
        ],
        "body": "Light Armor",
        "shield": "Heavy Shield",
        "opts": [],
        "chars": [
          {
            "one": [
              [
                "Lead Captain",
                5
              ],
              [
                "Musician",
                5
              ]
            ]
          }
        ],
        "rules": [
          "Phalanx",
          "Mercenary"
        ],
        "weapons": {
          "Dóry": [
            "10",
            "5",
            "6",
            "Reach (1), Unwieldy (1)"
          ],
          "Xíphos": [
            "3",
            "5",
            "6",
            "Parrying Blade"
          ]
        }
      },
      {
        "id": "iberian-shock-troops",
        "name": "Iberian Shock Troops",
        "type": "Warrior",
        "move": 6,
        "training": 6,
        "points": 13,
        "comps": [
          [
            4,
            4
          ],
          [
            3,
            4
          ]
        ],
        "equip": [
          "Falcāta"
        ],
        "gear": [
          "Pugiō"
        ],
        "body": "Light Armor",
        "shield": "Heavy Shield",
        "opts": [],
        "chars": [
          {
            "one": [
              [
                "Lead Captain",
                5
              ]
            ]
          },
          {
            "one": [
              [
                "Musician",
                5
              ],
              [
                "Standard Bearer",
                8
              ]
            ]
          }
        ],
        "rules": [
          "Mercenary"
        ],
        "weapons": {
          "Falcāta": [
            "4",
            "4",
            "5",
            "Cleaving Blade (3)"
          ],
          "Pugiō": [
            "1",
            "6",
            "5",
            ""
          ]
        }
      },
      {
        "id": "ptolemaic-guards",
        "name": "Ptolemaic Guards",
        "type": "Warrior",
        "move": 6,
        "training": 6,
        "points": 15,
        "comps": [
          [
            3,
            4
          ],
          [
            2,
            5
          ]
        ],
        "equip": [
          "Akóntion"
        ],
        "gear": [
          "Encheirídion"
        ],
        "body": "Light Armor",
        "shield": "Heavy Shield",
        "opts": [],
        "chars": [
          {
            "one": [
              [
                "Lead Captain",
                6
              ]
            ]
          },
          {
            "one": [
              [
                "Lord",
                15
              ]
            ]
          }
        ],
        "rules": [
          "Guard",
          "Mercenary"
        ],
        "weapons": {
          "Akóntion": [
            "6 / 8”",
            "5",
            "6",
            "Throwing Weapon"
          ],
          "Encheirídion": [
            "1",
            "7",
            "5",
            ""
          ]
        }
      },
      {
        "id": "lydian-houndsmen",
        "name": "Lydian Houndsmen",
        "type": "Warrior",
        "move": 6,
        "training": 5,
        "points": 16,
        "comps": [
          [
            3,
            5
          ],
          [
            2,
            4
          ]
        ],
        "equip": [
          "Dóry",
          "Hound"
        ],
        "gear": [
          "Kopís"
        ],
        "body": "Light Armor",
        "shield": "Shield",
        "opts": [],
        "chars": [
          {
            "one": [
              [
                "Houndmaster",
                10
              ]
            ],
            "req": true
          },
          {
            "one": [
              [
                "Lead Captain",
                5
              ]
            ]
          }
        ],
        "rules": [
          "Mercenary",
          "Disciplined"
        ],
        "custom": {
          "Dogs of War": "While this unit has a Hold action token, enemy units locked in combat with it suffer a -1 Accuracy penalty for Melee attacks. Additionally, the enemy morale lost due to Houndmaster is now doubled when charging."
        },
        "weapons": {
          "Dóry": [
            "10",
            "5",
            "6",
            "Reach (1), Unwieldy (1)"
          ],
          "Hound": [
            "2",
            "3",
            "4",
            "1 attack per Warrior in 1st rank. Only while this unit has a Hold action token"
          ],
          "Kopís": [
            "4",
            "4",
            "5",
            "Cleaving Blade (3)"
          ]
        }
      },
      {
        "id": "sea-people-raiders",
        "name": "Sea People Raiders",
        "type": "Light Warrior",
        "move": 7,
        "training": 4,
        "points": 13,
        "comps": [
          [
            4,
            5
          ],
          [
            3,
            4
          ]
        ],
        "equip": [
          "Phásganon"
        ],
        "gear": [],
        "body": null,
        "shield": "Shield",
        "opts": [
          {
            "label": "Weapon",
            "kind": "swap",
            "choices": [
              {
                "name": "Phásganon sword",
                "c": 0,
                "w": [
                  "Phásganon"
                ]
              },
              {
                "name": "Énchos spear",
                "w": [
                  "Énchos"
                ],
                "c": 0,
                "gear": []
              }
            ]
          }
        ],
        "chars": [
          {
            "one": [
              [
                "Lead Captain",
                5
              ]
            ]
          },
          {
            "one": [
              [
                "Tribal Leader",
                7
              ],
              [
                "Musician",
                5
              ]
            ]
          }
        ],
        "rules": [
          "Ambush",
          "Surefooted (Marsh, Sand)",
          "Mercenary"
        ],
        "weapons": {
          "Énchos": [
            "8",
            "5",
            "5",
            ""
          ],
          "Phásganon": [
            "5",
            "5",
            "6",
            "Parrying Blade"
          ]
        }
      },
      {
        "id": "thracian-warriors",
        "name": "Thracian Warriors",
        "type": "Light Warrior",
        "move": 7,
        "training": 5,
        "points": 12,
        "comps": [
          [
            3,
            4
          ],
          [
            2,
            4
          ]
        ],
        "equip": [
          "Rhomphaía"
        ],
        "gear": [
          "Sīca"
        ],
        "body": "Light Armor",
        "shield": null,
        "opts": [],
        "chars": [
          {
            "one": [
              [
                "Lead Captain",
                5
              ],
              [
                "Musician",
                5
              ]
            ]
          }
        ],
        "rules": [
          "Surefooted (Stony Plain)",
          "Mercenary"
        ],
        "weapons": {
          "Rhomphaía": [
            "6",
            "3",
            "8",
            "Sunder (2)"
          ],
          "Sīca": [
            "1",
            "6",
            "5",
            ""
          ]
        }
      },
      {
        "id": "carduchian-tribesmen",
        "name": "Carduchian Tribesmen",
        "type": "Light Warrior",
        "move": 7,
        "training": 4,
        "points": 13,
        "range": [
          8,
          14
        ],
        "equip": [
          "Aġeġn"
        ],
        "gear": [],
        "body": null,
        "shield": null,
        "opts": [
          {
            "label": "Weapon",
            "kind": "swap",
            "choices": [
              {
                "name": "Aġeġn bow",
                "w": [
                  "Aġeġn"
                ],
                "c": 0,
                "shield": null
              },
              {
                "name": "Nizak javelins, Dašoyn dagger and Shield",
                "w": [
                  "Nizak",
                  "Dašoyn"
                ],
                "c": 0,
                "shield": "Shield"
              },
              {
                "name": "Parsatik sling, Dašoyn dagger and Shield",
                "w": [
                  "Parsatik",
                  "Dašoyn"
                ],
                "c": 1,
                "shield": "Shield"
              }
            ]
          }
        ],
        "chars": [
          {
            "one": [
              [
                "Tribal Leader",
                6
              ],
              [
                "Volleymaster",
                10
              ]
            ]
          }
        ],
        "rules": [
          "Scout",
          "Surefooted (Stony Plain)",
          "Mercenary"
        ],
        "weapons": {
          "Aġeġn": [
            "28”",
            "5",
            "5",
            "Direct Fire, Unwieldy (1), Sunder (1)"
          ],
          "Nizak": [
            "6 / 8”",
            "5",
            "6",
            "Throwing Weapon"
          ],
          "Dašoyn": [
            "1",
            "6",
            "5",
            ""
          ],
          "Parsatik": [
            "28”",
            "5",
            "4",
            "Can only Shoot in Open Order"
          ]
        }
      },
      {
        "id": "dong-son-axemen",
        "name": "Đông Sơn Axemen",
        "type": "Skirmishing Warrior",
        "move": 6,
        "training": 4,
        "points": 10,
        "range": [
          14,
          20
        ],
        "equip": [
          "Rìu Xéo"
        ],
        "gear": [
          "Dao Găm"
        ],
        "body": null,
        "shield": null,
        "opts": [
          {
            "label": "Light Armor",
            "kind": "add",
            "body": "Light Armor",
            "c": 1
          }
        ],
        "chars": [
          {
            "one": [
              [
                "Musician",
                5
              ]
            ]
          },
          {
            "one": [
              [
                "Lead Captain",
                5
              ],
              [
                "Skirmish Captain",
                8
              ]
            ]
          }
        ],
        "rules": [
          "Surefooted (Marsh)",
          "Mercenary"
        ],
        "weapons": {
          "Rìu Xéo": [
            "3",
            "4",
            "5",
            "Cleaving Blade (4)"
          ],
          "Dao Găm": [
            "1",
            "6",
            "5",
            ""
          ]
        }
      },
      {
        "id": "balearic-slingers",
        "name": "Balearic Slingers",
        "type": "Skirmishing Warrior",
        "move": 7,
        "training": 5,
        "points": 12,
        "range": [
          5,
          10
        ],
        "equip": [
          "Funda Longa",
          "Funda Media",
          "Funda Brevis"
        ],
        "gear": [],
        "body": null,
        "shield": null,
        "opts": [],
        "chars": [
          {
            "one": [
              [
                "Tribal Leader",
                7
              ],
              [
                "Bowmaster",
                10
              ]
            ]
          }
        ],
        "rules": [
          "Mercenary"
        ],
        "weapons": {
          "Funda Longa": [
            "30”",
            "5",
            "4",
            ""
          ],
          "Funda Media": [
            "24”",
            "6",
            "4",
            ""
          ],
          "Funda Brevis": [
            "18”",
            "6",
            "5",
            ""
          ]
        }
      },
      {
        "id": "kushite-archers",
        "name": "Kushite Archers",
        "type": "Skirmishing Warrior",
        "move": 7,
        "training": 5,
        "points": 13,
        "range": [
          6,
          12
        ],
        "equip": [
          "Pḏt"
        ],
        "gear": [
          "Wḏȝt"
        ],
        "body": null,
        "shield": null,
        "opts": [],
        "chars": [
          {
            "one": [
              [
                "Bowmaster",
                10
              ]
            ]
          }
        ],
        "rules": [
          "Mercenary"
        ],
        "weapons": {
          "Pḏt": [
            "28”",
            "6",
            "4",
            "Direct Fire, Unwieldy (1)"
          ],
          "Wḏȝt": [
            "1",
            "6",
            "5",
            ""
          ]
        }
      },
      {
        "id": "cataphract",
        "name": "Cataphracts",
        "type": "Cavalry",
        "move": 10,
        "training": 6,
        "points": 28,
        "comps": [
          [
            2,
            4
          ],
          [
            2,
            3
          ]
        ],
        "equip": [
          "Contus"
        ],
        "gear": [
          "Spatha"
        ],
        "body": "Heavy Armor",
        "shield": null,
        "opts": [],
        "chars": [
          {
            "one": [
              [
                "Lead Captain",
                10
              ]
            ],
            "req": true
          },
          {
            "one": [
              [
                "Rear Captain",
                10
              ]
            ]
          }
        ],
        "rules": [
          "Feign Charge",
          "Terrify Warriors",
          "Mercenary"
        ],
        "weapons": {
          "Contus": [
            "11",
            "5",
            "6",
            "Reach (1), Unwieldy (2)"
          ],
          "Spatha": [
            "5",
            "6",
            "5",
            ""
          ]
        },
        "barding": "Barding"
      },
      {
        "id": "scythian-archers",
        "name": "Scythian Archers",
        "type": "Skirmishing Cavalry",
        "move": 14,
        "training": 5,
        "points": 22,
        "range": [
          4,
          7
        ],
        "equip": [
          "Θanvar"
        ],
        "gear": [
          "Karəta"
        ],
        "body": "Light Armor",
        "shield": null,
        "opts": [
          {
            "label": "Sidearm",
            "kind": "swap",
            "choices": [
              {
                "name": "Karəta dagger",
                "c": 0,
                "gear": [
                  "Karəta"
                ]
              },
              {
                "name": "Arštaya javelins (replace Karəta)",
                "w": [
                  "Θanvar",
                  "Arštaya"
                ],
                "c": 1,
                "gear": []
              }
            ]
          },
          {
            "label": "Shield",
            "kind": "add",
            "shield": "Shield",
            "c": 1
          }
        ],
        "chars": [
          {
            "one": [
              [
                "Tribal Leader",
                12
              ],
              [
                "Standard Bearer",
                6
              ]
            ]
          }
        ],
        "rules": [
          "Feign Retreat",
          "Scout",
          "Parthian Shot",
          "Mercenary"
        ],
        "weapons": {
          "Θanvar": [
            "24”",
            "7",
            "4",
            "Recurve Bow, Direct Fire"
          ],
          "Arštaya": [
            "6 / 8”",
            "6",
            "6",
            "Throwing Weapon"
          ],
          "Karəta": [
            "1",
            "6",
            "5",
            ""
          ]
        }
      },
      {
        "id": "numidian-javelineers",
        "name": "Numidian Javelineers",
        "type": "Skirmishing Cavalry",
        "move": 14,
        "training": 5,
        "points": 21,
        "range": [
          5,
          8
        ],
        "equip": [
          "Iacula"
        ],
        "gear": [
          "Culter"
        ],
        "body": null,
        "shield": "Shield",
        "opts": [
          {
            "label": "Light Armor",
            "kind": "add",
            "body": "Light Armor",
            "c": 2
          }
        ],
        "chars": [
          {
            "one": [
              [
                "Lead Captain",
                10
              ],
              [
                "Standard Bearer",
                6
              ]
            ]
          }
        ],
        "rules": [
          "Feign Retreat",
          "Ambush",
          "Mercenary"
        ],
        "weapons": {
          "Iacula": [
            "6 / 8”",
            "7",
            "6",
            "Throwing Weapon"
          ],
          "Culter": [
            "1",
            "6",
            "5",
            ""
          ]
        }
      },
      {
        "id": "nabatean-skirmishers",
        "name": "Arabian Camel Riders",
        "type": "Skirmishing Cavalry",
        "move": 8,
        "training": 5,
        "points": 18,
        "range": [
          2,
          5
        ],
        "equip": [
          "Qaštā"
        ],
        "gear": [
          "Sakkīnā"
        ],
        "body": null,
        "shield": null,
        "opts": [
          {
            "label": "Weapon",
            "kind": "swap",
            "choices": [
              {
                "name": "Qaštā bow",
                "w": [
                  "Qaštā"
                ],
                "c": 0
              },
              {
                "name": "Rumḥā javelins",
                "w": [
                  "Rumḥā"
                ],
                "c": 0
              }
            ]
          },
          {
            "label": "1 additional Rider per Camel",
            "kind": "add",
            "c": 6,
            "crewPlus": 1
          }
        ],
        "chars": [
          {
            "one": [
              [
                "Lord",
                12
              ]
            ]
          }
        ],
        "rules": [
          "Terrify Cavalry",
          "Terrify Chariots",
          "Scout",
          "Surefooted (Sand)",
          "Mercenary",
          "Camel Riders"
        ],
        "weapons": {
          "Qaštā": [
            "24”",
            "6",
            "4",
            "1 Attack per Rider, plus 1 if unit has Hold Token. Direct Fire. No movement penalty"
          ],
          "Rumḥā": [
            "6 / 8”",
            "5",
            "6",
            "1 Attack per Rider, plus 1. Throwing Weapon"
          ],
          "Sakkīnā": [
            "0",
            "6",
            "5",
            "1 Attack per Rider, plus 1"
          ]
        }
      }
    ]
  },
  "commands": [
    {
      "id": "supplemental-mercenaries",
      "name": "Supplemental Mercenaries",
      "short": "1 mercenary unit per copy",
      "limit": 3,
      "mercs": 1,
      "text": "Your army may include 1 unit from the Supplemental Mercenaries list for each copy of this card in your deck.",
      "note": "If you take a mercenary unit, this card must be one of the 3 cards in your hand.",
      "flavor": "Gold buys soldiers when loyalty runs short."
    },
    {
      "id": "monument",
      "name": "Monument",
      "short": "Obstacle: +2 to Break Tests nearby",
      "limit": 3,
      "text": "Obstacle. Before deployment, place a 2” × 2” Monument in the neutral zone, outside every deployment zone. It is impassable and blocks all line of sight that passes over it. Friendly units within 6” of it gain +2 to Break tests.",
      "flavor": "Beneath the gaze of their ancestors, no warrior wants to be the first to run."
    },
    {
      "id": "watchtower",
      "name": "Watchtower",
      "short": "Obstacle: keeps enemy deployment away",
      "limit": 3,
      "text": "Obstacle, Flammable. Before deployment, place a 3” × 3” Watchtower in your deployment zone. It is impassable but does not block line of sight. While a Skirmishing Warrior unit is in base contact with it, and no other unit is in base contact with that unit or the Watchtower, no enemy unit may deploy within 18” of the Watchtower. Any player may use this effect.",
      "flavor": "From the tower, no ambush goes unseen."
    },
    {
      "id": "dense-brush",
      "name": "Dense Brush",
      "short": "Obstacle: blocks movement and sight",
      "limit": 3,
      "text": "Obstacle, Flammable. Before deployment, place a 6” × 6” patch of Dense Brush in the neutral zone, outside every deployment zone. It is impassable and blocks all line of sight that passes over it.",
      "flavor": "Thorn and thicket swallow whole companies from view."
    },
    {
      "id": "rolling-wagons",
      "name": "Rolling Wagons",
      "short": "Obstacle: wagons crash into the enemy line",
      "limit": 1,
      "text": "Obstacle, Flammable. Before deployment, place 3 wagon markers (40 × 60mm) in your deployment zone, facing the enemy board edge. Once per game, at the start of any Activation Phase, release them: each wagon moves directly forward up to 18” until it touches a unit or impassable terrain. If it touches an enemy unit, that unit takes a Fear Test and gains a Break Token, then the wagon makes 2 attacks at Accuracy 9, Strength 7 against it (Accuracy 5 if the unit passed the test). The wagon is then removed. A wagon that touches a friendly unit or impassable terrain, or travels 18”, is removed without effect. Wagons are not units: they cannot be targeted or charged, do not generate or lose Army Morale, and take no Order Tokens.",
      "flavor": "The tribesmen massed their carts at the head of the pass, ready to send them crashing into the climbing phalanx."
    },
    {
      "id": "fire-brands",
      "name": "Fire Brands",
      "short": "Set fire to chariots, war engines or Flammable Obstacles",
      "limit": 1,
      "text": "Play during the Combat Phase, before any Melee is resolved. Choose one friendly unit. If it is in base contact with an enemy Chariot or Warmachine unit, that unit suffers 1 Hit at Strength 6 per model of the friendly unit in base contact with it, ignoring Armor from Shields, and gains 2 Break Tokens. These Hits replace the friendly unit’s melee attacks for this Combat Phase. If it is in base contact with a Flammable Obstacle, the Obstacle burns: it is impassable and blocks all line of sight until the end of the next round, then is removed. A wagon from Rolling Wagons that has not been released, or an abandoned war engine, is simply removed.",
      "flavor": "Pitch, tow and torches, and a stout arm to throw them."
    },
    {
      "id": "caltrops",
      "name": "Caltrops",
      "short": "Scatter iron spikes in front of a holding unit",
      "limit": 1,
      "text": "Play during the activation of a friendly Closed Order unit with a Hold Token. Place a strip of caltrops 1” deep along that unit’s front edge, as wide as its tray. A Cavalry, Chariot or Elephant unit that moves into the strip, including during a Charge, loses the +1 Strength from its Charge Action Token that round, and each of its models in contact with the strip suffers 1 Hit at Strength 4. Other units treat the strip as Difficult Terrain. The caltrops stay for the rest of the game.",
      "flavor": "Four iron points, and however it falls, one stands upright."
    },
    {
      "id": "bribed-mercenaries",
      "name": "Bribed Mercenaries",
      "short": "An enemy Mercenary unit sits out the round",
      "limit": 1,
      "text": "Play at the start of the Activation Phase. Choose an enemy unit with the Mercenary special rule. Until the end of the round, it cannot move, shoot, or Rally, and it makes no melee attacks. You lose Army Morale equal to 10% of your Starting Army Morale, rounded up.",
      "flavor": "They were paid to fight. Now they are paid to watch."
    },
    {
      "id": "disengage",
      "name": "Disengage",
      "short": "A unit in combat pulls back and fights on elsewhere",
      "limit": 1,
      "text": "Play at the start of the activation of a friendly Closed Order unit that is Locked in Combat. It moves directly backwards up to 2”, without moving into base contact with any enemy unit, and is no longer Locked in Combat. It then continues its activation as normal, but may not Charge this round.",
      "flavor": "Step back together. Shields up. Not one man turns his back."
    },
    {
      "id": "crumbled-ruins",
      "name": "Crumbled Ruins",
      "short": "Terrain: a patch of Stony Plain",
      "limit": 3,
      "text": "Before deployment, place 8” × 8” Crumbled Ruins in the neutral zone, outside every deployment zone. They follow the rules for a Stony Plain.",
      "flavor": "The bones of an older city trip the living."
    },
    {
      "id": "flooded-field",
      "name": "Flooded Field",
      "short": "Terrain: a patch of Marsh",
      "limit": 3,
      "text": "Before deployment, place a 6” × 6” Flooded Field in the neutral zone, outside every deployment zone. It follows the rules for a Marsh.",
      "flavor": "Broken dikes turn the farmland into a mire."
    },
    {
      "id": "sappers",
      "name": "Sappers",
      "short": "Cancel an enemy Obstacle card",
      "limit": 3,
      "text": "Play when an opponent plays an Obstacle Command card. Lose Army Morale equal to 10% of your Starting Army Morale, rounded up. That card is cancelled and its Obstacle is not placed.",
      "flavor": "Before the wall is raised, the diggers have already undone it."
    },
    {
      "id": "feigned-flight",
      "name": "Feigned Flight",
      "short": "2 Light Cavalry gain Feign Retreat",
      "limit": 3,
      "text": "Until the end of the round, up to two Light Cavalry units that have Feign Charge also gain Feign Retreat.",
      "flavor": "The horsemen wheel away as if beaten, and the foolish give chase."
    },
    {
      "id": "bodyguard",
      "name": "Bodyguard",
      "short": "A Training 7+ foot unit gains Guard",
      "limit": 3,
      "text": "Until the end of the round, one Warrior, Light Warrior or Skirmishing Warrior unit with base Training 7 or higher, and without Retinue in its name, gains the Guard special rule.",
      "flavor": "The best men stand closest to their general, ready to step in front of any blow."
    },
    {
      "id": "mass-volley",
      "name": "Mass Volley",
      "short": "A ranged unit gains Volley",
      "limit": 3,
      "text": "Until the end of the round, one unit with a ranged weapon gains the Volley special rule.",
      "flavor": "Every bow on the line looses at once, and the sky goes dark."
    },
    {
      "id": "hold-the-line",
      "name": "Hold the Line",
      "short": "Closed Order units gain Disciplined",
      "limit": 3,
      "text": "Until the end of the round, all of your Closed Order units gain the Disciplined special rule.",
      "flavor": "Not one step back."
    },
    {
      "id": "local-guides",
      "name": "Local Guides",
      "short": "2 foot units gain Surefooted",
      "limit": 3,
      "text": "Until the end of the round, up to two Warrior, Light Warrior or Skirmishing Warrior units gain the Surefooted special rule.",
      "flavor": "A shepherd who knows every goat track is worth a hundred spears."
    },
    {
      "id": "hidden-ravine",
      "name": "Hidden Ravine",
      "short": "A light foot unit gains Ambush",
      "limit": 3,
      "text": "Play during deployment. One Light Warrior or Skirmishing Warrior unit gains the Ambush special rule.",
      "flavor": "The ground falls away where no one expects it, and men are waiting there."
    },
    {
      "id": "last-stand",
      "name": "Last Stand",
      "short": "All your units gain Suicidal",
      "limit": 3,
      "text": "Until the end of the round, all of your units gain the Suicidal special rule.",
      "flavor": "There is no line of retreat. Every man knows it."
    },
    {
      "id": "vanguard",
      "name": "Vanguard",
      "short": "A light unit gains Scout",
      "limit": 3,
      "text": "Play during deployment. One Light Warrior, Skirmishing Warrior, Light Cavalry or Skirmishing Cavalry unit gains the Scout special rule.",
      "flavor": "Sent ahead at dawn, they hold the ground before the army arrives."
    },
    {
      "id": "the-eclipse",
      "name": "The Eclipse",
      "short": "Flip all Initiative bonuses into penalties",
      "limit": 1,
      "text": "Play at the end of the Orders Phase. This round, every bonus to Initiative, including bonuses from cards played after this one, becomes a penalty of the same size. Penalties are unaffected.",
      "flavor": "The sun went dark at midday, and both armies lowered their weapons in fear."
    },
    {
      "id": "rally-to-the-standard",
      "name": "Rally to the Standard",
      "short": "Army Standard Bearer: easier Rallying nearby",
      "limit": 1,
      "text": "Requires your Army Standard Bearer's unit to be on the battlefield and not Fleeing. This round, your units within 12” of it gain +2 to Rally tests, and Mercenary and Levy units within 12” of it may be Rallied by any of your units.",
      "flavor": "Where the banner stands, the army stands."
    },
    {
      "id": "follow-the-eagle",
      "name": "Follow the Eagle",
      "short": "Ongoing, Army Standard Bearer: better Charges nearby",
      "limit": 1,
      "text": "Ongoing. Requires your Army Standard Bearer's unit to be on the battlefield and not Fleeing. Your units within 12” of it that declare a Charge gain +1 Move, and lose no Army Morale if the Charge fails. Discard this card at the end of the round in which one of your units declares a Charge.",
      "flavor": "“Leap down, soldiers, unless you wish to betray the eagle to the enemy!”"
    },
    {
      "id": "sound-the-advance",
      "name": "Sound the Advance",
      "short": "Ongoing, Army Musician: +1 Move nearby",
      "limit": 1,
      "text": "Ongoing. Requires your Army Musician's unit to be on the battlefield and not Fleeing. Your units within 18” of it gain +1 Move. Discard this card as soon as one of your units is charged.",
      "flavor": "Horns and drums carry the line forward step by step."
    },
    {
      "id": "sound-the-recall",
      "name": "Sound the Recall",
      "short": "Army Musician: Withdraw from lost Melees",
      "limit": 1,
      "text": "Requires your Army Musician's unit to be on the battlefield and not Fleeing. During this round's Resolution Step, your units within 30” of it may Withdraw from combat even if they lost the Melee.",
      "flavor": "At the signal, the line steps back as one, and the enemy is left holding empty ground."
    },
    {
      "id": "din-of-battle",
      "name": "Din of Battle",
      "short": "Ongoing, Army Musician: blocks enemy Special Moves",
      "limit": 1,
      "text": "Ongoing. Requires your Army Musician's unit to be on the battlefield and not Fleeing. Enemy Commander and Musician Special Moves cannot be made by units within 12” of your Army Musician's unit. Discard this card when your Army Musician's unit becomes Locked in Combat.",
      "flavor": "No order can be heard over the roar of the horns."
    },
    {
      "id": "change-of-orders",
      "name": "Change of Orders",
      "short": "Commander: swap two Order Tokens",
      "limit": 1,
      "text": "Requires your Commander's unit to be on the battlefield and not Fleeing. Play at the end of the Orders Phase. Swap the Order Tokens of two of your units within 12” of your Commander's unit.",
      "flavor": "A rider gallops down the line with new instructions."
    },
    {
      "id": "lead-from-the-front",
      "name": "Lead from the Front",
      "short": "Commander: its unit fights harder",
      "limit": 1,
      "text": "Requires your Commander's unit to be on the battlefield and not Fleeing. This round, your Commander's unit gains +1 Strength with melee weapons and Terrify All. If that unit loses a Melee this round, you lose Army Morale equal to twice the Commander's base Training.",
      "flavor": "When the general draws his sword and wades in, no one wants to stand against him."
    },
    {
      "id": "the-colors-must-not-fall",
      "name": "The Colors Must Not Fall",
      "short": "Chosen banner units shrug off Break and Flee",
      "limit": 1,
      "text": "Play at the start of the Morale Phase. Choose any number of your units with a Standard Bearer or Army Standard Bearer. Each chosen unit removes all of its Break and Flee Tokens, then suffers 1 Damage. This Damage has no save and causes Army Morale loss as normal.",
      "flavor": "Men who would have run turn back to die beside their banner."
    },
    {
      "id": "spy",
      "name": "Spy",
      "short": "See 2 of their unpicked cards",
      "limit": 1,
      "text": "Play before deployment. Your opponent reveals 2 of the Command cards they did not pick, at random.",
      "flavor": "A merchant from the enemy camp sells more than wine."
    },
    {
      "id": "blot-out-the-sun",
      "name": "Blot Out the Sun",
      "short": "+1 Suppression on long-range volleys",
      "armies": [
        "persia"
      ],
      "limit": 1,
      "text": "Until the end of the round, ranged attacks made with Volley fire, or against targets beyond half the weapon's maximum range, add +1 to Suppression.",
      "flavor": "So many arrows fly that the sky darkens over the enemy line."
    },
    {
      "id": "all-of-mankind",
      "name": "All of Mankind",
      "short": "+1 Initiative per Mercenary unit",
      "armies": [
        "persia"
      ],
      "limit": 1,
      "text": "This round, add +1 to your Initiative roll for each unit with the Mercenary rule in your army, including Pīrū.",
      "flavor": "Every nation under heaven marches beneath the Great King's banner."
    },
    {
      "id": "scythicon-poison",
      "name": "Scythicon Poison",
      "short": "Scythian arrows drain Army Morale",
      "armies": [
        "persia"
      ],
      "limit": 1,
      "text": "Until the end of the round, Sakā and Scythian Archers attack at -1 Strength. Their base Suppression is equal to the target's Training value instead of 1.",
      "flavor": "Steppe archers dip their arrows in rot and venom, so even a scratch spreads terror."
    },
    {
      "id": "prepared-ground",
      "name": "Prepared Ground",
      "short": "Terrain: cancels the Major Terrain",
      "armies": [
        "persia"
      ],
      "limit": 1,
      "text": "Before deployment, place a 12” × 12” area of Prepared Ground anywhere on the battlefield. It may overlap the Major Terrain. Within it, the Major Terrain has no effect.",
      "flavor": "Darius's laborers scrape the plain flat for the scythed chariots."
    },
    {
      "id": "persian-mercenaries",
      "name": "King of Kings",
      "short": "2 mercenaries from the Persian list",
      "armies": [
        "persia"
      ],
      "limit": 1,
      "mercs": 2,
      "mercUnits": [
        "nabatean-skirmishers",
        "greek-hoplites",
        "scythian-archers",
        "kushite-archers"
      ],
      "text": "Your army may include 2 units from the Supplemental Mercenaries list, chosen from Arabian Camel Riders, Greek Hoplites, Scythian Archers and Kushite Archers.",
      "note": "If you take a mercenary unit through this card, this card must be one of the 3 cards in your hand.",
      "flavor": "Conquered kings send their warriors to serve the throne."
    },
    {
      "id": "chariots-of-the-storm-god",
      "name": "Chariots of the Storm God",
      "short": "All Chariots gain +1 Accuracy",
      "armies": [
        "hittite"
      ],
      "limit": 1,
      "text": "Until the end of the round, all Chariot units gain +1 Accuracy.",
      "flavor": "Like the Storm God's bulls, the chariots thunder across the field."
    },
    {
      "id": "kadesh-ambush",
      "name": "Kadesh Ambush",
      "short": "A Chariot unit gains Scout",
      "armies": [
        "hittite"
      ],
      "limit": 1,
      "text": "Play during deployment. One Chariot unit gains the Scout special rule. You lose Army Morale equal to half the Army Morale that unit adds to your Starting Army Morale, rounded up.",
      "flavor": "Hidden behind the city, the chariots fall upon the enemy's flank."
    },
    {
      "id": "crossing-the-orontes",
      "name": "Crossing the Orontes",
      "short": "Treat Marsh as Difficult Terrain",
      "armies": [
        "hittite"
      ],
      "limit": 1,
      "text": "Until the end of the round, units in your army without the Mercenary rule treat Marsh terrain, and terrain that follows the Marsh rules, as Difficult Terrain only.",
      "flavor": "The river runs low in summer, and the chariots know the ford."
    },
    {
      "id": "thousand-gods-of-hatti",
      "name": "The Thousand Gods of Hatti",
      "short": "Buffs units near a Royal Retinue",
      "armies": [
        "hittite"
      ],
      "limit": 1,
      "text": "Until the end of the round, units within 18” of a Royal Retinue gain the following, based on their name. Allied units: +1 Move and Aim. Levy units: automatically pass their next Break test. Hattian units: +1 Strength with melee weapons, and Frenzy.",
      "flavor": "Sworn before the gods of Hatti, vassal and native fight as one."
    },
    {
      "id": "triplex-acies",
      "name": "Triplex Aciēs",
      "short": "Heal a unit and remove Break Tokens",
      "armies": [
        "rome"
      ],
      "limit": 1,
      "text": "Play on a Closed Order unit, even one Locked in Combat. It recovers Health equal to a third of its starting Health (rounded down) and removes 2 Break Tokens. Removed models do not return, and no Army Morale is restored.",
      "flavor": "Fresh men step forward as the weary front rank falls back."
    },
    {
      "id": "impetus",
      "name": "Impetus",
      "short": "Stronger Iacite Pīla throws",
      "armies": [
        "rome"
      ],
      "limit": 1,
      "text": "Until the end of the round, units using Iacite Pīla ignore its -2 penalty to hit and add +1 to Suppression.",
      "flavor": "A storm of pila breaks the enemy's shields before the swords go in."
    },
    {
      "id": "fulcum",
      "name": "Fulcum",
      "short": "Testūdō units gain Phalanx",
      "armies": [
        "rome"
      ],
      "limit": 1,
      "text": "Until the end of the round, all units with Testūdō are treated as having the Phalanx special rule. They may also use their Pīlum in Melee as described in Testūdō (Length 6, -1 Strength, no Sunder), even if they did not take the Hold action.",
      "flavor": "Shields locked edge to edge, the cohort becomes a wall."
    },
    {
      "id": "fossa",
      "name": "Fossa",
      "short": "Obstacle: a trench to guard a flank",
      "armies": [
        "rome"
      ],
      "limit": 1,
      "text": "Obstacle. Before deployment, place a trench up to 12” long and 1” wide that starts in your deployment zone. Cavalry, Chariots, Elephants and Warmachines cannot cross it. Other units crossing it lose the +1 Strength from their Charge Action Token that round.",
      "flavor": "Caesar's spades guard the flanks better than any cohort."
    },
    {
      "id": "lilia",
      "name": "Līlia",
      "short": "Obstacle: pit traps for mounted units",
      "armies": [
        "rome"
      ],
      "limit": 1,
      "text": "Obstacle. Before deployment, place two 3” × 3” Līlia markers anywhere within 6” of your deployment zone. A Cavalry, Chariot or Elephant unit that moves into one suffers 1 hit at Strength 5 per model and gains a Break Token. Warrior units treat it as Difficult Terrain.",
      "flavor": "The 'lilies' bloom with sharpened stakes."
    },
    {
      "id": "numeri",
      "name": "Numerī",
      "short": "2 mercenaries from the Roman list",
      "armies": [
        "rome"
      ],
      "limit": 1,
      "mercs": 2,
      "mercUnits": [
        "cataphract",
        "numidian-javelineers",
        "nabatean-skirmishers",
        "thracian-warriors"
      ],
      "text": "Your army may include 2 units from the Supplemental Mercenaries list, chosen from Cataphracts, Numidian Javelineers, Arabian Camel Riders and Thracian Warriors.",
      "note": "If you take a mercenary unit through this card, this card must be one of the 3 cards in your hand.",
      "flavor": "Bands from the frontiers fight for Rome's pay and favor."
    },
    {
      "id": "flower-war",
      "name": "Flower War",
      "short": "Regain Army Morale for kills",
      "armies": [
        "aztec"
      ],
      "limit": 1,
      "text": "Regain 2 Army Morale for each model that every enemy unit destroyed so far started the game with. You can't regain more than 25% of your Starting Army Morale.",
      "flavor": "Every captive taken rekindles the warriors' fervor."
    },
    {
      "id": "blood-for-huitzilopochtli",
      "name": "Blood for Huītzilōpōchtli",
      "short": "Frenzy for units near Shamans",
      "armies": [
        "aztec"
      ],
      "limit": 1,
      "text": "Until the end of the round, units within 8” of a Shaman gain Frenzy, and each unit with a Shaman gains +1 Strength with melee weapons.",
      "flavor": "Priests drive the warriors on, promising hearts for the war god."
    },
    {
      "id": "death-whistle",
      "name": "Death Whistle",
      "short": "Fear Test that strips Hold tokens",
      "armies": [
        "aztec"
      ],
      "limit": 1,
      "text": "Enemy units within 24” of a unit with a Shaman or Army Musician take a Fear Test at -1. Units that fail lose their Hold Action Token.",
      "flavor": "A shriek like the cry of the dead rises from the Aztec ranks."
    },
    {
      "id": "chinampas",
      "name": "Chinampas",
      "short": "Terrain: Marsh the Aztecs ignore",
      "armies": [
        "aztec"
      ],
      "limit": 1,
      "text": "Before deployment, place a 6” × 6” area of Chinampas in the neutral zone, outside every deployment zone. It follows the rules for a Marsh, but units in your army without the Mercenary rule ignore its effects.",
      "flavor": "Canals and floating gardens swallow the invader; the Mexica know every path."
    },
    {
      "id": "the-hot-gates",
      "name": "The Hot Gates",
      "short": "A foot unit gains Feign Retreat",
      "armies": [
        "greek"
      ],
      "limit": 1,
      "text": "Until the end of the round, one Warrior, Light Warrior or Skirmishing Warrior unit gains Feign Retreat and +1 Move. If it has Phalanx, it gains +2 Move instead.",
      "flavor": "The Spartans turn as if to flee, then fall upon the Persians who follow."
    },
    {
      "id": "othismos",
      "name": "Othismos",
      "short": "Charging Phalanxes count as Holding",
      "armies": [
        "greek"
      ],
      "limit": 1,
      "text": "Until the end of the round, Phalanx units with a Charge Action Token also count as having a Hold Action Token.",
      "flavor": "Shield presses on shield as the phalanx drives forward."
    },
    {
      "id": "in-the-shade",
      "name": "In the Shade",
      "short": "Ongoing: Phalanx units resist Suppression",
      "armies": [
        "greek"
      ],
      "limit": 1,
      "text": "Ongoing. Phalanx units you control subtract 1 from Suppression. Discard this card when a Phalanx unit you control fails a Break test or is destroyed. Covers every unit with the Phalanx rule, even while it is negated.",
      "flavor": "Let their arrows hide the sun; we will fight in the shade."
    },
    {
      "id": "phocian-wall",
      "name": "Phocian Wall",
      "short": "Obstacle: a wall that shelters from shooting",
      "armies": [
        "greek"
      ],
      "limit": 1,
      "text": "Obstacle. Before deployment, place a wall up to 8” long and ½” wide in your deployment zone. No unit may move across it. Shooting attacks that pass over it treat the target as one cover level better.",
      "flavor": "Behind the old wall of the Phocians, three hundred hold the pass."
    }
  ]
};
