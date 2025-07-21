
const colors = ["Red", "Blue", "Green", "Yellow"];
const colorMap = {
  "Red": "#FF0000",
  "Blue": "#0000FF",
  "Green": "#008000",
  "Yellow": "#FFD700"
};

let score = 0;
let attempts = 0;
let currentColor = "";

const colorText = document.getElementById("color-text");
const buttonContainer = document.getElementById("button-container");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setUpTrial() {
  currentColor = getRandomColor();
  const displayedWord = getRandomColor();
  colorText.textContent = displayedWord;
  colorText.style.color = colorMap[currentColor];

  buttonContainer.innerHTML = "";
  colors.forEach(color => {
    const btn = document.createElement("button");
    btn.textContent = color;
    btn.style.backgroundColor = colorMap[color];
    btn.className = "color-button";
    btn.onclick = () => handleAnswer(color);
    buttonContainer.appendChild(btn);
  });
}

function handleAnswer(selectedColor) {
  if (selectedColor === currentColor) {
    score++;
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = "❌ Wrong!";
  }
  attempts++;
  scoreDisplay.textContent = `Score: ${score}/${attempts}`;
  if (attempts >= 10) {
    colorText.textContent = "Test complete!";
    buttonContainer.innerHTML = "";
    restartButton.style.display = "inline-block";
  } else {
    setTimeout(() => {
      feedback.textContent = "";
      setUpTrial();
    }, 800);
  }
}

restartButton.onclick = () => {
  score = 0;
  attempts = 0;
  feedback.textContent = "";
  scoreDisplay.textContent = "Score: 0/0";
  restartButton.style.display = "none";
  setUpTrial();
};

// Start test on load
setUpTrial();
