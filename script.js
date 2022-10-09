'use strict';

const randomNumberEl = document.querySelector('.random-number');
const yourChoiceEl = document.querySelector('.your-choice');
const btnSmallEl = document.querySelector('.btn-small');
const btnBigEl = document.querySelector('.btn-big');
const btnSubmitEl = document.querySelector('.btn-submit');
const btnPlayAgain = document.querySelector('.btn-play-again');
const yourChoiceTitleEl = document.querySelector('.your-choice-title');

//initialize
let randomNumber;
let randomNumberString;
let yourChoice;
let playing; //checks if we still playing

function init() {
  playing = true;
  btnSmallEl.classList.remove('hidden');
  btnBigEl.classList.remove('hidden');
  randomNumber = Math.trunc(Math.random() * 9) + 1;

  if (randomNumber <= 5) {
    randomNumberString = `Small`;
  } else {
    randomNumberString = `Big`;
  }
  console.log(randomNumber, randomNumberString); // delete
}

init();

//player press small button
btnSmallEl.addEventListener('click', function () {
  if (playing) {
    yourChoice = `Small`;
    console.log(`Choice done: ${yourChoice}`); //delete
    yourChoiceEl.textContent = yourChoice;
    btnBigEl.classList.add('hidden');
  }
});

//player press big button
btnBigEl.addEventListener('click', function () {
  if (playing) {
    yourChoice = `Big`;
    console.log(`Choice done: ${yourChoice}`); //delete
    yourChoiceEl.textContent = yourChoice;
    btnSmallEl.classList.add('hidden');
  }
});

//player submiting
btnSubmitEl.addEventListener('click', function () {
  if (playing) {
    playing = false;
    btnBigEl.classList.add('hidden');
    btnSmallEl.classList.add('hidden');
    randomNumberEl.textContent = randomNumber;
    console.log(randomNumber, randomNumberString, yourChoice); //delete
    if (randomNumberString === yourChoice) {
      console.log('Winner'); //delete
      yourChoiceTitleEl.textContent = 'Winner 🎉';
    } else {
      console.log('Loser'); //delete
      yourChoiceTitleEl.textContent = 'Loser ☠';
    }
  }
});

btnPlayAgain.addEventListener('click', init);
