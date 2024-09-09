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

//console.log(getComputerChoice());
//console.log(getHumanChoice());

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if(humanChoice === "rock") {
            if(computerChoice ==="rock") {
                console.log(`It's a tie! Both choices were ${humanChoice}`);
            }
            else if(computerChoice === "paper") {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore += 1;
            }
            else {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore += 1;
            }
        }
        else if(humanChoice === "paper") {
            if(computerChoice ==="paper") {
                console.log(`It's a tie! Both choices were ${humanChoice}`);
            }
            else if(computerChoice === "scissors") {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore += 1;
            }
            else {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore += 1;
            }
        }
        else {
            if(computerChoice ==="scissors") {
                console.log(`It's a tie! Both choices were ${humanChoice}`);
            }
            else if(computerChoice === "rock") {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore += 1;
            }
            else {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore += 1;
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore === computerScore) {
        console.log(`The game is a tie! Player: ${humanScore}  Computer: ${computerScore}`);
    }
    else if(humanScore < computerScore) {
        console.log(`The computer wins the game! Player: ${humanScore}  Computer: ${computerScore}`);
    }
    else {
        console.log(`The player wins the game! Player: ${humanScore}  Computer: ${computerScore}`);
    }
}

playGame();
