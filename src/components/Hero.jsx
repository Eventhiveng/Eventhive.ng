import { Link } from "react-router-dom";
import bgdVideo from "../assets/video/bg-video.mp4";
import poster from "../assets/img/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <video
          src={bgdVideo}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
        >
          <source src={bgdVideo} type="video/mp4" />
        </video>

        <div className="container">
          <div className="hero-wrapper">
            <div
              className="years text-up"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <span></span>3 Years — 13 Events
            </div>
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <span className="text-pry">Developing Africa's Businesses </span>
              via face-to-face events
            </h2>
            <div
              className="welcome"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
              data-aos-offset="10"
            >
              <p>
                Welcome to <span className="text-pry">Eventhive.ng</span>, West
                Africa’s leading B2B event servicing company with event
                portfolios across Oil & Gas, Power, Transport, Real Estate,
                Construction, Agribusiness, and Tech.
              </p>
              <Link to="/about" className="text-pry text-up">
                Read more about us here
              </Link>
            </div>

            <a
              href="/calendar/2025-events-calendar.pdf"
              download
              className="btn btn-pry"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-offset="-100"
            >
              Dowload 2025 Event Calendar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
