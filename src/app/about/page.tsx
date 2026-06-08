import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HexBackground from "@/components/HexBackground";
import Link from "next/link";
import OfficerCard from "@/components/OfficerCard";
import { OFFICERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Chattahoochee Valley Beekeepers Association",
  description:
    "Learn about the Chattahoochee Valley Beekeepers Association — Columbus, Georgia's premier beekeeping community serving the greater Chattahoochee Valley region.",
};

const COUNTIES = [
  "Muscogee County",
  "Harris County",
  "Stewart County",
  "Talbot County",
  "Lee County",
  "Russell County",
];

const ACTIVITIES = [
  {
    title: "Monthly Meetings",
    description:
      "Gather with fellow beekeepers each month for presentations, Q&A, and community updates.",
  },
  {
    title: "Hands-On Workshops",
    description:
      "Learn practical skills through guided workshops led by experienced apiarists in our region.",
  },
  {
    title: "Hive Inspections",
    description:
      "Participate in group hive inspections to sharpen your observation skills alongside peers.",
  },
  {
    title: "Social Events",
    description:
      "Celebrate the seasons and connect with the broader beekeeping community at our social gatherings.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="relative flex items-center overflow-hidden pt-32 pb-24">
          <div className="absolute inset-0 pointer-events-none">
            <HexBackground
              className="absolute right-0 top-0 h-full w-3/4 md:w-1/2 object-cover"
              opacity={0.5}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <p className="text-accent font-semibold tracking-widest text-xs uppercase mb-6 flex items-center gap-3">
                {/* <span className="inline-block w-8 h-px bg-accent" /> */}
                About The Club
              </p>
              <h1 className="font-display text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                Columbus Georgia&apos;s{" "}
                <span className="text-accent">Premier Beekeeping</span>{" "}
                Community
              </h1>
              <p className="text-lg text-foreground/70 leading-relaxed mb-10 max-w-xl">
                The Chattahoochee Valley Beekeepers Association is dedicated to
                promoting the art and science of beekeeping throughout the
                Chattahoochee Valley region. Whether you&apos;re a seasoned
                apiarist or just starting your journey into the fascinating world
                of honey bees, our club offers education, support, and community
                for all skill levels.
              </p>
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

          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>

        {/* Mission */}
        <section className="py-24 bg-card/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
                Who We Are
              </p>
              <h2 className="font-display text-4xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-foreground/70 leading-relaxed max-w-2xl">
                Located in West Georgia, we serve beekeepers throughout the
                greater Columbus area and surrounding counties. Our members
                benefit from shared knowledge, group purchasing power, and
                hands-on learning opportunities in a supportive environment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ACTIVITIES.map((activity) => (
                <div
                  key={activity.title}
                  className="p-6 rounded-xl border border-border bg-card"
                >
                  <div className="flex items-center gap-2 text-accent mb-3">
                    <CheckIcon />
                    <p className="font-display font-semibold">{activity.title}</p>
                  </div>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

              <div>
                <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
                  Where We Serve
                </p>
                <h2 className="font-display text-4xl font-bold mb-4">
                  Serving the Chattahoochee Valley Region
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  Our club serves beekeepers throughout Columbus, Georgia and
                  the surrounding Chattahoochee Valley region. Together,
                  we&apos;re working to support healthy bee populations and
                  sustainable beekeeping practices across the valley.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-border bg-card">
                <div className="flex items-center gap-2 text-accent mb-5">
                  <MapPinIcon />
                  <p className="font-display font-semibold text-lg">Counties Served</p>
                </div>
                <ul className="space-y-3">
                  {COUNTIES.map((county) => (
                    <li key={county} className="flex items-center gap-3">
                      <span className="text-accent shrink-0">
                        <CheckIcon />
                      </span>
                      <span className="text-foreground/80 text-sm">{county}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>
        <section id="officers" className="py-24 bg-card/50">
          <div className="max-w-6xl mx-auto px-6">

            {/* Section header */}
            <div className="mb-12">
              <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
                Leadership
              </p>
              <h2 className="font-display text-4xl font-bold">
                Meet Our Officers
              </h2>
            </div>

            {/* Officers grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {OFFICERS.map((officer) => (
                <OfficerCard key={officer.name} officer={officer} />
              ))}
            </div>

          </div>
        </section>
        );
      </main>
      <Footer />
    </>
  );
}
