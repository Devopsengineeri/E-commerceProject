import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import BestSeller from "../Components/BestSeller";
import OurPolicy from "../Components/OurPolicy";
import NewsLetterBox from "../Components/NewsLetterBox";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
      <Footer />
    </div>
  );
}

export default Home;