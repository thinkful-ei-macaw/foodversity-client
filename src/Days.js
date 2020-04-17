import React from "react";
import FoodversityContext from "./FoodversityContext";

export default class Days extends React.Component {
  static defaultProps = {
    onDeleteFood: () => {},
  };
  static contextType = FoodversityContext;

  render() {
    const {id,title} = this.props;
    const {foods} = this.context;
    return (
      <div className="day">
        <h3 className="day__title">
          <a href={`/days/${id}`}>
            {title}
          </a>
        </h3>
        <ul>
              {foods.filter(f=>f.days_id===parseInt(id)).map(f=><li key={f.id}>{f.content}</li>)}
          </ul>
      </div>
    );
  }
}
