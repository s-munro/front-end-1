import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRouteForm = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (
          localStorage.getItem("token") &&
          localStorage.getItem("role") === "1"
        ) {
          return <Component {...props} />;
        } else {
          <Redirect to="/" />;
        }
      }}
    />
  );
};

export default PrivateRouteForm;
