import React, { Component } from 'react';
import './StartGame.css';

class StartGame extends Component {   
    constructor() {
        super();
    }

    render() {
        return (
            <div className="StartGame">
               <button >Click Anywhere on the screen to play</button>
            </div>
        );
    } 
}

export default StartGame;
