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

// Check user's input
checkButton.addEventListener('click', (e) => {
  const userGuess = Number(input.value);
  // if the user provided no number - display a message 'No number!'
  if (!userGuess) {
    message.innerHTML = "No number!"
    // if the user's guess is correct - display a message 'Correct!', display the number and change css
  } else if (userGuess === secretNumber) {
    message.innerHTML = "Correct!";
    document.querySelector('.number').innerHTML = secretNumber;
    document.querySelector('.number').style.background = '#678D58';
    document.querySelector('.number').style.color = '#FFF8F0';
    document.querySelector('.number').style.fontWeight = '700';
    message.style.color = '#678D58';
    message.style.fontWeight = '700';

    // set new highscore if it's greater than the existing one
    if (score > highscore) {
      localStorage.setItem('highscore', score);
      document.querySelector('.highscore').innerHTML = `${score} (new record!)`;
    }

    // if the user's guess is greater than the number, decrease the score by one
  } else if (userGuess > secretNumber) {
    score--;
    scoreSpan.innerHTML = score;
    if (score > 0) {
      message.innerHTML = "Too high!";
    } else {
      message.innerHTML = "Game over!"
    }
    // if the user's guess is lower than the number, decrease the score by one
  } else if (userGuess < secretNumber) {
    score--;
    scoreSpan.innerHTML = score;
    if (score > 0) {
      message.innerHTML = "Too low!";
    } else {
      message.innerHTML = "Game over!"
    }
  }
})

// Reload the page if the user clicks on the 'Again!' button
againButton.addEventListener('click', (e) => {
  window.location.reload();
})
