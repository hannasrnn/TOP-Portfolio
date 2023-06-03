
    const choice = ["Rock", "Paper", "Scissors"];
    
    function getComputerChoice(){
    return choice[Math.floor(Math.random()* choice.length)];
}

function gamePlay (playerSelection, getComputerChoice) {
    if (playerSelection.toLowerCase === "rock" && getComputerChoice=== "Paper")
        return 'You lose! Paper beats rock.'

    if (playerSelection === "scissors" && getComputerChoice=== "Paper")
    return 'You win! Scissors beats paper.'

    if (playerSelection === "paper" && getComputerChoice=== "Paper")
    return 'It\'s a tie.'

    if (playerSelection === "rock" && getComputerChoice=== "Rock")
        return 'It is a tie.'

    if (playerSelection === "scissors" && getComputerChoice=== "Rock")
    return 'You lose! Rock beats scissors.'

    if (playerSelection === "paper" && getComputerChoice=== "Rock")
    return 'You win! Paper beats rock.'

    if (playerSelection === "rock" && getComputerChoice=== "Scissors")
        return 'You win! Rock beats scissors.'

    if (playerSelection === "scissors" && getComputerChoice=== "Scissors")
    return 'Tie game.'

    if (playerSelection === "paper" && getComputerChoice=== "Scissors")
    return 'You lose! Scissors beats paper.'

    else return 'Try again'
}


const playerSelection = "ScIssors";

console.log(playerSelection.toLowerCase(), getComputerChoice());