import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-[var(--radius-card)] border border-white/5 bg-bg-secondary p-6",
        hover && "transition-transform duration-200 hover:-translate-y-1 hover:border-accent-primary/30",
        className,
      )}
    >
      {children}
    </article>
  );
}
