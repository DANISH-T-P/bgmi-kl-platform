import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export function Textarea({ label, id, className, ...props }: TextareaProps) {
  const textareaId = id ?? props.name;

  return (
    <div className="space-y-2">
      <label htmlFor={textareaId} className="block text-sm font-medium text-text-primary">
        {label}
      </label>
      <textarea
        id={textareaId}
        className={cn(
          "min-h-32 w-full resize-y rounded-[var(--radius-input)] border border-white/10 bg-bg-secondary px-4 py-3 text-text-primary placeholder:text-text-secondary focus:border-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/30",
          className,
        )}
        {...props}
      />
    </div>
  );
}
