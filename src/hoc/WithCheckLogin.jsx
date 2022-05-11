import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "routes/routes";

const WithCheckLogin = (Component) => {
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem("token");
  return (props) => {
    isAuth ? (
      navigate(routes.ORDERS.path, { replace: true })
    ) : (
      <Component {...props} />
    );
  };
};

export default WithCheckLogin;
