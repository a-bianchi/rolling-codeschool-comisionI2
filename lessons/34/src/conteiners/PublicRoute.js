import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../utils/functions";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin(true) && restricted ? (
          <Redirect to={"/privada"} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
