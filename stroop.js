
const words = ["Red", "Blue", "Green", "Yellow"];
const colors = ["Red", "Blue", "Green", "Yellow"];
let currentTrial = 0;
let correctCount = 0;

const colorWord = document.getElementById("color-word");
const buttons = document.querySelectorAll(".color-button");
const scoreDisplay = document.getElementById("stroop-score");
const restartBtn = document.getElementById("restart-stroop");

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function displayNewTrial() {
  const word = getRandomElement(words);
  const color = getRandomElement(colors);
  colorWord.textContent = word;
  colorWord.style.color = color.toLowerCase();
  colorWord.setAttribute("data-answer", color);
}

function endTest() {
  colorWord.textContent = "Test complete!";
  buttons.forEach(btn => btn.disabled = true);
  restartBtn.style.display = "inline-block";
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const correctColor = colorWord.getAttribute("data-answer");
    if (btn.getAttribute("data-color") === correctColor) {
      correctCount++;
    }
    currentTrial++;
    scoreDisplay.textContent = `Score: ${correctCount}/${currentTrial}`;
    if (currentTrial < 10) {
      displayNewTrial();
    } else {
      endTest();
    }
  });
});

restartBtn.addEventListener("click", () => {
  currentTrial = 0;
  correctCount = 0;
  scoreDisplay.textContent = "Score: 0/0";
  buttons.forEach(btn => btn.disabled = false);
  restartBtn.style.display = "none";
  displayNewTrial();
});

displayNewTrial();
