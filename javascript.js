// Create a function called computerPlay to randomly return rock, paper, or scissors

function computerPlay() {
    const gameChoices = ["rock", "paper", "scissors"]
    let computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return computerChoice;
}

/* Create a function for player selection called playerPlay
    Create a loop that:
        - Prompts for player's selection of rock, paper, scissors and store in variable playerSelection in lowercase
        - Validate player selection and store in validPlayerSelection
        - If player selection is valid, break out of loop and return the player selection
        - If not, then show "Choice is invalid. Try again." and restart loop.
*/

/* Create a function called validPlayerSelection
    - playerSelection must match rock, paper, or scissors
    - Return boolean
*/

/* Create a function that declares a winner of the round
    - Possible outcomes:
        - rock beats scissors
        - scissors beats paper
        - paper beats rock
        - draw
    - Returns winner 
*/

/* Create a function called playRound that plays a single round of Rock Paper Scissors
    - 2 parameters: playerSelection and computerSelection
    - Calls computerPlay and stores in computerSelection
    - Calls playerPlay and stores in playerSelection
    - Declare winner and store in roundWinner
    - returns a string that declares the winner    
*/

// Create a function that keeps score

// Create a function that declares winner of the round

/* Create a function called game 
    - Calls the playRound function
    - Plays 5 rounds
    - Keeps score 
    - Reports a winner
*/
