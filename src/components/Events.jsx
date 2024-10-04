import Carousel from "./Carousel";
import SectionHeader from "./SectionHeader";
import data from "../util/data";

const Events = () => {
  return (
    <section className="events">
      <div className="events-container">
        <div className="container">
          <SectionHeader
            title={"Events"}
            heading={"Upcoming Events"}
            type={"single"}
          />
          <a
            href="/calendar/2024-event-calendar.pdf"
            download
            className="btn btn-pry"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            Dowload 2024 Event Calendar
          </a>
        </div>
        <div className="events-wrapper">
          <Carousel data={data.eventData} />
        </div>
      </div>
    </section>
  );
};

export default Events;
