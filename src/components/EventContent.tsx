import { EventPageData } from "@/util/types";
import { Icon } from "@iconify/react";
import parser from "html-react-parser";
import Image from "next/image";

const EventContent = ({ data }: { data: EventPageData }) => {
  return (
    <article className="event-content">
      <div className="event-pictures">
        <div
          className="event-logos"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <figure>
            <Image
              src={data?.banner || ""}
              alt="Eventhive Event Banner"
              width={400}
              height={250}
            />
          </figure>
          <figure>
            <Image
              src={data?.pic1 || ""}
              alt="Eventhive Event"
              width={400}
              height={250}
            />
          </figure>
        </div>
        <figure
          className="main-pic"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <Image
            src={data?.pic2 || ""}
            alt="Eventhive Main Event"
            width={600}
            height={400}
          />
        </figure>
      </div>
      <div className="event-description">
        <h2>
          <a href={data?.extLink}>{data?.title}</a>
        </h2>
        <h4 className="text-up black-sec">{data?.location}</h4>
        {data && parser(data?.majorDesc)}
        <div className="image-text">
          <div className="text">{data && parser(data?.minorDesc)}</div>

          <figure className="imag">
            <Image
              src={data?.pic3 || ""}
              alt="Eventhive Event Detail"
              width={400}
              height={300}
            />
          </figure>
        </div>

        <div className="why">
          <h3 className="black-sec">Why Participate</h3>
          <ul>
            {data?.whyParticipate.map((element, index) => (
              <li key={index}>
                <Icon icon="fa-solid:angle-double-right" />
                {element}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default EventContent;
