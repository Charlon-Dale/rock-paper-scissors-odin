function getComputerChoice(computerCount) {
  Math.floor(Math.random() * max) + 1;
  
  let computerCount = 0;
  let chooseRock = "Rock";
  let choosePaper = "Paper";
  let chooseScissors = "Scissors";

  if (computerCount == 1) {
    return chooseRock;
  }

  else if (computerCount == 2) {
    return choosePaper;
  }

  else if (computerCount == 3) {
    return chooseScissors;
  }
  
}

function playerSelection() {

}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  // const playerSelection = "rock";
  // const computerSelection = getComputerChoice();
  // console.log(playRound(playerSelection, computerSelection));

  
function game() {

}  

console.log(getComputerChoice());