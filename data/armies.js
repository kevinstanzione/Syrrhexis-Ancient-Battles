// Syrrhēxis army data. Edit the values below; keep the first line as is.
window.NHB_DATA = {
  "meta": {
    "version": "0.5.0",
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
                  10
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
                  "Tribal Leader",
                  6
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
                  "Raider Captain",
                  8
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
                  "Tribal Leader",
                  6
                ],
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
          "points": 75,
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
              "7",
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
          "points": 50,
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
              "7",
              "2 Attacks, can only use on Charge"
            ],
            "GÍR": [
              "0",
              "5",
              "5",
              "1 Attack. Cannot be used on Charge. Note: Reduced accuracy"
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
          "name": "Sparabāra",
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
                  10
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
          "name": "Anušiya",
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
            "Stubborn"
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
          "name": "Anušiya Retinue",
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
            "Stubborn"
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
          "name": "Takabāra",
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
                  10
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
          "name": "Asabāra",
          "type": "Cavalry",
          "move": 10,
          "training": 7,
          "points": 20,
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
          "body": null,
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
              "label": "Light Armor",
              "kind": "add",
              "body": "Light Armor",
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
          "name": "Asabāra Retinue",
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
              3
            ],
            [
              1,
              4
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
                  "Raider Captain",
                  12
                ],
                [
                  "Tribal Leader",
                  12
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
              "Throwing Weapon. On hit, increase the amount of Morale lost to Suppression from 1 to the enemy’s Training value, then make a bonus attack with a melee weapon (even if not in base contact) at -1 Accuracy."
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
              1,
              4
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
                  12
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
          "name": "Raθa",
          "type": "Chariot",
          "move": 10,
          "training": 6,
          "points": 50,
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
              "7",
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
          "name": "Raθa-Dāça",
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
              "6",
              "2 Attacks, can only be used on Charge. Before rolling to hit, each enemy unit in the Melee takes a Fear Test; against units that pass, this weapon has Accuracy 5. Destroy model after resolving Wounds."
            ],
            "Horses": [
              "3",
              "5",
              "7",
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
          "name": "Raθa Retinue",
          "type": "Chariot",
          "move": 10,
          "training": 8,
          "points": 90,
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
              "7",
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
              "Reach (1). Unwieldy (1)"
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
            "Stubborn"
          ],
          "custom": {
            "Sacred Band": "While this unit is at Half Strength, it gains Frenzy and Suicidal."
          },
          "weapons": {
            "Dóry": [
              "10",
              "6",
              "6",
              "Reach (1). Unwieldy (1)"
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
            "Stubborn"
          ],
          "weapons": {
            "Dóry": [
              "10",
              "6",
              "6",
              "Reach (1). Unwieldy (1)"
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
                  "Raider Captain",
                  8
                ]
              ]
            }
          ],
          "rules": [
            "Scout"
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
                  "Raider Captain",
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
            "Stubborn"
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
          "name": "Lēgiōnārius",
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
              "Throwing Weapon. Sunder (2)"
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
          "name": "Veterānus",
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
              "Throwing Weapon. Sunder (2)"
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
          "name": "Lēgiōnārius Retinue",
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
                  10
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
              "Throwing Weapon. Sunder (2)"
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
                  10
                ]
              ]
            }
          ],
          "rules": [],
          "custom": {
            "Testūdō": "When this unit takes the Hold action, it may move half its move and Shooting attacks against it suffer a -2 penalty to hit. It may also use its Pīlum in Melee: Length 6, -1 Strength, and loses Sunder (2).",
            "Iacite Pīla": "When this unit takes the Charge action, it may first make a Shooting attack against the unit it intends to charge at a -2 penalty to hit.",
            "Fidēlitās": "While this unit has its Commander, it gains Stubborn. Once per game, its controlling player may suffer 1 wound with no save and remove the Commander to recover 1 used Command Card."
          },
          "weapons": {
            "Pīlum": [
              "6”",
              "6",
              "6",
              "Throwing Weapon. Sunder (2)"
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
          "name": "Sagittārius",
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
          "name": "Explōrātor",
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
                  "Raider Captain",
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
              "1 Attack. Direct Fire, Piercing Shot (1), Massive Suppression (5)"
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
              "1 Attack. Direct Fire, Piercing Shot (1), Massive Suppression (3)"
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
          "name": "Yāōnāmicqui",
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
              "Melee Suppression. Cleaving Blade (3)"
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
          "name": "Cuāuhocēlōtl",
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
              "Melee Suppression. Cleaving Blade (3)"
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
          "name": "Cuāuhocēlōtl Retinue",
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
              "Melee Suppression. Cleaving Blade (3)"
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
          "name": "Cuāchic",
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
            "Stubborn",
            "Mixed Unit"
          ],
          "weapons": {
            "Mācuahuitl": [
              "4",
              "6",
              "3",
              "Melee Suppression. Cleaving Blade (3)"
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
          "name": "Yāōminqui",
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
          "name": "Yāōmotlatqui",
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
                  "Raider Captain",
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
              "Melee Suppression. Cleaving Blade (3)"
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
            "Reach (1). Unwieldy (1)"
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
              ],
              [
                "Tribal Leader",
                7
              ]
            ]
          }
        ],
        "rules": [
          "Mercenary",
          "Stubborn"
        ],
        "custom": {
          "Dogs of War": "While this unit has a Hold action token, enemy units locked in combat with it suffer a -1 Accuracy penalty for Melee attacks. Additionally, the enemy morale lost due to Houndmaster is now doubled when charging."
        },
        "weapons": {
          "Dóry": [
            "10",
            "5",
            "6",
            "Reach (1). Unwieldy (1)"
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
        "equip": [],
        "gear": [
          "Phásganon"
        ],
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
                "gear": [
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
          "Surefooted",
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
                "c": 1,
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
                "Raider Captain",
                8
              ]
            ]
          }
        ],
        "rules": [
          "Surefooted",
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
        "name": "Cataphract",
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
              ],
              [
                "Tribal Leader",
                12
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
            "Reach (1). Unwieldy (2)"
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
        "points": 17,
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
          "Mercenary",
          "Camel Riders"
        ],
        "weapons": {
          "Qaštā": [
            "24”",
            "6",
            "4",
            "1 Attack per Rider, plus 1 if unit has Hold Token. No movement penalty, Direct Fire"
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
      "limit": 3,
      "mercs": 1,
      "text": "Your army may include 1 unit from the Supplemental Mercenaries list for each copy of this card in your deck.",
      "note": "If you take a mercenary unit, this card must be one of the 3 cards in your hand.",
      "flavor": "Gold buys soldiers when loyalty runs short."
    },
    {
      "id": "monument",
      "name": "Monument",
      "limit": 3,
      "text": "Before deployment, place a 2” × 2” Monument in the neutral zone, outside every deployment zone. It is impassable and blocks all line of sight that passes over it. Friendly units within 6” of it gain +2 to Break tests.",
      "flavor": "Beneath the gaze of their ancestors, no warrior wants to be the first to run."
    },
    {
      "id": "watchtower",
      "name": "Watchtower",
      "limit": 3,
      "text": "Before deployment, place a 3” × 3” Watchtower in your deployment zone. It is impassable but does not block line of sight. While a Skirmishing Warrior unit is in base contact with it, and no other unit is in base contact with that unit or the Watchtower, no enemy unit may deploy within 18” of the Watchtower. Any player may use this effect.",
      "flavor": "From the tower, no ambush goes unseen."
    },
    {
      "id": "dense-brush",
      "name": "Dense Brush",
      "limit": 3,
      "text": "Before deployment, place a 3” × 3” patch of Dense Brush in the neutral zone, outside every deployment zone. It is impassable and blocks all line of sight that passes over it.",
      "flavor": "Thorn and thicket swallow whole companies from view."
    },
    {
      "id": "crumbled-ruins",
      "name": "Crumbled Ruins",
      "limit": 3,
      "text": "Before deployment, place 4” × 4” Crumbled Ruins in the neutral zone, outside every deployment zone. They follow the rules for a Stony Plain.",
      "flavor": "The bones of an older city trip the living."
    },
    {
      "id": "flooded-field",
      "name": "Flooded Field",
      "limit": 3,
      "text": "Before deployment, place a 3” × 3” Flooded Field in the neutral zone, outside every deployment zone. It follows the rules for a Marsh.",
      "flavor": "Broken dikes turn the farmland into a mire."
    },
    {
      "id": "blot-out-the-sun",
      "name": "Blot Out the Sun",
      "armies": [
        "persia"
      ],
      "limit": 1,
      "text": "Until the end of the turn, ranged attacks made with Volley fire, or against targets beyond half the weapon's maximum range, add +1 to Suppression.",
      "flavor": "So many arrows fly that the sky darkens over the enemy line."
    },
    {
      "id": "all-of-mankind",
      "name": "All of Mankind",
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
      "armies": [
        "persia"
      ],
      "limit": 1,
      "text": "Until the end of the turn, Sakā and Scythian Archers attack at -1 Strength. Their base Suppression is equal to the target's Training value instead of 1.",
      "flavor": "Steppe archers dip their arrows in rot and venom, so even a scratch spreads terror."
    },
    {
      "id": "persian-mercenaries",
      "name": "King of Kings",
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
      "armies": [
        "hittite"
      ],
      "limit": 1,
      "text": "Until the end of the turn, all Chariot units gain +1 Accuracy.",
      "flavor": "Like the Storm God's bulls, the chariots thunder across the field."
    },
    {
      "id": "kadesh-ambush",
      "name": "Kadesh Ambush",
      "armies": [
        "hittite"
      ],
      "limit": 1,
      "text": "Play during deployment. One Chariot unit gains the Scout special rule. You lose Army Morale equal to half the Army Morale that unit adds to your Starting Army Morale, rounded up.",
      "flavor": "Hidden behind the city, the chariots fall upon the enemy's flank."
    },
    {
      "id": "thousand-gods-of-hatti",
      "name": "The Thousand Gods of Hatti",
      "armies": [
        "hittite"
      ],
      "limit": 1,
      "text": "Until the end of the turn, units within 18” of a Royal Retinue gain the following, based on their name. Allied units: +1 Move and Aim. Levy units: automatically pass their next Break test. Hattian units: +1 Strength with melee weapons, and Frenzy.",
      "flavor": "Sworn before the gods of Hatti, vassal and native fight as one."
    },
    {
      "id": "triplex-acies",
      "name": "Triplex Aciēs",
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
      "armies": [
        "rome"
      ],
      "limit": 1,
      "text": "Until the end of the turn, units using Iacite Pīla ignore its -2 penalty to hit and add +1 to Suppression.",
      "flavor": "A storm of pila breaks the enemy's shields before the swords go in."
    },
    {
      "id": "fulcum",
      "name": "Fulcum",
      "armies": [
        "rome"
      ],
      "limit": 1,
      "text": "Until the end of the turn, all units with Testūdō are treated as having the Phalanx special rule. They may also use their Pīlum in Melee as described in Testūdō (Length 6, -1 Strength, no Sunder), even if they did not take the Hold action.",
      "flavor": "Shields locked edge to edge, the cohort becomes a wall."
    },
    {
      "id": "numeri",
      "name": "Numerī",
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
      "armies": [
        "aztec"
      ],
      "limit": 1,
      "text": "Until the end of the turn, units within 8” of a Shaman gain Frenzy, and each unit with a Shaman gains +1 Strength with melee weapons.",
      "flavor": "Priests drive the warriors on, promising hearts for the war god."
    },
    {
      "id": "death-whistle",
      "name": "Death Whistle",
      "armies": [
        "aztec"
      ],
      "limit": 1,
      "text": "Enemy units within 24” of a unit with a Shaman or Army Musician take a Fear Test at -1. Units that fail lose their Hold Action Token.",
      "flavor": "A shriek like the cry of the dead rises from the Aztec ranks."
    },
    {
      "id": "othismos",
      "name": "Othismos",
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
      "armies": [
        "greek"
      ],
      "limit": 1,
      "text": "Ongoing. Phalanx units you control subtract 1 from Suppression. Discard this card when a Phalanx unit you control fails a Break test or is destroyed. Covers every unit with the Phalanx rule, even while it is negated.",
      "flavor": "Let their arrows hide the sun; we will fight in the shade."
    }
  ]
};
