import { Icon } from "@iconify/react";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";
import inimg from "../assets/img/how-img.png";

const GetInvolved = () => {
  return (
    <section className="get-involved">
      <div className="container">
        <div className="left">
          <SectionHeader
            title={"Sponsorship and Partnership"}
            heading={"Interested in learning how you can get involved?"}
            type={"single"}
          />
          <p>
            <b class="text-pry">Eventhive.ng</b> creates platforms where
            stakeholders can forge new relationships. We bring people and
            businesses together, because when they meet, ideas spark and
            connections are made.
          </p>
          <p>
            In a digital world, the importance of face-to-face interactions are
            more important than ever before.
            <b className="text-pry"> Our events &nbsp;</b>
            creates platforms for corporate organisations to showcase their
            products, services and ideas.
          </p>
          <p>
            Browse through &nbsp;
            <b>
              <Link
                to="/events/nigeria-economy-breakfast"
                class="text-pry"
                style={{ textDecoration: "underline" }}
              >
                our events
              </Link>
            </b>
            , to see any of them that resonates with your brand interest.
          </p>

          <div className="contacts">
            <div className="contact">
              <div className="icon">
                <Icon icon={"quill:mail"} />
              </div>
              <a href="mailto: malik@eventhive.ng">malik@eventhive.ng</a>
            </div>
            <div className="contact">
              <div className="icon">
                <Icon icon={"f7:phone"} hFlip={true} />
              </div>
              <a href="tel: +2349028112744">+2349028112744</a>
            </div>
          </div>
        </div>
        <div className="right">
          {/* <div className="vid"> */}
          <div className="image">
            <img src={inimg} alt={"Get Involved"} />
          </div>
          <div className="play">
            <a
              href="https://www.youtube.com/watch?v=LZ9d5y41O70&feature=youtu.be&ab_channel=NewsCentralTV"
              target="_blank"
            >
              <div className="play-button">
                <Icon icon="solar:play-broken" />
              </div>
            </a>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
