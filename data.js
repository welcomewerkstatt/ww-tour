var APP_DATA = {
  "scenes": [
    {
      "id": "0-halle-elektronikecke",
      "name": "Halle Elektronikecke",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.0004673038439407,
        "pitch": 0.15952215053676078,
        "fov": 1.446721998629926
      },
      "linkHotspots": [
        {
          "yaw": 2.311449995049516,
          "pitch": 0.021279826223228326,
          "rotation": 0,
          "target": "1-innenhof"
        },
        {
          "yaw": -0.7509179466968785,
          "pitch": 0.11609063011011855,
          "rotation": 0,
          "target": "2-halle-mitte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-innenhof",
      "name": "Innenhof",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -0.8757161269569522,
        "pitch": -0.11122449065864792,
        "fov": 1.446721998629926
      },
      "linkHotspots": [
        {
          "yaw": -1.086514791445289,
          "pitch": 0.07455543263668929,
          "rotation": 0,
          "target": "0-halle-elektronikecke"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-halle-mitte",
      "name": "Halle Mitte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.748829745700686,
          "pitch": 0.0648546521559723,
          "rotation": 0,
          "target": "0-halle-elektronikecke"
        },
        {
          "yaw": 1.951079876416193,
          "pitch": 0.09280344334293034,
          "rotation": 0,
          "target": "10-maschinenraum"
        },
        {
          "yaw": -0.6333317896337434,
          "pitch": 0.02414583792733538,
          "rotation": 6.283185307179586,
          "target": "4-bro"
        },
        {
          "yaw": -1.2983844224868673,
          "pitch": 0.08087276810360855,
          "rotation": 11.780972450961727,
          "target": "3-werkzeuglager"
        },
        {
          "yaw": 0.3198369944882664,
          "pitch": 0.10292377123487206,
          "rotation": 0,
          "target": "5-halle-metallecke"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-werkzeuglager",
      "name": "Werkzeuglager",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -3.106583512854197,
        "pitch": 0.21990112266866468,
        "fov": 1.446721998629926
      },
      "linkHotspots": [
        {
          "yaw": 1.5613016817750127,
          "pitch": 0.15227261071615672,
          "rotation": 0.7853981633974483,
          "target": "2-halle-mitte"
        },
        {
          "yaw": 1.052745412954442,
          "pitch": 0.1834742549751862,
          "rotation": 4.71238898038469,
          "target": "4-bro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bro",
      "name": "Büro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1011834336015731,
          "pitch": 0.18511930730421255,
          "rotation": 0,
          "target": "2-halle-mitte"
        },
        {
          "yaw": 1.7654059036982037,
          "pitch": 0.18637737637623353,
          "rotation": 0.7853981633974483,
          "target": "3-werkzeuglager"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-halle-metallecke",
      "name": "Halle Metallecke",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.8344305482040841,
        "pitch": 0.11057455154525186,
        "fov": 1.446721998629926
      },
      "linkHotspots": [
        {
          "yaw": -2.733592029099503,
          "pitch": 0.06160355179923016,
          "rotation": 5.497787143782138,
          "target": "3-werkzeuglager"
        },
        {
          "yaw": -2.4892075888064777,
          "pitch": 0.07037578456127136,
          "rotation": 0.7853981633974483,
          "target": "4-bro"
        },
        {
          "yaw": -3.046208904176469,
          "pitch": 0.10295195840331317,
          "rotation": 0,
          "target": "2-halle-mitte"
        },
        {
          "yaw": 1.6243776515923871,
          "pitch": 0.04739319136590581,
          "rotation": 0,
          "target": "6-halle-vorne"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-halle-vorne",
      "name": "Halle Vorne",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5859757226243492,
          "pitch": 0.04363277452765324,
          "rotation": 5.497787143782138,
          "target": "5-halle-metallecke"
        },
        {
          "yaw": -1.3668642231238621,
          "pitch": 0.10264871679912346,
          "rotation": 6.283185307179586,
          "target": "7-flur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-flur",
      "name": "Flur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -1.3749284601371983,
        "pitch": 0.15270656113988146,
        "fov": 1.446721998629926
      },
      "linkHotspots": [
        {
          "yaw": -1.8685176997821245,
          "pitch": 0.1555728860753156,
          "rotation": 5.497787143782138,
          "target": "10-maschinenraum"
        },
        {
          "yaw": 2.4906933650898395,
          "pitch": 0.07740276351016284,
          "rotation": 0,
          "target": "8-aufenthaltsraum"
        },
        {
          "yaw": 1.9942601787056118,
          "pitch": 0.1836187106584113,
          "rotation": 10.995574287564278,
          "target": "11-keller-lager"
        },
        {
          "yaw": -0.7640921836326235,
          "pitch": 0.12708371176343647,
          "rotation": 0,
          "target": "6-halle-vorne"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-aufenthaltsraum",
      "name": "Aufenthaltsraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.48924650818270976,
          "pitch": 0.13090308244725257,
          "rotation": 0,
          "target": "9-kche"
        },
        {
          "yaw": 1.3726950900961956,
          "pitch": 0.11173383094421574,
          "rotation": 0,
          "target": "7-flur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-kche",
      "name": "Küche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03137548040795579,
          "pitch": 0.1697008556260613,
          "rotation": 0,
          "target": "8-aufenthaltsraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-maschinenraum",
      "name": "Maschinenraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 2.580492980434819,
        "pitch": 0.35560741284573005,
        "fov": 1.446721998629926
      },
      "linkHotspots": [
        {
          "yaw": 1.9116028917053889,
          "pitch": 0.15559070615511672,
          "rotation": 0.7853981633974483,
          "target": "7-flur"
        },
        {
          "yaw": -1.8244515556637353,
          "pitch": 0.1761400780956084,
          "rotation": 5.497787143782138,
          "target": "2-halle-mitte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-keller-lager",
      "name": "Keller Lager",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": -2.7694508878933917,
        "pitch": 0.13337425242652046,
        "fov": 1.446721998629926
      },
      "linkHotspots": [
        {
          "yaw": -1.7487465326927403,
          "pitch": 0.1361460808598025,
          "rotation": 0.7853981633974483,
          "target": "12-keller-3d-drucker"
        },
        {
          "yaw": 0.9994572704063316,
          "pitch": 0.15010936123677787,
          "rotation": 0,
          "target": "7-flur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-keller-3d-drucker",
      "name": "Keller 3D-Drucker",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1632,
      "initialViewParameters": {
        "yaw": 1.995214483301388,
        "pitch": 0.28077123232670154,
        "fov": 1.446721998629926
      },
      "linkHotspots": [
        {
          "yaw": -1.7800434684145294,
          "pitch": 0.3476766539478575,
          "rotation": 4.71238898038469,
          "target": "11-keller-lager"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Welcome Werkstatt",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
