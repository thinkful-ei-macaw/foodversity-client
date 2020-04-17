import React from "react";
import Days from './Days'
import Food from "./Food";
import FoodversityContext from "./FoodversityContext";
import { getFoodsForDay } from "./food-helpers";
import {Link} from 'react-router-dom'
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
    const { foods = [] } = this.context;
    const { days = [] }= this.context;
   
    return (
      <section className="JournalMain">
        <Link
          id="start"
          to="/addform"
        >
          Add All The Foods!
        </Link>
        <Link
          id="dayAdd"
          to={"/add-day"}
        >
          What Day is it
        </Link>
        <h2>food journal</h2>

        <ul className="calendar">
          {days.map((day) => (
            <li key={day.id}>
              <Days {...day} />
            </li>
          ))}
        </ul>
<div className ='days-main' value={days}>
</div>
       
      </section>
    );
  }
}
