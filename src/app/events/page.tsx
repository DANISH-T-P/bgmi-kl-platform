import { PageHeader } from "@/components/ui/PageHeader";
import { EventsList } from "@/features/events/components/EventsList";
import { eventsContent } from "@/lib/content/events";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "BGMI-KL Events & Tournaments",
  description: eventsContent.intro,
  path: "/events",
  keywords: ["BGMI Tournaments Kerala", "BGMI Scrims Kerala"],
});

export default function EventsPage() {
  return (
    <>
      <PageHeader title={eventsContent.headline} description={eventsContent.intro} />
      <EventsList />
    </>
  );
}
