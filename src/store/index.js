import { configureStore } from "@reduxjs/toolkit";
import { authReducer, messageReducer } from './rootReducer'

const reducer = {
    auth: authReducer,
    message: messageReducer
}

export const store = configureStore({
    devTools: true,
    reducer
})

export default store;