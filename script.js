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
function playerSelection(playerInput) {
  let playerChoice = prompt("What's your pick?");

  if (playerChoice == 'rock'){
    return playerInput = 'rock';  
  }

  else if (playerChoice == 'paper'){
    return playerInput = 'paper';
  }

  else if (playerChoice == 'scissors'){
    return playerInput = 'scissors';
  }
  
}

function playRound(playerSelection, computerSelection) {
    // your code here!
  }
   
  // const playerSelection = "rock";
  // const computerSelection = getComputerChoice();
  // console.log(playRound(playerSelection, computerSelection));

  
function game() {

}  

console.log("Player choice is "+ playerSelection());
console.log(getComputerChoice());