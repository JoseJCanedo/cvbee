
"use client"; 
import { Card } from "@heroui/react";
import type { Officer } from "@/lib/constants";
// HeroUI Pro component opportunity: Card with avatar layout
// If @heroui/pro is installed, you can swap the inner card for a Pro Avatar Card
// component from https://heroui.pro/components/cards
// Current implementation uses free @heroui/react Card
interface OfficerCardProps {
  officer: Officer;
}

// Generates initials from a full name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function OfficerCard({ officer }: OfficerCardProps) {
  return (
    <Card className="border border-border bg-card hover:border-accent transition-colors duration-200">
      <Card.Content className="p-6 flex flex-col items-center text-center gap-4">

        {/* Avatar — photo or initials fallback */}
        {officer.photo ? (
          <img
            src={officer.photo}
            alt={officer.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-accent"
          />
        ) : (
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold border-2 border-accent"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--accent-foreground)",
            }}
          >
            {getInitials(officer.name)}
          </div>
        )}

        {/* Name & title */}
        <div>
          <p className="font-display font-bold text-lg leading-tight">{officer.name}</p>
          <p className="text-sm text-muted mt-1">{officer.title}</p>
        </div>

        {/* Email link if provided */}
        {officer.email && (
          <a
            href={`mailto:${officer.email}`}
            className="text-xs text-accent hover:underline break-all"
          >
            {officer.email}
          </a>
        )}

      </Card.Content>
    </Card>
  );
}
