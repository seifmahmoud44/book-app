import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetch API
export const getbooks = createAsyncThunk(
  "books/getbooks",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios.get("http://localhost:9000/products");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// insert book into database

export const insertBook = createAsyncThunk(
  "books/insertBook",
  async (dataBook, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios.post("http://localhost:9000/products", dataBook);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// DELETE book from database

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      // dispatch(getbooks());
      await axios.delete(`http://localhost:9000/products/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const Books = createSlice({
  name: "books",
  initialState: { books: null, isLoading: false, erorr: false },
  extraReducers: {
    //get books
    [getbooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getbooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Books = action.payload.data;
    },
    [getbooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.erorr = true;
    },

    // insert book

    [insertBook.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Books.push(action.payload.data);
    },
    [insertBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.erorr = true;
    },

    //delete

    [deleteBook.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Books = state.Books.filter((book) => book.id !== action.payload);
    },
    [deleteBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.erorr = true;
    },
  },
});

export default Books.reducer;
