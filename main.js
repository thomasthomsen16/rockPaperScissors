document.getElementById("btnRock").addEventListener("click", function() {
    playRound("rock");
});
document.getElementById("btnPaper").addEventListener("click", function() {
    playRound("paper");
});
document.getElementById("btnScissor").addEventListener("click", function() {
    playRound("scissor");
});



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


    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice) {
        let winner;
        let computerChoice = getComputerChoice();
        const score = document.getElementById("Score");
        const message = document.getElementById("Message");
        const winnerMessage = document.getElementById("winnerMessage");
    
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
            message.textContent = "You win this round"
            humanScore++;
        } else if (winner === "computer") {
            message.textContent = "You lose this round"
            computerScore++;
        } else {
            message.textContent = "It is a tie this round"
        }
        score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`; 
   
    // Check if anyone has won the game
    if(computerScore >= 5 || humanScore >= 5) {
        if(computerScore > humanScore) {
            winnerMessage.textContent = "You lose the game!"
        } else {
            winnerMessage.textContent = "You win this game!"
        }
        // Reset scores for a new game
        computerScore = 0;
        humanScore = 0;
    }
}





