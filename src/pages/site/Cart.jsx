import useTitle from "@/hooks/useTitle.js";
import { NavLink } from "react-router-dom";
import PricingDetail from "@/components/pricing/PricingDetail.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsFromCart, fetchPricingDetail } from "@/features/cart/cartThunks.js";
import { doesItemExists, selectCartItems, selectPricingDetail } from "@/features/cart/cartSlice.js";
import { isUserAuthenticated } from "@/features/auth/authSlice.js";
import ProductListItem from "@/components/product/ProductListItem.jsx";
import { toast } from "react-toastify";

const Cart = () => {
  useTitle("Cart | ShopSwift");
  const dispatch = useDispatch();
  const products = useSelector(selectCartItems);
  const pricingDetail = useSelector(selectPricingDetail);
  const itemExists = useSelector(doesItemExists);
  const isAuthenticated = useSelector(isUserAuthenticated);

  useEffect(() => {
    const fetchCartItemsAndPricingDetail = async () => {
      try {
        await dispatch(fetchItemsFromCart()).unwrap();
        await dispatch(fetchPricingDetail()).unwrap();
      } catch (err) {
        toast.error(err);
      }
    };
    fetchCartItemsAndPricingDetail();
  }, [dispatch]);

  return (
    <section>
      <div className="section-container">
        <section>
          <h3
            className="text-2xl lg:text-3xl dark:text-light text-gray font-medium transition"
          >
            {itemExists ? "Shopping Cart" : "Your cart is empty."}
          </h3>
        </section>
        <hr className="line-break" />

        {isAuthenticated && itemExists &&
          <section className="md:grid grid-cols-6 md:gap-7 space-y-10 md:space-y-0 mt-6">
            <aside className="md:col-span-2">
              {pricingDetail &&
                <PricingDetail pricing={pricingDetail} />
              }
              <NavLink to="/checkout">
                <button className="btn-primary w-full">Proceed to Checkout</button>
              </NavLink>
            </aside>

            <div className="flex flex-wrap md:flex-col gap-6 md:col-span-4">
              {products &&
                products.map(product => (
                  <ProductListItem
                    productId={product._id}
                    key={product._id}
                    cartItem
                  />
                ))
              }
            </div>
          </section>
        }
      </div>
    </section>
  );
};

export default Cart;