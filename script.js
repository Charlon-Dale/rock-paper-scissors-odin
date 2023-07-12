//computer to choose a pick randomly
function computerChoice() {
  // generate number between 1 and 3
  randomPick = Math.floor(Math.random() * 3) + 1;

  if (randomPick === 1) {
    return 'Rock';
 
  }
  else if (randomPick === 2) {
    
    return 'Paper';
  }

  else if (randomPick === 3) {
    
    return 'Scissors';
  }
  
}


//user will input his/her pick
function playerChoice() {
  let playerPrompt = prompt("What's your pick? Rock, Paper, or Scissors?");

  //to Match the result case-insensitive
  const rockResult = /rock/gi;
  const paperResult = /paper/gi;
  const scissorResult = /scissors/gi;
  
  
  if(playerPrompt.match(rockResult)) {
    return 'Rock';
  }

  else if(playerPrompt.match(paperResult)) {
    return 'Paper';
  }

  else if(playerPrompt.match(scissorResult)) {
    return 'Scissors';
  }  
}


function playRound(playerSelection, computerSelection) {
    let result;
    
    if (playerSelection === computerSelection){
      return result = "Draw"; 
    }
    if (playerSelection === 'Rock' && computerSelection === 'Paper') {
      return result = "You lose, computer wins";
    }

    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
      return result = "You win, computer lose";
    }
    
    if (playerSelection === 'Paper' && computerSelection === 'Rock') {
      return result = "You win, computer lose";
    }
    
    if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
      return result = "You lose, computer wins";
    }
    
    if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
      return result = "You win, computer lose";
    }
    
    if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
      return result = "You lose, computer wins";
    }
    
}

const playerSelection = playerChoice();
const computerSelection = computerChoice();

function game() {}  

console.log("Player's choice: " + playerSelection);
console.log("Computer's choice: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
