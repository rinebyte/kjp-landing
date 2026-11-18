type Patch = { cx: number; cy: number; rx: number; ry: number; r?: number };

const BODY =
  "M0,-46 C13,-46 19,-30 18,-12 C17,6 11,22 5,34 L3,38 L-3,38 C-11,22 -17,6 -18,-12 C-19,-30 -13,-46 0,-46Z";
const TAIL =
  "M0,0 C-7,8 -18,16 -22,34 C-13,27 -5,25 0,17 C5,25 13,27 22,34 C18,16 7,8 0,0Z";
const FIN_L = "M-14,-17 C-28,-15 -34,-2 -31,9 C-25,1 -19,-4 -13,-8Z";
const FIN_R = "M14,-17 C28,-15 34,-2 31,9 C25,1 19,-4 13,-8Z";

/** A top-down, stylised koi. Head points to -y; length ≈ 120 units. */
function Koi({
  id,
  patches,
  delay = "0s",
}: {
  id: string;
  patches: Patch[];
  delay?: string;
}) {
  return (
    <g>
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={BODY} />
        </clipPath>
        <linearGradient id={`${id}-fin`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--paper)" stopOpacity="0.85" />
          <stop offset="1" stopColor="var(--paper)" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* soft shadow beneath the fish */}
      <path d={BODY} fill="black" opacity="0.35" transform="translate(5 7)" />

      <path d={FIN_L} fill={`url(#${id}-fin)`} />
      <path d={FIN_R} fill={`url(#${id}-fin)`} />

      <g transform="translate(0 35)">
        <path
          d={TAIL}
          fill={`url(#${id}-fin)`}
          className="animate-wag"
          style={{ animationDelay: delay }}
        />
      </g>

      <path d={BODY} fill="var(--paper)" />
      <g clipPath={`url(#${id}-clip)`}>
        {patches.map((p, i) => (
          <ellipse
            key={i}
            cx={p.cx}
            cy={p.cy}
            rx={p.rx}
            ry={p.ry}
            transform={p.r ? `rotate(${p.r} ${p.cx} ${p.cy})` : undefined}
            fill="var(--primary)"
          />
        ))}
        {/* dorsal shading */}
        <path d="M0,-30 L0,30" stroke="black" strokeOpacity="0.12" strokeWidth="5" />
      </g>
      <circle cx="-8" cy="-37" r="1.7" fill="var(--ink)" />
      <circle cx="8" cy="-37" r="1.7" fill="var(--ink)" />
    </g>
  );
}

function LilyPad({ x, y, r, rot }: { x: number; y: number; r: number; rot: number }) {
  // A circle with a wedge cut out, plus a few veins.
  const a = (deg: number) => (deg * Math.PI) / 180;
  const p1 = [r * Math.cos(a(-12)), r * Math.sin(a(-12))];
  const p2 = [r * Math.cos(a(12)), r * Math.sin(a(12))];
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path
        d={`M0,0 L${p1[0]},${p1[1]} A${r},${r} 0 1,0 ${p2[0]},${p2[1]} Z`}
        fill="oklch(0.36 0.06 150)"
      />
      <path
        d={`M0,0 L${p1[0]},${p1[1]} A${r},${r} 0 1,0 ${p2[0]},${p2[1]} Z`}
        fill="none"
        stroke="oklch(0.5 0.07 145)"
        strokeOpacity="0.5"
      />
      {[60, 130, 200, 270].map((d) => (
        <line
          key={d}
          x1="0"
          y1="0"
          x2={r * 0.85 * Math.cos(a(d))}
          y2={r * 0.85 * Math.sin(a(d))}
          stroke="oklch(0.5 0.07 145)"
          strokeOpacity="0.35"
        />
      ))}
    </g>
  );
}

export function KoiPond({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-200 -200 400 400"
      className={className}
      role="img"
      aria-label="Dua ikan koi berenang melingkar di kolam"
    >
      <defs>
        <radialGradient id="pond-water" cx="0.42" cy="0.38" r="0.75">
          <stop offset="0" stopColor="oklch(0.27 0.03 40)" />
          <stop offset="0.65" stopColor="oklch(0.17 0.012 35)" />
          <stop offset="1" stopColor="oklch(0.12 0.008 35)" />
        </radialGradient>
        <radialGradient id="pond-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="var(--primary)" stopOpacity="0.28" />
          <stop offset="1" stopColor="var(--primary)" stopOpacity="0" />
        </radialGradient>
        <clipPath id="pond-clip">
          <circle r="186" />
        </clipPath>
      </defs>

      <circle r="198" fill="none" stroke="var(--gold)" strokeOpacity="0.35" />
      <circle
        r="192"
        fill="none"
        stroke="var(--gold)"
        strokeOpacity="0.18"
        strokeDasharray="2 6"
      />
      <circle r="186" fill="url(#pond-water)" />

      <g clipPath="url(#pond-clip)">
        <circle r="150" fill="url(#pond-glow)" />

        {[0, 1, 2].map((i) => (
          <circle
            key={i}
            r="180"
            fill="none"
            stroke="var(--paper)"
            strokeOpacity="0.35"
            className="animate-ripple"
            style={{ animationDelay: `${-i * 2.33}s` }}
          />
        ))}

        <g className="animate-orbit">
          {/* invisible bounds keep the rotation centred on the pond */}
          <circle r="186" fill="transparent" />
          <g transform="translate(108 0) rotate(180) scale(1.05)">
            <Koi
              id="koi-a"
              patches={[
                { cx: 0, cy: -34, rx: 11, ry: 9 },
                { cx: 7, cy: -4, rx: 10, ry: 15, r: 15 },
                { cx: -8, cy: 20, rx: 8, ry: 11, r: -10 },
              ]}
            />
          </g>
          <g transform="translate(-108 0) scale(1.05)">
            <Koi
              id="koi-b"
              delay="-0.7s"
              patches={[
                { cx: -6, cy: -26, rx: 14, ry: 16, r: -20 },
                { cx: 9, cy: 8, rx: 9, ry: 13, r: 20 },
                { cx: -4, cy: 30, rx: 7, ry: 6 },
              ]}
            />
          </g>
        </g>

        <LilyPad x={-128} y={104} r={30} rot={40} />
        <LilyPad x={-92} y={136} r={16} rot={200} />
        <LilyPad x={138} y={-96} r={22} rot={-120} />

        {/* surface sheen */}
        <ellipse cx="-70" cy="-95" rx="90" ry="38" fill="white" opacity="0.035" transform="rotate(-28 -70 -95)" />
      </g>
    </svg>
  );
}
