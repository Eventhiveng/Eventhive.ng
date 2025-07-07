import { EventPageData } from "@/util/types";
import { Icon } from "@iconify/react";
import Link from "next/link";
// import { Link } from "react-router-dom";

const EventAside = ({
  data,
  slug,
  selected,
}: {
  data: EventPageData[];
  slug: string;
  selected: EventPageData;
}) => {
  return (
    <aside className="event-aside">
      <div className="top">
        <ul className="event-page-links">
          {data?.map((event, index) => (
            <li
              key={index}
              className={`${event?.slug === slug ? "active" : ""}`}
            >
              <Link href={`/events/${event?.slug}`}>
                <Icon icon="flowbite:caret-right-solid" />
                {event?.event}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="bottom">
        <h4>Download Brochures</h4>
        <p>
          The delegate and speakers {selected?.event} will attract are
          unparalleled in their level of relevance and influence. Please
          download the Sponsorship brochure below and get in touch.
        </p>

        <div className="buttons">
          <a href={selected.extLink} className="btn">
            <Icon icon="fa-solid:link" /> Visit Site
          </a>
          <a href="#" className="btn">
            <Icon icon="ant-design:file-pdf-filled" /> Get brochure
          </a>
        </div>
      </div>
    </aside>
  );
};

export default EventAside;
