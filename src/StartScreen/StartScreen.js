import React from "react";
import "./StartScreen.css";
import { Link } from "react-router-dom";
import "./StartScreen.css";

function StartScreen(props) {
  return (
    <div className="StartScreen">
      <div className="landing-wrapper">
        <h1>foodversity</h1>
        <p>a food journal for the uber-organised </p>
        <Link id="start" to="/main">
          <button type="button">Start</button>
        </Link>
        <Link id="info" to="/info">
          <button type="button">Info</button>
        </Link>
      </div>
    </div>
  );
}

export default StartScreen;
