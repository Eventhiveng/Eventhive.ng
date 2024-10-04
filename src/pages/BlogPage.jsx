import BlogAside from "../components/BlogAside";
import BlogContent from "../components/BlogContent";
import PageHeader from "../components/PageHeader";
import data from "../util/data";

const BlogPage = () => {
  const { blogPageData } = data;
  return (
    <main className="blog-page">
      <PageHeader title={"Blog"} bgdImg={"/images/headers/blog.png"} />

      <div className="container">
        <div className="blog-page-container">
          <BlogContent data={blogPageData} />
          <BlogAside data={blogPageData} />
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
