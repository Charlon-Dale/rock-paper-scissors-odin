function getComputerChoice(computerCount) {
  // Number between 1 and 3
  computerCount = Math.floor(Math.random() * 3) + 1;
  let choose = "";
  
  chooseRock = "Rock";
  choosePaper = "Paper";
  chooseScissors = "Scissors";

  //computer to choose a pick
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