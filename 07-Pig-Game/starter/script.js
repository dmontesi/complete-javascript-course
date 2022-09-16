'use strict';

// Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = () => {
  // Set all scores to 0
  scores = [0, 0]; // the two total scores that accumulate for each player
  currentScore = 0;
  activePlayer = 0; // active plater set to player 0 to start
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player1.classList.remove('player--active');
  diceEl.classList.add('hidden');

  // Set player 1 as starting player
  player0.classList.add('player--active');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// User rolls dice
btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1. Generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //   console.log(dice);
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for a roll of 1
    if (dice !== 1) {
      //   Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      //   If true, switch to next player
      switchPlayer();
    }
  }
});

// User holds score
btnHold.addEventListener('click', () => {
  if (playing) {
    // 1. Add current score to active player's total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Is score >= 100?
    if (scores[activePlayer] >= 100) {
      // Finish game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// User resets game
btnNewGame.addEventListener('click', init);
