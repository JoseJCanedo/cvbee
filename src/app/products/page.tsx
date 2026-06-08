import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MarketFilter from "@/components/MarketFilter";
import { SITE_SHORT_NAME } from "@/lib/constants";
import type { MarketMember } from "@/lib/market";
import rawData from "@/data/members-market.json";

export const metadata: Metadata = {
  title: "Member Marketplace",
  description: `Find queens, nucs, packages, honey, and more from ${SITE_SHORT_NAME} members.`,
};

export default function ProductsPage() {
  // Cast JSON data to typed array and filter out inactive listings
  const members = (rawData as MarketMember[]).filter((m) => m.active);

  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* Page header */}
          <div className="mb-10">
            <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
              Member Marketplace
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight mb-4">
              Buy Local Honey 
              {/* &amp; Support  */}
            </h1>
            <p className="text-foreground/60 max-w-xl leading-relaxed">
              Support fellow CVBA members. Filter by what you&apos;re looking for — select
              one or more categories to narrow the list.
            </p>
          </div>

          {/* Filter chips + grid (client component) */}
          <MarketFilter members={members} />

        </div>
      </main>
      <Footer />
    </>
  );
}
