import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  add: false,
  edit: null,
};

const addOrEditSlice = createSlice({
  name: "addOrEdit",
  initialState,
  reducers: {
    setAdd: (state, action) => {
      state.add = action.payload
    },
    setEdit: (state, action) => {
      const id = action.payload
      state.edit = id
    }
  },
});

const { reducer, actions } = addOrEditSlice;
export const { setAdd, setEdit } = actions;
export default reducer;