import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { fetchProductsQuery } from "@/features/product/productThunks.js";
import { toast } from "react-toastify";

const PrefetchProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      let toastId;
      try {
        toastId = toast.info("Fetching products, Please wait..", { autoClose: false });
        await dispatch(fetchProductsQuery()).unwrap();
        toast.dismiss(toastId);
      } catch (err) {
        toast.dismiss();
        toast.error(err);
      }
    };
    fetchProducts();
  }, [dispatch]);

  return <Outlet />;
};

export default PrefetchProducts;