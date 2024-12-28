import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-colsm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32 " alt="" />
          <p className="w-full md:w-1/3 text-gray-500">
            it’s a commitment to delivering excellence and building trust that
            lasts a lifetime. With a strong foundation of innovation, quality,
            and customer satisfaction, Forever stands as a symbol of reliability
            and integrity.
          </p>
        </div>

        <div className="w-full sm:w-1/5 ">
          <p className="text-xl font-semibold mb-5"> COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-500 font-semibold ">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="w-full sm:w-1/5">
          <p className="text-xl font-semibold mb-4">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-500">
            <li>+1-212-7890</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Build 2024@ forever.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
