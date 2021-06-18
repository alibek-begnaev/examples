const board = document.querySelector("#board");
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "#3DDC84	",

  "#841B2D",
  "#BFFF00",
  "#967117",
  "#87421F	",
];
const SQUARES_NUMBER = 2000;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(e) {
  const color = getRandomColor();
  e.style.backgroundColor = color;
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(e) {
  //   setTimeout(() => (e.style.backgroundColor = "rgb(65, 65, 65)"), 200);
  e.style.backgroundColor = "rgb(65, 65, 65)";
  e.style.boxShadow = `0 0 2px rgb(65, 65, 65)`;
}
function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
