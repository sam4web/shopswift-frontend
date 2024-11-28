import { fetchPricingDetail, sendRemoveFromCartRequest } from "@/features/cart/cartThunks.js";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const useRemoveFromCart = (productId) => {
  const dispatch = useDispatch();

  return async () => {
    try {
      const toastId = toast.info("Removing item from cart, please wait...");
      await dispatch(sendRemoveFromCartRequest(productId));
      await dispatch(fetchPricingDetail()).unwrap();
      toast.dismiss(toastId);
      toast.success("Item removed from your cart successfully.");
    } catch (err) {
      toast.error(err);
    }
  };
};

export default useRemoveFromCart;