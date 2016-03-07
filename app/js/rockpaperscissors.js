////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
  // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
  // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
  // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
  if (playerMove == computerMove){
    return 'tie';
  }
  else if ((playerMove == 'rock' && computerMove == 'scissors') ||
    (playerMove == 'paper' && computerMove == 'rock') ||
    (playerMove == 'scissors' && computerMove == 'paper')){
    return 'player';
  }
  else if ((computerMove == 'rock' && playerMove == 'scissors') ||
    (computerMove == 'paper' && playerMove == 'rock') ||
    (computerMove == 'scissors' && playerMove == 'paper')){
    return 'computer';
  }
}


function playToFive() {
  console.log("Let's play Rock, Paper, Scissors");
  var playerWins = 0;
  var computerWins = 0;

  // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
  // for (var playerMove,computerMove = 1; playerMove,computerMove <= 5; playerMove,computerMove ++){
  //     console.log ('Player chose' + playerMove + 'while computer chose' + computerMove);
  //     console.log ('The score is currently' + playerWins + 'to' + computerWins + '\n');
  // }


  while (playerWins < 5 && computerWins < 5) {
    //get player input
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();

    //compare player vs computer
    var roundWinner = getWinner(playerMove, computerMove);

    // check round winner and update player wins or computer wins
    if (roundWinner == 'player'){
      playerWins += 1;
    }
    else if (roundWinner == 'computer'){
      computerWins += 1;
    }
    // log current score
    console.log ('Player chose ' + playerMove + ' while computer chose ' + computerMove);
    console.log ('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  }

  return [playerWins, computerWins];
}



var finalScore = playToFive();

if (finalScore[0] == 5) {
  console.log('player wins');
} else {
  console.log('computer wins');
}
