import { BlogPageData } from "@/util/types";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ data }: { data: BlogPageData }) => {
  return (
    <div className="blog-card">
      <div className="image">
        <Image
          src={data.imgLink}
          alt={data.title}
          width={400}
          height={250}
          className="blog-image"
        />
      </div>
      <div className="card-content">
        <div className="author text-pry">
          <Icon icon="mingcute:user-3-line" />
          {data.author}
        </div>
        <h2 className="black-sec">
          <Link href={data.slug}>{data.title}</Link>
        </h2>
        <p>{data.excerpt.substring(0, 150).padEnd(157, " .")}</p>
        <Link href={data.slug} className="btn btn-pry">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
