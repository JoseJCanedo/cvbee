import Link from "next/link";
import Image from "next/image";
import { CONTACT_EMAIL, NAV_LINKS, SITE_NAME } from "@/lib/constants";

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/60">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <span className="inline-flex rounded-full ring-2 ring-black dark:ring-yellow-400 bg-white dark:bg-amber-50/90 mb-3">
              <Image src="/favicon.svg" alt="CVBA logo" width={100} height={100} />
            </span>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              {SITE_NAME} — serving hobbyist and commercial beekeepers in the Chattahoochee Valley.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-widest text-muted mb-4">Navigation</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <p className="font-semibold text-sm uppercase tracking-widest text-muted mb-4">Connect</p>
            <div className="space-y-3">
              {CONTACT_EMAIL && (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="block text-sm text-foreground/70 hover:text-accent transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              )}

              
              {/* <div className="flex gap-3 pt-1">
                {SOCIAL_LINKS.facebook && (
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-foreground/50 hover:text-accent transition-colors"
                  >
                    <FacebookIcon />
                  </a>
                )}
                {SOCIAL_LINKS.instagram && (
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-foreground/50 hover:text-accent transition-colors"
                  >
                    <InstagramIcon />
                  </a>
                )}
              </div> */}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border">
          <p className="text-xs text-muted">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
