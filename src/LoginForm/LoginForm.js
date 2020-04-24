import React, { Component } from "react";
import "./LoginForm.css";
import TokenService from "../services/token-service";
import AuthApiService from "../services/auth-api-service";
import { Link } from "react-router-dom";
import { Button, Input } from "../Utils/Utils";

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  state = { error: null };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = ev.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <section id="log-in">
        <div className="login-wrapper">
          <h3>Log In</h3>
          <div className="demo-credentials">
            <h3>Demo Credentials</h3>
            <p>
              <strong>username:</strong> demo
            </p>
            <p>
              <strong>password:</strong> D3m0!1234
            </p>
          </div>
          <form onSubmit={this.handleSubmitJwtAuth}>
            <fieldset id="logging">
              <label htmlFor="username">Username: </label>
              <Input
                name="user_name"
                id="LoginForm__user_name"
                placeholder="james.bond"
                required
              ></Input>
              <br />
              <br />
              <label htmlFor="password">Password: </label>
              <Input
                type="password"
                name="password"
                id="LoginForm__password"
                placeholder="********"
                required
              ></Input>
            </fieldset>
            <br />
            <Button id="login" type="submit">
              Login
            </Button>{" "}
            <br />
            <Link id="cancel" to={"/"}>
              <button type="button">Cancel</button>
            </Link>
          </form>
        </div>
      </section>
    );
  }
}

export default LoginForm;
