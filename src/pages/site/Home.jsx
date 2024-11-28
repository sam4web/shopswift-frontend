import heroImage from "@/assets/images/hero-image.jpg";
import useTitle from "@/hooks/useTitle.js";
import { useSelector } from "react-redux";
import { selectProducts } from "@/features/product/productSlice.js";
import ProductGridItem from "@/components/product/ProductGridItem.jsx";
import { NavLink } from "react-router-dom";
import useFilterProducts from "@/hooks/useFilterProducts.js";

const Home = () => {
  useTitle("ShopSwift | Explore Shop Thrive");
  const products = useSelector(selectProducts);
  const filteredProducts = useFilterProducts(products);

  return (
    <>
      <section>
        <div className="section-container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div
              className="space-y-5 md:space-y-3 lg:space-y-5 w-full max-w-md md:max-w-lg"
            >
              <h1
                className="text-3xl lg:text-[42px] text-gray font-extrabold lg:leading-[1.17] dark:text-light"
              >
                Explore. Shop. Thrive. Elevating your lifestyle online.
              </h1>
              <p className="font-normal text-base lg:text-lg dark:text-light pb-3">
                SwiftShop, a clean and functional e-commerce website built using
                MERN Stack, highlighting essential web development techniques.
              </p>
              <NavLink to="/products">
                <button className="btn-primary mt-3">View Products</button>
              </NavLink>
            </div>
            <div className="flex justify-end">
              <img
                className="rounded-lg shadow-2xl"
                src={heroImage}
                alt="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light dark:bg-dark-primary py-1">
        <div className="section-container">
          <h3 className="text-3xl dark:text-light text-dark-body font-medium">
            Feature Products
          </h3>
          <hr className="line-break" />
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 mt-14"
          >
            {products &&
              filteredProducts.slice(0, 3).map(product => (
                <ProductGridItem
                  productId={product._id}
                  key={product._id}
                  bgStyle={"bg-white dark:bg-dark-body"}
                />
              ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-11 lg:gap-16">
            <div className="space-y-3">
              <h3
                className="text-3xl dark:text-light text-dark-secondary font-medium"
              >
                Join our newsletter for 20% off
              </h3>
              <p className="font-normal text-base text-gray dark:text-light">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
                nostrum molestias hic consectetur corrupti asperiores cupiditate
              </p>
            </div>
            <div className="flex lg:justify-end items-center">
              <div
                className="bg-light dark:bg-gray-dark p-1.5 rounded-lg flex justify-between flex-wrap lg:flex-1 gap-3 sm:max-w-sm"
              >
                <input
                  type="text"
                  placeholder="Enter email..."
                  className="px-3 outline-none bg-transparent inline-block dark:text-light"
                />
                <button className="btn-primary px-3 py-2">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;