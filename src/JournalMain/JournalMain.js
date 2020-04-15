import React, { Component } from "react";
import "./JournalMain.css";
import FoodversityContext from "../FoodversityContext";
import { getFoodsForDay } from "../food-helpers";
import Food from "../Food";

//componentDidMount because the api needs to show the journal on start
//do i need dummy data? helpers
//handleSubmit w baseUrl
class JournalMain extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = FoodversityContext;
  //read data from the f context
  //.provider is a component, everything inside can read data from the context

  render() {
    const { dayId } = this.props.match.params;
    const { foods = [] } = this.context;
    const foodsForDay = getFoodsForDay(foods, dayId);
    return (
      <section className="JournalMain">
        <button
          id="start"
          onClick={(e) => this.props.history.replace("/addform")}
        >
          Add All The Foods!
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
      </section>
    );
  }
}
//         <div className='JournalMain'>
//             <button id='start' onClick={e => this.props.history.replace("/addform")}>Add All The Foods!</button>
// <h2>
//     food journal
//    </h2>

// <section id='monday'>
//      <h3>monday</h3>
//     <ul id='monday'>
//         <li>
//         {/* map over the array from the fetch call in app */}
//             breakfast: {this.context.days}
//         </li>
//         <li>
//             lunch:
//         </li>
//         <li>
//             dinner:
//         </li>
//         <li>
//             snacks :
//         </li>
//     </ul>
//     <button id="delete" type="delete">Delete</button>

// </section>
// <section id='tuesday'>
//      <h3>tuesday</h3>
//     <ul id='tuesday'>
//         <li>
//             breakfast
//         </li>
//         <li>
//             lunch
//         </li>
//         <li>
//             dinner
//         </li>
//         <li>
//             snacks
//         </li>
//     </ul>
//     <button id="delete" type="delete">Delete</button>

// </section>
// <section id='wednesday'>
//     what you eat on wednesday
//     <ul id='wednesday'>
//         <li>
//             breakfast
//         </li>
//         <li>
//             lunch
//         </li>
//         <li>
//             dinner
//         </li>
//         <li>
//             snacks
//         </li>
//     </ul>
//     <button id="edit" type="edit">Delete</button>

// </section>
// <section id='thursday'>
//     what you eat on thursday
//     <ul id='thursday'>
//         <li>
//             breakfast
//         </li>
//         <li>
//             lunch
//         </li>
//         <li>
//             dinner
//         </li>
//         <li>
//             snacks
//         </li>
//     </ul>
//     <button id="edit" type="edit">Delete</button>

// </section>
// <section id='friday'>
//     what you eat on friday
//     <ul id="friday">
//         <li>
//             breakfast
//         </li>
//         <li>
//             lunch
//         </li>
//         <li>
//             dinner
//         </li>
//         <li>
//             snacks
//         </li>
//     </ul>
//     <button id="edit" type="edit">Delete</button>

// </section>
// <section id='saturday'>
//     what you eat on saturday
//     <ul id='saturday'>
//         <li>
//             breakfast
//         </li>
//         <li>
//             lunch
//         </li>
//         <li>
//             dinner
//         </li>
//         <li>
//             snacks
//         </li>
//     </ul>
//     <button id="delete" type="delete">Delete</button>

// </section>
// <section id='sunday'>
//     what you eat on sunday
//     <ul id='sunday'>
//         <li>
//             breakfast
//         </li>
//         <li>
//             lunch
//         </li>
//         <li>
//             dinner
//         </li>
//         <li>
//             snacks
//         </li>
//     </ul>
//     <button id="delete" type="delete">Delete</button>

// </section>
// </div>
// )
// }
// }

export default JournalMain;
