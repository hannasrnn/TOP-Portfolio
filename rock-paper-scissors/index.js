const getComputerChoice = () => {
    let choice = ["Rock", "Paper", "Scissors"];
    let randomRPS = choice[Math.floor(Math.random()* choice.length)];
    return randomRPS;
}

function gamePlay (playerSelection, getComputerChoice) {
    if (playerSelection === "rock" && getComputerChoice=== "Paper")
        return 'You lose! Paper beats rock.'

    if (playerSelection === "scissors" && getComputerChoice=== "Paper")
    return 'You win! Scissors beats paper.'

    else (playerSelection === "paper" && getComputerChoice=== "Paper")
    return 'It\'s a tie.'
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(gamePlay(playerSelection, getComputerChoice));