import Carousel from "./Carousel";
import data from "@/util/data";

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners-container">
        <Carousel data={data.slideOneData} />
        <Carousel data={data.slideTwoData} />
      </div>
    </section>
  );
};

export default Partners;
