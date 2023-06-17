    let playerScore = 0
    let computerScore = 0
    
    const choice = ["Rock", "Paper", "Scissors"];
    function getComputerChoice(){
    return choice[Math.floor(Math.random()* choice.length)];
}

function gamePlay (playerSelection, getComputerChoice) {
    if (playerSelection === "rock" && getComputerChoice=== "Paper") {
    computerScore++
    return 'You lose! Paper beats rock.' }
    if (playerSelection === "scissors" && getComputerChoice=== "Paper"){
    playerScore++
    return 'You win! Scissors beats paper.'}
    if (playerSelection === "paper" && getComputerChoice=== "Paper"){
    return 'It\'s a tie.'}
    if (playerSelection === "rock" && getComputerChoice=== "Rock"){
        return 'It is a tie.'}
    if (playerSelection === "scissors" && getComputerChoice=== "Rock"){
    computerScore++
    return 'You lose! Rock beats scissors.'}
    if (playerSelection === "paper" && getComputerChoice=== "Rock"){
    playerScore++
    return 'You win! Paper beats rock.'}
    if (playerSelection === "rock" && getComputerChoice=== "Scissors"){
    playerScore++
    return 'You win! Rock beats scissors.'}
    if (playerSelection === "scissors" && getComputerChoice=== "Scissors"){
    return 'Tie game.'}
    if (playerSelection === "paper" && getComputerChoice=== "Scissors"){
    computerScore++
    return 'You lose! Scissors beats paper.'}
    
    // else return 'Try again'
    }

var playerSelection = "rock";
console.log(gamePlay(playerSelection.toLowerCase(), getComputerChoice()));

function gamePlay (playerSelection, getComputerChoice) {
    if (playerSelection === "rock" && getComputerChoice=== "Paper") {
    computerScore++
    return 'You lose! Paper beats rock.' }
    if (playerSelection === "scissors" && getComputerChoice=== "Paper"){
    playerScore++
    return 'You win! Scissors beats paper.'}
    if (playerSelection === "paper" && getComputerChoice=== "Paper"){
    return 'It\'s a tie.'}
    if (playerSelection === "rock" && getComputerChoice=== "Rock"){
        return 'It is a tie.'}
    if (playerSelection === "scissors" && getComputerChoice=== "Rock"){
    computerScore++
    return 'You lose! Rock beats scissors.'}
    if (playerSelection === "paper" && getComputerChoice=== "Rock"){
    playerScore++
    return 'You win! Paper beats rock.'}
    if (playerSelection === "rock" && getComputerChoice=== "Scissors"){
    playerScore++
    return 'You win! Rock beats scissors.'}
    if (playerSelection === "scissors" && getComputerChoice=== "Scissors"){
    return 'Tie game.'}
    if (playerSelection === "paper" && getComputerChoice=== "Scissors"){
    computerScore++
    return 'You lose! Scissors beats paper.'}
    
    // else return 'Try again'
    }

var playerSelection = "paper";
console.log(gamePlay(playerSelection.toLowerCase(), getComputerChoice()));

function gamePlay (playerSelection, getComputerChoice) {
    if (playerSelection === "rock" && getComputerChoice=== "Paper") {
    computerScore++
    return 'You lose! Paper beats rock.' }
    if (playerSelection === "scissors" && getComputerChoice=== "Paper"){
    playerScore++
    return 'You win! Scissors beats paper.'}
    if (playerSelection === "paper" && getComputerChoice=== "Paper"){
    return 'It\'s a tie.'}
    if (playerSelection === "rock" && getComputerChoice=== "Rock"){
        return 'It is a tie.'}
    if (playerSelection === "scissors" && getComputerChoice=== "Rock"){
    computerScore++
    return 'You lose! Rock beats scissors.'}
    if (playerSelection === "paper" && getComputerChoice=== "Rock"){
    playerScore++
    return 'You win! Paper beats rock.'}
    if (playerSelection === "rock" && getComputerChoice=== "Scissors"){
    playerScore++
    return 'You win! Rock beats scissors.'}
    if (playerSelection === "scissors" && getComputerChoice=== "Scissors"){
    return 'Tie game.'}
    if (playerSelection === "paper" && getComputerChoice=== "Scissors"){
    computerScore++
    return 'You lose! Scissors beats paper.'}
    
    // else return 'Try again'
    }

var playerSelection = "scissors";
console.log(gamePlay(playerSelection.toLowerCase(), getComputerChoice()));

function gamePlay (playerSelection, getComputerChoice) {
    if (playerSelection === "rock" && getComputerChoice=== "Paper") {
    computerScore++
    return 'You lose! Paper beats rock.' }
    if (playerSelection === "scissors" && getComputerChoice=== "Paper"){
    playerScore++
    return 'You win! Scissors beats paper.'}
    if (playerSelection === "paper" && getComputerChoice=== "Paper"){
    return 'It\'s a tie.'}
    if (playerSelection === "rock" && getComputerChoice=== "Rock"){
        return 'It is a tie.'}
    if (playerSelection === "scissors" && getComputerChoice=== "Rock"){
    computerScore++
    return 'You lose! Rock beats scissors.'}
    if (playerSelection === "paper" && getComputerChoice=== "Rock"){
    playerScore++
    return 'You win! Paper beats rock.'}
    if (playerSelection === "rock" && getComputerChoice=== "Scissors"){
    playerScore++
    return 'You win! Rock beats scissors.'}
    if (playerSelection === "scissors" && getComputerChoice=== "Scissors"){
    return 'Tie game.'}
    if (playerSelection === "paper" && getComputerChoice=== "Scissors"){
    computerScore++
    return 'You lose! Scissors beats paper.'}
    
    // else return 'Try again'
    }

var playerSelection = "rock";
console.log(gamePlay(playerSelection.toLowerCase(), getComputerChoice()));

function gamePlay (playerSelection, getComputerChoice) {
    if (playerSelection === "rock" && getComputerChoice=== "Paper") {
    computerScore++
    return 'You lose! Paper beats rock.' }
    if (playerSelection === "scissors" && getComputerChoice=== "Paper"){
    playerScore++
    return 'You win! Scissors beats paper.'}
    if (playerSelection === "paper" && getComputerChoice=== "Paper"){
    return 'It\'s a tie.'}
    if (playerSelection === "rock" && getComputerChoice=== "Rock"){
        return 'It is a tie.'}
    if (playerSelection === "scissors" && getComputerChoice=== "Rock"){
    computerScore++
    return 'You lose! Rock beats scissors.'}
    if (playerSelection === "paper" && getComputerChoice=== "Rock"){
    playerScore++
    return 'You win! Paper beats rock.'}
    if (playerSelection === "rock" && getComputerChoice=== "Scissors"){
    playerScore++
    return 'You win! Rock beats scissors.'}
    if (playerSelection === "scissors" && getComputerChoice=== "Scissors"){
    return 'Tie game.'}
    if (playerSelection === "paper" && getComputerChoice=== "Scissors"){
    computerScore++
    return 'You lose! Scissors beats paper.'}
    
    // else return 'Try again'
    }

function winner () {
    if (playerScore > computerScore){
        return 'You won the computer!'
    }if (playerScore < computerScore) {
        return 'You lost the game.' 
    }
    else return 'Something went wrong in defining the winner.'
}

var playerSelection = "paper";
console.log(gamePlay(playerSelection.toLowerCase(), getComputerChoice()));

console.log(winner(playerScore, computerScore));

    
    