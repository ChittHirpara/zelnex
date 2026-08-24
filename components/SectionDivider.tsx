/**
 * SectionDivider — organic SVG wave blends between sections
 * Usage:  <SectionDivider from="#ffffff" to="#0a1628" flip />
 *  `flip`  mirrors the wave so consecutive dividers feel varied
 */
export function SectionDivider({
  from,
  to,
  flip = false,
  height = 72,
  className = "",
}: {
  from: string;
  to: string;
  flip?: boolean;
  height?: number;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${className}`}
      style={{
        background: to,
        transform: flip ? "scaleX(-1)" : undefined,
        marginBottom: -1,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 1440 ${height}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height }}
      >
        <path
          d={`M0,${height} L0,${height * 0.35} C240,${height * 0.05} 480,${height * 0.9} 720,${height * 0.45} C960,${height * 0.05} 1200,${height * 0.85} 1440,${height * 0.3} L1440,${height} Z`}
          fill={from}
        />
      </svg>
    </div>
  );
}

export default SectionDivider;
