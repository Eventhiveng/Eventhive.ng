import Blog from "@/components/Blog";
import Cities from "@/components/Cities";
import CountUpComp from "@/components/CountUpComp";
import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Sectors from "@/components/Sectors";
import WhatWeDo from "@/components/WhatWeDo";

export const metadata = {
  title: "Home | Eventhive.ng",
};

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <WhatWeDo />
      <Cities />
      <Sectors />
      <Events />
      <Blog />
      <CountUpComp />
      <Partners />
    </main>
  );
};

export default Home;
