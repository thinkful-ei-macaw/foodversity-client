import React from "react";
import FoodversityContext from "./FoodversityContext";

export default class Days extends React.Component {
  static defaultProps = {
    onDeleteFood: () => {},
  };
  static contextType = FoodversityContext;


  render() {
    const { days, id } = this.props;
    return (
      <div className="day">
        <h3 className="day__title" value={`/days/${id}`}>{days}
        
          this is the day of the week
          
        </h3>
      
      </div>
    );
  }
}
