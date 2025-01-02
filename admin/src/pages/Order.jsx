import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUrl + "/app/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-4 sm:p-6">
      <h3 className="text-xl sm:text-2xl font-semibold mb-6">Order Page</h3>
      <div className="space-y-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 sm:p-6 bg-white shadow-md hover:shadow-lg transition-shadow flex flex-col lg:flex-row justify-between items-center gap-4"
          >
            {/* Left Section */}
            <div className="flex gap-4 items-start">
              <img
                src={assets.parcel_icon}
                alt="Parcel Icon"
                className="w-12 h-12 sm:w-16 sm:h-16 object-cover"
              />
              <div>
                <p className="font-medium text-gray-700 text-sm sm:text-base">
                  {order.items
                    .map(
                      (item) =>
                        `${item.name} x ${item.quantity} ${
                          item.size ? `(${item.size})` : ""
                        }`
                    )
                    .join(", ")}
                </p>
                <p className="font-semibold text-gray-800 mt-2">
                  {order.address.firstName} {order.address.lastName}
                </p>
                <div className="text-gray-600 text-sm">
                  <p>{order.address.street}</p>
                  <p>
                    {order.address.city}, {order.address.country},{" "}
                    {order.address.zipcode}
                  </p>
                  <p>{order.address.phone}</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col text-right items-end space-y-1">
              <p>
                <span className="font-medium text-gray-700">Items:</span>{" "}
                {order.items.length}
              </p>
              <p>
                <span className="font-medium text-gray-700">Method:</span>{" "}
                {order.paymentMethod}
              </p>
              <p>
                <span className="font-medium text-gray-700">Payment:</span>{" "}
                <span
                  className={`${
                    order.payment ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {order.payment ? "Done" : "Pending"}
                </span>
              </p>
              <p>
                <span className="font-medium text-gray-700">Date:</span>{" "}
                {new Date(order.date).toLocaleDateString()}
              </p>
              <p className="font-semibold text-lg text-gray-900">
                {currency}
                {order.amount}
              </p>
              <select
                className="mt-2 border rounded-md px-3 py-1 bg-gray-50 text-sm text-gray-700"
                defaultValue={order.status}
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
