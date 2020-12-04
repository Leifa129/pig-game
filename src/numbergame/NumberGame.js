import './numberGame.css';
import {useState, useEffect} from 'react';




function NumberGame() {

    const [number, setNumber] = useState(0);
    const [score, setScore] = useState(20);
    const [hiscore, setHiscore] = useState(0);
    const [answer, setAnswer] = useState(Math.floor(1 + 20 * Math.random()));
    const [helpingText, setHelpingText] = useState('Start guessing...');

    useEffect(() => {
        if(score <= 0)
            setHelpingText('You lost, try again');
    }, [score]);


    const check = () => {
        if(score <= 0){
            return;
        }

        if(Number(number) === answer) {
            setHelpingText('Congratulations, you have won!');
            document.querySelector('body').style.backgroundColor = 'green';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = answer;
            if(score > hiscore)
                setHiscore(score);
        }

        if (number > answer) {
            setScore(prevState => prevState - 1);
            setHelpingText('Your guess was too high...');
        }

        if ( number < answer) {
            setScore(prevState => prevState - 1);
            setHelpingText('Your guess was too low...');
        }




    };

    const restart = () => {
        setNumber(0);
        setHelpingText('Start guessing...');
        setScore(20);
        setAnswer(Math.floor(1 + 20 * Math.random()));
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = '?';
    };

    return (


        <div>
            <header>
                <h1>Guess My Number!</h1>
                <p className="between">(Between 1 and 20)</p>
                <button className="btn again" onClick={restart}>Again!</button>
                <div className="number">?</div>
            </header>
            <main>
                <section className="left">
                    <input type="number" value={number} onChange={event => {setNumber(event.target.value)}}  className="guess" />
                    <button className="btn check" onClick={() => {check()}}>Check!</button>
                </section>
                <section className="right">
                    <p className="message">{helpingText}</p>
                    <p className="label-score">💯 Score: <span className="score">{score}</span></p>
                    <p className="label-highscore">
                        🥇 Highscore: <span className="highscore">{hiscore}</span>
                    </p>
                </section>
            </main></div>
    );
}

export default NumberGame;
