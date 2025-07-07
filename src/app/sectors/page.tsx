import CoreSectors from "@/components/CoreSectors";
import CountUpComp from "@/components/CountUpComp";
import PageHeader from "@/components/PageHeader";
import Partners from "@/components/Partners";

export const metadata = {
  title: "Sectors | Eventhive.ng",
};

const Page = () => {
  return (
    <main className="sector-page">
      <PageHeader
        title={"Our Core Sectors"}
        bgdImg={"/images/headers/sectors.png"}
      />
      <div className="sector-page-container">
        <div className="container">
          <CoreSectors />
        </div>
      </div>
      <CountUpComp />
      <Partners />
    </main>
  );
};

export default Page;
