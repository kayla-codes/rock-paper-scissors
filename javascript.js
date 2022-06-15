// Create a function called computerPlay to randomly return rock, paper, or scissors

function computerPlay() {
    const gameChoices = ["rock", "paper", "scissors"]
    let computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerSelection;
}

/* Create a function for player selection called playerPlay
    Create a loop that:
        - Prompts for player's selection of rock, paper, scissors and store in variable playerSelection in lowercase
        - Validate player selection and store in validPlayerSelection
        - If player selection is valid, break out of loop and return the player selection
        - If not, then show "Choice is invalid. Try again." and restart loop.
*/

function playerPlay() {
    let playerSelection;
    let validPlayerSelection = false;
    while (!validPlayerSelection) {
        playerSelection = prompt("Choose one: rock, paper, scissors");
        if (playerSelection != null){
            playerSelection = (playerSelection.toLowerCase()).trim();
            validPlayerSelection = validatePlayerSelection(playerSelection)
            if (validPlayerSelection) {
                return playerSelection;
            } else {
                alert("Choice is invalid. Please try again.");
            }
        } else {
            return playerSelection
        }
    }
}

/* Create a function called playerSelectionValidator
    - playerSelection must match rock, paper, or scissors
    - Return boolean
*/

function validatePlayerSelection(playerSelection) {
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
        return true;
    } else {
        return false;
    }
}

/* Create a function that declares a winner of the round
    - Possible outcomes:
        - rock beats scissors
        - scissors beats paper
        - paper beats rock
        - draw
    - Returns winner 
*/

function determineRoundWinner(computerSelection, playerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        return "player";
    } else if (playerSelection === computerSelection) {
        return "draw";
    } else {
        return "computer"; 
    }
}

/* Create a function called playRound that plays a single round of Rock Paper Scissors
    - 2 parameters: playerSelection and computerSelection
    - Calls computerPlay and stores in computerSelection
    - Calls playerPlay and stores in playerSelection
    - Declare winner and store in roundWinner
    - returns a string that declares the winner    
*/

function playRound(computerSelection, playerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    let roundWinner = "";
    if (playerSelection !== null) {
        roundWinner = determineRoundWinner(computerSelection, playerSelection);
        announceRoundWinner(roundWinner, computerSelection, playerSelection);
        return roundWinner;
    } else {
        return roundWinner = "Game closed";
    }
}

// Create a function to announce round winner 

function announceRoundWinner(roundWinner, computerSelection, playerSelection) {
    if (roundWinner === "player") {
        console.log(`You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`);
        return 
    } else if (roundWinner === "computer") {
        console.log(`You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`);
        return 
    } else {
        console.log("Draw!");
        return
    }
}


// Create a function that declares winner of the round

function announceGameWinner(computerScore, playerScore) {
    if (playerScore > computerScore) {
        return "Congrats! You win!";
    } else if (playerScore < computerScore) {
        return "Boohoo! You lose!";
    } else {
        return "No winner. How dull.";
    }
}

/* Create a function called game 
    - Calls the playRound function
    - Plays 5 rounds
    - Keeps score 
    - Reports a winner
*/

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameOutcomeMessage = "";
    for (let i = 0; i < 5; i++) {
        let roundWinner = playRound();
        if (roundWinner !== "Game closed") {
            if (roundWinner === "player") {
                console.log("You earn 1 point!")
                ++playerScore;
            } else if (roundWinner === "computer"){
                console.log("The computer earns 1 point!")
                ++computerScore;
            } else {
                console.log("No points granted.")
            }
        } else {
            return console.log("You have closed the game. Refresh if you want to play again.");;
        }
    }
    gameOutcomeMessage = announceGameWinner(computerScore, playerScore)
    return console.log(`${gameOutcomeMessage} Thank you for playing. Refresh to play again.`)
}