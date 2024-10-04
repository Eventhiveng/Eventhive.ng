import CoreSectors from "./CoreSectors";
import SectionHeader from "./SectionHeader";

const Sectors = () => {
  return (
    <section className="sectors">
      <div className="container">
        <SectionHeader
          title={"Sectors"}
          heading={"Our Core Sectors"}
          type={"double"}
        />
        <CoreSectors />
      </div>
    </section>
  );
};

export default Sectors;
