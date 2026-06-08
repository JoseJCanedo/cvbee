import Link from "next/link";
import HexBackground from "@/components/HexBackground";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Hex grid — positioned to the right as a structural element */}
      <div className="absolute inset-0 pointer-events-none">
        <HexBackground
          className="absolute right-0 top-0 h-full w-3/4 md:w-1/2 object-cover"
          opacity={0.6}
        />
        {/* Gradient fade over the hex grid */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-2xl">

          {/* Eyebrow label */}
          <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-px bg-accent" />
            Columbus, Georgia
          </p>

          {/* Main headline */}
          <h1 className="font-display text-6xl md:text-7xl font-extrabold leading-[0.95] tracking-tight mb-6">
            <span className="block">{SITE_NAME.split(" ").slice(0, 2).join(" ")}</span>
            <span className="block">{SITE_NAME.split(" ").slice(2, 4).join(" ")}</span>
            <span className="block text-accent">
              {SITE_NAME.split(" ").slice(4).join(" ")}
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-medium text-foreground/60 mb-4 italic">
            {SITE_TAGLINE}
          </p>

          {/* Description */}
          <p className="text-base text-foreground/70 leading-relaxed mb-10 max-w-lg">
            {SITE_DESCRIPTION}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#meetings"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Attend a Meeting
            </Link>
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-accent hover:text-accent transition-colors text-sm"
            >
              Latest Updates
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
