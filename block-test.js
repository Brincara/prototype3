
// block-test.js — Block Design-Inspired Test (Parietal Lobe)
let currentRound = 0;
let totalRounds = 10;
let score = 0;
let test2Started = false;

function startBlockTest() {
    currentRound = 0;
    score = 0;
    test2Started = true;
    document.getElementById("block-result").innerText = "";
    nextBlockRound();
}

function nextBlockRound() {
    if (currentRound >= totalRounds) {
        document.getElementById("block-result").innerText =
            "Test completed! Your score: " + score + "/" + totalRounds;
        document.getElementById("restart-block-test").style.display = "inline-block";
        document.getElementById("cta-button").style.display = "block";
        return;
    }

    // Simulate a new shape round (Placeholder logic)
    document.getElementById("block-target").innerText = "Target Shape " + (currentRound + 1);
    currentRound++;
}

function submitBlockAnswer(isCorrect) {
    if (!test2Started) return;
    if (isCorrect) score++;
    nextBlockRound();
}

function restartBlockTest() {
    startBlockTest();
    document.getElementById("restart-block-test").style.display = "none";
    document.getElementById("cta-button").style.display = "none";
}
