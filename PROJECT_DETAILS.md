# Zelnex Pharmaceuticals Web Platform - Comprehensive Project Reference

> **Project Name**: Zelnex Pharmaceuticals Pvt. Ltd. (`zelnex-web`)  
> **Brand Tagline**: *"Caring for Life"*  
> **Repository Root**: `c:\Users\CHITT\OneDrive\Desktop\freelance\ZELNEX`  
> **Current Version**: `0.1.0`  
> **Framework & Engine**: Next.js 16.2 (App Router) · React 19 · TypeScript 5 · Tailwind CSS v4 · Three.js · GSAP  

---

## 📋 Table of Contents
1. [Executive Summary & Brand Identity](#1-executive-summary--brand-identity)
2. [Complete Technology Stack](#2-complete-technology-stack)
3. [Exhaustive File & Directory Inventory](#3-exhaustive-file--directory-inventory)
4. [Component-by-Component Architectural Breakdown](#4-component-by-component-architectural-breakdown)
5. [3D Graphics & Physics Mechanics](#5-3d-graphics--physics-mechanics)
6. [Design System & CSS Token Specifications](#6-design-system--css-token-specifications)
7. [Comprehensive Project Status Matrix](#7-comprehensive-project-status-matrix)
8. [Build, Development & Operations Guide](#8-build-development--operations-guide)

---

## 1. Executive Summary & Brand Identity

**Zelnex Pharmaceuticals Pvt. Ltd.** is an emerging Indian pharmaceutical company specializing in the manufacturing, sourcing, marketing, and global export of high-quality pharmaceutical formulations. 

The website platform (`zelnex-web`) is designed to deliver an **ultra-premium, state-of-the-art web experience** that establishes instant corporate credibility for global healthcare buyers, international distributors, and regulatory agencies.

### Brand Palette & Positioning
- **Primary Color**: Deep Navy (`#0b1e48`) — Conveys clinical trust, stability, and corporate authority.
- **Secondary Accent**: Vibrant Teal (`#00a6a6` / `#00bfb5`) — Represents life, health innovation, and modern medical science.
- **Surface & Backgrounds**: Mist White (`#f5f8fc`) & Glass Panels — Provides a clean, modern aesthetic with depth.
- **Typography**: `Outfit` for bold, authoritative headlines & `Montserrat` for body copy.

---

## 2. Complete Technology Stack

| Layer | Library / Tool | Version | Purpose & Implementation |
| :--- | :--- | :--- | :--- |
| **Framework** | **Next.js** | `16.2.12` | App Router (`app/`), Server-Side Rendering (SSR), Static Site Generation (SSG), Turbopack engine, and optimized font loading. |
| **UI Core** | **React** | `19.2.4` | Component architecture, client-side state hooks, and fast concurrent rendering. |
| **Type Safety** | **TypeScript** | `5.x` | Strict type definitions across props, metadata, theme, and 3D data structures. |
| **Styling Engine** | **Tailwind CSS** | `4.x` | Modern utility classes, `@theme inline` CSS variable mapping, and custom glassmorphism utilities. |
| **3D WebGL Engine** | **Three.js** | `0.185.1` | Custom 3D particle canvas (`FloatingPills.tsx`) rendering 55 two-tone capsules with mouse raycasting and cursor repulsion physics. |
| **Animation Engine** | **GSAP** + `@gsap/react` | `3.15.0` / `2.1.2` | ScrollTrigger integration for scroll-driven reveals, hero parallax, 3D card perspective tilt, and Lupin-style S-curve SVG line drawing. |
| **Typography** | `next/font/google` | Next.js built-in | Zero-layout-shift font loading for `Outfit` and `Montserrat`. |

---

## 3. Exhaustive File & Directory Inventory

```
ZELNEX/
├── app/                                 # Next.js App Router Root
│   ├── layout.tsx                       # Root layout with font imports, HTML metadata & global body structure
│   ├── globals.css                      # Tailwind v4 theme, glassmorphism rules, depth shadows, animations
│   ├── page.tsx                         # Main Landing Page assembling all hero, overview, and section components
│   └── overview/                        # Sub-route for dedicated company overview page
│       └── page.tsx                     # Deep-dive article page on export capabilities & WHO-GMP sourcing
├── components/                          # Core Component Library
│   ├── ui/                              # Reusable Atomic UI Elements
│   │   ├── CrystalButton.tsx            # Multi-variant button component (teal, navy, outline, crystal glass)
│   │   └── GlassCard.tsx                # Backdrop-blur container component with hover elevation
│   ├── Navbar.tsx                       # Dual-mode header: transparent at top vs. floating glass capsule on scroll
│   ├── Hero.tsx                         # Parallax hero section with brand taglines and CTA buttons
│   ├── TrustBanner.tsx                  # Key capabilities bar (Research Driven, Quality Assured, Global, Patient-Focused)
│   ├── Overview.tsx                     # Mission overview + 3 glass stats cards (8+ Yrs, 800+ Products, 50+ Countries)
│   ├── Expertise.tsx                    # 3D interactive tilt cards (Regulatory, Contract Mfg, 3rd Party, Generics)
│   ├── Categories.tsx                   # 20 therapeutic category glass pills (Antibiotics, Cardiac, Derma, etc.)
│   ├── Packaging.tsx                    # Packaging format indicators (Alu-Alu, Blisters, HDPE, Softgels, etc.)
│   ├── Certifications.tsx               # 12 accreditation badges (WHO-GMP, ISO, FSSAI, NAFDAC Nigeria, NDA, etc.)
│   ├── GrowingNetwork.tsx               # Equirectangular world map with pulsing animated geographic markers
│   ├── ProductShowcase.tsx              # Dosage form showcase, 10+ therapeutic tags & career inquiry banner
│   ├── WhoWeAre.tsx                     # Dedicated company visual showcase grid with image overlays
│   ├── CtaFooter.tsx                    # Lead generation contact form backed by 3D WebGL floating pills canvas
│   ├── FloatingPills.tsx                # Three.js 3D WebGL canvas rendering 55 floating two-tone pharma capsules
│   ├── FlowingVector.tsx                # Scroll-drawn S-curve SVG line connecting page section milestones
│   ├── DnaVisual.tsx                    # Interactive rotating SVG DNA double helix animation
│   ├── StickySidebar.tsx                # Right-docked quick-action floating sidebar (Products, Enquiry, Overview, Network)
│   └── Footer.tsx                       # Multi-column footer with quick links, contact info, and copyright
├── public/                              # Static Public Assets
│   ├── brand/                           # Public brand logos & icons (`zelnex-logo.png`, `zelnex-icon.png`)
│   ├── file.svg, globe.svg, etc.        # Default SVG icons
├── ZELNEX LOGO BOOK/                    # Source Brand Identity & Design Assets
│   ├── ZELNEX-ICON.jpg.jpeg             # Square icon asset
│   ├── Zelnex 2 icon.png, Zelnex icon 1.png # Icon variants
│   ├── Zelnex Logo.png, Zelnex Logo.jpg.jpeg # Master brand logo assets
│   └── Zelnex Logo.rar                  # Compressed vector source archive
├── AGENTS.md                            # Next.js agent rule definitions
├── CLAUDE.md                            # Assistant configuration file
├── eslint.config.mjs                    # ESLint flat config
├── next-env.d.ts                        # Next.js TypeScript declarations
├── next.config.ts                       # Next.js configuration (Unsplash remote image domains & Turbopack root)
├── package.json                         # Project dependencies, scripts (`dev`, `build`, `start`, `lint`)
├── package-lock.json                    # Locked dependency tree
├── postcss.config.mjs                   # PostCSS Tailwind plugin config
├── README.md                            # Basic Next.js setup guide
├── test.html                            # Standalone Three.js particle flow prototype (Budhiworks coffee bean test)
├── tsconfig.json                        # TypeScript compiler config (`@/*` alias)
└── PROJECT_DETAILS.md                   # This master documentation file
```

---

## 4. Component-by-Component Architectural Breakdown

### 4.1. Header & Navigation ([`Navbar.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/Navbar.tsx))
- **Dual-Mode Behavior**:
  - **Top State (`window.scrollY <= 16`)**: Full-width transparent background; brand logo is inverted white (`brightness-0 invert`) to contrast against the dark hero gradient.
  - **Capsule State (`window.scrollY > 16`)**: Collapses into a centered floating capsule (`max-w-[820px]`) with glassmorphism backdrop blur (`backdrop-blur-[24px]`), rounded capsule borders, and dark logo typography.
  - **Hide-on-Scroll-Down**: Automatically hides when scrolling down past 100px to maximize screen real estate, and smoothly slides back down on scroll-up.
- **Mobile Menu**: Responsive hamburger button that toggles an animated full-screen/glass overlay drawer with scroll locking (`document.body.style.overflow = 'hidden'`).

### 4.2. Hero Section ([`Hero.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/Hero.tsx))
- **Parallax Background**: High-resolution laboratory imagery from Unsplash overlaid with a custom dual-color gradient (`linear-gradient(115deg, #0b1e48 0%, #008a8a 100%)`).
- **GSAP ScrollTrigger**: Hero media scales smoothly on scroll while typography triggers a staggered entrance animation on load.

### 4.3. Dynamic Flowing Vector Line ([`FlowingVector.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/FlowingVector.tsx))
- **Lupin-Style S-Curve Connector**: An SVG vector path (`viewBox="0 0 1200 3850"`) running down the entire page wrapper.
- **Scroll-Linked Drawing**: Uses GSAP `strokeDashoffset` scrubbed to the user's scroll position. As the user scrolls, the luminous neon line draws itself alongside the user.
- **Milestone Nodes**: 8 glowing SVG milestone rings positioned at specific section landmarks (Overview, Expertise, Categories, Packaging, Certifications, Global Network). As the tip of the vector line reaches each section, GSAP ignites the milestone node with a pulsing ring animation.

### 4.4. Key Capabilities Trust Bar ([`TrustBanner.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/TrustBanner.tsx))
- Overlaps the bottom of the hero section with a clean white glass card (`shadow-[0_16px_50px_rgba(11,30,72,0.08)]`).
- Features 4 value pillars: Research Driven, Quality Assured (WHO-GMP), Global Presence (50+ Countries), and Patient-Focused.

### 4.5. Company Overview ([`Overview.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/Overview.tsx))
- Grid layout pairing executive company summary copy with 3 statistics glass cards:
  - **8+ Years** of Pharmaceutical Expertise
  - **800+** Quality Products
  - **50+** Target Export Countries
- Includes a direct link to the dedicated `/overview` sub-page.

### 4.6. Our Expertise ([`Expertise.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/Expertise.tsx))
- 4 interactive 3D perspective cards (`expertise-3d` class):
  1. **Regulatory Services**: Documentation, dossier support & registration guidance.
  2. **Contract Manufacturing**: Flexible production partnerships.
  3. **3rd Party Manufacturing**: Production via WHO-GMP facilities.
  4. **Generic Products**: Broad oral & liquid dosage portfolio.

### 4.7. Therapeutic Categories ([`Categories.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/Categories.tsx))
- Displays 20 therapeutic segments in a responsive grid (5 columns on desktop):
  - *Antibiotics, Antidepressant, Antifungal, Bone & Joint, Cardiac Care, Chronic Care, CNS, Cough & Cold, Derma Care, Diabetic Care, Female Care, Gastro Care, Gut Health, Hematinic, Infertility, Laxatives, Pain Management, Anti-Infectives, Lifestyle Care, Gastrointestinal.*

### 4.8. Packaging Formats ([`Packaging.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/Packaging.tsx))
- Highlights 14 distinct packaging options: *Alu-Alu, Blisters, Aluminium Strips, HDPE Bottles, Glass Bottles, Dry Injection, Sachets, Liquid Syrup, Food Products, Soft Gel, Tubes, Pet Jar, Carton, Oral Spray.*
- Uses custom pastel badge tones and hover elevation physics (`pack-circle`).

### 4.9. Certifications & Accreditations ([`Certifications.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/Certifications.tsx))
- Grid showcasing 12 global regulatory agencies & accreditations:
  - *WHO-GMP, ISO, FSSAI, NDA Uganda, PPB Kenya, MOH Cambodia, DPM Ivory Coast, MOH Iraq, NAFDAC Nigeria, MOH Vietnam, MOH Yemen, MOH Ghana.*

### 4.10. Global Network Map ([`GrowingNetwork.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/GrowingNetwork.tsx))
- Custom equirectangular world map SVG vector graphic.
- Maps 17 international market positions (Kenya, Nigeria, Ghana, Uganda, Ivory Coast, Congo, Sudan, Zambia, Iraq, Yemen, Afghanistan, India, Sri Lanka, Myanmar, Cambodia, Vietnam, Mauritius) with pulsing animated SVG radar pins (`network-pulse`).

### 4.11. Interactive Lead Inquiry & 3D WebGL Canvas ([`CtaFooter.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/CtaFooter.tsx))
- Embedded inquiry form with state management (`name`, `email`, `message`, `submitted`).
- Background canvas hosts the 3D WebGL floating pills scene.

### 4.12. Floating Quick-Action Sidebar ([`StickySidebar.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/StickySidebar.tsx))
- Fixed right-docked vertical action menu (`z-40`) featuring quick links to Products, Enquiry, Overview download, and Global Network.

---

## 5. 3D Graphics & Physics Mechanics

### 5.1. Three.js Floating 3D Capsules ([`FloatingPills.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/FloatingPills.tsx))
- **Geometry Construction**: Each 3D capsule is generated procedurally by grouping:
  - Top Half: Cylinder (`CylinderGeometry(0.5, 0.5, 0.6)`) + Sphere Dome (`SphereGeometry(0.5, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2)`)
  - Bottom Half: Cylinder + Inverted Sphere Dome
- **Materials & Color Pairs**: Uses `MeshStandardMaterial` with metalness (`0.2`), roughness (`0.12`), and subtle emissive glow. Colors include Cyan/White, Teal/Navy, White/Navy, and Mint/White.
- **Particle Count**: 55 unique 3D capsules distributed across 3D space (`X: [-18, 18], Y: [-9, 9], Z: [-8, 4]`).
- **Physics Engine**:
  - **Micro-gravity Float**: Sine-wave drift per capsule (`targetY = baseY + Math.sin(timeOffset) * 0.7`).
  - **Cursor Repulsion**: Uses Three.js `Raycaster` against an invisible 2D projection plane. When the user moves the mouse near a capsule within a 5.0 unit radius, a repulsion vector pushes the capsule away proportional to cursor proximity.
  - **Return Damping**: Spring-damping physics (`vx *= 0.92`) returns capsules back to their original orbit positions over time.
- **Performance Optimization**: Automatically checks `prefers-reduced-motion`. If enabled or on mobile, it gracefully unmounts the WebGL canvas and switches to a CSS keyframe fallback animation.

### 5.2. DNA Double Helix Visual ([`DnaVisual.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/DnaVisual.tsx))
- Uses GSAP `@gsap/react` hooks to rotate an SVG orbital ellipse 360° continuously (`rotate: 360`, `duration: 28s`).
- 18 calculated Sine/Cosine coordinate pairs generate left and right strand beads connected by structural horizontal rungs with a gradient stroke (`url(#dnaGrad)`).

---

## 6. Design System & CSS Token Specifications

The design system is managed in [`globals.css`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/app/globals.css) and mapped into Tailwind CSS v4 via `@theme inline`.

### CSS Custom Variables
```css
:root {
  --zelnex-navy: #0b1e48;
  --zelnex-navy-mid: #132a5c;
  --zelnex-navy-light: #1e3a7a;
  --zelnex-teal-deep: #008a8a;
  --zelnex-teal: #00a6a6;
  --zelnex-teal-bright: #00bfb5;
  --zelnex-slate: #2a3447;
  --zelnex-muted: #6b7280;
  --zelnex-mist: #f5f8fc;
  --zelnex-white: #ffffff;
  --font-display: var(--font-outfit);
  --font-body: var(--font-montserrat);
}
```

### Glassmorphism Utility Classes
- **`.glass-panel`**: White semi-transparent backdrop (`rgba(255, 255, 255, 0.78)`), `backdrop-filter: blur(20px)`, subtle inset highlight border.
- **`.glass-card`**: Dynamic hover elevation class. On hover, translates `-6px` upwards and adds a dual-tone teal glowing box shadow (`rgba(0, 166, 166, 0.1)`).
- **`.cert-glass` & `.category-glass`**: Glass pill treatments tailored for dark and light section backgrounds.

---

## 7. Comprehensive Project Status Matrix

### 🟢 What is Working 100% (Production Ready)
- [x] **Next.js App Router Architecture**: SSR, static page generation (`/` and `/overview`), metadata titles, and favicons.
- [x] **TypeScript Type Safety**: 0 compiler errors across all components, hooks, and pages.
- [x] **Responsive Layouts**: Desktop, tablet, and mobile drawer navigation with scroll locking.
- [x] **3D WebGL Capsule Canvas**: 55 interactive capsules with mouse repulsion, ambient lighting, and reduced-motion fallback.
- [x] **Dynamic Flowing Vector Line**: Lupin-style S-curve SVG line drawing smoothly on scroll with 8 milestone activations.
- [x] **Glassmorphism Design System**: Tailored CSS variable system, custom depth shadows, crystal buttons, and card tilt effects.
- [x] **Inquiry Form State**: Form state handling (`name`, `email`, `message`, submit confirmation feedback).

### 🔧 Recently Resolved Warnings & Optimizations
1. **Three.js Deprecation Warning (`THREE.Clock`)**:
   - *Issue*: Three.js v0.185+ emitted a browser console warning recommending `THREE.Timer` over deprecated `THREE.Clock()`.
   - *Fix*: Replaced `THREE.Clock` with standard high-resolution timer (`performance.now()`) in [`FloatingPills.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/FloatingPills.tsx#L178).
2. **Next.js Turbopack Workspace Root Warning**:
   - *Issue*: Next.js printed a warning regarding multiple lockfiles detected in parent user directories.
   - *Fix*: Added `turbopack: { root: __dirname }` to [`next.config.ts`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/next.config.ts).
3. **GSAP ScrollTrigger Target Safety**:
   - *Issue*: Hardcoded `#vector-wrapper` string selector could throw an unmounted selector warning if rendered standalone.
   - *Fix*: Added DOM fallback (`document.getElementById("vector-wrapper") || containerRef.current`) in [`FlowingVector.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/FlowingVector.tsx#L62).

### 💡 Recommended Future Expansion Opportunities
1. **Backend Contact Form API Integration**: Connect the `<form>` in [`CtaFooter.tsx`](file:///c:/Users/CHITT/OneDrive/Desktop/freelance/ZELNEX/components/CtaFooter.tsx#L81) to an email API endpoint (e.g., Resend, SendGrid, or Next.js Route Handler `app/api/contact/route.ts`).
2. **Searchable Product Catalog Modal**: Implement a modal or searchable database allowing international buyers to search specific active pharmaceutical ingredients (APIs), dosage strengths, or CTD dossiers.
3. **Internationalization (i18n)**: Add multi-language support (French, Spanish, Arabic) tailored for global export buyers in Africa, Southeast Asia, and the Middle East.

---

## 8. Build, Development & Operations Guide

### Prerequisites
- Node.js `v18.x` or higher
- npm `v9.x` or higher

### Command Execution

```bash
# Navigate to project directory
cd ZELNEX

# 1. Install dependencies
npm install

# 2. Run local development server (runs on http://localhost:3000)
npm run dev

# 3. Perform production build check & TypeScript compilation
npm run build

# 4. Start production build server
npm run start

# 5. Run ESLint code quality check
npm run lint
```

---

*Documentation compiled and verified on August 10, 2026 for **Zelnex Pharmaceuticals Pvt. Ltd.***
