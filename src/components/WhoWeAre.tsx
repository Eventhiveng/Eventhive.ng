import SectionHeader from "./SectionHeader";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
      <div className="container">
        <div className="left">
          <SectionHeader
            type={"single"}
            title={"About Us"}
            heading={"Who We Are"}
          />
          <div
            className="about-content"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <p>
              <b className="text-pry">Eventhive</b> is one of the fastest
              growing PR Firm in Nigeria with core competencies in developing
              Africa&apos;s businesses via face-to-face events. We work very
              hard to bring stakeholders together, creating opportunities for
              them to network, learn and do business.
            </p>
            <p>
              We operate in the heart of knowledge and information economy
              within major sectors in Africa. We enable businesses to grow
              through connecting them with knowledge, ideas and opportunities.
            </p>
            <p>
              We use our conferences and exhibitions in helping businesses
              across Africa to target new business, showcase their products,
              build deeper relationships with their clients and identify new
              opportunities for performance and improvement.
            </p>
            <p>
              Our services help organizations to communicate their brand values
              and strengthen their thought leadership.
            </p>
          </div>

          <a
            href="/calendar/2026-eventhive-calender.pdf"
            download
            className="btn btn-pry"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delat="300"
          >
            Download 2026 Event Calendar
          </a>
        </div>
        <div
          className="right"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <Image
            src="/images/section-img/about-img.png"
            alt="About EventHive"
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
