const STORAGE_KEY = "hikaku_com_state_v1";
const VIEW_KEY = "hikaku_com_view_mode_v2";
const SELF_BUILD_CATEGORY = "自作パソコン";
const PC_SPEC_NAMES = ["CPU", "GPU", "メモリ", "ストレージ", "画面サイズ", "重量", "バッテリー", "電源", "OS", "保証"];
const SELF_BUILD_SPEC_NAMES = ["CPU", "GPU", "マザーボード", "メモリ", "ストレージ", "画面サイズ", "重量", "電源", "OS", "保証"];

const defaultCategories = {
  "パソコン": [...PC_SPEC_NAMES],
  [SELF_BUILD_CATEGORY]: [...SELF_BUILD_SPEC_NAMES],
  "スマホ": ["CPU", "メモリ", "ストレージ", "画面サイズ", "カメラ", "バッテリー", "重量", "防水", "通信"],
  "モニター": ["サイズ", "解像度", "リフレッシュレート", "パネル", "応答速度", "端子", "高さ調整", "保証"],
  "家電": ["メーカー", "サイズ", "重量", "消費電力", "保証", "特徴"],
  "本": ["著者", "出版社", "発売日", "ページ数", "形式", "目的"],
  "自由": ["項目1", "項目2", "項目3"]
};


