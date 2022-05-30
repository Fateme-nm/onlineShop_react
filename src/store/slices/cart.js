import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import httpService from "services/HttpService";

export const getShowCartProducts = createAsyncThunk(
  'cart/showProducts',
  async (_, { getState }, thunkAPI) => {
    try {
      const { cartProducts } = getState().cart
      const sizes = await httpService.get('size').then(res => res.data)
      const colors = await httpService.get('color').then(res => res.data)
      let [totalQuantity, totalPrice] = [0, 0]
      const products = await Promise.all(cartProducts.map(async (pro) => {
        const {productId, colorId, sizeId, quantity} = pro
        const {name, price, count, image} = 
          await httpService.get(`products?id=${productId}`).then(res => res.data[0])
        const size = sizes.find(size => size.id == sizeId).name
        const color = colors.find(color => color.id == colorId).hex
        totalQuantity = totalQuantity + quantity
        totalPrice = totalPrice + ( price * quantity )
        return {productId, quantity, name, price, count, size, color, image}
    }))
      return { products, totalQuantity, totalPrice }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
)

export const checkingCount = createAsyncThunk(
  "cart/checkingCount",
  async ({ getState }, thunkAPI) => {
    try {
      const { cartProducts } = getState().cart
      const products = await Promise.all(cartProducts.filter(async pro => {
        const count = await httpService
          .get(`products?id=${pro.productId}`).then(res => res.data[0].count)
        return count > 0 ? true : false
      })) 
      return { products }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
)

const initialState = {
    cartProducts: [],
    showCartProducts: {products: [], totalQuantity: 0, totalPrice: 0},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    handleAddToCart: (state, action) => {
      state.cartProducts.push(action.payload)
      const cart = localStorage.getItem("cart")
      if (cart) {
        localStorage.setItem("cart", JSON.stringify([...JSON.parse(cart), action.payload]))
      } else localStorage.setItem("cart", JSON.stringify([action.payload]))
    },
    handleUpdateQuantity: (state, action) => {
      const { num, proId } = action.payload
      const updatedList = state.cartProducts.map(pro => {
        if (pro.productId === proId) return {...pro, quantity: num}
        else return pro
      })
      state.cartProducts = updatedList
      localStorage.setItem("cart", JSON.stringify(updatedList))
    },
    handleRemoveFromCart: (state, action) => {
      const filteredList = state.cartProducts.filter(pro => {
        return pro.productId !== action.payload
      })
      state.cartProducts = filteredList
      localStorage.setItem("cart", JSON.stringify(filteredList))
    },
    clearCart: (state) => {
      localStorage.removeItem("cart")
      return { ...state, cartProducts: [] }
    },
    handleSyncStorage: (state) => {
      if (localStorage.getItem("cart")) {
        state.cartProducts = JSON.parse(localStorage.getItem("cart"))
      }
    }
  },
  extraReducers: {
    [getShowCartProducts.fulfilled]: (state, action) => {
      state.showCartProducts = action.payload
    },
    [checkingCount.fulfilled]: (state, action) => {
      state.cartProducts = action.payload.products
    }
  }
});

const { reducer, actions } = cartSlice;
export const { 
  handleAddToCart, 
  handleUpdateQuantity,
  handleSyncStorage, 
  handleRemoveFromCart, 
  clearCart 
} = actions
export default reducer;