'use strict';

// Define the secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// Check local storage for the highscore. If none - set to zero
let highscore = localStorage.getItem('highscore') ? localStorage.getItem('highscore') : 0;
document.querySelector('.highscore').innerHTML = highscore;

// Add an event listener to the "Check!" button
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreSpan = document.querySelector('.score');

let score = 20;

// CSS changes if a correct answer is given
const changeStyleOnCorrect = () => {
  const number = document.querySelector('.number');
  number.innerHTML = secretNumber;
  number.style.background = '#678D58';
  number.style.color = '#FFF8F0';
  number.style.fontWeight = '700';
  message.style.color = '#678D58';
  message.style.fontWeight = '700';
}

// Update score if the answer is wrong and display 'too high!' or 'too low!'
const updateScore = (msg) => {
  score--;
  scoreSpan.innerHTML = score;
  if (score > 0) {
    message.innerHTML = msg;
  } else {
    message.innerHTML = "Game over!"
  }
}

// Check user's input
checkButton.addEventListener('click', (e) => {
  const userGuess = Number(input.value);
  if (!userGuess) {
    message.innerHTML = "No number!"
  } else if (userGuess === secretNumber) {
    message.innerHTML = "Correct!";
    changeStyleOnCorrect();

    // set new highscore if it's greater than the existing one
    if (score > highscore) {
      localStorage.setItem('highscore', score);
      document.querySelector('.highscore').innerHTML = `${score} (new record!)`;
    }

  } else if (userGuess > secretNumber) {
    updateScore('Too high!');
  } else if (userGuess < secretNumber) {
    updateScore('Too low!');
  }
})

// Reload the page if the user clicks on the 'Again!' button
againButton.addEventListener('click', (e) => {
  window.location.reload();
})
