import { Link } from "react-router-dom";
import prevNext from "../assets/img/prev-next.png";

const BlogPagination = ({ prevBlog, nextBlog }) => {
  return (
    <div className="blog-pagination">
      <div className="prev">
        <p>Prev Post</p>
        <h2 className="black-sec">
          <Link to={`/blog/${prevBlog?.slug}`}>{prevBlog?.title}</Link>
        </h2>
      </div>
      <div className="image">
        <img src={prevNext} alt="prev-next" />
      </div>
      <div className="next">
        <p>Next Post</p>
        <h2 className="black-sec">
          <Link to={`/blog/${nextBlog?.slug}`}>{nextBlog?.title}</Link>
        </h2>
      </div>
    </div>
  );
};

export default BlogPagination;
