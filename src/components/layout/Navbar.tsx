"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg-primary/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="group flex items-center gap-3" aria-label="BGMI-KL Home">
          <span className="h-8 w-1 rounded-full bg-accent-primary transition-colors group-hover:bg-accent-gold" />
          <div>
            <span className="font-heading text-2xl tracking-widest text-text-primary">
              BGMI-KL
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-text-secondary">
              {siteConfig.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent-primary",
                pathname === link.href ? "text-accent-primary" : "text-text-secondary",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={siteConfig.whatsappUrl} external variant="primary">
            Join Community
          </Button>
        </div>

        <button
          type="button"
          className="rounded-[var(--radius-button)] p-2 text-text-primary md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} pathname={pathname} />
    </header>
  );
}
