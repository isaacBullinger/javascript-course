let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

updateScoreElement();

function pickComputerMove() {
    let computerMove = '';

    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper'
    } else {
        computerMove = 'scissors'
    }

    return computerMove;
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000)
        isAutoPlaying = true;
        document.querySelector('.js-auto-play-button')
            .innerHTML = 'Stop Playing';
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
        document.querySelector('.js-auto-play-button')
            .innerHTML = 'Auto Play';
    }
}

document.querySelector('.js-auto-play-button')
    .addEventListener('click', () => autoPlay());

document.querySelector('.js-rock-button')
    .addEventListener('click', () => {
        playGame('rock');
    });

document.querySelector('.js-paper-button')
    .addEventListener('click', () => {
        playGame('paper');
    });

document.querySelector('.js-scissors-button')
    .addEventListener('click', () => {
        playGame('scissors');
    });

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        playGame('rock');
    } else if (event.key === 'p') {
        playGame('paper');
    } else if (event.key === 's') {
        playGame('scissors');
    } else if (event.key === 'a') {
        autoPlay();
    } else if (event.key === 'Backspace') {
        displayConfirmation();
    }
});

function playGame(playerMove) {
    let computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.'
        } else if (computerMove === 'scissors') {
            result = 'You win!'
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win!'
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.'
        }

    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.'
        } else if (computerMove === 'paper') {
            result = 'You win!'
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
    }

    if (result === 'You win!') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses =+ 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').
        innerHTML = result;
        
    document.querySelector('.js-moves').innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

document.querySelector('.js-reset-score-button')
    .addEventListener('click', () => displayConfirmation());

document.querySelector('.js-yes')
    .addEventListener('click', () => resetScore());

function displayConfirmation() {
    document.querySelector('.js-confirmation').innerHTML = `
    Are you sure you want to reset the score?
    <button class="js-yes reset-confirm">
    Yes
    </button>
    
    <button class="js-no reset-confirm">
    No
    </button>`;

    document.querySelector('.js-yes')
        .addEventListener('click', () => {
            resetScore();
            hideResetConfirmation();
        });
    
    document.querySelector('.js-no')
        .addEventListener('click', () => {
            hideResetConfirmation();
        });
}

function hideResetConfirmation() {
    document.querySelector('.js-confirmation')
        .innerHTML = ``;
}

function resetScore() {
    displayConfirmation();
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}

function updateScoreElement() {
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}