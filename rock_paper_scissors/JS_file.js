// JS initial commit

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

function getHumanChoice() {
  const humanAnswer = prompt("Please insert your choice!");

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

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanSelection === "rock" && computerSelection === "rock") {
    console.log(
      `User choice: "rock" 
Computer choice: "rock"

Draw! You both selected rock!`
    );
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    console.log(
      `User choice: "paper"
Computer choice: "rock"

User wins! Paper beats rock!`
    );
  } else if (humanSelection === "scissors" && computerSelection === "rock") {
    console.log(
      `User choice: "scissors"
Computer choice: "rock"

Computer wins! Rock beat scissors!`
    );
  } else if (humanSelection === "paper" && computerSelection === "paper") {
    console.log(
      `User choice: "paper"
Computer choice: "paper"

Draw! You both selected paper!`
    );
  } else if (
    humanSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log(
      `User choice: "scissors"
Computer choice: "scissors"

Draw! You both selected scissors!`
    );
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    console.log(
      `User choice: "rock"
Computer choice: "paper"

Computer wins! Paper beats rock!`
    );
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    console.log(
      `User choice: "rock"
Computer choice: "scissors"

You win! Rock beats scissors!`
    );
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    console.log(
      `User choice: "paper"
Computer choice: "scissors"

Computer wins! Scissors beat paper!`
    );
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    console.log(
      `User choice: "scissors"
Computer choice: "paper"

You win! Scissors beat paper!`
    );
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
