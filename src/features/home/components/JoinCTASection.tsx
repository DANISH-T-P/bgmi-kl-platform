import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { MotionSection } from "@/components/ui/MotionSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { joinCtaContent } from "@/lib/content/home";
import { siteConfig } from "@/lib/config";

export function JoinCTASection() {
  return (
    <MotionSection className="bg-bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading title={joinCtaContent.headline} subtitle={joinCtaContent.intro[0]} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {joinCtaContent.afterJoin.map((item) => (
            <Card key={item.title} hover={false}>
              <div className="mb-3 inline-flex text-accent-primary">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-xl tracking-wide">{item.title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-[var(--radius-card)] border border-accent-primary/20 bg-accent-primary/5 p-8 text-center">
          <p className="text-text-secondary">{joinCtaContent.standards}</p>
          <ul className="mx-auto mt-6 grid max-w-2xl gap-3 text-left sm:grid-cols-2">
            {joinCtaContent.reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-2 text-sm text-text-primary">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-primary" aria-hidden="true" />
                {reason}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-text-secondary">{joinCtaContent.closing}</p>
          <p className="mt-4 font-heading text-3xl tracking-wide text-accent-gold">
            {joinCtaContent.taglines[0]}
          </p>
          <div className="mt-8">
            <Button href={siteConfig.whatsappUrl} external variant="gold">
              {joinCtaContent.taglines[1]}
            </Button>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
