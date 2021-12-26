'use strict';

// Define the secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`The secret number is ${secretNumber}`)

// Add an event listener to the "Check!" button
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreSpan = document.querySelector('.score');

let score = 20;

checkButton.addEventListener('click', (e) => {
  const userGuess = Number(input.value);
  if (!userGuess) {
    message.innerHTML = "No number!"
  } else if (userGuess === secretNumber) {
    message.innerHTML = "Correct!";
    document.querySelector('.number').innerHTML = secretNumber;
    document.querySelector('.number').style.background = '#678D58';
  } else if (userGuess > secretNumber) { // decrease the score by one in the case of a wrong guess
    score--;
    scoreSpan.innerHTML = score;
    if (score > 0) {
      message.innerHTML = "Too high!";
    } else {
      message.innerHTML = "Game over!"
    }
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

againButton.addEventListener('click', (e) => {
  window.location.reload();
})
