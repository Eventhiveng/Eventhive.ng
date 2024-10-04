import { Icon } from "@iconify/react";
import data from "../util/data";

const CoreSectors = () => {
  return (
    <div className="core-sectors">
      {data.sectorData.map((data, index) => (
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay={`${100 * (index + 1)}`}
          key={data.title}
          className="sectors-box"
        >
          <div className="icon">
            <Icon icon={data.icon} />
          </div>
          <h3 className="font-pop black-sec">{data.title}</h3>
          <p>{data.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CoreSectors;
