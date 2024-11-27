import { createAsyncThunk } from "@reduxjs/toolkit/react";
import api from "@/api/axiosInstance.js";

export const fetchItemsFromCart = createAsyncThunk("cart/fetchItems", async (_, { rejectWithValue, getState }) => {
  try {
    const response = await api.get("/api/cart", {
      headers: {
        "Authorization": `Bearer ${getState().auth.token}`,
      },
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const sendAddToCartRequest = createAsyncThunk("cart/addItemToCart", async (
  productId, { rejectWithValue, getState }) => {
  try {
    const response = await api.post("/api/cart", { product: productId }, {
      headers: {
        "Authorization": `Bearer ${getState().auth.token}`,
      },
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const sendRemoveFromCartRequest = createAsyncThunk("cart/removeItemFromCart", async (
  productId, { rejectWithValue, getState }) => {
  try {
    await api.delete(`/api/cart/${productId}`, {
      headers: {
        "Authorization": `Bearer ${getState().auth.token}`,
      },
    });
    return productId;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const fetchPricingDetail = createAsyncThunk("cart/fetchPricingDetail", async (
  _, { rejectWithValue, getState }) => {
  try {
    const response = await api.get("/api/cart/pricing", {
      headers: {
        "Authorization": `Bearer ${getState().auth.token}`,
      },
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});