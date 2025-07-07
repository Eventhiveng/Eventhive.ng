const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <video
          src="/videos/bg-video.mp4"
          poster="/images/section-img/hero-bg.jpg"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
        >
          <source src="/videos/bg-video.mp4" type="video/mp4" />
        </video>

        <div className="container">
          <div className="hero-wrapper">
            <div
              className="years text-up"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <span></span>5 Years — 40+ Events
            </div>
            <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <span className="text-pry">
                Developing Africa&apos;s Businesses{" "}
              </span>
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
                Welcome to <span className="text-pry">Eventhive</span>, Africa’s
                leading B2B event servicing company with event portfolios across
                Oil & Gas, Technlogy, Finance, Aviation, Telecoms, International
                Trade, Power, Transport, Real Estate, PE/VC, Creative Economy
                and Insurance.
              </p>
              {/* <Link to="/about" className="text-pry text-up">
                Read more about us here
              </Link> */}
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
