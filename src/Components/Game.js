import React, { useState } from 'react';

const Game = ({ name }) => {
    const moves = ['Rock', 'Paper', 'Scissor'];
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    
    // calculations
    const play = (move) => {
        let result;
        document.getElementById('show').innerHTML = '';
        const computer = moves[Math.floor(Math.random() * 3)];
        setTimeout(() => 
            document.getElementById('show').innerHTML = computer
        , 100);

        // conditions
        if (move === 'Rock') {
            if (computer === 'Paper') result = 'Lost';
            else if (computer === 'Scissor') result = 'Won';
            else result = 'Tie';
        }
        else if (move === 'Paper') {
            if (computer === 'Rock') result = 'Won';
            else if (computer === 'Scissor') result = 'Lost';
            else result = 'Tie';
        }
        else {
            if (computer === 'Rock') result = 'Lost';
            else if (computer === 'Paper') result = 'Won';
            else result = 'Tie';
        }

        // showing result count
        if (result === 'Won') setPlayerScore(playerScore + 1);
        else if (result === 'Lost') setComputerScore(computerScore + 1);
    }
    
    return (
        <section id="game" className="">
            <h4 className="text-center">Let's play Rock Paper Scissors!</h4>
            <div className="row text-center mt-5">
                <div className="col-6">
                    <h6 className="text-primary">{name} ({playerScore})</h6>
                    <div className="btn-group mt-3">
                        <span onClick={() => play('Rock')} className="m-1">Rock</span>
                        <span onClick={() => play('Paper')} className="m-1">Paper</span>
                        <span onClick={() => play('Scissor')} className="m-1">Scissor</span>
                    </div>
                </div>
                <div className="col-6">
                    <h6 className="text-success">Computer ({computerScore})</h6>
                    <button id="show" className="btn disabled mt-3">Loading</button>
                </div>
            </div>
        </section>
    );
};

export default Game;