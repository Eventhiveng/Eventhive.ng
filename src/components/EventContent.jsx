import { Icon } from "@iconify/react";
import parser from "html-react-parser";

const EventContent = ({ data }) => {
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
            <img src={data?.banner} alt="Eventhive" />
          </figure>
          <figure>
            <img src={data?.pic1} alt="Eventhive" />
          </figure>
        </div>
        <figure
          className="main-pic"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <img src={data?.pic2} alt="Eventhive" />
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
            <img src={data?.pic3} alt="Eventhive" />
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
