import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import FoodForm from "./FoodForm";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <FoodForm />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
