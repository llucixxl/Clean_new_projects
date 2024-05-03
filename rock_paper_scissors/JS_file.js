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
  let humanAnswer = prompt("Please insert your choice!");
  humanAnswer = humanAnswer.toLowerCase();

  if (humanAnswer === "rock") {
    return "rock";
  } else if (humanAnswer === "paper") {
    return "paper";
  } else if (humanAnswer === "scissors") {
    return "scissors";
  } else {
    alert("Please insert one of the following: rock, paper, scissors");
    prompt("Please insert your choice!");
  }
}

// End of human choice function

function playGame() {
  // Score storing variables

  let computerScore = 0;
  let humanScore = 0;

  // End of score storing variables

  // playRound function code

  function playRound(humanChoice, computerChoice) {
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

  // End of playRound function code

  // scoreBoard function to make score increment

  function scoreBoard() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  // End of scoreBoard function

  // Call playRound 5 times in a round

  scoreBoard();
  scoreBoard();
  scoreBoard();
  scoreBoard();
  scoreBoard();

  // End of the playRound call

  // Winner announce in the console

  if (humanScore > computerScore) {
    console.log(`The human is the winner of the round!`);
  } else if (computerScore > humanScore) {
    console.log(`The computer is the winner of the round!`);
  } else if (humanScore === computerScore) {
    console.log(`The round is a DRAW!`);
  }
}

// End of winner announce in the console

playGame();
