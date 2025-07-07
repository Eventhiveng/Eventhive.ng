import SectionHeader from "./SectionHeader";
import data from "@/util/data";
import Image from "next/image";

const Cities = () => {
  return (
    <section className="cities">
      <div className="container">
        <SectionHeader
          title={"Where"}
          heading={"Cities We Serve"}
          type={"double"}
        />
        {/* <p>Lagos . London . Kigali . Johannesburg . Nairobi . New York </p> */}
        <div className="cities-container">
          {data.citiesData.map((city, index) => (
            <div
              className="city-box"
              key={city.city}
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={`${100 * (index + 1)}`}
            >
              <div className="image">
                <Image
                  src={city.cityImg}
                  alt={city.city}
                  width={300}
                  height={200}
                  style={{ width: "100%", height: "auto" }}
                  priority
                />
              </div>
              <div className="city">
                <h2>{city.city}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cities;
