import React from "react";
import { Link } from "react-router-dom";
import "./Info.css";

function Info() {
  return (
    <div className="Info">
      <div className="info-wrapper">
        <h2>what is this all about?</h2>
        <p>
          foodversity is an app to add some diversity to your eating habits!{" "}
          <br />
          <br />
          Gone are the days of eating the same thing every day.
          <br />
          <br />
          With foodversity, you can use the calendar-style format to track what
          you eat, so you never have to be bored again!
          <br />
          <br />
          To use the app, click on get started, and you'll be taken to the
          calendar page. <br />
          <br />
          Click on Add Day to add the day of the week you want to make a food
          entry for.
          <br />
          <br /> After that, you can use the Add food button to add whatever you
          eat to that particular day!
        </p>

        <Link id="start" to="/main">
          <button type="button">get started!</button>
        </Link>
      </div>
    </div>
  );
}

export default Info;
