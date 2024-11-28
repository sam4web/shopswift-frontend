import useTitle from "@/hooks/useTitle.js";
import { useEffect, useState } from "react";
import SearchForm from "@/components/form/SearchForm.jsx";
import { FiGrid, FiMenu } from "react-icons/fi";
import ProductGridItem from "@/components/product/ProductGridItem.jsx";
import { useSelector } from "react-redux";
import { selectProducts } from "@/features/product/productSlice.js";
import ProductListItem from "@/components/product/ProductListItem.jsx";
import useFilterProducts from "@/hooks/useFilterProducts.js";

const ProductList = () => {
  useTitle("Products | ShopSwift");
  const [gridLayout, setGridLayout] = useState(localStorage.getItem("layout") === "grid");
  const products = useSelector(selectProducts);
  const filteredProducts = useFilterProducts(products);

  useEffect(() => {
    localStorage.setItem("layout", gridLayout ? "grid" : "list");
  }, [gridLayout]);

  return (
    <div
      className="md:grid grid-cols-5 lg:grid-cols-6 items-start space-y-9 md:space-y-0 md:space-x-5 lg:space-x-9 section-container"
    >
      <aside className="md:col-span-2 lg:col-span-2">
        <SearchForm />
      </aside>

      <section className="col-span-3 lg:col-span-4">
        <div>
          <div className="flex justify-between items-center">
            <p className="text-lg dark:text-light">
              {filteredProducts.length} Products Found
            </p>

            <div className="space-x-1.5">
              <button
                className={`grid-toggle-btn ${gridLayout && "active"}`}
                onClick={() => setGridLayout(true)}
              >
                <FiGrid />
              </button>

              <button
                className={`grid-toggle-btn ${!gridLayout && "active"}`}
                onClick={() => setGridLayout(false)}
              >
                <FiMenu />
              </button>
            </div>
          </div>

          <hr className="line-break" />

          <div className={gridLayout ? "grid grid-cols-1 md:grid-cols-2 gap-4 my-6" : "space-y-6 my-6"}
          >
            {products &&
              filteredProducts.map(product => (
                gridLayout
                  ? <ProductGridItem
                    productId={product._id}
                    key={product._id}
                  />
                  : <ProductListItem
                    productId={product._id}
                    key={product._id}
                  />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;