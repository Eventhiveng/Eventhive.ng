import { useParams } from "react-router";
import BlogAside from "../components/BlogAside";
import BlogDesc from "../components/BlogDesc";
import data from "../util/data";
import PageHeader from "../components/PageHeader";

const SingleBlogPage = () => {
  const { slug } = useParams();

  const { blogPageData } = data;
  const selectedIndex = blogPageData.findIndex((blog) => blog.slug === slug);
  const selectedBlog = blogPageData[selectedIndex];

  const prevIndex =
    (selectedIndex - 1 + blogPageData.length) % blogPageData.length;
  const nextIndex = (selectedIndex + 1) % blogPageData.length;

  const prevBlog = blogPageData[prevIndex];
  const nextBlog = blogPageData[nextIndex];

  return (
    <main className="single-blog-page">
      <PageHeader title={"Blog Details"} bgdImg={"/images/headers/blog.png"} />
      <div className="single-blog-page-container">
        <div className="container">
          <BlogDesc
            data={selectedBlog}
            prevBlog={prevBlog}
            nextBlog={nextBlog}
          />
          <BlogAside data={blogPageData} />
        </div>
      </div>
    </main>
  );
};

export default SingleBlogPage;
