import React, { Component } from "react";
import FoodversityContext from "../FoodversityContext";
import config from "../config";
import "./AddForm.css";
import FoodForm from "../FoodForm";

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
      day_id: e.target["food-day-id"].value,
    };
    fetch(`${config.API_ENDPOINT}/food`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((food) => {
        this.context.addForm(food);
        this.props.history.push(`/day/${food.dayId}`);
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
        <FoodForm onSubmit={this.handleSubmit} days={days}>
        
        </FoodForm>
        </section>

    );
  }
}

export default AddForm;

 