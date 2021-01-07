import React from "react";
import { Route, Redirect } from "react-router-dom";
import DashboardFundraiser from "../components/Dashboard_Fundraiser";
import DashboardFunder from "../components/Dashboard_Funder";

const PrivateRoute = ({ uList, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          if (localStorage.getItem("role") === "1") {
            return <DashboardFundraiser {...props} />;
          } else if (localStorage.getItem("role") === "2") {
            return <DashboardFunder {...props} />;
          }
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
