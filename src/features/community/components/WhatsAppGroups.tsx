import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { communityPageContent } from "@/lib/content/community";

export function WhatsAppGroups() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-heading text-4xl tracking-wide text-text-primary">
          WhatsApp Community Hub
        </h2>
        <p className="mt-3 max-w-2xl text-text-secondary">
          Daily communication and player networking across dedicated groups.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {communityPageContent.whatsappGroups.map((group) => (
            <Card key={group.name}>
              <Badge variant="default" className="mb-4">
                Active
              </Badge>
              <h3 className="font-heading text-xl tracking-wide">{group.name}</h3>
              <p className="mt-2 text-sm text-text-secondary">{group.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
