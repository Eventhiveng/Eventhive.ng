import SectionHeader from "./SectionHeader";

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="container">
        <SectionHeader title={"Focus"} heading={"What We Do"} type={"double"} />
        <div className="what-we-do-container">
          <div className="left">
            <h2
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              Convening leading industry stakeholders and decision makers.
            </h2>
            <p
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              We work very hard to bring stakeholders together, creating
              opportunities for them to network, learn and do business. We
              operate in the heart of knowledge and information economy within
              major sectors in Africa. We enable business to grow through
              connecting them with knowledge, ideas and oportunities.
            </p>
            <p
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              We use our conferences and exhibitions in helping businesses
              across Africa to target new business, showcase their products,
              build deeper relationships with their clients and identify new
              opportunities or performance and improvement.
            </p>
          </div>
          <div
            className="right"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <img
              src="/images/section-img/focus-img.jpg"
              alt="What we do at EventHive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
