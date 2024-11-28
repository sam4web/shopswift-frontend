import useTitle from "@/hooks/useTitle.js";
import { useDispatch, useSelector } from "react-redux";
import { doesOrderExists, selectOrders } from "@/features/order/orderSlice.js";
import formatDate from "@/utils/formatDate.js";
import { useEffect } from "react";
import { fetchOrderQuery } from "@/features/order/orderThunks.js";
import { toast } from "react-toastify";

const Orders = () => {
  useTitle("Orders | ShopSwift");

  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const orderExists = useSelector(doesOrderExists);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const toastId = toast.info("Fetching orders, please wait...");
        await dispatch(fetchOrderQuery()).unwrap();
        toast.dismiss(toastId);
      } catch (err) {
        toast.error(err);
      }
    };
    fetchOrders();
  }, [dispatch]);

  return (
    <section>
      <div className="section-container">
        <section className="flex justify-between">
          <h3
            className="text-2xl lg:text-3xl dark:text-light text-gray font-medium transition"
          >
            <span>
              {orderExists ? "Your orders" : "Your cart is empty."}
            </span>
          </h3>
          {orderExists &&
            <p className="text-lg text-gray dark:text-light">
              Total orders: {orders?.length}
            </p>
          }
        </section>
        <hr className="line-break" />

        <section>
          <div className="relative overflow-x-auto rounded-lg">
            {orderExists &&
              <table
                className="w-full text-base text-left text-gray-500 dark:text-gray-400"
              >
                <thead
                  className="text-base text-gray bg-gray-50 dark:text-light shadow-sm dark:bg-dark-primary transition"
                >
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium">Name</th>
                  <th scope="col" className="px-6 py-4 font-medium">Address</th>
                  <th scope="col" className="px-6 py-4 font-medium">Products</th>
                  <th scope="col" className="px-6 py-4 font-medium">Cost</th>
                  <th scope="col" className="px-6 py-4 font-medium">Date</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order) => (
                  <tr
                    key={order._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 transition"
                  >
                    <td className="px-6 py-4">{order.firstName}</td>
                    <td className="px-6 py-4">{order.address}</td>
                    <td className="px-6 py-4">{order.products.length}</td>
                    <td className="px-6 py-4">{order.cost}</td>
                    <td className="px-6 py-4">{formatDate(order.date)}</td>
                  </tr>
                ))}
                </tbody>
              </table>
            }
          </div>
        </section>
      </div>
    </section>
  );
};

export default Orders;