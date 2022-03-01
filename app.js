
document.getElementById("rock").addEventListener("click", playerOneIsRock);
document.getElementById("paper").addEventListener("click", playerOneIsPaper);
document.getElementById("scissors").addEventListener("click", playerOneIsScissors);
document.getElementById("newGame").addEventListener("click", newGame);
document.getElementById("difficultyEasy").addEventListener("click", setEasyDifficulty);
document.getElementById("difficultyHard").addEventListener("click", setHardDifficulty);
let p1ScoreDisplay = document.getElementById("playerOneScore");
let p2ScoreDisplay = document.getElementById("playerTwoScore");
let tieScoreDisplay = document.getElementById("tieScore");
let difficultyDisplay = document.getElementById("difficultyIndicator");
let playerOne = "";
let playerTwo = "";
let tieScore = "";
let playerOneScore =  0;
let playerTwoScore = 0;
let difficulty = "Easy";
let difficultyChoice = "";
let rockCount = 0;
let paperCount = 0;
let scissorsCount = 0;

function playerOneIsRock() {
    playerOne = "rock";
    playRound(playerOne, playerTwo);
    return playerOne;
}

function playerOneIsPaper() {
    playerOne = "paper";
    playRound(playerOne, playerTwo);
    return playerOne;
}
function playerOneIsScissors() {
    playerOne = "scissors";
    playRound(playerOne, playerTwo);
    return playerOne;
}

function setEasyDifficulty() {
    difficulty = "Easy";
    difficultyDisplay.innerText = "Easy";
    newGame();
    return true;
}

function setHardDifficulty() {
    difficulty = "Hard";
    difficultyDisplay.innerText = "Hard";
    newGame();
    return true;
}



function playRound(playerOne, playerTwo) {
    //Affirm selection to player
    console.log("You are " + playerOne + "!");

    function computerPlay () {
        let computerInput = (Math.random()*100);

        if (computerInput > 66) {
            computerInput = "rock";
            return computerInput;
    }   
        else if (computerInput > 33){
            computerInput = "paper";
            return computerInput;
    }   
        else {
            computerInput = "scissors";
            return computerInput;
    };
    }
    
    function computerPlayHard () {
        let computerInput = (Math.random()*100);
        
        // check if player tends to pick rock
        if (rockCount > paperCount && rockCount > scissorsCount) {
            computerInput = "paper";
            return computerInput;
        }

        // check if player tends to pick paper
        else if (paperCount > rockCount && paperCount > scissorsCount) {
            computerInput = "scissors";
            return computerInput;
        }

        // check if player tends to pick scissors
        else if (scissorsCount > rockCount && scissorsCount > paperCount) {
            computerInput = "rock";
            return computerInput;
                }

        else if (computerInput > 66) {
            computerInput = "rock";
            return computerInput;
    }   
        else if (computerInput > 33){
            computerInput = "paper";
            return computerInput;
    }   
        else {
            computerInput = "scissors";
            return computerInput;
    };
    }


    if (difficulty == "Easy"){
        playerTwo = computerPlay();
    } else {
        playerTwo = computerPlayHard();
    }
    console.log("Computer is: " + playerTwo);


    // Determine winner
        // keep score
    //if player chooses rock, all 3 outcomes
    if (playerOne == "rock") {
        ++rockCount
        if (playerTwo == "rock") {
            tieScore++;
            console.log("It was a tie! (rock vs rock)"); 
        } else if (playerTwo == "paper") {
            playerTwoScore++;
            console.log("Computer wins! (rock vs paper)");
        } else {
            playerOneScore++;
            console.log("You win! (rock vs scissors)");
        }
    } 
    //if player chooses paper, all 3 outcomes
    else if (playerOne == "paper") {
        ++paperCount;
        if (playerTwo == "rock") {
            playerOneScore++;
            console.log("You win! (paper vs rock");
        } else if (playerTwo == "paper") {
            tieScore++
            console.log("It was a tie! (paper vs paper)")
        } else {
            playerTwoScore++;
            console.log("Computer wins! (paper vs scissors)");
        }
    }
    //if player chooses scissors, all 3 outcomes
    else {
        ++scissorsCount;
        if (playerTwo == "rock") {
            playerTwoScore++;
            console.log("Computer wins! (scissors vs rock)");
        } else if (playerTwo == "paper") {
            playerOneScore++;
            console.log("You win! (scissors vs paper)")
        } else {
            tieScore++;
            console.log("It was a tie! (scissors vs scissors)");
        }
    }

    p1ScoreDisplay.textContent = playerOneScore.toString();
    p2ScoreDisplay.textContent = playerTwoScore.toString();
    tieScoreDisplay.textContent = tieScore.toString();
    return true;
}

function newGame() {
    playerOneScore = 0;
    playerTwoScore = 0;
    tieScore = 0;
    p1ScoreDisplay.textContent = playerOneScore.toString();
    p2ScoreDisplay.textContent = playerTwoScore.toString();
    tieScoreDisplay.textContent = tieScore.toString();
    rockCount = 0;
    paperCount = 0;
    scissorsCount = 0;
}

// function playGame () {
    // let rounds = window.prompt("How many rounds would you like to play? Pick a number between 1 and 10.");    
    // while (isNaN(rounds) || rounds > 10 || rounds < 1){
    //        rounds = window.prompt("Please enter a number between 1 and 10.");
    //    }
    
    // difficultyChoice = window.prompt("Interested in hard mode? Enter Y/N");
    // alert("You selected: " + difficultyChoice);
    // if (difficultyChoice.toLowerCase() == "y"){
    //     alert(difficultyChoice);
    //     difficulty = "hard";
    //     alert("You chose: " + difficulty);
    // } else if (difficultyChoice.toLowerCase() != "y") {
    //     difficulty = "easy";
    //     alert("You chose: " + difficulty);
    // } else {
    //     alert("else")
    // }
    
    // for (i = 0; i < rounds; i++) {
    //     let counter = i + 1;
    //     console.log("Round " + counter);
    //     playRound(playerOne, playerTwo);
    // }
// }

console.log("Your score: " + playerOneScore);
console.log("Computer score: " + playerTwoScore);

