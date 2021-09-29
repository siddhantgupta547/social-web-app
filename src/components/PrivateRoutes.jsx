import React from "react";
import { Redirect, Route } from "react-router";

function PrivateRoutes(privateRouteProps) {
  const { path, component: Component, isLoggedIn } = privateRouteProps;
  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
}

export default PrivateRoutes;
