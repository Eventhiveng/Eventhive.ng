import { Icon } from "@iconify/react";
import datum from "@/util/data";
import { BlogPageData } from "@/util/types";
import Link from "next/link";

const BlogAside = ({ data }: { data: BlogPageData[] }) => {
  const { eventPageData } = datum;
  return (
    <aside className="blog-aside">
      <div className="top">
        <h4 className="black-sec">Follow Us</h4>
        <div className="icons">
          <a href="https://www.facebook.com/eventhive.ng" target="_blank">
            <Icon icon={"ri:facebook-fill"} />
          </a>

          <a href="https://x.com/eventhivedotng" target="_blank">
            <Icon icon={"ri:twitter-x-fill"} />
          </a>

          <a
            href="https://www.linkedin.com/company/eventhive-ng"
            target="_blank"
          >
            <Icon icon={"akar-icons:linkedin-fill"} />
          </a>

          <a href="https://www.instagram.com/eventhivedotng" target="_blank">
            <Icon icon={"bi:instagram"} />
          </a>
        </div>
      </div>
      <div className="center">
        <h4 className="black-sec">Related Posts</h4>
        <div className="blog-box-container">
          {data.map((post) => (
            <div key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <div className="blog-box">
                  <div className="image">
                    <img src={post.imgLink} alt={post.title} />
                  </div>
                  <div className="title black-sec">{post.title}</div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom">
        <h4 className="black-sec">Visit Our Events</h4>
        <ul className="event-page-links">
          {eventPageData?.map((event, index) => (
            <li key={index}>
              <Link href={`/events/${event?.slug}`}>
                <Icon icon="flowbite:caret-right-solid" />
                {event?.event}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogAside;
