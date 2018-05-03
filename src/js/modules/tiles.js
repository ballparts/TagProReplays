/**
* @fileoverview Tile constants for the game.
*/

exports.mapElements = {
  0: {tile: "blank", coordinates: {x: 15, y: 10}, tileSize: 40, drawTileFirst: false},
  1: {tile: "wall", coordinates: {0: {}, 1: {}, 2: {}, 3: {}}, tileSize: 20},
  1.1: {tile: "diagonalWall", coordinates: {x: 13, y: 4}, tileSize: 20},
  1.2: {tile: "diagonalWall", coordinates: {x: 13, y: 4}, tileSize: 20},
  1.3: {tile: "diagonalWall", coordinates: {x: 13, y: 4}, tileSize: 20},
  1.4: {tile: "diagonalWall", coordinates: {x: 13, y: 4}, tileSize: 20},
  2: {tile: "tile", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  3: {tile: "redflag", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  3.1: {tile: "regflagtaken", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  4: {tile: "blueflag", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  4.1: {tile: "blueflagtaken", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  5: {tile: "speedpad", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  5.1: {tile: "emptyspeedpad", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  5.11: {tile: "emptyspeedpad", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  6: {tile: "emptypowerup", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  6.1: {tile: "jukejuice", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  6.2: {tile: "rollingbomb", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  6.3: {tile: "tagpro", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  6.4: {tile: "speed", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  6.11: {tile: "emptypowerup", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  6.21: {tile: "emptypowerup", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  6.31: {tile: "emptypowerup", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  6.41: {tile: "emptypowerup", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  7: {tile: "spike", coordinates: {x: 12, y: 0}, tileSize: 40, drawTileFirst: true},
  8: {tile: "button", coordinates: {x: 13, y: 6}, tileSize: 40, drawTileFirst: true},
  9: {tile: "gate", coordinates: {x: 12, y: 3}, tileSize: 40, drawTileFirst: false},
  9.1: {tile: "greengate", coordinates: {x: 13, y: 3}, tileSize: 40, drawTileFirst: false},
  9.2: {tile: "redgate", coordinates: {x: 14, y: 3}, tileSize: 40, drawTileFirst: false},
  9.3: {tile: "bluegate", coordinates: {x: 15, y: 3}, tileSize: 40, drawTileFirst: false},
  10: {tile: "bomb", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  10.1: {tile: "emptybomb", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  10.11: {tile: "emptybomb", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  11: {tile: "redtile", coordinates: {x: 14, y: 4}, tileSize: 40, drawTileFirst: false},
  12: {tile: "bluetile", coordinates: {x: 15, y: 4}, tileSize: 40, drawTileFirst: false},
  13: {tile: "portal", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  13.1: {tile: "emptyportal", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  13.11: {tile: "emptyportal", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  14: {tile: "speedpadred", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  14.1: {tile: "emptyspeedpadred", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  14.11: {tile: "emptyspeedpadred", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  15: {tile: "speedpadblue", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  15.1: {tile: "emptyspeedpadblue", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  15.11: {tile: "emptyspeedpadblue", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  16: {tile: "yellowflag", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  16.1: {tile: "yellowflagtaken", coordinates: {x: 13, y: 4}, tileSize: 40, drawTileFirst: false},
  17: {tile: "redgoal", coordinates: {x: 14, y: 5}, tileSize: 40, drawTileFirst: false},
  18: {tile: "bluegoal", coordinates: {x: 15, y: 5}, tileSize: 40, drawTileFirst: false},
  22: {tile: "gravitywell", coordinates: {x: 13, y: 0}, tileSize: 40, drawTileFirst: true},
  23: {tile: "yellowtile", coordinates: {x: 13, y: 5}, tileSize: 40, drawTileFirst: false}
};

exports.floor_tiles = {
  3:    { tile: "redflag",           coordinates: { x: 14, y: 1 }, tileSize: 40, img: "tiles" },
  3.1:  { tile: "redflagtaken",      coordinates: { x: 14, y: 2 }, tileSize: 40, img: "tiles" },
  4:    { tile: "blueflag",          coordinates: { x: 15, y: 1 }, tileSize: 40, img: "tiles" },
  4.1:  { tile: "blueflagtaken",     coordinates: { x: 15, y: 2 }, tileSize: 40, img: "tiles" },
  5:    { tile: "speedpad",          coordinates: { x:  0, y: 0 }, tileSize: 40, img: "speedpad", animated: true },
  5.1:  { tile: "emptyspeedpad",     coordinates: { x:  4, y: 0 }, tileSize: 40, img: "speedpad" },
  5.11: { tile: "previewspeedpad",   coordinates: { x: 0, y: 0 }, tileSize: 40, img: "speedpad", preview: true, emptyCoordinates: { x:  4, y: 0 } },
  6:    { tile: "emptypowerup",      coordinates: { x: 12, y: 8 }, tileSize: 40, img: "tiles" },
  6.1:  { tile: "jukejuice",         coordinates: { x: 12, y: 4 }, tileSize: 40, img: "tiles" },
  6.2:  { tile: "rollingbomb",       coordinates: { x: 12, y: 5 }, tileSize: 40, img: "tiles" },
  6.3:  { tile: "tagpro",            coordinates: { x: 12, y: 6 }, tileSize: 40, img: "tiles" },
  6.4:  { tile: "speed",             coordinates: { x: 12, y: 7 }, tileSize: 40, img: "tiles" },
  6.11: { tile: "previewjukejuice",  coordinates: { x: 12, y: 4 }, tileSize: 40, img: "tiles", preview: true, emptyCoordinates: { x: 12, y: 8 } },
  6.21: { tile: "previewrollingbomb", coordinates: { x: 12, y: 5 }, tileSize: 40, img: "tiles", preview: true, emptyCoordinates: { x: 12, y: 8 } },
  6.31: { tile: "previewtagpro",     coordinates: { x: 12, y: 6 }, tileSize: 40, img: "tiles", preview: true, emptyCoordinates: { x: 12, y: 8 } },
  6.41: { tile: "previewspeed",      coordinates: { x: 12, y: 7 }, tileSize: 40, img: "tiles", preview: true, emptyCoordinates: { x: 12, y: 8 } },
  9:    { tile: "gate",              coordinates: { x: 12, y: 3 }, tileSize: 40, img: "tiles" },
  9.1:  { tile: "greengate",         coordinates: { x: 13, y: 3 }, tileSize: 40, img: "tiles" },
  9.2:  { tile: "redgate",           coordinates: { x: 14, y: 3 }, tileSize: 40, img: "tiles" },
  9.3:  { tile: "bluegate",          coordinates: { x: 15, y: 3 }, tileSize: 40, img: "tiles" },
  10:   { tile: "bomb",              coordinates: { x: 12, y: 1 }, tileSize: 40, img: "tiles" },
  10.1: { tile: "emptybomb",         coordinates: { x: 12, y: 2 }, tileSize: 40, img: "tiles" },
  10.11: { tile: "previewbomb",      coordinates: { x: 12, y: 1 }, tileSize: 40, img: "tiles", preview: true, emptyCoordinates: { x: 12, y: 2 } },
  13:   { tile: "portal",            coordinates: { x:  0, y: 0 }, tileSize: 40, img: "portal", animated: true },
  13.1: { tile: "emptyportal",       coordinates: { x:  4, y: 0 }, tileSize: 40, img: "portal" },
  13.11: { tile: "previewportal",    coordinates: { x:  0, y: 0 }, tileSize: 40, img: "portal", preview: true, emptyCoordinates: { x:  4, y: 0 } },
  14:   { tile: "speedpadred",       coordinates: { x:  0, y: 0 }, tileSize: 40, img: "speedpadred", animated: true },
  14.1: { tile: "emptyspeedpadred",  coordinates: { x:  4, y: 0 }, tileSize: 40, img: "speedpadred" },
  14.11: { tile: "previewspeedpadred",  coordinates: { x: 0, y: 0 }, tileSize: 40, img: "speedpadred", preview: true, emptyCoordinates: { x:  4, y: 0 } },
  15:   { tile: "speedpadblue",      coordinates: { x:  0, y: 0 }, tileSize: 40, img: "speedpadblue", animated: true },
  15.1: { tile: "emptyspeedpadblue", coordinates: { x:  4, y: 0 }, tileSize: 40, img: "speedpadblue" },
  15.11: { tile: "previewspeedpadblue", coordinates: { x: 0, y: 0 }, tileSize: 40, img: "speedpadblue", preview: true, emptyCoordinates: { x:  4, y: 0 } },
  16:   { tile: "yellowflag",        coordinates: { x: 13, y: 1 }, tileSize: 40, img: "tiles" },
  16.1: { tile: "yellowflagtaken",   coordinates: { x: 13, y: 2 }, tileSize: 40, img: "tiles" }
};

exports.tiles = {
  0: { x: 15, y: 10 },
  1: {},
  1.1: { drawFloor: [{ x: 1, y: 0 }, { x: 0, y: -1 }] },
  1.2: { drawFloor: [{ x: 1, y: 0 }, { x: 0, y: 1 }] },
  1.3: { drawFloor: [{ x: -1, y: 0 }, { x: 0, y: 1 }] },
  1.4: { drawFloor: [{ x: -1, y: 0 }, { x: 0, y: -1 }] },
  2: { x: 13, y: 4 },
  16: { x: 13, y: 1, drawFloor: !0, redrawFloor: !0, isFlag: !0, dynamic: !0 },
  yellowflag: { x: 13, y: 1, isFlag: !0, dynamic: !0 },
  16.1: { x: 13, y: 2, drawFloor: !0, redrawFloor: !0, dynamic: !0 },
  3: { x: 14, y: 1, drawFloor: !0, redrawFloor: !0, isFlag: !0, dynamic: !0 },
  redflag: { x: 14, y: 1, isFlag: !0, dynamic: !0 },
  3.1: { x: 14, y: 2, drawFloor: !0, redrawFloor: !0, dynamic: !0 },
  4: { x: 15, y: 1, drawFloor: !0, redrawFloor: !0, isFlag: !0, dynamic: !0 },
  blueflag: { x: 15, y: 1, isFlag: !0, dynamic: !0 },
  4.1: { x: 15, y: 2, drawFloor: !0, redrawFloor: !0, dynamic: !0 },
  /*5: o, 5.1: u, 14: a, 14.1: f, 15: l, 15.1: c,*/ 6: { x: 12, y: 8, drawFloor: !0, redrawFloor: !0, dynamic: !0 },
  6.1: { x: 12, y: 4, drawFloor: !0, redrawFloor: !0, dynamic: !0 },
  grip: { x: 12, y: 4, dynamic: !0 },
  6.2: { x: 12, y: 5, drawFloor: !0, redrawFloor: !0, dynamic: !0 },
  bomb: { x: 12, y: 5, dynamic: !0 },
  6.3: { x: 12, y: 6, drawFloor: !0, redrawFloor: !0, dynamic: !0 },
  tagpro: { x: 12, y: 6, dynamic: !0 },
  6.4: { x: 12, y: 7, drawFloor: !0, redrawFloor: !0, dynamic: !0 },
  speed: { x: 12, y: 7, dynamic: !0 },
  17: { x: 14, y: 5, dynamic: !0 },
  18: { x: 15, y: 5, dynamic: !0 },
  7: { x: 12, y: 0, drawFloor: !0, redrawFloor: !1, dynamic: !0 },
  21: { x: 14, y: 6, drawFloor: !0, redrawFloor: !0, isFlag: !0, dynamic: !0 },
  yellowpotato: { x: 14, y: 6, isFlag: !0, dynamic: !0 },
  21.1: { x: 15, y: 6, drawFloor: !0, redrawFloor: !0, dynamic: !0 },
  19: { x: 14, y: 7, drawFloor: !0, redrawFloor: !0, isFlag: !0, dynamic: !0 },
  redpotato: { x: 14, y: 7, isFlag: !0, dynamic: !0 },
  19.1: { x: 15, y: 7, drawFloor: !0, redrawFloor: !0, dynamic: !0 },
  20: { x: 14, y: 8, drawFloor: !0, redrawFloor: !0, isFlag: !0, dynamic: !0 },
  bluepotato: { x: 14, y: 8, isFlag: !0, dynamic: !0 },
  20.1: { x: 15, y: 8, drawFloor: !0, redrawFloor: !0, dynamic: !0 },
  22: { x: 0, y: 0, drawFloor: !0, source: "gravityWell" },
  redball: { x: 14, y: 0 },
  blueball: { x: 15, y: 0 },
  8: { x: 13, y: 6, drawFloor: !0, redrawFloor: !1, dynamic: !0 },
  9: { x: 12, y: 3, dynamic: !0 },
  9.1: { x: 13, y: 3, dynamic: !0 },
  9.2: { x: 14, y: 3, dynamic: !0 },
  9.3: { x: 15, y: 3, dynamic: !0 },
  10: { x: 12, y: 1, drawFloor: !0, redrawFloor: !0, dynamic: !0 },
  10.1: { x: 12, y: 2, drawFloor: !0, redrawFloor: !0, dynamic: !0 },
  11: { x: 14, y: 4 },
  12: { x: 15, y: 4 },
  23: { x: 13, y: 5 },
  marsball: { x: 12, y: 9, size: 80, keep: !0 },
  13: { x: 0, y: 0, size: 40 },
  13.1: { x: 4, y: 0, size: 40 },
  "1.310": { x: 10.5, y: 7.5, size: 20 },
  "1.410": { x: 11, y: 7.5, size: 20 },
  "1.110": { x: 11, y: 8, size: 20 },
  "1.210": { x: 10.5, y: 8, size: 20 },
  "1.310d": { x: .5, y: 3.5, size: 20 },
  "1.410d": { x: 1, y: 3.5, size: 20 },
  "1.210d": { x: .5, y: 4, size: 20 },
  1.321: { x: 4.5, y: 9.5, size: 20 },
  1.421: { x: 5, y: 9.5, size: 20 },
  1.121: { x: 5, y: 10, size: 20 },
  1.221: { x: 4.5, y: 10, size: 20 },
  "1.321d": { x: 1.5, y: 2.5, size: 20 },
  "1.421d": { x: 2, y: 2.5, size: 20 },
  "1.221d": { x: 1.5, y: 3, size: 20 },
  1.332: { x: 6.5, y: 9.5, size: 20 },
  1.432: { x: 7, y: 9.5, size: 20 },
  1.132: { x: 7, y: 10, size: 20 },
  1.232: { x: 6.5, y: 10, size: 20 },
  "1.332d": { x: 9.5, y: 2.5, size: 20 },
  "1.432d": { x: 10, y: 2.5, size: 20 },
  "1.132d": { x: 10, y: 3, size: 20 },
  1.343: { x: .5, y: 7.5, size: 20 },
  1.443: { x: 1, y: 7.5, size: 20 },
  1.143: { x: 1, y: 8, size: 20 },
  1.243: { x: .5, y: 8, size: 20 },
  "1.343d": { x: 10.5, y: 3.5, size: 20 },
  "1.443d": { x: 11, y: 3.5, size: 20 },
  "1.143d": { x: 11, y: 4, size: 20 },
  1.354: { x: 1.5, y: 6.5, size: 20 },
  1.454: { x: 2, y: 6.5, size: 20 },
  1.154: { x: 2, y: 7, size: 20 },
  1.254: { x: 1.5, y: 7, size: 20 },
  "1.454d": { x: 9, y: 1.5, size: 20 },
  "1.154d": { x: 9, y: 2, size: 20 },
  "1.254d": { x: 8.5, y: 2, size: 20 },
  1.365: { x: 6.5, y: 8.5, size: 20 },
  1.465: { x: 7, y: 8.5, size: 20 },
  1.165: { x: 7, y: 9, size: 20 },
  1.265: { x: 6.5, y: 9, size: 20 },
  "1.465d": { x: 11, y: 1.5, size: 20 },
  "1.165d": { x: 11, y: 2, size: 20 },
  "1.265d": { x: 10.5, y: 2, size: 20 },
  1.376: { x: 4.5, y: 8.5, size: 20 },
  1.476: { x: 5, y: 8.5, size: 20 },
  1.176: { x: 5, y: 9, size: 20 },
  1.276: { x: 4.5, y: 9, size: 20 },
  "1.376d": { x: .5, y: 1.5, size: 20 },
  "1.176d": { x: 1, y: 2, size: 20 },
  "1.276d": { x: .5, y: 2, size: 20 },
  1.307: { x: 9.5, y: 6.5, size: 20 },
  1.407: { x: 10, y: 6.5, size: 20 },
  1.107: { x: 10, y: 7, size: 20 },
  1.207: { x: 9.5, y: 7, size: 20 },
  "1.307d": { x: 2.5, y: 1.5, size: 20 },
  "1.107d": { x: 3, y: 2, size: 20 },
  "1.207d": { x: 2.5, y: 2, size: 20 },
  "1.320": { x: 1.5, y: 7.5, size: 20 },
  "1.420": { x: 2, y: 7.5, size: 20 },
  "1.220": { x: 1.5, y: 8, size: 20 },
  "1.320d": { x: 10.5, y: .5, size: 20 },
  "1.420d": { x: 11, y: .5, size: 20 },
  "1.220d": { x: 10.5, y: 1, size: 20 },
  1.331: { x: 5.5, y: 6.5, size: 20 },
  1.431: { x: 6, y: 6.5, size: 20 },
  1.131: { x: 6, y: 7, size: 20 },
  1.231: { x: 5.5, y: 7, size: 20 },
  "1.331d": { x: 5.5, y: .5, size: 20 },
  "1.431d": { x: 6, y: .5, size: 20 },
  1.342: { x: 9.5, y: 7.5, size: 20 },
  1.442: { x: 10, y: 7.5, size: 20 },
  1.142: { x: 10, y: 8, size: 20 },
  "1.342d": { x: .5, y: .5, size: 20 },
  "1.442d": { x: 1, y: .5, size: 20 },
  "1.142d": { x: 1, y: 1, size: 20 },
  1.353: { x: 4.5, y: 5.5, size: 20 },
  1.453: { x: 5, y: 5.5, size: 20 },
  1.153: { x: 5, y: 6, size: 20 },
  1.253: { x: 4.5, y: 6, size: 20 },
  "1.453d": { x: 7, y: 1.5, size: 20 },
  "1.153d": { x: 7, y: 2, size: 20 },
  1.464: { x: 4, y: 9.5, size: 20 },
  1.164: { x: 4, y: 10, size: 20 },
  1.264: { x: 3.5, y: 10, size: 20 },
  "1.464d": { x: 2, y: 3.5, size: 20 },
  "1.164d": { x: 2, y: 4, size: 20 },
  "1.264d": { x: 1.5, y: 4, size: 20 },
  1.375: { x: 5.5, y: 2.5, size: 20 },
  1.475: { x: 6, y: 2.5, size: 20 },
  1.175: { x: 6, y: 4, size: 20 },
  1.275: { x: 5.5, y: 4, size: 20 },
  "1.175d": { x: 6, y: 3, size: 20 },
  "1.275d": { x: 5.5, y: 3, size: 20 },
  1.306: { x: 7.5, y: 9.5, size: 20 },
  1.106: { x: 8, y: 10, size: 20 },
  1.206: { x: 7.5, y: 10, size: 20 },
  "1.306d": { x: 9.5, y: 3.5, size: 20 },
  "1.106d": { x: 10, y: 4, size: 20 },
  "1.206d": { x: 9.5, y: 4, size: 20 },
  1.317: { x: 6.5, y: 5.5, size: 20 },
  1.417: { x: 7, y: 5.5, size: 20 },
  1.117: { x: 7, y: 6, size: 20 },
  1.217: { x: 6.5, y: 6, size: 20 },
  "1.317d": { x: 4.5, y: 1.5, size: 20 },
  "1.217d": { x: 4.5, y: 2, size: 20 },
  1.327: { x: 7.5, y: 8.5, size: 20 },
  1.427: { x: 8, y: 8.5, size: 20 },
  1.101: { x: 4, y: 5, size: 20 },
  1.227: { x: 7.5, y: 9, size: 20 },
  "1.327d": { x: 8.5, y: 3.5, size: 20 },
  "1.227d": { x: 8.5, y: 4, size: 20 },
  "1.330": { x: 8.5, y: 7.5, size: 20 },
  "1.430": { x: 9, y: 7.5, size: 20 },
  1.112: { x: 2, y: 0, size: 20 },
  "1.230": { x: 8.5, y: 8, size: 20 },
  "1.330d": { x: 3.5, y: .5, size: 20 },
  "1.430d": { x: 4, y: .5, size: 20 },
  1.341: { x: 2.5, y: 7.5, size: 20 },
  1.441: { x: 3, y: 7.5, size: 20 },
  1.141: { x: 3, y: 8, size: 20 },
  1.223: { x: 9.5, y: 0, size: 20 },
  "1.341d": { x: 7.5, y: .5, size: 20 },
  "1.441d": { x: 8, y: .5, size: 20 },
  1.352: { x: 3.5, y: 8.5, size: 20 },
  1.452: { x: 4, y: 8.5, size: 20 },
  1.152: { x: 4, y: 9, size: 20 },
  1.234: { x: 7.5, y: 5, size: 20 },
  "1.452d": { x: 3, y: 3.5, size: 20 },
  "1.152d": { x: 3, y: 4, size: 20 },
  1.345: { x: 7.5, y: 6.5, size: 20 },
  1.463: { x: 10, y: 8.5, size: 20 },
  1.163: { x: 10, y: 9, size: 20 },
  1.263: { x: 9.5, y: 9, size: 20 },
  "1.463d": { x: 2, y: .5, size: 20 },
  "1.163d": { x: 2, y: 1, size: 20 },
  1.356: { x: 6.5, y: 7.5, size: 20 },
  1.474: { x: 9, y: 9.5, size: 20 },
  1.174: { x: 9, y: 10, size: 20 },
  1.274: { x: 8.5, y: 10, size: 20 },
  "1.174d": { x: 10, y: 5, size: 20 },
  "1.274d": { x: 9.5, y: 5, size: 20 },
  1.305: { x: 2.5, y: 9.5, size: 20 },
  1.467: { x: 5, y: 7.5, size: 20 },
  1.105: { x: 3, y: 10, size: 20 },
  1.205: { x: 2.5, y: 10, size: 20 },
  "1.105d": { x: 2, y: 5, size: 20 },
  "1.205d": { x: 1.5, y: 5, size: 20 },
  1.316: { x: 1.5, y: 8.5, size: 20 },
  "1.470": { x: 4, y: 6.5, size: 20 },
  1.116: { x: 2, y: 9, size: 20 },
  1.216: { x: 1.5, y: 9, size: 20 },
  "1.316d": { x: 9.5, y: .5, size: 20 },
  "1.216d": { x: 9.5, y: 1, size: 20 },
  1.337: { x: 10.5, y: 9.5, size: 20 },
  1.437: { x: 11, y: 9.5, size: 20 },
  1.102: { x: 0, y: 7, size: 20 },
  1.237: { x: 10.5, y: 10, size: 20 },
  "1.337d": { x: 10.5, y: 4.5, size: 20 },
  "1.102d": { x: 0, y: 0, size: 20 },
  "1.340": { x: 8.5, y: 10.5, size: 20 },
  "1.440": { x: 9, y: 10.5, size: 20 },
  1.113: { x: 6, y: 8, size: 20 },
  1.213: { x: 5.5, y: 8, size: 20 },
  "1.340d": { x: 3.5, y: 2.5, size: 20 },
  "1.440d": { x: 8, y: 2.5, size: 20 },
  1.351: { x: .5, y: 9.5, size: 20 },
  1.451: { x: 1, y: 9.5, size: 20 },
  1.151: { x: 1, y: 10, size: 20 },
  1.224: { x: 11.5, y: 7, size: 20 },
  "1.224d": { x: 11.5, y: 0, size: 20 },
  "1.451d": { x: 1, y: 4.5, size: 20 },
  1.335: { x: 11.5, y: 8.5, size: 20 },
  1.462: { x: 0, y: 5.5, size: 20 },
  1.162: { x: 0, y: 5, size: 20 },
  1.235: { x: 11.5, y: 9, size: 20 },
  "1.462d": { x: 0, y: 4.5, size: 20 },
  "1.162d": { x: 0, y: 6, size: 20 },
  1.346: { x: 11.5, y: 7.5, size: 20 },
  1.473: { x: 8, y: 6.5, size: 20 },
  1.173: { x: 8, y: 7, size: 20 },
  1.273: { x: 7.5, y: 7, size: 20 },
  "1.346d": { x: 2.5, y: 4.5, size: 20 },
  "1.173d": { x: 9, y: 3, size: 20 },
  1.357: { x: 5.5, y: 10.5, size: 20 },
  1.457: { x: 6, y: 10.5, size: 20 },
  1.104: { x: 6, y: 5, size: 20 },
  1.204: { x: 5.5, y: 5, size: 20 },
  "1.104d": { x: 7, y: 5, size: 20 },
  "1.204d": { x: 4.5, y: 5, size: 20 },
  1.315: { x: 3.5, y: 6.5, size: 20 },
  "1.460": { x: 0, y: 7.5, size: 20 },
  1.115: { x: 4, y: 7, size: 20 },
  1.215: { x: 3.5, y: 7, size: 20 },
  "1.460d": { x: 9, y: 4.5, size: 20 },
  "1.215d": { x: 2.5, y: 3, size: 20 },
  1.326: { x: 11.5, y: 5.5, size: 20 },
  1.471: { x: 0, y: 8.5, size: 20 },
  1.171: { x: 0, y: 9, size: 20 },
  1.226: { x: 11.5, y: 5, size: 20 },
  "1.326d": { x: 11.5, y: 4.5, size: 20 },
  "1.226d": { x: 11.5, y: 6, size: 20 },
  1.347: { x: 9.5, y: 10.5, size: 20 },
  1.447: { x: 10, y: 10.5, size: 20 },
  1.103: { x: 9, y: 6, size: 20 },
  1.203: { x: 8.5, y: 6, size: 20 },
  "1.347d": { x: 3.5, y: 1.5, size: 20 },
  "1.103d": { x: 4, y: 1, size: 20 },
  "1.350": { x: 1.5, y: 10.5, size: 20 },
  "1.450": { x: 2, y: 10.5, size: 20 },
  1.114: { x: 3, y: 6, size: 20 },
  1.214: { x: 2.5, y: 6, size: 20 },
  "1.214d": { x: 7.5, y: 1, size: 20 },
  "1.450d": { x: 8, y: 1.5, size: 20 },
  1.325: { x: 4.5, y: 7.5, size: 20 },
  1.461: { x: 4, y: 3.5, size: 20 },
  1.161: { x: 4, y: 4, size: 20 },
  1.225: { x: 4.5, y: 8, size: 20 },
  "1.225d": { x: 8.5, y: 5, size: 20 },
  "1.461d": { x: 8, y: 4.5, size: 20 },
  1.336: { x: 7.5, y: 3.5, size: 20 },
  1.472: { x: 7, y: 7.5, size: 20 },
  1.172: { x: 7, y: 8, size: 20 },
  1.236: { x: 7.5, y: 4, size: 20 },
  "1.336d": { x: 3.5, y: 4.5, size: 20 },
  "1.172d": { x: 3, y: 5, size: 20 },
  "1.300": { x: 5.5, y: 5.5, size: 20 },
  "1.400": { x: 6, y: 5.5, size: 20 },
  "1.100": { x: 6, y: 6, size: 20 },
  "1.200": { x: 5.5, y: 6, size: 20 },
  "1.300d": { x: 5.5, y: 8.5, size: 20 },
  "1.400d": { x: 6, y: 8.5, size: 20 },
  "1.100d": { x: 6, y: 10, size: 20 },
  "1.200d": { x: 5.5, y: 10, size: 20 }
};
