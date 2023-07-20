var r = [0, 18, 19, 20, 38, 39, 57, 58, 76, 77, 95, 96, 114, 115];

var y = [
  32, 33, 34, 35, 36, 37, 51, 52, 53, 54, 55, 56, 70, 71, 72, 73, 74, 75, 89,
  90, 91, 92, 93, 94, 89, 90, 91, 92, 93, 94, 108, 109, 110, 111, 112, 113, 127,
  128, 129, 130, 131, 132,
];

var b = [
  60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 79, 80, 81, 82, 83, 84, 85, 86, 87,
  88, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 117, 118, 119, 120, 121,
  122, 123, 124, 125, 126,
];

var g = [
  155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 174,
  175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187,
];

var grid = document.createElement("div");
grid.className = "grid";
const text =
  '[ "1 H", "", "", "" ,"","","","","","","","","","","","","","","2 He","3 Li","4 Be","","","","","","","","","","","","5 B","6 C","7 N","8 O","9 F","10 Ne","11 Na","12 Mg","","","","","","","","","","","","13 Al","14 Si","15 P","16 S","17 Cl","18 Ar","19 K","20 Ca","","21 Sc","22 Ti","23 V","24 Cr","25 Mn","26 Fe", "27 Co","28 Ni","29 Cu","30 Zn","31 Ga","32 Ge","33 As","34 Se","35 Br","36 Kr","37 Rb","38 Sr","","39 Y","40 Zr","41 Nb","42 Mo","43 Tc","44 Ru","45 Rh","46 Pd","47 Ag","48 Cd","49 In","50 Sn","51 Sb","52 Te","53 I","54 Xe","55 Cs","56 Ba","","71 Lu","72 Hf","73 Ta","74 W","75 Re","76 Os","77 Ir","78 Pt","79 Au","80 Hg","81 T1","82 Pb","83 Bi","84 Po","85 At","86 Rn","87 Fr","88 Ra","","103 Lr","104 Rf","105 Db","106 Sg","107 Bh","108 Hs","109 Mt","110 Ds","111 Rg","112 Cn","113 Nh","114 Fi","115 Mc","116 Lv","117 Ts","118 Og","","","","","","","","","","","","","","","","","","","","","","","57 La","58 Ce","59 Pr","60 Nd","61 Pm","62 Sm","63 Eu","64 Gd","65 Tb","66 Dy","67 Ho","68 Er","69 Tm","70 Yb","","","","","","89 Ac","90 Th","91 Pa","92 U","93 No","94 Pu","95 Am","96 Cm","97 Bk","98 Cf","99 Es","100 Fm","101 Md","102 No","",""]';
const myArr = JSON.parse(text);
for (var i = 0; i < myArr.length; ++i) {
  var box = document.createElement("div");
  box.className = "box";
  box.textContent = myArr[i];
  r.forEach(function (item, index) {
    if (i == item) {
      box.className = "red box animation";
    }
  });

  y.forEach(function (item, index) {
    if (i == item) {
      box.className = "yellow box animation";
    }
  });

  b.forEach(function (item, index) {
    if (i == item) {
      box.className = "blue box animation";
    }
  });

  g.forEach(function (item, index) {
    if (i == item) {
      box.className = "green box animation";
    }
  });

  grid.appendChild(box);
}

document.body.appendChild(grid);
