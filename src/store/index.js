import { configureStore } from "@reduxjs/toolkit";
import { authSlice, messageSlice } from './rootReducer'

const reducer = {
    auth: authReducer,
    message: messageReducer
}

export const store = configureStore({
    devTools: true,
    reducer
})