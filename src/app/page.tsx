import {
  AudienceSection,
  HeroSection,
  JoinCTASection,
  RulesTeaserSection,
  VisionSection,
  WhyJoinSection,
} from "@/features/home/components";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyJoinSection />
      <AudienceSection />
      <VisionSection />
      <JoinCTASection />
      <RulesTeaserSection />
    </>
  );
}
