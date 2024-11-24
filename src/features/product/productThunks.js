import { createAsyncThunk } from "@reduxjs/toolkit/react";
import api from "@/api/axiosInstance.js";

export const fetchProductsQuery = createAsyncThunk("product/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get("/api/products");
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});