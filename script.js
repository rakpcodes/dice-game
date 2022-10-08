'use strict';

// Element Selectors

const dice = document.querySelector('.dice')
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
const playerActive = document.querySelector(".player--active")

// Player Scores
const score0 = document.querySelector('#score--0')
const score1 = document.querySelector('#score--1')
const current0 = document.querySelector('#current--0')
const current1 = document.querySelector('#current--1')

// Buttons
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// Starting Conditions
score0.textContent = 0
score1.textContent = 0
dice.classList.add('hidden')


// Declare variables to use for init
let scores, currentScore, activePlayer, playing

const init = () => {

    // Give variables initial values
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0
    playing = true


    // Reset scores array
    scores[0] = 0
    scores[1] = 0

    // Reset currentScore
    currentScore = 0

    // Reset scoreboard and current score
    score0.textContent = scores[0]
    score1.textContent = scores[1]

    current0.textContent = 0
    current1.textContent = 0

    // Remove winner style
    player1.classList.remove('player--winner')
    player2.classList.remove('player--winner')

    // Reset active player to player 1
    activePlayer = 0
    player1.classList.add('player--active')
    player2.classList.remove('player--active')

    //Hide Dice

    dice.classList.add('hidden')

}

init()


//Settings when active player is changed
const switchPlayer = () => {
    document.querySelector(`#current--${activePlayer}`).textContent = 0 // resets current score for new active player
    currentScore = 0; // resets 'current' score for old active player
    activePlayer = activePlayer === 0 ? 1 : 0; // decides which player is active
    player1.classList.toggle('player--active')
    player2.classList.toggle('player--active')
}


// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {

    if (playing) {

        // Generate Random Dice Roll
        const randomNum = Math.floor(Math.random() * 6) + 1

        // Display Dice
        dice.classList.remove('hidden')
        dice.src = `dice-${randomNum}.png`

        //Check for 1, if rolled, change players

        if (randomNum !== 1) {
            currentScore += randomNum; // increases the 'current' score
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore // selects and updates score for the active player
        } else {
            switchPlayer()
        }
    }
})

btnHold.addEventListener('click', function () {

    if (playing) {

        // 1. Add current score to active player's score

        scores[activePlayer] += currentScore
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]

        // 2. Setting for winnng score (Default 100)

        if (scores[activePlayer] >= 50) {

            // Ending the game

            playing = false
            dice.classList.add('hidden')

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')

        } else {

            switchPlayer()

        }

    }

})

btnNew.addEventListener('click', function () {

    init()

})
