"use client";

import { useEffect, useState } from "react";

interface ContentWrapperProps {
  children: React.ReactNode;
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Listen for a custom event from the preloader
    const handlePreloaderComplete = () => {
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    };

    window.addEventListener("preloaderComplete", handlePreloaderComplete);

    // Also check if preloader is already gone (in case this mounts after preloader)
    const preloader = document.querySelector(".pre-loader");
    if (!preloader) {
      setShowContent(true);
    }

    return () => {
      window.removeEventListener("preloaderComplete", handlePreloaderComplete);
    };
  }, []);

  return (
    <div
      className={showContent ? "anin" : ""}
      style={{ opacity: showContent ? 1 : 0 }}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
