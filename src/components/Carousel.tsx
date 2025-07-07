"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
import EventComp from "./EventComp";
import BlogComp from "./BlogComp";
import BrandBox from "./BrandBox";
import { useEffect } from "react";
import { useState } from "react";
import { CarouselData, EventPageData, BlogPageData } from "@/util/types";

const Carousel = ({ data }: { data: CarouselData }) => {
  const { useFor, info, settings } = data;

  const [slidesToShow, setSlidesToShow] = useState(5);

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setSlidesToShow(Math.ceil(window.innerWidth / 150));
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSlidesToShow(Math.ceil(window.innerWidth / 150));
    }

    // Set up the resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (useFor === "event") {
    return (
      <Slider {...settings}>
        {(info as EventPageData[]).map((element, index) => (
          <EventComp element={element} key={index} />
        ))}
      </Slider>
    );
  } else if (useFor === "blog") {
    return (
      <Slider {...settings}>
        {(info as BlogPageData[]).map((element, index) => (
          <BlogComp element={element} key={index} />
        ))}
      </Slider>
    );
  } else if (useFor === "slideone") {
    const updatedSettings = {
      ...settings,
      slidesToShow,
    };

    return (
      <Slider {...updatedSettings}>
        {(info as string[]).map((element, index) => (
          <BrandBox key={index} brandLogo={element} />
        ))}
      </Slider>
    );
  } else if (useFor === "slidetwo") {
    const updatedSettings = {
      ...settings,
      slidesToShow,
    };

    return (
      <Slider {...updatedSettings}>
        {(info as string[]).map((element, index) => (
          <BrandBox key={index} brandLogo={element} />
        ))}
      </Slider>
    );
  }
};

export default Carousel;
