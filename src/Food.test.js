import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Food from "./Food";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Food />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
