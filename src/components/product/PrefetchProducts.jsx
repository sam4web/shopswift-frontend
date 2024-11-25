import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductsQuery } from "@/features/product/productThunks.js";
import Spinner from "@/components/common/Spinner.jsx";

const PrefetchProducts = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      await dispatch(fetchProductsQuery()).unwrap();
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <Spinner />;

  return <Outlet />;
};

export default PrefetchProducts;