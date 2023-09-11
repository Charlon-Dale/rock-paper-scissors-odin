let playerScore = 0;
let computerScore = 0;

const choiceOptions = ["rock", "paper", "scissors"];

let getComputerChoice = () => {

  let randomPick = Math.floor(Math.random() * choiceOptions.length) + 1;

  if (randomPick === 1) {
    return choiceOptions[0];
  }

  else if (randomPick === 2) {
    return choiceOptions[1];
  }

  else if (randomPick === 3) {
    return choiceOptions[2];
  }

}

let getPlayerChoice = () => {
  const noInput = null;

  let playerInput = prompt("What's your pick? Rock, Paper, or Scissors?");

  while (playerInput === noInput) {
    playerInput = prompt("Please pick from Rock, Paper, or Scissors.");
  }

  while (playerInput !== choiceOptions[0] || playerInput !== choiceOptions[1] || playerInput !== choiceOptions[2]) {

    playerInput = playerInput.toLowerCase();

    if (playerInput === choiceOptions[0] || playerInput === choiceOptions[1] || playerInput === choiceOptions[2]) {
      break;
    }

    playerInput = prompt("Try Again.");

  }

  return playerInput;

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
    playerSelection === choiceOptions[1] && computerSelection === choiceOptions[0] ||
    playerSelection === choiceOptions[2] && computerSelection === choiceOptions[1] ||
    playerSelection === choiceOptions[0] && computerSelection === choiceOptions[2]) {
    ++playerScore;
    return playerWinsRound;
  }

  else {
    ++computerScore;
    return computerWinsRound;
  }
}

const showGameWinner = (playerScore, computerScore) => {

  if (playerScore === computerScore) {
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

