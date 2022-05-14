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
    statusOrders: []
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [login.pending]: (state) => {
            state.isLoading = true
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.admin = action.payload.admin;
            state.isLoading = false
        },
        [login.rejected]: (state, action) => {
            state.isLoggedIn = false;
            state.admin = null;
            state.isLoading = false
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedIn = false;
            state.admin = null;
        },
    },
});

const { reducer } = authSlice;
export default reducer;