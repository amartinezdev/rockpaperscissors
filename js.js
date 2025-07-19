var contaP = 0;
var contaM = 0;

function rock() {
  enemy();

  const p = document.getElementById("dom");
  const p2 = document.getElementById("dom2");
  const player = document.getElementById("playerScore");
  const machine = document.getElementById("machineScore");

  p.textContent = "You choose Rock! 🪨";

  if (enemy() == 1) {
    p2.textContent = "Machine Choose: Rock 🪨 DRAW! 🪨";
  } else if (enemy() == 2) {
    p2.textContent = "Machine Choose: Paper 📋 You Lose! 🧻";
    contaM++;
    machine.textContent = "Machine Score: " + contaM;
  } else {
    contaP++;
    player.textContent = "Your Score: " + contaP;
    p2.textContent = "Machine Choose: Scissors ✂️ You WIN!";
  }

  end();
}

function paper() {
  enemy();

  const p = document.getElementById("dom");
  const p2 = document.getElementById("dom2");
  const player = document.getElementById("playerScore");
  const machine = document.getElementById("machineScore");

  p.textContent = "You choose Paper! 🧻";

  if (enemy() == 1) {
    p2.textContent = "Machine Choose: Rock 🪨 You WIN!";
    contaP++;
    player.textContent = "Your Score: " + contaP;
  } else if (enemy() == 2) {
    p2.textContent = "Machine Choose: Paper 📋 DRAW! 🧻";
  } else {
    p2.textContent = "Machine Choose: Scissors ✂️ You Lose!";
    contaM++;
    machine.textContent = "Machine Score: " + contaM;
  }

  end();
}

function scissors() {
  enemy();

  const p = document.getElementById("dom");
  const p2 = document.getElementById("dom2");
  const player = document.getElementById("playerScore");
  const machine = document.getElementById("machineScore");

  p.textContent = "You choose Scissors! ✂️";

  if (enemy() == 1) {
    p2.textContent = "Machine Choose: Rock 🪨 You Lose!";
    contaM++;
    machine.textContent = "Machine Score: " + contaM;
  } else if (enemy() == 2) {
    p2.textContent = "Machine Choose: Paper 📋 You WIN! 🧻";
    contaP++;
    player.textContent = "Your Score: " + contaP;
  } else {
    p2.textContent = "Machine Choose: Scissors ✂️ DRAW!";
  }

  end();
}

function enemy() {
  return Math.floor(Math.random() * 3 + 1);
}

function end() {
  const sum = contaM + contaP;

  if (sum === 5) {
    document.getElementById("botonesJuego").classList.add("disabled");

    document.getElementById("bot1").disabled = true;
    document.getElementById("bot2").disabled = true;
    document.getElementById("bot3").disabled = true;

    const reiniciar = document.createElement("button");
    reiniciar.textContent = "Reset Game";
    reiniciar.id = "reiniciar";
    reiniciar.addEventListener("click", () => location.reload()); // Recarga la página
    document.getElementById("bot").appendChild(reiniciar);

    const p = document.getElementById("dom");
    if (contaM > contaP) {
      p.textContent = "You Lost the game!";
    } else {
      p.textContent = "You Win the game!";
    }
  }
}
