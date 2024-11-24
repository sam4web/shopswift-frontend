import { configureStore } from "@reduxjs/toolkit/react";
import productReducer from "@/features/product/productSlice.js";
import authReducer from "@/features/auth/authSlice.js";

const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
  },
});

export default store;