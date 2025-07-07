export type CarouselData = {
  useFor: string;
  settings: Record<string, unknown>;
  info: EventPageData[] | BlogPageData[] | string[];
};

export type BlogPageData = {
  id: number;
  imgLink: string;
  title: string;
  author: string;
  slug: string;
  excerpt: string;
  description: string;
};

export type EventPageData = {
  banner: string;
  event: string;
  date: string;
  slug: string;
  title: string;
  location: string;
  extLink: string;
  pic1: string;
  pic2: string;
  pic3: string;
  majorDesc: string;
  minorDesc: string;
  whyParticipate: string[];
};

export type SectionHeaderType = {
  type: "single" | "double";
  title: string;
  heading: string;
};
