import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import httpService from 'services/HttpService';

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
        const data = await httpService.post('auth/login', {username, password})
            .then((response) => {
                if (response.status === 200 && response.data.token) {
                    localStorage.setItem("admin", JSON.stringify(response.data));
                }
                return response.data;
            });
        return { admin: data };
    } catch (error) {
    //   const message = error.response
    //   thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
    }
  }
);

export const checkExpireTime = createAsyncThunk(
    "auth/expireTime", 
    async (_, thunkAPI) => {
        try {
            const response = await httpService.get('whoami').then(res => res.data)
        } catch (err) {
            return thunkAPI.rejectWithValue();
        }
    }
);

const admin = localStorage.getItem("admin");

const initialState = {
    admin: admin ? JSON.parse(admin) : null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.admin = null
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.admin = action.payload.admin;
        },
        [login.rejected]: (state, action) => {
            state.admin = null;
        },
        [checkExpireTime.rejected]: (state) => {
            state.admin = null
        }
    },
});

const { reducer, actions } = authSlice;
export const {logout} = actions
export default reducer;