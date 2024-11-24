import { useSelector } from "react-redux";
import { isUserAuthenticated } from "@/features/auth/authSlice.js";
import { Navigate, Outlet } from "react-router-dom";

const AuthRequired = () => {
  const isAuthenticated = useSelector(isUserAuthenticated);
  if (!isAuthenticated)
    return <Navigate to={"/login"} replace={true} />;

  return <Outlet />;
};

export default AuthRequired;