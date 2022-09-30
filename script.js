'use strict';

// Element Selectors

const dice = document.querySelector('.dice')
const player1 = document.querySelector('.player--1')
const player2 = document.querySelector('.player--2')

// Player Scores
const score1 = document.querySelector('#score--1')
const score2 = document.querySelector('#score--2')
const currentBank1 = document.querySelector('#current--1')
const currentBank2 = document.querySelector('#current--2')

// Buttons
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting Conditions
score1.textContent = 0
score2.textContent = 0
dice.classList.add('hidden')

// Rolling Dice Functionality

btnRoll.addEventListener('click', function () {

    // Generate Random Dice Roll

    const randomNum = Math.floor(Math.random() * 6) + 1

    // Display Dice

    //Check for 1, if rolled, change players
})