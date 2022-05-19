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

export const getColors = createAsyncThunk(
    "panel/colors", 
    async (_, thunkAPI) => {
        try {
            const res = await AdminService.getColors();
            return { colors: res.data };
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
    async (formData, _, thunkAPI) => {
        try {
            await AdminService.postProduct(formData)
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
            await AdminService.updateProduct(formData, formData.get("id"))
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
        [getColors.fulfilled]: (state, action) => {
            state.colors = action.payload.colors
        },
        [postProduct.fulfilled]: (state,action) => {
            state.modifiedProducts = state.modifiedProducts + 1
        },
        [updateProduct.fulfilled]: (state, actions) => {
            state.modifiedProducts = state.modifiedProducts + 1
        },
        [deleteProduct.fulfilled]: (state, action) => {
            state.modifiedProducts = state.modifiedProducts + 1
        }
    },
});

const { reducer, actions } = ordersSlice;
export const { handleShowProducts } = actions
export default reducer;