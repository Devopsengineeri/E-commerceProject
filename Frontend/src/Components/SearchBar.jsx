import React, { useContext, useEffect, useState } from "react";

import { assets } from "../assets/assets";
import ShopContext from "../Context/ShopContext";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname.includes("collection") ||
      location.pathname === "/" ||
      location.pathname === "/about"
    ) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 py-2 px-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="Search Icon" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-4 cursor-pointer"
        src={assets.cross_icon}
        alt="Close Icon"
      />
    </div>
  ) : null;
};

export default SearchBar;
