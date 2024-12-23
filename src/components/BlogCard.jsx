import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const BlogCard = ({ data }) => {
  return (
    <div className="blog-card">
      <div className="image">
        <img src={data.imgLink} alt={data.title} />
      </div>
      <div className="card-content">
        <div className="author text-pry">
          <Icon icon="mingcute:user-3-line" />
          {data.author}
        </div>
        <h2 className="black-sec">
          <Link to={data.slug}>{data.title}</Link>
        </h2>
        <p>{data.excerpt.substr(0, 150).padEnd(157, " .")}</p>
        <Link to={data.slug} className="btn btn-pry">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
