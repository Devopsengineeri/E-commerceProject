import React from "react";
import { assets } from "../assets/assets";
import Title from "../Components/Title";
import NewsLetterBox from "../Components/NewsLetterBox";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1="CONTACT" text2="US" />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10">
        <img
          className="w-80 md:max-w-[500px]"
          src={assets.contact_img}
          alt="Contact"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            542213 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0132 <br /> Email: admin@forever.com
          </p>
          <p className="text-gray-500 font-semibold">Careers at Forever</p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 bg-white">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
      <Footer />
    </div>
  );
};

export default Contact;
