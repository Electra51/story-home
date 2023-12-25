import React from "react";
import Banner from "./Banner/Banner";
import FeaturedServicePart from "./FeaturedServices/FeaturedServicePart";
import EstimatePart from "./EstimatePart/EstimatePart";
import REviewPart from "./ReviewPart/REviewPart";

const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedServicePart />
      <EstimatePart />
      {/* <REviewPart /> */}
    </>
  );
};

export default Home;
