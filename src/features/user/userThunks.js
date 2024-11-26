import { createAsyncThunk } from "@reduxjs/toolkit/react";
import api from "@/api/axiosInstance.js";

export const fetchUserById = createAsyncThunk("user/detail", async (userId, { rejectWithValue }) => {
  try {
    const response = await api.get(`/api/user/${userId}`);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const fetchUserProducts = createAsyncThunk("user/products", async (userId, { rejectWithValue }) => {
  try {
    const response = await api.get(`/api/user/${userId}/products`);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});