import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { communityRulesContent } from "@/lib/content/community";

export function RulesSection() {
  return (
    <section id="rules" className="py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-heading text-4xl tracking-wide">{communityRulesContent.headline}</h2>
        <p className="mt-3 max-w-2xl text-text-secondary">{communityRulesContent.intro}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {communityRulesContent.values.map((value) => (
            <Card key={value.title}>
              <h3 className="font-heading text-xl tracking-wide text-accent-primary">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Card hover={false}>
            <h3 className="font-heading text-2xl tracking-wide text-accent-primary">
              Official Rules
            </h3>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-text-secondary">
              {communityRulesContent.officialRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ol>
          </Card>

          <div className="space-y-6">
            <Card hover={false}>
              <h3 className="font-heading text-xl tracking-wide text-accent-primary">Allowed</h3>
              <ul className="mt-4 space-y-2">
                {communityRulesContent.allowed.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-primary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card hover={false}>
              <h3 className="font-heading text-xl tracking-wide text-accent-gold">Not Allowed</h3>
              <ul className="mt-4 space-y-2">
                {communityRulesContent.prohibited.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-primary">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
