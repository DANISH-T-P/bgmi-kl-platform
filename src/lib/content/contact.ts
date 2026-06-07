export const contactContent = {
  headline: "Contact BGMI-KL",
  intro:
    "Have questions about joining, tournaments, partnerships, or community guidelines? Reach out to the BGMI-KL team.",
  methods: [
    {
      title: "WhatsApp Community",
      description: "The fastest way to join, find squads, and get event updates.",
      icon: "whatsapp",
      linkKey: "whatsappUrl" as const,
      label: "Join WhatsApp",
    },
    {
      title: "Discord Server",
      description: "Join the server for voice coordination, scrims, and tournaments.",
      icon: "discord",
      linkKey: "discordUrl" as const,
      label: "Join Discord",
    },
    {
      title: "Instagram",
      description: "Follow for announcements, highlights, and community content.",
      icon: "instagram",
      linkKey: "instagramUrl" as const,
      label: "Follow Instagram",
    },
    {
      title: "Email",
      description: "For partnerships, sponsorships, and official inquiries.",
      icon: "mail",
      linkKey: "contactEmail" as const,
      label: "Send Email",
    },
  ],
  form: {
    headline: "Send a Message",
    description:
      "Fill out the form below and we'll get back to you. For immediate squad finding or event updates, join our WhatsApp community.",
    fields: {
      name: "Your Name",
      email: "Email Address",
      message: "Your Message",
    },
    submit: "Send Message",
  },
  reminder:
    "Our community is built on respect, teamwork, sportsmanship, and fair play. Toxicity, cheating, and harassment have no place in BGMI-KL.",
} as const;
