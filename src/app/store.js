import { configureStore } from "@reduxjs/toolkit/react";
import productReducer from "@/features/product/productSlice.js";
import authReducer from "@/features/auth/authSlice.js";
import userReducer from "@/features/user/userSlice.js";
import cartReducer from "@/features/cart/cartSlice.js";

const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;