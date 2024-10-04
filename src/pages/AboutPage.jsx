import { useEffect } from "react";
import CountUpComp from "../components/CountUpComp";
import PageHeader from "../components/PageHeader";
import Partners from "../components/Partners";
import WhoWeAre from "../components/WhoWeAre";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About | Eventhive.ng";

    return () => {
      document.title = "About | Eventhive.ng";
    };
  }, []);
  return (
    <main className="about-page">
      <PageHeader title={"About Us"} bgdImg={"/images/headers/about.png"} />
      <WhoWeAre />
      <CountUpComp />
      <Partners />
    </main>
  );
};

export default AboutPage;
