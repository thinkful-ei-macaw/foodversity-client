import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import StartScreen from "./StartScreen";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <StartScreen />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
