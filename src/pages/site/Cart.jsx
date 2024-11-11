import useTitle from "@/hooks/useTitle.js";
import { NavLink } from "react-router-dom";
import PricingDetail from "@/components/pricing/PricingDetail.jsx";

const Cart = () => {
  useTitle("Cart | ShopSwift");

  return (
    <section>
      <div className="section-container">
        <section>
          <h3
            className="text-2xl lg:text-3xl dark:text-light text-gray font-medium transition"
          >
            Shopping Cart
          </h3>
        </section>
        <hr className="line-break" />

        {/* if user is authenticated & items exists */}
        <section className="md:grid grid-cols-6 md:gap-7 space-y-10 md:space-y-0 mt-6">
          <aside className="md:col-span-2">
            <PricingDetail />
            <NavLink to="/checkout">
              <button className="btn-primary w-full">Proceed to Checkout</button>
            </NavLink>
          </aside>

          <div className="flex flex-wrap md:flex-col gap-6 md:col-span-4">
            {/* PRODUCTS HERE */}

          </div>
        </section>
      </div>
    </section>
  );
};

export default Cart;