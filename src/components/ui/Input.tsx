import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, id, className, ...props }: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-medium text-text-primary">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "w-full rounded-[var(--radius-input)] border border-white/10 bg-bg-secondary px-4 py-3 text-text-primary placeholder:text-text-secondary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/30",
          className,
        )}
        {...props}
      />
    </div>
  );
}
