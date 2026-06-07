import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "gold" | "ghost";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
  external?: boolean;
  type?: never;
  onClick?: never;
  disabled?: never;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-primary text-bg-primary hover:bg-accent-secondary focus-visible:ring-accent-primary",
  secondary:
    "border border-accent-primary/60 text-text-primary hover:border-accent-primary hover:bg-accent-primary/10 focus-visible:ring-accent-primary",
  gold:
    "bg-accent-gold text-bg-primary hover:brightness-110 focus-visible:ring-accent-gold",
  ghost:
    "text-text-primary hover:bg-bg-secondary focus-visible:ring-accent-primary",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-[var(--radius-button)] px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:cursor-not-allowed disabled:opacity-50";

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as ButtonAsButtonProps;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
