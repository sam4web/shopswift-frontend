import { useDispatch } from "react-redux";
import { deleteProductRequest } from "@/features/product/productThunks.js";
import { toast } from "react-toastify";

const useDeleteProduct = (productId) => {
  const dispatch = useDispatch();

  return async () => {
    try {
      toast.info("Deleting product, please wait.");
      await dispatch(deleteProductRequest(productId)).unwrap();
      toast.success("Product deleted successfully.");
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };
};

export default useDeleteProduct;
