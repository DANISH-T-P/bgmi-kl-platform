interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-white/5 bg-bg-secondary/50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center md:px-6">
        <h1 className="font-heading text-5xl tracking-wide text-text-primary md:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">{description}</p>
      </div>
    </header>
  );
}
