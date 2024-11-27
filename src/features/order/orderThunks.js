import { createAsyncThunk } from "@reduxjs/toolkit/react";
import api from "@/api/axiosInstance.js";

export const fetchOrderQuery = createAsyncThunk("order/fetchOrder", async (_, { rejectWithValue, getState }) => {
  try {
    const response = await api.get("/api/order", {
      headers: {
        "Authorization": `Bearer ${getState().auth.token}`,
      },
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const sendPlaceOrderRequest = createAsyncThunk("order/placeOrder", async (
  orderData, { rejectWithValue, getState }) => {
  try {
    const response = await api.post("/api/order", { ...orderData }, {
      headers: {
        "Authorization": `Bearer ${getState().auth.token}`,
      },
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});