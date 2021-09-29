import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from "../actions/auth";

function Navbar(props) {
  console.log("nav", props.auth.user, props.auth.isLoggedIn);
  const { isLoggedIn, users } = props.auth;
  return (
    <nav className="nav">
      <div className="left-div" style={{ cursor: "pointer" }}>
        <Link to="/">
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="search-container">
        <img
          className="search-icon"
          src="https://image.flaticon.com/icons/svg/483/483356.svg"
          alt="search-icon"
        />
        <input placeholder="Search" />

        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
            <li className="search-results-row">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
              />
              <span>John Doe</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        {isLoggedIn && (
          <div className="user">
            <Link to="/settings">
              <img
                src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
                id="user-dp"
              />
            </Link>
            <span>{users.name}</span>
          </div>
        )}
        <div className="nav-links">
          <ul>
            {!isLoggedIn && (
              <li>
                <Link to="/login">Log in</Link>
              </li>
            )}
            {isLoggedIn && (
              <li
                onClick={() => {
                  localStorage.removeItem("token");
                  props.dispatch(logout());
                }}
              >
                <Link to="/login">Log out</Link>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <Link to="/signup">Register</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
