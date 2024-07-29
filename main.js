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
    if (userInput === "rock" || userInput === "paper" || userInput === "scissor") {
        return userInput;
    } else {
        alert("Please write an valid response: Rock, paper or scissor");
    }
}

getHumanChoice();