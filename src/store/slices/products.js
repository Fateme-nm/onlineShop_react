import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AdminService from "services/admin.service";
import { logout } from "./auth";

export const getProducts = createAsyncThunk(
  "panel/products",
  async (_, thunkAPI) => {
    try {
      const res = await AdminService.getProducts();
      return { products: res.data };
    } catch (error) {
        error.response.status === 401 && thunkAPI.dispatch(logout())
    //   thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getCategories = createAsyncThunk(
    "panel/categories", 
    async (_, thunkAPI) => {
        try {
            const res = await AdminService.getCategoreis();
            return { categories: res.data };
        } catch (error) {
            error.response.status === 401 && thunkAPI.dispatch(logout())
          //   thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const deleteProduct = createAsyncThunk(
    "panel/deletePro",
    async (id, _, thunkAPI) => {
        try {
            await AdminService.deleteProduct(id)
        } catch (error) {
            error.response.status === 401 && thunkAPI.dispatch(logout())
            return thunkAPI.rejectWithValue();
        }
    }
)

export const postProduct = createAsyncThunk(
    "panel/postPro",
    async (obj, _, thunkAPI) => {
        try {
            await AdminService.postProduct(obj)
        } catch (error) {
            error.response.status === 401 && thunkAPI.dispatch(logout())
            return thunkAPI.rejectWithValue();
        }
    }
)

const initialState = {
    isLoading: false,
    products: [],
    showProducts: [],
    categories: [],
    addedProducts: 0,
    deletedProducts: 0
}

const ordersSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        handleShowProducts: (state, action) => {
            const categoryId = action.payload;
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
        [postProduct.fulfilled]: (state,action) => {
            state.addedProducts = state.addedProducts + 1
        },
        [deleteProduct.fulfilled]: (state, action) => {
            state.deletedProducts = state.deletedProducts + 1
        }
    },
});

const { reducer, actions } = ordersSlice;
export const { handleShowProducts } = actions
export default reducer;