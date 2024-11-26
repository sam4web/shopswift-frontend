import { jwtDecode } from "jwt-decode";

export const setUserReducer = (state, action) => {
  const token = action.payload;
  state.token = token;
  state.user = jwtDecode(token)["UserInfo"];
};

export const clearUserReducer = (state, action) => {
  state.token = null;
  state.user = null;
  state.products = [];
};