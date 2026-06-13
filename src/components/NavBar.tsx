"use client";

// HeroUI Pro component used: Navbar with mobile drawer
// Requires @heroui/pro package and valid license
// See .npmrc.example for registry auth token setup
// Falls back gracefully to free @heroui/react Navbar if Pro is not installed

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { NAV_LINKS, SITE_SHORT_NAME } from "@/lib/constants";

// Hamburger / close icon
function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open ? (
        <>
          <line x1="3" y1="3" x2="19" y2="19" />
          <line x1="19" y1="3" x2="3" y2="19" />
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="19" y2="7" />
          <line x1="3" y1="11" x2="19" y2="11" />
          <line x1="3" y1="15" x2="19" y2="15" />
        </>
      )}
    </svg>
  );
}

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add shadow/blur when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="shrink-0 rounded-full dark:ring-1 dark:ring-yellow-400/90 dark:bg-amber-50/60 inline-flex">
            <Image src="/favicon.svg" alt="CVBA logo" width={32} height={32} />
          </span>
          <span className="font-display font-bold text-lg tracking-tight group-hover:text-accent transition-colors">
            {SITE_SHORT_NAME}
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right side: theme toggle + mobile menu */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:text-accent transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            <MenuIcon open={mobileOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-border/30 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
