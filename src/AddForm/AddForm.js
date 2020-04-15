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
      title: e.target["food-name"].value,
      content: e.target["food-content"].value,
      day_id: e.target["food-day-id"].value,
      modified: new Date(),
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
        this.context.addfood(food);
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
        <FoodForm onSubmit={this.handleSubmit}>
          <section className="form">
            <label htmlFor="food-name">food Name</label>
            <input required type="text" name="title" id="food-name" />
            <label htmlFor="food-content">food Content</label>
            <input required type="text" name="content" id="food-content" />
            <label htmlFor="day-select">day Select</label>
            <select required id="food-day-select" name="food-day-id">
              {days.map((day) => (
                <option key={day.id} value={day.id}>
                  {day.title}
                </option>
              ))}
            </select>

            <div className="button">
              <button type="submit">Add food</button>
            </div>
          </section>
        </FoodForm>
      </section>
    );
  }
}

export default AddForm;

// import React, { Component } from 'react';
// import './AddForm.css'

// //POST method For new items entered and added into form
// //server side should have the post method as well

// //addform should have a drop down for day and meal, to easily add to the right days table
// //add url field for recipe

// class AddForm extends Component {
// static defaultProps = {
//     history: {
//         push: () =>{},
//     }
// }

//     render(){
// return(
//     <div className='AddForm'>
//             <h3>add food journal entry</h3>

//     <form className="add">
//         <fieldset>
//             <label htmlFor="day-of">what day is it?</label>
//             <input className='day-of-week' type='date' name='day-of-week' id='day-of-week' /><br />
//             <label htmlFor='meal-type'>what meal is it?</label>
//             <select id="meal type" >
// >
//   <option value="breakfast">breakfast</option>
//   <option value="lunch">lunch</option>
//   <option value="dinner">dinner</option>
//   <option value="snacks">snacks</option>
// </select>
//             {/* {days.map((days)=>
//             (<option key={days.id} value={days.id}>
//                 {days.title}
//             </option>) )
//             } */}
//             <div className="food-form">
//             <label htmlFor="input-one">item 1</label>
//                 <input className="form-control" type="text" name="first-item" id="first-item" placeholder="bread, etc" />
//                 <input className="btn btn--form" type="submit" value="add item" /></div>
//                 <label htmlFor="url">Link to recipe</label>
//                 <input className="form-control" type="text" name="url" id="url" placeholder="https://...." /><br />
//                 <button id='addform' onClick={e => this.props.history.replace("/main")}>Add Meal</button>
//                 <button id='cancel add' onClick={e => this.props.history.replace("/main")}>nevermind...</button>

//             </fieldset>
//     </form>
//     </div>

// )
//         }
// }
//  export default AddForm;
