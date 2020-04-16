import React from "react";
import Food from "./Food";
import FoodversityContext from "./FoodversityContext";
import { findFood } from "./food-helpers";
import { getFoodsForDay } from "./food-helpers";

export default class foodPageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = FoodversityContext;

  handleDeleteFood = (foodId) => {
    this.props.history.push(`/`);
  };

  render() {
    const { dayId } = this.props.match.params;
    const { foods = [] } = this.context;
    const foodsForDay = getFoodsForDay(foods, dayId);
    const { foodId } = this.props.match.params;
    const food = findFood(foods, parseInt(foodId)) || { content: "" };
    return (
      <section className="JournalMain">
        <button
          id="start"
          onClick={(e) => this.props.history.replace("/addform")}
        >
          Add All The Foods!
        </button>
        <button
          id="dayAdd"
          onClick={(e) => this.props.history.replace("/add-day")}
        >
          What Day is it
        </button>
        <h2>food journal</h2>
        <h3>monday</h3>
        <ul>
          breakfast:
          {foodsForDay.map((food) => (
            <li key={food.id}>
              <Food id={food.id} name={food.content} />
            </li>
          ))}
        </ul>

        <div className="MealMain">
          <Food
            id={food.id}
            name={food.title}
            modified={food.date}
            onDeleteFood={this.handleDeleteFood}
          />
          <div className="MealMain__content">
            {food.content.split(/\n \r|\n/).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
