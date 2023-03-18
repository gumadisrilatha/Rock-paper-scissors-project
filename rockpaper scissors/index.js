var rock = document.getElementById("rock"),
  paper = document.getElementById("paper"),
  scissor = document.getElementById("scissors"),
  player = document.getElementById("player"),
  computer = document.getElementById("computer");

var choices = ["rock", "paper", "scissors"];
var emoji = { rock: "✊️", paper: "🖐️", scissors: "✌️" };

rock.addEventListener("click", function () {
  const random = choices[Math.floor(Math.random() * choices.length)];

  check("rock", random);
});

paper.addEventListener("click", function () {
  const random = choices[Math.floor(Math.random() * choices.length)];

  check("paper", random);
});

scissor.addEventListener("click", function () {
  const random = choices[Math.floor(Math.random() * choices.length)];

  check("scissors", random);
});

function check(player, computer) {
  if (player == "rock" && computer == "rock") {
    index("Both are Tie!", player, computer);
    score(false, false);
  } else if (player == "rock" && computer == "paper") {
    index("You Lose!", player, computer);
    score(false, true);
  } else if (player == "rock" && computer == "scissors") {
    index("You Win!", player, computer);
    score(true, false);
  } else if (player == "paper" && computer == "paper") {
    index(" Tie!", player, computer);
    score(false, false);
  } else if (player == "paper" && computer == "scissors") {
    index("You Lose!", player, computer);
    score(false, true);
  } else if (player == "paper" && computer == "rock") {
    index("You Win!", player, computer);
    score(true, false);
  } else if (player == "scissors" && computer == "scissors") {
    index("Tie!", player, computer);
    score(false, false);
  } else if (player == "scissors" && computer == "rock") {
    index("You Lose!", player, computer);
    score(false, true);
  } else if (player == "scissors" && computer == "paper") {
    index("You Win!", player, computer);
    score(true, false);
  }
}

function index(note, player, computer, score) {
  document.getElementById(
    "note-if"
  ).innerHTML = `<div class="notification ${score}" id="note-if">
    <button class="delete" id="deleteButton"></button>
    player choose: <span id="player">${player + " " + emoji[player]}</span>
    <br />
    computer choose: <span id="computer">${
      computer + " " + emoji[computer]
    }</span>
    <br />
    <p">
      <span">${note}</span>
    </p>
  </div>`;

  document
    .getElementById("deleteButton")
    .addEventListener("click", function () {
      document.getElementById("notif").innerHTML = "";
      //document.getElementById("computer").removeChild(document.getElementById('notif'))
      //document.getElementById("computer").appendChild(document.createElement('div')).id = "notif"
    });
}

function score(player, computer) {
  var user = document.getElementById("user-score"),
    computer = document.getElementById("comp-score");

  if (player) {
    var score = Number(user.textContent) + 1;
    user.innerHTML = score;
  } else if (computer) {
    var score = Number(computer.textContent) + 1;
    computer.innerHTML = score;
  }
}
