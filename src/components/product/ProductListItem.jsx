import { useSelector } from "react-redux";
import { selectProductById } from "@/features/product/productSlice.js";
import { NavLink } from "react-router-dom";
import useDeleteProduct from "@/hooks/useDeleteProduct.js";
import useRemoveFromCart from "@/hooks/useRemoveFromCart.js";

const ProductListItem = ({ productId, self, cartItem }) => {
  const product = useSelector((state) => selectProductById(state, productId));
  const deleteProduct = useDeleteProduct(productId);
  const removeFromCart = useRemoveFromCart(productId);

  const formatDescription = (description) => {
    if (description.length < 180) return description;
    return description.slice(0, 180) + "...";
  };

  return (
    <div
      className="shadow-sm rounded-xl p-3.5 space-y-5 lg:space-y-0 lg:space-x-7 text-center bg-light dark:bg-dark-primary flex-col lg:flex-row flex transition"
    >
      <img
        src={`data:image/png;base64, ${product.image.data}`}
        className="rounded-md lg:w-2/5 shadow-sm"
        alt={product.image.name}
      />
      <div
        className="flex-1 flex flex-col items-end justify-between space-y-5"
      >
        <div className="space-y-2 text-left w-full">
          <div className="flex justify-between">
            <h3 className="text-xl dark:text-light">{product.name}</h3>
            <p className="text-primary font-medium">${product.price}</p>
          </div>
          <p className="text-gray dark:text-light">
            {formatDescription(product.description)}
          </p>
        </div>
        <div className="flex space-x-2.5">
          <NavLink
            to={`/products/${productId}`}
            className="inline-block"
          >
            <button className="btn-secondary px-3 py-1.5">Detail</button>
          </NavLink>

          {self &&
            <>
              <NavLink to={`/products/edit/${productId}`} className="inline-block">
                <button
                  className="btn bg-emerald-500 border-emerald-500 px-3 py-1.5"
                >
                  Edit
                </button>
              </NavLink>
              <button
                className="btn bg-rose-500 border-rose-500 px-3 py-1.5"
                onClick={deleteProduct}
              >
                Delete
              </button>
            </>}

          {cartItem &&
            <button
              className="btn bg-rose-500 border-rose-500 px-3 py-1.5"
              onClick={removeFromCart}
            >
              Remove
            </button>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;