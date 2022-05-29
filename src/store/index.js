import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/auth';
import messageReducer from './slices/message';
import ordersReducer from './slices/orders';
import productsReducer from './slices/products';
import removeIdReducer from './slices/removeId';
import editIdReducer from './slices/editId';
import checkIdReducer from './slices/checkId';
import cartReducer from './slices/cart'
// import { loadState, saveState } from "./localstorage";

const reducer = {
    auth: authReducer,
    message: messageReducer,
    orders: ordersReducer,
    products: productsReducer,
    removeId: removeIdReducer,
    editId: editIdReducer,
    checkId: checkIdReducer,
    cart: cartReducer
}

// const loadState = () => {
//     try {
//       const serializedState = localStorage.getItem('cart');
//       if (!serializedState) return undefined;
//       return JSON.parse(serializedState);
//     } catch (err) {
//       return undefined;
//     }
// }; 

// const saveState = (state) => {
//     try {
//       const serializedState = JSON.stringify(state);
//       localStorage.setItem('cart', serializedState);
//     } catch {
//       // ignore write errors
//     }
// };

//const persistedState = loadState();

export const store = configureStore({
    devTools: true,
    reducer,
    // persistedState
})

// store.subscribe(() => {
//     saveState({
//       cart: store.getState().cart.cartProducts
//     });
// });

export default store;