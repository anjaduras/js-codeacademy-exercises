console.log("##### ROCK-PAPER-SCISSORS GAME! #####");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("error!! 404");
  }
};

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === "bomb") {
    return "User hacked the game! Computer loses.";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer wins!";
    } else {
      return "You win!";
    }
  }
}

function playGame() {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log("You chose: " + userChoice);
  console.log("Computer chose: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();