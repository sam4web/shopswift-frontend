import { configureStore } from "@reduxjs/toolkit/react";
import productReducer from "@/features/product/productSlice.js";

const store = configureStore({
  reducer: productReducer,
});

export default store;