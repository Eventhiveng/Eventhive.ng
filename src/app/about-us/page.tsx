import React from "react";
import CountUpComp from "@/components/CountUpComp";
import PageHeader from "@/components/PageHeader";
import Partners from "@/components/Partners";
import WhoWeAre from "@/components/WhoWeAre";

export const metadata = {
  title: "About",
};

const Page = () => {
  // Next.js now recommends setting metadata using the metadata export.
  // Remove useEffect and instead export metadata for the page:
  return (
    <main className="about-page">
      <PageHeader title={"About Us"} bgdImg={"/images/headers/about.png"} />
      <WhoWeAre />
      <CountUpComp />
      <Partners />
    </main>
  );
};

export default Page;
