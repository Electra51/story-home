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
        canonicalUrl=" https://story-home-six.vercel.app/about"
      />
      <AboutCarousel />
      <AboutSecondPart />
      <REviewPart />
      <ContactPart />
    </div>
  );
};

export default About;
