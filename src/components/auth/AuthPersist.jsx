import { sendRefreshTokenRequest } from "@/features/auth/authThunks.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const AuthPersist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await dispatch(sendRefreshTokenRequest()).unwrap();
    };
    fetchToken();
  }, [dispatch]);

  return <Outlet />;
};

export default AuthPersist;