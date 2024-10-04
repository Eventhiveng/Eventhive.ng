import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const EventComp = ({ element }) => {
  return (
    <div className="event-comp">
      <div className="image">
        <img src={element.imgLink} alt={element.event} />
      </div>
      <div className="info">
        <h4 className="black-sec">
          {element.event} <br /> -{element.date}
        </h4>

        <Link to={`/events/${element.slug}`}>
          See More <Icon icon="pajamas:arrow-right" />
        </Link>
      </div>
    </div>
  );
};

export default EventComp;
