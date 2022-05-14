import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AdminService from "services/admin.service";

export const getOrders = createAsyncThunk(
  "panel/orders",
  async (thunkAPI) => {
    try {
      const res = await AdminService.getOrders();
      return { orders: res.data };
    } catch (error) {
    //   const message = error.response
    //   thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const getStatusOrders = createAsyncThunk(
    "panel/statusOrders", 
    async (thunkAPI) => {
        try {
            const res = await AdminService.getStatusOrders();
            return { statusOrders: res.data };
        } catch (error) {
          //   const message = error.response
          //   thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

const initialState = {
    isLoading: false,
    orders: [],
    showOrders: [],
    statusOrders: [],
    activeStatus: null,
    activeSort: "new"
}

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        setActiveStatus: (state, action) => {
            const status = action.payload
            state.activeStatus = status
        },
        setActiveSort: (state, action) => {
            const sort = action.payload
            state.activeSort = sort
        },
        setShowOrders: (state, action) => {
            state.showOrders = action.payload
        },
        handleShowOrders: (state, action) => {
            const filterList1 =
                state.activeSort === "new" ? 
                    [...state.orders].reverse() : state.orders;
            if (state.activeStatus) {
                const filterList2 = filterList1.filter(
                    (order) => order.orderStatus == state.activeStatus
                );
                state.showOrders = filterList2
            } else {
                state.showOrders = filterList1
            }
        }
    },
    extraReducers: {
        [getOrders.pending]: (state) => {
            state.isLoading = true
        },
        [getOrders.fulfilled]: (state, action) => {
            const orders = action.payload.orders
            state.orders = orders;
            state.showOrders = [...orders].reverse()
            state.isLoading = false
        },
        [getOrders.rejected]: (state, action) => {
            state.orders = [];
            state.isLoading = false
        },
        [getStatusOrders.fulfilled]: (state, action) => {
            state.statusOrders = state.payload.statusOrders;
        },
    },
});

const { reducer, actions } = ordersSlice;
export const { 
    setActiveStatus, 
    setActiveSort,
    setShowOrders,
    handleShowOrders } 
= actions
export default reducer;