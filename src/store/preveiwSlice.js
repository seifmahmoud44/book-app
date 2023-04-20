import { createSlice } from "@reduxjs/toolkit";

const preveiwSlice = createSlice({
  name: "preveiw",
  initialState: { selectedBook: null },
  reducers: {
    bookPreveiw: (state, action) => {
      state.selectedBook = action.payload;
    },
  },
});

export const { bookPreveiw } = preveiwSlice.actions;

export default preveiwSlice.reducer;
