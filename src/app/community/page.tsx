import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/ui/PageHeader";
import { PlatformsSection } from "@/features/community/components/PlatformsSection";
import { RulesSection } from "@/features/community/components/RulesSection";
import { WhatsAppGroups } from "@/features/community/components/WhatsAppGroups";
import { communityPageContent } from "@/lib/content/community";
import { siteConfig } from "@/lib/config";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Join BGMI-KL Community",
  description: communityPageContent.intro,
  path: "/community",
  keywords: ["BGMI Squads Kerala", "BGMI WhatsApp Kerala"],
});

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        title={communityPageContent.headline}
        description={communityPageContent.intro}
      />
      <WhatsAppGroups />
      <div className="mx-auto max-w-6xl px-4 pb-8 text-center md:px-6">
        <Button href={siteConfig.whatsappUrl} external variant="primary">
          Join WhatsApp Community
        </Button>
      </div>
      <PlatformsSection />
      <RulesSection />
    </>
  );
}
