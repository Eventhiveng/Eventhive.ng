import Marquee from "react-fast-marquee";
import data from "@/util/data";
import { getNextUpcomingEvent } from "@/util/eventSort";

const MarqueeBanner = () => {
  const nextEvent = getNextUpcomingEvent(
    data.eventPageData.filter((e) => e.eventStatus === "active")
  );
  const nextEventText = nextEvent
    ? `Upcoming event: ${nextEvent.event} (${nextEvent.eventDate}).`
    : "Upcoming event: TBA.";

  const marqueeData = [
    {
      ann: "Developing Africa's Businesses via face-to-face events",
      upcoming: nextEventText,
      icon: "favicon.ico",
    },
    {
      ann: "Developing Africa's Businesses via face-to-face events",
      upcoming: nextEventText,
      icon: "favicon.ico",
    },
    {
      ann: "Developing Africa's Businesses via face-to-face events",
      upcoming: nextEventText,
      icon: "favicon.ico",
    },
  ];

  return (
    <section className="marquee-section">
      <Marquee gradient={false} speed={50} className="marquee-slide">
        {marqueeData.map((datum, index) => (
          <div key={index} className="marquee-item">
            <div>
              <span>{datum.ann}</span>
            </div>
            <div className="icon">
              <img src={datum.icon} alt="icon" />
            </div>
            <div>
              <span>{datum.upcoming}</span>
            </div>
            <div className="icon">
              <img src={datum.icon} alt="icon" />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default MarqueeBanner;
