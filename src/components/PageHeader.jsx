import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, bgdImg }) => {
  return (
    <section
      className="page-header"
      style={{
        backgroundImage: `linear-gradient(to right, #00000080, #00000080), url(${bgdImg})`,
      }}
    >
      <div className="header-container">
        <div className="container">
          <h1>{title}</h1>
          <div className="navigator">
            <span>
              <Link to="/">
                <Icon icon="bxs:home" />
                Home
              </Link>
            </span>
            |<span>{title}</span>
            {/* {blog && (
              <>
                | <span>{blog}</span>
              </>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
