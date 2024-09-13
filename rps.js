//console.log("Hello World");

function getComputerChoice() {
    let num = Math.floor((Math.random() * 100)) % 3;
    if(num === 0) {
        return "rock";
    }
    else if(num === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Select rock, paper, or scissors: ").toLowerCase();
    while(choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Invalid choice. Select rock, paper, or scissors: ").toLowerCase();
    }
    return choice;
}

let round = 1;
let gameOver = 0;
let humanScore = 0;
let computerScore = 0;
let result = document.querySelector("#result");
let roundDisplay = document.querySelector("h2");

function playRound(humanChoice) {
    if (gameOver) return;

    humanChoice = humanChoice.toLowerCase();
    let computerChoice = getComputerChoice();

    if(humanChoice === "rock") {
        if(computerChoice ==="rock") {
            result.textContent = `It's a tie! Both choices were ${humanChoice}`;
        }
        else if(computerChoice === "paper") {
            result.textContent = `You lose the round! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
        }
        else {
            result.textContent = `You win the round! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
        }
    }
    else if(humanChoice === "paper") {
        if(computerChoice ==="paper") {
            result.textContent = `It's a tie! Both choices were ${humanChoice}`;
        }
        else if(computerChoice === "scissors") {
            result.textContent = `You lose the round! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
        }
        else {
            result.textContent = `You win the round! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
        }
    }
    else {
        if(computerChoice ==="scissors") {
            result.textContent = `It's a tie! Both choices were ${humanChoice}`;
        }
        else if(computerChoice === "rock") {
            result.textContent = `You lose the round! ${computerChoice} beats ${humanChoice}`;
            computerScore += 1;
        }
        else {
            result.textContent = `You win the round! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
        }
    }
    round += 1;
    if (humanScore >= 5) {
        roundDisplay.innerHTML = `You win the game! ` + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + `Player Score: ${humanScore} | Computer Score: ${computerScore}`;
        gameOver = 1;
    }
    else if (computerScore >= 5) {
        roundDisplay.innerHTML = `The Computer wins the game! ` + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + `Player Score: ${humanScore} | Computer Score: ${computerScore}`;
        gameOver = 1;
    }
    else
        roundDisplay.innerHTML = `Round ${round} ` + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + `Player Score: ${humanScore} | Computer Score: ${computerScore}`;
    
}   

let btnR = document.querySelector("#btn-rock");
let btnP = document.querySelector("#btn-paper");
let btnS = document.querySelector("#btn-scissors");

btnR.addEventListener("click", () => {playRound("rock")});
btnP.addEventListener("click", () => {playRound("paper")});
btnS.addEventListener("click", () => {playRound("scissors")});
