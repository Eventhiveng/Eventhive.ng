import Carousel from "./Carousel";
import SectionHeader from "./SectionHeader";
import data from "../util/data";

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog-container">
        <div className="container">
          <SectionHeader
            title={"Our Blog Posts"}
            heading={"Read Our Blog & News"}
            type={"double"}
          />

          <div className="blog-wrapper">
            <Carousel data={data.blogData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
