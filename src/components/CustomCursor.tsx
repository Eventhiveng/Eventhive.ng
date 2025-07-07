"use client";

import React from "react";

const CustomCursor = () => {
  const cursorSm = React.useRef<HTMLDivElement>(null);
  const cursorLg = React.useRef<HTMLDivElement>(null);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  React.useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      if (cursorSm.current && cursorLg.current) {
        positionRef.current.mouseX = mouseX - cursorSm.current.clientWidth / 2;
        positionRef.current.mouseY = mouseY - cursorSm.current.clientHeight / 2;
        positionRef.current.mouseX = mouseX - cursorLg.current.clientWidth / 2;
        positionRef.current.mouseY = mouseY - cursorLg.current.clientHeight / 2;
      }
    });

    return () => {};
  }, []);

  React.useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      if (cursorSm.current && cursorLg.current) {
        cursorSm.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
        cursorLg.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };
    followMouse();

    return () => {
      if (positionRef.current.key !== -1) {
        cancelAnimationFrame(positionRef.current.key);
      }
    };
  }, []);
  return (
    <>
      <div className="cs-cursor_lg" ref={cursorLg}></div>
      <div className="cs-cursor_sm" ref={cursorSm}></div>
    </>
  );
};

export default CustomCursor;

// import React from "react";

// const CustomCursor = () => {
//   const cursorSm = React.useRef<HTMLDivElement>(null);
//   const cursorLg = React.useRef<HTMLDivElement>(null);
//   const [isMounted, setIsMounted] = React.useState(false);
//   const positionRef = React.useRef({
//     mouseX: 0,
//     mouseY: 0,
//     destinationX: 0,
//     destinationY: 0,
//     distanceX: 0,
//     distanceY: 0,
//     key: -1,
//   });

//   React.useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   React.useEffect(() => {
//     if (!isMounted) return;

//     const handleMouseMove = (event: MouseEvent) => {
//       const mouseX = event.clientX;
//       const mouseY = event.clientY;

//       positionRef.current.mouseX = mouseX;
//       positionRef.current.mouseY = mouseY;
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [isMounted]);

//   React.useEffect(() => {
//     if (!isMounted) return;

//     const followMouse = () => {
//       positionRef.current.key = requestAnimationFrame(followMouse);
//       const {
//         mouseX,
//         mouseY,
//         destinationX,
//         destinationY,
//         distanceX,
//         distanceY,
//       } = positionRef.current;

//       if (!destinationX || !destinationY) {
//         positionRef.current.destinationX = mouseX;
//         positionRef.current.destinationY = mouseY;
//       } else {
//         positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
//         positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
//         if (
//           Math.abs(positionRef.current.distanceX) +
//             Math.abs(positionRef.current.distanceY) <
//           0.1
//         ) {
//           positionRef.current.destinationX = mouseX;
//           positionRef.current.destinationY = mouseY;
//         } else {
//           positionRef.current.destinationX += distanceX;
//           positionRef.current.destinationY += distanceY;
//         }
//       }

//       if (cursorSm.current && cursorLg.current) {
//         cursorSm.current.style.transform = `translate3d(${positionRef.current.destinationX}px, ${positionRef.current.destinationY}px, 0)`;
//         cursorLg.current.style.transform = `translate3d(${positionRef.current.destinationX}px, ${positionRef.current.destinationY}px, 0)`;
//       }
//     };

//     followMouse();

//     return () => {
//       if (positionRef.current.key !== -1) {
//         cancelAnimationFrame(positionRef.current.key);
//       }
//     };
//   }, [isMounted]);

//   // Don't render on server-side to prevent hydration mismatch
//   if (!isMounted) {
//     return null;
//   }
//   return (
//     <>
//       <div className="cs-cursor_lg" ref={cursorLg}></div>
//       <div className="cs-cursor_sm" ref={cursorSm}></div>
//     </>
//   );
// };

// export default CustomCursor;
