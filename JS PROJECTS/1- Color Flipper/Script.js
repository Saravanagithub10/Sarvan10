const colors = [
  "#007BFF",
  "#FFA500",
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#FF33A5",
  "#33A5FF",
];

const flipButton = document.getElementById("flip-button");

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function changeBackgroundColor() {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
}

flipButton.addEventListener("click", changeBackgroundColor);
