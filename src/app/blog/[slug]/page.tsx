import React from "react";
import BlogAside from "@/components/BlogAside";
import BlogDesc from "@/components/BlogDesc";
import data from "@/util/data";
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";
// import { useParams } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { blogPageData } = data;
  const blog = blogPageData.find((blog) => blog.slug === slug);

  if (!blog) {
    return {
      title: { absolute: "Blog Not Found | Eventhive" },
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: { absolute: `${blog.title} | Eventhive Blog` },
    description:
      blog.excerpt ||
      `Read about ${blog.title} on Eventhive - Nigeria's premier event management platform.`,
    keywords: [
      blog.title,
      blog.author,
      "eventhive blog",
      "nigeria events",
      "event management",
      "business networking",
      "corporate events",
      "business insights",
    ],
    openGraph: {
      title: `${blog.title} | Eventhive Blog`,
      description:
        blog.excerpt ||
        `Read about ${blog.title} on Eventhive - Nigeria's premier event management platform.`,
      type: "article",
      images: [
        {
          url: blog.imgLink || "/images/blog/default-blog.jpg",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      authors: [blog.author],
      section: "Business",
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Eventhive Blog`,
      description: blog.excerpt || `Read about ${blog.title} on Eventhive.`,
      images: [blog.imgLink || "/images/blog/default-blog.jpg"],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
    authors: [{ name: blog.author }],
  };
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const { blogPageData } = data;
  const selectedIndex = blogPageData.findIndex((blog) => blog.slug === slug);
  const selectedBlog = blogPageData[selectedIndex];

  const prevIndex =
    (selectedIndex - 1 + blogPageData.length) % blogPageData.length;
  const nextIndex = (selectedIndex + 1) % blogPageData.length;

  const prevBlog = blogPageData[prevIndex];
  const nextBlog = blogPageData[nextIndex];

  if (!selectedBlog) {
    return null;
  }

  // Structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: selectedBlog.title,
    description: selectedBlog.excerpt,
    image: selectedBlog.imgLink
      ? `https://eventhive.ng${selectedBlog.imgLink}`
      : undefined,
    author: {
      "@type": "Person",
      name: selectedBlog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Eventhive",
      logo: {
        "@type": "ImageObject",
        url: "https://eventhive.ng/logo/logo.svg",
      },
    },
    url: `https://eventhive.ng/blog/${slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://eventhive.ng/blog/${slug}`,
    },
  };

  return (
    <main className="single-blog-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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

export default Page;
