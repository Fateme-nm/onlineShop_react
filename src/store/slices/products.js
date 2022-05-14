import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AdminService from "services/admin.service";
import { useDispatch } from "react-redux";
import { logout } from "./auth";

export const getProducts = createAsyncThunk(
  "panel/products",
  async (thunkAPI) => {
    const dispatch = useDispatch()
    try {
      const res = await AdminService.getProducts();
      return { products: res.data };
    } catch (error) {
        const message = error.response
        if (message.status === 401) {
            dispatch(logout())
        }
    //   thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getCategories = createAsyncThunk(
    "panel/categories", 
    async (thunkAPI) => {
        const dispatch = useDispatch()
        try {
            const res = await AdminService.getCategoreis();
            return { categories: res.data };
        } catch (error) {
            const message = error.response
            if (message.status === 401) {
                dispatch(logout())
            }
          //   thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

const initialState = {
    isLoading: false,
    products: [],
    showProducts: [],
    categories: []
}

const ordersSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        handleShowProducts: (state, action) => {
            const categoryId = action.payload;
            console.log(categoryId)
            if (categoryId !== "all") {
                const newShow = state.products.filter(
                    (product) => product.categoryId == categoryId
                );
                state.showProducts = newShow
            } else state.showProducts = state.products
        }
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.isLoading = true
        },
        [getProducts.fulfilled]: (state, action) => {
            const products = action.payload.products;
            state.products = products
            state.showProducts = products
            state.isLoading = false
        },
        [getProducts.rejected]: (state, action) => {
            state.products = [];
            state.isLoading = false
        },
        [getCategories.fulfilled]: (state, action) => {
            state.categories = action.payload.categories;
        },
    },
});

const { reducer, actions } = ordersSlice;
export const { handleShowProducts } = actions
export default reducer;