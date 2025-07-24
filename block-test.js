
// block-test.js — Clickable Block Design Test

let currentRound = 1;
let totalRounds = 10;
let score = 0;

function rotateBlock() {
  const feedback = document.getElementById("block-feedback");
  feedback.innerText = "Block rotated (simulated).";
}

function placeBlock() {
  const feedback = document.getElementById("block-feedback");
  if (currentRound <= totalRounds) {
    feedback.innerText = "Shape placed correctly (simulated) for round " + currentRound + ".";
    score++;
    currentRound++;
    document.getElementById("block-target").innerText = "Target Shape " + currentRound;
    if (currentRound > totalRounds) {
      feedback.innerText = "Test completed! Final score: " + score + "/" + totalRounds;
      document.getElementById("restart-block-test").style.display = "inline-block";
      document.getElementById("cta-button").style.display = "block";
    }
  }
}

function restartBlockTest() {
  currentRound = 1;
  score = 0;
  document.getElementById("block-feedback").innerText = "";
  document.getElementById("block-target").innerText = "Target Shape 1";
  document.getElementById("cta-button").style.display = "none";
  document.getElementById("restart-block-test").style.display = "none";
}
