import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { ContactMethods } from "@/features/contact/components/ContactMethods";
import { contactContent } from "@/lib/content/contact";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact BGMI-KL",
  description: contactContent.intro,
  path: "/contact",
  keywords: ["Kerala Esports Community", "Contact BGMI-KL"],
});

export default function ContactPage() {
  return (
    <>
      <PageHeader title={contactContent.headline} description={contactContent.intro} />
      <section className="py-16">
        <div className="mx-auto max-w-6xl space-y-12 px-4 md:px-6">
          <ContactMethods />
          <ContactForm />
          <p className="text-center text-sm text-text-secondary">{contactContent.reminder}</p>
        </div>
      </section>
    </>
  );
}
