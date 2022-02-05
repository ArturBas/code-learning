let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10);

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
    return (Math.abs(userGuess - secretTarget) <= Math.abs(computerGuess - secretTarget)) ? true : false;
}

const updateScore = (winner) => {
    return (winner === 'human') ? humanScore += 1 : computerScore +=1; 
}

const advanceRound = () => currentRoundNumber++;

const alert = (userGuess) => {
  if (userGuess > 0 || userGuess < 9) {
    return console.log('Your number is out of range. Please put an integer between 0 and 9.');
  }
}

alert(10);