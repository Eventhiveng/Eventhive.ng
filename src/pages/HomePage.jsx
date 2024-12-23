import { useEffect } from "react";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import Sectors from "../components/Sectors";
import Events from "../components/Events";
import Blog from "../components/Blog";
import CountUpComp from "../components/CountUpComp";
import Partners from "../components/Partners";
import Cities from "../components/Cities";
import MarqueeBanner from "../components/MarqueeBanner";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Eventhive";

    return () => {
      document.title = "Home | Eventhive";
    };
  }, []);
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
      <MarqueeBanner />
    </main>
  );
};

export default Home;
