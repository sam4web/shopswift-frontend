import { createSlice } from "@reduxjs/toolkit/react";
import { fetchUserById, fetchUserProducts } from "@/features/user/userThunks.js";

const initialState = {
  user: null,
  products: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUserState: (state, action) => {
      state.user = null;
      state.products = [];
    },
  },
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
export const selectUserProducts = (state) => state.user.products;

export const { clearUserState } = userSlice.actions;

export default userSlice.reducer;