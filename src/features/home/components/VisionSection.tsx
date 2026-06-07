import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { visionContent } from "@/lib/content/home";

export function VisionSection() {
  return (
    <MotionSection>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title={visionContent.headline} subtitle={visionContent.intro[0]} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visionContent.benefits.map((benefit) => (
            <Card key={benefit.title}>
              <div className="mb-4 inline-flex rounded-[var(--radius-button)] bg-accent-primary/10 p-3 text-accent-primary">
                <Icon name={benefit.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl tracking-wide text-text-primary">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-text-secondary">
          {visionContent.vision}
        </p>
        <p className="mt-4 text-center text-lg text-accent-primary">{visionContent.cta}</p>
        <p className="mt-4 text-center font-heading text-2xl tracking-wide text-accent-gold">
          {visionContent.tagline}
        </p>
      </div>
    </MotionSection>
  );
}
