const words = ["Red", "Blue", "Green", "Yellow"];
const colors = ["red", "blue", "green", "yellow"];
let currentColor = "";

function randomizeWord() {
    const word = words[Math.floor(Math.random() * words.length)];
    currentColor = colors[Math.floor(Math.random() * colors.length)];
    const stroopWord = document.getElementById("stroop-word");
    stroopWord.textContent = word;
    stroopWord.style.color = currentColor;
    document.getElementById("result-message").textContent = "";
}
function checkColor(selectedColor) {
    const result = selectedColor === currentColor ? "✅ Correct!" : "❌ Try again.";
    document.getElementById("result-message").textContent = result;
    setTimeout(randomizeWord, 1000);
}
window.onload = randomizeWord;