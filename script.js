//computer to choose a pick randomly
function getComputerChoice() {
  // Number between 1 and 3
  computerCount = Math.floor(Math.random() * 3) + 1;

  if (computerCount === 1) {
    return 'Rock';
 
  }
  else if (computerCount === 2) {
    
    return 'Paper';
  }

  else if (computerCount === 3) {
    
    return 'Scissors';
  }
  
}


//user will input his/her pick
function playerSelection() {
  let playerChoice = prompt("What's your pick? Rock, Paper, or Scissors?");

  if (playerChoice == 'Rock'){
    return 'Rock';  
  }

  else if (playerChoice == 'Paper'){
    return 'Paper';
  }

  else if (playerChoice == 'Scissors'){
    return 'Scissors';
  }
  
}

function playRound(playerSelection, getComputerChoice) {
    let result = "";
    if (playerSelection === getComputerChoice){
      result = "Draw"; 
    }
    if (playerSelection === "Rock" && getComputerChoice === "Paper") {
      return result = "You lose, computer wins";
    }

    if (playerSelection === "Rock" && getComputerChoice === "Scissors") {
      return result = "You win, computer lose";
    }
    
    if (playerSelection === "Paper" && getComputerChoice === "Rock") {
      return result = "You win, computer lose";
    }
    
    if (playerSelection === "Paper" && getComputerChoice === "Scissors") {
      return result = "You lose, computer wins";
    }
    
    if (playerSelection === "Scissors" && getComputerChoice === "Paper") {
      return result = "You win, computer lose";
    }
    
    if (playerSelection === "Scissors" && getComputerChoice === "Rock") {
      return result = "You lose, computer wins";
    }
    
  }
  

  
function game() {

}  

console.log("Player choice is "+ playerSelection());
console.log(getComputerChoice());
console.log(playRound());