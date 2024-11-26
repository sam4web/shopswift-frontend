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

export const createProductEntry = createAsyncThunk("product/createProduct",
  async (product, { rejectWithValue, getState }) => {
    try {
      const response = await api.post("/api/products", product, {
        headers: {
          "Authorization": `Bearer ${getState().auth.token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  });

export const deleteProductRequest = createAsyncThunk("product/deleteProduct", async (
  productId, { rejectWithValue, getState }) => {
  try {
    await api.delete(`/api/products/${productId}`, {
      headers: {
        "Authorization": `Bearer ${getState().auth.token}`,
      },
    });
    return productId;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const updateProductRecord = createAsyncThunk("product/updateProduct",
  async (product, { rejectWithValue, getState }) => {
    try {
      const response = await api.patch(`/api/products/${product.id}`, product.data, {
        headers: {
          "Authorization": `Bearer ${getState().auth.token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  });
