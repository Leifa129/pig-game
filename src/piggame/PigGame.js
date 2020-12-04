import React from 'react';
import './style.css';
import dice1 from './img/dice-1.png';
import dice2 from './img/dice-2.png';
import dice3 from './img/dice-3.png';
import dice4 from './img/dice-4.png';
import dice5 from './img/dice-5.png';
import dice6 from './img/dice-6.png';

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let currentEl = null;
let finished = false;

function restartGame() {
    document.querySelector(`.player--${activePlayer}` ).classList.remove('player--winner');
    document.querySelector(`.player--0` ).classList.add('player--active');
    activePlayer = 0;
    finished = false;
    scores[0] = 0;
    scores[1] = 0;

    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    currentScore = 0;

    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;

}

function roll() {
    if(finished)
        return;

    let number = 1 + Math.floor(6 * Math.random());
    const dice = document.querySelector('.dice');
    currentEl = document.querySelector('#current--' + activePlayer);
   // const currentEl1 = document.querySelector('#current--1');
    dice.classList.remove('hidden');
    let diceImg = null;

    switch (number) {
        case 1:
            diceImg = dice1;
            break;

        case 2:
            diceImg = dice2;
            break;

        case 3:
            diceImg = dice3;
            break;

        case 4:
            diceImg = dice4;
            break;

        case 5:
            diceImg = dice5;
            break;

        case 6:
            diceImg = dice6;
            break;

        default: break;
    }

    dice.src = diceImg;

    if(number !== 1){
        currentScore += number;
        currentEl.textContent = currentScore;
    }

    else {
    switchPlayer();
    }


}

function switchPlayer() {
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    activePlayer = (activePlayer + 1) % 2;
    currentScore = 0;
    if(currentEl)
        currentEl.textContent = currentScore;
}

function hold() {
    if(!currentEl || finished)
        return;

    scores[activePlayer] += currentScore;
    document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];

    if(scores[activePlayer] >= 100){
        document.querySelector(`.player--${activePlayer}` ).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}` ).classList.remove('player--active');
        finished = true;
        document.querySelector('.dice').classList.add('hidden');
        return;
    }

    switchPlayer();
}

function PigGame() {
    return (
        <main>
            <section className="player player--0 player--active">
                <h2 className="name" id="name--0">Player 1</h2>
                <p className="score" id="score--0">0</p>
                <div className="current">
                    <p className="current-label">Current</p>
                    <p className="current-score" id="current--0">0</p>
                </div>
            </section>
            <section className="player player--1">
                <h2 className="name" id="name--1">Player 2</h2>
                <p className="score" id="score--1">0</p>
                <div className="current">
                    <p className="current-label">Current</p>
                    <p className="current-score" id="current--1">0</p>
                </div>
            </section>

            <img src={dice5} alt="Playing dice" className="dice hidden"/>
            <button className="btn btn--new" onClick={ restartGame}>🔄 New game</button>
            <button className="btn btn--roll" onClick={roll}>🎲 Roll dice</button>
            <button className="btn btn--hold" onClick={hold}>📥 Hold</button>

        </main>
    );
}

export default PigGame;