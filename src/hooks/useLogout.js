import { sendLogoutRequest } from "@/features/auth/authThunks.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return async () => {
    try {
      toast.info("Logging out, please wait...");
      await dispatch(sendLogoutRequest()).unwrap();
      toast.success("You have been logged out successfully.");
      navigate("/login", { replace: true });
    } catch (err) {
      toast.error(err);
    }
  };
};

export default useLogout;