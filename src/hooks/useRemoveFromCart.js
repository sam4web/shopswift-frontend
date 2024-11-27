import { fetchPricingDetail, sendRemoveFromCartRequest } from "@/features/cart/cartThunks.js";
import { useDispatch } from "react-redux";

const useRemoveFromCart = (productId) => {
  const dispatch = useDispatch();

  return async () => {
    try {
      await dispatch(sendRemoveFromCartRequest(productId));
      await dispatch(fetchPricingDetail()).unwrap();
    } catch (err) {
      console.log(err);
      // TODO: send error message in toast
    }
  };
};

export default useRemoveFromCart;