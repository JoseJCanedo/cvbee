"use client";

interface CategoryChipProps {
  label: string;
  active: boolean;
  onToggle: (label: string) => void;
}

/**
 * A single toggleable filter chip.
 * Active chips use the accent color; inactive are muted.
 */
export default function CategoryChip({ label, active, onToggle }: CategoryChipProps) {
  return (
    <button
      onClick={() => onToggle(label)}
      aria-pressed={active}
      className={`
        px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-150
        ${active
          ? "bg-accent text-accent-foreground border-accent"
          : "bg-transparent text-foreground/60 border-border hover:border-accent hover:text-accent"
        }
      `}
    >
      {label}
    </button>
  );
}
