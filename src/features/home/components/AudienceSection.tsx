import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { audienceContent } from "@/lib/content/home";

export function AudienceSection() {
  return (
    <MotionSection className="bg-bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title={audienceContent.headline} subtitle={audienceContent.intro[0]} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audienceContent.personas.map((persona) => (
            <Card key={persona.title}>
              <div className="mb-4 inline-flex rounded-[var(--radius-button)] bg-accent-gold/10 p-3 text-accent-gold">
                <Icon name={persona.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-2xl tracking-wide text-text-primary">
                {persona.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {persona.description}
              </p>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-center font-heading text-2xl tracking-wide text-accent-gold">
          {audienceContent.tagline}
        </p>
      </div>
    </MotionSection>
  );
}
