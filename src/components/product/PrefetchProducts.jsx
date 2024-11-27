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
        toastId = toast.info("Fetching products, Please wait..");
        await dispatch(fetchProductsQuery()).unwrap();
      } catch (err) {
        toast.dismiss();
        toast.error(err);
      } finally {
        setLoading(false);
        toast.dismiss(toastId);
      }
    };
    fetchProducts();
  }, [dispatch]);

  if (loading) return <Spinner />;

  return <Outlet />;
};

export default PrefetchProducts;