import { createSlice } from "@reduxjs/toolkit/react";
import {
  fetchProductsByUser,
  sendLoginRequest,
  sendLogoutRequest,
  sendRefreshTokenRequest,
  sendRegisterRequest,
} from "@/features/auth/authThunks.js";
import { clearUserReducer, setUserReducer } from "@/features/auth/authReducer.js";
import { deleteProductRequest } from "@/features/product/productThunks.js";
import { deleteProductReducer } from "@/features/product/productReducers.js";

const initialState = {
  user: null,
  token: null,
  products: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(sendLoginRequest.fulfilled, setUserReducer)
      .addCase(sendRegisterRequest.fulfilled, setUserReducer)
      .addCase(sendRefreshTokenRequest.fulfilled, setUserReducer)
      .addCase(sendLogoutRequest.fulfilled, clearUserReducer)
      .addCase(fetchProductsByUser.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(deleteProductRequest.fulfilled, deleteProductReducer);
  },
});


export const selectUser = (state) => state.auth.user;
export const selectProductsByUser = (state) => state.auth.products;
export const isUserAuthenticated = (state) => [state.auth.token, state.auth.user].every(Boolean);

export default authSlice.reducer;