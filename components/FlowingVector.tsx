"use client";

import React, { useEffect, useRef } from "react";

export function FlowingVector() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const wrap = wrapRef.current;
    if (!path || !wrap) return;

    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;

    // ── Build accurate monotonically increasing Max-Y mapping table (1000 samples) ──
    const SAMPLES = 1000;
    const table: { l: number; y: number }[] = [];
    let currentMaxY = 0;

    for (let i = 0; i <= SAMPLES; i++) {
      const l = (i / SAMPLES) * len;
      const pt = path.getPointAtLength(l);
      currentMaxY = Math.max(currentMaxY, pt.y);
      table.push({ l, y: currentMaxY });
    }

    const startSvgY = table[0].y;
    const endSvgY = table[table.length - 1].y;

    let rafId: number;

    const update = () => {
      const parent = document.getElementById("vector-wrapper");
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const winH = window.innerHeight;

      // Active screen drawing target: leads ahead at 85% down the viewport
      const scrollProgress = (-rect.top + winH * 0.85) / rect.height;
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      const targetSvgY = startSvgY + clampedProgress * (endSvgY - startSvgY);

      // Binary search the exact stroke length where path reaches targetSvgY
      let low = 0;
      let high = table.length - 1;
      let best = 0;

      while (low <= high) {
        const mid = (low + high) >> 1;
        if (table[mid].y <= targetSvgY) {
          best = mid;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }

      // Linear interpolation between table samples for 120fps fluid motion
      let currentLength = table[best].l;
      if (best < table.length - 1) {
        const dy = table[best + 1].y - table[best].y;
        if (dy > 0.001) {
          const t = Math.max(0, Math.min(1, (targetSvgY - table[best].y) / dy));
          currentLength = table[best].l + t * (table[best + 1].l - table[best].l);
        }
      }

      currentLength = Math.max(40, Math.min(len, currentLength));
      path.style.strokeDashoffset = `${len - currentLength}`;
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    update();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // ═════════════════════════════════════════════════════════════════════════
  // UNBROKEN CONTINUOUS LINE ART WITH DELIGHTFUL ACCENT SHAPES THROUGHOUT:
  // 1. Doctor / Scientist Visor Profile & Loop (Y: 50 - 450)
  // 2. Cute Little Capsule / Pill Shape (Y: 800 - 990)
  // 3. Delicate Sprouting Leaf (Y: 1320 - 1440)
  // 4. Petite 6-Petal Daisy Flower at Boundary (Y: 1890 - 2010)
  // 5. DNA Helix Twirl & Botanical Ginkgo Leaf (Y: 2700 - 3300)
  // 6. Petite Innovation Lightbulb with Sprout (Y: 3900 - 4280)
  // 7. Medical Shield Loop & Purity Droplet (Y: 4950 - 5600)
  // 8. Petite 4-Petal Clover Bloom (Y: 6010 - 6210)
  // 9. Planetary Orbit Loop & Terminal Botanical Leaf (Y: 7120 - 8100)
  // ═════════════════════════════════════════════════════════════════════════
  const continuousLineArtD = `
    M 1200 50
    C 1170 90, 1080 110, 1020 80
    C 970 65, 930 95, 940 140
    C 950 180, 1000 210, 1050 195
    C 1090 180, 1105 150, 1075 120
    C 1045 90, 975 120, 975 175
    C 975 240, 900 260, 875 320
    C 850 380, 900 420, 940 395
    C 965 375, 960 335, 925 335
    C 895 335, 885 375, 900 440

    C 920 560, 1020 700, 1060 820
    C 1060 785, 1110 785, 1110 820
    L 1110 920
    C 1110 955, 1060 955, 1060 920
    L 1060 820
    L 1110 870
    L 1060 870
    L 1060 920

    C 1060 1060, 950 1180, 980 1330
    C 1020 1300, 1060 1330, 1040 1380
    C 1020 1420, 980 1390, 980 1330

    C 980 1500, 1180 1720, 1200 1950
    C 1195 1920, 1180 1890, 1200 1890
    C 1220 1890, 1205 1920, 1200 1950
    C 1215 1930, 1245 1910, 1255 1925
    C 1265 1940, 1235 1955, 1200 1950
    C 1220 1960, 1255 1975, 1245 1990
    C 1235 2005, 1210 1980, 1200 1950
    C 1205 1970, 1215 2005, 1200 2005
    C 1185 2005, 1195 1970, 1200 1950
    C 1185 1965, 1150 1985, 1140 1970
    C 1130 1955, 1165 1940, 1200 1950
    C 1180 1935, 1145 1915, 1155 1900
    C 1165 1885, 1190 1920, 1200 1950
    L 1200 2010

    C 1200 2250, 1080 2480, 1040 2680
    C 1000 2660, 980 2710, 1020 2740
    C 1060 2770, 1080 2720, 1040 2680

    C 1040 2850, 950 3050, 960 3230
    C 1000 3200, 1030 3230, 1010 3270
    C 985 3300, 960 3270, 960 3230

    C 960 3450, 950 3700, 1000 3920
    C 960 3950, 940 4010, 950 4075
    C 950 4135, 980 4180, 1000 4200
    L 1000 4235 L 1040 4235 L 1040 4200
    C 1060 4180, 1090 4135, 1090 4075
    C 1100 4010, 1060 3950, 1020 3920
    C 1005 3905, 990 3905, 1000 3920
    C 1005 3975, 980 4025, 1000 4075
    C 1010 4105, 1030 4100, 1020 4065
    C 1030 4080, 1045 4060, 1025 4035
    C 1010 4015, 1005 3975, 1000 3920
    L 1020 4235
    L 1010 4255 L 1030 4255 L 1020 4275

    C 1020 4550, 1180 4750, 1160 4930
    C 1200 4910, 1220 4960, 1180 5010
    C 1140 5050, 1120 4980, 1160 4930

    C 1160 5120, 1060 5350, 1080 5530
    C 1115 5500, 1135 5540, 1100 5580
    C 1065 5580, 1055 5540, 1080 5530

    C 1080 5750, 1150 5900, 1120 6050
    C 1150 6010, 1190 6010, 1200 6040
    C 1220 6070, 1210 6110, 1175 6125
    L 1120 6125
    C 1155 6160, 1150 6205, 1115 6205
    C 1080 6205, 1080 6160, 1120 6125
    L 1070 6125
    C 1035 6110, 1025 6070, 1055 6040
    C 1075 6010, 1110 6010, 1120 6040
    L 1120 6205

    C 1120 6550, 1220 6850, 1180 7130
    C 1220 7100, 1250 7150, 1200 7200
    C 1150 7220, 1130 7160, 1180 7130

    C 1180 7420, 1080 7750, 1100 8030
    C 1135 8000, 1155 8040, 1120 8080
    C 1085 8080, 1075 8040, 1100 8030
    L 1100 8600
  `;

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none absolute inset-0 z-50 w-full h-full overflow-visible"
    >
      <svg
        viewBox="0 0 1440 8600"
        preserveAspectRatio="none"
        className="w-full h-full block pointer-events-none"
        style={{
          filter: "drop-shadow(0 1.5px 3px rgba(8, 43, 97, 0.3)) drop-shadow(0 0 1px rgba(8, 43, 97, 0.75))",
        }}
      >
        {/* Sleek, Thin Single-Line Art (Pure White Line Art) */}
        <path
          ref={pathRef}
          d={continuousLineArtD}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="99999"
          strokeDashoffset="99999"
        />
      </svg>
    </div>
  );
}

export default FlowingVector;
