let playerSelection = playerChoice();
let computerSelection = computerChoice();

let playerScore = 0;
let computerScore = 0;

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
  
  while (playerPrompt == null) {
    playerPrompt = prompt("Please pick from Rock, Paper, or Scissors");
  }

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
 
}


function playRound(playerSelection, computerSelection) {
    
  let playerPick = playerSelection;
  let computerPick = computerSelection;

  if (playerSelection === computerSelection)
            {
              console.log("Player's choice: " + playerPick);
              console.log("Computer's choice: " + computerPick);
              console.log("Computer Score: " + playerScore);
              console.log("Player Score: " + computerScore);
              console.log("Draw"); 
            }

  else if (playerPick === 'Rock' && computerPick === 'Paper'||
           playerPick === 'Paper' && computerPick === 'Scissors'||
           playerPick === 'Scissors' && computerPick === 'Rock') 
            
            {
              ++playerScore;
              console.log("Player's choice: " + playerPick);
              console.log("Computer's choice: " + computerPick);
              console.log("Computer Score: " + playerScore);
              console.log("Player Score: " + computerScore);
              console.log("You, win, computer lose");
              
            }

  else 
            {
              ++computerScore;
              console.log("Player's choice: " + playerPick);
              console.log("Computer's choice: " + computerPick);
              console.log("Computer Score: " + playerScore);
              console.log("Player Score: " + computerScore);
              console.log("You lose, computer win");
 
            }
}
 

function game() {
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
}

game();

