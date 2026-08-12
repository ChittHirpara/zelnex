"use client";

import { useSyncExternalStore } from "react";

export const LIQUID_EDGE_FILTER_ID = "zx-liquid-edge";

function probeDisplacementSupport() {
  if (typeof window === "undefined" || typeof CSS === "undefined" || !CSS.supports) return false;
  if (!CSS.supports("backdrop-filter", "blur(1px)")) return false;
  if (!CSS.supports("backdrop-filter", 'url("#probe")')) return false;

  const probe = document.createElement("div");
  probe.style.cssText =
    "position:fixed;left:-9999px;top:-9999px;width:2px;height:2px;pointer-events:none;contain:strict;";
  probe.style.backdropFilter = `blur(1px) url("#${LIQUID_EDGE_FILTER_ID}")`;
  document.body.appendChild(probe);
  const resolved = window.getComputedStyle(probe).backdropFilter;
  document.body.removeChild(probe);

  return resolved.includes("url(") && resolved.includes(LIQUID_EDGE_FILTER_ID);
}

let probeResult: boolean | null = null;

function readProbe() {
  if (probeResult === null) probeResult = probeDisplacementSupport();
  return probeResult;
}

function readServerProbe() {
  return false;
}

function subscribeToProbe() {
  return () => {};
}

export function useLiquidDisplacement() {
  return useSyncExternalStore(subscribeToProbe, readProbe, readServerProbe);
}

export function LiquidEdgeFilter({ scale = 22 }: { scale?: number }) {
  return (
    <svg
      aria-hidden
      focusable="false"
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        <filter
          id={LIQUID_EDGE_FILTER_ID}
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feImage
            href="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27400%27%20height%3D%2780%27%3E%3Cdefs%3E%3ClinearGradient%20id%3D%27h%27%20x1%3D%270%27%20x2%3D%271%27%20y1%3D%270%27%20y2%3D%270%27%3E%3Cstop%20offset%3D%270%27%20stop-color%3D%27%23000%27%2F%3E%3Cstop%20offset%3D%270.14%27%20stop-color%3D%27%23808080%27%2F%3E%3Cstop%20offset%3D%270.86%27%20stop-color%3D%27%23808080%27%2F%3E%3Cstop%20offset%3D%271%27%20stop-color%3D%27%23fff%27%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%27v%27%20x1%3D%270%27%20x2%3D%270%27%20y1%3D%270%27%20y2%3D%271%27%3E%3Cstop%20offset%3D%270%27%20stop-color%3D%27%23000%27%20stop-opacity%3D%270.85%27%2F%3E%3Cstop%20offset%3D%270.3%27%20stop-color%3D%27%23808080%27%20stop-opacity%3D%270%27%2F%3E%3Cstop%20offset%3D%270.7%27%20stop-color%3D%27%23808080%27%20stop-opacity%3D%270%27%2F%3E%3Cstop%20offset%3D%271%27%20stop-color%3D%27%23fff%27%20stop-opacity%3D%270.85%27%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%27400%27%20height%3D%2780%27%20fill%3D%27%23808080%27%2F%3E%3Crect%20width%3D%27400%27%20height%3D%2780%27%20fill%3D%27url(%23h)%27%2F%3E%3Crect%20width%3D%27400%27%20height%3D%2780%27%20fill%3D%27url(%23v)%27%2F%3E%3C%2Fsvg%3E"
            preserveAspectRatio="none"
            result="edgeMap"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="edgeMap"
            scale={scale}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
