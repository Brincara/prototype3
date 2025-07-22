const colors = ['Red', 'Green', 'Blue', 'Yellow'];
const colorClasses = ['red', 'green', 'blue', 'yellow'];
let score = 0, attempts = 0, maxRounds = 10;

const container = document.getElementById('stroop-container');
function nextStroop() {
  if (attempts >= maxRounds) {
    container.innerHTML = `<p>Test complete!</p><p>Score: ${score}/${maxRounds}</p><button onclick="restartStroop()">Restart Test</button>`;
    return;
  }

  const word = colors[Math.floor(Math.random() * colors.length)];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const colorClass = color.toLowerCase();

  container.innerHTML = `
    <h3 style="color: ${color};">${word}</h3>
    ${colors.map((btn, idx) => `<button class="color-button ${colorClasses[idx]}" onclick="checkStroop('${btn}', '${color}')">${btn}</button>`).join('')}
    <p>Score: ${score}/${attempts}</p>
  `;
}
function checkStroop(selected, correct) {
  if (selected === correct) score++;
  attempts++;
  nextStroop();
}
function restartStroop() {
  score = 0; attempts = 0;
  nextStroop();
}
nextStroop();
