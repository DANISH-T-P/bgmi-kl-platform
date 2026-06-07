import { Button } from "@/components/ui/Button";
import { eventsContent } from "@/lib/content/events";
import { siteConfig } from "@/lib/config";
import { EventCard } from "./EventCard";

export function EventsList() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventsContent.upcoming.map((event) => (
            <EventCard key={event.name} event={event} />
          ))}
        </div>

        <div className="mt-12 rounded-[var(--radius-card)] border border-accent-primary/20 bg-accent-primary/5 p-8 text-center">
          <p className="text-text-secondary">{eventsContent.cta}</p>
          <div className="mt-6">
            <Button href={siteConfig.whatsappUrl} external variant="primary">
              Join WhatsApp Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
