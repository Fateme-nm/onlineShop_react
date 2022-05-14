import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AdminService from "services/admin.service";

export const getProducts = createAsyncThunk(
  "panel/products",
  async (thunkAPI) => {
    try {
      const res = await AdminService.getProducts();
      return { products: res.data };
    } catch (error) {
    //   const message = error.response
    //   thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getCategories = createAsyncThunk(
    "panel/categories", 
    async (thunkAPI) => {
        try {
            const res = await AdminService.getCategoreis();
            return { categories: res.data };
        } catch (error) {
          //   const message = error.response
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
        // setActiveStatus: (state, action) => {
        //     const status = action.payload
        //     state.activeStatus = status
        // },
        // setActiveSort: (state, action) => {
        //     const sort = action.payload
        //     state.activeSort = sort
        // },
        // handleShowOrders: (state, action) => {
        //     const filterList1 =
        //         state.activeSort === "new" ? 
        //             [...state.orders].reverse() : state.orders;
        //     if (state.activeStatus) {
        //         const filterList2 = filterList1.filter(
        //             (order) => order.orderStatus == state.activeStatus
        //         );
        //         state.showOrders = filterList2
        //     } else {
        //         state.showOrders = filterList1
        //     }
        // }
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
            state.categories = state.payload.categories;
        },
    },
});

const { reducer, actions } = ordersSlice;
// export const { 
//     setActiveStatus, 
//     setActiveSort,
//     handleShowOrders } 
// = actions
export default reducer;