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
  let playerChoice = prompt("What's your pick? Rock, Paper, or Scissors?");

  if (playerChoice == 'Rock'){
    return playerInput = 'Rock';  
  }

  else if (playerChoice == 'Paper'){
    return playerInput = 'Paper';
  }

  else if (playerChoice == 'Scissors'){
    return playerInput = 'Scissors';
  }
  
}

function playRound(playerSelection, computerSelection) {
    result = " ";
    if (playerSelection == computerSelection) {
      return result = "Draw";
    }
  }
   
  // const playerSelection = "rock";
  // const computerSelection = getComputerChoice();
  // console.log(playRound(playerSelection, computerSelection));

  
function game() {

}  

console.log("Player choice is "+ playerSelection());
console.log(getComputerChoice());
console.log(playRound());