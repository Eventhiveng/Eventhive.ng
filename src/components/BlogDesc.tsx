import { Icon } from "@iconify/react";
import parser from "html-react-parser";
import BlogPagination from "./BlogPagination";
import { BlogPageData } from "@/util/types";
import Image from "next/image";

const BlogDesc = ({
  data,
  prevBlog,
  nextBlog,
}: {
  data: BlogPageData;
  prevBlog: BlogPageData;
  nextBlog: BlogPageData;
}) => {
  return (
    <div className="blog-desc">
      <div className="blog-desc-container">
        <div className="image">
          <Image
            src={data?.imgLink || ""}
            alt={data?.title || "Blog image"}
            width={800}
            height={400}
          />
        </div>
        <div className="author text-pry">
          <Icon icon="mingcute:user-3-line" />
          By {data?.author}
        </div>
        <div className="title">
          <h1 className="black-sec">{data?.title}</h1>
        </div>
        <div className="description">{data && parser(data?.description)}</div>
      </div>
      <BlogPagination prevBlog={prevBlog} nextBlog={nextBlog} />
    </div>
  );
};

export default BlogDesc;
