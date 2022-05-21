import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartProducts: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    handleAddToCart: (state, action) => {
        state.cartProducts.push(action.payload)
    }
  },
});

const { reducer, actions } = cartSlice;
export const { handleAddToCart } = actions
export default reducer;