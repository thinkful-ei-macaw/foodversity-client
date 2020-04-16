import React from "react";

export default function FoodForm(props) {
  const { className, days = [], ...otherProps } = props;

  return (
    <form
      className={["food-form", className].join(" ")}
      action="#"
      {...otherProps}
      onSubmit={props.onSubmit}
    >
      <fieldset>
        <label htmlFor="day-select" name="food-day-id">
          what day is it?
        </label>
        <select id="food-day-select" name="food-day-id">
          {props.days.map((day) => (
            <option key={day.id} value={day.id}>
              {day.title}
            </option>
          ))}
        </select>
        <label htmlFor="meal-type">what meal is it?</label>
        <select id="meal type">
          ><option value="breakfast">breakfast</option>
          <option value="lunch">lunch</option>
          <option value="dinner">dinner</option>
          <option value="snacks">snacks</option>
        </select>

        <div className="food-form">
          <label htmlFor="input-one">item 1</label>
          <input
            className="form-control"
            type="text"
            name="first-item"
            id="first-item"
            placeholder="bread, etc"
          />
          <input className="btn btn--form" type="submit" value="add item" />
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
