import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const checkAuth = () => {
    const { isLoggedIn } = useSelector(state => state.auth)
    return isLoggedIn
}

const ProtectedRoute = ({route}) => {
    const isAuth = checkAuth()
    return (
        isAuth ? route.element : <Navigate to="/login" replace />
    );
}

export default ProtectedRoute;
