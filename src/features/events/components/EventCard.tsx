import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { EventItem } from "@/types/content";

interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card>
      <Badge variant={event.status === "upcoming" ? "default" : "gold"} className="mb-4">
        {event.status === "upcoming" ? "Upcoming" : "Coming Soon"}
      </Badge>
      <h3 className="font-heading text-2xl tracking-wide text-text-primary">{event.name}</h3>
      <dl className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-text-secondary">Date</dt>
          <dd className="text-text-primary">{event.date}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-text-secondary">Time</dt>
          <dd className="text-text-primary">{event.time}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-text-secondary">Format</dt>
          <dd className="text-text-primary">{event.format}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-text-secondary">Prize Pool</dt>
          <dd className="text-accent-gold">{event.prizePool}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-text-secondary">Registration</dt>
          <dd className="text-text-primary">{event.registration}</dd>
        </div>
      </dl>
    </Card>
  );
}
