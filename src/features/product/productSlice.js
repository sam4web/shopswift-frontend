import { createSlice } from "@reduxjs/toolkit/react";
import { fetchProductsQuery } from "@/features/product/productThunks.js";

const initialState = {
  products: [],
  status: "idle", // 'idle' | 'loading' | 'success' | 'failed'
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsQuery.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  },
});

export const selectProducts = (state) => state.product.products;
export const selectProductById = (state, productId) => state.product.products.find(product => product._id === productId);

export default productSlice.reducer;
