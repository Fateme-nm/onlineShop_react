import React from 'react';
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import routes from './routes';
import { checkExpireTime } from 'store/slices/auth';

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

const ProtectedRoute = ({route}) => {
    const isAuth = CheckAuth()
    return (
        isAuth ? route.element : <Navigate to={routes.LOGIN_TO_PANEL.path} replace />
    );
}

export default ProtectedRoute;
