import { sendLogoutRequest } from "@/features/auth/authThunks.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { emptyCart } from "@/features/cart/cartSlice.js";
import { emptyOrders } from "@/features/order/orderSlice.js";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return async () => {
    try {
      const toastId = toast.info("Logging out, please wait...");
      await dispatch(sendLogoutRequest()).unwrap();
      dispatch(emptyCart());
      dispatch(emptyOrders());
      toast.dismiss(toastId);
      toast.success("You have been logged out successfully.");
      navigate("/login", { replace: true });
    } catch (err) {
      toast.error(err);
    }
  };
};

export default useLogout;