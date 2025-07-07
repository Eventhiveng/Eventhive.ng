"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      offset: 100,
      delay: 0,
    });

    // Refresh AOS when route changes
    return () => {
      AOS.refresh();
    };
  }, []);

  return null;
};

export default AOSInit;
