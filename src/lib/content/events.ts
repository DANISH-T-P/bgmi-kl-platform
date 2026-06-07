import type { EventItem } from "@/types/content";

export const eventsContent = {
  headline: "Events & Tournaments",
  intro:
    "Participate in community tournaments, scrims, and competitive events. BGMI-KL is building Kerala's preferred BGMI tournament platform.",
  upcoming: [
    {
      name: "BGMI-KL Weekly Scrims",
      date: "Coming Soon",
      time: "TBA",
      format: "Squad TPP",
      prizePool: "Community Recognition",
      registration: "Open via WhatsApp",
      status: "coming-soon",
    },
    {
      name: "BGMI-KL Kerala Championship",
      date: "Coming Soon",
      time: "TBA",
      format: "Squad TPP",
      prizePool: "TBA",
      registration: "Opening Soon",
      status: "coming-soon",
    },
    {
      name: "Community Custom Room Nights",
      date: "Every Week",
      time: "Evening Sessions",
      format: "Custom Rooms",
      prizePool: "Fun & Practice",
      registration: "Join via WhatsApp",
      status: "upcoming",
    },
  ] satisfies EventItem[],
  cta: "Want to host or participate in an event? Join our WhatsApp community to stay updated.",
} as const;
