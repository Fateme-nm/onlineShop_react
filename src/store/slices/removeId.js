import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null, 
  removed: false,
};

const removeIdSlice = createSlice({
  name: "removeId",
  initialState,
  reducers: {
    setId: (state, action) => {
      return { id: action.payload , removed: false};
    },
    clearId: () => {
      return { id: null, removed: true };
    },
  },
});

const { reducer, actions } = removeIdSlice;
export const { setId, clearId } = actions;
export default reducer;