
let round = 0;
let score = 0;
let totalRounds = 10;
let targetPattern = [];
let playerPattern = [];
const gridSize = 3;

const targetContainer = document.getElementById("target-grid");
const playerContainer = document.getElementById("player-grid");
const rotateBtn = document.getElementById("rotateBtn");
const placeBtn = document.getElementById("placeBtn");
const resultContainer = document.getElementById("test2-result");
const ctaContainer = document.getElementById("cta-container");

function generateRandomPattern() {
    const pattern = Array.from({ length: gridSize * gridSize }, () =>
        Math.random() < 0.4 ? 1 : 0
    );
    return pattern;
}

function renderGrid(container, pattern, editable = false) {
    container.innerHTML = "";
    pattern.forEach((val, idx) => {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.classList.add(val ? "filled" : "empty");
        if (editable) {
            cell.dataset.index = idx;
            cell.addEventListener("click", () => {
                playerPattern[idx] = (playerPattern[idx] + 1) % 2;
                renderGrid(playerContainer, playerPattern, true);
            });
        }
        container.appendChild(cell);
    });
}

function rotatePlayerPattern() {
    const newPattern = Array(gridSize * gridSize).fill(0);
    for (let r = 0; r < gridSize; r++) {
        for (let c = 0; c < gridSize; c++) {
            const newRow = c;
            const newCol = gridSize - 1 - r;
            newPattern[newRow * gridSize + newCol] = playerPattern[r * gridSize + c];
        }
    }
    playerPattern = newPattern;
    renderGrid(playerContainer, playerPattern, true);
}

function checkMatch() {
    return targetPattern.every((val, idx) => val === playerPattern[idx]);
}

function nextRound() {
    if (round >= totalRounds) {
        resultContainer.innerHTML = `Test complete!<br>Score: ${score}/${totalRounds}<br><button onclick="restartTest2()">Restart Test</button>`;
        ctaContainer.style.display = "block";
        return;
    }
    targetPattern = generateRandomPattern();
    playerPattern = Array(gridSize * gridSize).fill(0);
    renderGrid(targetContainer, targetPattern);
    renderGrid(playerContainer, playerPattern, true);
    resultContainer.innerHTML = `Round ${round + 1} of ${totalRounds}`;
    ctaContainer.style.display = "none";
}

function placeShape() {
    if (checkMatch()) {
        score++;
        resultContainer.innerHTML = "✅ Correct!";
    } else {
        resultContainer.innerHTML = "❌ Incorrect.";
    }
    round++;
    setTimeout(nextRound, 1000);
}

function restartTest2() {
    round = 0;
    score = 0;
    nextRound();
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
    rotateBtn.addEventListener("click", rotatePlayerPattern);
    placeBtn.addEventListener("click", placeShape);
    nextRound();
});
