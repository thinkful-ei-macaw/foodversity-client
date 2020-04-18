import React from "react";

export default function FoodForm(props) {

  
  const { className, ...otherProps } = props;
  return (
    <form
      className={["food-form", className].join(" ")}
      action="#"
      {...otherProps}
      onSubmit={props.onSubmit}
    >
      <fieldset>
        <label htmlFor="day-name" name="food-day-id">
          what day is it?
        </label>
        <select id="food-day-select" name="food-day-id">
          {props.days.map((day) => (
            <option key={day.id} value={day.id}>
              {day.title}
            </option>
          ))}
        </select><br />
        <label htmlFor="meal-type">what meal is it?</label>
        <input type='text' id="meal-type" placeholder='breakfast, lunch...'>
          
        </input>
<br />
        <div className="food-form">
          <label htmlFor="input-one">item 1</label>
          <input
            className="form-control"
            type="text"
            name="first-item"
            id="first-item"
            placeholder="bread, etc"
          required/><br/>
          <label htmlFor="input-one">item 2</label>
          <input
            className="form-control"
            type="text"
            name="second-item"
            id="second-item"
            placeholder="eggs, etc"
          /><br />
          <label htmlFor="input-one">item 3</label>
          <input
            className="form-control"
            type="text"
            name="third-item"
            id="third-item"
            placeholder="juice, etc"
          /><br />
        </div>
        <label htmlFor="url">Link to recipe</label>
        <input
          className="form-control"
          type="text"
          name="url"
          id="url"
          placeholder="https:...."
        />
        <br />
      </fieldset>
      <button id="addform">Add Meal</button>
    </form>
  );
}
