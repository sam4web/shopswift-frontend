import { useSelector } from "react-redux";
import { isUserAuthenticated } from "@/features/auth/authSlice.js";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const AuthRequired = () => {
  const isAuthenticated = useSelector(isUserAuthenticated);
  if (!isAuthenticated) {
    toast.error("Please log in before accessing this resource.");
    return <Navigate to={"/login"} replace={true} />;
  }

  return <Outlet />;
};

export default AuthRequired;