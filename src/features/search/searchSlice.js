import { createSlice } from "@reduxjs/toolkit/react";

const initialState = {
  name: "",
  category: null,
  sort: null,
  max: null,
  min: null,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchFilters: (state, action) => ({ ...action.payload }),
    clearSearchFilters: (state, action) => ({ ...initialState }),
  },
});

export const selectSearchFilters = (state) => state.search;

export const { setSearchFilters, clearSearchFilters } = searchSlice.actions;
export default searchSlice.reducer;