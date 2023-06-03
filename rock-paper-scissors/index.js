
    const choice = ["Rock", "Paper", "Scissors"];
    
    function getComputerChoice(){
    return choice[Math.floor(Math.random()* choice.length)];
}


// function gamePlay (playerSelection, getComputerChoice) {
//     if (playerSelection.toLowerCase === "rock" && getComputerChoice=== "Paper")
//         return 'You lose! Paper beats rock.'

//     if (playerSelection.toLowerCase === "scissors" && getComputerChoice=== "Paper")
//     return 'You win! Scissors beats paper.'

//     if (playerSelection.toLowerCase === "paper" && getComputerChoice=== "Paper")
//     return 'It\'s a tie.'

//     if (playerSelection.toLowerCase === "rock" && getComputerChoice=== "Rock")
//         return 'It is a tie.'

//     if (playerSelection.toLowerCase === "scissors" && getComputerChoice=== "Rock")
//     return 'You lose! Rock beats scissors.'

//     if (playerSelection.toLowerCase === "paper" && getComputerChoice=== "Rock")
//     return 'You win! Paper beats rock.'

//     if (playerSelection.toLowerCase === "rock" && getComputerChoice=== "Scissors")
//         return 'You win! Rock beats scissors.'

//     if (playerSelection.toLowerCase === "scissors" && getComputerChoice=== "Scissors")
//     return 'Tie game.'

//     if (playerSelection.toLowerCase === "paper" && getComputerChoice=== "Scissors")
//     return 'You lose! Scissors beats paper.'

//     else return 'Try again'
// }

// const playerSelection = "scissors"
// const computerSelection = getComputerChoice();
// console.log(gamePlay(playerSelection, getComputerChoice));