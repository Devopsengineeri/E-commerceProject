import React, { useContext, useEffect, useState } from "react";
import ShopContext from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 10));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8 ">
        <Title text1={"BEST"} text2={"SELLERS"}></Title>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Our Best Selling collection features the most popular and highly-rated
          products that have captured the hearts of our customers. These items
          are not only top-rated for their exceptional quality and design but
          also offer great value, making them the go-to choices for those who
          seek the best.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-col-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
