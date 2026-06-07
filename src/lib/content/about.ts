import type { GoalGroup } from "@/types/content";

export const aboutContent = {
  headline: "About BGMI-KL",
  mission:
    "Connecting Kerala's BGMI players through teamwork, competition, friendship, and community-driven gaming experiences.",
  description:
    "BGMI-KL is a dedicated gaming community built for BGMI players across Kerala, India. We bring together casual players, rank pushers, competitive teams, streamers, content creators, and esports enthusiasts into one active network where players can easily find teammates, build squads, improve their skills, participate in events, and grow together.",
  purpose: {
    headline: "The Problem We Solve",
    painPoints: [
      "Active teammates",
      "Reliable squads",
      "Daily gaming partners",
      "Scrims and tournaments",
      "Local gaming communities",
    ],
    solution:
      "BGMI-KL creates a central hub where Kerala players can instantly connect with others who are online and ready to play.",
  },
  goals: [
    {
      title: "Short-Term Goals",
      items: [
        "Build an active Kerala-wide player network",
        "Reach 1,000+ community members",
        "Host regular custom rooms",
        "Expand WhatsApp and Discord community ecosystems",
        "Establish a strong Instagram, Facebook, and X presence",
      ],
    },
    {
      title: "Mid-Term Goals",
      items: [
        "Organize weekly scrims",
        "Run community tournaments",
        "Build partnerships with gaming creators",
        "Launch official Telegram community channel",
        "Develop a recognizable esports brand",
      ],
    },
    {
      title: "Long-Term Goals",
      items: [
        "Become Kerala's largest BGMI community",
        "Host sponsored tournaments",
        "Launch an official website",
        "Launch a dedicated mobile app",
        "Create a Kerala esports ecosystem",
        "Support creators, streamers, and competitive teams",
      ],
    },
  ] satisfies GoalGroup[],
  values: [
    "Respect",
    "Sportsmanship",
    "Competition",
    "Growth",
    "Teamwork",
    "Inclusiveness",
    "Fair Play",
    "Activity",
  ],
  personality: [
    "Friendly",
    "Competitive",
    "Active",
    "Welcoming",
    "Professional",
    "Community-focused",
    "Esports-inspired",
  ],
  vision:
    "To become Kerala's most trusted, active, and influential BGMI community, connecting thousands of players through gaming, friendship, competition, and innovation.",
} as const;
