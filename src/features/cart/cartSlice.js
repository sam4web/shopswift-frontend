import { createSlice } from "@reduxjs/toolkit/react";
import {
  fetchItemsFromCart,
  fetchPricingDetail,
  sendAddToCartRequest,
  sendRemoveFromCartRequest,
} from "@/features/cart/cartThunks.js";

const initialState = {
  cartItems: [],
  pricingDetail: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsFromCart.fulfilled, (state, action) => {
        state.cartItems = action.payload;
      })
      .addCase(fetchPricingDetail.fulfilled, (state, action) => {
        state.pricingDetail = action.payload;
      })
      .addCase(sendAddToCartRequest.fulfilled, (state, action) => {
        state.cartItems.unshift({ ...action.payload });
        console.log(action.payload);
      })
      .addCase(sendRemoveFromCartRequest.fulfilled, (state, action) => {
        state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
      });
  },
});


export const doesItemExists = (state) => Boolean(state.cart.cartItems?.length);
export const selectCartItems = (state) =>
  [...state.cart.cartItems].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
export const selectPricingDetail = (state) => state.cart.pricingDetail;

export default cartSlice.reducer;