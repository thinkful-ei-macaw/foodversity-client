import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import StartScreen from './StartScreen/StartScreen';
import JournalMain from './JournalMain/JournalMain';
import LoginForm from './LoginForm/LoginForm'
import AddForm from './AddForm/AddForm';




function App() {
  return (
    <div className="App">
      <Route exact path='/' component={StartScreen}/>
      <Route exact path = '/main' component={JournalMain} />
      <Route exact path='/login' component={LoginForm}/>
      <Route exact path='/addform' component={AddForm}/>
     
    </div>
  );
}

// renderMainRoutes(){
//   const contextValue
//   }

export default App;

//open terminal is control tilde