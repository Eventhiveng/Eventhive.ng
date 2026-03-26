export type CarouselData<TInfo = EventPageData[] | BlogPageData[] | string[]> =
  {
    useFor: string;
    settings: Record<string, unknown>;
    info: TInfo;
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

// eventshedule, eventtimeline, eventstatus

export type EventPageData = {
  banner: string;
  event: string;
  // date: string;
  eventMonth: string;
  eventDate: string;
  eventStatus: "active" | "inactive";
  // eventTimeline: "upcoming" | "past";
  slug: string;
  title: string;
  location: string;
  externalLink: string;
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

export type SectorDataItem = {
  icon: string;
  title: string;
  description: string;
};

export type CityDataItem = {
  city: string;
  cityImg: string;
};

export type CounterDataItem = {
  imgLink: string;
  number: number;
  description: string;
};

export type GalleryDataItem = {
  category: string;
  pictures: string[];
};

export type DataStore = {
  sectorData: SectorDataItem[];
  citiesData: CityDataItem[];
  eventData: CarouselData<EventPageData[]>;
  counterData: CounterDataItem[];
  slideOneData: CarouselData<string[]>;
  slideTwoData: CarouselData<string[]>;
  galleryData: GalleryDataItem[];
  blogData: CarouselData<BlogPageData[]>;
  blogPageData: BlogPageData[];
  eventPageData: EventPageData[];
};
