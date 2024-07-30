
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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


}

function playGame () {
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
            console.log("You win!");
            humanScore++;
        } else if (winner === "computer") {
            console.log("You lose");
            computerScore++;
        } else {
            console.log("It is a tie");
        }
        console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
}