import { createSlice } from "@reduxjs/toolkit/react";
import { sendLoginRequest, sendRegisterRequest } from "@/features/auth/authThunks.js";
import { setUserReducer } from "@/features/auth/authReducer.js";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(sendLoginRequest.fulfilled, setUserReducer)
      .addCase(sendRegisterRequest.fulfilled, setUserReducer);
  },
});


export const selectToken = (state) => state.auth.token;
export const selectUser = (state) => state.auth.user;
export const isUserAuthenticated = (state) => [state.auth.token, state.auth.user].every(Boolean);

export default authSlice.reducer;