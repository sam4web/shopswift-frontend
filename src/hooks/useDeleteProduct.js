import { useDispatch } from "react-redux";
import { deleteProductRequest } from "@/features/product/productThunks.js";

const useDeleteProduct = (productId) => {
  const dispatch = useDispatch();

  return async () => {
    try {
      await dispatch(deleteProductRequest(productId)).unwrap();
    } catch (err) {
      console.log(err);
      // TODO: send error message in toast
    }
  };
};

export default useDeleteProduct;
