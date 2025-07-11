'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //another way to select elements by ID

const dicePicEl = document.querySelector('.dice');

let RandomDiceRoll;

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//players sections
const player0section = document.querySelector('.player--0');
const player1section = document.querySelector('.player--1');

const Current0El = document.querySelector('#current--0');
const Current1El = document.querySelector('#current--1');
let currentScore = 0;
let activePlayer = 0;
let total0 = 0;
let total1 = 0;
let isWin = false;
//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
Current0El.textContent = 0;
Current1El.textContent = 0;
dicePicEl.classList.add('hidden');

//helping functions
const player0 = function () {
  Current0El.textContent = currentScore;
};
const player1 = function () {
  Current1El.textContent = currentScore;
};
// const playerChange = function () {
//   if (!activePlayer) {
//     //p0 => p1
//     Current0El.textContent = 0;
//     player0section.classList.remove('player--active');
//     player1section.classList.add('player--active');
//   } else {
//     Current1El.textContent = 0;
//     player1section.classList.remove('player--active');
//     player0section.classList.add('player--active');
//   }
//   activePlayer = !activePlayer; //switch flag hence switch player
// };
const playerChange = function () {
  //reset current score
  //   document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove(`player--active`);

  //activePlayer = !activePlayer  ==> doesn't work here cause it makes it boolean not number (true/false) and we here rely on (0/1)
  activePlayer = activePlayer === 0 ? 1 : 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
};

// function playerChange() {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove('player--active');
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.add('player--active');
//   currentScore = 0;
// }

//rolling dice button
btnRoll.addEventListener('click', function () {
  //roll the dice
  RandomDiceRoll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  currentScore += RandomDiceRoll;
  dicePicEl.src = `dice-${RandomDiceRoll}.png`;
  dicePicEl.classList.remove('hidden');
  console.log(RandomDiceRoll);

  if (RandomDiceRoll !== 1) {
    !activePlayer ? player0() : player1(); // 0 => p0, 1 => p1
  } else {
    currentScore = 0;
    playerChange(); //remove displayed current score, reverse flag
  }
});

btnHold.addEventListener('click', function () {
  //remove dice pic
  dicePicEl.classList.add('hidden');
  //add current score to total
  if (!activePlayer) {
    //p0
    total0 += currentScore;
    score0El.textContent = total0;
  } else {
    //p1
    total1 += currentScore;
    score1El.textContent = total1;
  }
  //reset current score
  currentScore = 0;
  //check if total >= 100
  //if true player wins
  if (total0 >= 100 || total1 >= 100) {
    if (!activePlayer) {
      //p0
      player0section.classList.add('player--winner');
    } else {
      player1section.classList.add('player--winner');
    }
    //disable roll, hold buttons
    btnRoll.disabled = true;
    btnHold.disabled = true;
    //remove dice pic
    dicePicEl.classList.add('hidden');
    isWin = true;
  } else {
    //false => switch player
    playerChange();
  }
});

btnNew.addEventListener('click', function () {
  //-------------------------resets everthing-------------------------------//
  total0 = total1 = 0;
  score0El.textContent = total0;
  score1El.textContent = total1;
  currentScore = 0;
  //remove winner style
  if (!activePlayer) {
    //p0
    Current0El.textContent = currentScore;
    player0section.classList.remove('player--winner');
  } else {
    //p1
    Current1El.textContent = currentScore;
    player1section.classList.remove('player--winner');
    //switches the current player style to player0
    player1section.classList.remove('player--active');
    player0section.classList.add('player--active');
    //switch to player0
    activePlayer = 0;
  }
  //enable buttons if it was a winned game
  if (isWin) {
    btnRoll.disabled = false;
    btnHold.disabled = false;
    isWin = false;
  }
});
