"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { heroContent } from "@/lib/content/home";
import { siteConfig } from "@/lib/config";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 py-24 md:py-32">
      <div className="tactical-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-accent-primary/10 via-transparent to-bg-primary"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent-primary">
            {siteConfig.tagline}
          </p>
          <h1 className="font-heading text-5xl leading-tight tracking-wide text-text-primary md:text-7xl">
            {heroContent.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
            {heroContent.paragraphs[0]}
          </p>
          <p className="mt-4 font-medium text-accent-gold">{heroContent.tagline}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={siteConfig.whatsappUrl} external variant="primary">
              Join Community
            </Button>
            <Button href="/events" variant="secondary">
              Explore Events
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
