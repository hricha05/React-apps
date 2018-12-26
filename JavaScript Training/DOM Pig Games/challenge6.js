/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

let scores, roundScore, activePlayer, dice, gamePlaying, previousRoll;

newGame();

document.querySelector('.btn-roll').addEventListener('click', () => {
    if (gamePlaying) {
        //1. Random number
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        let diceDOM1 = document.querySelector('.dice-1');
        let diceDOM2 = document.querySelector('.dice-2');
        diceDOM1.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM1.src = 'dice-' + dice1 + '.png';
        diceDOM2.src = 'dice-' + dice2 + '.png';

        //3. Update the round score IF the rolled number was NOT a 1
        // doubleSix();
    if (dice1 !== 1 && dice2 !== 1) {
            //Add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }

        previousRoll = dice;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //1. Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        //2. Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        let input = document.querySelector('.final-score').value;
        let winningScore;

        // Undefined, 0, null or "" are coerced to false
        // Anything else is coerced to true
        if(input) {
            winningScore = input;
        } else {
            winningScore = 50;
        }

        //3. Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.dice-2').style.display = 'none';
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('.winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
            // document.querySelector('.player-' + activePlayer + 'panel').classList.add('.player-name')
        } else {
            //Next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', newGame);

function nextPlayer() {
    //Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    //Reset round scores to 0
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //Toggle active player UI
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';

}

function newGame() {
    //Initialise scores
    scores = [0, 0];
    roundScore = 0;
    //reset active player
    activePlayer = 0;

    gamePlaying = true;

    //Hide the dice image
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';

    //Reset player 1 scores to 0, player name and player UI
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');

     //Reset player 2 scores to 0, player name and player UI
    document.getElementById('name-1').textContent = 'player 2';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');

    //Set player 1 as the active player
    document.querySelector('.player-0-panel').classList.add('active');

}

// function doubleSix() {
//     if(dice === 6 && previousRoll === 6) {
//        //Player looses score
//        scores[activePlayer] = 0;
//         document.getElementById('score-' + activePlayer).textContent = '0';
//        //change active player
//        nextPlayer();
//     } else if (dice !== 1) {
//         //Add score
//         roundScore += dice;
//         nextPlayer();
//     } else {
//         nextPlayer();
//     }
// }