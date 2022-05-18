import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  check_id: null
};

const checkIdSlice = createSlice({
  name: "editId",
  initialState,
  reducers: {
    setCheckId: (state, action) => {
      state.check_id = action.payload
    },
    clearCheckId: (state, action) => {
      state.check_id = null
    }
  },
});

const { reducer, actions } = checkIdSlice;
export const { setCheckId, clearCheckId } = actions;
export default reducer;