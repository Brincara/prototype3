
const grid = document.getElementById("game-grid");
const restartBtn = document.getElementById("restart-game");
const scoreDisplay = document.getElementById("score-display");

let score = 0;
let round = 0;

function generateGrid() {
  grid.innerHTML = "";
  let correctIndex = Math.floor(Math.random() * 9);
  for (let i = 0; i < 9; i++) {
    let cell = document.createElement("button");
    cell.className = "game-cell";
    if (i === correctIndex) {
      cell.textContent = "⚓";
      cell.onclick = () => { score++; nextRound(); };
    } else {
      cell.textContent = "🪨";
      cell.onclick = () => { nextRound(); };
    }
    grid.appendChild(cell);
  }
}

function nextRound() {
  round++;
  if (round >= 5) {
    endGame();
  } else {
    generateGrid();
  }
}

function endGame() {
  grid.innerHTML = "";
  scoreDisplay.textContent = `Score: ${score}/5`;
}

restartBtn.onclick = () => {
  score = 0;
  round = 0;
  scoreDisplay.textContent = "";
  generateGrid();
};

generateGrid();
