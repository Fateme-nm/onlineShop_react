import React from "react";
import {Navigate} from "react-router-dom";
import routes from "routes/routes";

const WithCheckLogin = (Component) => {
  return (props) => {
    const isAuth = !!localStorage.getItem("token");
    return isAuth ? (
      <Navigate to={routes.ORDERS.path} replace/>
    ) : (
       <Component {...props} />
    );
  };
};

export default WithCheckLogin;
