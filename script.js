let playerScore = 0;
let computerScore = 0;

  //for case-insensitive 
  const rockResult = /rock/gi;
  const paperResult = /paper/gi;
  const scissorResult = /scissors/gi;

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
  let check = validateResult(playerPrompt);
  while (check == false) {
    playerPrompt = prompt("Try Again");
    
  while (playerPrompt == null) {
      playerPrompt = prompt("Please pick from Rock, Paper, or Scissors");
    }
    check = validateResult(playerPrompt);
  }

  return playerPrompt;
  // if(playerPrompt.match(rockResult)) {
  //   return "Rock";
  // }

  // else if(playerPrompt.match(paperResult)) {
  //   return 'Paper';
  // }

  // else if(playerPrompt.match(scissorResult)) {
  //   return 'Scissors';
  // }  
 
 
}

function validateResult(rockResult, paperResult, scissorResult) {
  return rockResult, paperResult, scissorResult;
}

function game() {
  for (let roundNum = 1; roundNum <= 5; roundNum++) {
    gameRound(roundNum);

  }
    gameWinner(playerScore, computerScore);
}

function gameRound(roundNum) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const showWinner = playRound(playerSelection, computerSelection);  
    roundOverview(playerSelection, computerSelection, showWinner, roundNum);

}


function playRound(playerSelection, computerSelection) {
    
  if (playerSelection === computerSelection)
            {
              return "Draw";
            }

  else if (playerSelection === 'Rock' && computerSelection === 'Paper'||
           playerSelection === 'Paper' && computerSelection === 'Scissors'||
           playerSelection === 'Scissors' && computerSelection === 'Rock') 
            
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

function roundOverview(playerChoice, computerChoice, showWinner, roundNum) {
  console.log("Round:", roundNum);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(showWinner, "Won the Round");
  console.log("-------------------------------");
}


game();

