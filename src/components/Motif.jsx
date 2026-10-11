/* The small illustration on each release card. */
export default function Motif({ kind, ink, panel, accent }) {
  return (
    <svg viewBox="0 0 400 464" preserveAspectRatio="xMidYMid meet" fill="none" aria-hidden="true" style={{ background: panel }}>
      {kind === "doc" && (
        <g>
          <rect x="118" y="92" width="200" height="260" rx="16" fill={ink} opacity="0.28" transform="rotate(8 218 222)" />
          <rect x="100" y="100" width="200" height="260" rx="16" fill={ink} opacity="0.5" transform="rotate(-4 200 230)" />
          <rect x="90" y="104" width="200" height="260" rx="16" fill={ink} />
          <rect x="118" y="140" width="96" height="12" rx="6" fill={panel} />
          <rect x="118" y="172" width="144" height="8" rx="4" fill={panel} opacity="0.6" />
          <rect x="118" y="192" width="130" height="8" rx="4" fill={panel} opacity="0.6" />
          <rect x="118" y="212" width="144" height="8" rx="4" fill={panel} opacity="0.6" />
          <rect x="118" y="244" width="144" height="84" rx="10" fill={panel} opacity="0.35" />
          <circle cx="300" cy="330" r="38" fill={accent} />
          <path d="M288 330h24M302 318l12 12-12 12" stroke={panel} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}
      {kind === "code" && (
        <g>
          <rect x="56" y="96" width="288" height="272" rx="20" fill={ink} opacity="0.14" />
          <circle cx="84" cy="124" r="7" fill={ink} /><circle cx="106" cy="124" r="7" fill={ink} opacity="0.6" /><circle cx="128" cy="124" r="7" fill={ink} opacity="0.35" />
          <path d="M150 200 112 236l38 36M250 200l38 36-38 36" stroke={ink} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M216 184l-32 104" stroke={accent} strokeWidth="16" strokeLinecap="round" />
          <rect x="84" y="316" width="120" height="10" rx="5" fill={ink} opacity="0.5" />
          <rect x="216" y="316" width="96" height="10" rx="5" fill={accent} opacity="0.8" />
        </g>
      )}
      {kind === "timeline" && (
        <g>
          <path d="M120 70v324" stroke={ink} strokeWidth="6" strokeLinecap="round" opacity="0.5" />
          <circle cx="120" cy="120" r="16" fill={accent} />
          <rect x="156" y="96" width="176" height="48" rx="14" fill={ink} />
          <circle cx="120" cy="232" r="16" fill={ink} />
          <rect x="156" y="208" width="140" height="48" rx="14" fill={ink} opacity="0.7" />
          <circle cx="120" cy="344" r="16" fill={ink} opacity="0.6" />
          <rect x="156" y="320" width="160" height="48" rx="14" fill={ink} opacity="0.45" />
        </g>
      )}
      {kind === "bars" && (
        <g>
          {[[70, 250, 110, 0.55], [112, 200, 160, 0.7], [154, 140, 220, 1], [238, 110, 250, 1], [280, 170, 190, 0.7], [322, 230, 130, 0.55]].map(([x, y, h, o]) => (
            <rect key={x} x={x} y={y} width="28" height={h} rx="14" fill={ink} opacity={o} />
          ))}
          <rect x="196" y="180" width="28" height="180" rx="14" fill={accent} />
          <circle cx="200" cy="96" r="14" fill={accent} />
        </g>
      )}
      {kind === "wave" && (
        <g>
          <circle cx="200" cy="170" r="72" fill={ink} />
          <rect x="180" y="126" width="40" height="72" rx="20" fill={panel} />
          <path d="M170 176a30 30 0 0 0 60 0M200 206v18" stroke={panel} strokeWidth="8" strokeLinecap="round" />
          <path d="M50 330h20l14-34 16 64 18-92 18 110 16-72 14 40 14-24 16 44 18-66 16 50 14-30 14 14h32" stroke={accent} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}
    </svg>
  );
}
