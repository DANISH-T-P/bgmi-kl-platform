"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { contactContent } from "@/lib/content/contact";
import { siteConfig } from "@/lib/config";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");

    const subject = encodeURIComponent(`BGMI-KL Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="rounded-[var(--radius-card)] border border-white/5 bg-bg-secondary p-8">
      <h2 className="font-heading text-3xl tracking-wide">{contactContent.form.headline}</h2>
      <p className="mt-2 text-sm text-text-secondary">{contactContent.form.description}</p>

      {submitted ? (
        <p className="mt-6 text-accent-primary" role="status">
          Your email client should open shortly. If it does not, email us at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`} className="underline">
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <Input
            label={contactContent.form.fields.name}
            name="name"
            required
            autoComplete="name"
          />
          <Input
            label={contactContent.form.fields.email}
            name="email"
            type="email"
            required
            autoComplete="email"
          />
          <Textarea
            label={contactContent.form.fields.message}
            name="message"
            required
          />
          <Button type="submit" variant="primary">
            {contactContent.form.submit}
          </Button>
        </form>
      )}
    </div>
  );
}
