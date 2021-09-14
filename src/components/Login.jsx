import React, { Component } from "react";
import { connect } from "react-redux";
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
    const { inProgress } = this.props.auth;
    console.log(inProgress);
    return (
      <form className="login-form">
        <span className="login-signup-header">Log In</span>
        <div className="field">
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
