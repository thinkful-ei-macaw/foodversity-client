import React, { Component } from "react";
import FoodversityContext from "../FoodversityContext";
import config from "../config";
import "./AddForm.css";
import FoodForm from "../FoodForm";
import TokenService from "../services/token-service";

class AddForm extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  static contextType = FoodversityContext;

  handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      content: e.target["first-item"].value,
      days_id: e.target["food-day-id"].value,
      meal_type: e.target["meal-type"].value,
      second_item: e.target["second-item"].value,
      third_item: e.target["third-item"].value,
      url: e.target["url"].value,
      modified: new Date().getTime(),
    };
    fetch(`${config.API_ENDPOINT}/food`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((food) => {
        this.context.addForm(food);
        this.props.history.push(`/main`);
      })

      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const { days = [] } = this.context;

    return (
      <section className="AddFood">
        <h2>add all the foods!</h2>
        <FoodForm onSubmit={this.handleSubmit} days={days}></FoodForm>
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

export default AddForm;
