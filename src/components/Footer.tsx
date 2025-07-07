import { Icon } from "@iconify/react";
import data from "@/util/data";
import Link from "next/link";

const Footer = () => {
  const { eventPageData } = data;
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="container">
          <div className="footer-top">
            <div className="contact-us">
              <div className="footer-header">
                <h5>Contact Us</h5>
                <div className="line"></div>
              </div>
              <div className="contact">
                <div className="contact-box">
                  <div className="icon">
                    <Icon icon={"f7:phone"} hFlip={true} />
                  </div>
                  <div className="contact-detials">
                    <Link href="tel: +2347016673316">+2347016673316</Link>{" "}
                    <br />
                    <Link href="tel: +2349028112744">+2349028112744</Link>
                  </div>
                </div>
                <div className="contact-box">
                  <div className="icon">
                    <Icon icon={"quill:mail"} />
                  </div>
                  <div className="contact-detials">
                    <Link href="mailto: jamiu@eventhive.ng">
                      jamiu@eventhive.ng
                    </Link>
                    <br />
                    <Link href="mailto: malik@eventhive.ng">
                      malik@eventhive.ng
                    </Link>
                  </div>
                </div>
                <div className="contact-box">
                  <div className="icon">
                    <Icon icon="system-uicons:location" />
                  </div>
                  <div className="contact-detials">
                    <p>
                      Polystar Building, <br />
                      Lekki Phase 1, Lagos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="event">
              <div className="footer-header">
                <h5>Event Links</h5>
                <div className="line"></div>
              </div>
              <div className="event-links">
                <ul>
                  {eventPageData.map((event, index) => (
                    <li key={index}>
                      <Link href={event.extLink}>
                        <Icon icon="mingcute:right-line" /> {event.event}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="community">
              <div className="footer-header">
                <h5>Join Our Community</h5>
                <div className="line"></div>
              </div>
              <div className="subscribe">
                <p>
                  Get exclusive notifications about new events and early bird
                  tickets.
                </p>
                <form className="contact-form" action="">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email"
                      required
                    />

                    <button className="btn">
                      <Icon icon={"fa-solid:paper-plane"} />
                    </button>
                  </div>
                </form>
                <div className="footer-socials">
                  <h4>Follow Us:</h4>
                  <Link href="https://www.facebook.com/eventhive.ng">
                    <Icon icon="gg:facebook" />
                  </Link>
                  <Link href="https://twitter.com/eventhivedotng">
                    <Icon icon={"ri:twitter-x-fill"} />
                  </Link>
                  <Link href="https://www.instagram.com/eventhivedotng">
                    <Icon icon={"bi:instagram"} />
                  </Link>
                  <Link href="https://www.linkedin.com/company/eventhive-ng">
                    <Icon icon={"akar-icons:linkedin-fill"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="container">
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} | Events by Eventhive</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
