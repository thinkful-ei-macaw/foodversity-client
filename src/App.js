import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import StartScreen from './StartScreen/StartScreen';
import JournalMain from './JournalMain/JournalMain';
import LoginForm from './LoginForm/LoginForm'
import AddForm from './AddForm/AddForm';
import FoodversityContext from './FoodversityContext';
import config from "./config";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],
      food: [],
    };
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/days`),
      fetch(`${config.API_ENDPOINT}/food`),
    ])
      .then(([daysRes, foodsRes]) => {
        
        if (!daysRes.ok) return daysRes.json().then((e) => Promise.reject(e));
        if (!foodsRes.ok)
          return foodsRes.json().then((e) => Promise.reject(e));

        return Promise.all([daysRes.json(), foodsRes.json()]);
      })
      .then(([days, foods]) => {
        console.log(days);
        this.setState({ days, foods });
      })
      .catch((error) => {
        console.error({ error });
      });
  }


  // componentDidMount() {
  //   fetch(`${config.API_ENDPOINT}/days`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(`${config.API_ENDPOINT}/days`)
  //       this.setState({
  //         foods: data
  //       });
  //     });

  //   fetch(`${config.API_ENDPOINT}/food`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       this.setState({
  //         days: data
  //       });
  //     });
  //   }

  //compononent did mount
  //days first then days



  //post method

  handleStartScreen = (e) =>{
    e.preventDefault();
    const baseUrl = `${config.API_ENDPOINT}/`;

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