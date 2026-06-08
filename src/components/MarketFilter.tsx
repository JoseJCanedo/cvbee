"use client";

import { useState } from "react";
import CategoryChip from "@/components/CategoryChip";
import MemberCard from "@/components/MemberCard";
import { MARKET_CATEGORIES, type MarketMember, type MarketCategory } from "@/lib/market";

interface MarketFilterProps {
  members: MarketMember[];
}

/**
 * Handles all filter chip state and filtered member grid.
 * Kept as a client component so the page itself can remain a server component.
 *
 * Filter logic (OR):
 * - "All" selected → show every active member
 * - One or more category chips selected → show members whose categories
 *   overlap with any selected chip (union, not intersection)
 * - Selecting "All" clears all category chips
 * - Selecting any category chip clears "All"
 */
export default function MarketFilter({ members }: MarketFilterProps) {
  const [selected, setSelected] = useState<Set<MarketCategory>>(new Set());

  const allActive = selected.size === 0;

  function handleChipToggle(label: string) {
    if (label === "All") {
      setSelected(new Set());
      return;
    }

    const cat = label as MarketCategory;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  }

  // OR filter: member passes if any of their categories are in the selected set
  const filtered = members.filter((m) => {
    if (allActive) return true;
    return m.categories.some((cat) => selected.has(cat));
  });

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-10">
        <CategoryChip
          label="All"
          active={allActive}
          onToggle={handleChipToggle}
        />
        {MARKET_CATEGORIES.map((cat) => (
          <CategoryChip
            key={cat}
            label={cat}
            active={selected.has(cat)}
            onToggle={handleChipToggle}
          />
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-muted mb-6">
        {filtered.length === 0
          ? "No listings match the selected filters."
          : `Showing ${filtered.length} member${filtered.length !== 1 ? "s" : ""}`}
      </p>

      {/* Member grid */}
      {filtered.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      )}
    </div>
  );
}
