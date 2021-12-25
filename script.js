'use strict';

// Add an event listener to the "Check!" button
const checkButton = document.querySelector('.check');
const input = document.querySelector('.guess');
checkButton.addEventListener('click', (e) => {
  const userGuess = input.value;
  console.log(userGuess);
})
