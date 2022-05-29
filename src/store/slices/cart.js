import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpService from "services/HttpService";

export const showCartProducts = createAsyncThunk(
  'cart/showProducts',
  async (_, { getState }, thunkAPI) => {
    try {
      const { cartProducts } = getState().cart
      const sizes = await httpService.get('size').then(res => res.data)
      const colors = await httpService.get('color').then(res => res.data)
      const products = await Promise.all(cartProducts.map(pro => {
        const {productId, colorId, sizeId, quantity} = pro
        const {name, price, count} = 
          httpService.get(`products?id=${productId}`).then(res => res.data[0])
        const size = sizes.find(size => size.id == sizeId)
        const color = colors.find(color => color.id == colorId)
        return {quantity, name, price, count, size, color}
    }))
      return { products }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
)

const initialState = {
    cartProducts: [],
    showCartProducts: [],
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