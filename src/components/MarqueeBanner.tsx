import Marquee from "react-fast-marquee";

const MarqueeBanner = () => {
  const marqueeData = [
    {
      ann: "Eventhive at 5: Celebrating 5years of excellence",
      upcoming:
        "Upcoming event: Nigeria Private Equity/Venture Capital Outlook",
      icon: "favicon.ico",
    },
    {
      ann: "Eventhive at 5: Celebrating 5years of excellence",
      upcoming:
        "Upcoming event: Nigeria Private Equity/Venture Capital Outlook",
      icon: "favicon.ico",
    },
    {
      ann: "Eventhive at 5: Celebrating 5years of excellence",
      upcoming:
        "Upcoming event: Nigeria Private Equity/Venture Capital Outlook",
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
