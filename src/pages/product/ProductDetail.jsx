import { useSelector } from "react-redux";
import { selectProductById } from "@/features/product/productSlice.js";
import useTitle from "@/hooks/useTitle.js";
import { useParams } from "react-router-dom";
import NotFound from "@/pages/site/NotFound.jsx";
import formatDate from "@/utils/formatDate.js";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector(state => selectProductById(state, productId));

  useTitle(`${product?.name || "Not found"} | ShopSwift`);

  if (!product)
    return <NotFound message="Sorry, the product you're looking for doesn't exist." />;

  return (
    <div className="section-container">
      <section className="grid md:grid-cols-2 gap-5 md:gap-11">
        <img
          src={`data:image/png;base64, ${product.image.data}`}
          className="rounded-lg shadow-md"
          alt={product.image.name}
        />

        <div className="flex justify-between items-end flex-col">

          <div className="space-y-4 lg:space-y-6">
            <div className="space-y-2">
              <div className="flex-between">
                <h3
                  className="text-2xl lg:text-3xl dark:text-light text-gray font-bold transition"
                >
                  {product.name}
                </h3>
                <p className="text-xl text-secondary-dark dark:text-light font-medium">
                  ${product.price}
                </p>
              </div>
              <p className="text-lg text-secondary-dark dark:text-light">
                Product available since{" "}
                <strong className="font-semibold">
                  {formatDate(product.createdAt)}
                </strong>, provided by{" "}
                <strong className="font-semibold">
                  {product.createdBy}
                </strong>.
              </p>
            </div>

            <p
              className="font-normal text-base lg:text-lg dark:text-light pb-3 whitespace-pre-line"
            >
              {product.description}
            </p>
          </div>

          <a href="" className="inline-block">
            <button className="btn-secondary py-3 font-medium">
              Add to Cart
            </button>
          </a>
        </div>
      </section>

    </div>
  );
};

export default ProductDetail;