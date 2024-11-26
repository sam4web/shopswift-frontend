import useTitle from "@/hooks/useTitle.js";
import SearchForm from "@/components/form/SearchForm.jsx";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsByUser, selectUser } from "@/features/auth/authSlice.js";
import formatDate from "@/utils/formatDate.js";
import ProductListItem from "@/components/product/ProductListItem.jsx";
import useLogout from "@/hooks/useLogout.js";
import { useEffect } from "react";
import { fetchProductsByUser } from "@/features/auth/authThunks.js";

const Profile = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const products = useSelector(selectProductsByUser);
  const logout = useLogout();

  useTitle(`Hello ${user.username} | ShopSwift`);

  useEffect(() => {
    const fetchProducts = async () => {
      await dispatch(fetchProductsByUser()).unwrap();
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="section-container">
      <div
        className="md:grid grid-cols-3 items-start space-y-6 md:space-y-0 space-x-0 md:space-x-6"
      >
        <aside className="col-span-1 space-y-5">
          <div
            className="px-3 py-5 lg:px-5 lg:py-7 bg-light dark:bg-dark-primary transition rounded-xl shadow-md"
          >
            <div className="space-y-1 mb-4">
              <h3
                className="text-2xl dark:text-light text-dark-primary font-medium transition"
              >
                {user.username}
              </h3>
              <p className="text-dark-secondary dark:text-white transition">
                {user.email}
              </p>
              <p className="text-gray-dark dark:text-white transition">
                Member Since:{" "}
                <span className="text-dark-secondary dark:text-white">
                  {formatDate(user.createdAt)}
                </span>
              </p>
            </div>

            <button
              className="btn bg-transparent border-rose-500 text-dark-primary py-1.5 px-5"
              onClick={logout}
            >
              Logout
            </button>
          </div>

          <SearchForm />

          <div>
            <NavLink to="/products/create">
              <button className="btn-secondary w-full">Create Product</button>
            </NavLink>
          </div>
        </aside>

        <section className="col-span-2">
          <div className="flex justify-between flex-wrap items-center gap-x-4">
            <h3
              className="text-2xl lg:text-3xl dark:text-light text-gray font-medium transition"
            >
              My Products
            </h3>
            <p className="text-lg text-gray dark:text-light">
              Total products: {products.length}
            </p>
          </div>
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

          <div className="space-y-6">
            {products &&
              products.map(product => (
                <ProductListItem
                  productId={product._id}
                  key={product._id}
                  self
                />
              ))
            }
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;