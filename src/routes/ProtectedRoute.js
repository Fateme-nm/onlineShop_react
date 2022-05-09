import React from 'react';
import { Navigate } from "react-router-dom";

const useAuth = () => {
    const login = true
    return login
}

const ProtectedRoute = ({route}) => {
    const isAuth = useAuth()
    return (
        isAuth ? route.element : <Navigate to="/login" replace />
    );
}

export default ProtectedRoute;
