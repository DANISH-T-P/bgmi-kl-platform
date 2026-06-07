import { Card } from "@/components/ui/Card";
import { aboutContent } from "@/lib/content/about";
import { siteConfig } from "@/lib/config";

export function AboutSections() {
  return (
    <div className="space-y-16 py-16">
      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-heading text-4xl tracking-wide">Our Mission</h2>
        <p className="mt-4 max-w-3xl text-lg text-text-secondary">{aboutContent.mission}</p>
        <p className="mt-4 max-w-3xl text-text-secondary">{aboutContent.description}</p>
      </section>

      <section className="border-t border-white/5 bg-bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-heading text-4xl tracking-wide">{aboutContent.purpose.headline}</h2>
          <p className="mt-4 text-text-secondary">
            Most BGMI players struggle to find:
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {aboutContent.purpose.painPoints.map((point) => (
              <li
                key={point}
                className="rounded-[var(--radius-button)] border border-white/5 bg-bg-secondary px-4 py-3 text-sm text-text-primary"
              >
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-text-secondary">{aboutContent.purpose.solution}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-heading text-4xl tracking-wide">Community Objectives</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {aboutContent.goals.map((goal) => (
            <Card key={goal.title} hover={false}>
              <h3 className="font-heading text-2xl tracking-wide text-accent-primary">
                {goal.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {goal.items.map((item) => (
                  <li key={item} className="text-sm text-text-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-white/5 bg-bg-secondary/30 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-heading text-4xl tracking-wide">Core Values</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {aboutContent.values.map((value) => (
              <span
                key={value}
                className="rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-2 text-sm font-medium text-accent-primary"
              >
                {value}
              </span>
            ))}
          </div>

          <h3 className="mt-12 font-heading text-3xl tracking-wide">Brand Personality</h3>
          <div className="mt-6 flex flex-wrap gap-3">
            {aboutContent.personality.map((trait) => (
              <span
                key={trait}
                className="rounded-full border border-white/10 bg-bg-secondary px-4 py-2 text-sm text-text-secondary"
              >
                {trait}
              </span>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-lg text-text-secondary">{aboutContent.vision}</p>
          <p className="mt-4 font-heading text-3xl tracking-wide text-accent-gold">
            {siteConfig.motto}
          </p>
        </div>
      </section>
    </div>
  );
}
