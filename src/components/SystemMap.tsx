/**
 * Hero graphic: the areas Sol already works in, all feeding one
 * dashed "in progress" node, AI solutions. Shows the career direction
 * without claiming finished AI expertise.
 */
const nodes = [
  { x: 92, y: 86, label: "IT support", sub: "hardware · network" },
  { x: 348, y: 86, label: "E-commerce", sub: "catalogue · SEO" },
  { x: 92, y: 314, label: "Web", sub: "WordPress · Magento" },
  { x: 348, y: 314, label: "Customer support", sub: "orders · follow-ups" },
];
const center = { x: 220, y: 200 };

export function SystemMap() {
  return (
    <figure className="relative mx-auto w-full max-w-[460px]" aria-label="Diagram: IT support, e-commerce, web and customer support experience connecting to AI solutions, which is in progress.">
      <svg viewBox="0 0 440 400" className="h-auto w-full" role="img" aria-hidden="true">
        <defs>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#7cb8ff" stopOpacity="0.35" />
            <stop offset="1" stopColor="#7cb8ff" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connections */}
        {nodes.map((n) => (
          <g key={n.label}>
            <line x1={n.x} y1={n.y} x2={center.x} y2={center.y} stroke="rgba(180,205,255,0.18)" strokeWidth="1" />
            <line
              className="signal"
              x1={n.x}
              y1={n.y}
              x2={center.x}
              y2={center.y}
              stroke="#7cb8ff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="8 112"
              style={{ animationDelay: `${(n.x + n.y) % 7 * 0.35}s` }}
            />
          </g>
        ))}

        {/* Outer nodes: existing experience */}
        {nodes.map((n) => (
          <g key={`${n.label}-node`}>
            <circle cx={n.x} cy={n.y} r="5" fill="#eef3ff" />
            <circle cx={n.x} cy={n.y} r="11" fill="none" stroke="rgba(238,243,255,0.25)" />
            <text
              x={n.x}
              y={n.y < center.y ? n.y - 26 : n.y + 34}
              textAnchor="middle"
              fill="#eef3ff"
              fontFamily="IBM Plex Sans, sans-serif"
              fontSize="14"
              fontWeight="500"
            >
              {n.label}
            </text>
            <text
              x={n.x}
              y={n.y < center.y ? n.y - 10 : n.y + 50}
              textAnchor="middle"
              fill="#8a9cc2"
              fontFamily="IBM Plex Mono, monospace"
              fontSize="10.5"
            >
              {n.sub}
            </text>
          </g>
        ))}

        {/* Center: AI solutions, in progress */}
        <circle cx={center.x} cy={center.y} r="72" fill="url(#core)" />
        <circle className="pulse" cx={center.x} cy={center.y} r="46" fill="none" stroke="#7cb8ff" strokeOpacity="0.5" />
        <circle cx={center.x} cy={center.y} r="38" fill="#0a1a3a" stroke="#7cb8ff" strokeWidth="1.5" strokeDasharray="4 5" />
        <text x={center.x} y={center.y - 2} textAnchor="middle" fill="#eef3ff" fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="600">
          AI solutions
        </text>
        <text x={center.x} y={center.y + 15} textAnchor="middle" fill="#7cb8ff" fontFamily="IBM Plex Mono, monospace" fontSize="10">
          in progress
        </text>
      </svg>
      <figcaption className="mt-2 text-center font-mono text-[11.5px] text-ink-faint">
        current experience → developing specialisation
      </figcaption>
    </figure>
  );
}
