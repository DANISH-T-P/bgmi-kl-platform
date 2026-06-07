import type { CommunityRule, PlatformGroup } from "@/types/content";

export const communityPageContent = {
  headline: "Join the BGMI-KL Community",
  intro:
    "BGMI-KL is Kerala's primary hub for BGMI players. Connect through WhatsApp and Discord, follow us on Instagram, Facebook, and X, and be part of a growing gaming ecosystem.",
  whatsappGroups: [
    {
      name: "Announcements",
      description: "Official updates, tournaments, events, and important notices.",
      status: "active" as const,
    },
    {
      name: "Squad Finder",
      description: "Find teammates and build squads instantly.",
      status: "active" as const,
    },
    {
      name: "Rank Push",
      description: "Players looking to grind ranks and conquer tiers.",
      status: "active" as const,
    },
    {
      name: "Custom Rooms & Scrims",
      description: "Room IDs, scrims, and competitive practice.",
      status: "active" as const,
    },
    {
      name: "BGMI Chat",
      description: "General discussions, updates, and conversations.",
      status: "active" as const,
    },
    {
      name: "Memes & Fun",
      description: "Gaming memes and entertainment.",
      status: "active" as const,
    },
    {
      name: "Highlights & Montages",
      description: "Gameplay clips, achievements, and community content.",
      status: "active" as const,
    },
    {
      name: "Team Recruitment",
      description: "Clans and teams looking for members.",
      status: "active" as const,
    },
  ] satisfies PlatformGroup[],
  activePlatforms: [
    {
      name: "WhatsApp",
      description: "Our primary hub for instant squad matchmaking, casual chat, daily custom room announcements, and tournament registrations.",
      role: "Squads & Rooms",
      linkKey: "whatsappUrl" as const,
      themeColor: "from-[#25D366]/20 via-[#128C7E]/5 to-transparent hover:border-[#25D366]/40",
      icon: "whatsapp",
      badgeColor: "bg-[#25D366]/10 text-[#25D366]",
      ctaText: "Join WhatsApp Community"
    },
    {
      name: "Discord",
      description: "Esports coordination server with dedicated voice channels, custom matchmaking lobbies, and automated tournament standings.",
      role: "Voice & Scrims",
      linkKey: "discordUrl" as const,
      themeColor: "from-[#5865F2]/20 via-[#404eed]/5 to-transparent hover:border-[#5865F2]/40",
      icon: "discord",
      badgeColor: "bg-[#5865F2]/10 text-[#7289DA]",
      ctaText: "Join Discord Server"
    },
    {
      name: "Instagram",
      description: "Follow for upcoming esports event announcements, highlight reels, community custom room results, and meme highlights.",
      role: "Media & Highlights",
      linkKey: "instagramUrl" as const,
      themeColor: "from-[#E1306C]/20 via-[#C13584]/5 to-transparent hover:border-[#E1306C]/40",
      icon: "instagram",
      badgeColor: "bg-[#E1306C]/10 text-[#FD1D1D]",
      ctaText: "Follow on Instagram"
    },
    {
      name: "Facebook",
      description: "Connect with the broader global PUBG Mobile fan base and find tournament coverage, videos, and news.",
      role: "News & Community",
      linkKey: "facebookUrl" as const,
      themeColor: "from-[#1877F2]/20 via-[#0e5aed]/5 to-transparent hover:border-[#1877F2]/40",
      icon: "facebook",
      badgeColor: "bg-[#1877F2]/10 text-[#1877F2]",
      ctaText: "Connect on Facebook"
    },
    {
      name: "X (Twitter)",
      description: "Get real-time announcements, esports schedules, tournament progress tweets, and live updates.",
      role: "Announcements & Feed",
      linkKey: "xUrl" as const,
      themeColor: "from-white/10 via-white/5 to-transparent hover:border-white/30",
      icon: "x",
      badgeColor: "bg-white/10 text-white",
      ctaText: "Follow on X"
    }
  ],
  futurePlatforms: [
    {
      name: "Telegram",
      description: "Broadcast channel for updates and announcements.",
      status: "coming-soon" as const,
    },
    {
      name: "YouTube",
      description: "Highlights, tournaments, shorts, and educational content.",
      status: "coming-soon" as const,
    },
    {
      name: "Mobile App",
      description: "Squad finder, tournaments, community features, and player profiles.",
      status: "coming-soon" as const,
    },
  ] satisfies PlatformGroup[],
} as const;

export const communityRulesContent = {
  headline: "Community Rules & Guidelines",
  intro:
    "We are committed to maintaining a positive, active, and competitive community where members feel safe, valued, and motivated to grow.",
  officialRules: [
    "Respect every member.",
    "No harassment or bullying.",
    "No hate speech.",
    "No spam or irrelevant promotions.",
    "No cheating, hacking, or exploit discussions.",
    "Help new players whenever possible.",
    "Keep conversations healthy and positive.",
    "Follow WhatsApp and BGMI guidelines.",
    "Use appropriate groups for discussions.",
    "Represent the community professionally.",
  ],
  values: [
    {
      title: "Respect",
      description: "Treat every member with kindness, professionalism, and mutual respect.",
    },
    {
      title: "Teamwork",
      description: "Success is achieved together. Support your teammates and grow as a squad.",
    },
    {
      title: "Fair Play",
      description: "Honest competition is at the heart of everything we do. No hacks, cheats, or unfair advantages.",
    },
    {
      title: "Competitive Spirit",
      description: "Push your limits, improve your gameplay, and strive for excellence.",
    },
    {
      title: "Community First",
      description: "The strength of BGMI-KL comes from its members. We grow stronger together.",
    },
    {
      title: "Continuous Growth",
      description: "Learn from every match, every teammate, and every experience.",
    },
  ],
  allowed: [
    "Respect all members and admins",
    "Help new players feel welcome",
    "Keep discussions gaming-related and constructive",
    "Report issues responsibly to moderators",
    "Encourage teamwork and positive communication",
  ],
  prohibited: [
    "Spam or excessive self-promotion",
    "Harassment, bullying, or toxic behavior",
    "Hate speech or discrimination",
    "Cheating, hacks, exploits, or unfair gameplay",
    "Content that harms the community atmosphere",
  ],
  guidelines: [
    { text: "Respect all members and admins", type: "allowed" },
    { text: "Help new players feel welcome", type: "allowed" },
    { text: "Keep discussions gaming-related and constructive", type: "allowed" },
    { text: "Report issues responsibly to moderators", type: "allowed" },
    { text: "Encourage teamwork and positive communication", type: "allowed" },
    { text: "Spam or excessive self-promotion", type: "prohibited" },
    { text: "Harassment, bullying, or toxic behavior", type: "prohibited" },
    { text: "Hate speech or discrimination", type: "prohibited" },
    { text: "Cheating, hacks, exploits, or unfair gameplay", type: "prohibited" },
    { text: "Content that harms the community atmosphere", type: "prohibited" },
  ] satisfies CommunityRule[],
} as const;
