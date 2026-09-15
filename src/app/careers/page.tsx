import Careers from "@/components/Careers";
import PageHeader from "@/components/PageHeader";
import { openRoles } from "@/util/jobs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Eventhive. We're hiring an Event Operations Associate, Content Strategist/Marketer and Sponsorship Sales Executive. Full-time remote roles based in Lagos.",
};

const jobPostingsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: openRoles.map((role, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "JobPosting",
      title: role.title,
      description: role.summary,
      hiringOrganization: {
        "@type": "Organization",
        name: "Eventhive",
        sameAs: "https://eventhive.ng",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lagos",
          addressCountry: "NG",
        },
      },
      jobLocationType: "TELECOMMUTE",
      employmentType: "FULL_TIME",
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "NGN",
        value: {
          "@type": "QuantitativeValue",
          minValue: 300000,
          maxValue: 400000,
          unitText: "MONTH",
        },
      },
      url: role.applyUrl,
    },
  })),
};

const Page = () => {
  return (
    <main className="careers-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingsSchema) }}
      />
      <PageHeader title="Careers" bgdImg="/images/headers/career.jpg" />
      <Careers />
    </main>
  );
};

export default Page;
