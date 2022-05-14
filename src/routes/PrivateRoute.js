import React from "react";
import {Navigate} from "react-router-dom";
import routes from "routes/routes";
import { useSelector } from 'react-redux';

const CheckAuth = () => {
    const { isLoggedIn } = useSelector(state => state.auth)
    return isLoggedIn
}

const PrivateRoute = ({route}) => {
    const isAuth = CheckAuth()
    console.log(isAuth)
    return (
        isAuth ? <Navigate to={routes.ORDERS.path} /> : route.element
    );
}

export default PrivateRoute;