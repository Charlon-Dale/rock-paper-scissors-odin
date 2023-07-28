let playerScore = 0;
let computerScore = 0;

  //to make playerInput case-insensitive 
  const rockResult = /rock/gi;
  const paperResult = /paper/gi;
  const scissorResult = /scissors/gi;

function getComputerChoice() {
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

function getPlayerChoice() {
  const noInput = null;
  const inputError = false;

  let playerInput = prompt("What's your pick? Rock, Paper, or Scissors?");

  while (playerInput == noInput) {
    playerInput = prompt("Please pick from Rock, Paper, or Scissors");
  }

  let check = validateResult(playerInput);
  while (check == inputError) {
    playerInput = prompt("Try Again");
    
  while (playerInput == noInput) {
      playerInput = prompt("Please pick from Rock, Paper, or Scissors");
    }
    check = validateResult(playerInput);
  }

  return playerInput;

}

function validateResult(rockResult, paperResult, scissorResult) {
  return rockResult, paperResult, scissorResult;
}

//to make a 5-round game
function playGame() {
  for (let roundNum = 1; roundNum <= 5; roundNum++) {
    playRoundGame(roundNum);

  }
    showGameWinner(playerScore, computerScore);
}


function playRoundGame(roundNum) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const showRoundWinner = compareChoice(playerSelection, computerSelection);  
    showRoundOverview(playerSelection, computerSelection, showRoundWinner, roundNum);

}

function compareChoice(playerSelection, computerSelection) {
    
  if (playerSelection === computerSelection)
            {
              return "Draw";
            }

  else if (playerSelection === 'Paper' && computerSelection === 'Rock'||
           playerSelection === 'Scissors' && computerSelection === 'Paper'||
           playerSelection === 'Rock' && computerSelection === 'Scissors') 
            
            {
              ++playerScore;
              return "Player won";  
            }

  else 
            {
              ++computerScore;
              return "Computer won";
            }
}

function showGameWinner(playerScore, computerScore) {
  if(playerScore == computerScore) {
    console.log("Game is Draw")
  }

  else if(playerScore >= computerScore) {
    console.log("Player wins, better luck next time computer");

  }
  else {
    console.log("Computer wins, better luck next time player");
  }
}

// to show overview in the console
function showRoundOverview(getPlayerChoice, getComputerChoice, showRoundWinner, roundNum) {
  console.log("Round:", roundNum);
  console.log("Player Chose:", getPlayerChoice);
  console.log("Computer Chose:", getComputerChoice);
  console.log(showRoundWinner);
  console.log("-------------------------------");
}


playGame();

