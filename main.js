let humanScore = 0;
let computerScore = 0;

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

function playround(humanChoice, computerChoice) {
    let winner;
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
    
    if (winner === "human") {
        console.log("You win!")
        humanScore++;
    } else {
        console.log("You lose")
        computerScore++;
    }

    console.log(humanScore);
    console.log(computerScore);


}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playround(humanSelection,computerSelection);