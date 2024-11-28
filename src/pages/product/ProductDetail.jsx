import { useDispatch, useSelector } from "react-redux";
import { selectProductById } from "@/features/product/productSlice.js";
import useTitle from "@/hooks/useTitle.js";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import NotFound from "@/pages/site/NotFound.jsx";
import { isUserAuthenticated, selectUser } from "@/features/auth/authSlice.js";
import getCategoryTitle from "@/utils/getCategoryTitle.js";
import formatDate from "@/utils/formatDate.js";
import useDeleteProduct from "@/hooks/useDeleteProduct.js";
import { sendAddToCartRequest } from "@/features/cart/cartThunks.js";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteProduct = useDeleteProduct(productId);
  const product = useSelector(state => selectProductById(state, productId));
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(isUserAuthenticated);

  const productBelongsToUser = isAuthenticated ? product.createdBy.id === user.id : false;

  useTitle(`${product?.name || "Not found"} | ShopSwift`);

  const addItemToCart = async () => {
    if (!isAuthenticated) {
      toast.error("Please log in before adding items to the cart.");
      return navigate("/login");
    }

    try {
      const toastId = toast.info("Adding item to cart, please wait...");
      await dispatch(sendAddToCartRequest(productId)).unwrap();
      toast.dismiss(toastId);
      toast.success("Item successfully added to your cart.");
      return navigate("/cart");
    } catch (err) {
      toast.error(err);
    }
  };

  if (!product)
    return <NotFound message="Sorry, the product you're looking for doesn't exist." />;

  return (
    <div className="section-container">
      <section className="grid md:grid-cols-2 gap-5 md:gap-11">
        <div className="space-y-3">
          <img
            src={`data:image/png;base64, ${product.image.data}`}
            className="rounded-lg shadow-md"
            alt={product.image.name}
          />
          {!productBelongsToUser &&
            <p className="text-lg text-dark-secondary dark:text-light">
              Provided by {" "}
              <NavLink
                to={`/user/${product.createdBy.id}`}
                className="text-primary font-medium hover:underline"
              >
                {product.createdBy.username}
              </NavLink>.
            </p>
          }
        </div>

        <div className="flex justify-between flex-col">
          <div className="space-y-4 lg:space-y-6">
            <div className="space-y-2.5">
              <div className="flex-between text-gray-dark dark:text-light">
                <p>
                  {getCategoryTitle(product.category)}
                </p>
                <p>
                  Listed on {" "}
                  <strong className="font-medium">
                    {formatDate(product.createdAt)}
                  </strong>
                </p>
              </div>
              <div className="flex-between">
                <h3
                  className="text-3xl lg:text-4xl dark:text-light text-gray font-bold transition"
                >
                  {product.name}
                </h3>
                <p className="text-xl text-secondary-dark dark:text-light font-medium">
                  ${product.price}
                </p>
              </div>
            </div>

            <p
              className="font-normal text-base lg:text-lg dark:text-light pb-3 whitespace-pre-line"
            >
              {product.description}
            </p>
          </div>

          <div className="flex justify-end">
            {productBelongsToUser ?
              <div className="space-x-2">
                <NavLink to={`/products/edit/${productId}`}>
                  <button
                    className="btn bg-emerald-500 border-emerald-500 py-2 font-medium"
                  >
                    Edit
                  </button>
                </NavLink>
                <button
                  className="btn bg-rose-500 border-rose-500 py-2 font-medium"
                  onClick={() => {
                    deleteProduct();
                    navigate("/products");
                  }}
                >
                  Delete
                </button>
              </div> :
              <button
                className="btn-secondary py-3 font-medium"
                onClick={addItemToCart}
              >
                Add to Cart
              </button>
            }
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductDetail;