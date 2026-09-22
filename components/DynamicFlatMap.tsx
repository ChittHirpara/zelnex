"use client";

import React, { useState, useEffect, useMemo, useCallback, memo, useRef } from "react";
import { WORLD_PATHS, getProjectedCoords } from "@/data/worldMapData";

// ────────────────────────────────────────────────────────────────────────────
// TYPES
// ────────────────────────────────────────────────────────────────────────────
export interface DestinationMarket {
  id: string;
  country: string;
  code: string;       // ISO 2-letter code
  city: string;
  region: "Africa" | "Asia" | "Middle East & CIS" | "Americas" | "Europe & Oceania";
  authority: string;
  dossierStatus: string;
  stability: string;
  volume: string;
  keyClasses: string[];
  lat: number;
  lng: number;
  x: number;
  y: number;
}

// ────────────────────────────────────────────────────────────────────────────
// ORIGIN
// ────────────────────────────────────────────────────────────────────────────
const [indiaX, indiaY] = getProjectedCoords(72.8311, 21.1702);
const ORIGIN = { city: "Surat", country: "India", x: indiaX, y: indiaY };

// ────────────────────────────────────────────────────────────────────────────
// MARKET DATA
// ────────────────────────────────────────────────────────────────────────────
function mk(
  id: string, country: string, code: string, city: string,
  region: DestinationMarket["region"],
  authority: string, dossierStatus: string, stability: string, volume: string,
  keyClasses: string[], lng: number, lat: number
): DestinationMarket {
  const [x, y] = getProjectedCoords(lng, lat);
  return { id, country, code, city, region, authority, dossierStatus, stability, volume, keyClasses, lat, lng, x, y };
}

export const GLOBAL_MARKETS: DestinationMarket[] = [
  mk("ghana","Ghana","GH","Accra","Africa","FDA Ghana","WHO-GMP Validated","Zone IVb Validated","75M Units / yr",["Antidiabetics","Cephalosporins","Syrups"],-0.187,5.6037),
  mk("kenya","Kenya","KE","Nairobi","Africa","PPB Ministry of Health","Fast-Track eCTD","Zone IVb Validated","95M Units / yr",["Cardiovascular","Antibiotics","IV Fluids"],36.8219,-1.2921),
  mk("nigeria","Nigeria","NG","Lagos","Africa","NAFDAC Approved","CTD Module 1–5 Active","Zone IVb · 30°C / 75% RH","180M Units / yr",["Anti-Infectives","Analgesics","Antimalarials"],3.3792,6.5244),
  mk("tanzania","Tanzania","TZ","Dar es Salaam","Africa","TMDA Clearance","Full CTD Validated","Zone IVb Tested","60M Units / yr",["Gastrointestinal","Injectables","Oral Solids"],39.2842,-6.7924),
  mk("afghanistan","Afghanistan","AF","Kabul","Middle East & CIS","AFDA Health Ministry","Full CTD Dossier Active","Zone IVb Climatic Stability","65M Units / yr",["Essential Antibiotics","Analgesics","Injectables"],69.1723,34.5553),
  mk("yemen","Yemen","YE","Aden / Sanaa","Middle East & CIS","SBDMA / MOH Yemen","Institutional Supply Dossier","Zone IVb High Heat & Humidity","70M Units / yr",["Anti-Infectives","IV Infusions","Oral Rehydration"],44.2064,15.3694),
  mk("cambodia","Cambodia","KH","Phnom Penh","Asia","DDF Cambodia (MOH)","ACTD Dossier Approved","Zone IVb Validated","45M Units / yr",["Antipyretics","Anti-Infective Capsules","Syrups"],104.9282,11.5564),
  mk("philippines","Philippines","PH","Manila","Asia","FDA Philippines","Certificate of Registration (CPR)","Zone IVb · 30°C / 75% RH","135M Units / yr",["Antibiotics","Nutraceuticals","Cardiovascular"],120.9842,14.5995),
  mk("venezuela","Venezuela","VE","Caracas","Americas","INHRR / MPPS Authority","Sanitary Registration Dossier","Zone IVb Tropical Testing","85M Units / yr",["Critical Care","Cardiovascular","Specialty Solids"],-66.9036,10.4806),
  mk("ecuador","Ecuador","EC","Quito / Guayaquil","Americas","ARCSA Authority","Validated Spanish CTD Dossier","Zone IVb Validated","60M Units / yr",["Gastrointestinal","Antibiotics","Topicals"],-78.4678,-0.1807),
  mk("peru","Peru","PE","Lima","Americas","DIGEMID Registry","Sanitary Registration Approved","Zone IVb Validated","70M Units / yr",["Antibiotics","Injectables","Cardiovascular"],-77.0428,-12.0464),
  mk("bolivia","Bolivia","BO","La Paz / Santa Cruz","Americas","AGEMED Bolivia","Sanitary Registration Approved","Zone IVb Validated","55M Units / yr",["Pain Management","Anti-Infectives","Respiratory"],-68.1193,-16.4897),
];

// ────────────────────────────────────────────────────────────────────────────
// ARC PATH
// ────────────────────────────────────────────────────────────────────────────
function arcPath(x1: number, y1: number, x2: number, y2: number): string {
  const r = (n: number) => Math.round(n * 1e4) / 1e4;
  const dx = x2 - x1, dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const h = Math.min(200, Math.max(50, dist * 0.38));
  const cx = r((x1 + x2) / 2);
  const cy = r(Math.min(y1, y2) - h * 0.8);
  return `M ${r(x1)} ${r(y1)} Q ${cx} ${cy} ${r(x2)} ${r(y2)}`;
}

// ────────────────────────────────────────────────────────────────────────────
// WORLD COUNTRIES — Crisp Light Porcelain with Sapphire Active State
// ────────────────────────────────────────────────────────────────────────────
const WorldCountries = memo(function WorldCountries({ activeId }: { activeId: string }) {
  return (
    <g>
      {WORLD_PATHS.map((c, i) => {
        const isActive = c.name.toLowerCase().includes(activeId.toLowerCase());
        return (
          <path
            key={`wc-${c.id || 'country'}-${i}`}
            d={c.d}
            fill={isActive ? "#006EDC" : "#DDE8F6"}
            stroke={isActive ? "#FFFFFF" : "#C4D8F0"}
            strokeWidth={isActive ? 1.5 : 0.6}
            className="transition-colors duration-300"
          />
        );
      })}
    </g>
  );
});

// ────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ────────────────────────────────────────────────────────────────────────────
const TOUR_MS = 2500;
const REGIONS = ["All", "Africa", "Americas", "Asia", "Middle East & CIS"] as const;

