import React, { Component } from "react";
import { connect } from "react-redux";

import { signup } from "../actions/auth";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
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

  handleNameChange = (e) => {
    //console.log(e.target.value);
    this.setState({
      name: e.target.value,
    });
  };

  handleConfirmPasswordChange = (e) => {
    this.setState({
      confirmPassword: e.target.value,
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    const { email, password, confirmPassword, name } = this.state;
    this.props.dispatch(signup(email, password, confirmPassword, name));
  };

  render() {
    const inProgress = this.props.auth.inProgress;
    return (
      <form className="login-form">
        <span className="login-signup-header">Sign Up</span>
        <div className="field">
          <input
            type="text"
            placeholder="Name"
            required
            value={this.state.name}
            onChange={this.handleNameChange}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={this.state.confirmPassword}
            onChange={this.handleConfirmPasswordChange}
          />
        </div>
        <div className="field">
          {inProgress ? (
            <button disabled={!inProgress} style={{ background: "grey" }}>
              Sign Up
            </button>
          ) : (
            <button onClick={this.handleClick}>Sign Up</button>
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

export default connect(mapStateToProps)(Signup);
