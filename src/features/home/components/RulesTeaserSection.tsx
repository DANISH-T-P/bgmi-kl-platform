import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { rulesTeaserContent } from "@/lib/content/home";

export function RulesTeaserSection() {
  return (
    <MotionSection>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title={rulesTeaserContent.headline} subtitle={rulesTeaserContent.intro} />

        <div className="grid gap-6 md:grid-cols-3">
          {rulesTeaserContent.values.map((value) => (
            <Card key={value.title}>
              <h3 className="font-heading text-2xl tracking-wide text-accent-primary">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-text-secondary">{rulesTeaserContent.tagline}</p>
          <p className="mt-3 font-heading text-2xl tracking-wide text-accent-gold">
            {rulesTeaserContent.motto}
          </p>
          <div className="mt-6">
            <Button href="/community#rules" variant="secondary">
              Read Full Guidelines
            </Button>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
