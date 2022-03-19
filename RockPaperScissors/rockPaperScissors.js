const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === "scissors" || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Please enter either: rock, paper or scissors');
  }
};

function getComputerChoice() {
  const number = Math.floor(Math.random(2) * 3);

  switch (number) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log('Error');
      break;
  }
}

// console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'BOMB! You win'
  } else if (userChoice === computerChoice) {
    return 'The game is a tie';
  } else if (userChoice === 'rock') {
    if (computerChoice == 'scissors') {
      return 'You won!'
    } else {
      return 'Computer wins'
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'You won!'
    } else {
      return 'Computer wins'
    }
  } else {
    if (computerChoice === 'rock') {
      return 'You won!' 
    } else {
      return 'Computer wins'
    }
  } 
}

// console.log(determineWinner('scissors', 'paper'));

function playGame() {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

