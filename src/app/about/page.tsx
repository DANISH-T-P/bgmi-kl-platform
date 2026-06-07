import { PageHeader } from "@/components/ui/PageHeader";
import { AboutSections } from "@/features/about/components/AboutSections";
import { aboutContent } from "@/lib/content/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About BGMI-KL",
  description: aboutContent.description,
  path: "/about",
  keywords: ["BGMI Players Kerala", "About BGMI-KL"],
});

export default function AboutPage() {
  return (
    <>
      <PageHeader title={aboutContent.headline} description={aboutContent.mission} />
      <AboutSections />
    </>
  );
}
