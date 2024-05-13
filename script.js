function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    const playerSelectionCmp = playerSelection.toLowerCase();

    console.log(`Your choice: ${playerSelection}, Computer Choice: ${computerSelection}`);


    if (playerSelectionCmp === 'rock') {
        return rockChoice(computerSelection);
    } else if (playerSelectionCmp === 'paper') {
        return paperChoice(computerSelection);
    } else if (playerSelectionCmp === 'scissors') {
        return scissorsChoice(computerSelection);
    } else {
        return ['Wrong input', 0];
    }
}

function rockChoice(computerSelection) {
    if (computerSelection === 'rock') {
        return ['You both drew!', 1];
    }
    if (computerSelection === 'scissors') {
        return ['You won! Rock breaks Scissors', 2];
    } else {
        return ['You Lost! :(. Rock can\'t break paper', 0];
    }
}

function paperChoice(computerSelection) {
    if (computerSelection === 'paper') {
        return ['Draw!', 1];
    } else if (computerSelection === 'rock') {
        return ['You won! Rock can\'t break paper', 2];
    } else {
        return ['You lost! :(. Scissors cuts paper', 0];
    }
}

function scissorsChoice(computerSelection) {
    if (computerSelection === 'scissors') {
        return ['Draw!', 1];
    } else if (computerSelection === 'paper') {
        return ['You won! Scissors cuts paper', 2];
    } else {
        return ['You lost! :(. Rock breaks Scissors', 0];
    }
}

function gameover(Winner) {
  buttons.childNodes.forEach(btn => btn.disabled = true);
  let gameOverText = document.getElementById('gameOverText');
  if (Winner === 'P') {
    gameOverText.textContent = 'You won!';
  } else {
    gameOverText.textContent = 'You lost, unlucky';
  }




    let btn = document.createElement('button');
    btn.textContent = 'CLICK TO PLAY AGAIN';
    btn.classList.toggle('remove');
    startNode.appendChild(btn);
    btn.addEventListener('click', (e) => {
        buttons.childNodes.forEach(btn => {
            btn.disabled = false;
        });
        text.textContent = '';
        player.textContent = '0';
        computer.textContent = '0';
        startNode.removeChild(btn);
    });
}

function game(playerChoice) {
  let computerChoice = getComputerChoice();
  let roundResult = playRound(playerChoice, computerChoice);
  text.textContent = roundResult[0];
  let scoreChange = roundResult[1];

  let playerScoreElement = document.getElementById('playerScore'); // Typo fixed
  let computerScoreElement = document.getElementById('computerScore');

  if (playerScoreElement && computerScoreElement) {
    if (scoreChange === 2) {
      let playerScore = parseInt(playerScoreElement.textContent);
      playerScoreElement.textContent = playerScore + 1;
      if (playerScoreElement.textContent === '5') {
        gameover('P');
      }
    } else if (scoreChange === 0) {
      let computerScore = parseInt(computerScoreElement.textContent);
      computerScoreElement.textContent = computerScore + 1;
      if (computerScoreElement.textContent === '5') {
        gameover('C');
      }
    }
  } else {
    console.error("Score elements not found!");
  }
}


const buttons = document.querySelector('.game');
const text = document.querySelector('.text');
const choices = document.querySelector('.choices');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const startNode = document.querySelector('.start');
const container1 = document.querySelector('.container-1');
const container2 = document.querySelector('.container-2');

const clickable = document.querySelector('.clickable');
clickable.addEventListener('click', (e) => {
    container1.style.display = 'none';
    container2.style.display = 'block';
});

buttons.addEventListener('click', e => {
    if (e.target.id === 'rock' || e.target.id === 'paper' || e.target.id === 'scissors') {
        game(e.target.id);
    }
});
