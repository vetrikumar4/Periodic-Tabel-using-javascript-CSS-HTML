import boxAttributes from "./index.json" assert { type: "json" };

const grid = document.createElement("div");
grid.className = "grid";
document.body.appendChild(grid);

boxAttributes.boxAttributes.forEach((boxAttributes) => {
  const box = document.createElement("div");
  box.textContent = boxAttributes.content;
  grid.appendChild(box);

  if (box.textContent.includes(" ")) {
    box.className = `${boxAttributes.color} box animation`;
  } else {
    box.className = "box";
  }
});
