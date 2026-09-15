import { Icon } from "@iconify/react";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { openRoles } from "@/util/jobs";

const Careers = () => {
  return (
    <>
      <section className="careers-intro">
        <div className="container">
          <SectionHeader
            type="double"
            title="We're hiring"
            heading="Build the rooms where Africa does business"
          />
          <p
            className="intro-copy"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="150"
          >
            We are hiring across operations, content and sponsorship sales.
            Each role is full-time and fully remote, with Lagos event days
            when the work needs you in the room. Click a role to read the
            full description and apply.
          </p>
        </div>
      </section>

      <section className="careers-roles" id="open-roles">
        <div className="container">
          <div className="section-header">
            <div data-aos="fade-up" data-aos-duration="800" className="single">
              <span className="text-up">Open roles</span>
              <span className="line end-line"></span>
            </div>
          </div>
          <div className="roles-grid">
            {openRoles.map((role, index) => (
              <Link
                className="job-card"
                key={role.id}
                href={role.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={`${120 * (index + 1)}`}
              >
                <div className="job-card-top">
                  <div className="icon">
                    <Icon icon={role.icon} />
                  </div>
                  <span className="role-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-pop black-sec">{role.title}</h3>
                <div className="job-tags">
                  <span>
                    <Icon icon="solar:map-point-bold" />
                    {role.location}
                  </span>
                  <span>
                    <Icon icon="mdi:briefcase-outline" />
                    {role.employmentType}
                  </span>
                  <span>
                    <Icon icon="solar:home-wifi-bold" />
                    {role.workStyle}
                  </span>
                  <span>
                    <Icon icon="solar:wallet-money-bold" />
                    {role.salary}
                  </span>
                  {role.experience && (
                    <span>
                      <Icon icon="mdi:clock-outline" />
                      {role.experience}
                    </span>
                  )}
                </div>
                {role.reportsTo && (
                  <p className="reports-to">Reports to {role.reportsTo}</p>
                )}
                <p className="summary">{role.summary}</p>
                <ul className="highlights">
                  {role.highlights.map((item) => (
                    <li key={item}>
                      <Icon icon="solar:check-circle-bold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="requirements">
                  <h4>You&apos;ll need</h4>
                  <ul>
                    {role.requirements.map((item) => (
                      <li key={item}>
                        <Icon icon="mdi:account-check-outline" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="job-card-footer">
                  <span className="btn btn-pry">
                    Apply now
                    <Icon icon="solar:arrow-right-linear" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-cta">
        <div className="container">
          <div
            className="cta-box"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="cta-copy">
              <h2>Don&apos;t see the right seat?</h2>
              <p>
                We are always interested in people who can help us convene better
                rooms. Send a note and tell us where you would add the most
                value.
              </p>
            </div>
            <a href="mailto:malik@eventhive.ng" className="btn btn-pry">
              Email the team
              <Icon icon="quill:mail" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
