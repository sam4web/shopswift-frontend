import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductsQuery } from "@/features/product/productThunks.js";
import Spinner from "@/components/common/Spinner.jsx";
import { toast } from "react-toastify";

const PrefetchProducts = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

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
      } finally {
        toast.dismiss();
        setLoading(false);
      }
    };
    fetchProducts();
  }, [dispatch]);

  if (loading) return <Spinner />;

  return <Outlet />;
};

export default PrefetchProducts;