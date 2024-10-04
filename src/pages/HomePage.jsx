import { useEffect } from "react";
import Hero from "../components/Hero";
import Sectors from "../components/Sectors";
import Events from "../components/Events";
import Blog from "../components/Blog";
import CountUpComp from "../components/CountUpComp";
import Partners from "../components/Partners";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Eventhive.ng";

    return () => {
      document.title = "Home | Eventhive.ng";
    };
  }, []);
  return (
    <main className="home-page">
      <Hero />
      <Sectors />
      <Events />
      <Blog />
      <CountUpComp />
      <Partners />
    </main>
  );
};

export default Home;
