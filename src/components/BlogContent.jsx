import React from "react";
import BlogCard from "./BlogCard";

const BlogContent = ({ data }) => {
  return (
    <article className="blog-content">
      {data.map((post) => (
        <BlogCard key={post.id} data={post} />
      ))}
    </article>
  );
};

export default BlogContent;
