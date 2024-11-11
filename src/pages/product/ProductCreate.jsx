import { useState } from "react";
import ProductForm from "@/components/form/ProductForm.jsx";
import useTitle from "@/hooks/useTitle.js";

const ProductCreate = () => {
  useTitle("New Product | ShopSwift");

  const [error, setError] = useState();

  const handleSubmit = (productData) => {
    console.log(productData);
  };

  return (
    <div className="section-container">
      <section>
        <h3
          className="text-2xl lg:text-3xl dark:text-light text-gray font-medium transition"
        >
          Add New Product
        </h3>
      </section>

      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />

      {error &&
        <div className="bg-rose-500 px-4 py-2 rounded-md shadow-md">
          <p className="text-white font-medium">{error}</p>
        </div>
      }

      <ProductForm create handleSubmit={handleSubmit} />

    </div>
  );
};

export default ProductCreate;