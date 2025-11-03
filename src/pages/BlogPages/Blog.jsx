import ArticalPart from "../HomePage/ArticlePart/ArticalPart";
import CommonBanner from "../../components/common/CommonBanner";
import blogbanner from "../../assets/blogImage.png";
import SEO from "../../components/SEO/SEO";
const Blog = () => {
  return (
    <div>
      <SEO
        title="Our blog - StoryHome"
        description="Explore our interior design services including consultation, 3D design, and complete home makeover solutions"
        keywords="interior design services, home consultation, 3D design"
        canonicalUrl="https://65929af45e2c05aed0fdfd40--legendary-taiyaki-a3fbb8.netlify.app/blog"
      />
      <CommonBanner
        title={"Blog & FAQ'S"}
        bannerImage={blogbanner}
        bread1={"Home"}
        bread2={"Blogs"}
      />
      <ArticalPart />
    </div>
  );
};

export default Blog;
