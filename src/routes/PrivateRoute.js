import React from "react";
import {Navigate} from "react-router-dom";
import routes from "routes/routes";
import { useSelector, useDispatch } from 'react-redux';
import { checkExpireTime } from "store/slices/auth";

const CheckAuth = () => {
    const dispatch = useDispatch()
    const { admin } = useSelector(state => state.auth)
    if (!admin) return false
    try {
        dispatch(checkExpireTime())
    } catch (err) {
        return false
    }
    return true
}

const PrivateRoute = ({route}) => {
    const isAuth = CheckAuth()
    return (
        isAuth ? <Navigate to={routes.ORDERS.path} /> : route.element
    );
}

export default PrivateRoute;