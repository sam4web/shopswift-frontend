import { useSelector } from "react-redux";
import { selectProductById } from "@/features/product/productSlice.js";
import { NavLink } from "react-router-dom";

const ProductGridItem = ({ productId, bgStyle }) => {
  const product = useSelector((state) => selectProductById(state, productId));

  return (
    <NavLink to={`/products/${productId}`}>
      <div
        className={`shadow-sm rounded-xl px-5 py-3 space-y-3.5 text-center dark:bg-secondary-dark transition flex-between flex-col ${bgStyle || "bg-light dark:bg-dark-primary"}`}
      >
        <img
          src={`data:image/png;base64, ${product.image.data}`}
          className="rounded-md"
          alt={product.image.name}
        />
        <div className="flex justify-between gap-3 w-full">
          <h3 className="dark:text-light text-left">{product.name}</h3>
          <p className="text-primary font-medium">${product.price}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductGridItem;