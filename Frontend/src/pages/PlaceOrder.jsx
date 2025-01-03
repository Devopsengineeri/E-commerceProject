import React, { useContext, useState } from "react";
import Title from "../Components/Title";
import CartTolal from "../Components/CartTolal";
import { assets } from "../assets/assets";
import ShopContext from "../Context/ShopContext";
function PlaceOrder() {
  const { navigate } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");
  return (
    <div className="flex flec-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* ------------ left side -------------*/}
      <div className="flex flex-col gap-5 w-full sm:max-w0[480px]">
        <div className="text-xl sm:text-3xl my-3 ">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-5">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-80"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-80"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-2/3"
          type="email"
          placeholder="Email"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-2/3"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-5">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-80"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-80"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-5">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-80"
            type="number"
            placeholder="ZipCode"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-80"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-2/3"
          type="number"
          placeholder="Phone"
        />
      </div>
      {/* =---------Right Side ----------------- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTolal />
        </div>
        <div className="mt-12">
          <Title text1={"PATMENT"} text2={"METHOD"}></Title>
          <div className="flex gap-4 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-4 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-5" src={assets.razorpay_logo} alt="" />
            </div>
          </div>
          <div
            onClick={() => setMethod("cod")}
            className="flex items-center gap-5 border p-2 px-3 cursor-pointer"
          >
            <p
              className={`min-w-3.5 h-3.5 border rounded-full ${
                method === "cod" ? "bg-green-400" : ""
              }`}
            ></p>
            <p className="text-gray-500 text-sm font-medium mx-4">
              CASH ON DELIVERY
            </p>
          </div>
        </div>
        <div className="w-full text-end mt-8">
          <button
            onClick={() => navigate("/order")}
            className="bg-black text-white px-16 py-3 text-sm"
          >
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
