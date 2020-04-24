import React from "react";
import FoodversityContext from "./FoodversityContext";
// import { Link } from "react-router-dom";

export default class Days extends React.Component {
  static defaultProps = {
    onDeleteFood: () => {},
  };
  static contextType = FoodversityContext;

  render() {
    const { id, title } = this.props;
    const { foods } = this.context;
    return (
      <div className="day">
        <h3 className="day__title">
          {title}
          {/* <a href={`/days/${id}`}>{title}</a> */}
        </h3>
        <ul>
          {foods
            .filter((f) => f.days_id === parseInt(id))
            .map((f) => (
              <li id="days" key={f.id}>
                {f.meal_type}:<br />
                {f.content}
                <br />
                {f.second_item}
                <br />
                {f.third_item}
                <br />
                recipe link:
                <a id="food-url" target="_blank" href={f.url}>
                  {f.url}
                </a>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
