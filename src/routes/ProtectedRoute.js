import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({route}) => {
    const isAuth = !!localStorage.getItem('token')
    return (
        isAuth ? route.element : <Navigate to="/login" replace />
    );
}

export default ProtectedRoute;
