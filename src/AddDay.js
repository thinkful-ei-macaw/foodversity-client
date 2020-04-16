import React, { Component } from "react";
import FoodForm from "./FoodForm";
import FoodversityContext from "./FoodversityContext";
import config from "./config";

class AddDay extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  static contextType = FoodversityContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const day = {
      title: e.target["food-day-id"].value,
    };
    fetch(`${config.API_ENDPOINT}/day`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(day),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((day) => {
        this.context.addDay(day);
        this.props.history.push(`/days/${day.id}`);
      })

      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    console.log("hello");
    return (
      <section className="addDay">
        <h2>Add day</h2>
        <FoodForm onSubmit={this.handleSubmit}>
          <label htmlFor="day-name">what day is it</label>
          <input type="date" name="food-day-id" id="food-day-select" />

          <div className="button">
            <button type="submit" onClick={this.handleSubmit}>
              {" "}
              Add day
            </button>
            <button
              id="cancel add"
              onClick={(e) => this.props.history.replace("/main")}
            >
              nevermind...
            </button>
          </div>
        </FoodForm>
      </section>
    );
  }
}

export default AddDay;
