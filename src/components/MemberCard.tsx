"use client";

import { Card } from "@heroui/react";
import type { MarketMember } from "@/lib/market";

interface MemberCardProps {
  member: MarketMember;
}

// Small category badge
function CategoryBadge({ label }: { label: string }) {
  return (
    <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-accent/15 text-accent border border-accent/30">
      {label}
    </span>
  );
}

// Link icon
function LinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function MemberCard({ member }: MemberCardProps) {
  const displayName = member.companyName || member.name;
  const subName = member.companyName ? member.name : null;

  return (
    <Card className="h-full border border-border bg-card hover:border-accent transition-colors duration-200">
      <Card.Content className="p-6 flex flex-col gap-4">

        {/* Header: name + location */}
        <div>
          <h3 className="font-display font-bold text-lg leading-tight">{displayName}</h3>
          {subName && (
            <p className="text-sm text-muted mt-0.5">{subName}</p>
          )}
          <p className="text-xs text-muted mt-1">
            {member.location} · Member since {member.memberSince}
          </p>
        </div>

        {/* Category badges */}
        <div className="flex flex-wrap gap-1.5">
          {member.categories.map((cat) => (
            <CategoryBadge key={cat} label={cat} />
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-foreground/75 leading-relaxed flex-1">
          {member.description}
        </p>

        {/* Availability */}
        <p className="text-xs text-muted">
          <span className="font-semibold text-foreground/60">Availability:</span>{" "}
          {member.availability}
        </p>

        {/* Contact info */}
        <div className="pt-2 border-t border-border space-y-1.5">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="block text-sm text-accent hover:underline truncate"
            >
              {member.email}
            </a>
          )}
          {member.phone && (
            <a
              href={`tel:${member.phone}`}
              className="block text-sm text-foreground/70 hover:text-accent transition-colors"
            >
              {member.phone}
            </a>
          )}
          {member.website && (
            <a
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-accent transition-colors"
            >
              <LinkIcon />
              Website
            </a>
          )}
        </div>

      </Card.Content>
    </Card>
  );
}
