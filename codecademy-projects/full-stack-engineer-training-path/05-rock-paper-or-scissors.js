/*
GOAL:
Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
- Scissors cut paper.
- Paper covers rock.
- If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:
1. Get the user’s choice.
2. Get the computer’s choice.
3. Compare the two choices and determine a winner.
4. Start the program and display the results.
*/

//SOLUtiON:

//Getting the user’s choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    switch (userInput) {
      case 'bomb':
        return userInput; 
        break;
      case 'rock':
        return userInput;
        break;
      case 'paper':
        return userInput;
        break;
      case 'scissors':
        return userInput;
        break;
      default:
        return 'Please enter one of the following values: rock, paper or scissors.';
        break;
    }
  };
  
  //Getting the computer’s choice
  const getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      default:
        return 'scissors';
    }
  };
  
  //Comparing the two choices and determine a winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'User wins!';
    }
    if (userChoice === computerChoice) {
      return 'Tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins!';
      } else if (computerChoice === 'scissors') {
        return 'User wins!';
      }
    }
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer wins!';
      } else if (computerChoice === 'rock') {
        return 'User wins!';
      }
    }
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!';
      } else if (computerChoice === 'paper') {
        return 'User wins!';
      }
    }
  };
  
  //Displaying the results
  function playGame () {
    userChoice = getUserChoice('bomb');
    computerChoice = getComputerChoice();
    switch (userChoice) {
      case 'bomb':
        console.log(determineWinner(userChoice, computerChoice));
        break;
      case 'paper':
        console.log(`User choice is: ${userChoice}.`);
        console.log(`Computer choice is: ${computerChoice}.`);    
        console.log(determineWinner(userChoice, computerChoice));
        break;
      case 'rock':
        console.log(`User choice is: ${userChoice}.`);
        console.log(`Computer choice is: ${computerChoice}.`);    
        console.log(determineWinner(userChoice, computerChoice));
        break;
      case 'scissors':
        console.log(`User choice is: ${userChoice}.`);
        console.log(`Computer choice is: ${computerChoice}.`);    
        console.log(determineWinner(userChoice, computerChoice));
        break;
      default:
        console.log(userChoice);
        break;
    }
  }
  
  playGame();  