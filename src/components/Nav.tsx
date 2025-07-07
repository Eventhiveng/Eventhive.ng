"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Set mounted state to prevent hydration mismatch
    setIsMounted(true);

    const handleScroll = () => {
      setScroll(window.scrollY > 180);
    };

    // Check initial scroll position after mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  // Prevent hydration mismatch by not applying scroll class on server
  const navClassName = isMounted && scroll ? "sticky" : "";

  return (
    <nav className={navClassName}>
      <div className="top">
        <div className="container">
          <div className="con-soc">
            <div className="nav-contact">
              <ul>
                <li>
                  <Link href="tel:+2349028112744">
                    <Icon icon="f7:phone" hFlip={true} />
                    +2349028112744
                  </Link>
                </li>
                <li>
                  <Link href="mailto:malik@eventhive.ng">
                    <Icon icon="quill:mail" />
                    malik@eventhive.ng
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-socials">
              <ul>
                <li>
                  <Link
                    href="https://www.facebook.com/eventhive.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="ri:facebook-fill" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/eventhivedotng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="ri:twitter-x-fill" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/eventhive-ng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="akar-icons:linkedin-fill" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/eventhivedotng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="bi:instagram" />
                  </Link>
                </li>
                <li>
                  <Link href="#footer">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="md-logo">
            <Link href="/">
              <Image
                src="/logo/logo.svg"
                alt="Eventhive"
                width={140}
                height={40}
                priority
              />
            </Link>
          </div>
          <div className="nav-links">
            <ul>
              {[
                { path: "/about-us", label: "About Us" },
                { path: "/sectors", label: "Sectors" },
                { path: "/events/nigeria-economy-breakfast", label: "Events" },
                { path: "/gallery", label: "Gallery" },
                { path: "/blog", label: "Blog" },
                { path: "/get-involved", label: "Get Involved" },
              ].map(({ path, label }) => (
                <li key={path} className={pathname === path ? "current" : ""}>
                  <Link href={path}>{label}</Link>
                </li>
              ))}
              <li className="has-submenu">
                <Link href="#">
                  Download Calendar <Icon icon="typcn:arrow-sorted-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="/calendar/2025-events-calendar.pdf" download>
                      Download 2025 Calendar
                    </Link>
                  </li>
                  <li>
                    <Link href="/calendar/2024-event-calendar.pdf" download>
                      Download 2024 Calendar
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div
            onClick={toggleMobileNav}
            className={`mobile-toggler ${
              mobileNavOpen ? "mobile-nav-active" : ""
            }`}
            aria-label="Toggle mobile navigation"
          >
            <div className="toggle-container">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
      <aside
        className={`mobile-navigations ${
          mobileNavOpen ? "mobile-nav-active" : ""
        }`}
      >
        <div className="mobile-navigation-container">
          <div
            onClick={toggleMobileNav}
            className="cancel"
            aria-label="Close mobile navigation"
          >
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="mobile-nav-links">
            <ul>
              {[
                { path: "/about-us", label: "About Us" },
                { path: "/sectors", label: "Sectors" },
                { path: "/events/nigeria-economy-breakfast", label: "Events" },
                { path: "/gallery", label: "Gallery" },
                { path: "/blog", label: "Blog" },
                { path: "/get-involved", label: "Get Involved" },
              ].map(({ path, label }) => (
                <li key={path} className={pathname === path ? "current" : ""}>
                  <Link href={path} onClick={toggleMobileNav}>
                    {label}
                  </Link>
                </li>
              ))}
              <li className="has-submenu">
                <Link href="#">
                  Download Calendar <Icon icon="typcn:arrow-sorted-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link href="/calendar/2025-events-calendar.pdf" download>
                      Download 2025 Calendar
                    </Link>
                  </li>
                  <li>
                    <Link href="/calendar/2024-event-calendar.pdf" download>
                      Download 2024 Calendar
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="mobile-socials">
            <ul>
              {[
                {
                  href: "https://www.facebook.com/eventhive.ng",
                  icon: "ri:facebook-fill",
                },
                {
                  href: "https://x.com/eventhivedotng",
                  icon: "ri:twitter-x-fill",
                },
                {
                  href: "https://www.linkedin.com/company/eventhive-ng",
                  icon: "akar-icons:linkedin-fill",
                },
                {
                  href: "https://www.instagram.com/eventhivedotng",
                  icon: "bi:instagram",
                },
              ].map(({ href, icon }) => (
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={icon}
                >
                  <li>
                    <Icon icon={icon} />
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </nav>
  );
};

export default Nav;

// "use client";

// import { Icon } from "@iconify/react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// // import { Link, useLocation } from "react-router-dom";

// const Nav = () => {
//   const [mobileNavOpen, setMobileNavOpen] = useState(false);
//   const [scroll, setScroll] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScroll(window.scrollY > 180);
//     };

//     // Check initial scroll position
//     handleScroll();

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMobileNav = () => {
//     setMobileNavOpen((prev) => !prev);
//   };

//   return (
//     <nav className={scroll ? "sticky" : ""}>
//       <div className="top">
//         <div className="container">
//           <div className="con-soc">
//             <div className="nav-contact">
//               <ul>
//                 <li>
//                   <Link href="tel:+2349028112744">
//                     <Icon icon="f7:phone" hFlip={true} />
//                     +2349028112744
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="mailto:malik@eventhive.ng">
//                     <Icon icon="quill:mail" />
//                     malik@eventhive.ng
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="nav-socials">
//               <ul>
//                 <li>
//                   <Link
//                     href="https://www.facebook.com/eventhive.ng"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Icon icon="ri:facebook-fill" />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="https://x.com/eventhivedotng"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Icon icon="ri:twitter-x-fill" />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="https://www.linkedin.com/company/eventhive-ng"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Icon icon="akar-icons:linkedin-fill" />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     href="https://www.instagram.com/eventhivedotng"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Icon icon="bi:instagram" />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="#footer">Contact</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bottom">
//         <div className="container">
//           <div className="md-logo">
//             <Link href="/">
//               <img src="/logo/logo.svg" alt="Eventhive" />
//             </Link>
//           </div>
//           <div className="nav-links">
//             <ul>
//               {[
//                 // { path: "/", label: "Home" },
//                 { path: "/about-us", label: "About Us" },
//                 { path: "/sectors", label: "Sectors" },
//                 { path: "/events/nigeria-economy-breakfast", label: "Events" },
//                 { path: "/gallery", label: "Gallery" },
//                 { path: "/blog", label: "Blog" },
//                 { path: "/get-involved", label: "Get Involved" },
//               ].map(({ path, label }) => (
//                 <li key={path} className={pathname === path ? "current" : ""}>
//                   <Link href={path}>{label}</Link>
//                 </li>
//               ))}
//               <li className="has-submenu">
//                 <Link href="#">
//                   Download Calendar <Icon icon="typcn:arrow-sorted-down" />
//                 </Link>
//                 <ul className="submenu">
//                   <li>
//                     <Link href="/calendar/2025-events-calendar.pdf" download>
//                       Download 2025 Calendar
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/calendar/2024-event-calendar.pdf" download>
//                       Download 2024 Calendar
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//           <div
//             onClick={toggleMobileNav}
//             className={`mobile-toggler ${
//               mobileNavOpen ? "mobile-nav-active" : ""
//             }`}
//             aria-label="Toggle mobile navigation"
//           >
//             <div className="toggle-container">
//               <div className="line"></div>
//               <div className="line"></div>
//               <div className="line"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <aside
//         className={`mobile-navigations ${
//           mobileNavOpen ? "mobile-nav-active" : ""
//         }`}
//       >
//         <div className="mobile-navigation-container">
//           <div
//             onClick={toggleMobileNav}
//             className="cancel"
//             aria-label="Close mobile navigation"
//           >
//             <div className="line"></div>
//             <div className="line"></div>
//           </div>
//           <div className="mobile-nav-links">
//             <ul>
//               {[
//                 // { path: "/", label: "Home" },
//                 { path: "/about-us", label: "About Us" },
//                 { path: "/sectors", label: "Sectors" },
//                 { path: "/events/nigeria-economy-breakfast", label: "Events" },
//                 { path: "/gallery", label: "Gallery" },
//                 { path: "/blog", label: "Blog" },
//                 { path: "/get-involved", label: "Get Involved" },
//               ].map(({ path, label }) => (
//                 <li key={path} className={pathname === path ? "current" : ""}>
//                   <Link href={path} onClick={toggleMobileNav}>
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//               <li className="has-submenu">
//                 <Link href="#">
//                   Download Calendar <Icon icon="typcn:arrow-sorted-down" />
//                 </Link>
//                 <ul className="submenu">
//                   <li>
//                     <Link href="/calendar/2025-events-calendar.pdf" download>
//                       Download 2025 Calendar
//                     </Link>
//                   </li>
//                   <li>
//                     <Link href="/calendar/2024-event-calendar.pdf" download>
//                       Download 2024 Calendar
//                     </Link>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//           <div className="mobile-socials">
//             <ul>
//               {[
//                 {
//                   href: "https://www.facebook.com/eventhive.ng",
//                   icon: "ri:facebook-fill",
//                 },
//                 {
//                   href: "https://x.com/eventhivedotng",
//                   icon: "ri:twitter-x-fill",
//                 },
//                 {
//                   href: "https://www.linkedin.com/company/eventhive-ng",
//                   icon: "akar-icons:linkedin-fill",
//                 },
//                 {
//                   href: "https://www.instagram.com/eventhivedotng",
//                   icon: "bi:instagram",
//                 },
//               ].map(({ href, icon }) => (
//                 <Link
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   key={icon}
//                 >
//                   <li>
//                     <Icon icon={icon} />
//                   </li>
//                 </Link>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </aside>
//     </nav>
//   );
// };

// export default Nav;
