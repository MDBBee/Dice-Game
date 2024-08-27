'use strict';

const dice = document.querySelector('.dice');
const player1Bg = document.querySelector('.player--0');
const player2Bg = document.querySelector('.player--1');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
const score1Cur = document.getElementById('current--0');
const score2Cur = document.getElementById('current--1');

score1.textContent = score2.textContent = 0;
let player1Score = 0;
let player1CurScore = 0;
let player2Score = 0;
let player2CurScore = 0;

let activePlayer = 1;

btnRoll.addEventListener('click', function () {
  const ranNum = Math.trunc(Math.random() * 6) + 1;

  dice.src = `dice-${ranNum}.png`;
  dice.classList.remove('hidden');

  if (ranNum !== 1) {
    if (activePlayer === 1) {
      player1Score += ranNum;
      score1.textContent = player1Score;
    } else {
      player2Score += ranNum;
      score2.textContent = player2Score;
    }
  } else {
    score1.textContent = score2.textContent = 0;
    activePlayer = activePlayer === 1 ? 2 : 1;
    player1Bg.classList.toggle('player--active');
    player2Bg.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  if (activePlayer === 1) {
    player1CurScore += player1Score;
    score1Cur.textContent = player1CurScore;

    if (player1CurScore >= 10) {
      console.log(document.querySelector('.modal p').textContent);

      document.querySelector(
        '.modal p'
      ).textContent = `Player${activePlayer} Wins`;
      document.querySelector('.overlay').classList.remove('hidden');
      //   document.querySelector('.modal').classList.remove('hidden');
      document.querySelector('.modal').classList.add('appear');
    }

    activePlayer = 2;
    player1Bg.classList.toggle('player--active');
    player2Bg.classList.toggle('player--active');

    score1.textContent = score2.textContent = 0;
    player1Score = player2Score = 0;
  } else if (activePlayer === 2) {
    player2CurScore += player2Score;
    score2Cur.textContent = player2CurScore;

    if (player2CurScore >= 10) {
      document.querySelector(
        '.modal p'
      ).textContent = `Player${activePlayer} Wins`;
      document.querySelector('.overlay').classList.remove('hidden');
      document.querySelector('.modal').classList.add('appear');
    }

    activePlayer = 1;
    player1Bg.classList.toggle('player--active');
    player2Bg.classList.toggle('player--active');

    score1.textContent = score2.textContent = 0;
    player1Score = player2Score = 0;
  }
});

document.querySelector('.modal span').addEventListener('click', function () {
  document.querySelector('.overlay').classList.add('hidden');

  document.querySelector('.modal').classList.remove('appear');
});

btnNew.addEventListener('click', function () {
  console.log('clicked');

  score1.textContent = score2.textContent = 0;
  player1Score = 0;
  player1CurScore = 0;
  player2Score = 0;
  player2CurScore = 0;

  score1.textContent =
    score2.textContent =
    score1Cur.textContent =
    score2Cur.textContent =
      0;

  activePlayer = 1;
});
