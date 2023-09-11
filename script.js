let playerScore = 0;
let computerScore = 0;

//to make player Input case-insensitive 
const rockResult = "rock";
const paperResult = "paper";
const scissorResult = "scissors";

let getComputerChoice = () => {
  const computerPicksRock = 'rock';
  const computerPickspaper = 'paper';
  const computerPicksScissors = 'scissors';


  let randomPick = Math.floor(Math.random() * 3) + 1;

  if (randomPick === 1) {
    return computerPicksRock;
  }
  else if (randomPick === 2) {
    return computerPickspaper;
  }

  else if (randomPick === 3) {
    return computerPicksScissors;
  }

}

let getPlayerChoice = () => {
  const noInput = null;

  let playerInput = prompt("What's your pick? Rock, Paper, or Scissors?");

  while (playerInput === noInput) {
    playerInput = prompt("Please pick from Rock, Paper, or Scissors.");
  }

  while (playerInput !== rockResult || playerInput !== paperResult || playerInput !== scissorResult) {
    playerInput = playerInput.toLowerCase();
    if (playerInput === rockResult || playerInput === paperResult || playerInput === scissorResult) {
      break;
    }
    playerInput = prompt("Try Again.");
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

const playRoundGame = (roundNum) => {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const showRoundWinner = compareChoice(playerSelection, computerSelection);
  showRoundOverview(playerSelection, computerSelection, showRoundWinner, roundNum);
}

let compareChoice = (playerSelection, computerSelection) => {
  const gameIsDraw = 'Draw';
  const playerWinsRound = 'Player win';
  const computerWinsRound = 'Computer win';

  if (playerSelection === computerSelection) {
    return gameIsDraw;
  }

  else if (
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper' ||
    playerSelection === 'rock' && computerSelection === 'scissors') {
    ++playerScore;
    return playerWinsRound;
  }

  else {
    ++computerScore;
    return computerWinsRound;
  }
}

const showGameWinner = (playerScore, computerScore) => {

  if (playerScore == computerScore) {
    console.log("Game is Draw");
  }

  else if (playerScore >= computerScore) {
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
  console.log(showRoundWinner);
  console.log("-------------------------------");
  console.log("Player Score: " + playerScore, "Computer Score: " + computerScore);

}


playGame();

