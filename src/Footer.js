import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Hyph } from "./Utils/Utils";
import TokenService from "./services/token-service";
import "./Footer.css";

export default class Footer extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  };

  renderLogoutLink() {
    return (
      <div className="Footer__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          <button type="button">Logout</button>
        </Link>
      </div>
    );
  }
  renderLoginLink() {
    return (
      <div className="Footer__not-logged-in">
        <Link to="/register">
          <button type="button">Register</button>
        </Link>
        <Hyph />
        {/* <Link to="/login">Log in</Link> */}
      </div>
    );
  }
  render() {
    return (
      <nav className="Footer">
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </nav>
    );
  }
}
