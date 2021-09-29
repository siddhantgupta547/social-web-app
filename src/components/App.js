import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { fetchPosts } from "../actions/posts";
import Home from "./Home";
import Navbar from "./Navbar";
import Error from "./Error";
import Login from "./Login";
import Signup from "./Signup";
import Settings from "./Settings";
import Profile from "./Profile";
import PrivateRoutes from "./PrivateRoutes";
import { authenticateUser } from "../actions/auth";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());

    const token = getAuthTokenFromLocalStorage();
    if (token) {
      const { _id: id, email, name } = jwtDecode(token);
      console.log(`id ${id}, email ${email}, name ${name}`);
      this.props.dispatch(
        authenticateUser({
          id,
          email,
          name,
        })
      );
    }
  }

  render() {
    const { posts } = this.props;
    const isLoggedIn = this.props.auth.isLoggedIn;
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} posts={posts} />;
              }}
            />
            <Route
              exact
              path="/login"
              render={(props) => {
                return <Login {...props} />;
              }}
            />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoutes
              path="/settings"
              component={Settings}
              isLoggedIn={isLoggedIn}
            />
            <PrivateRoutes
              path="/profile/:user_id"
              component={Profile}
              isLoggedIn={isLoggedIn}
            />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    auth: state.auth,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(App);
