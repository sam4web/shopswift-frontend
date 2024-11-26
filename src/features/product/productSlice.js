import { createSlice } from "@reduxjs/toolkit/react";
import { createProductEntry, deleteProductRequest, fetchProductsQuery } from "@/features/product/productThunks.js";
import { deleteProductReducer } from "@/features/product/productReducers.js";

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
      })
      .addCase(createProductEntry.fulfilled, (state, action) => {
        state.products.push({ ...action.payload });
      })
      .addCase(deleteProductRequest.fulfilled, deleteProductReducer);
  },
});

export const selectProducts = (state) =>
  [...state.product.products].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
export const selectProductById = (state, productId) => state.product.products.find(product => product._id === productId);

export default productSlice.reducer;
