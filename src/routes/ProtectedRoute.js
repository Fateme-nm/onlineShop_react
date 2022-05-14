import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import routes from './routes';

const CheckAuth = () => {
    const { isLoggedIn } = useSelector(state => state.auth)
    return isLoggedIn
}

const ProtectedRoute = ({route}) => {
    const isAuth = CheckAuth()
    return (
        isAuth ? route.element : <Navigate to={routes.LOGIN_TO_PANEL.path} replace />
    );
}

export default ProtectedRoute;
