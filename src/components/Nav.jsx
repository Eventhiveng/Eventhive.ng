import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const { pathname: path } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 180);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  return (
    <nav className={scroll ? "sticky" : ""}>
      <div className="top">
        <div className="container">
          <div className="con-soc">
            <div className="nav-contact">
              <ul>
                <li>
                  <a href="tel:+2349028112744">
                    <Icon icon="f7:phone" hFlip={true} />
                    +2349028112744
                  </a>
                </li>
                <li>
                  <a href="mailto:malik@eventhive.ng">
                    <Icon icon="quill:mail" />
                    malik@eventhive.ng
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-socials">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/eventhive.ng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="ri:facebook-fill" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/eventhivedotng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="ri:twitter-x-fill" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/eventhive-ng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="akar-icons:linkedin-fill" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/eventhivedotng"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="bi:instagram" />
                  </a>
                </li>
                <li>
                  <a href="#footer">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="md-logo">
            <Link to="/">
              <img src="/logo/logo.svg" alt="Eventhive" />
            </Link>
          </div>
          <div className="nav-links">
            <ul>
              {[
                // { path: "/", label: "Home" },
                { path: "/about-us", label: "About Us" },
                { path: "/sectors", label: "Sectors" },
                { path: "/events/nigeria-economy-breakfast", label: "Events" },
                { path: "/gallery", label: "Gallery" },
                { path: "/blog", label: "Blog" },
                { path: "/get-involved", label: "Get Involved" },
              ].map(({ path: linkPath, label }) => (
                <li
                  key={linkPath}
                  className={path === linkPath ? "current" : ""}
                >
                  <Link to={linkPath}>{label}</Link>
                </li>
              ))}
              <li className="has-submenu">
                <a href="#">
                  Download Calendar <Icon icon="typcn:arrow-sorted-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/calendar/2025-events-calendar.pdf" download>
                      Download 2025 Calendar
                    </a>
                  </li>
                  <li>
                    <a href="/calendar/2024-event-calendar.pdf" download>
                      Download 2024 Calendar
                    </a>
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
                // { path: "/", label: "Home" },
                { path: "/about-us", label: "About Us" },
                { path: "/sectors", label: "Sectors" },
                { path: "/events/nigeria-economy-breakfast", label: "Events" },
                { path: "/gallery", label: "Gallery" },
                { path: "/blog", label: "Blog" },
                { path: "/get-involved", label: "Get Involved" },
              ].map(({ path: linkPath, label }) => (
                <li
                  key={linkPath}
                  className={path === linkPath ? "current" : ""}
                >
                  <Link to={linkPath} onClick={toggleMobileNav}>
                    {label}
                  </Link>
                </li>
              ))}
              <li className="has-submenu">
                <a href="#">
                  Download Calendar <Icon icon="typcn:arrow-sorted-down" />
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/calendar/2025-events-calendar.pdf" download>
                      Download 2025 Calendar
                    </a>
                  </li>
                  <li>
                    <a href="/calendar/2024-event-calendar.pdf" download>
                      Download 2024 Calendar
                    </a>
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
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={icon}
                >
                  <li>
                    <Icon icon={icon} />
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </nav>
  );
};

export default Nav;
