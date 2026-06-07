import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "muted";
  className?: string;
}

const variantStyles = {
  default: "bg-accent-primary/15 text-accent-primary border-accent-primary/30",
  gold: "bg-accent-gold/15 text-accent-gold border-accent-gold/30",
  muted: "bg-white/5 text-text-secondary border-white/10",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
