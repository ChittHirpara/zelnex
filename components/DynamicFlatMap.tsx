"use client";

import React, { useState, useEffect, useMemo, useCallback, memo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
const [indiaX, indiaY] = getProjectedCoords(78.9629, 20.5937);
const ORIGIN = { city: "Ahmedabad", country: "India", x: indiaX, y: indiaY };

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
  mk("nigeria","Nigeria","NG","Lagos","Africa","NAFDAC Approved","CTD Module 1–5 Active","Zone IVb · 30°C / 75% RH","180M Units / yr",["Anti-Infectives","Analgesics","Antimalarials"],3.3792,6.5244),
  mk("kenya","Kenya","KE","Nairobi","Africa","PPB Ministry of Health","Fast-Track eCTD","Zone IVb Validated","95M Units / yr",["Cardiovascular","Antibiotics","IV Fluids"],36.8219,-1.2921),
  mk("tanzania","Tanzania","TZ","Dar es Salaam","Africa","TMDA Clearance","Full CTD Validated","Zone IVb Tested","60M Units / yr",["Gastrointestinal","Injectables","Oral Solids"],39.2842,-6.7924),
  mk("ghana","Ghana","GH","Accra","Africa","FDA Ghana","WHO-GMP Validated","Zone IVb Validated","75M Units / yr",["Antidiabetics","Cephalosporins","Syrups"],-0.187,5.6037),
  mk("south-africa","South Africa","ZA","Johannesburg","Africa","SAHPRA Compliant","Institutional Hospital Supply","ICH Zone II / IVb","110M Units / yr",["Sterile Injectables","Oncology","Anesthesia"],28.0473,-26.2041),
  mk("egypt","Egypt","EG","Cairo","Africa","EDA Authority","Regional Import Quota","Zone IVa / IVb","85M Units / yr",["Pediatric Suspensions","Ophthalmic","Antibiotics"],31.2357,30.0444),
  mk("uae","United Arab Emirates","AE","Dubai","Middle East & CIS","MOHAP Validated","eCTD GCC Standard","Zone IVb · 30°C / 75% RH","140M Units / yr",["Cold-Chain Vials","Lyophilized Powder","Tablets"],55.2708,25.2048),
  mk("saudi","Saudi Arabia","SA","Riyadh","Middle East & CIS","SFDA Standard","Tender Ready CTD","Zone IVb High Heat","160M Units / yr",["Cardiology","Metabolic","Surgical Injectables"],46.6753,24.7136),
  mk("uzbekistan","Uzbekistan","UZ","Tashkent","Middle East & CIS","MOH Uzbekistan","Bilingual RU/UZ CTD","Zone II / IV","90M Units / yr",["Multivitamins","Anti-Infectives"],69.2401,41.2995),
  mk("kazakhstan","Kazakhstan","KZ","Astana","Middle East & CIS","EAEU Health Ministry","EAEU Regional Dossier","Cold-Chain & Zone II","70M Units / yr",["NSAIDs","Respiratory"],76.8512,43.222),
  mk("vietnam","Vietnam","VN","Hanoi / HCMC","Asia","DAV Ministry of Health","ACTD & eCTD Approved","Zone IVb Tropical","150M Units / yr",["Cephalosporin Injections","Gastroprokinetics"],107.0,16.0),
  mk("philippines","Philippines","PH","Manila","Asia","FDA Philippines","Certificate of Registration","Zone IVb · 30°C / 75% RH","135M Units / yr",["Antibiotics","Nutraceuticals","Cardiovascular"],120.9842,14.5995),
  mk("myanmar","Myanmar","MM","Yangon","Asia","FDA Myanmar","MOH Import Licensure","Zone IVb Validated","80M Units / yr",["Essential Medicines","Oral Suspensions"],96.1951,16.8661),
  mk("cambodia","Cambodia","KH","Phnom Penh","Asia","DDF Cambodia","ACTD Dossier","Zone IVb Validated","45M Units / yr",["Antipyretics","Anti-Infective Capsules"],104.9282,11.5564),
  mk("brazil","Brazil","BR","São Paulo","Americas","ANVISA Compliant","Full Portuguese Dossier","Zone IVb Tested","210M Units / yr",["Specialty Generics","High-Potency Solids","Vials"],-46.6333,-23.5505),
  mk("mexico","Mexico","MX","Mexico City","Americas","COFEPRIS Standard","Spanish CTD","Zone II & IVb","175M Units / yr",["Chronic Disease","Sterile Ampoules"],-99.1332,19.4326),
  mk("colombia","Colombia","CO","Bogotá","Americas","INVIMA Clearance","Bioequivalence Supported","Zone IVb Validated","95M Units / yr",["Gastrointestinal","Critical Care"],-74.0721,4.711),
  mk("peru","Peru","PE","Lima","Americas","DIGEMID Registry","Sanitary Registration","Zone IVb Tested","65M Units / yr",["Pain Management","Dermatologicals"],-77.0428,-12.0464),
  mk("usa","United States","US","New York","Americas","cGMP / US-FDA Benchmarked","eCTD Module 2–5","Real-Time 36-Month Testing","Export Hub",["Contract Manufacturing","Custom Dossiers"],-74.006,40.7128),
  mk("uk","United Kingdom","GB","London","Europe & Oceania","MHRA Export Compliant","ICH eCTD Standard","Zone I / II Validated","Trading Hub",["Lyophilized Vials","Contract R&D"],-0.1278,51.5074),
  mk("germany","Germany","DE","Frankfurt","Europe & Oceania","BfArM European Standard","EU CTD Dossier","ICH Compliant","Bulk API Sourcing",["Specialty Oral Solids","Grade A Products"],8.6821,50.1109),
  mk("australia","Australia","AU","Sydney","Europe & Oceania","TGA Benchmarked","Institutional Healthcare","Zone IVb & ICH","120M Units / yr",["Sterile Injectables","Hospital Infusions"],151.2093,-33.8688),
  mk("new-zealand","New Zealand","NZ","Auckland","Europe & Oceania","Medsafe Standards","Export Partner Channel","Zone IVb Validated","40M Units / yr",["Generics","Tablets & Syrups"],174.7633,-36.8485),
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
// WORLD COUNTRIES — memoized to avoid re-render on every tick
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
            fill={isActive ? "rgba(100,140,200,0.18)" : "rgba(40,60,100,0.45)"}
            stroke={isActive ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.22)"}
            strokeWidth={isActive ? 1.2 : 0.5}
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
const REGIONS = ["All", "Africa", "Asia", "Middle East & CIS", "Americas", "Europe & Oceania"] as const;

export function DynamicFlatMap() {
  const [region, setRegion] = useState("All");
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState<DestinationMarket | null>(null);
  const [rotating, setRotating] = useState(true);
  const [progress, setProgress] = useState(0);
  const [prevIds, setPrevIds] = useState<string[]>([]);

  const markets = useMemo(() =>
    region === "All" ? GLOBAL_MARKETS : GLOBAL_MARKETS.filter(m => m.region === region),
    [region]
  );

  const active = hovered ?? markets[idx % markets.length] ?? GLOBAL_MARKETS[0];

  // Refs to avoid stale closure issues
  const marketsRef = useRef(markets);
  const startTimeRef = useRef(performance.now());
  const rafRef = useRef(0);
  marketsRef.current = markets;

  // ── Effect 1: Smooth progress bar via RAF (no idx dep, never restarts on country change) ──
  useEffect(() => {
    if (!rotating) {
      setProgress(0);
      cancelAnimationFrame(rafRef.current);
      return;
    }
    startTimeRef.current = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTimeRef.current;
      setProgress(Math.min(elapsed / TOUR_MS, 1));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [rotating]);

  // ── Effect 2: Country advancement via clean setInterval (no idx dep, no restarts) ──
  useEffect(() => {
    if (!rotating) return;
    const interval = setInterval(() => {
      startTimeRef.current = performance.now(); // reset progress epoch
      setIdx(prev => {
        const ms = marketsRef.current;
        const next = (prev + 1) % ms.length;
        setPrevIds(h => [ms[next]?.id ?? "", ...h.slice(0, 3)]);
        return next;
      });
    }, TOUR_MS);
    return () => clearInterval(interval);
  }, [rotating, markets.length]);

  const handleClick = useCallback((m: DestinationMarket, i: number) => {
    setIdx(i);
    setRotating(false);
    setPrevIds(h => [m.id, ...h.slice(0, 3)]);
    setProgress(0);
  }, []);

  return (
    <div className="relative w-full bg-black text-white overflow-hidden">
      {/* ── THIN PROGRESS LINE (top) ── */}
      <div className="absolute top-0 left-0 right-0 h-[1px] z-30 bg-white/5">
        <motion.div
          className="h-full bg-white/60"
          animate={{ width: rotating ? `${progress * 100}%` : "0%" }}
          transition={{ duration: 0.04, ease: "linear" }}
        />
      </div>

      {/* ══════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════ */}
      <div className="relative z-20 flex items-center justify-between px-6 sm:px-10 py-3 border-b border-white/[0.06]">
        {/* Left: title & live status */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-60 animate-ping" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white/80" />
          </span>
          <span className="text-[11px] tracking-[0.18em] uppercase text-white/40 font-medium">
            Global Reach
          </span>
        </div>

        {/* Right: region filter & play/pause toggle */}
        <div className="flex items-center gap-1.5 text-[11px]">
          {REGIONS.map(r => (
            <button
              key={r}
              onClick={() => { setRegion(r); setIdx(0); setPrevIds([]); }}
              className={`px-2.5 py-1 rounded-sm transition-all duration-150 cursor-pointer tracking-wide ${
                region === r
                  ? "text-black bg-white font-semibold"
                  : "text-white/35 hover:text-white/70"
              }`}
            >
              {r === "All" ? "All" : r}
            </button>
          ))}

          <button
            onClick={() => setRotating(!rotating)}
            className="ml-1 px-2 py-0.5 rounded text-[10px] text-white/40 hover:text-white border border-white/10 transition-colors cursor-pointer"
            title={rotating ? "Pause Rotation" : "Play Rotation"}
          >
            {rotating ? "PAUSE" : "PLAY"}
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BODY: MAP + SIDEBAR
      ══════════════════════════════════════════ */}
      <div className="flex flex-col lg:flex-row w-full min-h-[460px] lg:min-h-[540px] xl:min-h-[600px]">

        {/* ── MAP (Zoomed & Edge-to-Edge) ── */}
        <div className="relative flex-1 w-full flex items-center justify-center p-0 overflow-hidden">
          <svg
            viewBox="20 35 960 440"
            className="w-full h-full min-h-[420px] lg:min-h-[520px] xl:min-h-[580px] object-contain"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Strict viewBox clip */}
              <clipPath id="map-clip">
                <rect x="0" y="0" width="1000" height="540" />
              </clipPath>
              <filter id="f-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="5" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="f-dot" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="2.5" result="b" />
                <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* All map content clipped to viewBox */}
            <g clipPath="url(#map-clip)">

            {/* World */}
            <WorldCountries activeId={active.country} />

            {/* ── ARCS: All routes always visible (network map style) ── */}
            <g>
              {/* Layer 1: All passive route lines — always drawn */}
              {markets.map(m => {
                const isActive = m.id === active.id;
                const d = arcPath(ORIGIN.x, ORIGIN.y, m.x, m.y);
                return (
                  <path
                    key={`track-${m.id}`}
                    d={d}
                    fill="none"
                    stroke="white"
                    strokeWidth={isActive ? 1.6 : 0.5}
                    strokeOpacity={isActive ? 0 : 0.13}
                    strokeDasharray={isActive ? undefined : "4 6"}
                  />
                );
              })}

              {/* Layer 2: Active route — bright, glowing, solid */}
              {(() => {
                const d = arcPath(ORIGIN.x, ORIGIN.y, active.x, active.y);
                return (
                  <g key={`active-arc-${active.id}`}>
                    {/* Soft glow shadow */}
                    <path d={d} fill="none" stroke="white" strokeWidth="6" strokeOpacity="0.06" filter="url(#f-glow)" />
                    {/* Main crisp line */}
                    <path d={d} fill="none" stroke="white" strokeWidth="1.4" strokeOpacity="0.9" />
                    {/* Leading photon */}
                    <circle r="3.5" fill="white" fillOpacity="1" filter="url(#f-dot)">
                      <animateMotion path={d} dur="2.4s" repeatCount="indefinite" rotate="auto" />
                    </circle>
                    {/* Trailing photon — offset start */}
                    <circle r="1.8" fill="white" fillOpacity="0.5">
                      <animateMotion path={d} dur="2.4s" begin="0.6s" repeatCount="indefinite" rotate="auto" />
                    </circle>
                  </g>
                );
              })()}

              {/* Layer 3: Slow ghost particles on ALL other routes — feels alive */}
              {markets.filter(m => m.id !== active.id).map((m, i) => {
                const d = arcPath(ORIGIN.x, ORIGIN.y, m.x, m.y);
                const dur = `${5.5 + (i % 5) * 1.2}s`;
                const begin = `${(i * 0.8) % 4}s`;
                return (
                  <circle key={`ghost-${m.id}`} r="1.2" fill="white" fillOpacity="0.35">
                    <animateMotion path={d} dur={dur} begin={begin} repeatCount="indefinite" rotate="auto" />
                  </circle>
                );
              })}
            </g>

            {/* ── DESTINATION DOTS: All always visible ── */}
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
                      <circle cx={m.x} cy={m.y} r="4" fill="none" stroke="white" strokeWidth="0.8" strokeOpacity="0.5">
                        <animate attributeName="r" values="5;16" dur="2.2s" repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity" values="0.5;0" dur="2.2s" repeatCount="indefinite" />
                      </circle>
                    )}
                    {/* Dot — always shown, active is larger/brighter */}
                    <circle
                      cx={m.x} cy={m.y}
                      r={isActive ? 4 : 1.8}
                      fill="white"
                      fillOpacity={isActive ? 1 : 0.4}
                    />
                    {/* Bright center core on active */}
                    {isActive && <circle cx={m.x} cy={m.y} r="1.6" fill="white" />}
                    {/* Country code pill — active only */}
                    {isActive && (
                      <g>
                        <rect
                          x={m.x - 20} y={m.y - 24}
                          width="40" height="12" rx="2"
                          fill="black" stroke="rgba(255,255,255,0.28)" strokeWidth="0.7"
                        />
                        <text
                          x={m.x} y={m.y - 15}
                          textAnchor="middle"
                          fill="white" fontSize="7.5" fontWeight="600"
                          fontFamily="Outfit, Inter, sans-serif"
                          letterSpacing="0.1em"
                        >
                          {m.code}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>

            {/* ── ORIGIN: INDIA ── */}
            <g>
              {/* Single slow pulse */}
              <circle cx={ORIGIN.x} cy={ORIGIN.y} r="8" fill="none" stroke="white" strokeWidth="0.8" strokeOpacity="0.4">
                <animate attributeName="r" values="8;22" dur="3s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.5;0" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx={ORIGIN.x} cy={ORIGIN.y} r="5" fill="white" fillOpacity="0.15" />
              <circle cx={ORIGIN.x} cy={ORIGIN.y} r="3" fill="white" fillOpacity="0.8" />
              <circle cx={ORIGIN.x} cy={ORIGIN.y} r="1.2" fill="white" />
              {/* Label */}
              <text
                x={ORIGIN.x} y={ORIGIN.y + 14}
                textAnchor="middle"
                fill="rgba(255,255,255,0.5)" fontSize="7.5"
                fontFamily="Outfit, Inter, sans-serif"
                fontWeight="600" letterSpacing="0.12em"
              >
                ZELNEX HQ
              </text>
            </g>
            </g> {/* end map-clip */}
          </svg>
        </div>

        {/* ── SIDEBAR ── */}
        <div className="relative z-20 w-full lg:w-[260px] xl:w-[290px] flex-shrink-0 border-t lg:border-t-0 lg:border-l border-white/[0.06] flex flex-col">
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="flex flex-col flex-1 p-3.5 gap-2"
              >
                {/* Country heading */}
                <div>
                  <div className="text-[9px] tracking-[0.18em] uppercase text-white/25 mb-1 font-medium">
                    Active Destination
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xl font-bold text-white tracking-tight leading-none font-display">
                        {active.country}
                      </div>
                      <div className="text-xs text-white/35 mt-1 tracking-wide">
                        {active.city}
                      </div>
                    </div>
                    <div className="text-[11px] font-bold text-white/20 tracking-[0.1em] pt-1">
                      {active.code}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/[0.06]" />

                {/* Stat rows */}
                <div className="flex flex-col gap-1.5">
                  <div>
                    <div className="text-[8.5px] tracking-[0.2em] uppercase text-white/20 mb-0.5">
                      Regulatory Authority
                    </div>
                    <div className="text-[12px] font-semibold text-white/85">
                      {active.authority}
                    </div>
                  </div>
                  <div>
                    <div className="text-[8.5px] tracking-[0.2em] uppercase text-white/20 mb-0.5">
                      Dossier Status
                    </div>
                    <div className="text-[12px] font-semibold text-white/85">
                      {active.dossierStatus}
                    </div>
                  </div>
                  <div>
                    <div className="text-[8.5px] tracking-[0.2em] uppercase text-white/20 mb-0.5">
                      Stability
                    </div>
                    <div className="text-[12px] font-semibold text-white/85">
                      {active.stability}
                    </div>
                  </div>
                  <div>
                    <div className="text-[8.5px] tracking-[0.2em] uppercase text-white/20 mb-0.5">
                      Annual Volume
                    </div>
                    <div className="text-[12px] font-semibold text-white/85">
                      {active.volume}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/[0.06]" />

                  {/* Product classes — as minimal tags */}
                  <div>
                    <div className="text-[9px] tracking-[0.2em] uppercase text-white/20 mb-2">
                      Products
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {active.keyClasses.map((cls, i) => (
                        <span
                          key={i}
                          className="text-[9px] text-white/50 border border-white/[0.12] px-2 py-0.5 rounded-sm"
                        >
                          {cls}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Route indicator */}
                <div className="mt-auto pt-2 border-t border-white/[0.06] flex items-center justify-between text-[9px] text-white/20 tracking-widest uppercase">
                  <span>India → {active.code}</span>
                  <span>{String(markets.findIndex(m => m.id === active.id) + 1).padStart(2, "0")} / {String(markets.length).padStart(2, "0")}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Destination list ── */}
          <div className="border-t border-white/[0.06] px-4 py-3">
            <div className="text-[9px] tracking-[0.2em] uppercase text-white/20 mb-2">
              All Destinations
            </div>
            <div className="flex flex-col max-h-[90px] overflow-y-auto">
              {markets.map((m, i) => {
                const isActive = m.id === active.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => handleClick(m, i)}
                    className={`flex items-center justify-between py-1 text-left transition-colors duration-100 cursor-pointer group ${
                      isActive ? "text-white" : "text-white/25 hover:text-white/55"
                    }`}
                  >
                    <span className="text-[11px] tracking-wide">{m.country}</span>
                    <span className={`text-[9px] tracking-widest ${isActive ? "text-white/40" : "text-white/10"}`}>
                      {m.code}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BOTTOM STATS — ultra-minimal
      ══════════════════════════════════════════ */}
      <div className="relative z-20 border-t border-white/[0.06] px-8 py-2.5 flex items-center gap-6">
        <span className="text-sm font-bold text-white">{markets.length}<span className="text-white/30 text-xs font-normal ml-0.5"> markets</span></span>
        <span className="h-3 w-px bg-white/10" />
        <span className="text-sm font-bold text-white">1.2M<span className="text-white/30 text-xs font-normal ml-0.5"> units / mo</span></span>
        <span className="h-3 w-px bg-white/10" />
        <span className="text-sm font-bold text-white">WHO<span className="text-white/30 text-xs font-normal ml-0.5">-GMP Certified</span></span>
      </div>
    </div>
  );
}

export default DynamicFlatMap;
