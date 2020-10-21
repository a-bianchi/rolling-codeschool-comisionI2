import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../utils/functions";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin(true) ? <Component {...props} /> : <Redirect to={"/"} />
      }
    />
  );
};

export default PrivateRoute;
