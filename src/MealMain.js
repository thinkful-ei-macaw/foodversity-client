import React from "react";
import Days from './Days'
import Food from "./Food";
import FoodversityContext from "./FoodversityContext";
import { getFoodsForDay } from "./food-helpers";
import "./JournalMain.css";

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
    const { days = [] }= this.context;
    const foodsForDay = getFoodsForDay(foods, dayId);
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
        <h3>monday        </h3>

        <ul>
          breakfast:
          {foodsForDay.map((food) => (
            <li key={food.id}>
              <Days id={days.id} name={days.title} />
              <Food id={food.id} name={food.content} day={food.days_id}/>

              
            </li>
          ))}
        </ul>
<div className ='days-main' value={days}>
</div>
       
      </section>
    );
  }
}
