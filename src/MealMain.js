import React, { Component } from "react";
import Days from './Days'
import FoodversityContext from "./FoodversityContext";
import {Link} from 'react-router-dom'
import "./JournalMain.css";


export default class MealMain extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = FoodversityContext;


  handleDeleteFood = (foodId) => {
    console.log(foodId)
    this.props.history.push(`/main}`);
  };

  render() {
    const { foods = [] } = this.context;
    const { days = [] }= this.context;
   
    return (
      <section className="JournalMain">
        <Link 
          id="start"
          to="/addform"
        ><button type='button'>
          Add All The Foods!
          </button>
        </Link>
        <Link
          id="dayAdd"
          to={"/add-day"}
        ><button type='button'>
          What Day is it
          </button>
        </Link>
        <h2>food journal</h2>

        <ul className="calendar">
          {days.map((day) => (
            <li key={day.id}>
              <Days {...day} />
           
                      <button type='delete' onClick={this.handleDeleteFood}>delete</button>
            </li>
          ))}

        </ul>
       
      </section>
    );
  }
}
