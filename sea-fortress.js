let seaScore = 0, seaRound = 0;
const seaMaxRounds = 10;
const seaContainer = document.getElementById('sea-fortress-container');

function renderSeaFortress() {
  if (seaRound >= seaMaxRounds) {
    seaContainer.innerHTML = `<p>Game complete!</p><p>Score: ${seaScore}/${seaMaxRounds}</p><button onclick="restartSeaFortress()">Restart Game</button>`;
    return;
  }

  const shipCount = Math.floor(Math.random() * 4) + 1;
  let ships = '';
  for (let i = 0; i < shipCount; i++) ships += '🚢 ';
  seaContainer.innerHTML = `
    <div>${ships}</div>
    ${[1,2,3,4].map(n => `<button onclick="checkSeaFortress(${n}, ${shipCount})">${n}</button>`).join('')}
    <p>Score: ${seaScore}/${seaRound}</p>
  `;
}
function checkSeaFortress(selected, correct) {
  if (selected === correct) seaScore++;
  seaRound++;
  setTimeout(renderSeaFortress, 500);
}
function restartSeaFortress() {
  seaScore = 0; seaRound = 0;
  renderSeaFortress();
}
renderSeaFortress();
