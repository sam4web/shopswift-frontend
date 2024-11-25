import { createAsyncThunk } from "@reduxjs/toolkit/react";
import api from "@/api/axiosInstance.js";

export const sendLoginRequest = createAsyncThunk("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const response = await api.post("/api/auth/login", credentials);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const sendRegisterRequest = createAsyncThunk("auth/register", async (credentials, { rejectWithValue }) => {
  try {
    const response = await api.post("/api/auth/register", credentials);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const sendRefreshTokenRequest = createAsyncThunk("auth/refreshToken", async (_, { rejectWithValue }) => {
  try {
    const response = await api.post("/api/auth/refresh");
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const sendLogoutRequest = createAsyncThunk("auth/logout", async (_, { rejectWithValue, getState }) => {
  try {
    const response = await api.post("/api/auth/logout", _, {
      headers: {
        "Authorization": `Bearer ${getState().auth.token}`,
      },
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const fetchProductsByUser = createAsyncThunk("auth/products", async (_, { rejectWithValue, getState }) => {
  try {
    const response = await api.get("/api/auth/products", {
      headers: {
        "Authorization": `Bearer ${getState().auth.token}`,
      },
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});


