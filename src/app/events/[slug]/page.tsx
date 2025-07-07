import PageHeader from "@/components/PageHeader";
import EventAside from "@/components/EventAside";
import EventContent from "@/components/EventContent";
import data from "@/util/data";
// import { useParams } from "next/navigation";

export const metadata = {
  title: "Events",
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  // console.log(await params);

  const { slug } = await params; // Use useParams from next/navigation

  const { eventPageData } = data;
  const selectedEvent = eventPageData.find((event) => event.slug === slug);

  if (!selectedEvent) {
    return;
  }

  return (
    <main className="event-page">
      <PageHeader title={"Our Events"} bgdImg={"/images/headers/events.png"} />
      <div className="container">
        <div className="event-container">
          <EventAside
            data={eventPageData}
            selected={selectedEvent}
            slug={slug}
          />
          <EventContent data={selectedEvent} />
        </div>
      </div>
    </main>
  );
};

export default Page;
