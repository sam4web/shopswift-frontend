import { createSlice } from "@reduxjs/toolkit/react";
import { fetchOrderQuery, sendPlaceOrderRequest } from "@/features/order/orderThunks.js";

const initialState = {
  orders: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderQuery.fulfilled, (state, action) => {
        state.orders = action.payload;
      })
      .addCase(sendPlaceOrderRequest.fulfilled, (state, action) => {
        state.orders.unshift({ ...action.payload });
      });
  },
});


export const doesOrderExists = (state) => Boolean(state.order.orders?.length);
export const selectOrders = (state) =>
  [...state.order.orders].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));


export default orderSlice.reducer;