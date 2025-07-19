let playerScore = 0;
let machineScore = 0;

const playerMessage = document.getElementById("dom");
const resultMessage = document.getElementById("dom2");
const playerScoreEl = document.getElementById("playerScore");
const machineScoreEl = document.getElementById("machineScore");

function play(playerChoice) {
  const enemyChoice = getEnemyChoice();

  playerMessage.textContent = `You chose ${getEmoji(playerChoice)}!`;

  const outcome = getRoundResult(playerChoice, enemyChoice);

  switch (outcome) {
    case "win":
      playerScore++;
      resultMessage.textContent = `Machine chose ${getEmoji(enemyChoice)}. You WIN!`;
      break;
    case "lose":
      machineScore++;
      resultMessage.textContent = `Machine chose ${getEmoji(enemyChoice)}. You Lose!`;
      break;
    case "draw":
      resultMessage.textContent = `Machine chose ${getEmoji(enemyChoice)}. DRAW!`;
      break;
  }

  updateScores();
  checkGameEnd();
}

function getEnemyChoice() {
  return Math.floor(Math.random() * 3 + 1);
}

function getRoundResult(player, enemy) {
  if (player === enemy) return "draw";

  if ((player === 1 && enemy === 3) || (player === 2 && enemy === 1) || (player === 3 && enemy === 2)) {
    return "win";
  } else {
    return "lose";
  }
}

function getEmoji(choice) {
  switch (choice) {
    case 1:
      return "Rock 🪨";
    case 2:
      return "Paper 📋";
    case 3:
      return "Scissors ✂️";
  }
}

function updateScores() {
  playerScoreEl.textContent = `Your Score: ${playerScore}`;
  machineScoreEl.textContent = `Machine Score: ${machineScore}`;
}

function checkGameEnd() {
  if (playerScore + machineScore >= 5) {
    disableButtons();

    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset Game";
    resetBtn.id = "reiniciar";
    resetBtn.addEventListener("click", () => location.reload());
    document.getElementById("bot").appendChild(resetBtn);

    playerMessage.textContent = playerScore > machineScore ? "You Win the game!" : "You Lost the game!";
  }
}

function disableButtons() {
  document.querySelectorAll("button.choice").forEach((btn) => (btn.disabled = true));
  document.getElementById("botonesJuego")?.classList.add("disabled");
}
