import React, { Component } from 'react';
import './StartScreen.css';
import JournalMain from '../JournalMain/JournalMain';

const URL = `http://localhost:8000/`;

class StartScreen extends Component {


handleStartScreen = () =>{
    fetch(`${URL}` )
    .then ((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(JSON.stringify(data))
    })
}

handleStartClick (e) {
    e.preventDefault();
    console.log('start button clicked')
    

}



    render(){
    return (
        <div className = 'StartScreen'>
        <h1>
            
       foodversity
     </h1>
     <p>stop creepin... there's nothing here yet </p>
     <button id='start' onClick={this.handleStartClick}>Start</button>
     {/* onClick send me to the the JournalMain */}
     </div>
    )
}
}

export default StartScreen;

// function ActionLink() {
//     function handleClick(e) {
//       e.preventDefault();
//       console.log('The link was clicked.');
//     }
  
//     return (
//       <a href="#" onClick={handleClick}>
//         Click me
//       </a>
//     );
//   }