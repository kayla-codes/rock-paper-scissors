// Create a function called computerPlay to randomly return rock, paper, or scissors

function computerPlay() {
    const gameChoices = ["rock", "paper", "scissors"]
    let computerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    console.log(computerChoice)
    return computerChoice;
}

computerPlay();

/* Create a function that declares a winner of the round
    - Possible outcomes:
        - rock beats scissors
        - scissors beats paper
        - paper beats rock
        - draw
    - Returns winner 
*/

// Create a function prompts for player selection

/* Create a function called playRound that plays a single round of Rock Paper Scissors
    - 2 parameters: playerSelection and computerSelection
        - playerSelection should be case-insensitive
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
