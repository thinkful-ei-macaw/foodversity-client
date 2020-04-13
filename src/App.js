import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import StartScreen from './StartScreen/StartScreen';
import JournalMain from './JournalMain/JournalMain';
import LoginForm from './LoginForm/LoginForm'
import AddForm from './AddForm/AddForm';



class App extends Component {
  constructor() {
    super();
    this.state = {
      food: {}
    };
  }

  handleStartScreen = (e) =>{
    e.preventDefault();
    const baseUrl = 'http://localhost:8000/';

    fetch(`${baseUrl}` )
    .then ((res) => {
      if (!res.ok){
        throw new Error(res.statusText);
      }
        return res.json();
    })
    .then((data) => {
        console.log(JSON.stringify(data))
    })
}


  render (){
  return (
    <div className="App">
      <Route exact path='/' component={StartScreen}/>
      <Route exact path = '/main' component={JournalMain} />
      <Route exact path='/login' component={LoginForm}/>
      <Route exact path='/addform' component={AddForm}/>
     
    </div>
  );
}
}

// renderMainRoutes(){
//   const contextValue
//   }

export default App;

//open terminal is control tilde