export function DynamicFlatMap() {
  const [region, setRegion] = useState("All");
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState<DestinationMarket | null>(null);
  const [rotating, setRotating] = useState(true);

  const markets = useMemo(() =>
    region === "All" ? GLOBAL_MARKETS : GLOBAL_MARKETS.filter(m => m.region === region),
    [region]
  );

  const active = hovered ?? markets[idx % markets.length] ?? GLOBAL_MARKETS[0];

  // Ref to avoid stale closure in timer
  const marketsRef = useRef(markets);
  useEffect(() => {
    marketsRef.current = markets;
  }, [markets]);

  // ── Cycle market after duration ──
  useEffect(() => {
    if (!rotating) return;
    const t = setTimeout(() => {
      setIdx(prev => (prev + 1) % marketsRef.current.length);
    }, TOUR_MS);
    return () => clearTimeout(t);
  }, [idx, rotating, region]);

  const handleClick = useCallback((m: DestinationMarket, i: number) => {
    setHovered(m);
    setIdx(i);
    setRotating(false);
  }, []);

  return (
    <div className="relative w-full bg-white select-none font-['Inter',sans-serif] overflow-hidden">
      
      {/* ══════════════════════════════════════════
          TOP CONTROL BAR (Crisp White & Soft Blue)
      ══════════════════════════════════════════ */}
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 bg-[#F4F8FD] border-b border-blue-100 gap-3">
        
        {/* Active Destination Telemetry Badge */}
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#006EDC] animate-pulse" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#0B1E48] tracking-wider uppercase font-['JetBrains_Mono',monospace]">
              DISPATCH DESTINATION:
            </span>
            <span className="text-xs font-extrabold text-[#006EDC] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
              {active.country.toUpperCase()}
            </span>
            <span className="hidden sm:inline text-xs text-slate-500 font-medium">
              · {active.city} · {active.authority}
            </span>
          </div>
        </div>

        {/* Region Filter Pills */}
        <div className="flex items-center gap-1 sm:gap-1.5 text-xs overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none shrink-0">
          {REGIONS.map(r => (
            <button
              key={r}
              onClick={() => { setRegion(r); setIdx(0); }}
              className={`px-3 py-1 rounded-lg text-xs transition-all duration-150 cursor-pointer font-medium whitespace-nowrap ${
                region === r
                  ? "bg-[#006EDC] text-white font-bold shadow-2xs"
                  : "bg-white text-slate-600 hover:text-[#006EDC] hover:bg-blue-50 border border-blue-100"
              }`}
            >
              {r === "All" ? "All" : r}
            </button>
          ))}

          <button
            onClick={() => setRotating(!rotating)}
            className="ml-1 px-2.5 py-1 rounded-lg text-[11px] text-[#006EDC] font-semibold bg-white border border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap"
            title={rotating ? "Pause Rotation" : "Play Rotation"}
          >
            {rotating ? "PAUSE" : "PLAY"}
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          FULL-WIDTH MAP CANVAS (Edge-to-Edge)
      ══════════════════════════════════════════ */}
      <div className="relative w-full min-h-[260px] sm:min-h-[380px] md:min-h-[480px] lg:min-h-[560px] flex items-center justify-center p-0 overflow-hidden bg-[#F0F7FF]">
        
        {/* Subtle Grid Pattern in Ocean */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 110, 220, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 110, 220, 0.2) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden
        />

        <svg
          viewBox="20 35 960 440"
          className="relative z-10 w-full h-full min-h-[250px] sm:min-h-[360px] md:min-h-[460px] lg:min-h-[540px] object-contain"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Strict viewBox clip */}
            <clipPath id="map-clip">
              <rect x="0" y="0" width="1000" height="540" />
            </clipPath>
            <filter id="f-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="f-dot" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2.5" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* All map content clipped to viewBox */}
          <g clipPath="url(#map-clip)">

            {/* World Continents */}
            <WorldCountries activeId={active.country} />

            {/* ── FLIGHT VECTORS: Sapphire & Cyan Lasers ── */}
            <g>
              {/* Layer 1: Passive route lines */}
              {markets.map(m => {
                const isActive = m.id === active.id;
                const d = arcPath(ORIGIN.x, ORIGIN.y, m.x, m.y);
                return (
                  <path
                    key={`track-${m.id}`}
                    d={d}
                    fill="none"
                    stroke="#006EDC"
                    strokeWidth={isActive ? 1.6 : 0.6}
                    strokeOpacity={isActive ? 0 : 0.2}
                    strokeDasharray={isActive ? undefined : "4 5"}
                  />
                );
              })}

              {/* Layer 2: Active route — glowing electric sapphire */}
              {(() => {
                const d = arcPath(ORIGIN.x, ORIGIN.y, active.x, active.y);
                return (
                  <g key={`active-arc-${active.id}`}>
                    {/* Soft glow shadow */}
                    <path d={d} fill="none" stroke="#00B8F2" strokeWidth="6" strokeOpacity="0.3" filter="url(#f-glow)" />
                    {/* Main crisp line */}
                    <path d={d} fill="none" stroke="#006EDC" strokeWidth="2.2" strokeOpacity="1" />
                    {/* Leading photon */}
                    <circle r="4" fill="#006EDC" fillOpacity="1" filter="url(#f-dot)">
                      <animateMotion path={d} dur="2.4s" repeatCount="indefinite" rotate="auto" />
                    </circle>
                    {/* Trailing photon */}
                    <circle r="2" fill="#00B8F2" fillOpacity="0.8">
                      <animateMotion path={d} dur="2.4s" begin="0.6s" repeatCount="indefinite" rotate="auto" />
                    </circle>
                  </g>
                );
              })()}

              {/* Layer 3: Slow ghost particles on routes */}
              {markets.filter(m => m.id !== active.id).map((m, i) => {
                const d = arcPath(ORIGIN.x, ORIGIN.y, m.x, m.y);
                const dur = `${5.5 + (i % 5) * 1.2}s`;
                const begin = `${(i * 0.8) % 4}s`;
                return (
                  <circle key={`ghost-${m.id}`} r="1.5" fill="#006EDC" fillOpacity="0.4">
                    <animateMotion path={d} dur={dur} begin={begin} repeatCount="indefinite" rotate="auto" />
                  </circle>
                );
              })}
            </g>

            {/* ── DESTINATION DOTS: Sapphire Nodes with White Rings ── */}
            <g>
              {markets.map((m, i) => {
                const isActive = m.id === active.id;
                return (
                  <g
                    key={`dot-${m.id}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleClick(m, i)}
                    onMouseEnter={() => setHovered(m)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Pulse ring on active */}
                    {isActive && (
                      <circle cx={m.x} cy={m.y} r="5" fill="none" stroke="#006EDC" strokeWidth="1.2" strokeOpacity="0.6">
                        <animate attributeName="r" values="5;18" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity" values="0.6;0" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}
                    
                    {/* Base Dot */}
                    <circle
                      cx={m.x} cy={m.y}
                      r={isActive ? 4.5 : 2.2}
                      fill={isActive ? "#006EDC" : "#4A7CA8"}
                      stroke="#FFFFFF"
                      strokeWidth={0.8}
                    />
                    
                    {/* Center Core */}
                    {isActive && <circle cx={m.x} cy={m.y} r="1.8" fill="#FFFFFF" />}
                    
                    {/* Full Country Name Pill — active/hovered only */}
                    {isActive && (() => {
                      const fullName = m.country.toUpperCase();
                      const pillWidth = Math.max(54, fullName.length * 6.5 + 18);
                      const pillHeight = 16;
                      const pillX = m.x - pillWidth / 2;
                      const pillY = m.y - 25;
                      return (
                        <g>
                          {/* Pointer Triangle */}
                          <polygon
                            points={`${m.x - 3.5},${pillY + pillHeight} ${m.x + 3.5},${pillY + pillHeight} ${m.x},${pillY + pillHeight + 3.5}`}
                            fill="#006EDC"
                          />
                          <rect
                            x={pillX}
                            y={pillY}
                            width={pillWidth}
                            height={pillHeight}
                            rx="4"
                            fill="#006EDC"
                            stroke="#FFFFFF"
                            strokeWidth="1.2"
                            filter="url(#f-glow)"
                          />
                          <text
                            x={m.x}
                            y={pillY + 11.5}
                            textAnchor="middle"
                            fill="#FFFFFF"
                            fontSize="7.5"
                            fontWeight="800"
                            fontFamily="Inter, sans-serif"
                            letterSpacing="0.06em"
                          >
                            {fullName}
                          </text>
                        </g>
                      );
                    })()}
                  </g>
                );
              })}
            </g>

            {/* ── ORIGIN: SURAT, INDIA ── */}
            <g>
              <circle cx={ORIGIN.x} cy={ORIGIN.y} r="9" fill="none" stroke="#006EDC" strokeWidth="1.2" strokeOpacity="0.5">
                <animate attributeName="r" values="9;24" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.5;0" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <circle cx={ORIGIN.x} cy={ORIGIN.y} r="6" fill="#006EDC" fillOpacity="0.2" />
              <circle cx={ORIGIN.x} cy={ORIGIN.y} r="3.5" fill="#006EDC" stroke="#FFFFFF" strokeWidth="1" />
              <circle cx={ORIGIN.x} cy={ORIGIN.y} r="1.5" fill="#FFFFFF" />
              
              {/* Label */}
              <text
                x={ORIGIN.x} y={ORIGIN.y + 15}
                textAnchor="middle"
                fill="#0B1E48" fontSize="8"
                fontFamily="Inter, sans-serif"
                fontWeight="700" letterSpacing="0.1em"
              >
                ZELNEX HQ
              </text>
            </g>

          </g>
        </svg>
      </div>

    </div>
  );
}

export default DynamicFlatMap;
