import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../data";

const initialState = {
  data: initialData,
};

export const contentsSlice = createSlice({
  name: "contents",
  initialState,
  reducers: {
    addReview: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addReview } = contentsSlice.actions;

export default contentsSlice.reducer;
