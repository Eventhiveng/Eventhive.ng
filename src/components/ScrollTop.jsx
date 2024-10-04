import { Icon } from "@iconify/react";
import { useState } from "react";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <button
      className={`scroll-to-top-button ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
      title="Scroll to top"
    >
      <Icon icon="bi:arrow-up" />
    </button>
  );
};

export default ScrollTop;
