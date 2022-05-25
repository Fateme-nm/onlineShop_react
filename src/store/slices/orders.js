import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AdminService from "services/admin.service";
import { logout } from "./auth";
import httpService from "services/HttpService";

export const getOrders = createAsyncThunk(
  "panel/orders",
  async (_, thunkAPI) => {
    try {
      const res = await httpService.get('orders?_sort=orderDate&_order=desc')
      return { orders: res.data };
    } catch (error) {
        error.response.status === 401 && thunkAPI.dispatch(logout())
    //   thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
    }
  }
);

export const getShowOrders = createAsyncThunk(
    "panel/showOrders",
    async(_, { getState }, thunkAPI) => {
        const {orders, activeStatus, activeSort} = getState().orders
        const filterList1 = activeSort === "new" ? orders : [...orders].reverse()
        if (activeStatus === "all") return {showOrders: filterList1}
        try {
            const sort = activeStatus == 1 ? 'deliveredAt' : 'orderDate'
            const res = await httpService
                .get(`orders?orderStatus=${activeStatus}&_sort=${sort}&order=desc`)
            const filterList2 = activeSort === "new" ? [...res.data].reverse() : res.data
            return { showOrders: filterList2 };
        }catch(error) {
            return thunkAPI.rejectWithValue();
        }
    }
)

export const getStatusOrders = createAsyncThunk(
    "panel/statusOrders", 
    async (_, thunkAPI) => {
        try {
            const res = await AdminService.getStatusOrders();
            return { statusOrders: res.data };
        } catch (error) {
            error.response.status === 401 && thunkAPI.dispatch(logout())
          //   thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);

export const updateOrder = createAsyncThunk(
    "panel/updateOrder",
    async (checkOrder, _, thunkAPI) => {
        const {deliveredAt, orderStatus, id} = checkOrder
        console.log(deliveredAt, orderStatus, id)
        try {
            await AdminService.updateOrder({deliveredAt, orderStatus}, id)
        } catch (error) {
            error.response.status === 401 && thunkAPI.dispatch(logout())
            return thunkAPI.rejectWithValue();
        }
    }
)

const initialState = {
    isLoading: false,
    orders: [],
    showOrders: [],
    statusOrders: [],
    activeStatus: "all",
    activeSort: "new",
    modifiedStatusOrder: 0
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
    },
    extraReducers: {
        [getOrders.pending]: (state) => {
            state.isLoading = true
        },
        [getOrders.fulfilled]: (state, action) => {
            const orders = action.payload.orders
            state.orders = orders;
            state.showOrders = orders;
            state.isLoading = false
        },
        [getOrders.rejected]: (state, action) => {
            state.orders = [];
            state.isLoading = false
        },
        [getShowOrders.fulfilled]: (state, action) => {
            const showOrders = action.payload.showOrders;
            state.showOrders = showOrders;
        },
        [getShowOrders.rejected]: (state, action) => {
            console.log(action.payload)
        },
        [getStatusOrders.fulfilled]: (state, action) => {
            state.statusOrders = state.payload.statusOrders;
        },
        [updateOrder.fulfilled]: (state, action) => {
            state.modifiedStatusOrder = state.modifiedStatusOrder + 1
        }
    },
});

const { reducer, actions } = ordersSlice;
export const { 
    setActiveStatus, 
    setActiveSort,
} 
= actions
export default reducer;