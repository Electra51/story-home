import SEO from "../../components/SEO/SEO";
import REviewPart from "../HomePage/ReviewPart/REviewPart";
import AboutCarousel from "./AboutCarousel";
import AboutSecondPart from "./AboutSecondPart";
import ContactPart from "./Contactpart";

const About = () => {
  return (
    <div>
      <SEO
        title="About Us - StoryHome"
        description="Explore our interior design services including consultation, 3D design, and complete home makeover solutions"
        keywords="interior design services, home consultation, 3D design"
        canonicalUrl="https://65929af45e2c05aed0fdfd40--legendary-taiyaki-a3fbb8.netlify.app/about"
      />
      <AboutCarousel />
      <AboutSecondPart />
      <REviewPart />
      <ContactPart />
    </div>
  );
};

export default About;
