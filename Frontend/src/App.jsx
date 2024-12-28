import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import About from "./pages/About";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";

const App = () => {
  return (
    <div className="px-4 sm:px-[7vw] md:px-[7vw] lg:px-[5vw]">
      <Navbar />
      <SearchBar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/order" element={<Order />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
