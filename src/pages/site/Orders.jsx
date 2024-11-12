import useTitle from "@/hooks/useTitle.js";

const Orders = () => {
  useTitle("Orders | ShopSwift");

  return (
    <section>
      <div className="section-container">
        <section className="flex justify-between">
          <h3
            className="text-2xl lg:text-3xl dark:text-light text-gray font-medium transition"
          >
            <span> Your orders </span>
          </h3>
          <p className="text-lg text-gray dark:text-light">
            Total orders: 0
          </p>
        </section>
        <hr className="line-break" />

        {/*{% if user is authenticated & order exists %}*/}
        <section>
          <div className="relative overflow-x-auto rounded-lg">
            <table
              className="w-full text-base text-left text-gray-500 dark:text-gray-400"
            >
              <thead
                className="text-base text-gray bg-gray-50 dark:text-light shadow-sm dark:bg-primary-dark transition"
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
              {/*
              // MAP ORDERS HERE
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 transition"
              >
                <td className="px-6 py-4">{{ order.name }}</td>
                <td className="px-6 py-4">{{ order.address }}</td>
                <td className="px-6 py-4">{{ order.products.count }}</td>
                <td className="px-6 py-4">{{ order.cost }}</td>
                <td className="px-6 py-4">{{ order.created_at | date:"M d, Y"}}</td>
              </tr>
              */}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Orders;