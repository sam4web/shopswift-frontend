export const deleteProductReducer = (state, action) => {
  state.products = state.products.filter(product => product._id !== action.payload);
};