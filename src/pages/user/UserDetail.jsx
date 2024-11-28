import formatDate from "@/utils/formatDate.js";
import SearchForm from "@/components/form/SearchForm.jsx";
import { useParams } from "react-router-dom";
import ProductListItem from "@/components/product/ProductListItem.jsx";
import useTitle from "@/hooks/useTitle.js";
import { useEffect, useState } from "react";
import Spinner from "@/components/common/Spinner.jsx";
import { useDispatch, useSelector } from "react-redux";
import { clearUserState, selectUserById, selectUserProducts } from "@/features/user/userSlice.js";
import { fetchUserById, fetchUserProducts } from "@/features/user/userThunks.js";
import NotFound from "@/pages/site/NotFound.jsx";
import { toast } from "react-toastify";
import useFilterProducts from "@/hooks/useFilterProducts.js";

const UserDetail = () => {

  const { userId } = useParams();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const user = useSelector(selectUserById);
  const products = useSelector(selectUserProducts);
  const filteredProducts = useFilterProducts(products);

  useTitle(`About ${user?.username || "Profile"} | ShopSwift`);

  useEffect(() => {
    const fetchUserAndProducts = async () => {
      try {
        const toastId = toast.info("Fetching user details, please wait...");
        await dispatch(fetchUserById(userId)).unwrap();
        await dispatch(fetchUserProducts(userId)).unwrap();
        toast.dismiss(toastId);
      } catch (err) {
        toast.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserAndProducts();

    return () => dispatch(clearUserState());
  }, [dispatch, userId]);

  if (loading)
    return <Spinner />;

  if (!user)
    return <NotFound message="Sorry, the user you're looking for doesn't exist." />;

  return (
    <div className="section-container">
      <div
        className="md:grid grid-cols-3 items-start space-y-6 md:space-y-0 space-x-0 md:space-x-6"
      >
        <aside className="col-span-1 space-y-5">
          <div
            className="px-3 py-5 lg:px-5 lg:py-7 bg-light dark:bg-dark-primary transition rounded-xl shadow-md"
          >
            <div className="space-y-1">
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
          </div>

          <SearchForm />
        </aside>

        <section className="col-span-2">
          <div className="flex justify-between flex-wrap items-center gap-x-4">
            <h3
              className="text-2xl lg:text-3xl dark:text-light text-gray font-medium transition"
            >
              Products
            </h3>
            <p className="text-lg text-gray dark:text-light">
              Total products: {filteredProducts.length}
            </p>
          </div>
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

          <div className="space-y-6">
            {products &&
              filteredProducts.map(product => (
                <ProductListItem
                  productId={product._id}
                  key={product._id}
                />
              ))
            }
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserDetail;