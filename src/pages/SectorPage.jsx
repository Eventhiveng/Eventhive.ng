import { useEffect } from "react";
import CoreSectors from "../components/CoreSectors";
import CountUpComp from "../components/CountUpComp";
import PageHeader from "../components/PageHeader";
import Partners from "../components/Partners";

const SectorPage = () => {
  useEffect(() => {
    document.title = "Sectors | Eventhive";

    return () => {
      document.title = "Sectors | Eventhive";
    };
  }, []);
  return (
    <main className="sector-page">
      <PageHeader
        title={"Our Core Sectors"}
        bgdImg={"/images/headers/sectors.png"}
      />
      <div className="sector-page-container">
        <div className="container">
          <CoreSectors all={true} />
        </div>
      </div>
      <CountUpComp />
      <Partners />
    </main>
  );
};

export default SectorPage;
