import { fetchProductsByUser, sendRefreshTokenRequest } from "@/features/auth/authThunks.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const AuthPersist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTokenAndProducts = async () => {
      await dispatch(sendRefreshTokenRequest()).unwrap();
      await dispatch(fetchProductsByUser()).unwrap();
    };
    fetchTokenAndProducts();
  }, [dispatch]);

  return <Outlet />;
};

export default AuthPersist;