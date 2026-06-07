import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/config";
import {
  WhatsAppIcon,
  DiscordIcon,
  InstagramIcon,
  FacebookIcon,
  XIcon,
} from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-8 w-1 rounded-full bg-accent-gold" />
              <span className="font-heading text-3xl tracking-widest">BGMI-KL</span>
            </div>
            <p className="mt-3 text-text-secondary">{siteConfig.tagline}</p>
            <p className="mt-2 text-sm text-text-secondary">{siteConfig.motto}</p>
          </div>

          <div>
            <h2 className="font-heading text-xl tracking-wide text-text-primary">Navigate</h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-accent-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xl tracking-wide text-text-primary">Connect</h2>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-[#25D366]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Community
              </a>
              <a
                href={siteConfig.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-[#5865F2]"
              >
                <DiscordIcon className="h-4 w-4" />
                Discord Server
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-[#E1306C]"
              >
                <InstagramIcon className="h-4 w-4 text-current" />
                Instagram
              </a>
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-[#1877F2]"
              >
                <FacebookIcon className="h-4 w-4" />
                Facebook
              </a>
              <a
                href={siteConfig.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-white"
              >
                <XIcon className="h-4 w-4" />
                X (Twitter)
              </a>
              <Link
                href="/contact"
                className="mt-2 inline-flex text-sm font-semibold text-accent-primary transition-colors hover:text-accent-gold"
              >
                Contact Us & Support
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-t border-white/5 pt-6">
          {siteConfig.hashtags.map((tag) => (
            <span key={tag} className="text-xs text-text-secondary">
              {tag}
            </span>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-text-secondary">
          Copyright © {new Date().getFullYear()} BGMI-KL. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
