import { SectionHeaderType } from "@/util/types";

const SectionHeader = ({ type, title, heading }: SectionHeaderType) => {
  if (type === "double") {
    return (
      <div className="section-header">
        <div data-aos="fade-up" data-aos-duration="800" className="double">
          <span className="line start-line"></span>
          <span className="text-up">{title}</span>
          <span className="line end-line"></span>
        </div>
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          className="black-sec"
        >
          {heading}
        </h2>
      </div>
    );
  } else if (type === "single") {
    return (
      <div className="section-header">
        <div data-aos="fade-up" data-aos-duration="800" className="single">
          <span className="text-up">{title}</span>
          <span className="line end-line"></span>
        </div>
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="100"
          className="white"
        >
          {heading}
        </h2>
      </div>
    );
  }
};

export default SectionHeader;
