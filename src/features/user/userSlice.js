import { createSlice } from "@reduxjs/toolkit/react";
import { fetchUserById, fetchUserProducts } from "@/features/user/userThunks.js";

const initialState = {
  user: null,
  products: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchUserProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      });
  },
});


export const selectUserById = (state) => state.user.user;
export const selectUserProducts = (state) =>
  [...state.user.products].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

export default userSlice.reducer;