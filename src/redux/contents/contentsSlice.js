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
    addComment: (state, action) => {
      const review = state.data.find((item) => item.id === action.payload.id);
      review.comments.push(action.payload.data);
    },
    likePlus: (state, action) => {
      const review = state.data.find((item) => item.id === action.payload.id);
      review.like++;
    },
  },
});

export const { addReview, addComment, likePlus } = contentsSlice.actions;

export default contentsSlice.reducer;
