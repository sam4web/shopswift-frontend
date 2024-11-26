import { sendLogoutRequest } from "@/features/auth/authThunks.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return async () => {
    try {
      await dispatch(sendLogoutRequest()).unwrap();
      navigate("/login", { replace: true });
    } catch (err) {
      // TODO: send error message in toast
    }
  };
};

export default useLogout;