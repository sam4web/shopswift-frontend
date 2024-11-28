import { useState } from "react";
import ProductForm from "@/components/form/ProductForm.jsx";
import useTitle from "@/hooks/useTitle.js";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProductById } from "@/features/product/productSlice.js";
import { isUserAuthenticated, selectUser } from "@/features/auth/authSlice.js";
import NotFound from "@/pages/site/NotFound.jsx";
import { updateProductRecord } from "@/features/product/productThunks.js";
import { toast } from "react-toastify";

const ProductEdit = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState();
  const product = useSelector(state => selectProductById(state, productId));
  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(isUserAuthenticated);

  useTitle(product?.name ? `Update ${product.name}` : "Not Found" + " | ShopSwift");

  if (!product)
    return <NotFound message="Sorry, the product you're looking for doesn't exist." />;

  const productBelongsToUser = isAuthenticated ? product.createdBy.id === user.id : false;
  if (!productBelongsToUser) {
    toast.error("Cannot update product. This product does not belong to you.");
    return <Navigate to={"/products"} replace={true} />;
  }

  const handleSubmit = async (productData) => {
    try {
      const toastId = toast.info("Updating product, please wait...");
      await dispatch(updateProductRecord({ data: productData, id: productId })).unwrap();
      toast.dismiss(toastId);
      toast.success("Product updated successfully.");
      navigate(`/products/${productId}`);
    } catch (err) {
      toast.error(err);
      setError(err);
    }
  };

  return (
    <div className="section-container">
      <section>
        <h3
          className="text-2xl lg:text-3xl dark:text-light text-gray font-medium transition"
        >
          Update Product
        </h3>
      </section>

      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

      {error &&
        <div className="bg-rose-500 px-4 py-2 rounded-md shadow-md">
          <p className="text-white font-medium">{error}</p>
        </div>
      }

      <ProductForm
        initialData={product}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ProductEdit;