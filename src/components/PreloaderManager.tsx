"use client";

import { useEffect } from "react";

const PreloaderManager = () => {
  useEffect(() => {
    // Add a CSS class to the document element when preloader completes
    const handlePreloaderComplete = () => {
      document.documentElement.classList.add("preloader-complete");
    };

    window.addEventListener("preloaderComplete", handlePreloaderComplete);

    // Cleanup
    return () => {
      window.removeEventListener("preloaderComplete", handlePreloaderComplete);
    };
  }, []);

  // This component renders nothing, it only manages the CSS class
  return null;
};

export default PreloaderManager;
