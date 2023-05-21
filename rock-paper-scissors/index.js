const getComputerChoice = () => {
    let choice = ["Rock", "Paper", "Scissors"];
    let randomRPS = choice[Math.floor(Math.random()* choice.length)];
    return randomRPS;
}

let playerSelection = "rock";

function singleRound (playerSelection, getComputerChoice)
    {if (playerSelection === "rock" && getComputerChoice=== "Paper"); 
        return 'You lose! Paper beats rock.';
    }
   
console.log(singleRound(playerSelection, getComputerChoice))