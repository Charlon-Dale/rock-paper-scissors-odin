let playerScore = 0;
let computerScore = 0;

  //to make prompt case-insensitive 
  const rockResult = /rock/gi;
  const paperResult = /paper/gi;
  const scissorResult = /scissors/gi;

//computer to choose a pick randomly
function computerChoice() {

  // generate random number between 1 and 3
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

//user will input a pick
function playerChoice() {
  const noInput = null;
  const inputError = false;

  let playerPrompt = prompt("What's your pick? Rock, Paper, or Scissors?");

  while (playerPrompt == noInput) {
    playerPrompt = prompt("Please pick from Rock, Paper, or Scissors");
  }

  let check = validateResult(playerPrompt);
  while (check == inputError) {
    playerPrompt = prompt("Try Again");
    
  while (playerPrompt == noInput) {
      playerPrompt = prompt("Please pick from Rock, Paper, or Scissors");
    }
    check = validateResult(playerPrompt);
  }

  return playerPrompt;

}

function validateResult(rockResult, paperResult, scissorResult) {
  return rockResult, paperResult, scissorResult;
}

//to make a 5-round game
function game() {
  for (let roundNum = 1; roundNum <= 5; roundNum++) {
    gameRound(roundNum);

  }
    gameWinner(playerScore, computerScore);
}


function gameRound(roundNum) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const showRoundWinner = playRound(playerSelection, computerSelection);  
    roundOverview(playerSelection, computerSelection, showRoundWinner, roundNum);

}

//compare each results
function playRound(playerSelection, computerSelection) {
    
  if (playerSelection === computerSelection)
            {
              return "Draw";
            }

  else if (playerSelection === 'Paper' && computerSelection === 'Rock'||
           playerSelection === 'Scissors' && computerSelection === 'Paper'||
           playerSelection === 'Rock' && computerSelection === 'Scissors') 
            
            {
              ++playerScore;
              return "Player";  
            }

  else 
            {
              ++computerScore;
              return "Computer";
            }
}

// compare overall score
function gameWinner(playerScore, computerScore) {
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
function roundOverview(playerChoice, computerChoice, showRoundWinner, roundNum) {
  console.log("Round:", roundNum);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(showRoundWinner, "Won the Round");
  console.log("-------------------------------");
}


game();

