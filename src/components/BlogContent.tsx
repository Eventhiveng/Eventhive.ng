import React from "react";
import BlogCard from "./BlogCard";
import { BlogPageData } from "@/util/types";

const BlogContent = ({ data }: { data: BlogPageData[] }) => {
  return (
    <article className="blog-content">
      {data.map((post) => (
        <BlogCard key={post.id} data={post} />
      ))}
    </article>
  );
};

export default BlogContent;
