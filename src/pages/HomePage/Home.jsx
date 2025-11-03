import Banner from "./Banner/Banner";
import FeaturedServicePart from "./FeaturedServices/FeaturedServicePart";
import EstimatePart from "./EstimatePart/EstimatePart";
import REviewPart from "./ReviewPart/REviewPart";
import BrandingPart from "./BrandingPart/BrandingPart";
import ProjectPart from "./ProjectPart/ProjectPart";
import StatsPart from "./StatsPart/StatsPart";
import ArticalPart from "./ArticlePart/ArticalPart";
import LastPart from "./LastPart/LastPart";
import SEO from "../../components/SEO/SEO";
const Home = () => {
  return (
    <>
      <SEO
        title="StoryHome - Make Your Home Beautiful"
        description="Transform your home with StoryHome's interior design services. Expert interior designers, modern furniture, and complete home solutions."
        keywords="interior design, home decor, furniture, reactjs, home renovation"
        author="Safayet Nur"
      />
      <Banner />
      <FeaturedServicePart />
      <EstimatePart />
      <REviewPart />
      <BrandingPart />
      <ProjectPart />
      <StatsPart />
      <ArticalPart />
      <LastPart />
    </>
  );
};

export default Home;
