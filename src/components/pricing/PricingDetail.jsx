const PricingDetail = ({ pricing }) => {
  return (
    <div
      className="px-3 py-5 lg:p-5 bg-light dark:bg-dark-primary shadow-sm transition rounded-xl space-y-4 mb-4"
    >
      <div className="border-b pb-1.5 flex justify-between">
        <p className="text-gray dark:text-light">Sub Total</p>
        <p className="text-gray-dark dark:text-light">{pricing?.subTotal || 0}</p>
      </div>
      <div className="border-b pb-1.5 flex justify-between">
        <p className="text-gray dark:text-light">Shipping</p>
        <p className="text-gray-dark dark:text-light">{pricing?.shipping || 0}</p>
      </div>
      <div className="border-b pb-1.5 flex justify-between">
        <p className="text-gray dark:text-light">Tax</p>
        <p className="text-gray-dark dark:text-light">{pricing?.tax || 0}</p>
      </div>

      <div className="flex justify-between">
        <p className="w-full text-gray text-lg font-medium dark:text-light">
          Order Total
        </p>
        <p className="text-gray-dark dark:text-light">{pricing?.orderTotal || 0}</p>
      </div>
    </div>

  );
};

export default PricingDetail;