import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { login } from "../actions/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmailChange = (e) => {
    //console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    //console.log("State", this.state);
    this.props.dispatch(login(email, password));
  };

  render() {
    const { inProgress, error, isLoggedIn } = this.props.auth;
    //console.log(inProgress);
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    if (isLoggedIn) {
      return <Redirect to={from} />;
    }

    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
          {error && (
            <p
              style={{
                textAlign: "center",
                border: "1px solid red",
                borderRadius: 4,
                padding: 4,
              }}
            >
              {error}
            </p>
          )}
          <input
            type="email"
            placeholder="Email"
            required
            onChange={this.handleEmailChange}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button disabled={!inProgress} style={{ background: "grey" }}>
              Log In
            </button>
          ) : (
            <button onClick={this.handleClick}>Log In</button>
          )}
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
