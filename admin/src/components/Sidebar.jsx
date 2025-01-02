import React from "react";
// import Navbar from "./Navbar";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-[19%] min-h-screen border-r-2">
      <div className="flex flex-col gap-2 pt-6 pl-[20px] text-[15px]">
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 py-2 px-3 rounded-md"
          to="/add"
        >
          <img className="w-5 h-5" src={assets.add_icon} alt="Add icon" />
          <p className=" md:block">Add Items</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 py-2 px-3 rounded-md"
          to="/list"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="Add icon" />
          <p className=" md:block">List Items</p>
        </NavLink>
        <NavLink
          className="flex items-center gap-3 border border-gray-300 border-r-0 py-2 px-3 rounded-md"
          to="/orders"
        >
          <img className="w-5 h-5" src={assets.order_icon} alt="Add icon" />
          <p className=" md:block">Order</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
