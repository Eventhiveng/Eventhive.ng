import Marquee from "react-fast-marquee";

const MarqueeBanner = () => {
  const marqueeData = [
    {
      ann: "Developing Africa's Businesses via face-to-face events",
      upcoming: "Upcoming event: Lagos Tech Fest",
      icon: "favicon.ico",
    },
    {
      ann: "Developing Africa's Businesses via face-to-face events",
      upcoming: "Upcoming event: Lagos Tech Fest",
      icon: "favicon.ico",
    },
    {
      ann: "Developing Africa's Businesses via face-to-face events",
      upcoming: "Upcoming event: Lagos Tech Fest",
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
