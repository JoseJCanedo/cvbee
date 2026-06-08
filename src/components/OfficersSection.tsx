import OfficerCard from "@/components/OfficerCard";
import { OFFICERS } from "@/lib/constants";

export default function OfficersSection() {
  return (
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
}
