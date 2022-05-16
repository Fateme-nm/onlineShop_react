import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null
};

const removeIdSlice = createSlice({
  name: "removeId",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { message: action.payload };
    },
    clearMessage: () => {
      return { message: "" };
    },
  },
});

const { reducer, actions } = messageSlice;
export const { setMessage, clearMessage } = actions
export default reducer;