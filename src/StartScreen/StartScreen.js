import React from 'react';
import './StartScreen.css';
import { Link } from 'react-router-dom';


function StartScreen (props) {
    return (
        <div className = 'StartScreen'>
        <h1>
            
       foodversity
     </h1>
     <p>a food journal for the uber-organised </p>
     <Link id='start' to='/login'>
         <button type='button'>Start</button>
     </Link>
     <Link id='info' to='/info'>
         <button type='button'>Info</button>
     </Link>
     
     </div>
    )
}


export default StartScreen;

