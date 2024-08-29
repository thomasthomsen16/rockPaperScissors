document.getElementById("btnRock").addEventListener("click",playRound);
document.getElementById("btnPaper").addEventListener("click",playRound);
document.getElementById("btnScissor").addEventListener("click",playRound);

function getComputerChoice() {
    let rand;
    let computerChoice;
    rand = Math.random();
    if (rand<0.33) {
        computerChoice="Rock";
    } else if (rand<0.66) {
        computerChoice="Paper";
    } else {
        computerChoice="Scissor";
    }
    return computerChoice.toLowerCase();
}


function getHumanChoice() {
    userInput = prompt("Select your choice: Rock, paper or scissors").toLowerCase();
    // Checks to see if input is valid. Otherwise alert user
    if (userInput === "rock" || userInput === "paper" || userInput === "scissor") {
        return userInput;
    } else {
        alert("Please write an valid response: Rock, paper or scissor");
    }
}

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let winner;
    
        // checks who wins
        if (humanChoice == computerChoice) {
            winner = "tie";
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                winner = "computer"
            } else {
                winner = "human";
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissor") {
                winner = "computer";
            } else {
                winner = "human";
            }
        } else if (humanChoice === "scissor") {
            if (computerChoice === "rock") {
                winner = "computer";
            } else {
                winner = "human"
            }
        }
    
        // checks the winner and increments their score by 1 and prints a message to human player
        if (winner === "human") {
            console.log("You win this round!");
            humanScore++;
        } else if (winner === "computer") {
            console.log("You lose this round");
            computerScore++;
        } else {
            console.log("It is a tie this round");
        }
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
    }

    // //Loops through playRound() five times while updating humanSelection and computerSelection
    // for (i = 1; i < 6; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    // }


// Checks score after the after round and prints the winner
    if(computerScore>humanScore) {
        console.log("You lose!");
    } else if (humanScore>computerScore){
        console.log("You win");
    } else {
        console.log(`It's a tie`);
    }
