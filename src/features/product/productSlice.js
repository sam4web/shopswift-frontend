import { createSlice } from "@reduxjs/toolkit/react";
import {
  createProductEntry,
  deleteProductRequest,
  fetchProductsQuery,
  updateProductRecord,
} from "@/features/product/productThunks.js";
import { deleteProductReducer } from "@/features/product/productReducers.js";

const initialState = {
  products: [],
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
      .addCase(deleteProductRequest.fulfilled, deleteProductReducer)
      .addCase(updateProductRecord.fulfilled, (state, action) => {
        const updatedProduct = { ...action.payload };
        state.products = state.products.filter(product => product._id !== updatedProduct._id);
        state.products.unshift(updatedProduct);
      });
  },
});


export const selectProducts = (state) => state.product.products;
export const selectProductById = (state, productId) =>
  state.product.products.find(product => product._id === productId);

export default productSlice.reducer;
