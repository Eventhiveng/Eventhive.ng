import { EventPageData } from "@/util/types";
import { Icon } from "@iconify/react";
import Link from "next/link";

const EventComp = ({ element }: { element: EventPageData }) => {
  return (
    <div className="event-comp">
      <div className="image">
        <img src={element.banner} alt={element.event} />
      </div>
      <div className="info">
        <h4 className="black-sec">
          {element.event} <br /> -{element.date}
        </h4>

        <Link href={`/events/${element.slug}`}>
          See More <Icon icon="pajamas:arrow-right" />
        </Link>
      </div>
    </div>
  );
};

export default EventComp;
