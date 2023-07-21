import myArr from "./index.json" assert { type: "json" };

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
