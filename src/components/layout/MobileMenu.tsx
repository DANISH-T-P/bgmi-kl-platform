"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  return (
    <nav
      id="mobile-menu"
      className={cn(
        "border-t border-white/5 bg-bg-secondary md:hidden",
        isOpen ? "block" : "hidden",
      )}
      aria-label="Mobile navigation"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={cn(
              "rounded-[var(--radius-button)] px-4 py-3 text-sm font-medium transition-colors",
              pathname === link.href
                ? "bg-accent-primary/10 text-accent-primary"
                : "text-text-secondary hover:bg-white/5 hover:text-text-primary",
            )}
          >
            {link.label}
          </Link>
        ))}
        <Button href={siteConfig.whatsappUrl} external variant="primary" className="mt-2 w-full">
          Join Community
        </Button>
      </div>
    </nav>
  );
}
