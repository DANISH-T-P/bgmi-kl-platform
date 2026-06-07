import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { communityPageContent } from "@/lib/content/community";
import { siteConfig } from "@/lib/config";
import {
  WhatsAppIcon,
  DiscordIcon,
  InstagramIcon,
  FacebookIcon,
  XIcon,
} from "@/components/ui/SocialIcons";

const platformIcons = {
  whatsapp: WhatsAppIcon,
  discord: DiscordIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  x: XIcon,
} as const;

export function PlatformsSection() {
  const { activePlatforms, futurePlatforms } = communityPageContent;

  return (
    <section className="border-t border-white/5 bg-bg-secondary/30 py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center md:text-left">
          <h2 className="font-heading text-4xl tracking-wide text-text-primary md:text-5xl">
            Our Socials & Community Hub
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary">
            Connect with thousands of players, stream custom rooms, find squads, and stay up to date through our official channels.
          </p>
        </div>

        {/* Active Platforms Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activePlatforms.map((platform) => {
            const Icon = platformIcons[platform.icon as keyof typeof platformIcons];
            const url = siteConfig[platform.linkKey as keyof typeof siteConfig] as string;

            return (
              <Card
                key={platform.name}
                className={`flex flex-col justify-between border border-white/5 bg-gradient-to-br ${platform.themeColor} transition-all duration-300 p-6`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="rounded-xl bg-white/5 p-3 text-text-primary">
                      {Icon && <Icon className="h-6 w-6" />}
                    </div>
                    <Badge variant="muted" className={platform.badgeColor}>{platform.role}</Badge>
                  </div>

                  <h3 className="mt-6 font-heading text-2xl tracking-wide text-text-primary">
                    {platform.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {platform.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <Button
                    href={url}
                    external
                    variant="secondary"
                    className="w-full text-xs font-bold uppercase tracking-wider"
                  >
                    {platform.ctaText}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Future Platforms */}
        <div className="mt-24">
          <div className="border-b border-white/5 pb-4">
            <h3 className="font-heading text-3xl tracking-wide text-text-primary">
              Upcoming Platform Expansions
            </h3>
            <p className="mt-1 text-sm text-text-secondary">
              Expanding our operations to more channels soon.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {futurePlatforms.map((platform) => (
              <Card key={platform.name} hover={false} className="border border-white/5 bg-white/[0.02] p-6">
                <Badge variant="gold" className="mb-4">
                  Coming Soon
                </Badge>
                <h4 className="font-heading text-xl tracking-wide text-text-primary">
                  {platform.name}
                </h4>
                <p className="mt-2 text-sm text-text-secondary">{platform.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
