import BlogAside from "@/components/BlogAside";
import BlogContent from "@/components/BlogContent";
import PageHeader from "@/components/PageHeader";
import data from "@/util/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Blog | Eventhive - Business Insights & Event Updates" },
  description:
    "Stay updated with the latest insights on business networking, event management, and industry trends from Eventhive. Read expert articles about Nigeria's business landscape, technology, and economic developments.",
  keywords: [
    "eventhive blog",
    "business insights",
    "nigeria business news",
    "event management",
    "networking",
    "business development",
    "corporate events",
    "industry trends",
    "african business",
    "economic insights",
  ],
  openGraph: {
    title: "Blog | Eventhive - Business Insights & Event Updates",
    description:
      "Stay updated with the latest insights on business networking, event management, and industry trends from Eventhive.",
    type: "website",
    images: [
      {
        url: "/images/headers/blog.png",
        width: 1200,
        height: 630,
        alt: "Eventhive Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Eventhive - Business Insights & Event Updates",
    description:
      "Stay updated with the latest insights on business networking and event management from Eventhive.",
    images: ["/images/headers/blog.png"],
  },
  alternates: {
    canonical: "/blog",
  },
};

const Page = () => {
  const { blogPageData } = data;

  // Structured data for blog listing page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Eventhive Blog",
    description:
      "Business insights, event updates, and industry trends from Eventhive",
    url: "https://eventhive.ng/blog",
    publisher: {
      "@type": "Organization",
      name: "Eventhive",
      logo: {
        "@type": "ImageObject",
        url: "https://eventhive.ng/logo/logo.svg",
      },
    },
    blogPost: blogPageData.map((blog) => ({
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.excerpt,
      url: `https://eventhive.ng/blog/${blog.slug}`,
      image: blog.imgLink ? `https://eventhive.ng${blog.imgLink}` : undefined,
      author: {
        "@type": "Person",
        name: blog.author,
      },
    })),
  };

  return (
    <main className="blog-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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

export default Page;
