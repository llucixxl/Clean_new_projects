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

// Human choice function

function getHumanChoice() {
  let humanAnswer = choice;
  if (humanAnswer === "rock") {
    return "rock";
  } else if (humanAnswer === "paper") {
    return "paper";
  } else if (humanAnswer === "scissors") {
    return "scissors";
  }
}

// End of human choice function

// playGame function

function playGame() {
  // Menu buttons listener for click

  let menuButtons = document.querySelector("#menu-container");
  menuButtons.addEventListener("click", (event) => {
    let target = event.target.closest("button");

    if (!target) return;

    let rockHumanChoice = "Human selected rock!";
    let paperHumanChoice = "Human selected paper!";
    let scissorsHumanChoice = "Human selected scissors";

    switch (target.id) {
      case "rock":
        console.log(rockHumanChoice);
        break;
      case "paper":
        console.log(paperHumanChoice);
        break;
      case "scissors":
        console.log(scissorsHumanChoice);
        break;
    }
  });

  // End of Menu buttons listener for click

  // Score storing variables

  let computerScore = 0;
  let humanScore = 0;

  // End of score storing variables

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

  // playRound function to make score increment

  function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    scoreBoard(humanSelection, computerSelection);
  }

  // End of playRound function

  // Call playRound 5 times in a round

  // playRound();
  // playRound();
  // playRound();
  // playRound();
  // playRound();

  // End of the playRound call

  // Loop to play until human or computer reaches to a score of 5;
  do {
    playRound();
  } while (humanScore < 5 && computerScore < 5);

  // End of the loop to play til 5;

  // Winner announce in the console

  if (humanScore === 5) {
    console.log(`The human is the winner of the round!`);
  } else if (computerScore === 5);
  console.log(`The computer is the winner of the round!`);

  // End of winner announce in the browser's console // test commit for rps-ui branch
}

// End of playGame function

playGame();
