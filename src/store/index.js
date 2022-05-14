import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/auth';
import messageReducer from './slices/message';
import ordersReducer from './slices/orders'

const reducer = {
    auth: authReducer,
    message: messageReducer,
    orders: ordersReducer
}

export const store = configureStore({
    devTools: true,
    reducer
})

export default store;