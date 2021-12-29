const logic = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const playerScoreTrack = document.createElement('h2');
const computerScoreTrack = document.createElement('h2');
const content = document.createElement('h2');

function computerPlay() {
    let random = Math.floor(Math.random() * logic.length);
    return logic[random];
}

let playerChoice= '';
let playerScore = 0;
let computerScore = 0

function playRound(playerSelection, computerSelection) {

    if (playerScore === 5) return content.textContent = 'YOU WIN THE GAME!!!!';
    if (computerScore === 5) return content.textContent = 'FOR REAL! YOU LET A ROBOT BEATS YOU!! YOU LOOOSE!!!'

    else if (playerSelection == computerSelection) {

        content.textContent = "It's a draw";
        playerScoreTrack.textContent = `Your score is ${playerScore}`;
        computerScoreTrack.textContent = `Computer score is ${computerScore}`

    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || 
    playerSelection == "scissors" && computerSelection == "rock") {

        content.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore += 1;
        playerScoreTrack.textContent = `Your score is ${playerScore}`;
        computerScoreTrack.textContent = `Computer score is ${computerScore}`

    } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || 
    playerSelection == "scissors" && computerSelection == "paper") {
        
        content.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
        playerScoreTrack.textContent = `Your score is ${playerScore}`;
        computerScoreTrack.textContent = `Computer score is ${computerScore}`

    }
}

buttons.forEach(button => button.addEventListener('click', function(e){
    playerChoice = e.target.textContent;
    playRound(playerChoice, computerPlay());

}));

display.appendChild(content);
display.appendChild(playerScoreTrack);
display.appendChild(computerScoreTrack);