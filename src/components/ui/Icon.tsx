import {
  BookOpen,
  Camera,
  Gamepad2,
  Heart,
  Medal,
  MessageCircle,
  Shield,
  Target,
  TrendingUp,
  Trophy,
  Users,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";

const iconMap = {
  target: Target,
  trophy: Trophy,
  gamepad: Gamepad2,
  book: BookOpen,
  camera: Camera,
  users: Users,
  medal: Medal,
  video: Video,
  zap: Zap,
  trending: TrendingUp,
  shield: Shield,
  heart: Heart,
  message: MessageCircle,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName | string;
  className?: string;
}

export function Icon({ name, className }: IconProps) {
  const IconComponent = iconMap[name as IconName] ?? Users;
  return <IconComponent className={className} aria-hidden="true" />;
}
