import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  edit_id: null
};

const addOrEditSlice = createSlice({
  name: "editId",
  initialState,
  reducers: {
    setEditId: (state, action) => {
      state.edit_id = action.payload
    },
    clearEditId: (state, action) => {
      state.edit_id = null
    }
  },
});

const { reducer, actions } = addOrEditSlice;
export const { setEditId, clearEditId } = actions;
export default reducer;