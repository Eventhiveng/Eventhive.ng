import { EventPageData } from "@/util/types";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const EventComp = ({ element }: { element: EventPageData }) => {
  return (
    <div className="event-comp">
      <div className="image">
        <Image
          src={element.banner}
          alt={element.event}
          width={350}
          height={200}
        />
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
