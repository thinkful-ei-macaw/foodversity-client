import React, { Component } from "react";
import Days from "./Days";
import FoodversityContext from "./FoodversityContext";
import { Link } from "react-router-dom";
import "./JournalMain.css";
import config from "./config";
import TokenService from "./services/token-service";

export default class MealMain extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = FoodversityContext;

  handleDeleteFood = (id) => {
    console.log("delete");
    fetch(`${config.API_ENDPOINT}/days/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then(() => {
      this.context.deleteDay(id);
    });
    //this.props.history.push(`/main`);
  };

  render() {
    const { foods = [] } = this.context;
    const { days = [] } = this.context;

    return (
      <section className="JournalMain">
        <div className="journal-wrapper">
          <Link id="dayAdd" to={"/add-day"}>
            <button type="button">Add Day Of The Week</button>
          </Link>
          <Link id="start" to="/addform">
            <button type="button">Add All The Foods!</button>
          </Link>

          <h2 id="journal">food journal</h2>

          <ul className="calendar">
            {days.map((day) => (
              <li key={day.id}>
                <Days {...day} />
                <button
                  id="delete"
                  onClick={() => this.handleDeleteFood(day.id)}
                >
                  delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
