// JS initial commit

function getComputerChoice() {
  const calcFormula = Math.floor(Math.random() * 3);

  if (calcFormula === 0) {
    console.log("rock");
  } else if (calcFormula === 1) {
    console.log("paper");
  } else {
    console.log("scissors");
  }
}
