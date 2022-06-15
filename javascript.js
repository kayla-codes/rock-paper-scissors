game();

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameOutcomeMessage = "";
    for (let i = 0; i < 5; i++) {
        let roundWinner = playRound();
        if (roundWinner !== "Game closed") {
            if (roundWinner === "player") {
                ++playerScore;
            } else if (roundWinner === "computer") {
                ++computerScore;
            }
        } else {
            return console.log("You have closed the game. Refresh if you want to play again.");
        }
    }
    gameOutcomeMessage = announceGameWinner(playerScore, computerScore);
    return console.log(`Your score is ${playerScore}. The computer's score is ${computerScore}. ${gameOutcomeMessage} Thank you for playing. Refresh to play again.`);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    let roundWinner = "";
    if (playerSelection !== null) {
        roundWinner = determineRoundWinner(playerSelection, computerSelection);
        announceRoundWinner(roundWinner, playerSelection, computerSelection);
        return roundWinner;
    } else {
        return roundWinner = "Game closed";
    }
}

function computerPlay() {
    const gameChoices = ["rock", "paper", "scissors"];
    let computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerSelection;
}

function playerPlay() {
    let playerSelection;
    let validPlayerSelection = false;
    while (!validPlayerSelection) {
        playerSelection = prompt("Choose one: rock, paper, scissors");
        if (playerSelection != null){
            playerSelection = (playerSelection.toLowerCase()).trim();
            validPlayerSelection = validatePlayerSelection(playerSelection);
            if (validPlayerSelection) {
                return playerSelection;
            } else {
                alert("Choice is invalid. Please try again.");
            }
        } else {
            return playerSelection;
        }
    }
}

function validatePlayerSelection(playerSelection) {
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return true;
    } else {
        return false;
    }
}

function determineRoundWinner(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return "player";
    } else if (playerSelection === computerSelection) {
        return "draw";
    } else {
        return "computer"; 
    }
}

function announceRoundWinner(roundWinner, playerSelection, computerSelection) {
    if (roundWinner === "player") {
        console.log(`${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}! You win! You earn 1 point.`);
        return; 
    } else if (roundWinner === "computer") {
        console.log(`${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}! You lose! The computer earns 1 point.`);
        return;
    } else {
        console.log("Draw! No points earned.");
        return;
    }
}

function announceGameWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "Congrats! You win!";
    } else if (playerScore < computerScore) {
        return "Boohoo! You lose!";
    } else {
        return "No winner. How dull.";
    }
}