import useTitle from "@/hooks/useTitle.js";
import { useState } from "react";
import { CiGrid41 } from "react-icons/ci";
import { HiBars3 } from "react-icons/hi2";
import SearchForm from "@/components/form/SearchForm.jsx";

const ProductList = () => {
  useTitle("Products | ShopSwift");
  const [gridLayout, setGridLayout] = useState(false);

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
              0 Products Found
            </p>

            <div className="space-x-1.5">
              <button
                className={`grid-toggle-btn ${gridLayout && "active"}`}
                onClick={() => setGridLayout(true)}
              >
                <CiGrid41 />
              </button>

              <button
                className={`grid-toggle-btn ${!gridLayout && "active"}`}
                onClick={() => setGridLayout(false)}
              >
                <HiBars3 />
              </button>
            </div>
          </div>

          <hr className="line-break" />
        </div>
      </section>
    </div>
  );
};

export default ProductList;