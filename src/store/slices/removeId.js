import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  remove_id: null
};

const removeIdSlice = createSlice({
  name: "removeId",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.remove_id = action.payload
    },
    clearId: () => {
      state.remove_id = null
    },
  },
});

const { reducer, actions } = removeIdSlice;
export const { setId, clearId } = actions;
export default reducer;