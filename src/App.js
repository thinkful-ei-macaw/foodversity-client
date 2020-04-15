import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import StartScreen from './StartScreen/StartScreen';
import JournalMain from './JournalMain/JournalMain';
import LoginForm from './LoginForm/LoginForm'
import AddForm from './AddForm/AddForm';
import FoodversityContext from './FoodversityContext';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      food: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/days")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          folders: data
        });
      });

    fetch("http://localhost:8000/food")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          notes: data
        });
      });
    }

  //compononent did mount
  //days first then notes



  //post method

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
    const value = {
      days: this.state.days,
      food: this.state.food,
    }
  return (
    <FoodversityContext.Provider value={value}>
    <div className="App">
      <Route exact path='/' component={StartScreen}/>
      <Route exact path = '/main' component={JournalMain} />
      <Route exact path='/login' component={LoginForm}/>
      <Route exact path='/addform' component={AddForm}/>
     
    </div>
    </FoodversityContext.Provider>
  );
}
}


// renderMainRoutes(){
//   const contextValue
//   }

export default App;

//open terminal is control tilde