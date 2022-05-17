import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null
};

const removeIdSlice = createSlice({
  name: "removeId",
  initialState,
  reducers: {
    setId: (state, action) => {
      return { id: action.payload };
    },
    clearId: () => {
      return { id: null };
    },
  },
});

const { reducer, actions } = removeIdSlice;
export const { setId, clearId } = actions;
export default reducer;