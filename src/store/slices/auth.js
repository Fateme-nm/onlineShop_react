import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import AuthService from "services/auth.service";

const admin = localStorage.getItem("admin");

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);
      return { admin: data };
    } catch (error) {
      const message = error.response
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk(
    "auth/logout", 
    async () => {
        await AuthService.logout();
    }
);

const initialState = admin ? 
    { isLoggedIn: true, isLoading: false, admin } : 
    { isLoggedIn: false, isLoading: true, admin: null };


const { reducer } = authSlice;
export default reducer;