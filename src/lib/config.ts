export const siteConfig = {
  name: "BGMI-KL",
  tagline: "Play. Connect. Win.",
  motto: "One Squad. One Goal. Chicken Dinner.",
  description:
    "Kerala's premier BGMI community connecting players through teamwork, tournaments, squad finding, and competitive gaming.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  whatsappUrl:
    process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://chat.whatsapp.com/GigAVUdNdTI9onTZslNqO3",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/pubgmobile/",
  facebookUrl:
    process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://www.facebook.com/PUBGMOBILE/",
  xUrl:
    process.env.NEXT_PUBLIC_X_URL ?? "https://x.com/PUBGMOBILE",
  discordUrl:
    process.env.NEXT_PUBLIC_DISCORD_URL ?? "https://discord.com/invite/pubgmobile",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@bgmi-kl.com",
  hashtags: [
    "#bgmi",
    "#bgmikl",
    "#keralagamers",
    "#keralabgmi",
    "#bgmiplayer",
    "#squadup",
    "#customrooms",
    "#esportskerala",
    "#chickendinner",
    "#gamingcommunity",
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
] as const;
