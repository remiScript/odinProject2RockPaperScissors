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
let playerOne = "";
let playerTwo = "";
let playerOneWins =  0;
let playerTwoWins = 0;
let difficulty = "easy";
let difficultyChoice = "";
let rockCount = 0;
let paperCount = 0;
let scissorsCount = 0;

function playRound(playerOne, playerTwo) {
    // Ask user for input, store in variable
    playerOne = window.prompt("Time for Rock, Paper, Scissors!\n\nBe you rock, paper, or scissors!?\n\n See your results in the console!");

    //Affirm selection to player
    console.log("You are " + playerOne + "!");


    // Make input case-insensitive
    playerOne = playerOne.toLowerCase();

    // if player's answer != rock, paper, or scissors, re-prompt player and display error
    while (playerOne != "rock" && playerOne != "scissors" && playerOne != "paper") {
    //    console.log("Need: rock/paper/scissors. You input: " + playerOne);
        playerOne = (window.prompt("You must enter Rock, Paper, or Scissors. Try again.")).toLowerCase();
    }
    // console.log("input is valid")

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
    playerTwo = computerPlay();
    console.log("Computer is: " + playerTwo);


    // Determine winner
        // keep score
    //if player chooses rock, all 3 outcomes
    if (playerOne == "rock") {
        ++rockCount
        if (playerTwo == "rock") {
            console.log("It was a tie! (rock vs rock)"); 
        } else if (playerTwo == "paper") {
            playerTwoWins++;
            console.log("Computer wins! (rock vs paper)");
        } else {
            playerOneWins++;
            console.log("You win! (rock vs scissors)");
        }
    } 
    //if player chooses paper, all 3 outcomes
    else if (playerOne == "paper") {
        ++paperCount;
        if (playerTwo == "rock") {
            playerOneWins++;
            console.log("You win! (paper vs rock");
        } else if (playerTwo == "paper") {
            console.log("It was a tie! (paper vs paper)")
        } else {
            playerTwoWins++;
            console.log("Computer wins! (paper vs scissors)");
        }
    }
    //if player chooses scissors, all 3 outcomes
    else {
        ++scissorsCount;
        if (playerTwo == "rock") {
            playerTwoWins++;
            console.log("Computer wins! (scissors vs rock)");
        } else if (playerTwo == "paper") {
            playerOneWins++;
            console.log("You win! (scissors vs paper)")
        } else {
            console.log("It was a tie! (scissors vs scissors)");
        }
    }
    return true;
}


function playGame () {
    let rounds = window.prompt("How many rounds would you like to play? Pick a number between 1 and 10.");
    while (isNaN(rounds) || rounds > 10 || rounds < 1){
        rounds = window.prompt("Please enter a number between 1 and 10.");
    }
    difficultyChoice = window.prompt("Interested in hard mode? Enter Y/N");
    if (difficultyChoice.toLowerCase = "y"){
        alert.log(difficultyChoice);
        difficulty = "hard";
        alert("You chose: " + difficulty);
    } else if (difficultyChoice.toLowerCase != "y") {
        difficulty = "easy";
        alert("You chose: (easy)" + difficulty);
    } else {
        alert("else")
    }
    for (i = 0; i < rounds; i++) {
        let counter = i + 1;
        console.log("Round " + counter);
        playRound(playerOne, playerTwo);
    }
}

playGame();

console.log("Your score: " + playerOneWins);
console.log("Computer score: " + playerTwoWins);

