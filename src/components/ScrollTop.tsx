"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setShowButton(window.pageYOffset > 300);
    };

    // Check initial scroll position after mount
    handleScroll();

    // Add passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Don't render on server to prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <button
      className={`scroll-to-top-button ${showButton ? "show" : ""}`}
      onClick={scrollToTop}
      title="Scroll to top"
      aria-label="Scroll to top"
    >
      <Icon icon="bi:arrow-up" />
    </button>
  );
};

export default ScrollTop;

// "use client";

// import { Icon } from "@iconify/react";
// import { useEffect, useState } from "react";

// const ScrollTop = () => {
//   const [showButton, setShowButton] = useState(false);
//   const [isMounted, setIsMounted] = useState(false);

//   // const handleScroll = () => {
//   //   if (typeof window !== "undefined" && window.pageYOffset > 300) {
//   //     setShowButton(true);
//   //   } else {
//   //     setShowButton(false);
//   //   }
//   // };

//   const scrollToTop = () => {
//     if (typeof window !== "undefined") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     setIsMounted(true);

//     const handleScroll = () => {
//       if (window.pageYOffset > 300) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }
//     };

//     // Check initial scroll position
//     handleScroll();

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup function to remove event listener
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Don't render anything on server-side to prevent hydration mismatch
//   if (!isMounted) {
//     return null;
//   }

//   return (
//     <button
//       className={`scroll-to-top-button ${showButton ? "show" : ""}`}
//       onClick={scrollToTop}
//       title="Scroll to top"
//     >
//       <Icon icon="bi:arrow-up" />
//     </button>
//   );
// };

// export default ScrollTop;
