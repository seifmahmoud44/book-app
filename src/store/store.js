import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import preveiwSlice from "./preveiwSlice";

export default configureStore({
  reducer: { bookSlice, preveiwSlice },
});