const tieredSpecOptions = {
  "CPU": {
    "labels": [
      "メーカー",
      "シリーズ",
      "世代 / Core Ultra",
      "型番候補"
    ],
    "nodes": [
      {
        "label": "Intel",
        "children": [
          {
            "label": "Core i3",
            "children": [
              {
                "label": "第9世代",
                "children": [
                  {
                    "label": "Core i3-9350K"
                  },
                  {
                    "label": "Core i3-9350KF"
                  },
                  {
                    "label": "Core i3-9320"
                  },
                  {
                    "label": "Core i3-9300"
                  },
                  {
                    "label": "Core i3-9300T"
                  },
                  {
                    "label": "Core i3-9100"
                  },
                  {
                    "label": "Core i3-9100F"
                  },
                  {
                    "label": "Core i3-9100T"
                  }
                ]
              },
              {
                "label": "第10世代",
                "children": [
                  {
                    "label": "Core i3-10320"
                  },
                  {
                    "label": "Core i3-10300"
                  },
                  {
                    "label": "Core i3-10300T"
                  },
                  {
                    "label": "Core i3-10100"
                  },
                  {
                    "label": "Core i3-10100F"
                  },
                  {
                    "label": "Core i3-10100T"
                  }
                ]
              },
              {
                "label": "第11世代",
                "children": [
                  {
                    "label": "一般向けデスクトップはCore i3なし"
                  }
                ]
              },
              {
                "label": "第12世代",
                "children": [
                  {
                    "label": "Core i3-12300"
                  },
                  {
                    "label": "Core i3-12300T"
                  },
                  {
                    "label": "Core i3-12100"
                  },
                  {
                    "label": "Core i3-12100F"
                  },
                  {
                    "label": "Core i3-12100T"
                  }
                ]
              },
              {
                "label": "第13世代",
                "children": [
                  {
                    "label": "Core i3-13100"
                  },
                  {
                    "label": "Core i3-13100F"
                  },
                  {
                    "label": "Core i3-13100T"
                  }
                ]
              },
              {
                "label": "第14世代",
                "children": [
                  {
                    "label": "Core i3-14100"
                  },
                  {
                    "label": "Core i3-14100F"
                  },
                  {
                    "label": "Core i3-14100T"
                  }
                ]
              }
            ]
          },
          {
            "label": "Core i5",
            "children": [
              {
                "label": "第9世代",
                "children": [
                  {
                    "label": "Core i5-9600K"
                  },
                  {
                    "label": "Core i5-9600KF"
                  },
                  {
                    "label": "Core i5-9600"
                  },
                  {
                    "label": "Core i5-9600T"
                  },
                  {
                    "label": "Core i5-9500"
                  },
                  {
                    "label": "Core i5-9500F"
                  },
                  {
                    "label": "Core i5-9500T"
                  },
                  {
                    "label": "Core i5-9400"
                  },
                  {
                    "label": "Core i5-9400F"
                  },
                  {
                    "label": "Core i5-9400T"
                  }
                ]
              },
              {
                "label": "第10世代",
                "children": [
                  {
                    "label": "Core i5-10600K"
                  },
                  {
                    "label": "Core i5-10600KF"
                  },
                  {
                    "label": "Core i5-10600"
                  },
                  {
                    "label": "Core i5-10600T"
                  },
                  {
                    "label": "Core i5-10500"
                  },
                  {
                    "label": "Core i5-10500T"
                  },
                  {
                    "label": "Core i5-10400"
                  },
                  {
                    "label": "Core i5-10400F"
                  },
                  {
                    "label": "Core i5-10400T"
                  }
                ]
              },
              {
                "label": "第11世代",
                "children": [
                  {
                    "label": "Core i5-11600K"
                  },
                  {
                    "label": "Core i5-11600KF"
                  },
                  {
                    "label": "Core i5-11600"
                  },
                  {
                    "label": "Core i5-11600T"
                  },
                  {
                    "label": "Core i5-11500"
                  },
                  {
                    "label": "Core i5-11500T"
                  },
                  {
                    "label": "Core i5-11400"
                  },
                  {
                    "label": "Core i5-11400F"
                  },
                  {
                    "label": "Core i5-11400T"
                  }
                ]
              },
              {
                "label": "第12世代",
                "children": [
                  {
                    "label": "Core i5-12600K"
                  },
                  {
                    "label": "Core i5-12600KF"
                  },
                  {
                    "label": "Core i5-12600"
                  },
                  {
                    "label": "Core i5-12600T"
                  },
                  {
                    "label": "Core i5-12500"
                  },
                  {
                    "label": "Core i5-12500T"
                  },
                  {
                    "label": "Core i5-12400"
                  },
                  {
                    "label": "Core i5-12400F"
                  },
                  {
                    "label": "Core i5-12400T"
                  }
                ]
              },
              {
                "label": "第13世代",
                "children": [
                  {
                    "label": "Core i5-13600K"
                  },
                  {
                    "label": "Core i5-13600KF"
                  },
                  {
                    "label": "Core i5-13600"
                  },
                  {
                    "label": "Core i5-13600T"
                  },
                  {
                    "label": "Core i5-13500"
                  },
                  {
                    "label": "Core i5-13500T"
                  },
                  {
                    "label": "Core i5-13400"
                  },
                  {
                    "label": "Core i5-13400F"
                  },
                  {
                    "label": "Core i5-13400T"
                  }
                ]
              },
              {
                "label": "第14世代",
                "children": [
                  {
                    "label": "Core i5-14600K"
                  },
                  {
                    "label": "Core i5-14600KF"
                  },
                  {
                    "label": "Core i5-14600"
                  },
                  {
                    "label": "Core i5-14600T"
                  },
                  {
                    "label": "Core i5-14500"
                  },
                  {
                    "label": "Core i5-14500T"
                  },
                  {
                    "label": "Core i5-14400"
                  },
                  {
                    "label": "Core i5-14400F"
                  },
                  {
                    "label": "Core i5-14400T"
                  }
                ]
              }
            ]
          },
          {
            "label": "Core i7",
            "children": [
              {
                "label": "第9世代",
                "children": [
                  {
                    "label": "Core i7-9700K"
                  },
                  {
                    "label": "Core i7-9700KF"
                  },
                  {
                    "label": "Core i7-9700"
                  },
                  {
                    "label": "Core i7-9700F"
                  },
                  {
                    "label": "Core i7-9700T"
                  }
                ]
              },
              {
                "label": "第10世代",
                "children": [
                  {
                    "label": "Core i7-10700K"
                  },
                  {
                    "label": "Core i7-10700KF"
                  },
                  {
                    "label": "Core i7-10700"
                  },
                  {
                    "label": "Core i7-10700F"
                  },
                  {
                    "label": "Core i7-10700T"
                  }
                ]
              },
              {
                "label": "第11世代",
                "children": [
                  {
                    "label": "Core i7-11700K"
                  },
                  {
                    "label": "Core i7-11700KF"
                  },
                  {
                    "label": "Core i7-11700"
                  },
                  {
                    "label": "Core i7-11700F"
                  },
                  {
                    "label": "Core i7-11700T"
                  }
                ]
              },
              {
                "label": "第12世代",
                "children": [
                  {
                    "label": "Core i7-12700K"
                  },
                  {
                    "label": "Core i7-12700KF"
                  },
                  {
                    "label": "Core i7-12700"
                  },
                  {
                    "label": "Core i7-12700F"
                  },
                  {
                    "label": "Core i7-12700T"
                  }
                ]
              },
              {
                "label": "第13世代",
                "children": [
                  {
                    "label": "Core i7-13700K"
                  },
                  {
                    "label": "Core i7-13700KF"
                  },
                  {
                    "label": "Core i7-13700"
                  },
                  {
                    "label": "Core i7-13700F"
                  },
                  {
                    "label": "Core i7-13700T"
                  }
                ]
              },
              {
                "label": "第14世代",
                "children": [
                  {
                    "label": "Core i7-14700K"
                  },
                  {
                    "label": "Core i7-14700KF"
                  },
                  {
                    "label": "Core i7-14700"
                  },
                  {
                    "label": "Core i7-14700F"
                  },
                  {
                    "label": "Core i7-14700T"
                  }
                ]
              }
            ]
          },
          {
            "label": "Core i9",
            "children": [
              {
                "label": "第9世代",
                "children": [
                  {
                    "label": "Core i9-9900KS"
                  },
                  {
                    "label": "Core i9-9900K"
                  },
                  {
                    "label": "Core i9-9900KF"
                  },
                  {
                    "label": "Core i9-9900"
                  },
                  {
                    "label": "Core i9-9900F"
                  },
                  {
                    "label": "Core i9-9900T"
                  }
                ]
              },
              {
                "label": "第10世代",
                "children": [
                  {
                    "label": "Core i9-10900K"
                  },
                  {
                    "label": "Core i9-10900KF"
                  },
                  {
                    "label": "Core i9-10900"
                  },
                  {
                    "label": "Core i9-10900F"
                  },
                  {
                    "label": "Core i9-10900T"
                  },
                  {
                    "label": "Core i9-10850K"
                  }
                ]
              },
              {
                "label": "第11世代",
                "children": [
                  {
                    "label": "Core i9-11900K"
                  },
                  {
                    "label": "Core i9-11900KF"
                  },
                  {
                    "label": "Core i9-11900"
                  },
                  {
                    "label": "Core i9-11900F"
                  },
                  {
                    "label": "Core i9-11900T"
                  }
                ]
              },
              {
                "label": "第12世代",
                "children": [
                  {
                    "label": "Core i9-12900KS"
                  },
                  {
                    "label": "Core i9-12900K"
                  },
                  {
                    "label": "Core i9-12900KF"
                  },
                  {
                    "label": "Core i9-12900"
                  },
                  {
                    "label": "Core i9-12900F"
                  },
                  {
                    "label": "Core i9-12900T"
                  }
                ]
              },
              {
                "label": "第13世代",
                "children": [
                  {
                    "label": "Core i9-13900KS"
                  },
                  {
                    "label": "Core i9-13900K"
                  },
                  {
                    "label": "Core i9-13900KF"
                  },
                  {
                    "label": "Core i9-13900"
                  },
                  {
                    "label": "Core i9-13900F"
                  },
                  {
                    "label": "Core i9-13900T"
                  }
                ]
              },
              {
                "label": "第14世代",
                "children": [
                  {
                    "label": "Core i9-14900KS"
                  },
                  {
                    "label": "Core i9-14900K"
                  },
                  {
                    "label": "Core i9-14900KF"
                  },
                  {
                    "label": "Core i9-14900"
                  },
                  {
                    "label": "Core i9-14900F"
                  },
                  {
                    "label": "Core i9-14900T"
                  }
                ]
              }
            ]
          },
          {
            "label": "Core Ultra",
            "children": [
              {
                "label": "Core Ultra 200S",
                "children": [
                  {
                    "label": "Core Ultra 9 285K"
                  },
                  {
                    "label": "Core Ultra 9 285"
                  },
                  {
                    "label": "Core Ultra 9 285T"
                  },
                  {
                    "label": "Core Ultra 7 265K"
                  },
                  {
                    "label": "Core Ultra 7 265KF"
                  },
                  {
                    "label": "Core Ultra 7 265"
                  },
                  {
                    "label": "Core Ultra 7 265F"
                  },
                  {
                    "label": "Core Ultra 7 265T"
                  },
                  {
                    "label": "Core Ultra 5 245K"
                  },
                  {
                    "label": "Core Ultra 5 245KF"
                  },
                  {
                    "label": "Core Ultra 5 245"
                  },
                  {
                    "label": "Core Ultra 5 245F"
                  },
                  {
                    "label": "Core Ultra 5 245T"
                  },
                  {
                    "label": "Core Ultra 5 235"
                  },
                  {
                    "label": "Core Ultra 5 235T"
                  },
                  {
                    "label": "Core Ultra 5 225"
                  },
                  {
                    "label": "Core Ultra 5 225F"
                  },
                  {
                    "label": "Core Ultra 5 225T"
                  }
                ]
              },
              {
                "label": "Core Ultra 200S Plus",
                "children": [
                  {
                    "label": "Core Ultra 7 270K Plus"
                  },
                  {
                    "label": "Core Ultra 7 270KF Plus"
                  },
                  {
                    "label": "Core Ultra 5 250K Plus"
                  },
                  {
                    "label": "Core Ultra 5 250KF Plus"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "label": "AMD",
        "children": [
          {
            "label": "Ryzen 3",
            "children": [
              {
                "label": "3000番台",
                "children": [
                  {
                    "label": "Ryzen 3 3100"
                  },
                  {
                    "label": "Ryzen 3 3300X"
                  }
                ]
              },
              {
                "label": "4000G番台",
                "children": [
                  {
                    "label": "Ryzen 3 4300G"
                  }
                ]
              },
              {
                "label": "5000番台",
                "children": [
                  {
                    "label": "Ryzen 3 5300G"
                  },
                  {
                    "label": "Ryzen 3 4100"
                  }
                ]
              }
            ]
          },
          {
            "label": "Ryzen 5",
            "children": [
              {
                "label": "3000番台",
                "children": [
                  {
                    "label": "Ryzen 5 3500"
                  },
                  {
                    "label": "Ryzen 5 3500X"
                  },
                  {
                    "label": "Ryzen 5 3600"
                  },
                  {
                    "label": "Ryzen 5 3600X"
                  }
                ]
              },
              {
                "label": "5000番台",
                "children": [
                  {
                    "label": "Ryzen 5 5500"
                  },
                  {
                    "label": "Ryzen 5 5600"
                  },
                  {
                    "label": "Ryzen 5 5600G"
                  },
                  {
                    "label": "Ryzen 5 5600X"
                  }
                ]
              },
              {
                "label": "7000番台",
                "children": [
                  {
                    "label": "Ryzen 5 7500F"
                  },
                  {
                    "label": "Ryzen 5 7600"
                  },
                  {
                    "label": "Ryzen 5 7600X"
                  }
                ]
              },
              {
                "label": "9000番台",
                "children": [
                  {
                    "label": "Ryzen 5 9600"
                  },
                  {
                    "label": "Ryzen 5 9600X"
                  }
                ]
              }
            ]
          },
          {
            "label": "Ryzen 7",
            "children": [
              {
                "label": "3000番台",
                "children": [
                  {
                    "label": "Ryzen 7 3700X"
                  },
                  {
                    "label": "Ryzen 7 3800X"
                  },
                  {
                    "label": "Ryzen 7 3800XT"
                  }
                ]
              },
              {
                "label": "5000番台",
                "children": [
                  {
                    "label": "Ryzen 7 5700"
                  },
                  {
                    "label": "Ryzen 7 5700G"
                  },
                  {
                    "label": "Ryzen 7 5700X"
                  },
                  {
                    "label": "Ryzen 7 5800X"
                  },
                  {
                    "label": "Ryzen 7 5800X3D"
                  }
                ]
              },
              {
                "label": "7000番台",
                "children": [
                  {
                    "label": "Ryzen 7 7700"
                  },
                  {
                    "label": "Ryzen 7 7700X"
                  },
                  {
                    "label": "Ryzen 7 7800X3D"
                  }
                ]
              },
              {
                "label": "9000番台",
                "children": [
                  {
                    "label": "Ryzen 7 9700X"
                  },
                  {
                    "label": "Ryzen 7 9800X3D"
                  }
                ]
              }
            ]
          },
          {
            "label": "Ryzen 9",
            "children": [
              {
                "label": "3000番台",
                "children": [
                  {
                    "label": "Ryzen 9 3900X"
                  },
                  {
                    "label": "Ryzen 9 3900XT"
                  },
                  {
                    "label": "Ryzen 9 3950X"
                  }
                ]
              },
              {
                "label": "5000番台",
                "children": [
                  {
                    "label": "Ryzen 9 5900X"
                  },
                  {
                    "label": "Ryzen 9 5950X"
                  }
                ]
              },
              {
                "label": "7000番台",
                "children": [
                  {
                    "label": "Ryzen 9 7900"
                  },
                  {
                    "label": "Ryzen 9 7900X"
                  },
                  {
                    "label": "Ryzen 9 7900X3D"
                  },
                  {
                    "label": "Ryzen 9 7950X"
                  },
                  {
                    "label": "Ryzen 9 7950X3D"
                  }
                ]
              },
              {
                "label": "9000番台",
                "children": [
                  {
                    "label": "Ryzen 9 9900X"
                  },
                  {
                    "label": "Ryzen 9 9950X"
                  },
                  {
                    "label": "Ryzen 9 9950X3D"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "label": "Apple",
        "children": [
          {
            "label": "M1",
            "children": [
              {
                "label": "Apple M1"
              },
              {
                "label": "Apple M1 Pro"
              },
              {
                "label": "Apple M1 Max"
              },
              {
                "label": "Apple M1 Ultra"
              }
            ]
          },
          {
            "label": "M2",
            "children": [
              {
                "label": "Apple M2"
              },
              {
                "label": "Apple M2 Pro"
              },
              {
                "label": "Apple M2 Max"
              },
              {
                "label": "Apple M2 Ultra"
              }
            ]
          },
          {
            "label": "M3",
            "children": [
              {
                "label": "Apple M3"
              },
              {
                "label": "Apple M3 Pro"
              },
              {
                "label": "Apple M3 Max"
              }
            ]
          },
          {
            "label": "M4",
            "children": [
              {
                "label": "Apple M4"
              },
              {
                "label": "Apple M4 Pro"
              },
              {
                "label": "Apple M4 Max"
              }
            ]
          }
        ]
      },
      {
        "label": "スマホ向け",
        "children": [
          {
            "label": "Snapdragon",
            "children": [
              {
                "label": "Snapdragon 7 Gen"
              },
              {
                "label": "Snapdragon 8 Gen"
              }
            ]
          },
          {
            "label": "Apple A",
            "children": [
              {
                "label": "Apple A16"
              },
              {
                "label": "Apple A17 Pro"
              },
              {
                "label": "Apple A18"
              }
            ]
          },
          {
            "label": "Google Tensor",
            "children": [
              {
                "label": "Tensor G3"
              },
              {
                "label": "Tensor G4"
              }
            ]
          },
          {
            "label": "MediaTek",
            "children": [
              {
                "label": "Dimensity 8000番台"
              },
              {
                "label": "Dimensity 9000番台"
              }
            ]
          }
        ]
      }
    ]
  },
  "GPU": {
    "labels": [
      "メーカー/種類",
      "シリーズ",
      "世代",
      "候補"
    ],
    "nodes": [
      {
        "label": "内蔵GPU",
        "children": [
          {
            "label": "Intel",
            "children": [
              {
                "label": "Intel UHD Graphics 630"
              },
              {
                "label": "Intel UHD Graphics 730"
              },
              {
                "label": "Intel UHD Graphics 750"
              },
              {
                "label": "Intel UHD Graphics 770"
              },
              {
                "label": "Intel Iris Xe"
              },
              {
                "label": "Intel Arc Graphics"
              }
            ]
          },
          {
            "label": "AMD",
            "children": [
              {
                "label": "AMD Radeon Graphics"
              },
              {
                "label": "Radeon Vega 7"
              },
              {
                "label": "Radeon Vega 8"
              },
              {
                "label": "Radeon 660M"
              },
              {
                "label": "Radeon 680M"
              },
              {
                "label": "Radeon 780M"
              },
              {
                "label": "Radeon 890M"
              }
            ]
          },
          {
            "label": "Apple",
            "children": [
              {
                "label": "Apple内蔵GPU"
              },
              {
                "label": "Apple Mシリーズ内蔵GPU"
              }
            ]
          }
        ]
      },
      {
        "label": "NVIDIA GeForce",
        "children": [
          {
            "label": "GTX 10シリーズ",
            "children": [
              {
                "label": "GTX 1050"
              },
              {
                "label": "GTX 1050 Ti"
              },
              {
                "label": "GTX 1060 3GB"
              },
              {
                "label": "GTX 1060 6GB"
              },
              {
                "label": "GTX 1070"
              },
              {
                "label": "GTX 1070 Ti"
              },
              {
                "label": "GTX 1080"
              },
              {
                "label": "GTX 1080 Ti"
              }
            ]
          },
          {
            "label": "GTX 16シリーズ",
            "children": [
              {
                "label": "GTX 1630"
              },
              {
                "label": "GTX 1650"
              },
              {
                "label": "GTX 1650 SUPER"
              },
              {
                "label": "GTX 1660"
              },
              {
                "label": "GTX 1660 SUPER"
              },
              {
                "label": "GTX 1660 Ti"
              }
            ]
          },
          {
            "label": "RTX 20シリーズ",
            "children": [
              {
                "label": "RTX 2060"
              },
              {
                "label": "RTX 2060 SUPER"
              },
              {
                "label": "RTX 2070"
              },
              {
                "label": "RTX 2070 SUPER"
              },
              {
                "label": "RTX 2080"
              },
              {
                "label": "RTX 2080 SUPER"
              },
              {
                "label": "RTX 2080 Ti"
              }
            ]
          },
          {
            "label": "RTX 30シリーズ",
            "children": [
              {
                "label": "RTX 3050"
              },
              {
                "label": "RTX 3050 6GB"
              },
              {
                "label": "RTX 3060 8GB"
              },
              {
                "label": "RTX 3060 12GB"
              },
              {
                "label": "RTX 3060 Ti"
              },
              {
                "label": "RTX 3070"
              },
              {
                "label": "RTX 3070 Ti"
              },
              {
                "label": "RTX 3080 10GB"
              },
              {
                "label": "RTX 3080 12GB"
              },
              {
                "label": "RTX 3080 Ti"
              },
              {
                "label": "RTX 3090"
              },
              {
                "label": "RTX 3090 Ti"
              }
            ]
          },
          {
            "label": "RTX 40シリーズ",
            "children": [
              {
                "label": "RTX 4050 Laptop"
              },
              {
                "label": "RTX 4060"
              },
              {
                "label": "RTX 4060 Ti 8GB"
              },
              {
                "label": "RTX 4060 Ti 16GB"
              },
              {
                "label": "RTX 4070"
              },
              {
                "label": "RTX 4070 SUPER"
              },
              {
                "label": "RTX 4070 Ti"
              },
              {
                "label": "RTX 4070 Ti SUPER"
              },
              {
                "label": "RTX 4080"
              },
              {
                "label": "RTX 4080 SUPER"
              },
              {
                "label": "RTX 4090"
              }
            ]
          },
          {
            "label": "RTX 50シリーズ",
            "children": [
              {
                "label": "RTX 5050"
              },
              {
                "label": "RTX 5060"
              },
              {
                "label": "RTX 5060 Ti 8GB"
              },
              {
                "label": "RTX 5060 Ti 16GB"
              },
              {
                "label": "RTX 5070"
              },
              {
                "label": "RTX 5070 Ti"
              },
              {
                "label": "RTX 5080"
              },
              {
                "label": "RTX 5090"
              }
            ]
          },
          {
            "label": "ノート向け RTX",
            "children": [
              {
                "label": "RTX 3050 Laptop"
              },
              {
                "label": "RTX 3060 Laptop"
              },
              {
                "label": "RTX 3070 Laptop"
              },
              {
                "label": "RTX 3080 Laptop"
              },
              {
                "label": "RTX 4050 Laptop"
              },
              {
                "label": "RTX 4060 Laptop"
              },
              {
                "label": "RTX 4070 Laptop"
              },
              {
                "label": "RTX 4080 Laptop"
              },
              {
                "label": "RTX 4090 Laptop"
              },
              {
                "label": "RTX 5050 Laptop"
              },
              {
                "label": "RTX 5060 Laptop"
              },
              {
                "label": "RTX 5070 Laptop"
              },
              {
                "label": "RTX 5080 Laptop"
              },
              {
                "label": "RTX 5090 Laptop"
              }
            ]
          }
        ]
      },
      {
        "label": "AMD Radeon",
        "children": [
          {
            "label": "RX 500シリーズ",
            "children": [
              {
                "label": "Radeon RX 570"
              },
              {
                "label": "Radeon RX 580"
              },
              {
                "label": "Radeon RX 590"
              }
            ]
          },
          {
            "label": "RX Vegaシリーズ",
            "children": [
              {
                "label": "Radeon RX Vega 56"
              },
              {
                "label": "Radeon RX Vega 64"
              }
            ]
          },
          {
            "label": "RX 5000シリーズ",
            "children": [
              {
                "label": "Radeon RX 5500 XT"
              },
              {
                "label": "Radeon RX 5600 XT"
              },
              {
                "label": "Radeon RX 5700"
              },
              {
                "label": "Radeon RX 5700 XT"
              }
            ]
          },
          {
            "label": "RX 6000シリーズ",
            "children": [
              {
                "label": "Radeon RX 6400"
              },
              {
                "label": "Radeon RX 6500 XT"
              },
              {
                "label": "Radeon RX 6600"
              },
              {
                "label": "Radeon RX 6600 XT"
              },
              {
                "label": "Radeon RX 6650 XT"
              },
              {
                "label": "Radeon RX 6700"
              },
              {
                "label": "Radeon RX 6700 XT"
              },
              {
                "label": "Radeon RX 6750 XT"
              },
              {
                "label": "Radeon RX 6800"
              },
              {
                "label": "Radeon RX 6800 XT"
              },
              {
                "label": "Radeon RX 6900 XT"
              },
              {
                "label": "Radeon RX 6950 XT"
              }
            ]
          },
          {
            "label": "RX 7000シリーズ",
            "children": [
              {
                "label": "Radeon RX 7600"
              },
              {
                "label": "Radeon RX 7600 XT"
              },
              {
                "label": "Radeon RX 7700 XT"
              },
              {
                "label": "Radeon RX 7800 XT"
              },
              {
                "label": "Radeon RX 7900 GRE"
              },
              {
                "label": "Radeon RX 7900 XT"
              },
              {
                "label": "Radeon RX 7900 XTX"
              }
            ]
          },
          {
            "label": "RX 9000シリーズ",
            "children": [
              {
                "label": "Radeon RX 9060"
              },
              {
                "label": "Radeon RX 9060 XT"
              },
              {
                "label": "Radeon RX 9070 GRE"
              },
              {
                "label": "Radeon RX 9070"
              },
              {
                "label": "Radeon RX 9070 XT"
              }
            ]
          },
          {
            "label": "ノート向け Radeon",
            "children": [
              {
                "label": "Radeon RX 6600M"
              },
              {
                "label": "Radeon RX 6700M"
              },
              {
                "label": "Radeon RX 6800M"
              },
              {
                "label": "Radeon RX 7600M"
              },
              {
                "label": "Radeon RX 7600M XT"
              },
              {
                "label": "Radeon RX 7700S"
              },
              {
                "label": "Radeon RX 7800M XT"
              },
              {
                "label": "Radeon RX 7900M"
              }
            ]
          }
        ]
      },
      {
        "label": "Intel Arc",
        "children": [
          {
            "label": "Arc Aシリーズ",
            "children": [
              {
                "label": "Intel Arc A310"
              },
              {
                "label": "Intel Arc A380"
              },
              {
                "label": "Intel Arc A580"
              },
              {
                "label": "Intel Arc A750"
              },
              {
                "label": "Intel Arc A770"
              }
            ]
          },
          {
            "label": "Arc Bシリーズ",
            "children": [
              {
                "label": "Intel Arc B570"
              },
              {
                "label": "Intel Arc B580"
              }
            ]
          }
        ]
      }
    ]
  },
  "メモリ": {
    labels: ["容量", "規格", "構成"],
    nodes: ["4GB", "8GB", "12GB", "16GB", "24GB", "32GB", "64GB", "128GB"].map(capacity => ({
      label: capacity,
      children: ["DDR4", "DDR5", "LPDDR4X", "LPDDR5", "LPDDR5X", "規格不明"].map(type => ({
        label: type,
        value: type === "規格不明" ? capacity : `${capacity} ${type}`,
        children: [
          { label: "オンボード", value: `${capacity} ${type === "規格不明" ? "" : type} オンボード`.trim() },
          { label: "増設可能", value: `${capacity} ${type === "規格不明" ? "" : type} 増設可能`.trim() },
          { label: "構成不明", value: type === "規格不明" ? capacity : `${capacity} ${type}` }
        ]
      }))
    }))
  },
  "ストレージ": {
    labels: ["種類", "容量", "規格"],
    nodes: [
      { label: "SSD", children: ["128GB", "256GB", "512GB", "1TB", "2TB", "4TB"].map(size => ({
        label: size,
        children: [{ label: "NVMe", value: `${size} NVMe SSD` }, { label: "SATA", value: `${size} SATA SSD` }, { label: "規格不明", value: `${size} SSD` }]
      })) },
      { label: "HDD", children: ["500GB", "1TB", "2TB", "4TB"].map(size => ({ label: size, value: `${size} HDD` })) },
      { label: "eMMC", children: ["64GB", "128GB", "256GB"].map(size => ({ label: size, value: `${size} eMMC` })) }
    ]
  },
  "画面サイズ": {
    labels: ["サイズ", "解像度", "補足"],
    nodes: ["13.3インチ", "14インチ", "15.6インチ", "16インチ", "17.3インチ", "24インチ", "27インチ", "32インチ"].map(size => ({
      label: size,
      children: ["HD", "フルHD", "WUXGA", "WQHD", "WQXGA", "4K", "不明"].map(resolution => ({
        label: resolution,
        value: resolution === "不明" ? size : `${size} ${resolution}`,
        children: [
          { label: "60Hz", value: `${size} ${resolution === "不明" ? "" : resolution} 60Hz`.trim() },
          { label: "120Hz以上", value: `${size} ${resolution === "不明" ? "" : resolution} 120Hz以上`.trim() },
          { label: "タッチ対応", value: `${size} ${resolution === "不明" ? "" : resolution} タッチ対応`.trim() },
          { label: "補足なし", value: resolution === "不明" ? size : `${size} ${resolution}` }
        ]
      }))
    }))
  },
  "重量": {
    labels: ["重さ帯", "目安"],
    nodes: [
      { label: "軽量", children: [{ label: "約1.0kg以下" }, { label: "約1.1kg" }, { label: "約1.2kg" }, { label: "約1.3kg" }] },
      { label: "標準", children: [{ label: "約1.4kg" }, { label: "約1.5kg" }, { label: "約1.6kg" }, { label: "約1.7kg" }] },
      { label: "重め", children: [{ label: "約2.0kg" }, { label: "約2.5kg以上" }, { label: "据え置き向き" }] }
    ]
  },
  "マザーボード": {
    labels: ["CPU規格", "チップセット", "候補"],
    nodes: [
      { label: "Intel LGA1700", children: [
        { label: "B660 / B760", children: [{ label: "B660マザーボード" }, { label: "B760マザーボード" }, { label: "B760M マイクロATX" }] },
        { label: "Z690 / Z790", children: [{ label: "Z690マザーボード" }, { label: "Z790マザーボード" }] }
      ]},
      { label: "Intel LGA1851", children: [
        { label: "B860", children: [{ label: "B860マザーボード" }, { label: "B860M マイクロATX" }] },
        { label: "Z890", children: [{ label: "Z890マザーボード" }] }
      ]},
      { label: "AMD AM4", children: [
        { label: "B450 / B550", children: [{ label: "B450マザーボード" }, { label: "B550マザーボード" }, { label: "B550M マイクロATX" }] },
        { label: "X570", children: [{ label: "X570マザーボード" }] }
      ]},
      { label: "AMD AM5", children: [
        { label: "A620 / B650", children: [{ label: "A620マザーボード" }, { label: "B650マザーボード" }, { label: "B650M マイクロATX" }] },
        { label: "X670 / X870", children: [{ label: "X670マザーボード" }, { label: "X870マザーボード" }, { label: "X870Eマザーボード" }] }
      ]}
    ]
  },
  "電源": {
    labels: ["容量", "認証", "候補"],
    nodes: ["450W", "550W", "650W", "750W", "850W", "1000W", "1200W"].map(watt => ({
      label: watt,
      children: ["80PLUS Bronze", "80PLUS Gold", "80PLUS Platinum", "認証不明"].map(cert => ({
        label: cert,
        value: cert === "認証不明" ? `${watt} 電源` : `${watt} ${cert} 電源`,
        children: [
          { label: "ATX", value: cert === "認証不明" ? `${watt} ATX電源` : `${watt} ${cert} ATX電源` },
          { label: "SFX", value: cert === "認証不明" ? `${watt} SFX電源` : `${watt} ${cert} SFX電源` },
          { label: "形式不明", value: cert === "認証不明" ? `${watt} 電源` : `${watt} ${cert} 電源` }
        ]
      }))
    }))
  },
  "バッテリー": {
    labels: ["駆動時間帯", "目安"],
    nodes: [
      { label: "短め", children: [{ label: "約5時間" }, { label: "約6時間" }, { label: "約8時間" }] },
      { label: "標準", children: [{ label: "約10時間" }, { label: "約12時間" }] },
      { label: "長め", children: [{ label: "約15時間" }, { label: "約20時間" }, { label: "約20時間以上" }] }
    ]
  },
  "OS": {
    labels: ["種類", "エディション"],
    nodes: [
      { label: "Windows", children: [{ label: "Windows 11 Home" }, { label: "Windows 11 Pro" }, { label: "Windows 10" }] },
      { label: "macOS", children: [{ label: "macOS" }] },
      { label: "ChromeOS", children: [{ label: "ChromeOS" }] },
      { label: "Linux", children: [{ label: "Linux" }] },
      { label: "その他", children: [{ label: "OSなし" }, { label: "不明" }] }
    ]
  },
  "保証": {
    labels: ["保証期間", "内容"],
    nodes: [
      { label: "1年", children: [{ label: "メーカー保証1年" }, { label: "販売店保証1年" }] },
      { label: "2年", children: [{ label: "メーカー保証2年" }, { label: "延長保証2年" }] },
      { label: "3年", children: [{ label: "メーカー保証3年" }, { label: "延長保証3年" }] },
      { label: "その他", children: [{ label: "延長保証あり" }, { label: "保証なし" }, { label: "不明" }] }
    ]
  },
  "メーカー": {
    labels: ["分類", "メーカー"],
    nodes: [
      { label: "PCメーカー", children: ["Lenovo", "HP", "Dell", "ASUS", "Acer", "MSI", "mouse", "ドスパラ", "富士通", "NEC", "Apple", "Panasonic"].map(label => ({ label })) },
      { label: "家電メーカー", children: ["Panasonic", "SONY", "SHARP", "TOSHIBA", "HITACHI", "Mitsubishi", "Dyson", "Anker"].map(label => ({ label })) }
    ]
  },
  "サイズ": {
    labels: ["サイズ帯", "候補"],
    nodes: [
      { label: "小型", children: [{ label: "小型" }, { label: "13インチ" }, { label: "14インチ" }] },
      { label: "標準", children: [{ label: "標準" }, { label: "15.6インチ" }, { label: "16インチ" }, { label: "24インチ" }] },
      { label: "大型", children: [{ label: "大型" }, { label: "27インチ" }, { label: "32インチ" }] }
    ]
  }
};

const flatSpecOptions = {
  "特徴": ["軽い", "安い", "高性能", "静音", "省電力", "デザインが良い", "持ち運び向き", "ゲーム向き", "作業向き"],
  "カメラ": ["広角", "超広角", "望遠あり", "光学ズームあり"],
  "防水": ["IP67", "IP68", "防水なし"],
  "通信": ["4G", "5G", "eSIM対応", "デュアルSIM"],
  "解像度": ["フルHD", "WQHD", "4K", "UWQHD"],
  "リフレッシュレート": ["60Hz", "75Hz", "100Hz", "144Hz", "165Hz", "180Hz", "240Hz", "360Hz"],
  "パネル": ["IPS", "VA", "TN", "OLED", "Mini LED"],
  "応答速度": ["1ms", "3ms", "5ms"],
  "端子": ["HDMI", "DisplayPort", "USB-C", "HDMI / DisplayPort", "HDMI / USB-C"],
  "高さ調整": ["あり", "なし"],
  "形式": ["紙", "Kindle", "Audible", "単行本", "文庫", "新書"],
  "目的": ["入門", "実践", "資格", "教養", "レポート用", "就活用"]
};

let state = loadState();
let activeGroupId = state.activeGroupId;
let filters = {
  search: "",
  category: "all",
  status: "all",
  sort: "createdDesc"
};
let viewMode = localStorage.getItem(VIEW_KEY) || "card";

const els = {
  productForm: document.getElementById("productForm"),
  editingId: document.getElementById("editingId"),
  productUrl: document.getElementById("productUrl"),
  productName: document.getElementById("productName"),
  categorySelect: document.getElementById("categorySelect"),
  newCategoryBtn: document.getElementById("newCategoryBtn"),
  productPrice: document.getElementById("productPrice"),
  productRating: document.getElementById("productRating"),
  imageUrl: document.getElementById("imageUrl"),
  productStatus: document.getElementById("productStatus"),
  productMemo: document.getElementById("productMemo"),
  specFields: document.getElementById("specFields"),
  specInputTemplate: document.getElementById("specInputTemplate"),
  formModeBadge: document.getElementById("formModeBadge"),
  cancelEditBtn: document.getElementById("cancelEditBtn"),
  editSpecsBtn: document.getElementById("editSpecsBtn"),
  searchInput: document.getElementById("searchInput"),
  filterCategory: document.getElementById("filterCategory"),
  filterStatus: document.getElementById("filterStatus"),
  sortSelect: document.getElementById("sortSelect"),
  itemCount: document.getElementById("itemCount"),
  totalPrice: document.getElementById("totalPrice"),
  minPrice: document.getElementById("minPrice"),
  maxPrice: document.getElementById("maxPrice"),
  bestScore: document.getElementById("bestScore"),
  favoriteCount: document.getElementById("favoriteCount"),
  tableHead: document.getElementById("tableHead"),
  tableBody: document.getElementById("tableBody"),
  emptyState: document.getElementById("emptyState"),
  tableWrap: document.getElementById("tableWrap"),
  cardsGrid: document.getElementById("cardsGrid"),
  cardViewBtn: document.getElementById("cardViewBtn"),
  tableViewBtn: document.getElementById("tableViewBtn"),
  groupSelect: document.getElementById("groupSelect"),
  renameGroupBtn: document.getElementById("renameGroupBtn"),
  duplicateGroupBtn: document.getElementById("duplicateGroupBtn"),
  addGroupBtn: document.getElementById("addGroupBtn"),
  categoryDialog: document.getElementById("categoryDialog"),
  categoryForm: document.getElementById("categoryForm"),
  newCategoryName: document.getElementById("newCategoryName"),
  categoryFieldBuilder: document.getElementById("categoryFieldBuilder"),
  addCategoryFieldBtn: document.getElementById("addCategoryFieldBtn"),
  saveCategoryBtn: document.getElementById("saveCategoryBtn"),
  specDialog: document.getElementById("specDialog"),
  specForm: document.getElementById("specForm"),
  specDialogCategory: document.getElementById("specDialogCategory"),
  specFieldBuilder: document.getElementById("specFieldBuilder"),
  addSpecFieldBtn: document.getElementById("addSpecFieldBtn"),
  saveSpecsBtn: document.getElementById("saveSpecsBtn"),
  exportCsvBtn: document.getElementById("exportCsvBtn"),
  exportJsonBtn: document.getElementById("exportJsonBtn"),
  importJsonInput: document.getElementById("importJsonInput"),
  exportJsonBtnInline: document.getElementById("exportJsonBtnInline"),
  importJsonInputInline: document.getElementById("importJsonInputInline"),
  loadSampleDataBtn: document.getElementById("loadSampleDataBtn"),
  resetBtn: document.getElementById("resetBtn")
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return createInitialState();
  }

  try {
    const parsed = JSON.parse(saved);
    return normalizeState(parsed);
  } catch {
    return createInitialState(false);
  }
}

function createInitialState(withSamples = true) {
  const defaultGroupId = crypto.randomUUID();
  const products = withSamples ? sampleProducts(defaultGroupId) : [];
  return {
    categories: structuredClone(defaultCategories),
    categoryFieldSettings: {},
    groups: [
      { id: defaultGroupId, name: "比較一覧1", createdAt: Date.now() }
    ],
    activeGroupId: defaultGroupId,
    products
  };
}

function migratePcSpecNames(specs = []) {
  let next = Array.isArray(specs) && specs.length ? [...specs] : [...PC_SPEC_NAMES];

  if (!next.includes("電源")) {
    const osIndex = next.indexOf("OS");
    next.splice(osIndex >= 0 ? osIndex : next.length, 0, "電源");
  }

  return next.filter((spec, index, array) => spec && array.indexOf(spec) === index);
}

function migrateSelfBuildSpecNames(specs = []) {
  let next = Array.isArray(specs) && specs.length ? [...specs] : [...SELF_BUILD_SPEC_NAMES];
  next = next.filter(spec => spec !== "バッテリー");

  if (!next.includes("マザーボード")) {
    const gpuIndex = next.indexOf("GPU");
    next.splice(gpuIndex >= 0 ? gpuIndex + 1 : 0, 0, "マザーボード");
  }

  if (!next.includes("電源")) {
    const osIndex = next.indexOf("OS");
    next.splice(osIndex >= 0 ? osIndex : next.length, 0, "電源");
  }

  return next.filter((spec, index, array) => spec && array.indexOf(spec) === index);
}

function normalizeState(raw) {
  const fallbackGroupId = raw?.activeGroupId || crypto.randomUUID();
  const rawGroups = Array.isArray(raw?.groups) ? raw.groups : [];
  const groups = rawGroups.length
    ? rawGroups
        .filter(group => group && group.id)
        .map((group, index) => ({
          id: group.id,
          name: group.name || `比較一覧${index + 1}`,
          createdAt: group.createdAt || Date.now() + index
        }))
    : [{ id: fallbackGroupId, name: "比較一覧1", createdAt: Date.now() }];

  const activeId = groups.some(group => group.id === raw?.activeGroupId)
    ? raw.activeGroupId
    : groups[0].id;

  const normalized = {
    categories: { ...structuredClone(defaultCategories), ...(raw?.categories || {}) },
    categoryFieldSettings: raw?.categoryFieldSettings || {},
    groups,
    activeGroupId: activeId,
    products: Array.isArray(raw?.products) ? raw.products : []
  };

  normalized.categories["パソコン"] = migratePcSpecNames(normalized.categories["パソコン"]);
  normalized.categories[SELF_BUILD_CATEGORY] = migrateSelfBuildSpecNames(normalized.categories[SELF_BUILD_CATEGORY]);

  normalized.products = normalized.products.map(product => ({
    ...product,
    groupId: product.groupId || activeId
  }));

  Object.keys(normalized.categories).forEach(category => {
    if (!Array.isArray(normalized.categories[category])) {
      normalized.categories[category] = [];
    }
    normalized.categoryFieldSettings[category] = normalized.categoryFieldSettings[category] || {};
  });

  return normalized;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getActiveGroup() {
  return state.groups.find(group => group.id === activeGroupId) || state.groups[0];
}

function getProductsInActiveGroup() {
  return state.products.filter(product => product.groupId === activeGroupId);
}

function ensureActiveGroup() {
  if (!state.groups.length) {
    const id = crypto.randomUUID();
    state.groups = [{ id, name: "比較一覧1", createdAt: Date.now() }];
  }
  if (!state.groups.some(group => group.id === activeGroupId)) {
    activeGroupId = state.groups[0].id;
  }
  state.activeGroupId = activeGroupId;
}

function createGroupName(base = "比較一覧") {
  let index = state.groups.length + 1;
  let name = `${base}${index}`;
  while (state.groups.some(group => group.name === name)) {
    index += 1;
    name = `${base}${index}`;
  }
  return name;
}

function sampleProducts(groupId) {
  return [
    {
      id: crypto.randomUUID(),
      groupId,
      name: "サンプルPC A",
      url: "https://example.com/pc-a",
      category: "パソコン",
      price: 89800,
      imageUrl: "",
      status: "候補",
      rating: 4,
      specs: {
        CPU: "Core i5",
        GPU: "内蔵GPU",
        メモリ: "16GB",
        ストレージ: "512GB SSD",
        画面サイズ: "14インチ",
        重量: "1.4kg",
        バッテリー: "約10時間",
        電源: "45W ACアダプター",
        OS: "Windows 11",
        保証: "1年"
      },
      memo: "最初から入っているサンプルです。編集・削除できます。",
      createdAt: Date.now() - 1000 * 60 * 60
    },
    {
      id: crypto.randomUUID(),
      groupId,
      name: "サンプルPC B",
      url: "https://example.com/pc-b",
      category: "パソコン",
      price: 124800,
      imageUrl: "",
      status: "本命",
      rating: 5,
      specs: {
        CPU: "Ryzen 7",
        GPU: "内蔵GPU",
        メモリ: "32GB",
        ストレージ: "1TB SSD",
        画面サイズ: "15.6インチ",
        重量: "1.7kg",
        バッテリー: "約12時間",
        電源: "65W ACアダプター",
        OS: "Windows 11",
        保証: "1年"
      },
      memo: "価格は高めだが、メモリとストレージが強い。",
      createdAt: Date.now() - 1000 * 60 * 20
    },
    {
      id: crypto.randomUUID(),
      groupId,
      name: "サンプル自作PC構成",
      url: "",
      category: SELF_BUILD_CATEGORY,
      price: 214600,
      imageUrl: "",
      status: "候補",
      rating: 4,
      specs: {
        CPU: "Core i5-14400",
        GPU: "RTX 4060",
        マザーボード: "B760マザーボード",
        メモリ: "32GB DDR5",
        ストレージ: "1TB NVMe SSD",
        画面サイズ: "なし",
        重量: "未計算",
        電源: "650W 80PLUS Gold 電源",
        OS: "Windows 11 Home",
        保証: "パーツごと"
      },
      partDetails: {
        CPU: { price: 32000, url: "https://example.com/cpu", memo: "" },
        GPU: { price: 48000, url: "https://example.com/gpu", memo: "" },
        マザーボード: { price: 16000, url: "https://example.com/motherboard", memo: "" },
        メモリ: { price: 16000, url: "https://example.com/memory", memo: "" },
        ストレージ: { price: 12000, url: "https://example.com/ssd", memo: "" },
        電源: { price: 12000, url: "https://example.com/psu", memo: "" },
        OS: { price: 18600, url: "https://example.com/os", memo: "" }
      },
      memo: "自作パソコンでは、各パーツごとに価格と商品URLを保存できます。価格欄はパーツ価格の合計になります。",
      createdAt: Date.now() - 1000 * 60 * 10
    }
  ];
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatYen(value) {
  const num = Number(value);
  if (!Number.isFinite(num) || num <= 0) return "-";
  return new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY", maximumFractionDigits: 0 }).format(num);
}

function formatStars(rating) {
  const value = Number(rating) || 0;
  if (!value) return "未評価";
  return "★".repeat(value) + "☆".repeat(5 - value);
}

function isSelfBuildCategory(category) {
  return category === SELF_BUILD_CATEGORY;
}

function getPartDetails(item) {
  return item?.partDetails || {};
}

function calculatePartsTotal(partDetails = {}, specs = null) {
  const details = Array.isArray(specs) && specs.length
    ? specs.map(spec => partDetails?.[spec]).filter(Boolean)
    : Object.values(partDetails || {});
  return details.reduce((sum, detail) => sum + (Number(detail?.price) || 0), 0);
}

function getPartDetailsSearchText(item) {
  return Object.values(getPartDetails(item))
    .map(detail => [detail?.price, detail?.url, detail?.memo].filter(Boolean).join(" "))
    .join(" ");
}

function getSpecExportValue(item, spec) {
  const value = item.specs?.[spec] || "";
  if (!isSelfBuildCategory(item.category)) return value;
  const detail = getPartDetails(item)[spec] || {};
  const extra = [];
  if (detail.price) extra.push(formatYen(detail.price));
  if (detail.url) extra.push(detail.url);
  if (detail.memo) extra.push(detail.memo);
  return [value, ...extra].filter(Boolean).join(" / ");
}

function renderSpecCell(item, spec) {
  const value = item.specs?.[spec] || "-";
  if (!isSelfBuildCategory(item.category)) return escapeHtml(value);

  const detail = getPartDetails(item)[spec] || {};
  const price = detail.price ? `<small class="part-inline-price">${formatYen(detail.price)}</small>` : "";
  const link = detail.url
    ? `<a class="product-link part-link" href="${escapeHtml(detail.url)}" target="_blank" rel="noreferrer">URL</a>`
    : "";
  const memo = detail.memo ? `<small class="part-inline-memo">${escapeHtml(detail.memo)}</small>` : "";

  return `
    <div class="part-cell">
      <strong>${escapeHtml(value)}</strong>
      <span>${price}${link}</span>
      ${memo}
    </div>
  `;
}

function parseSpecsText(text) {
  return text
    .split(/[、,\n]/)
    .map(s => s.trim())
    .filter(Boolean)
    .filter((v, i, arr) => arr.indexOf(v) === i);
}


function parseOptionText(text) {
  return String(text || "")
    .split(/[、,\n]/)
    .map(value => value.trim())
    .filter(Boolean)
    .filter((value, index, array) => array.indexOf(value) === index);
}

function parseTieredText(text) {
  return String(text || "")
    .split(/\n+/)
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => line.split(/>|＞/).map(part => part.trim()).filter(Boolean))
    .filter(path => path.length > 0);
}

function stringifyTieredPaths(paths = []) {
  return paths.map(path => path.join(" > ")).join("\n");
}

function getCategorySettings(category) {
  if (!state.categoryFieldSettings) state.categoryFieldSettings = {};
  if (!state.categoryFieldSettings[category]) state.categoryFieldSettings[category] = {};
  return state.categoryFieldSettings[category];
}

function getFieldSetting(category, specName) {
  return getCategorySettings(category)[specName] || { mode: "auto" };
}

function createTreeFromPaths(paths = []) {
  const root = [];

  paths.forEach(path => {
    let nodes = root;
    path.forEach((label, index) => {
      let node = nodes.find(item => item.label === label);
      if (!node) {
        node = { label };
        nodes.push(node);
      }
      if (index === path.length - 1) {
        node.value = label;
      } else {
        node.children = node.children || [];
        nodes = node.children;
      }
    });
  });

  return root;
}

function normalizeFieldSetting(setting = {}) {
  const mode = setting.mode || "auto";
  return {
    mode,
    options: Array.isArray(setting.options) ? setting.options : parseOptionText(setting.options || ""),
    labels: Array.isArray(setting.labels) ? setting.labels : parseOptionText(setting.labels || ""),
    paths: Array.isArray(setting.paths) ? setting.paths : parseTieredText(setting.paths || "")
  };
}

function createBuilderRow(container, field = {}) {
  const row = document.createElement("div");
  row.className = "field-builder-row";

  const setting = normalizeFieldSetting(field);
  const optionsText = setting.options.join("\n");
  const labelsText = setting.labels.join(", ");
  const pathsText = stringifyTieredPaths(setting.paths);

  row.innerHTML = `
    <div class="field-builder-top">
      <label>
        項目名
        <input class="builder-field-name" type="text" placeholder="例：CPU" value="${escapeHtml(field.name || "")}">
      </label>
      <label>
        入力方式
        <select class="builder-field-mode">
          <option value="auto" ${setting.mode === "auto" ? "selected" : ""}>自動（既存候補があれば使う）</option>
          <option value="free" ${setting.mode === "free" ? "selected" : ""}>自由入力</option>
          <option value="select" ${setting.mode === "select" ? "selected" : ""}>候補から選択</option>
          <option value="tiered" ${setting.mode === "tiered" ? "selected" : ""}>段階選択</option>
        </select>
      </label>
      <div class="builder-row-actions">
        <button type="button" class="secondary compact builder-move-up-btn" title="上に移動">↑</button>
        <button type="button" class="secondary compact builder-move-down-btn" title="下に移動">↓</button>
        <button type="button" class="danger ghost compact builder-remove-btn">削除</button>
      </div>
    </div>
    <label class="builder-options-block">
      選択候補
      <textarea class="builder-options" rows="3" placeholder="例：小型\n標準\n大型">${escapeHtml(optionsText)}</textarea>
      <small>「候補から選択」の時に使います。カンマ区切り・改行のどちらでもOKです。</small>
    </label>
    <div class="builder-tiered-block">
      <label>
        段階名
        <input class="builder-tiered-labels" type="text" placeholder="例：メーカー, シリーズ, 候補" value="${escapeHtml(labelsText)}">
        <small>空欄なら「分類・シリーズ・候補」のように自動表示します。</small>
      </label>
      <label>
        段階候補
        <textarea class="builder-tiered-paths" rows="5" placeholder="例：NVIDIA > RTX 40シリーズ > RTX 4060\nNVIDIA > RTX 40シリーズ > RTX 4070\nAMD > RX 7000シリーズ > RX 7600">${escapeHtml(pathsText)}</textarea>
        <small>1行に1候補を書き、階層は「&gt;」で区切ります。</small>
      </label>
    </div>
  `;

  const modeSelect = row.querySelector(".builder-field-mode");
  const moveUpBtn = row.querySelector(".builder-move-up-btn");
  const moveDownBtn = row.querySelector(".builder-move-down-btn");
  const removeBtn = row.querySelector(".builder-remove-btn");

  function updateVisibility() {
    const mode = modeSelect.value;
    row.querySelector(".builder-options-block").classList.toggle("hidden", mode !== "select");
    row.querySelector(".builder-tiered-block").classList.toggle("hidden", mode !== "tiered");
  }

  modeSelect.addEventListener("change", updateVisibility);
  moveUpBtn.addEventListener("click", () => {
    const previous = row.previousElementSibling;
    if (previous) container.insertBefore(row, previous);
  });
  moveDownBtn.addEventListener("click", () => {
    const next = row.nextElementSibling;
    if (next) container.insertBefore(next, row);
  });
  removeBtn.addEventListener("click", () => {
    if (container.querySelectorAll(".field-builder-row").length <= 1) {
      alert("比較項目は1つ以上必要です。");
      return;
    }
    row.remove();
  });

  container.appendChild(row);
  updateVisibility();
  return row;
}

function setupBuilder(container, specs = [], settings = {}, fallbackRows = ["項目1", "項目2", "項目3"]) {
  container.innerHTML = "";
  const names = specs.length ? specs : fallbackRows;
  names.forEach(name => {
    const mode = settings[name]?.mode || ((tieredSpecOptions[name] || flatSpecOptions[name]) ? "auto" : "free");
    const setting = normalizeFieldSetting(settings[name] || { mode });
    createBuilderRow(container, { name, ...setting });
  });
}

function readBuilder(container) {
  const specs = [];
  const settings = {};

  container.querySelectorAll(".field-builder-row").forEach(row => {
    const name = row.querySelector(".builder-field-name")?.value.trim();
    if (!name || specs.includes(name)) return;

    const mode = row.querySelector(".builder-field-mode")?.value || "free";
    const options = parseOptionText(row.querySelector(".builder-options")?.value || "");
    const labels = parseOptionText(row.querySelector(".builder-tiered-labels")?.value || "");
    const paths = parseTieredText(row.querySelector(".builder-tiered-paths")?.value || "");

    specs.push(name);

    if (mode === "auto") return;

    settings[name] = { mode };
    if (mode === "select") settings[name].options = options;
    if (mode === "tiered") {
      settings[name].labels = labels;
      settings[name].paths = paths;
    }
  });

  return { specs, settings };
}

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj || {}, key);
}

function mergeCurrentSpecs(existingSpecs = {}, currentSpecs = {}) {
  return { ...existingSpecs, ...currentSpecs };
}

function mergeCurrentPartDetails(existingDetails = {}, currentDetails = {}, activeSpecs = []) {
  const merged = { ...existingDetails };
  activeSpecs.forEach(spec => {
    const detail = currentDetails[spec] || { price: 0, url: "", memo: "" };
    if (detail.price || detail.url || detail.memo) {
      merged[spec] = detail;
    } else {
      delete merged[spec];
    }
  });
  return merged;
}

function remapObjectBySpecOrder(obj = {}, oldSpecs = [], newSpecs = []) {
  const next = { ...(obj || {}) };
  newSpecs.forEach((newName, index) => {
    const oldName = oldSpecs[index];
    if (!oldName || oldName === newName) return;
    if (newSpecs.includes(oldName)) return;
    if (hasOwn(next, oldName) && !hasOwn(next, newName)) {
      next[newName] = next[oldName];
    }
  });
  return next;
}

function remapProductsForCategory(category, oldSpecs = [], newSpecs = []) {
  state.products = state.products.map(item => {
    if (item.category !== category) return item;
    const nextItem = { ...item };
    nextItem.specs = remapObjectBySpecOrder(item.specs || {}, oldSpecs, newSpecs);
    if (isSelfBuildCategory(category)) {
      nextItem.partDetails = remapObjectBySpecOrder(item.partDetails || {}, oldSpecs, newSpecs);
    }
    return nextItem;
  });
}

function clamp(num, min, max) {
  return Math.min(max, Math.max(min, num));
}

function extractNumber(text) {
  const match = String(text || "").replace(/,/g, "").match(/\d+(\.\d+)?/);
  return match ? Number(match[0]) : 0;
}

function extractGb(text) {
  const value = String(text || "").toLowerCase();
  const number = extractNumber(value);
  if (!number) return 0;
  if (value.includes("tb")) return number * 1024;
  return number;
}

function getScoreLabel(score) {
  if (score >= 85) return "かなり有力";
  if (score >= 70) return "良い候補";
  if (score >= 50) return "普通";
  return "要確認";
}

function getCurrentSpecs() {
  const category = els.categorySelect.value;
  return state.categories[category] || [];
}

function getComparisonItems(item, pool = getProductsInActiveGroup()) {
  const categoryItems = pool.filter(product => product.category === item.category && Number(product.price) > 0);
  return categoryItems.length ? categoryItems : pool.filter(product => Number(product.price) > 0);
}

function calculateScore(item, pool = getProductsInActiveGroup()) {
  const price = Number(item.price) || 0;
  const comparisonItems = getComparisonItems(item, pool);
  const prices = comparisonItems.map(product => Number(product.price)).filter(priceValue => priceValue > 0);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  let pricePart = 20;
  if (price > 0 && prices.length > 1 && maxPrice > minPrice) {
    pricePart = 20 + ((maxPrice - price) / (maxPrice - minPrice)) * 35;
  } else if (price > 0) {
    pricePart = 38;
  }

  const rating = Number(item.rating) || 0;
  const ratingPart = rating ? (rating / 5) * 25 : 13;

  const specNames = state.categories[item.category] || [];
  const filledSpecs = specNames.filter(spec => String(item.specs?.[spec] || "").trim()).length;
  const specPart = specNames.length ? (filledSpecs / specNames.length) * 12 : 6;

  let bonus = 0;
  if (item.category === "パソコン" || isSelfBuildCategory(item.category)) {
    const memoryGb = extractGb(item.specs?.["メモリ"]);
    const storageGb = extractGb(item.specs?.["ストレージ"]);
    const weightKg = extractNumber(item.specs?.["重量"]);
    const batteryHour = item.category === "パソコン" ? extractNumber(item.specs?.["バッテリー"]) : 0;

    if (memoryGb >= 32) bonus += 4;
    else if (memoryGb >= 16) bonus += 3;
    else if (memoryGb >= 8) bonus += 1.5;

    if (storageGb >= 1024) bonus += 2;
    else if (storageGb >= 512) bonus += 1.5;
    else if (storageGb >= 256) bonus += 0.8;

    if (weightKg > 0 && weightKg <= 1.3) bonus += 2;
    else if (weightKg > 0 && weightKg <= 1.6) bonus += 1;

    if (batteryHour >= 10) bonus += 1;
  }

  return Math.round(clamp(pricePart + ratingPart + specPart + bonus, 0, 100));
}

function getScoreClass(score) {
  if (score >= 85) return "excellent";
  if (score >= 70) return "good";
  if (score >= 50) return "normal";
  return "low";
}

function renderCategoryOptions() {
  const names = Object.keys(state.categories);
  const currentCategory = els.categorySelect.value;
  els.categorySelect.innerHTML = names.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`).join("");
  if (names.includes(currentCategory)) {
    els.categorySelect.value = currentCategory;
  }

  els.filterCategory.innerHTML = [
    `<option value="all">すべてのジャンル</option>`,
    ...names.map(name => `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`)
  ].join("");

  if (!names.includes(filters.category)) filters.category = "all";
  els.filterCategory.value = filters.category;
}

function renderGroupOptions() {
  ensureActiveGroup();
  if (!els.groupSelect) return;
  els.groupSelect.innerHTML = state.groups
    .map(group => `<option value="${escapeHtml(group.id)}">${escapeHtml(group.name)}</option>`)
    .join("");
  els.groupSelect.value = activeGroupId;
}


function makeDatalistId(category, specName) {
  const base = `${category}-${specName}`.replace(/[^a-zA-Z0-9ぁ-んァ-ン一-龥]/g, "-");
  return `options-${base}`;
}

function getFlatSpecOptions(category, specName) {
  const flat = flatSpecOptions[specName] || [];
  const fromTree = tieredSpecOptions[specName] ? flattenOptionTree(tieredSpecOptions[specName].nodes) : [];
  return [...new Set([...fromTree, ...flat])];
}

function flattenOptionTree(nodes = []) {
  const result = [];
  nodes.forEach(node => {
    if (node.value || !node.children?.length) result.push(node.value || node.label);
    if (node.children?.length) result.push(...flattenOptionTree(node.children));
  });
  return [...new Set(result.filter(Boolean))];
}

function createOptionHelper(hasTiered, options) {
  const helper = document.createElement("small");
  helper.className = "option-helper";
  if (hasTiered) {
    helper.textContent = "上から順に選ぶと入力欄に反映されます。最後の入力欄は自由に修正できます。";
  } else {
    helper.textContent = options.length ? "候補から選択、またはそのまま自由入力できます。" : "自由入力できます。";
  }
  return helper;
}

function findPathInTree(nodes = [], targetValue) {
  const target = String(targetValue || "").trim();
  if (!target) return [];

  for (const node of nodes) {
    const nodeValue = String(node.value || node.label || "").trim();
    if (nodeValue === target) return [node];

    const childPath = findPathInTree(node.children || [], target);
    if (childPath.length) return [node, ...childPath];
  }

  return [];
}

function getSelectedNode(select) {
  const raw = select.value;
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function setSelectOptions(select, nodes, label, selectedNode = null) {
  const list = Array.isArray(nodes) ? nodes : [];
  select.innerHTML = [
    `<option value="">${escapeHtml(label)}</option>`,
    ...list.map(node => {
      const value = escapeHtml(JSON.stringify({ label: node.label, value: node.value || "" }));
      const selected = selectedNode && selectedNode.label === node.label && (selectedNode.value || "") === (node.value || "") ? " selected" : "";
      return `<option value="${value}"${selected}>${escapeHtml(node.label)}</option>`;
    })
  ].join("");

  select.classList.toggle("hidden", !list.length);
  select.disabled = !list.length;
}

function findNodeByDescriptor(nodes = [], descriptor) {
  if (!descriptor) return null;
  return nodes.find(node => node.label === descriptor.label && (node.value || "") === (descriptor.value || "")) || null;
}

function createTieredSpecInput(category, specName, currentValue, customConfig = null) {
  const config = customConfig || tieredSpecOptions[specName];
  const label = document.createElement("label");
  label.className = "spec-field tiered-spec-field";
  label.dataset.spec = specName;

  const title = document.createElement("span");
  title.textContent = specName;
  label.appendChild(title);

  const picker = document.createElement("div");
  picker.className = "tiered-picker";

  const controls = document.createElement("div");
  controls.className = "tiered-controls";
  picker.appendChild(controls);

  const levelLabels = config.labels || ["種類", "シリーズ", "世代", "候補"];
  const maxLevels = Math.max(4, levelLabels.length);
  const selects = Array.from({ length: maxLevels }, (_, index) => {
    const select = document.createElement("select");
    select.dataset.level = String(index);
    select.title = `${specName}：${levelLabels[index] || `候補${index + 1}`}`;
    controls.appendChild(select);
    return select;
  });

  const finalInput = document.createElement("input");
  finalInput.type = "text";
  finalInput.name = specName;
  finalInput.value = currentValue || "";
  finalInput.placeholder = `${specName}の最終入力値。候補にない場合はここに直接入力`;
  finalInput.className = "tiered-final-input";
  picker.appendChild(finalInput);

  function getNodesForLevel(level) {
    let nodes = config.nodes;
    for (let index = 0; index < level; index += 1) {
      const selected = getSelectedNode(selects[index]);
      const matched = findNodeByDescriptor(nodes, selected);
      nodes = matched?.children || [];
    }
    return nodes;
  }

  function updateLevels(changedLevel = -1) {
    for (let level = changedLevel + 1; level < selects.length; level += 1) {
      const nodes = getNodesForLevel(level);
      setSelectOptions(selects[level], nodes, levelLabels[level] || `候補${level + 1}`);
    }

    let nodes = config.nodes;
    let lastSelected = null;
    for (const select of selects) {
      const selected = getSelectedNode(select);
      if (!selected) break;
      const matched = findNodeByDescriptor(nodes, selected);
      if (!matched) break;
      lastSelected = matched;
      nodes = matched.children || [];
    }

    if (lastSelected) {
      finalInput.value = lastSelected.value || lastSelected.label;
    }
  }

  function applyInitialValue() {
    const path = findPathInTree(config.nodes, currentValue);
    let nodes = config.nodes;
    selects.forEach((select, index) => {
      const selectedNode = path[index] || null;
      setSelectOptions(select, nodes, levelLabels[index] || `候補${index + 1}`, selectedNode);
      nodes = selectedNode?.children || [];
    });
  }

  selects.forEach((select, index) => {
    select.addEventListener("change", () => updateLevels(index));
  });

  applyInitialValue();
  label.appendChild(picker);
  label.appendChild(createOptionHelper(true, []));
  return label;
}

function createFlatSpecInput(category, specName, currentValue, forcedOptions = null, forceFree = false) {
  const fragment = els.specInputTemplate.content.cloneNode(true);
  const label = fragment.querySelector("label");
  const span = fragment.querySelector("span");
  const input = fragment.querySelector("input");
  const options = forceFree ? [] : (forcedOptions ?? getFlatSpecOptions(category, specName));

  span.textContent = specName;
  input.name = specName;
  input.value = currentValue || "";
  input.placeholder = options.length ? `${specName}を候補から選択` : `${specName}を入力`;
  label.dataset.spec = specName;

  if (options.length) {
    const listId = makeDatalistId(category, specName);
    const datalist = document.createElement("datalist");
    datalist.id = listId;
    datalist.innerHTML = options.map(option => `<option value="${escapeHtml(option)}"></option>`).join("");
    input.setAttribute("list", listId);
    label.appendChild(datalist);
  }

  label.appendChild(createOptionHelper(false, options));
  return label;
}

function createSelectSpecInput(category, specName, currentValue, setting) {
  const label = document.createElement("label");
  label.className = "spec-field selectable-spec-field";
  label.dataset.spec = specName;

  const title = document.createElement("span");
  title.textContent = specName;
  label.appendChild(title);

  const options = normalizeFieldSetting(setting).options;
  const select = document.createElement("select");
  select.innerHTML = [
    `<option value="">候補から選択</option>`,
    ...options.map(option => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`)
  ].join("");

  const finalInput = document.createElement("input");
  finalInput.type = "text";
  finalInput.name = specName;
  finalInput.value = currentValue || "";
  finalInput.placeholder = `${specName}の最終入力値。必要なら自由に修正`;

  if (currentValue && options.includes(currentValue)) {
    select.value = currentValue;
  }

  select.addEventListener("change", () => {
    if (select.value) finalInput.value = select.value;
  });

  label.appendChild(select);
  label.appendChild(finalInput);
  label.appendChild(createOptionHelper(false, options));
  return label;
}

function createCustomTieredSpecInput(category, specName, currentValue, setting) {
  const normalized = normalizeFieldSetting(setting);
  const labels = normalized.labels.length ? normalized.labels : ["分類", "シリーズ", "候補", "詳細"];
  const nodes = createTreeFromPaths(normalized.paths);

  if (!nodes.length) {
    return createFlatSpecInput(category, specName, currentValue, []);
  }

  return createTieredSpecInput(category, specName, currentValue, { labels, nodes });
}

function createSelfBuildPartField(category, specName, currentValue, detail = {}) {
  const row = document.createElement("div");
  row.className = "self-build-part-field";
  row.dataset.spec = specName;

  const partTitle = document.createElement("div");
  partTitle.className = "self-build-part-title";
  partTitle.innerHTML = `<strong>${escapeHtml(specName)}</strong><span>パーツ名・価格・商品URLを保存</span>`;

  const specInput = createSpecField(category, specName, currentValue);
  specInput.classList.add("self-build-main-input");

  const metaGrid = document.createElement("div");
  metaGrid.className = "self-build-meta-grid";
  metaGrid.innerHTML = `
    <label>
      パーツ価格（税込）
      <input class="part-price-input" type="number" min="0" step="1" placeholder="例：32800" value="${escapeHtml(detail.price || "")}" inputmode="numeric">
    </label>
    <label>
      商品URL
      <input class="part-url-input" type="url" placeholder="https://example.com/item" value="${escapeHtml(detail.url || "")}">
    </label>
    <label class="self-build-part-memo-label">
      パーツメモ 任意
      <input class="part-memo-input" type="text" placeholder="中古、新品、保証、販売店など" value="${escapeHtml(detail.memo || "")}">
    </label>
  `;

  metaGrid.querySelector(".part-price-input").addEventListener("input", updateSelfBuildTotal);

  row.append(partTitle, specInput, metaGrid);
  return row;
}

function readPartDetails() {
  if (!isSelfBuildCategory(els.categorySelect.value)) return {};

  const details = {};
  els.specFields.querySelectorAll(".self-build-part-field").forEach(row => {
    const spec = row.dataset.spec;
    if (!spec) return;

    const price = Number(row.querySelector(".part-price-input")?.value) || 0;
    const url = row.querySelector(".part-url-input")?.value.trim() || "";
    const memo = row.querySelector(".part-memo-input")?.value.trim() || "";

    details[spec] = { price, url, memo };
  });

  return details;
}

function updateSelfBuildTotal() {
  const total = calculatePartsTotal(readPartDetails());
  const totalEl = document.getElementById("selfBuildTotal");
  if (totalEl) totalEl.textContent = formatYen(total);
  if (isSelfBuildCategory(els.categorySelect.value)) {
    els.productPrice.value = total || "";
  }
}

function createSelfBuildFields(category, values = {}, partDetails = {}) {
  const fragment = document.createDocumentFragment();

  const helper = document.createElement("div");
  helper.className = "self-build-summary";
  helper.innerHTML = `
    <div>
      <strong>自作パソコン構成</strong>
      <p>各パーツごとに候補・価格・商品URLを保存できます。パーツ価格の合計は上の価格欄に自動反映されます。</p>
    </div>
    <div class="self-build-total-box">
      <span>パーツ合計</span>
      <strong id="selfBuildTotal">${formatYen(calculatePartsTotal(partDetails, getCurrentSpecs()))}</strong>
    </div>
  `;
  fragment.appendChild(helper);

  getCurrentSpecs().forEach(specName => {
    fragment.appendChild(createSelfBuildPartField(category, specName, values[specName] || "", partDetails[specName] || {}));
  });

  return fragment;
}

function createSpecField(category, specName, currentValue) {
  const setting = normalizeFieldSetting(getFieldSetting(category, specName));

  if (setting.mode === "free") {
    return createFlatSpecInput(category, specName, currentValue, [], true);
  }

  if (setting.mode === "select") {
    return createSelectSpecInput(category, specName, currentValue, setting);
  }

  if (setting.mode === "tiered") {
    return createCustomTieredSpecInput(category, specName, currentValue, setting);
  }

  if (tieredSpecOptions[specName]) {
    return createTieredSpecInput(category, specName, currentValue);
  }

  return createFlatSpecInput(category, specName, currentValue);
}

function renderSpecFields(values = {}, partDetails = {}) {
  els.specFields.innerHTML = "";
  const specs = getCurrentSpecs();
  const category = els.categorySelect.value;
  els.specFields.classList.toggle("self-build-spec-grid", isSelfBuildCategory(category));

  if (isSelfBuildCategory(category)) {
    els.specFields.appendChild(createSelfBuildFields(category, values, partDetails));
    updateSelfBuildTotal();
    return;
  }

  specs.forEach(specName => {
    const currentValue = values[specName] || "";
    els.specFields.appendChild(createSpecField(category, specName, currentValue));
  });
}

function readSpecValues() {
  const specs = {};
  els.specFields.querySelectorAll("input").forEach(input => {
    if (!input.name) return;
    specs[input.name] = input.value.trim();
  });
  return specs;
}

function clearForm() {
  els.productForm.reset();
  els.editingId.value = "";
  els.formModeBadge.textContent = "新規登録";
  els.cancelEditBtn.classList.add("hidden");
  renderSpecFields();
}

function handleSubmit(event) {
  event.preventDefault();

  const category = els.categorySelect.value;
  const specs = readSpecValues();
  const rawPartDetails = readPartDetails();
  const existingProduct = els.editingId.value
    ? state.products.find(item => item.id === els.editingId.value)
    : null;
  const activeSpecs = state.categories[category] || [];
  const partDetails = isSelfBuildCategory(category)
    ? mergeCurrentPartDetails(existingProduct?.partDetails || {}, rawPartDetails, activeSpecs)
    : undefined;
  const partsTotal = calculatePartsTotal(partDetails, activeSpecs);
  const product = {
    id: els.editingId.value || crypto.randomUUID(),
    groupId: existingProduct?.groupId || activeGroupId,
    name: els.productName.value.trim(),
    url: els.productUrl.value.trim(),
    category,
    price: isSelfBuildCategory(category) && partsTotal > 0 ? partsTotal : Number(els.productPrice.value) || 0,
    rating: Number(els.productRating.value) || 0,
    imageUrl: els.imageUrl.value.trim(),
    status: els.productStatus.value,
    specs: existingProduct ? mergeCurrentSpecs(existingProduct.specs || {}, specs) : specs,
    partDetails,
    memo: els.productMemo.value.trim(),
    createdAt: existingProduct?.createdAt || Date.now()
  };

  if (!product.name) {
    alert("商品名を入力してください。");
    return;
  }

  const index = state.products.findIndex(item => item.id === product.id);
  if (index >= 0) {
    state.products[index] = product;
  } else {
    state.products.unshift(product);
  }

  saveState();
  clearForm();
  renderAll();
}

function getFilteredProducts() {
  const keyword = filters.search.trim().toLowerCase();
  let items = getProductsInActiveGroup();

  if (filters.category !== "all") items = items.filter(item => item.category === filters.category);
  if (filters.status !== "all") items = items.filter(item => item.status === filters.status);

  if (keyword) {
    items = items.filter(item => {
      const haystack = [
        item.name,
        item.url,
        item.category,
        item.status,
        item.memo,
        getPartDetailsSearchText(item),
        ...Object.values(item.specs || {})
      ].join(" ").toLowerCase();
      return haystack.includes(keyword);
    });
  }

  items.sort((a, b) => {
    switch (filters.sort) {
      case "scoreDesc":
        return calculateScore(b, items) - calculateScore(a, items);
      case "priceAsc":
        return (a.price || Infinity) - (b.price || Infinity);
      case "priceDesc":
        return (b.price || 0) - (a.price || 0);
      case "nameAsc":
        return a.name.localeCompare(b.name, "ja");
      case "statusAsc":
        return a.status.localeCompare(b.status, "ja");
      case "createdDesc":
      default:
        return b.createdAt - a.createdAt;
    }
  });

  return items;
}

function getVisibleSpecColumns(items) {
  const categories = filters.category === "all"
    ? [...new Set(items.map(item => item.category))]
    : [filters.category];

  const columns = [];
  categories.forEach(category => {
    (state.categories[category] || []).forEach(spec => {
      if (!columns.includes(spec)) columns.push(spec);
    });
  });

  return columns.slice(0, 12);
}

function renderSummary(items) {
  els.itemCount.textContent = `${items.length}件`;
  const total = items.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
  const prices = items.map(item => Number(item.price) || 0).filter(price => price > 0);
  const min = prices.length ? Math.min(...prices) : 0;
  const max = prices.length ? Math.max(...prices) : 0;
  const best = items.length ? Math.max(...items.map(item => calculateScore(item, items))) : 0;
  const favorites = items.filter(item => item.status === "本命").length;

  els.totalPrice.textContent = `合計 ${formatYen(total)}`;
  els.minPrice.textContent = formatYen(min);
  els.maxPrice.textContent = formatYen(max);
  els.bestScore.textContent = best ? `${best}点` : "-";
  els.favoriteCount.textContent = `${favorites}件`;
}

function renderViewShell(items) {
  const hasItems = items.length > 0;
  els.emptyState.classList.toggle("hidden", hasItems);
  els.cardsGrid.classList.toggle("hidden", !hasItems || viewMode !== "card");
  els.tableWrap.classList.toggle("hidden", !hasItems || viewMode !== "table");
  els.cardViewBtn.classList.toggle("active", viewMode === "card");
  els.tableViewBtn.classList.toggle("active", viewMode === "table");
}

function renderTable(items = getFilteredProducts()) {
  const specColumns = getVisibleSpecColumns(items);
  const headers = ["商品", "コスパ", "ジャンル", "価格", "評価", "状態", ...specColumns, "メモ", "操作"];
  els.tableHead.innerHTML = `<tr>${headers.map(head => `<th>${escapeHtml(head)}</th>`).join("")}</tr>`;

  els.tableBody.innerHTML = items.map(item => {
    const score = calculateScore(item, items);
    const scoreClass = getScoreClass(score);
    const image = item.imageUrl
      ? `<img class="thumb" src="${escapeHtml(item.imageUrl)}" alt="" onerror="this.style.display='none'">`
      : `<div class="thumb placeholder-thumb" aria-hidden="true">比</div>`;

    const link = item.url
      ? `<a class="product-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">ページを開く</a>`
      : `<span class="muted">URLなし</span>`;

    const specCells = specColumns.map(spec => `<td>${renderSpecCell(item, spec)}</td>`).join("");

    return `
      <tr>
        <td>
          <div class="product-cell">
            ${image}
            <div>
              <div class="product-name">${escapeHtml(item.name)}</div>
              ${link}
            </div>
          </div>
        </td>
        <td><span class="score-badge ${scoreClass}">${score}点</span></td>
        <td>${escapeHtml(item.category)}</td>
        <td class="price">${formatYen(item.price)}</td>
        <td class="rating-cell">${escapeHtml(formatStars(item.rating))}</td>
        <td><span class="status-pill" data-status="${escapeHtml(item.status)}">${escapeHtml(item.status)}</span></td>
        ${specCells}
        <td class="memo-cell">${escapeHtml(item.memo || "-")}</td>
        <td>
          <div class="row-actions">
            <button class="secondary" data-action="edit" data-id="${item.id}">編集</button>
            <button class="secondary" data-action="copy" data-id="${item.id}">複製</button>
            <button class="danger ghost" data-action="delete" data-id="${item.id}">削除</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function renderCards(items = getFilteredProducts()) {
  els.cardsGrid.innerHTML = items.map(item => {
    const score = calculateScore(item, items);
    const scoreClass = getScoreClass(score);
    const specs = state.categories[item.category] || [];
    const filledSpecChips = specs
      .filter(spec => String(item.specs?.[spec] || "").trim())
      .slice(0, 6)
      .map(spec => {
        const detail = getPartDetails(item)[spec] || {};
        const partMeta = isSelfBuildCategory(item.category) && (detail.price || detail.url)
          ? `<small class="part-chip-meta">${detail.price ? formatYen(detail.price) : ""}${detail.price && detail.url ? " ・ " : ""}${detail.url ? "URLあり" : ""}</small>`
          : "";
        return `
          <li>
            <span>${escapeHtml(spec)}</span>
            <strong>${escapeHtml(item.specs?.[spec])}</strong>
            ${partMeta}
          </li>
        `;
      }).join("");

    const image = item.imageUrl
      ? `<img class="card-image" src="${escapeHtml(item.imageUrl)}" alt="" onerror="this.closest('.card-image-wrap').classList.add('no-image'); this.remove();">`
      : "";

    const link = item.url
      ? `<a class="product-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">商品ページを開く</a>`
      : `<span class="muted">URLなし</span>`;

    return `
      <article class="product-card">
        <div class="card-top">
          <div class="card-image-wrap ${item.imageUrl ? "" : "no-image"}">
            ${image || "<span>比</span>"}
          </div>
          <div class="card-main">
            <div class="card-meta">
              <span class="status-pill" data-status="${escapeHtml(item.status)}">${escapeHtml(item.status)}</span>
              <span class="category-chip">${escapeHtml(item.category)}</span>
            </div>
            <h3>${escapeHtml(item.name)}</h3>
            <div class="card-price-row">
              <strong class="card-price">${formatYen(item.price)}</strong>
              <span class="rating-chip">${escapeHtml(formatStars(item.rating))}</span>
            </div>
            ${link}
          </div>
          <div class="score-ring ${scoreClass}" style="--score:${score}">
            <strong>${score}</strong>
            <span>点</span>
          </div>
        </div>

        <div class="score-note">${escapeHtml(getScoreLabel(score))}</div>

        <ul class="spec-chip-list">
          ${filledSpecChips || "<li><span>比較項目</span><strong>未入力</strong></li>"}
        </ul>

        ${item.memo ? `<p class="card-memo">${escapeHtml(item.memo)}</p>` : ""}

        <div class="card-actions">
          <button class="secondary" data-action="edit" data-id="${item.id}">編集</button>
          <button class="secondary" data-action="copy" data-id="${item.id}">複製</button>
          <button class="danger ghost" data-action="delete" data-id="${item.id}">削除</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderProducts() {
  const items = getFilteredProducts();
  renderSummary(items);
  renderViewShell(items);
  renderTable(items);
  renderCards(items);
}

function editProduct(id) {
  const item = state.products.find(product => product.id === id);
  if (!item) return;

  els.editingId.value = item.id;
  els.productUrl.value = item.url || "";
  els.productName.value = item.name || "";
  els.categorySelect.value = item.category;
  els.productPrice.value = item.price || "";
  els.productRating.value = item.rating || "";
  els.imageUrl.value = item.imageUrl || "";
  els.productStatus.value = item.status || "候補";
  els.productMemo.value = item.memo || "";
  renderSpecFields(item.specs || {}, getPartDetails(item));
  els.formModeBadge.textContent = "編集中";
  els.cancelEditBtn.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function copyProduct(id) {
  const item = state.products.find(product => product.id === id);
  if (!item) return;
  const copied = {
    ...structuredClone(item),
    id: crypto.randomUUID(),
    groupId: activeGroupId,
    name: `${item.name} コピー`,
    createdAt: Date.now()
  };
  state.products.unshift(copied);
  saveState();
  renderAll();
}

function deleteProduct(id) {
  const item = state.products.find(product => product.id === id);
  if (!item) return;
  if (!confirm(`「${item.name}」を削除しますか？`)) return;
  state.products = state.products.filter(product => product.id !== id);
  saveState();
  renderAll();
}

function addCategory() {
  const name = els.newCategoryName.value.trim();
  const { specs, settings } = readBuilder(els.categoryFieldBuilder);

  if (!name) {
    alert("ジャンル名を入力してください。");
    return;
  }

  if (state.categories[name]) {
    alert("同じジャンル名がすでにあります。");
    return;
  }

  if (!specs.length) {
    alert("比較項目を1つ以上入力してください。");
    return;
  }

  state.categories[name] = specs;
  getCategorySettings(name);
  state.categoryFieldSettings[name] = settings;
  saveState();
  els.categoryDialog.close();
  els.categoryForm.reset();
  setupBuilder(els.categoryFieldBuilder, [], {}, ["項目1", "項目2", "項目3"]);
  renderCategoryOptions();
  els.categorySelect.value = name;
  renderSpecFields();
}

function saveSpecsForCurrentCategory() {
  const category = els.categorySelect.value;
  const oldSpecs = state.categories[category] || [];
  const formSpecsBefore = readSpecValues();
  const formPartsBefore = readPartDetails();
  const { specs, settings } = readBuilder(els.specFieldBuilder);
  if (!specs.length) {
    alert("比較項目を1つ以上入力してください。");
    return;
  }
  const nextSpecs = isSelfBuildCategory(category) ? migrateSelfBuildSpecNames(specs) : specs;
  const formSpecsAfter = remapObjectBySpecOrder(formSpecsBefore, oldSpecs, nextSpecs);
  const formPartsAfter = isSelfBuildCategory(category)
    ? remapObjectBySpecOrder(formPartsBefore, oldSpecs, nextSpecs)
    : {};

  remapProductsForCategory(category, oldSpecs, nextSpecs);
  state.categories[category] = nextSpecs;
  state.categoryFieldSettings[category] = settings;
  saveState();
  els.specDialog.close();
  renderAll();
  els.categorySelect.value = category;
  renderSpecFields(formSpecsAfter, formPartsAfter);
}

function switchGroup(groupId) {
  if (!state.groups.some(group => group.id === groupId)) return;
  activeGroupId = groupId;
  state.activeGroupId = activeGroupId;
  filters.search = "";
  filters.category = "all";
  filters.status = "all";
  els.searchInput.value = "";
  els.filterStatus.value = "all";
  saveState();
  clearForm();
  renderAll();
}

function addGroup() {
  const name = prompt("新しい比較一覧の名前を入力してください。", createGroupName());
  if (name === null) return;
  const trimmed = name.trim();
  if (!trimmed) {
    alert("比較一覧名を入力してください。");
    return;
  }
  const id = crypto.randomUUID();
  state.groups.push({ id, name: trimmed, createdAt: Date.now() });
  activeGroupId = id;
  state.activeGroupId = id;
  saveState();
  clearForm();
  renderAll();
}

function renameGroup() {
  const group = getActiveGroup();
  if (!group) return;
  const name = prompt("比較一覧の名前を変更してください。", group.name);
  if (name === null) return;
  const trimmed = name.trim();
  if (!trimmed) {
    alert("比較一覧名を入力してください。");
    return;
  }
  group.name = trimmed;
  saveState();
  renderGroupOptions();
}

function duplicateGroup() {
  const group = getActiveGroup();
  if (!group) return;
  const name = prompt("複製後の比較一覧名を入力してください。", `${group.name} コピー`);
  if (name === null) return;
  const trimmed = name.trim();
  if (!trimmed) {
    alert("比較一覧名を入力してください。");
    return;
  }

  const newGroupId = crypto.randomUUID();
  const sourceProducts = state.products.filter(product => product.groupId === group.id);
  const copiedProducts = sourceProducts.map(product => ({
    ...structuredClone(product),
    id: crypto.randomUUID(),
    groupId: newGroupId,
    name: product.name,
    createdAt: Date.now()
  }));

  state.groups.push({ id: newGroupId, name: trimmed, createdAt: Date.now() });
  state.products.unshift(...copiedProducts);
  activeGroupId = newGroupId;
  state.activeGroupId = newGroupId;
  saveState();
  clearForm();
  renderAll();
}

function addSampleDataToActiveGroup() {
  const activeGroup = getActiveGroup();
  if (!activeGroup) return;
  const existingCount = state.products.filter(product => product.groupId === activeGroup.id).length;
  if (existingCount > 0 && !confirm("現在の比較一覧にサンプルデータを追加しますか？")) return;

  state.products.unshift(...sampleProducts(activeGroup.id));
  saveState();
  renderAll();
}

function exportCsv() {
  const items = getFilteredProducts();
  const specColumns = getVisibleSpecColumns(items);
  const headers = ["商品名", "URL", "ジャンル", "価格", "評価", "コスパ点数", "状態", ...specColumns, "メモ"];
  const rows = items.map(item => [
    item.name,
    item.url,
    item.category,
    item.price,
    item.rating || "",
    calculateScore(item, items),
    item.status,
    ...specColumns.map(spec => getSpecExportValue(item, spec)),
    item.memo
  ]);

  const csv = [headers, ...rows]
    .map(row => row.map(value => `"${String(value ?? "").replaceAll('"', '""')}"`).join(","))
    .join("\n");

  downloadFile(`${(getActiveGroup()?.name || "比較一覧").replace(/[\\/:*?"<>|]/g, "-")}-products.csv`, `\ufeff${csv}`, "text/csv;charset=utf-8");
}

function exportJson() {
  downloadFile("kau-mae-hikakuhyo-backup.json", JSON.stringify(state, null, 2), "application/json");
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!parsed.categories || !parsed.products) throw new Error("invalid");
      state = normalizeState(parsed);
      activeGroupId = state.activeGroupId;
      saveState();
      clearForm();
      renderAll();
      alert("データを読み込みました。");
    } catch {
      alert("読み込めないJSONファイルです。");
    }
  };
  reader.readAsText(file);
}

function handleRowAction(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;
  const { action, id } = button.dataset;
  if (action === "edit") editProduct(id);
  if (action === "copy") copyProduct(id);
  if (action === "delete") deleteProduct(id);
}

function setViewMode(nextMode) {
  viewMode = nextMode;
  localStorage.setItem(VIEW_KEY, viewMode);
  renderProducts();
}

function renderAll() {
  renderGroupOptions();
  renderCategoryOptions();
  renderProducts();
}

function bindEvents() {
  els.productForm.addEventListener("submit", handleSubmit);

  els.categorySelect.addEventListener("change", () => renderSpecFields());

  els.cancelEditBtn.addEventListener("click", clearForm);

  els.newCategoryBtn.addEventListener("click", () => {
    els.categoryForm.reset();
    setupBuilder(els.categoryFieldBuilder, [], {}, ["項目1", "項目2", "項目3"]);
    els.categoryDialog.showModal();
    setTimeout(() => els.newCategoryName.focus(), 50);
  });

  els.saveCategoryBtn.addEventListener("click", event => {
    event.preventDefault();
    addCategory();
  });

  els.editSpecsBtn.addEventListener("click", () => {
    const category = els.categorySelect.value;
    els.specDialogCategory.textContent = `対象ジャンル：${category}`;
    setupBuilder(els.specFieldBuilder, state.categories[category] || [], getCategorySettings(category), []);
    els.specDialog.showModal();
  });

  els.saveSpecsBtn.addEventListener("click", event => {
    event.preventDefault();
    saveSpecsForCurrentCategory();
  });

  els.addCategoryFieldBtn.addEventListener("click", () => {
    createBuilderRow(els.categoryFieldBuilder, { name: "", mode: "free" });
  });

  els.addSpecFieldBtn.addEventListener("click", () => {
    createBuilderRow(els.specFieldBuilder, { name: "", mode: "free" });
  });

  els.tableBody.addEventListener("click", handleRowAction);
  els.cardsGrid.addEventListener("click", handleRowAction);

  els.searchInput.addEventListener("input", event => {
    filters.search = event.target.value;
    renderProducts();
  });

  els.filterCategory.addEventListener("change", event => {
    filters.category = event.target.value;
    renderProducts();
  });

  els.filterStatus.addEventListener("change", event => {
    filters.status = event.target.value;
    renderProducts();
  });

  els.sortSelect.addEventListener("change", event => {
    filters.sort = event.target.value;
    renderProducts();
  });

  els.cardViewBtn.addEventListener("click", () => setViewMode("card"));
  els.tableViewBtn.addEventListener("click", () => setViewMode("table"));

  els.groupSelect.addEventListener("change", event => switchGroup(event.target.value));
  els.addGroupBtn.addEventListener("click", addGroup);
  els.renameGroupBtn.addEventListener("click", renameGroup);
  els.duplicateGroupBtn.addEventListener("click", duplicateGroup);

  els.exportCsvBtn.addEventListener("click", exportCsv);
  els.exportJsonBtn.addEventListener("click", exportJson);

  els.importJsonInput.addEventListener("change", event => {
    const file = event.target.files?.[0];
    if (file) importJson(file);
    event.target.value = "";
  });

  els.exportJsonBtnInline?.addEventListener("click", exportJson);

  els.importJsonInputInline?.addEventListener("change", event => {
    const file = event.target.files?.[0];
    if (file) importJson(file);
    event.target.value = "";
  });

  els.loadSampleDataBtn?.addEventListener("click", addSampleDataToActiveGroup);

  els.resetBtn.addEventListener("click", () => {
    if (!confirm("すべての登録データを削除して初期状態に戻しますか？")) return;
    state = createInitialState(false);
    activeGroupId = state.activeGroupId;
    saveState();
    clearForm();
    renderAll();
  });

}

ensureActiveGroup();
state.activeGroupId = activeGroupId;
saveState();
bindEvents();
renderGroupOptions();
renderCategoryOptions();
renderSpecFields();
renderProducts();
