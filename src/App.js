import React, { Component } from "react";
import "./App.css";
import StartScreen from "./StartScreen/StartScreen";
import MealMain from "./MealMain";
import LoginPage from "./LoginForm/LoginPage";
import AddForm from "./AddForm/AddForm";
import FoodversityContext from "./FoodversityContext";
import config from "./config";
import AddDay from "./AddDay";
import Info from "./Info";
import PrivateRoute from "./Utils/PrivateRoute";
import PublicOnlyRoute from "./Utils/PublicOnlyRoute";
import Register from "./Registration";

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
        if (!daysRes.ok) return daysRes.json().then((e) => Promise.reject(e));
        if (!foodsRes.ok) return foodsRes.json().then((e) => Promise.reject(e));

        return Promise.all([daysRes.json(), foodsRes.json()]);
      })
      .then(([days, foods]) => {
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
          <PublicOnlyRoute exact path="/" component={StartScreen} />
          <PublicOnlyRoute exact path="/info" component={Info} />
          <PrivateRoute exact path="/main" component={MealMain} />
          <PublicOnlyRoute exact path="/login" component={LoginPage} />
          <PublicOnlyRoute exact path="/register" component={Register} />
          <PrivateRoute exact path="/addform" component={AddForm} />
          <PrivateRoute path="/add-day" component={AddDay} />
        </div>
      </FoodversityContext.Provider>
    );
  }
}

export default App;

//open terminal is control tilde
