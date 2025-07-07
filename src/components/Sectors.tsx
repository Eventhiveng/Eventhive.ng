import Link from "next/link";
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
        <CoreSectors all={false} />
        <Link href="/sectors" className="btn btn-pry">
          View all
        </Link>
      </div>
    </section>
  );
};

export default Sectors;
