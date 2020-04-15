import React from 'react';
import './StartScreen.css';


function StartScreen (props) {
    return (
        <div className = 'StartScreen'>
        <h1>
            
       foodversity
     </h1>
     <p>a food journal for the uber-organised </p>
     <button id='start' onClick={e => props.history.replace("/login")}>Start</button>
     </div>
    )
}


export default StartScreen;

