/**
 * Seigaiha (青海波) — the classic Japanese overlapping-wave pattern.
 * Each tile redraws the arcs that spill in from neighbouring rows so the
 * pattern tiles seamlessly; later rows overlap earlier ones.
 */
export function Seigaiha({
  id,
  fill,
  stroke,
  strokeOpacity = 0.25,
  size = 40,
  className,
}: {
  id: string;
  fill: string;
  stroke: string;
  strokeOpacity?: number;
  size?: number;
  className?: string;
}) {
  const r = size / 2;
  const h = size / 2;
  const centres: Array<[number, number]> = [
    [0, -h / 2],
    [size, -h / 2],
    [r, 0],
    [0, h / 2],
    [size, h / 2],
    [r, h],
  ];
  return (
    <svg aria-hidden className={className} width="100%" height="100%">
      <defs>
        <pattern id={id} width={size} height={h} patternUnits="userSpaceOnUse">
          {centres.map(([cx, cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r={r} fill={fill} />
              {[1, 0.75, 0.5, 0.25].map((k) => (
                <circle
                  key={k}
                  cx={cx}
                  cy={cy}
                  r={r * k - 0.5}
                  fill="none"
                  stroke={stroke}
                  strokeOpacity={strokeOpacity}
                  strokeWidth="1"
                />
              ))}
            </g>
          ))}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
