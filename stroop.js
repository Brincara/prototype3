const colors = ['red', 'blue', 'green', 'yellow'];
let currentColor = '';
let currentText = '';
let score = 0;
let attempts = 0;

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function displayWord() {
  currentColor = getRandomColor();
  currentText = getRandomColor();
  const wordElement = document.getElementById('stroop-word');
  wordElement.textContent = currentText;
  wordElement.style.color = currentColor;
}

function handleButtonClick(event) {
  const selectedColor = event.target.getAttribute('data-color');
  const feedback = document.getElementById('stroop-feedback');
  const scoreElement = document.getElementById('stroop-score');
  const restartBtn = document.getElementById('restart-btn');

  if (selectedColor === currentColor) {
    score++;
    feedback.textContent = "✅ Correct!";
  } else {
    feedback.textContent = "❌ Wrong!";
  }

  attempts++;
  scoreElement.textContent = `Score: ${score}/${attempts}`;

  if (attempts === 10) {
    feedback.textContent += ` Final Score: ${score}/10`;
    document.querySelectorAll('.color-btn').forEach(btn => btn.disabled = true);
    restartBtn.style.display = 'inline-block';
  } else {
    setTimeout(() => {
      feedback.textContent = '';
      displayWord();
    }, 600);
  }
}

function restartTest() {
  score = 0;
  attempts = 0;
  document.getElementById('stroop-score').textContent = '';
  document.getElementById('stroop-feedback').textContent = '';
  document.querySelectorAll('.color-btn').forEach(btn => btn.disabled = false);
  document.getElementById('restart-btn').style.display = 'none';
  displayWord();
}

document.querySelectorAll('.color-btn').forEach(btn => {
  btn.addEventListener('click', handleButtonClick);
});

document.getElementById('restart-btn').addEventListener('click', restartTest);

window.onload = displayWord;
