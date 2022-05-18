import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/auth';
import messageReducer from './slices/message';
import ordersReducer from './slices/orders';
import productsReducer from './slices/products';
import removeIdReducer from './slices/removeId';
import editIdReducer from './slices/editId';
import checkIdReducer from './slices/checkId';

const reducer = {
    auth: authReducer,
    message: messageReducer,
    orders: ordersReducer,
    products: productsReducer,
    removeId: removeIdReducer,
    editId: editIdReducer,
    checkId: checkIdReducer
}

export const store = configureStore({
    devTools: true,
    reducer
})

export default store;