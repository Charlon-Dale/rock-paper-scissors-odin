let playerScore = 0;
let computerScore = 0;

let playerSelection = playerChoice();
let computerSelection = computerChoice();


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

  //for case-insensitive 
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

  else {
    return 'Pick not found. Try again.';
  }
}


function playRound(playerSelection, computerSelection) {
    
  
    if (playerSelection === computerSelection){
      return "Draw"; 
    }
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
      return "You lose, computer wins";
    }

    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
      return "You win, computer lose";
    }
    
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
      return "You win, computer lose";
    }
    
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
      return "You lose, computer wins";
    }
    
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
      return "You win, computer lose";
    }
    
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
      return "You lose, computer wins";
    }
    
    else {
      return "Game forfeits."
    }
}


function game() {





}  
console.log("Best of 5")
console.log("Player's choice: " + playerSelection);
console.log("Computer's choice: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));
