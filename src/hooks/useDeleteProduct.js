import { useDispatch } from "react-redux";
import { deleteProductRequest } from "@/features/product/productThunks.js";
import { toast } from "react-toastify";

const useDeleteProduct = (productId) => {
  const dispatch = useDispatch();

  return async () => {
    try {
      const toastId = toast.info("Deleting product, please wait.");
      await dispatch(deleteProductRequest(productId)).unwrap();
      toast.dismiss(toastId);
      toast.success("Product deleted successfully.");
    } catch (err) {
      toast.error(err);
    }
  };
};

export default useDeleteProduct;
