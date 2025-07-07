import Link from "next/link";
import { BlogPageData } from "@/util/types";

const BlogPagination = ({
  prevBlog,
  nextBlog,
}: {
  prevBlog: BlogPageData;
  nextBlog: BlogPageData;
}) => {
  return (
    <div className="blog-pagination">
      <div className="prev">
        <p>Prev Post</p>
        <h2 className="black-sec">
          <Link href={`/blog/${prevBlog?.slug}`}>{prevBlog?.title}</Link>
        </h2>
      </div>
      <div className="image">
        <img src="/images/section-img/prev-next.png" alt="prev-next" />
      </div>
      <div className="next">
        <p>Next Post</p>
        <h2 className="black-sec">
          <Link href={`/blog/${nextBlog?.slug}`}>{nextBlog?.title}</Link>
        </h2>
      </div>
    </div>
  );
};

export default BlogPagination;
