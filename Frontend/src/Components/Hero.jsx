import React from "react";
import { assets } from "../assets/assets";

export const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex flex-col items-start justify-center py-10 sm:pl-32">
        <div className="flex items-center gap-2">
          <p className="w-8 md:w-14 h-[3px] bg-[#414141]"></p>
          <p className="font-semibold text-sm md:text-base text-center">
            OUR BESTSELLERS
          </p>
        </div>
        <h1 className="prata-regular text-4xl sm:py-3 lg:text-5xl leading-relaxed">
          Latest Arrivals
        </h1>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
          <p className="w-9 md:w-14 h-[3px] bg-[#414141]"></p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 flex justify-end">
        {/* Hero Right Side */}
        <img
          className="w-full sm:w-auto max-h-[450px] object-cover "
          src={assets.hero_img}
          alt="Hero showcase"
        />
      </div>
    </div>
  );
};

export default Hero;
