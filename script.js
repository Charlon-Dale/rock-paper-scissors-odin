let playerScore = 0;
let computerScore = 0;

//to make playerInput case-insensitive 
const rockResult = /rock/gi;
const paperResult = /paper/gi;
const scissorResult = /scissors/gi;
 
let getComputerChoice = () => {
  const computerPicksRock = 'Rock';
  const computerPickspaper= 'Paper';
  const computerPicksScissors= 'Scissors';

  let randomPick = Math.floor(Math.random() * 3) + 1;

  if (randomPick == 1) {
    return computerPicksRock;
  }
  else if (randomPick == 2) {
    return computerPickspaper;
  }

  else if (randomPick == 3) {
    return computerPicksScissors;
  }
  
}

let getPlayerChoice = () => {
  const noInput = null;
  const inputError = false;

  let playerInput = prompt("What's your pick? Rock, Paper, or Scissors?");

  while (playerInput == noInput) {
    playerInput = prompt("Please pick from Rock, Paper, or Scissors.");
  }

  let checkInput = validateResult(playerInput);
  while (checkInput == inputError) {
    playerInput = prompt("Try Again.");
    
  while (playerInput == noInput) {
    playerInput = prompt("Please pick from Rock, Paper, or Scissors.");
  }
    checkInput = validateResult(playerInput);
  }

    return playerInput;

}

let validateResult = (rockResult, paperResult, scissorResult) => {
  return rockResult, paperResult, scissorResult;
}


let playGame = () => {
  for (let roundNum = 1; roundNum <= 5; roundNum++) {
    playRoundGame(roundNum);

  }
    showGameWinner(playerScore, computerScore);
}


let playRoundGame = (roundNum) => {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const showRoundWinner = compareChoice(playerSelection, computerSelection);  
  showRoundOverview(playerSelection, computerSelection, showRoundWinner, roundNum);
}

let compareChoice = (playerSelection, computerSelection) => {
  const gameIsDraw = 'Draw';
  const playerWinsRound = 'Player win';
  const computerWinsRound = 'Computer win';

  if (playerSelection === computerSelection)
  {
    return gameIsDraw;
  }

  else if (
    playerSelection === 'Paper' && computerSelection === 'Rock'||
    playerSelection === 'Scissors' && computerSelection === 'Paper'||
    playerSelection === 'Rock' && computerSelection === 'Scissors')         
  {
    ++playerScore;
    return playerWinsRound;  
  }

  else 
  {
    ++computerScore;
    return computerWinsRound;
  }
}

const showGameWinner = (playerScore, computerScore) => {
  
  if(playerScore == computerScore) {
    console.log("Game is Draw");
  }

  else if(playerScore >= computerScore) {
    console.log("Player wins the game, better luck next time computer");

  }
  else {
    console.log("Computer wins, better luck next time player");
  }
}

// to show overview
const showRoundOverview = (getPlayerChoice, getComputerChoice, showRoundWinner, roundNum) => {
  console.log("Round:", roundNum);
  console.log("Player Chose:", getPlayerChoice);
  console.log("Computer Chose:", getComputerChoice);
  console.log("Player Score: " + playerScore,"Computer Score: " + computerScore);
  console.log(showRoundWinner);
  console.log("-------------------------------");
}


playGame();

