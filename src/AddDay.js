import React, { Component } from "react";
import FoodversityContext from "./FoodversityContext";
import config from "./config";
import "./AddDay.css";

class AddDay extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  static contextType = FoodversityContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const newDay = {
      title: e.target.title.value,
    };
    fetch(`${config.API_ENDPOINT}/days`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newDay),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((day) => {
        this.context.addDay(day);
        this.props.history.push(`/main`);
      })

      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    return (
      <section className="addDay">
        <h2>add day</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label htmlFor="day-name">what day is it</label>
            <input type="date" name="title" id="food-day-id" required />

            <div className="button"></div>
          </fieldset>
          <button type="submit">Add day</button>
        </form>
        <button
          id="cancel add"
          onClick={(e) => this.props.history.replace("/main")}
        >
          nevermind...
        </button>
      </section>
    );
  }
}

export default AddDay;
