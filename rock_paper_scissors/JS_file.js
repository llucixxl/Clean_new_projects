// JS initial commit

// Computer choice function

function getComputerChoice() {
  const calcFormula = Math.floor(Math.random() * 3);

  if (calcFormula === 0) {
    return "rock";
  } else if (calcFormula === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// End of computer choice function

// playGame function

function playGame() {
  // Score storing variables

  let computerScore = 0;
  let humanScore = 0;

  // End of score storing variables

  // Menu buttons listener for click

  let menuButtons = document.querySelector("#menu-container");
  menuButtons.addEventListener("click", (event) => {
    let target = event.target.closest("button");

    if (!target) return;

    switch (target.id) {
      case "rock":
        // console.log(rockHumanChoice);
        // console.log(getComputerChoice());
        break;
      case "paper":
        // console.log(paperHumanChoice);
        // console.log(getComputerChoice());
        break;
      case "scissors":
        // console.log(scissorsHumanChoice);
        // console.log(getComputerChoice());
        break;
    }
    scoreBoard(target.id, getComputerChoice());

    if (humanScore === 5) {
      console.log(`The human is the winner of the round!`);
      humanScore = 0;
      computerScore = 0;
    } else if (computerScore === 5) {
      console.log(`The computer is the winner of the round!`);
      humanScore = 0;
      computerScore = 0;
    }
  });

  // End of Menu buttons listener for click

  // Start of scoreBoard function code

  function scoreBoard(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
      console.log(
        `User choice: "rock"
Computer choice: "rock"

Draw! You both selected rock!`
      );
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log(
        `User choice: "paper"
Computer choice: "rock"

Human wins! Paper beats rock!`
      );
      humanScore++;
      console.log(`Human: ` + humanScore);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log(
        `User choice: "scissors"
Computer choice: "rock"

Computer wins! Rock beat scissors!`
      );
      computerScore++;
      console.log(`Computer: ` + computerScore);
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      console.log(
        `User choice: "paper"
Computer choice: "paper"

Draw! You both selected paper!`
      );
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      console.log(
        `User choice: "scissors"
Computer choice: "scissors"

Draw! You both selected scissors!`
      );
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log(
        `User choice: "rock"
Computer choice: "paper"

Computer wins! Paper beats rock!`
      );
      computerScore++;
      console.log(`Computer: ` + computerScore);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log(
        `User choice: "rock"
Computer choice: "scissors"

Human win! Rock beats scissors!`
      );
      humanScore++;
      console.log(`Human: ` + humanScore);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log(
        `User choice: "paper"
Computer choice: "scissors"

Computer wins! Scissors beat paper!`
      );
      computerScore++;
      console.log(`Computer: ` + computerScore);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log(
        `User choice: "scissors"
Computer choice: "paper"

Human win! Scissors beat paper!`
      );
      humanScore++;
      console.log(`Human: ` + humanScore);
    }
  }

  // End of scoreBoard function code
}

// End of playGame function

playGame();
