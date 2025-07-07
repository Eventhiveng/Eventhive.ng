import { BlogPageData } from "@/util/types";
import { Icon } from "@iconify/react";
import Link from "next/link";

const BlogComp = ({ element }: { element: BlogPageData }) => {
  return (
    <div className="blog-comp">
      <div className="image">
        <img src={element.imgLink} alt={element.title} />
      </div>
      <div className="blog-info">
        <div className="author">
          <Icon icon="mingcute:user-2-fill" /> By {element.author}
        </div>
        <h4 className="black-sec">
          <Link href={`/blog/${element.slug}`}>{element.title}</Link>
        </h4>
        <p>{element.excerpt.substr(0, 150).padEnd(157, " .")}</p>
        <Link href={`/blog/${element.slug}`} className="more">
          Read More <Icon icon="pajamas:arrow-right" />
        </Link>
      </div>
    </div>
  );
};

export default BlogComp;
