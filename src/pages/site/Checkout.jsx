import PricingDetail from "@/components/pricing/PricingDetail.jsx";
import { useState } from "react";
import useTitle from "@/hooks/useTitle.js";
import { useDispatch, useSelector } from "react-redux";
import { doesItemExists, selectPricingDetail } from "@/features/cart/cartSlice.js";
import { Navigate, useNavigate } from "react-router-dom";
import { sendPlaceOrderRequest } from "@/features/order/orderThunks.js";
import { toast } from "react-toastify";

const Checkout = () => {
  useTitle("Checkout | ShopSwift");

  const [formData, setFormData] = useState(null);
  const [errors, setErrors] = useState(null);
  const pricingDetail = useSelector(selectPricingDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const itemExists = useSelector(doesItemExists);
  if (!itemExists)
    return <Navigate to={"/cart"} replace={true} />;

  const validateForm = () => {
    const newErrors = {};
    if (!formData?.firstName) newErrors.name = "Name is required.";
    if (!formData?.address) newErrors.address = "Address is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setErrors(null);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const toastId = toast.info("Placing your order, please wait...");
      await dispatch(sendPlaceOrderRequest(formData)).unwrap();
      toast.dismiss(toastId);
      toast.success("Your order has been successfully placed.");
      navigate("/orders");
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <section>
      <div className="section-container">
        <section>
          <h3
            className="text-2xl lg:text-3xl dark:text-light text-gray font-medium transition"
          >
            Your orders
          </h3>
        </section>
        <hr className="line-break" />

        <section className="md:grid grid-cols-4 md:gap-7 space-y-10 md:space-y-0 mt-6">
          <aside className="col-span-2">
            <form className="space-y-3.5" onSubmit={handleSubmit}>
              <h4
                className="text-xl dark:text-light text-gray font-medium transition pb-1.5"
              >
                Shipping Information
              </h4>

              <div>
                <label htmlFor="firstName" className="input-label"> First Name </label>
                <input
                  className="input-field-lg"
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={handleChange}
                  value={formData?.firstName || ""}
                />
                <p className="err-msg">{errors?.name}</p>
              </div>

              <div className="pb-1.5">
                <label htmlFor="address" className="input-label"> Address </label>
                <input
                  className="input-field-lg"
                  type="text"
                  name="address"
                  id="address"
                  onChange={handleChange}
                  value={formData?.address || ""}
                />
                <p className="err-msg">{errors?.address}</p>
              </div>

              <button className="btn-primary w-full" type="submit">
                Place Your Order
              </button>
            </form>
          </aside>

          <aside className="col-span-2">
            {pricingDetail &&
              <PricingDetail pricing={pricingDetail} />
            }
          </aside>
        </section>
      </div>
    </section>
  );
};

export default Checkout;