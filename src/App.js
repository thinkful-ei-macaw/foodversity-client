import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import StartScreen from "./StartScreen/StartScreen";
import MealMain from "./MealMain";
import LoginForm from "./LoginForm/LoginForm";
import AddForm from "./AddForm/AddForm";
import FoodversityContext from "./FoodversityContext";
import config from "./config";
import AddDay from "./AddDay";
import Info from "./Info";

class App extends Component {
  state = {
    days: [],
    foods: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/days`),
      fetch(`${config.API_ENDPOINT}/food`),
    ])
      .then(([daysRes, foodsRes]) => {
        console.log(this.state);
        if (!daysRes.ok) return daysRes.json().then((e) => Promise.reject(e));
        if (!foodsRes.ok) return foodsRes.json().then((e) => Promise.reject(e));

        return Promise.all([daysRes.json(), foodsRes.json()]);
      })
      .then(([days, foods]) => {
        console.log(days);
        console.log(foods);
        this.setState({ days, foods });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  handleAddDay = (day) => {
    this.setState({
      days: [...this.state.days, day],
    });
  };
  handleDeleteDay = (dayID) => {
    this.setState({
      days: this.state.days.filter((d) => d.id !== dayID),
    });
  };

  handleAddFood = (food) => {
    this.setState({
      foods: [...this.state.foods, food],
    });
  };
  handleDeleteFood = (food) => {
    this.setState({
      foods: [...this.state.foods, food],
    });
  };

  render() {
    const value = {
      days: this.state.days,
      foods: this.state.foods,
      addDay: this.handleAddDay,
      deleteDay: this.handleDeleteDay,
      addForm: this.handleAddFood,
      deleteFood: this.handleDeleteFood,
    };
    return (
      <FoodversityContext.Provider value={value}>
        <div className="App">
          <Route exact path="/" component={StartScreen} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/main" component={MealMain} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/addform" component={AddForm} />
          <Route path="/add-day" component={AddDay} />
        </div>
      </FoodversityContext.Provider>
    );
  }
}

export default App;

//open terminal is control tilde
