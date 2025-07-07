"use client";

import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide preloader after 3 seconds or when the page is fully loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Also hide when the page is fully loaded
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Dispatch custom event to notify other components
      window.dispatchEvent(new CustomEvent("preloaderComplete"));

      // Add a small delay for fade-out animation
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 500);

      return () => {
        clearTimeout(fadeTimer);
      };
    }
  }, [isLoading]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="pre-loader"
      style={{
        opacity: isLoading ? 1 : 0,
        transition: "opacity 0.5s ease-out",
      }}
    >
      <div className="pre-loader-image">
        <img src="/logo/logo.svg" alt="Eventhive" />
        <div className="line"></div>
      </div>

      <div className="ann">
        <h4>
          <em>
            celebrating <span>5years</span> of excellence...
          </em>
        </h4>
      </div>
    </div>
  );
};

export default Preloader;
