import { useEffect } from "react";
import PageHeader from "../components/PageHeader";
import EventAside from "../components/EventAside";
import EventContent from "../components/EventContent";
import data from "../util/data";
import { useParams } from "react-router";

const EventsPage = () => {
  const { slug } = useParams();

  const { eventPageData } = data;
  const selectedEvent = eventPageData.find((event) => event.slug === slug);

  useEffect(() => {
    document.title = "Events | Eventhive.ng";

    return () => {
      document.title = "Events | Eventhive.ng";
    };
  }, []);

  return (
    <main className="event-page">
      <PageHeader title={"Our Events"} bgdImg={"/images/headers/events.png"} />
      <div className="container">
        <div className="event-container">
          <EventAside
            data={eventPageData}
            selected={selectedEvent}
            slug={slug}
          />
          <EventContent data={selectedEvent} />
        </div>
      </div>
    </main>
  );
};

export default EventsPage;
