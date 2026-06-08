"use client";

interface HexBackgroundProps {
  className?: string;
  opacity?: number;
}

/**
 * Decorative SVG honeycomb hex grid.
 * Used as an atmospheric background element — not clipart.
 * Respects the --hex-fill and --hex-stroke CSS variables from globals.css.
 */
export default function HexBackground({ className = "", opacity = 1 }: HexBackgroundProps) {
  // Hexagon grid math: flat-top hexagons
  const hexRadius = 36;
  const hexWidth = hexRadius * 2;
  const hexHeight = Math.sqrt(3) * hexRadius;
  const cols = 14;
  const rows = 8;

  // Generate pointy-top hex polygon points
  function hexPoints(cx: number, cy: number, r: number): string {
    const angles = [30, 90, 150, 210, 270, 330];
    return angles
      .map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return `${cx + r * Math.cos(rad)},${cy + r * Math.sin(rad)}`;
      })
      .join(" ");
  }

  const hexagons: { cx: number; cy: number; key: string }[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cx = col * hexWidth * 0.75 + hexRadius;
      const cy = row * hexHeight + (col % 2 === 1 ? hexHeight / 2 : 0) + hexHeight / 2;
      hexagons.push({ cx, cy, key: `${row}-${col}` });
    }
  }

  const svgWidth = cols * hexWidth * 0.75 + hexRadius;
  const svgHeight = rows * hexHeight + hexHeight;

  return (
    <svg
      className={className}
      style={{ opacity }}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {hexagons.map(({ cx, cy, key }) => (
        <polygon
          key={key}
          points={hexPoints(cx, cy, hexRadius - 2)}
          fill="var(--hex-fill)"
          stroke="var(--hex-stroke)"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
