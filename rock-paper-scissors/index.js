const getComputerChoice =(){
    let choice = ["Rock", "Paper", "Scissors"];
    let randomRPS = choice[Math.floor(Math.random()* choice.length)];
    return randomRPS;
}