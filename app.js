const options = document.querySelectorAll(".options");
let playerScore = 0;
let computerScore = 0;
options.forEach((option) => {
    option.addEventListener("click", function () {
    const pInput = this.textContent;

        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];
        compareInputs(pInput, cInput);
        updateScore();
        if (checkWinner()) {
          playerScore = computerScore = 0;
          updateScore();
        }
    });
});
function compareInputs(pInput, cInput) {
    const currentMatch = `${pInput} vs ${cInput}`;

    // Tie check
    if (pInput === cInput) {
    alert(`${currentMatch} is a Tie`);
      return;
    }
  
    // Rock
    if (pInput === "Rock") {
      if (cInput === "Scissors") {
        alert(`${currentMatch} = You Win`);
        playerScore++;
      } else {
        alert(`${currentMatch} = Computer Wins`);
        computerScore++;
      }
    }
    // Paper
    else if (pInput === "Paper") {
      if (cInput === "Rock") {
        alert(`${currentMatch} = You Win`);
        playerScore++;
      } else {
        alert(`${currentMatch} = Computer Wins`);
        computerScore++;
      }
    }
    // Scissors
    else {
      if (cInput === "Paper") {
        alert(`${currentMatch} = You Win`);
        playerScore++;
      } else {
        alert(`${currentMatch} = Computer Wins`);
        computerScore++;
      }
    }
  }
function updateScore() {
  document.getElementById("playerScore").textContent = playerScore;
  document.getElementById("computerScore").textContent = computerScore;
}
function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    const winner =
      playerScore === 5
        ? "You win! Congratulations!"
        : "Computer wins! Try again next time!";
    alert(winner);
    return true;
  }
  return false;
}
