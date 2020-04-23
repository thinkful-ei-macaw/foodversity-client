import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MealMain from "../MealMain";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MealMain />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
