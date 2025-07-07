"use client";

import { useMemo } from "react";
import CountUp from "react-countup";
import data from "@/util/data";

const CountUpComp = () => {
  const enableScrollSpy = useMemo(() => true, []);
  const scrollSpyOnce = useMemo(() => true, []);
  return (
    <section className="countup">
      <div className="container">
        <div className="countup-container">
          {data.counterData.map((item, index) => (
            <div key={index} className="countup-box">
              <div className="image">
                <img src={item.imgLink} alt={item.description} />
              </div>
              <h2>
                <CountUp
                  end={item.number}
                  enableScrollSpy={enableScrollSpy}
                  scrollSpyOnce={scrollSpyOnce}
                />
              </h2>
              <p>{item.description}</p>
              <div className="line"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountUpComp;
