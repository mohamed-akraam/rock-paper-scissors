const logic = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let random = Math.floor(Math.random() * logic.length);
    return logic[random].toLowerCase();
}

function playerChoice() {
    let choice =  prompt("What do you choose? Rock, Paper or Scissors?");
    return choice.toLowerCase();

}

let score = 0;

// the game whole logic


function playRound(playerSelection, computerSelection) {

    
     if (playerSelection == computerSelection) {

        console.log("It's a draw");
        return console.log(`score is ${score}`);


    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || 
    playerSelection == "scissors" && computerSelection == "rock") {

        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return console.log(`score is ${score}`);


    } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || 
    playerSelection == "scissors" && computerSelection == "paper") {
        

        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        score += 1;
        return console.log(`score is ${score}`);
 

    } else {

        console.log("incorrect choice! please choose from the following: 'Rock', 'Paper' or 'Scissors' ");
        return console.log(`score is ${score}`);

    }

}

function game() {

    console.log(playRound(playerChoice(), computerPlay()));
    console.log(playRound(playerChoice(), computerPlay()));
    console.log(playRound(playerChoice(), computerPlay()));
    console.log(playRound(playerChoice(), computerPlay()));
    console.log(playRound(playerChoice(), computerPlay()));

    return console.log(`Your final score equals to ${score}`);
}

game();