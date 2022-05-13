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