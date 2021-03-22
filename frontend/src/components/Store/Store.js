const Store = ({ store }) => {
  return (
    <div className="text-left mb-4">
      <h5 className="font-semibold text-xl">{store.name}</h5>
      <p>
        <span className="mr-1 text-gray-400 text-sm">Store Id:</span>
        <span className="text-gray-500">{store._id}</span>
      </p>
      <p className="text-gray-600">{store.briefDescription}</p>
      <p>
        <span className="mr-1 text-gray-400 text-sm">Total Coupon:</span>
        <span>45</span>
      </p>{" "}
      <p>
        <span className="mr-1 text-gray-400 text-sm">Usages:</span>
        <span>45</span>
      </p>
      <div className="mt-3 mb-5 text-right">
        <button className="btn crete-coupon-btn mr-4">Create Coupon</button>
        <button className="btn edit-store-btn">Edit Store</button>
      </div>
      <hr />
    </div>
  );
};
export default Store;
