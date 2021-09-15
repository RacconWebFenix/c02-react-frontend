import { Redirect, Route } from "react-router";
import React from "react";

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      auth === true ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export default GuardedRoute;
