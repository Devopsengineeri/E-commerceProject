import React from "react";
import Footer from "../Components/Footer";
import { assets } from "../assets/assets";
import Title from "../Components/Title";
import NewsLetterBox from "../Components/NewsLetterBox";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"}></Title>
        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img
            className="w-full md:max-w-[450px]"
            src={assets.about_img}
            alt=""
          />

          <div className="flex flex-col justify-center gap-7 md:w-2/3 text-gray-600">
            <p>
              E-commerce, or electronic commerce, refers to the buying and
              selling of goods and services through the internet. It has
              revolutionized the way businesses operate by providing a platform
              for global trade accessible 24/7. Customers can explore a wide
              range of products, compare prices, read reviews, and make secure
              purchases from the comfort of their homes.
            </p>
            <p>
              For businesses, e-commerce eliminates geographical barriers,
              reduces operational costs, and provides tools for better customer
              engagement. With advancements in technology, e-commerce has
              expanded to include mobile shopping, digital payments, and
              personalized shopping experiences, making it a vital component of
              modern commerce.
            </p>
            <b className="text-gray-800">Our Mission</b>
            <p>
              Customers can explore a wide range of products, compare prices,
              read reviews, and make secure purchases from the comfort of their
              homes. For businesses, e-commerce eliminates geographical
              barriers, reduces operational costs, and provides tools for better
              customer engagement.
            </p>
          </div>
        </div>
        <div className="text-xl py-4">
          <Title text1={"WHY"} text2={"CHOOSE US"}></Title>
        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gay-5">
            <b>Quality Assurance:-</b>
            <p className="text-gray-600">
              e-commerce eliminates geographical barriers, reduces operational
              costs, and provides tools for better customer engagement. With
              advancements in technology, e-commerce has expanded to include
              mobile shopping, digital payments,
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gay-5">
            <b>Convenience:-</b>
            <p className="text-gray-600">
              It has revolutionized the way businesses operate by providing a
              platform for global trade accessible 24/7. Customers can explore a
              wide range of products, compare prices, read reviews, and make
              secure purchases from the comfort of their homes.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gay-5">
            <b>Exceptional Customer Service:-</b>
            <p className="text-gray-600">
              It has revolutionized the way businesses operate by providing a
              platform for global trade accessible 24/7. Customers can explore a
              wide range of products, compare prices, read reviews, and make
              secure purchases from the comfort of their homes.
            </p>
          </div>
        </div>
        <NewsLetterBox />
      </div>
      <Footer />
    </div>
  );
}

export default About;
