export interface ContentItem {
  title: string;
  description: string;
}

export interface FeatureItem extends ContentItem {
  icon: string;
}

export interface GoalGroup {
  title: string;
  items: string[];
}

export interface PlatformGroup {
  name: string;
  description: string;
  status: "active" | "coming-soon";
}

export interface CommunityRule {
  text: string;
  type: "allowed" | "prohibited";
}

export interface EventItem {
  name: string;
  date: string;
  time: string;
  format: string;
  prizePool: string;
  registration: string;
  status: "upcoming" | "coming-soon";
}
