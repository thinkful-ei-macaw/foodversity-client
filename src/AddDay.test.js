import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AddDay from "./AddDay";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <AddDay />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
