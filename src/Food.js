import React from "react";
import { Link } from "react-router-dom";
import FoodversityContext from "./FoodversityContext";
import config from "./config";

export default class Food extends React.Component {
  static defaultProps = {
    onDeleteFood: () => {},
  };
  static contextType = FoodversityContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const foodId = this.props.id;

    fetch(`${config.API_ENDPOINT}/food/${foodId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then(() => {
        this.context.deleteFood(foodId);
        // allow parent to perform extra behaviour << you can tell Dasha wrote this
        //because I'm the only one who writes british style
        this.props.onDeleteFood(foodId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const { name, id } = this.props;
    return (
      <div className="food">
        <h2 className="food__title">
          <Link to={`/food/${id}`}>{name}</Link>
        </h2>
        <button
          className="food__delete"
          type="button"
          onClick={this.handleClickDelete}
        >
          delete
        </button>
      </div>
    );
  }
}
