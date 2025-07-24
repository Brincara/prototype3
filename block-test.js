
// block-test.js — Visual Block Design Test with Side-by-Side Comparison

let currentRound = 1;
let totalRounds = 10;
let score = 0;
let rotation = 0;

const targetShapes = [
  [[1, 0], [1, 1], [0, 1]],
  [[1, 1], [1, 0], [0, 0]],
  [[0, 1], [1, 1], [1, 0]]
];

function drawShape(gridId, shape, rot = 0) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = '';
  const gridSize = 3;
  for (let row = 0; row < gridSize; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.style.display = 'flex';
    for (let col = 0; col < gridSize; col++) {
      const cell = document.createElement('div');
      cell.style.width = '30px';
      cell.style.height = '30px';
      cell.style.border = '1px solid #aaa';
      cell.style.margin = '1px';
      cell.style.background = matchShape(shape, row, col, rot) ? '#3498db' : '#fff';
      rowDiv.appendChild(cell);
    }
    grid.appendChild(rowDiv);
  }
}

function matchShape(shape, row, col, rot) {
  for (let [r, c] of shape) {
    let [nr, nc] = rotate(r, c, rot);
    if (nr === row && nc === col) return true;
  }
  return false;
}

function rotate(r, c, times) {
  for (let i = 0; i < times; i++) {
    [r, c] = [c, 2 - r];
  }
  return [r, c];
}

function rotateBlock() {
  rotation = (rotation + 1) % 4;
  drawShape('player-grid', targetShapes[currentRound - 1], rotation);
}

function placeBlock() {
  if (rotation === 1) { score++; } // simulate a correct match if rotation is 90°
  currentRound++;
  rotation = 0;
  if (currentRound > totalRounds) {
    document.getElementById("block-feedback").innerText = "Test completed! Score: " + score + "/" + totalRounds;
    document.getElementById("restart-block-test").style.display = "inline-block";
    document.getElementById("cta-button").style.display = "block";
    document.getElementById("target-grid").innerHTML = '';
    document.getElementById("player-grid").innerHTML = '';
  } else {
    drawShape('target-grid', targetShapes[(currentRound - 1) % targetShapes.length]);
    drawShape('player-grid', targetShapes[(currentRound - 1) % targetShapes.length], rotation);
  }
}

function restartBlockTest() {
  currentRound = 1;
  score = 0;
  rotation = 0;
  document.getElementById("block-feedback").innerText = "";
  document.getElementById("restart-block-test").style.display = "none";
  document.getElementById("cta-button").style.display = "none";
  drawShape('target-grid', targetShapes[0]);
  drawShape('player-grid', targetShapes[0], 0);
}

window.onload = () => {
  drawShape('target-grid', targetShapes[0]);
  drawShape('player-grid', targetShapes[0], 0);
}
