import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { contactContent } from "@/lib/content/contact";
import { siteConfig } from "@/lib/config";
import {
  WhatsAppIcon,
  DiscordIcon,
  InstagramIcon,
} from "@/components/ui/SocialIcons";

const methodIcons = {
  whatsapp: WhatsAppIcon,
  discord: DiscordIcon,
  instagram: InstagramIcon,
  mail: Mail,
} as const;

export function ContactMethods() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {contactContent.methods.map((method) => {
        const Icon = methodIcons[method.icon as keyof typeof methodIcons];
        
        let href = "";
        if (method.linkKey === "contactEmail") {
          href = `mailto:${siteConfig.contactEmail}`;
        } else {
          href = siteConfig[method.linkKey as keyof typeof siteConfig] as string;
        }

        return (
          <Card key={method.title} className="flex flex-col justify-between">
            <div>
              <div className="text-accent-primary">
                {Icon && <Icon className="h-8 w-8" aria-hidden="true" />}
              </div>
              <h3 className="mt-4 font-heading text-xl tracking-wide">{method.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{method.description}</p>
            </div>
            <div className="mt-6">
              <Button href={href} external variant="secondary" className="w-full text-xs uppercase tracking-wider font-semibold">
                {method.label}
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
