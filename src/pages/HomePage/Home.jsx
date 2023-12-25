import React from "react";
import Banner from "./Banner/Banner";
import FeaturedServicePart from "./FeaturedServices/FeaturedServicePart";
import EstimatePart from "./EstimatePart/EstimatePart";
import REviewPart from "./ReviewPart/REviewPart";
import BrandingPart from "./BrandingPart/BrandingPart";
import ProjectPart from "./ProjectPart/ProjectPart";

const Home = () => {
  return (
    <>
      <Banner />
      <FeaturedServicePart />
      <EstimatePart />
      <REviewPart />
      <BrandingPart />
      <ProjectPart />
    </>
  );
};

export default Home;
