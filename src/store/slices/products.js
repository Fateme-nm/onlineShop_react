import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import { logout } from "./auth";
import httpService from "services/HttpService";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "panel/products",
  async (_, thunkAPI) => {
    try {
      const res = await httpService.get('products?_sort=id&_order=desc');
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
            const res = await httpService.get("category")
            return { categories: res.data };
        } catch (error) {
            error.response.status === 401 && thunkAPI.dispatch(logout())
          //   thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const getColors = createAsyncThunk(
    "panel/colors", 
    async (_, thunkAPI) => {
        try {
            const res = await httpService.get("color")
            return { colors: res.data };
        } catch (error) {
            error.response.status === 401 && thunkAPI.dispatch(logout())
          //   thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const getSizes = createAsyncThunk(
    "panel/sizes", 
    async (_, thunkAPI) => {
        try {
            const res = await httpService.get('size');
            return { sizes: res.data };
        } catch (error) {
            return thunkAPI.rejectWithValue();
        }
    }
);

export const deleteProduct = createAsyncThunk(
    "panel/deletePro",
    async (id, _, thunkAPI) => {
        try {
            await httpService.delete(`products/${id}`)
        } catch (error) {
            error.response.status === 401 && thunkAPI.dispatch(logout())
            return thunkAPI.rejectWithValue();
        }
    }
)

export const postProduct = createAsyncThunk(
    "panel/postPro",
    async (formData, _, thunkAPI) => {
        try {
            await httpService.post("products", formData)
        } catch (error) {
            error.response.status === 401 && thunkAPI.dispatch(logout())
            return thunkAPI.rejectWithValue();
        }
    }
)

export const updateProduct = createAsyncThunk(
    "panel/updatePro",
    async (formData, _, thunkAPI) => {
        try {
            await axios.patch(`products/${formData.get("id")}`, formData, 
            {headers: {token: JSON.parse(localStorage.getItem("admin")).token, "Content-Type": "multipart/form-data"}})
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
    colors: [],
    sizes: [],
    priceEntityChanges: [],
    modifiedProducts: 0
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
        },
        pushToPriceEntityChanges: (state, action) => {
            state.priceEntityChanges.push(action.payload)
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
        [getProducts.rejected]: (state) => {
            state.products = [];
            state.isLoading = false
        },
        [getCategories.fulfilled]: (state, action) => {
            state.categories = action.payload.categories;
        }, 
        [getColors.fulfilled]: (state, action) => {
            state.colors = action.payload.colors
        },
        [getSizes.fulfilled]: (state, action) => {
            state.sizes = action.payload.sizes
        },
        [postProduct.fulfilled]: (state) => {
            state.modifiedProducts = state.modifiedProducts + 1
        },
        [updateProduct.fulfilled]: (state) => {
            state.modifiedProducts = state.modifiedProducts + 1
        },
        [deleteProduct.fulfilled]: (state) => {
            state.modifiedProducts = state.modifiedProducts + 1
        }
    },
});

const { reducer, actions } = ordersSlice;
export const { handleShowProducts, pushToPriceEntityChanges } = actions
export default reducer;