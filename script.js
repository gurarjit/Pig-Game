'use strict';

// //Selecting elements
// const diceEl = document.querySelector('.dice');
// const rollBtn = document.querySelector('.btn--roll');
// const holdBtn = document.querySelector('.btn--hold');
// const newBtn = document.querySelector('.btn--new');

// let hold0El = document.querySelector('#current--0');
// let hold1El = document.querySelector('#current--1');

// let score0El = document.querySelector('#score--0');
// let score1El = document.querySelector('#score--1');

// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');

// let player1 = prompt('Enter the name of first player');
// let player2 = prompt('Enter the name of second player');

// let player0ElName = document.querySelector('#name--0');
// let player1ElName = document.querySelector('#name--1');

// player0ElName.textContent = player1;
// player1ElName.textContent = player2;

// //Intial Conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// let currentScore = 0;
// let score = [0, 0];
// let activePlayer = 0;
// let playing = true;

// rollBtn.addEventListener('click', function () {
//   if (playing) {
//     const diceNumber = Math.trunc(Math.random() * 6 + 1);
//     //console.log(diceNumber);

//     diceEl.classList.remove('hidden');

//     diceEl.src = `dice-${diceNumber}.png`;

//     if (diceNumber !== 1) {
//       currentScore += diceNumber;
//       document.querySelector(`#current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       currentScore = 0;
//       document.querySelector(`#current--${activePlayer}`).textContent = 0;
//       player0El.classList.toggle('player--active');
//       player1El.classList.toggle('player--active');

//       activePlayer = activePlayer === 0 ? 1 : 0;
//     }
//   }
//   //console.log(currentScore);
// });

// holdBtn.addEventListener('click', function () {
//   if (playing) {
//     score[`${activePlayer}`] += currentScore;
//     document.querySelector(`#score--${activePlayer}`).textContent =
//       score[`${activePlayer}`];

//     if (score[activePlayer] >= 100) {
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');

//       diceEl.classList.add('hidden');
//       playing = false;

//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       currentScore = 0;
//       hold0El.textContent = currentScore;
//       hold1El.textContent = currentScore;

//       activePlayer = activePlayer === 0 ? 1 : 0;
//       player0El.classList.toggle('player--active');
//       player1El.classList.toggle('player--active');
//     }
//   }
// });

// newBtn.addEventListener('click', function () {
//   hold0El.textContent = 0;
//   hold1El.textContent = 0;
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   currentScore = 0;
//   score = [0, 0];

//   activePlayer = 0;
//   playing = true;

//   player0El.classList.add('player--active');
//   player1El.classList.remove('pkayer--active');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');

//   player1 = prompt('Enter the name of first player');
//   player2 = prompt('Enter the name of second player');
//   player0ElName.textContent = player1;
//   player1ElName.textContent = player2;
// });
