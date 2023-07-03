//computer to choose a pick randomly
function getComputerChoice(computerCount) {
  // Number between 1 and 3
  computerCount = Math.floor(Math.random() * 3) + 1;
  
  chooseRock = "Rock";
  choosePaper = "Paper";
  chooseScissors = "Scissors";

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
//user will will input his/her pick
function playerSelection() {
  let playerInput = prompt("What's your pick?");

  
}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  // const playerSelection = "rock";
  // const computerSelection = getComputerChoice();
  // console.log(playRound(playerSelection, computerSelection));

  
function game() {

}  

console.log(playerSelection());
console.log(getComputerChoice());