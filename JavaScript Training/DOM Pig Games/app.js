/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many tim es as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let scores, roundScore, activePlayer, dice, gamePlaying, previousRoll;

newGame()

document.querySelector('.btn-new').addEventListener('click', newGame)

document.querySelector('.btn-roll').addEventListener('click', () => {
    if (gamePlaying) {
        //1. Random number
        let dice = Math.floor(Math.random() * 6) + 1

        //2. Display the result
        let diceDOM = document.querySelector('.dice')
        diceDOM.style.display = 'block'
        diceDOM.src = 'dice-' + dice + '.png'

        //3. Update the round score IF the rolled number was NOT a 1
        if (dice > 1) {
            //Add score
            roundScore += dice
            previousRoll = roundScore
            document.querySelector('#current-' + activePlayer).textContent = roundScore
        } else {
            //Next player
            nextPlayer()
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //1. Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore

        //2. Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer]

        //3. Check if player won the game
        if (scores[activePlayer] >= 10) {
            document.querySelector('.dice').style.display = 'none'
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('.winner')
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
            gamePlaying = false
            // document.querySelector('.player-' + activePlayer + 'panel').classList.add('.player-name')
        } else {
            //Next player
            nextPlayer()
        }
    }
});

function newGame() {
    //Initialise scores
    scores = [0, 0]
    roundScore = 0
    //reset active player
    activePlayer = 0

    gamePlaying = true

    //Hide the dice image
    document.querySelector('.dice').style.display = 'none'

    //Reset player 1 scores to 0, player name and player UI
    document.getElementById('name-0').textContent = 'player 1'
    document.getElementById('score-0').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')

     //Reset player 2 scores to 0, player name and player UI
    document.getElementById('name-1').textContent = 'player 2'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('active')

    //Set player 1 as the active player
    document.querySelector('.player-0-panel').classList.add('active')

}

function nextPlayer() {
    //Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0

    //Reset round scores to 0
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'

    //Toggle active player UI
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('.dice').style.display = 'none'

}

/**
 * So the first one is that a player loses his entire score when he rolls two six in a row. 
 * So not just the round score, but really all of his score. So two six in a row and then the player loses his entire score.
 * And then, of course, is the next player after that. And one hint that I can give you about this is that you should always
 * save your previous dice roll in a separate variable, so that you can access the present and the past dice roll at the same  
 * time.
*/

function doubleSix() {
    if(previousRoll === dice) {

       //Reset player roundScore and current score counter to 0
        document.getElementById('score-' + activePlayer).textContent = '0'
        document.getElementById('current-' + activePlayer).textContent = '0'

       //change active player
       nextPlayer()
    } else {
        nextPlayer()
    }
}