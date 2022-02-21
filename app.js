/*
        NEXT STEPS:
        Right now, the game takes your choice and the computer's choice once, then plays
        5 games with the same choices, giving the same result 5 times. You need to create 
        a function that takes player choice and determines computer choice. Then you need 
        to create a function that runs both parts:

        function game
            take choices
            determine winner
            keep score

        ^-------- then that whole thing runs 5 times.

*/


// Ask user for input, store in variable
let playerSelection = window.prompt("Greetings! Time for Rock, Paper, Scissors!\n\nBe you rock, paper, or scissors!?\n\n See your results in the console!");

//Affirm selection to player
console.log("You are " + playerSelection + "!");


// Make input case-insensitive
playerSelection = playerSelection.toLowerCase();

// if player's answer != rock, paper, or scissors, re-prompt player and display error
while (playerSelection != "rock" && playerSelection != "scissors" && playerSelection != "paper") {
    console.log("Need: rock/paper/scissors. You input: " + playerSelection);
    playerSelection = (window.prompt("You must enter Rock, Paper, or Scissors. Try again.")).toLowerCase();
}
console.log("input is valid")
// Determine if computer is rock, paper, or scissors
function computerPlay () {
    let computerInput = (Math.random()*100);
    if (computerInput > 66) {
        computerInput = "rock";
        return computerInput;
}   else if (computerInput > 33){
        computerInput = "paper";
        return computerInput;
}   else {
        computerInput = "scissors";
        return computerInput;
};
} 
let computerSelection = computerPlay();
console.log("Computer selected: " + computerSelection);

// keep score
let playerOneWins =  0;
let playerTwoWins = 0;


function playRound(playerOne, playerTwo) {
    // Determine winner
    console.log("playerSelection: " + playerSelection);

    //if player chooses rock, all 3 outcomes
    if (playerOne == "rock") {
        if (playerTwo == "rock") {
            console.log("It was a tie!"); 
        } else if (playerTwo == "paper") {
            playerTwoWins++;
            console.log("Computer wins!");
        } else {
            playerOneWins++;
            console.log("You win!");
        }

    //if player chooses paper, all 3 outcomes
    } else if (playerOne == "paper") {
        if (playerTwo == "rock") {
            playerOneWins++;
            console.log("You win!");
        } else if (playerTwo == "paper") {
            console.log("It was a tie!")
        } else {
            playerTwoWins++;
            console.log("Computer wins!");
        }
    }
    //if player chooses scissors, all 3 outcomes
    else {
        if (playerTwo == "rock") {
            playerTwoWins++;
            console.log("Computer wins!");
        } else if (playerTwo == "paper") {
            playerOneWins++;
            console.log("You win!")
        } else {
            console.log("It was a tie!");
        }
    }
    return true;
}

for (i = 0; i < 5; i++) {
    let counter = i + 1;
    console.log("Round " + counter);
    playRound(playerSelection, computerSelection);
}
console.log("Your score: " + playerOneWins);
console.log("Computer score: " + playerTwoWins);

