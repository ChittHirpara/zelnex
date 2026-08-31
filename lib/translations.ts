export type LanguageCode = "en" | "es" | "pt" | "fr";

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", dir: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", dir: "ltr" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹", dir: "ltr" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", dir: "ltr" },
];

export interface TranslationSchema {
  nav: {
    home: string;
    overview: string;
    whoWeAre: string;
    services: string;
    products: string;
    categories: string;
    certifications: string;
    blogs: string;
    faq: string;
    contact: string;
    getInTouch: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subheading: string;
    exploreProducts: string;
    contactDesk: string;
    sidebar: {
      therapeutics: string;
      enquiry: string;
      social: string;
      location: string;
    };
    stats: {
      stat1Number: string;
      stat1Top: string;
      stat1Bottom: string;
      stat2Number: string;
      stat2Top: string;
      stat2Bottom: string;
      stat3Number: string;
      stat3Top: string;
      stat3Bottom: string;
      stat4Number: string;
      stat4Top: string;
      stat4Bottom: string;
    };
  };
  overview: {
    badge: string;
    title: string;
    lead: string;
    stats: {
      stat1Number: string;
      stat1Top: string;
      stat1Bottom: string;
      stat2Number: string;
      stat2Top: string;
      stat2Bottom: string;
      stat3Number: string;
      stat3Top: string;
      stat3Bottom: string;
      stat4Number: string;
      stat4Top: string;
      stat4Bottom: string;
    };
    p1Number: string;
    p1Title: string;
    p1Desc: string;
    p1Tags: string[];
    p2Number: string;
    p2Title: string;
    p2Desc: string;
    p2Adherence: string;
    p2Certified: string;
    p3Number: string;
    p3Title: string;
    p3Desc: string;
    p4Number: string;
    p4Title: string;
    p4Desc: string;
    refWelcome: string;
    refCompany: string;
    refLead: string;
    refSummary: string;
    refReadMore: string;
    panels: {
      p1Badge: string;
      p1Title: string;
      p1Desc: string;
      p1Points: string[];
      p1Cta: string;
      p2Badge: string;
      p2Title: string;
      p2Desc: string;
      p2Points: string[];
      p2Cta: string;
      p3Badge: string;
      p3Title: string;
      p3Desc: string;
      p3Points: string[];
      p3Cta: string;
      p4Badge: string;
      p4Title: string;
      p4Desc: string;
      p4Points: string[];
      p4Cta: string;
    };
  };
  whoWeAre: {
    badge: string;
    title: string;
    description: string;
    button: string;
    cards: {
      card1Title: string;
      card2Title: string;
      card2Subtitle: string;
      card3Title: string;
      card3Subtitle: string;
    };
  };
  products: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      tablets: {
        title: string;
        badge: string;
        desc: string;
        bullets: string[];
        cta: string;
      };
      capsules: {
        title: string;
        badge: string;
        desc: string;
        bullets: string[];
        cta: string;
      };
      syrups: {
        title: string;
        badge: string;
        desc: string;
        bullets: string[];
        cta: string;
      };
      injectables: {
        title: string;
        badge: string;
        desc: string;
        bullets: string[];
        cta: string;
      };
    };
    careers: {
      badge: string;
      title: string;
      desc: string;
      cta1: string;
      cta2: string;
    };
  };
  categories: {
    badge: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    cards: Array<{
      category: string;
      title: string;
      count: string;
      tag: string;
    }>;
  };
  certifications: {
    badge: string;
    title: string;
    subtitle: string;
    metrics: Array<{
      label: string;
      value: string;
    }>;
    tabs: {
      all: string;
      global: string;
      africa: string;
      asia: string;
    };
    viewDoc: string;
    modalTitle: string;
    modalScope: string;
    modalModules: string;
    modalClose: string;
  };
  packaging: {
    badge: string;
    title: string;
    subtitle: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    f4Title: string;
    f4Desc: string;
  };
  network: {
    badge: string;
    title: string;
    subtitle: string;
    stat1Label: string;
    stat1Desc: string;
    stat2Label: string;
    stat2Desc: string;
    stat3Label: string;
    stat3Desc: string;
    stat4Label: string;
    stat4Desc: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    destinationLabel: string;
    destinationPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successDesc: string;
    closeBtn: string;
  };
  servicesPage: {
    badge: string;
    heroTitle: string;
    heroSubtitle: string;
    exploreBtn: string;
    metrics: {
      m1Label: string;
      m1Val: string;
      m2Label: string;
      m2Val: string;
      m3Label: string;
      m3Val: string;
      m4Label: string;
      m4Val: string;
    };
    pillarsBadge: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    pillarCards: Array<{
      category: string;
      title: string;
      tagline: string;
      badge: string;
      description?: string;
      processLabel?: string;
      closingNote?: string;
      points: string[];
    }>;
    coreBadge: string;
    coreTitle: string;
    coreSubtitle: string;
    requestDeck: string;
    accordionServices: Array<{
      id: string;
      number: string;
      title: string;
      tag: string;
      summary: string;
      details: string[];
    }>;
  };
  footer: {
    companyCol: string;
    resourcesCol: string;
    qualityCol: string;
    companyLinks: Array<{ label: string; href: string }>;
    resourceLinks: Array<{ label: string; href: string }>;
    qualityLinks: Array<{ label: string; href: string }>;
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterPlaceholder: string;
    newsletterBtn: string;
    newsletterSuccess: string;
    privacy: string;
    terms: string;
    whoGmp: string;
    allRightsReserved: string;
  };
}

export const translations: Record<LanguageCode, TranslationSchema> = {
  // ═══════════════════════════════════════════════════════════════════════════
  // ── ENGLISH (en) ─────────────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════════════
  en: {
    nav: {
      home: "Home",
      overview: "Overview",
      whoWeAre: "Who We Are",
      services: "Services",
      products: "Products",
      categories: "Categories",
      certifications: "Certifications",
      blogs: "Blogs & FAQ",
      faq: "FAQ",
      contact: "Contact",
      getInTouch: "Get in Touch",
    },
    hero: {
      badge: "Global Pharmaceutical Formulations & Export",
      titleLine1: "Better Health",
      titleLine2: "for a Better World",
      subheading:
        "We are committed to improving lives through innovative medicines and trusted healthcare solutions across 50+ global export destinations.",
      exploreProducts: "Explore Our Products",
      contactDesk: "Export Desk",
      sidebar: {
        therapeutics: "Products",
        enquiry: "Enquiry",
        social: "Social",
        location: "Location",
      },
      stats: {
        stat1Number: "65+",
        stat1Top: "Countries",
        stat1Bottom: "Worldwide",
        stat2Number: "350+",
        stat2Top: "Quality",
        stat2Bottom: "Products",
        stat3Number: "150+",
        stat3Top: "International",
        stat3Bottom: "Clients",
        stat4Number: "100%",
        stat4Top: "Certified",
        stat4Bottom: "WHO-GMP",
      },
    },
    overview: {
      badge: "International Pharmaceutical Excellence",
      title: "Zelnex Pharmaceuticals Pvt. Ltd. – Company Overview",
      lead: "Zelnex Pharmaceuticals Pvt. Ltd. is an emerging pharmaceutical company based in India, focused on delivering high-quality, affordable, and globally compliant healthcare solutions. The company's vision is to build a strong export-oriented premium brand and establish a trusted presence in international markets.",
      stats: {
        stat1Number: "8+",
        stat1Top: "Years of",
        stat1Bottom: "Global Expertise",
        stat2Number: "800+",
        stat2Top: "Commercial",
        stat2Bottom: "Formulations",
        stat3Number: "50+",
        stat3Top: "Export Country",
        stat3Bottom: "Global Reach",
        stat4Number: "100%",
        stat4Top: "WHO-GMP",
        stat4Bottom: "Certified Compliance",
      },
      p1Number: "01",
      p1Title: "Diverse Product Formulations",
      p1Desc:
        "Zelnex specializes in the marketing, sourcing, and global distribution of pharmaceutical formulations. The company offers a diverse product portfolio including tablets, capsules, syrups, and combination medicines.",
      p1Tags: [
        "Anti-Infectives",
        "Pain Management",
        "Anti-Diabetics",
        "Gastrointestinal Care",
        "Lifestyle Treatments",
      ],
      p2Number: "02",
      p2Title: "WHO-GMP Sourcing & Quality",
      p2Desc:
        "All products are sourced from WHO-GMP certified manufacturing facilities, ensuring strict adherence to international quality and regulatory standards. This approach enables Zelnex to consistently deliver safe, effective, and reliable medicines to global markets.",
      p2Adherence: "International Quality Adherence",
      p2Certified: "100% Certified",
      p3Number: "03",
      p3Title: "Scalable Global Export Model",
      p3Desc:
        "The company operates with a flexible and scalable business model, allowing it to expand its product range efficiently while maintaining cost effectiveness and regulatory compliance. With a strong focus on pharmaceutical exports, Zelnex aims to build a solid presence in both emerging and regulated markets through reliable supply chains and competitive pricing.",
      p4Number: "04",
      p4Title: "Regulatory Dossier & Registration",
      p4Desc:
        "It is also building strong capabilities in regulatory documentation, dossier support, and international market registration to further strengthen its global footprint. Driven by a commitment to quality, innovation, and trust, Zelnex Pharmaceuticals is steadily progressing toward delivering value to healthcare providers, distributors, and patients worldwide.",
      refWelcome: "Welcome to",
      refCompany: "Zelnex Pharmaceuticals Pvt. Ltd.",
      refLead:
        "Zelnex Pharmaceuticals Pvt. Ltd. is located in India, driven by the vision to provide the best possible range of international quality products at competitive prices through integration, research, and innovation.",
      refSummary:
        "We are recognized as a trusted export-oriented pharmaceutical company delivering best-quality formulations. Our company produces and supplies tablets, capsules, syrups, anti-infectives, pain management, and specialized therapeutic formulations backed by complete WHO-GMP compliance and full regulatory dossier documentation.",
      refReadMore: "READ MORE",
      panels: {
        p1Badge: "Regulatory Services",
        p1Title: "Accelerated Market Approvals with Complete CTD Dossiers",
        p1Desc:
          "Navigating foreign Ministry of Health (MOH) registration requires uncompromising documentation. Zelnex prepares full Common Technical Document (CTD) and electronic CTD (eCTD) dossiers formatted for ASEAN, LATAM, GCC, and African regulatory authorities.",
        p1Points: [
          "Real-time and accelerated Zone IVb stability testing data",
          "Bioequivalence (BE) summaries and Certificate of Pharmaceutical Product (COPP)",
          "Free Sale Certificates (FSC) and cGMP validation paperwork",
        ],
        p1Cta: "Request Dossier Availability List",
        p2Badge: "3rd Party Manufacturing",
        p2Title: "3rd Party Manufacturing & Contract Formulation",
        p2Desc:
          "Zelnex Pharmaceuticals offers WHO-GMP compliant Pharma Medicines through Third Party Manufacturing in India for International customers. Large scale production capacity and well qualified staff are a perfect combination for sufficing all your Third Party Manufacturing requirements. We maintain high quality standards at all stages of production starting from material procurement, process optimization, formulation, testing and export.",
        p2Points: [
          "Formulation approval from Drug department",
          "Procurement of Raw materials & certified APIs",
          "Actual Formulation Production under strict WHO-GMP",
          "Export packaging, batch release & global logistics",
        ],
        p2Cta: "Inquire for 3rd Party Manufacturing",
        p3Badge: "Supply Chain",
        p3Title: "Reliable Worldwide Transit & Tropical Packaging Barrier",
        p3Desc:
          "Pharmaceutical export demands specialized packaging engineered for tropical maritime transport. Zelnex utilizes Alu-Alu cold form blister, induction-sealed HDPE bottles, and triple-wall corrugated export shippers to guarantee 36-month stability in hot, humid Zone IVb climates.",
        p3Points: [
          "Tamper-evident primary barrier seals & serialization",
          "Complete export shipping documentation & Clean Report of Findings (CRF)",
          "Sea and air freight logistics partnerships across major global ports",
        ],
        p3Cta: "Review Packaging Specifications",
        p4Badge: "Formulary",
        p4Title: "800+ Commercial Generic Molecules Across 10+ Categories",
        p4Desc:
          "Our comprehensive export catalog encompasses high-demand therapeutic areas: Anti-Infectives, Cardiology, Central Nervous System (CNS), Gastrointestinal, Respiratory, Diabetes, Dermatology, Oncology, and Critical Care Injectables.",
        p4Points: [
          "Ready commercial dossiers for immediate importation visa filing",
          "Flexible Minimum Order Quantities (MOQs) tailored for market entry",
          "Direct Certificate of Analysis (CoA) provided for every released batch",
        ],
        p4Cta: "Browse Product Portfolio",
      },
    },
    whoWeAre: {
      badge: "Who We Are",
      title: "Dedicated to Global Health & Wellness",
      description:
        "Zelnex Pharmaceuticals Pvt. Ltd. specializes in sourcing, marketing, and export of high-quality pharmaceutical products—building long-term partnerships with distributors, importers, and healthcare institutions worldwide.",
      button: "Get in Touch",
      cards: {
        card1Title: "Advanced Manufacturing",
        card2Title: "50+ Countries",
        card2Subtitle:
          "Expanding access to essential medicines across international markets.",
        card3Title: "300+ Quality Products",
        card3Subtitle:
          "A broad therapeutic range for partners who demand reliability.",
      },
    },
    products: {
      badge: "Our Products",
      title: "Pharmaceutical categories we deliver worldwide",
      subtitle:
        "A focused range of high-quality formulations for distributors, importers, and healthcare institutions seeking reliable global supply and regulatory readiness.",
      categories: {
        tablets: {
          title: "Tablets & Oral Solid Dosage",
          badge: "High Capacity",
          desc: "Uncoated, film-coated, enteric-coated, sustained-release, and chewable tablets manufactured to stringent pharmacopeial standards.",
          bullets: [
            "Immediate & Modified Release Profiles",
            "Alu-Alu & PVC/PVDC Blister Packaging",
            "Bulk Bottle & Custom Export Pack Sizes",
            "WHO-GMP Batch Traceability",
          ],
          cta: "View Formulations",
        },
        capsules: {
          title: "Capsules & Pellets",
          badge: "Extended Release",
          desc: "Hard gelatin and HPMC vegetarian capsules with precision powder, pellet, or beadlet filling for targeted therapeutic release.",
          bullets: [
            "Size 00 to 4 Hard Gelatin & Veg Capsules",
            "Time-Release & Enteric Coated Pellets",
            "Moisture-Protected Tropical Packaging",
            "100% In Vitro Dissolution Compliance",
          ],
          cta: "Explore Capsules",
        },
        syrups: {
          title: "Oral Liquids & Suspensions",
          badge: "High Volume",
          desc: "Flavored liquid syrups, pediatric suspensions, and dry syrups manufactured in sterile automated liquid formulation suites.",
          bullets: [
            "Pediatric & Adult Taste-Masked Syrups",
            "Amber Glass & PET Bottle Packaging",
            "Dry Powder Syrups with Reconstitution Dosing",
            "Stringent Microbial & Viscosity Quality Checks",
          ],
          cta: "View Liquid Range",
        },
        injectables: {
          title: "Sterile Injectables & Parenterals",
          badge: "Critical Care",
          desc: "Liquid and lyophilized sterile injectables, ampoules, and small/large volume parenterals (SVP/LVP) for emergency care.",
          bullets: [
            "Aseptic Filling in ISO Class 5 Cleanrooms",
            "Lyophilized Critical Care Vials",
            "Terminal Sterilization & Endotoxin Tested Batches",
            "Complete Cold-Chain Export Verification",
          ],
          cta: "Request Injectables",
        },
      },
      careers: {
        badge: "Careers & Global Partnerships",
        title: "Build your global healthcare footprint with Zelnex",
        desc: "Join a dynamic pharmaceutical export powerhouse dedicated to quality, compliance, and expanding international healthcare access across 50+ countries.",
        cta1: "Enquire for Partnership",
        cta2: "Join Our Export Network",
      },
    },
    categories: {
      badge: "Interactive Formulary · 800+ Formulations",
      title: "Therapeutic segments that lead the world.",
      subtitle:
        "Hover and swipe across our certified pharmaceutical portfolios. WHO-GMP accredited facilities with full eCTD registration dossiers.",
      searchPlaceholder: "Search formulations by therapeutic class, API, or code...",
      cards: [
        {
          category: "Broad Spectrum",
          title: "Antibiotics & Anti-Infectives",
          count: "60+ Products",
          tag: "Critical Care",
        },
        {
          category: "Cardiology",
          title: "Cardiac & Cardiovascular Care",
          count: "45+ Products",
          tag: "Life Saving",
        },
        {
          category: "Neurology",
          title: "CNS & Neuro-Psychiatry",
          count: "38+ Products",
          tag: "Specialty",
        },
        {
          category: "Bone & Joint",
          title: "Orthopedic & Musculoskeletal",
          count: "32+ Products",
          tag: "Analgesics",
        },
        {
          category: "Digestive Health",
          title: "Gastrointestinal & Acid Control",
          count: "50+ Products",
          tag: "High Volume",
        },
        {
          category: "Pulmonology",
          title: "Respiratory & Anti-Allergy",
          count: "28+ Products",
          tag: "Fast Acting",
        },
        {
          category: "Critical Care",
          title: "Oncology & Cytotoxic",
          count: "20+ Products",
          tag: "Hospital Care",
        },
        {
          category: "Endocrinology",
          title: "Anti-Diabetic & Metabolic",
          count: "24+ Products",
          tag: "Chronic Care",
        },
        {
          category: "Dermatology",
          title: "Dermatological & Topicals",
          count: "35+ Products",
          tag: "Topical Care",
        },
        {
          category: "Wellness",
          title: "Nutraceuticals & Vitamins",
          count: "40+ Products",
          tag: "Daily Health",
        },
      ],
    },
    certifications: {
      badge: "Regulatory Accreditations",
      title: "Where Global Quality Meets Regulatory Compliance",
      subtitle:
        "Sourced strictly from WHO-GMP accredited facilities with verified CTD/eCTD dossier readiness across 50+ international health ministries.",
      metrics: [
        { label: "Manufacturing Facility", value: "WHO-GMP & ISO 9001" },
        { label: "Export Stability", value: "Zone IVb (30°C / 75% RH)" },
        { label: "Dossier Readiness", value: "CTD / eCTD Modules 1–5" },
        { label: "Active Registrations", value: "50+ Global Health Ministries" },
      ],
      tabs: {
        all: "All Regions",
        global: "Global Authorities",
        africa: "Africa MOHs",
        asia: "Asia & Middle East",
      },
      viewDoc: "View Accreditation Details",
      modalTitle: "Accreditation Details",
      modalScope: "Regulatory Scope",
      modalModules: "Validated Modules",
      modalClose: "Close Window",
    },
    packaging: {
      badge: "High-Barrier Packaging",
      title: "Zone IVb Stability Assured",
      subtitle:
        "Advanced Alu-Alu blister, PVC/PVDC, and tropicalized packaging engineered to protect medicine potency in extreme heat and humidity.",
      f1Title: "Alu-Alu Cold Form Blister",
      f1Desc: "100% moisture and oxygen barrier for sensitive antibiotics and oral solids.",
      f2Title: "Tropicalized PVDC Coating",
      f2Desc: "Superior thermal barrier against humid conditions for extended shelf life.",
      f3Title: "Tamper-Evident Vial Crimping",
      f3Desc: "Sterile flip-off seals ensuring batch authenticity and liquid protection.",
      f4Title: "Cold-Chain Temperature Loggers",
      f4Desc: "Real-time thermal monitoring for biologics and parenteral injectables.",
    },
    network: {
      badge: "Global Footprint",
      title: "Exporting to 50+ Countries Worldwide",
      subtitle:
        "Our robust international supply chain connects healthcare providers, ministries of health, and commercial distributors across 4 continents.",
      stat1Label: "50+ Countries",
      stat1Desc: "Active international markets served",
      stat2Label: "4 Continents",
      stat2Desc: "Africa, Asia, CIS & Latin America",
      stat3Label: "50+ Health Ministries",
      stat3Desc: "MOH registered dossiers & visas",
      stat4Label: "24/7 Logistics",
      stat4Desc: "Monitored international dispatch",
    },
    contact: {
      badge: "Direct Global Export Inquiries",
      title: "Partner with Zelnex for reliable global supply",
      subtitle:
        "Tell us about your market needs. Our international regulatory and export team will respond within 24 hours with product dossiers, batch pricing, and distribution agreements.",
      nameLabel: "Your Name / Organization",
      namePlaceholder: "e.g. Dr. Alejandro Gomez / MediCorp Imports",
      emailLabel: "Corporate Email Address",
      emailPlaceholder: "e.g. procurement@medicorp.com",
      destinationLabel: "Destination Country / Territory",
      destinationPlaceholder: "e.g. Mexico, Colombia, Ivory Coast, Vietnam...",
      messageLabel: "Required Formulations & Volume Needs",
      messagePlaceholder: "Please describe the active ingredients, dosage forms, packaging requirements, and estimated volume...",
      submitBtn: "Partner with Zelnex",
      submittingBtn: "Transmitting Inquiry...",
      successTitle: "Inquiry Successfully Dispatched",
      successDesc:
        "Thank you for contacting Zelnex Pharmaceuticals. Our global export desk will review your requirements and respond within 24 hours.",
      closeBtn: "Close",
    },
    servicesPage: {
      badge: "ZELNEX PHARMACEUTICAL SERVICES",
      heroTitle: "Organic Precision. Global Compliance.",
      heroSubtitle:
        "Harmonizing high-capacity WHO-GMP formulation manufacturing with agile Drug Regulatory Affairs (DRA) consultancy and complete eCTD dossier architectures.",
      exploreBtn: "Explore Capabilities",
      metrics: {
        m1Label: "TABLETS / YR",
        m1Val: "240 Million",
        m2Label: "STERILE INJECTABLES",
        m2Val: "126 Million",
        m3Label: "eCTD DOSSIERS",
        m3Val: "150+ Ready",
        m4Label: "COMPLIANCE",
        m4Val: "WHO-GMP",
      },
      pillarsBadge: "[ 01 / STRATEGIC SERVICE DIVISIONS ]",
      pillarsTitle: "Selected Pillars",
      pillarsSubtitle:
        "Four specialized execution divisions engineered for sovereign health ministries and international distributors.",
      pillarCards: [
        {
          category: "DRA & REGULATORY DOSSIERS",
          title: "Drug Regulatory Affairs",
          tagline: "Accelerated MOH Approvals & eCTD Publishing",
          badge: "[eCTD Modules 1-5]",
          points: [
            "DMF (CTD format) Preparation, Review & Submission",
            "Dossier Writing, Scientific Review & Registration",
            "COA, COPP & Foreign Consular Legalization",
            "Post-Approval Lifecycle Maintenance & Variations",
          ],
        },
        {
          category: "WHO-GMP 3RD PARTY MANUFACTURING",
          title: "3rd Party Manufacturing",
          tagline: "End-to-End Generic Production & International Export",
          badge: "[WHO-GMP Certified]",
          description:
            "Zelnex Pharmaceuticals offers WHO-GMP compliant Pharma Medicines through Third Party Manufacturing in India for international customers. Large scale production capacity and well qualified staff are a perfect combination for all your Third Party Manufacturing requirements.",
          processLabel: "Process for 3rd Party Manufacturing:",
          points: [
            "Formulation approval from Drug department",
            "Procurement of Raw materials",
            "Actual Formulation Production",
            "Export",
          ],
          closingNote:
            "With our commitment towards working collaboratively with customers, we provide Quality Branded medicines and Generics worldwide.",
        },
        {
          category: "SCALE & BATCH CAPACITY",
          title: "Contract Manufacturing",
          tagline: "Scalable Automated Batch Output",
          badge: "[400M+ Annual Units]",
          points: [
            "State-of-the-art facilities adhering to WHO-GMP specs",
            "SCADA fully computerized manufacturing systems",
            "Sterile & General dosage (SVP and LVP parenterals)",
            "Dedicated isolated Beta-Lactam & Cephalosporin blocks",
          ],
        },
        {
          category: "GLOBAL FINISHED FORMULATIONS",
          title: "Generic Medicines",
          tagline: "Comprehensive Multi-Therapeutic Portfolio",
          badge: "[14+ Therapeutic Classes]",
          points: [
            "Antiviral, Antimalarial, Antifungal & Oncology",
            "Cardiovascular, Beta-Lactam, NSAIDs & Antidiabetic",
            "Anti-Asthmatic, Antiemetic, Anesthetic & Antacids",
            "Deep customer relationships across 50+ countries",
          ],
        },
      ],
      coreBadge: "[ 02 / SERVICE ARCHITECTURE ]",
      coreTitle: "Core Capabilities",
      coreSubtitle:
        "From Drug Regulatory Affairs (DRA) and eCTD Modules 1–5 to high-speed 240M tablet compression lines and lyophilized critical care parenterals.",
      requestDeck: "Request Technical Sourcing Deck",
      accordionServices: [
        {
          id: "dossiers",
          number: "01",
          title: "Drug Regulatory Affairs (DRA)",
          tag: "[MOH eCTD Ready]",
          summary:
            "Entry to the vast realm of pharmaceutical products in international markets requires a detailed understanding of complicated regulatory requirements. At Zelnex Pharmaceuticals, our Drug Regulatory Affairs (DRA) consultants assist companies to plan and manage their pharmaceutical development programs and regulatory requirements.",
          details: [
            "Registration Service: DMF (CTD format) Preparation, Review and Submission • Dossier Writing and Scientific Review • Dossier Registration • COA, COPP • Notarization & Legalization.",
            "Post-Approval Changes: Product re-registration and Renewal of site according to schedule • Post-approval lifecycle maintenance • Report compilation and publishing.",
            "Pre-Registration Service: Drug Product DMF • Development & Preparation of technical documents • Content creation and document services.",
          ],
        },
        {
          id: "contract-mfg",
          number: "02",
          title: "Contract Manufacturing",
          tag: "[WHO-GMP Automated]",
          summary:
            "Zelnex Pharmaceuticals provides WHO-GMP quality for all its Formulations. We are a reliable partner of healthcare industries with a history of proven Quality Products and Services, manufacturing on contract basis for leading pharmaceutical enterprises.",
          details: [
            "State-of-the-art facilities adhering strictly to WHO-GMP specifications with fully computerized SCADA manufacturing automation.",
            "Capabilities to produce dosage forms in sterile and general, covering all therapeutic segments including small and large volume parenterals (SVP and LVP).",
            "Dedicated isolated production facilities for Beta-Lactam and Cephalosporin products to eliminate cross-contamination.",
            "Qualified and experienced technical team in each area of Pharma Contract Manufacturing like QC, QA, and Product Development.",
          ],
        },
        {
          id: "third-party-mfg",
          number: "03",
          title: "3rd Party Manufacturing",
          tag: "[Turnkey Export Pipeline]",
          summary:
            "Zelnex Pharmaceuticals offers WHO-GMP compliant Pharma Medicines through Third Party Manufacturing in India for international customers with high quality standards from raw material procurement to export dispatch.",
          details: [
            "Stage 01: Formulation approval from Drug Department and trademark verification.",
            "Stage 02: Procurement of certified USP/BP/EP grade raw materials and APIs.",
            "Stage 03: Actual Formulation Production with continuous in-process analytical testing.",
            "Stage 04: Tropical packaging (Zone IVb Alu-Alu) and international export dispatch.",
          ],
        },
        {
          id: "generic-supply",
          number: "04",
          title: "Generic Medicines",
          tag: "[14+ Therapeutic Lines]",
          summary:
            "Zelnex Pharmaceuticals is a leading Generic Pharmaceutical company in India, manufacturing Generic Medicines and building a strong presence in emerging markets worldwide.",
          details: [
            "Therapeutic coverage: Antiviral, Antimalarial, Antifungal, Anticancer (Oncology), Cardiovascular, Beta-lactam Antibiotics, NSAIDs, Antidiabetic, Anti-asthmatic, and Pediatric Formulations.",
            "Global delivery promise: Capitalizing on every opportunity to bring high-quality medicines to more people around the world.",
          ],
        },
        {
          id: "capacities-matrix",
          number: "05",
          title: "Production Capacity Matrix",
          tag: "[Validated Yearly Output]",
          summary:
            "High-speed validated manufacturing lines designed for continuous large-scale batch export worldwide.",
          details: [
            "Oral Solids & Liquids: Tablets (240 Million), Hard Gelatin (20 Million), Soft Gelatin (10 Million), Liquid Syrups (5.0 Million), Dry Syrups (5.0 Million), External Preparations (5.0 Million), Eye/Ear Drops (12 Million).",
            "Sterile Injectables: Liquid Vials (25 Million), Ampoules (50 Million), Powder for Injections (50 Million), Lyophilized Vials (1.0 Million).",
          ],
        },
      ],
    },
    footer: {
      companyCol: "Company",
      resourcesCol: "Resources",
      qualityCol: "Quality",
      companyLinks: [
        { label: "Company Overview", href: "/#overview" },
        { label: "All Pharmaceutical Services", href: "/services" },
        { label: "Drug Regulatory Affairs (DRA)", href: "/services#regulatory" },
        { label: "Contract Manufacturing (WHO-GMP)", href: "/services#contract" },
        { label: "3rd Party Manufacturing", href: "/services#third-party" },
        { label: "Generic Formulations Export", href: "/services#generics" },
      ],
      resourceLinks: [
        { label: "Blogs & Knowledge Hub", href: "/blogs" },
        { label: "Frequently Asked Questions", href: "/blogs#faq" },
        { label: "Global Accreditations", href: "/#certifications" },
        { label: "Growing Network", href: "/#network" },
        { label: "Direct Inquiries", href: "/#contact" },
      ],
      qualityLinks: [
        { label: "WHO-GMP Facilities", href: "/#certifications" },
        { label: "ISO 9001:2015 Certified", href: "/#certifications" },
        { label: "CTD and eCTD Dossiers", href: "/#certifications" },
        { label: "Zone IVb Stability Tested", href: "/#certifications" },
        { label: "Export Market Clearance", href: "/#network" },
      ],
      newsletterTitle: "Global Export Intelligence",
      newsletterDesc:
        "Subscribe for regulatory updates, eCTD approvals, and new formulation releases.",
      newsletterPlaceholder: "Enter your corporate email",
      newsletterBtn: "Subscribe",
      newsletterSuccess: "Thank you for subscribing to Zelnex Export Intelligence.",
      privacy: "Privacy Policy",
      terms: "Terms of Supply",
      whoGmp: "WHO-GMP Status",
      allRightsReserved: "All rights reserved.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ── SPANISH (es) ─────────────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════════════
  es: {
    nav: {
      home: "Inicio",
      overview: "Empresa",
      whoWeAre: "Quiénes Somos",
      services: "Servicios",
      products: "Productos",
      categories: "Categorías",
      certifications: "Certificaciones",
      blogs: "Blogs y FAQ",
      faq: "Preguntas",
      contact: "Contacto",
      getInTouch: "Contáctenos",
    },
    hero: {
      badge: "Formulaciones Farmacéuticas y Exportación Global",
      titleLine1: "Mejor Salud",
      titleLine2: "para un Mundo Mejor",
      subheading:
        "Comprometidos con mejorar vidas a través de medicamentos genéricos de alta calidad y soluciones confiables para más de 50 países.",
      exploreProducts: "Explorar Productos",
      contactDesk: "Mesa de Exportación",
      sidebar: {
        therapeutics: "Productos",
        enquiry: "Consulta",
        social: "Redes",
        location: "Ubicación",
      },
      stats: {
        stat1Number: "65+",
        stat1Top: "Países",
        stat1Bottom: "en el Mundo",
        stat2Number: "350+",
        stat2Top: "Productos",
        stat2Bottom: "Certificados",
        stat3Number: "150+",
        stat3Top: "Clientes",
        stat3Bottom: "Internacionales",
        stat4Number: "100%",
        stat4Top: "Certificado",
        stat4Bottom: "OMS-GMP",
      },
    },
    overview: {
      badge: "Excelencia Farmacéutica Internacional",
      title: "Zelnex Pharmaceuticals Pvt. Ltd. – Visión General",
      lead: "Zelnex Pharmaceuticals Pvt. Ltd. es una empresa farmacéutica emergente con sede en India, enfocada en ofrecer soluciones de salud asequibles, de alta calidad y con cumplimiento normativo global. Nuestra visión es construir una marca premium orientada a la exportación.",
      stats: {
        stat1Number: "8+",
        stat1Top: "Años de",
        stat1Bottom: "Experiencia Global",
        stat2Number: "800+",
        stat2Top: "Fórmulas",
        stat2Bottom: "Comerciales",
        stat3Number: "50+",
        stat3Top: "Países de",
        stat3Bottom: "Exportación",
        stat4Number: "100%",
        stat4Top: "OMS-GMP",
        stat4Bottom: "Conformidad Total",
      },
      p1Number: "01",
      p1Title: "Formulaciones de Productos Diversificadas",
      p1Desc:
        "Zelnex se especializa en la comercialización, suministro y distribución mundial de comprimidos, cápsulas, jarabes y terapias combinadas.",
      p1Tags: [
        "Antiinfecciosos",
        "Control del Dolor",
        "Antidiabéticos",
        "Salud Gastrointestinal",
        "Tratamientos Generales",
      ],
      p2Number: "02",
      p2Title: "Calidad y Abastecimiento OMS-GMP",
      p2Desc:
        "Todos los productos provienen de plantas certificadas por la OMS-GMP, garantizando máxima seguridad y cumplimiento de las directrices sanitarias internacionales.",
      p2Adherence: "Conformidad Internacional de Calidad",
      p2Certified: "100% Certificado",
      p3Number: "03",
      p3Title: "Modelo Escalable de Exportación",
      p3Desc:
        "Estructura logística ágil y precios competitivos que permiten abastecer tanto a mercados emergentes como a sistemas de salud altamente regulados.",
      p4Number: "04",
      p4Title: "Dossiers Regulatorios y Registro",
      p4Desc:
        "Fuerte capacidad en redacción técnica, soporte de dossiers CTD/eCTD y tramitación de registros sanitarios ante ministerios de salud internacionales.",
      refWelcome: "Bienvenidos a",
      refCompany: "Zelnex Pharmaceuticals Pvt. Ltd.",
      refLead:
        "Zelnex Pharmaceuticals Pvt. Ltd. se ubica en India, impulsada por la visión de suministrar medicamentos de calidad internacional a precios competitivos mediante investigación e innovación.",
      refSummary:
        "Somos una compañía exportadora confiable que elabora comprimidos, cápsulas, jarabes, antiinfecciosos y formulaciones especializadas respaldadas por certificación OMS-GMP y dossiers regulatorios completos.",
      refReadMore: "LEER MÁS",
      panels: {
        p1Badge: "Servicios Regulatorios",
        p1Title: "Aprobaciones de Mercado Aceleradas con Dossiers CTD Completos",
        p1Desc:
          "La tramitación de registros ante Ministerios de Salud extranjeros requiere documentación rigurosa. Zelnex elabora dossiers completos en formato CTD y eCTD adaptados a las normativas de ASEAN, LATAM, GCC y África.",
        p1Points: [
          "Datos de estabilidad en tiempo real y acelerados para Zona Climática IVb",
          "Resúmenes de Bioequivalencia (BE) y Certificados de Producto Farmacéutico (COPP)",
          "Certificados de Libre Venta (FSC) y documentación de validación cGMP",
        ],
        p1Cta: "Solicitar Lista de Disponibilidad de Dossiers",
        p2Badge: "Fabricación a Terceros",
        p2Title: "Fabricación a Terceros y Formulación por Contrato",
        p2Desc:
          "Zelnex Pharmaceuticals ofrece medicamentos conformes con OMS-GMP mediante Fabricación a Terceros en India para clientes internacionales. Contamos con amplia capacidad productiva y personal calificado para satisfacer todas sus necesidades de fabricación. Mantenemos altos estándares de calidad desde el aprovisionamiento de materias primas, optimización de procesos, formulación, ensayos de control de calidad y exportación.",
        p2Points: [
          "Aprobación de formulaciones ante el departamento de medicamentos",
          "Aprovisionamiento de materias primas y APIs certificados",
          "Producción de formulaciones bajo estrictas normas OMS-GMP",
          "Empaque de exportación, liberación de lotes y logística global",
        ],
        p2Cta: "Consultar Fabricación a Terceros",
        p3Badge: "Cadena de Suministro",
        p3Title: "Tránsito Global Confiable y Barrera de Empaque Tropical",
        p3Desc:
          "La exportación farmacéutica exige empaques especializados para transporte marítimo tropical. Zelnex emplea blíster Alu-Alu conformado en frío, frascos de HDPE con sellado por inducción y cajas de exportación de triple corrugado para garantizar 36 meses de estabilidad en clima cálido y húmedo Zona IVb.",
        p3Points: [
          "Sellos de barrera primaria a prueba de manipulaciones y serialización",
          "Documentación completa de exportación y Reporte Limpio de Hallazgos (CRF)",
          "Alianzas logísticas de flete marítimo y aéreo en los principales puertos mundiales",
        ],
        p3Cta: "Revisar Especificaciones de Empaque",
        p4Badge: "Formulario",
        p4Title: "Más de 800 Moléculas Genéricas Comerciales en 10+ Categorías",
        p4Desc:
          "Nuestro extenso catálogo de exportación abarca áreas terapéuticas de alta demanda: Antiinfecciosos, Cardiología, Sistema Nervioso Central (SNC), Gastrointestinal, Respiratorio, Diabetes, Dermatología, Oncología e Inyectables de Cuidados Críticos.",
        p4Points: [
          "Dossiers comerciales listos para radicación inmediata de visas de importación",
          "Cantidades Mínimas de Pedido (MOQs) flexibles adaptadas a la entrada en el mercado",
          "Certificado de Análisis (CoA) directo emitido para cada lote liberado",
        ],
        p4Cta: "Explorar Portafolio de Productos",
      },
    },
    whoWeAre: {
      badge: "Quiénes Somos",
      title: "Dedicados a la Salud y el Bienestar Global",
      description:
        "Zelnex Pharmaceuticals Pvt. Ltd. se especializa en el suministro, comercialización y exportación de productos farmacéuticos de alta calidad a distribuidores e instituciones de salud en todo el mundo.",
      button: "Contáctenos",
      cards: {
        card1Title: "Manufactura Avanzada",
        card2Title: "50+ Países",
        card2Subtitle:
          "Ampliando el acceso a medicamentos esenciales en mercados internacionales.",
        card3Title: "300+ Productos de Calidad",
        card3Subtitle:
          "Una amplia gama terapéutica para socios que exigen confiabilidad.",
      },
    },
    products: {
      badge: "Nuestros Productos",
      title: "Categorías farmacéuticas que distribuimos a nivel global",
      subtitle:
        "Portafolio integral de formulaciones certificadas para distribuidores e importadores farmacéuticos internacionales.",
      categories: {
        tablets: {
          title: "Comprimidos y Formas Sólidas",
          badge: "Alta Capacidad",
          desc: "Comprimidos no recubiertos, recubiertos con película, de liberación prolongada y masticables según normas farmacopeicas.",
          bullets: [
            "Perfiles de Liberación Inmediata y Modificada",
            "Empaques en Blíster Alu-Alu y PVC/PVDC",
            "Presentaciones Institucionales y Frascos para Exportación",
            "Trazabilidad de Lote Completa OMS-GMP",
          ],
          cta: "Ver Formulaciones",
        },
        capsules: {
          title: "Cápsulas y Pellets",
          badge: "Liberación Prolongada",
          desc: "Cápsulas de gelatina dura y vegetarianas HPMC con llenado de precisión en polvo, pellets o microgránulos.",
          bullets: [
            "Cápsulas Tamaños 00 a 4 de Gelatina y Vegetales",
            "Pellets con Recubrimiento Entérico y Liberación Lenta",
            "Empaque Tropicalizado con Protección Antihumedad",
            "Conformidad Total en Pruebas de Disolución In Vitro",
          ],
          cta: "Explorar Cápsulas",
        },
        syrups: {
          title: "Líquidos Orales y Jarabes",
          badge: "Alto Volumen",
          desc: "Jarabes aromatizados, suspensiones pediátricas y polvos para reconstitución elaborados en áreas estériles automatizadas.",
          bullets: [
            "Jarabes con Sabor Enmascarado para Adultos y Niños",
            "Envasado en Frascos de Vidrio Ámbar y PET",
            "Jarabes en Polvo Seco con Dosificación Exacta",
            "Estrictos Controles Microbiológicos y de Viscosidad",
          ],
          cta: "Ver Gama Líquida",
        },
        injectables: {
          title: "Inyectables Estériles y Parenterales",
          badge: "Cuidados Críticos",
          desc: "Inyectables estériles líquidos y liofilizados, ampollas y parenterales de pequeño y gran volumen para terapia hospitalaria.",
          bullets: [
            "Llenado Aséptico en Salas Limpias Clase ISO 5",
            "Viales Liofilizados para Emergencias Críticas",
            "Esterilización Terminal y Lotes Libres de Endotoxinas",
            "Verificación Completa de Cadena de Frío para Exportación",
          ],
          cta: "Solicitar Inyectables",
        },
      },
      careers: {
        badge: "Carreras y Alianzas Globales",
        title: "Construya su presencia en salud global con Zelnex",
        desc: "Únase a una potencia exportadora farmacéutica dinámica dedicada a la calidad, la normativa y la expansión en más de 50 países.",
        cta1: "Consultar para Alianza",
        cta2: "Unirse a Nuestra Red",
      },
    },
    categories: {
      badge: "Formulario Interactivo · 800+ Fórmulas",
      title: "Segmentos terapéuticos líderes a nivel mundial.",
      subtitle:
        "Descubra nuestras líneas terapéuticas fabricadas bajo estándares de la OMS con dossiers técnicos de registro completos.",
      searchPlaceholder: "Buscar por clase terapéutica, principio activo o código...",
      cards: [
        {
          category: "Amplio Espectro",
          title: "Antibióticos y Antiinfecciosos",
          count: "60+ Productos",
          tag: "Cuidados Críticos",
        },
        {
          category: "Cardiología",
          title: "Cardiología y Salud Vascular",
          count: "45+ Productos",
          tag: "Vida y Salud",
        },
        {
          category: "Neurología",
          title: "SNC y Neuropsiquiatría",
          count: "38+ Productos",
          tag: "Especialidad",
        },
        {
          category: "Osteoarticular",
          title: "Ortopedia y Osteomuscular",
          count: "32+ Productos",
          tag: "Analgésicos",
        },
        {
          category: "Digestivo",
          title: "Salud Gastrointestinal y Antiácidos",
          count: "50+ Productos",
          tag: "Alto Volumen",
        },
        {
          category: "Neumología",
          title: "Respiratorio y Antialérgico",
          count: "28+ Productos",
          tag: "Acción Rápida",
        },
        {
          category: "Cuidados Críticos",
          title: "Oncología y Citotóxicos",
          count: "20+ Productos",
          tag: "Uso Hospitalario",
        },
        {
          category: "Endocrinología",
          title: "Antidiabéticos y Metabólicos",
          count: "24+ Productos",
          tag: "Tratamiento Crónico",
        },
        {
          category: "Dermatología",
          title: "Dermatología y Tópicos",
          count: "35+ Productos",
          tag: "Cuidado Tópico",
        },
        {
          category: "Bienestar",
          title: "Nutracéuticos y Vitaminas",
          count: "40+ Productos",
          tag: "Salud Diaria",
        },
      ],
    },
    certifications: {
      badge: "Acreditaciones Regulatorias",
      title: "Donde la Calidad Global se Une al Cumplimiento Normativo",
      subtitle:
        "Suministro exclusivo desde plantas certificadas OMS-GMP con dossiers CTD/eCTD aprobados en más de 50 ministerios de salud.",
      metrics: [
        { label: "Planta de Fabricación", value: "OMS-GMP e ISO 9001" },
        { label: "Estabilidad de Exportación", value: "Zona IVb (30°C / 75% HR)" },
        { label: "Disponibilidad de Dossier", value: "CTD / eCTD Módulos 1–5" },
        { label: "Registros Sanitarios Activos", value: "50+ Ministerios de Salud" },
      ],
      tabs: {
        all: "Todas las Regiones",
        global: "Autoridades Mundiales",
        africa: "Ministerios de África",
        asia: "Asia y Medio Oriente",
      },
      viewDoc: "Ver Detalles de Acreditación",
      modalTitle: "Detalles de Acreditación",
      modalScope: "Alcance Normativo",
      modalModules: "Módulos Validados",
      modalClose: "Cerrar Ventana",
    },
    packaging: {
      badge: "Empaque de Alta Barrera",
      title: "Estabilidad Garantizada en Zona IVb",
      subtitle:
        "Empaques tipo Alu-Alu y PVC/PVDC tropicalizados diseñados para proteger la potencia del medicamento en climas extremos.",
      f1Title: "Blíster Formado en Frío Alu-Alu",
      f1Desc: "Barrera 100% impermeable a humedad y oxígeno para antibióticos y sólidos sensibles.",
      f2Title: "Recubrimiento Tropicalizado PVDC",
      f2Desc: "Excelente aislamiento térmico contra la humedad ambiental para extender la vida útil.",
      f3Title: "Sellado Inviolable de Viales",
      f3Desc: "Tapas flip-off estériles que aseguran la autenticidad del lote y la protección líquida.",
      f4Title: "Registradores de Cadena de Frío",
      f4Desc: "Monitoreo térmico digital en tiempo real para biológicos y parenterales inyectables.",
    },
    network: {
      badge: "Alcance Internacional",
      title: "Exportando a Más de 50 Países",
      subtitle:
        "Nuestra cadena de suministro conecta ministerios de salud y distribuidores mayoristas en 4 continentes.",
      stat1Label: "50+ Países",
      stat1Desc: "Mercados internacionales activos",
      stat2Label: "4 Continentes",
      stat2Desc: "África, Asia, CEI y América Latina",
      stat3Label: "50+ Ministerios de Salud",
      stat3Desc: "Dossiers y registros aprobados",
      stat4Label: "Logística 24/7",
      stat4Desc: "Despacho internacional monitoreado",
    },
    contact: {
      badge: "Consultas Directas de Exportación",
      title: "Asóciese con Zelnex para un suministro confiable",
      subtitle:
        "Indíquenos los requerimientos de su mercado. Nuestro equipo regulatorio responderá en menos de 24 horas con dossiers y cotizaciones.",
      nameLabel: "Su Nombre / Organización",
      namePlaceholder: "ej. Dr. Alejandro Gómez / MediCorp Importaciones",
      emailLabel: "Correo Electrónico Corporativo",
      emailPlaceholder: "ej. compras@medicorp.com",
      destinationLabel: "País de Destino / Territorio",
      destinationPlaceholder: "ej. México, Colombia, Costa de Marfil, Vietnam...",
      messageLabel: "Formulaciones y Volúmenes Requeridos",
      messagePlaceholder: "Describa los principios activos, formas farmacéuticas, requerimientos de empaque y volumen estimado...",
      submitBtn: "Contactar con Zelnex",
      submittingBtn: "Enviando Consulta...",
      successTitle: "Consulta Enviada con Éxito",
      successDesc:
        "Gracias por comunicarse con Zelnex Pharmaceuticals. Nuestro departamento de exportación le responderá en 24 horas.",
      closeBtn: "Cerrar",
    },
    servicesPage: {
      badge: "SERVICIOS FARMACÉUTICOS ZELNEX",
      heroTitle: "Precisión Orgánica. Cumplimiento Global.",
      heroSubtitle:
        "Combinamos fabricación a gran escala bajo norma OMS-GMP con consultoría ágil en Asuntos Regulatorios y dossiers eCTD.",
      exploreBtn: "Explorar Capacidades",
      metrics: {
        m1Label: "COMPRIMIDOS / AÑO",
        m1Val: "240 Millones",
        m2Label: "INYECTABLES ESTÉRILES",
        m2Val: "126 Millones",
        m3Label: "DOSSIERS eCTD",
        m3Val: "150+ Listos",
        m4Label: "NORMATIVA",
        m4Val: "OMS-GMP",
      },
      pillarsBadge: "[ 01 / DIVISIONES ESTRATÉGICAS DE SERVICIO ]",
      pillarsTitle: "Pilares Seleccionados",
      pillarsSubtitle:
        "Cuatro divisiones especializadas diseñadas para ministerios de salud y distribuidores internacionales.",
      pillarCards: [
        {
          category: "DRA Y DOSSIERS REGULATORIOS",
          title: "Asuntos Regulatorios de Medicamentos",
          tagline: "Aprobaciones Aceleradas en Ministerios y eCTD",
          badge: "[eCTD Módulos 1-5]",
          points: [
            "Preparación, Revisión y Envío de DMF (formato CTD)",
            "Redacción de Dossiers, Revisión Científica y Registro",
            "Legalización Consular y Emisión de COA y COPP",
            "Mantenimiento Post-Aprobación y Gestión de Variaciones",
          ],
        },
        {
          category: "FABRICACIÓN A TERCEROS OMS-GMP",
          title: "Fabricación a Terceros",
          tagline: "Suministro y Exportación Internacional Integral",
          badge: "[Certificado OMS-GMP]",
          points: [
            "Aprobación de fórmula ante el Departamento de Medicamentos",
            "Aprovisionamiento de materias primas y APIs certificados",
            "Producción de formulaciones bajo normas OMS-GMP",
            "Empaque de exportación, liberación de lotes y logística global",
          ],
        },
        {
          category: "CAPACIDAD ESCALABLE Y LOTES",
          title: "Fabricación por Contrato",
          tagline: "Producción Automatizada a Gran Escala",
          badge: "[400M+ Unidades Anuales]",
          points: [
            "Plantas de última generación bajo especificaciones OMS-GMP",
            "Sistemas de producción totalmente informatizados SCADA",
            "Dosificación estéril y general (parenterales SVP y LVP)",
            "Bloques aislados dedicados a Betalactámicos y Cefalosporinas",
          ],
        },
        {
          category: "MARCA PRIVADA LLAVE EN MANO",
          title: "Fabricación para Terceros",
          tagline: "Suministro Internacional de Extremo a Extremo",
          badge: "[Flujo Llave en Mano]",
          points: [
            "01. Aprobación de fórmula ante el Departamento de Medicamentos",
            "02. Abastecimiento de APIs y excipientes farmacopeicos",
            "03. Producción efectiva de fórmulas y controles analíticos IPQC",
            "04. Empaque de exportación y despacho marítimo o aéreo",
          ],
        },
        {
          category: "FORMULACIONES TERMINADAS GLOBALES",
          title: "Medicamentos Genéricos",
          tagline: "Portafolio Multiterapéutico Integral",
          badge: "[14+ Clases Terapéuticas]",
          points: [
            "Antivirales, Antipalúdicos, Antifúngicos y Oncológicos",
            "Cardiovascular, Betalactámicos, AINEs y Antidiabéticos",
            "Antiasmáticos, Antieméticos, Anestésicos y Antiácidos",
            "Sólidas relaciones comerciales en más de 50 países",
          ],
        },
      ],
      coreBadge: "[ 02 / ARQUITECTURA DE SERVICIOS ]",
      coreTitle: "Capacidades Principales",
      coreSubtitle:
        "Desde Asuntos Regulatorios (DRA) y Módulos eCTD 1–5 hasta compresión de 240M de comprimidos e inyectables estériles liofilizados.",
      requestDeck: "Solicitar Presentación Técnica de Suministro",
      accordionServices: [
        {
          id: "dossiers",
          number: "01",
          title: "Asuntos Regulatorios de Medicamentos (DRA)",
          tag: "[eCTD Listo para Ministerios]",
          summary:
            "El ingreso a los mercados farmacéuticos internacionales requiere un conocimiento profundo de los requisitos regulatorios. En Zelnex Pharmaceuticals, nuestros consultores de DRA ayudan a planificar y gestionar registros sanitarios de forma ágil y exitosa.",
          details: [
            "Servicio de Registro: Preparación y Revisión de DMF (formato CTD) • Redacción Científica de Dossiers • Tramitación de Registro • Emisión de COA y COPP • Legalización y Apostilla.",
            "Cambios Post-Aprobación: Renovación de registros sanitarios y sitios de manufactura • Mantenimiento del ciclo de vida del producto • Publicación de reportes periódicos.",
            "Servicio Pre-Registro: Elaboración de documentación técnica de producto • Creación de contenidos regulatorios especializados.",
          ],
        },
        {
          id: "contract-mfg",
          number: "02",
          title: "Fabricación por Contrato",
          tag: "[Automatización OMS-GMP]",
          summary:
            "Zelnex Pharmaceuticals garantiza calidad OMS-GMP en todas sus formulaciones. Somos un socio confiable con un historial comprobado en la manufactura a contrato para empresas farmacéuticas líderes.",
          details: [
            "Instalaciones modernas que cumplen estrictamente las directrices de la OMS con automatización de procesos SCADA.",
            "Capacidad para producir formas farmacéuticas estériles y no estériles, cubriendo parenterales de pequeño y gran volumen (SVP y LVP).",
            "Áreas de producción aisladas para Betalactámicos y Cefalosporinas con el fin de evitar la contaminación cruzada.",
            "Equipo técnico altamente calificado en control de calidad (QC), aseguramiento de calidad (QA) e I+D.",
          ],
        },
        {
          id: "third-party-mfg",
          number: "03",
          title: "Fabricación para Terceros",
          tag: "[Canal de Exportación Integral]",
          summary:
            "Ofrecemos medicamentos certificados por la OMS para clientes internacionales a través de manufactura a terceros en India, manteniendo altos estándares desde la materia prima hasta la entrega.",
          details: [
            "Fase 01: Aprobación de formulaciones y verificación de marcas ante autoridades sanitarias.",
            "Fase 02: Adquisición de materias primas y principios activos grado USP/BP/EP certificados.",
            "Fase 03: Fabricación con controles analíticos en proceso (IPQC) continuos.",
            "Fase 04: Empaque tropicalizado (Zona IVb Alu-Alu) y despacho logístico internacional.",
          ],
        },
        {
          id: "generic-supply",
          number: "04",
          title: "Medicamentos Genéricos",
          tag: "[14+ Líneas Terapéuticas]",
          summary:
            "Zelnex Pharmaceuticals es un laboratorio líder de medicamentos genéricos en India, consolidando una fuerte presencia en mercados emergentes de todo el mundo.",
          details: [
            "Cobertura terapéutica: Antivirales, Antipalúdicos, Antifúngicos, Oncología, Cardiovascular, Betalactámicos, AINEs, Antidiabéticos, Antiasmáticos y Fórmulas Pediátricas.",
            "Compromiso de suministro: Acercar medicamentos de máxima calidad a más personas en todo el planeta.",
          ],
        },
        {
          id: "capacities-matrix",
          number: "05",
          title: "Matriz de Capacidad de Producción",
          tag: "[Capacidad Anual Validada]",
          summary:
            "Líneas de producción de alta velocidad validadas para el suministro continuo a gran escala en todo el mundo.",
          details: [
            "Sólidos y Líquidos Orales: Comprimidos (240 Millones), Cápsulas Duras (20 Millones), Cápsulas Blandas (10 Millones), Jarabes Líquidos (5.0 Millones), Jarabes Secos (5.0 Millones), Gotas Oftálmicas/Óticas (12 Millones).",
            "Inyectables Estériles: Viales Líquidos (25 Millones), Ampollas (50 Millones), Polvo para Inyección (50 Millones), Viales Liofilizados (1.0 Millón).",
          ],
        },
      ],
    },
    footer: {
      companyCol: "Empresa",
      resourcesCol: "Recursos",
      qualityCol: "Calidad",
      companyLinks: [
        { label: "Visión General", href: "/#overview" },
        { label: "Servicios Farmacéuticos", href: "/services" },
        { label: "Asuntos Regulatorios (DRA)", href: "/services#regulatory" },
        { label: "Fabricación por Contrato (OMS-GMP)", href: "/services#contract" },
        { label: "Fabricación para Terceros", href: "/services#third-party" },
        { label: "Exportación de Genéricos", href: "/services#generics" },
      ],
      resourceLinks: [
        { label: "Blog y Centro de Conocimiento", href: "/blogs" },
        { label: "Preguntas Frecuentes", href: "/blogs#faq" },
        { label: "Acreditaciones Globales", href: "/#certifications" },
        { label: "Red Internacional", href: "/#network" },
        { label: "Consultas Directas", href: "/#contact" },
      ],
      qualityLinks: [
        { label: "Plantas Certificadas OMS-GMP", href: "/#certifications" },
        { label: "Certificación ISO 9001:2015", href: "/#certifications" },
        { label: "Dossiers CTD y eCTD", href: "/#certifications" },
        { label: "Estabilidad en Zona IVb", href: "/#certifications" },
        { label: "Autorizaciones de Exportación", href: "/#network" },
      ],
      newsletterTitle: "Información Regulatoria Global",
      newsletterDesc:
        "Suscríbase para recibir actualizaciones sanitarias, aprobaciones de eCTD y nuevos lanzamientos.",
      newsletterPlaceholder: "Ingrese su correo corporativo",
      newsletterBtn: "Suscribirse",
      newsletterSuccess: "Gracias por suscribirse a las noticias de Zelnex.",
      privacy: "Política de Privacidad",
      terms: "Términos de Suministro",
      whoGmp: "Estado OMS-GMP",
      allRightsReserved: "Todos los derechos reservados.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ── PORTUGUESE (pt) ──────────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════════════
  pt: {
    nav: {
      home: "Início",
      overview: "Visão Geral",
      whoWeAre: "Quem Somos",
      services: "Serviços",
      products: "Produtos",
      categories: "Categorias",
      certifications: "Acreditações",
      blogs: "Blogs e FAQ",
      faq: "Perguntas",
      contact: "Contato",
      getInTouch: "Entrar em Contato",
    },
    hero: {
      badge: "Formulações Farmacêuticas e Exportação Global",
      titleLine1: "Melhor Saúde",
      titleLine2: "para um Mundo Melhor",
      subheading:
        "Estamos comprometidos em melhorar vidas por meio de medicamentos inovadores e soluções confiáveis de saúde com certificação internacional em mais de 50 países.",
      exploreProducts: "Explorar Nossos Produtos",
      contactDesk: "Mesa de Exportação",
      sidebar: {
        therapeutics: "Produtos",
        enquiry: "Consulta",
        social: "Social",
        location: "Localização",
      },
      stats: {
        stat1Number: "65+",
        stat1Top: "Países",
        stat1Bottom: "Atendidos",
        stat2Number: "350+",
        stat2Top: "Produtos",
        stat2Bottom: "de Qualidade",
        stat3Number: "150+",
        stat3Top: "Clientes",
        stat3Bottom: "Internacionais",
        stat4Number: "100%",
        stat4Top: "Padrões",
        stat4Bottom: "WHO-GMP",
      },
    },
    overview: {
      badge: "Excelência Farmacêutica de Grau Internacional",
      title: "Zelnex Pharmaceuticals Pvt. Ltd. – Visão Geral da Empresa",
      lead: "A Zelnex Pharmaceuticals Pvt. Ltd. é uma empresa farmacêutica emergente sediada na Índia, focada em fornecer soluções de saúde de alta qualidade, acessíveis e em conformidade global. Nossa visão é construir uma marca premium voltada para exportação e estabelecer uma presença sólida nos mercados internacionais.",
      stats: {
        stat1Number: "8+",
        stat1Top: "Anos de",
        stat1Bottom: "Experiência Global",
        stat2Number: "800+",
        stat2Top: "Formulações",
        stat2Bottom: "Comerciais",
        stat3Number: "50+",
        stat3Top: "Países de",
        stat3Bottom: "Exportação",
        stat4Number: "100%",
        stat4Top: "WHO-GMP",
        stat4Bottom: "Conformidade Total",
      },
      p1Number: "01",
      p1Title: "Formulações Diversificadas de Produtos",
      p1Desc:
        "A Zelnex é especializada em marketing, fornecimento e distribuição global de formulações farmacêuticas com portfólio abrangente de comprimidos, cápsulas, xaropes e medicamentos combinados.",
      p1Tags: [
        "Anti-Infecciosos",
        "Controle da Dor",
        "Anti-Diabéticos",
        "Cuidados Gastrointestinais",
        "Tratamentos Gerais",
      ],
      p2Number: "02",
      p2Title: "Qualidade e Fornecimento WHO-GMP",
      p2Desc:
        "Todos os produtos são provenientes de instalações certificadas pela WHO-GMP, garantindo estrita adesão aos padrões regulatórios e de qualidade internacionais.",
      p2Adherence: "Adesão à Qualidade Internacional",
      p2Certified: "100% Certificado",
      p3Number: "03",
      p3Title: "Modelo Escalável de Exportação Global",
      p3Desc:
        "Operamos com um modelo flexível e escalável que permite expandir nosso catálogo com eficiência de custos e total conformidade regulatória em mercados emergentes e regulamentados.",
      p4Number: "04",
      p4Title: "Dossiês Regulatórios e Registro",
      p4Desc:
        "Construímos sólida capacidade em documentação técnica, suporte a dossiês CTD/eCTD e registro de mercado internacional perante ministérios da saúde mundiais.",
      refWelcome: "Bem-vindos à",
      refCompany: "Zelnex Pharmaceuticals Pvt. Ltd.",
      refLead:
        "A Zelnex Pharmaceuticals Pvt. Ltd. localiza-se na Índia, impulsionada pela visão de fornecer a melhor gama de produtos de qualidade internacional a preços competitivos através de inovação e pesquisa contínua.",
      refSummary:
        "Somos reconhecidos como uma empresa farmacêutica confiável voltada para exportação que produz comprimidos, cápsulas, xaropes, anti-infecciosos e formulações especializadas respaldadas por conformidade WHO-GMP completa.",
      refReadMore: "LER MAIS",
      panels: {
        p1Badge: "Serviços Regulatórios",
        p1Title: "Aprovações de Mercado Aceleradas com Dossiês CTD Completos",
        p1Desc:
          "A tramitação de registros perante Ministérios da Saúde exige documentação rigorosa. A Zelnex elabora dossiês completos no formato CTD e eCTD formatados para as agências regulatórias de ASEAN, LATAM, GCC e África.",
        p1Points: [
          "Dados de testes de estabilidade em tempo real e acelerados na Zona IVb",
          "Sumários de Bioequivalência (BE) e Certificados de Produto Farmacêutico (COPP)",
          "Certificados de Venda Livre (FSC) e documentação de validação cGMP",
        ],
        p1Cta: "Solicitar Lista de Disponibilidade de Dossiês",
        p2Badge: "Fabricação para Terceiros",
        p2Title: "Fabricação para Terceiros e Formulação por Contrato",
        p2Desc:
          "A Zelnex Pharmaceuticals fornece medicamentos em conformidade com WHO-GMP através de Fabricação para Terceiros na Índia para clientes internacionais. Nossa ampla capacidade produtiva e equipe altamente qualificada suprem todas as suas demandas de terceirização. Mantemos rigorosos padrões de qualidade desde a aquisição de matérias-primas, otimização de processos, formulação, testes analíticos e exportação.",
        p2Points: [
          "Aprovação da formulação junto ao departamento de medicamentos",
          "Aquisição de matérias-primas e APIs certificados",
          "Produção de formulações sob rigorosas normas WHO-GMP",
          "Embalagem para exportação, liberação de lotes e logística global",
        ],
        p2Cta: "Consultar Fabricação para Terceiros",
        p3Badge: "Cadeia de Suprimentos",
        p3Title: "Trânsito Global Confiável e Barreira de Embalagem Tropical",
        p3Desc:
          "A exportação farmacêutica exige embalagens especializadas para transporte marítimo tropical. A Zelnex utiliza blister Alu-Alu moldado a frio, frascos de HDPE com selagem por indução e caixas de exportação de papelão triplo para assegurar 36 meses de estabilidade na Zona IVb.",
        p3Points: [
          "Selos invioláveis de barreira primária e serialização de lotes",
          "Documentação completa de exportação e Relatório Limpo de Constatações (CRF)",
          "Parcerias logísticas marítimas e aéreas nos principais portos globais",
        ],
        p3Cta: "Revisar Especificações de Embalagem",
        p4Badge: "Formulário",
        p4Title: "Mais de 800 Moléculas Genéricas Comerciais em 10+ Categorias",
        p4Desc:
          "Nosso catálogo abrangente de exportação inclui áreas terapêuticas de alta demanda: Anti-infecciosos, Cardiologia, Sistema Nervioso Central (SNC), Gastrointestinal, Respiratório, Diabetes, Dermatologia, Oncologia e Injetáveis Críticos.",
        p4Points: [
          "Dossiês comerciais prontos para submissão imediata de vistos de importação",
          "Quantidades Mínimas de Pedido (MOQs) flexíveis adequadas à entrada no mercado",
          "Certificado de Análise (CoA) direto fornecido para cada lote liberado",
        ],
        p4Cta: "Navegar no Portfólio de Produtos",
      },
    },
    whoWeAre: {
      badge: "Quem Somos",
      title: "Dedicados à Saúde e Bem-Estar Global",
      description:
        "A Zelnex Pharmaceuticals Pvt. Ltd. é especializada em fornecimento, marketing e exportação de produtos farmacêuticos de alta qualidade — construindo parcerias de longo prazo com distribuidores, importadores e instituições de saúde em todo o mundo.",
      button: "Entrar em Contato",
      cards: {
        card1Title: "Fabricação Avançada",
        card2Title: "50+ Países",
        card2Subtitle:
          "Ampliando o acesso a medicamentos essenciais nos mercados internacionais.",
        card3Title: "300+ Produtos de Qualidade",
        card3Subtitle:
          "Uma linha terapêutica ampla para parceiros que exigem confiabilidade.",
      },
    },
    products: {
      badge: "Nossos Produtos",
      title: "Categorias farmacêuticas que entregamos globalmente",
      subtitle:
        "Uma linha focada de formulações de alta qualidade para distribuidores, importadores e instituições de saúde com prontidão regulatória completa.",
      categories: {
        tablets: {
          title: "Comprimidos e Sólidos Orais",
          badge: "Alta Capacidade",
          desc: "Comprimidos simples, revestidos por película, de liberação prolongada e mastigáveis fabricados segundo rigorosas normas farmacopeicas.",
          bullets: [
            "Perfis de Liberação Imediata e Modificada",
            "Embalagens em Blister Alu-Alu e PVC/PVDC",
            "Apresentações Hospitalares e Frascos de Exportação",
            "Rastreabilidade Total de Lote WHO-GMP",
          ],
          cta: "Ver Formulações",
        },
        capsules: {
          title: "Cápsulas e Pellets",
          badge: "Liberação Estendida",
          desc: "Cápsulas de gelatina dura e vegetarianas HPMC com enchimento de precisão em pó, microgrânulos ou pellets terapêuticos.",
          bullets: [
            "Cápsulas Tamanhos 00 a 4 de Gelatina e Vegetais",
            "Pellets com Revestimento Entérico e Liberação Lenta",
            "Embalagem Tropicalizada Protegida contra Umidade",
            "100% de Conformidade em Dissolução In Vitro",
          ],
          cta: "Explorar Cápsulas",
        },
        syrups: {
          title: "Líquidos Orais e Xaropes",
          badge: "Alto Volume",
          desc: "Xaropes aromatizados, suspensões pediátricas e xaropes em pó produzidos em salas estéreis totalmente automatizadas.",
          bullets: [
            "Xaropes Pediátricos e Adultos com Sabor Agradável",
            "Envase em Frascos de Vidro Âmbar e PET",
            "Xaropes em Pó Seco com Dosagem Precisa",
            "Rigorosos Controles Microbiológicos e de Viscosidade",
          ],
          cta: "Ver Linha Líquida",
        },
        injectables: {
          title: "Injetáveis Estéreis e Parenterais",
          badge: "Cuidados Críticos",
          desc: "Injetáveis estéreis líquidos e liofilizados, ampolas e parenterais de pequeno e grande volume para cuidados hospitalares intensivos.",
          bullets: [
            "Envase Asséptico em Salas Limpas Classe ISO 5",
            "Frascos Liofilizados para Emergências Críticas",
            "Esterilização Terminal e Lotes Livres de Endotoxinas",
            "Verificação Completa da Cadeia de Frio para Exportação",
          ],
          cta: "Solicitar Injetáveis",
        },
      },
      careers: {
        badge: "Carreiras e Parcerias Globais",
        title: "Construa sua presença em saúde global com a Zelnex",
        desc: "Junte-se a uma potência exportadora farmacêutica dinâmica dedicada à qualidade, conformidade e expansão em mais de 50 países.",
        cta1: "Consultar para Parceria",
        cta2: "Juntar-se à Nossa Rede",
      },
    },
    categories: {
      badge: "Formulário Interativo · 800+ Formulações",
      title: "Segmentos terapêuticos que lideram o mundo.",
      subtitle:
        "Navegue pelos nossos portfólios farmacêuticos certificados produzidos em instalações credenciadas WHO-GMP com dossiês de registro eCTD.",
      searchPlaceholder: "Buscar por classe terapêutica, princípio ativo ou código...",
      cards: [
        {
          category: "Amplo Espectro",
          title: "Antibióticos e Anti-Infecciosos",
          count: "60+ Produtos",
          tag: "Cuidados Críticos",
        },
        {
          category: "Cardiologia",
          title: "Cardiologia e Cuidados Vasculares",
          count: "45+ Produtos",
          tag: "Vida e Saúde",
        },
        {
          category: "Neurologia",
          title: "SNC e Neuropsiquiatria",
          count: "38+ Produtos",
          tag: "Especialidade",
        },
        {
          category: "Ortopedia",
          title: "Ortopedia e Osteomuscular",
          count: "32+ Produtos",
          tag: "Analgésicos",
        },
        {
          category: "Digestivo",
          title: "Saúde Gastrointestinal e Antiácidos",
          count: "50+ Produtos",
          tag: "Alto Volume",
        },
        {
          category: "Pneumologia",
          title: "Respiratório e Antialérgicos",
          count: "28+ Produtos",
          tag: "Ação Rápida",
        },
        {
          category: "Cuidados Críticos",
          title: "Oncologia e Citotóxicos",
          count: "20+ Produtos",
          tag: "Uso Hospitalar",
        },
        {
          category: "Endocrinologia",
          title: "Anti-Diabéticos e Metabólicos",
          count: "24+ Produtos",
          tag: "Tratamento Contínuo",
        },
        {
          category: "Dermatologia",
          title: "Dermatologia e Tópicos",
          count: "35+ Produtos",
          tag: "Uso Tópico",
        },
        {
          category: "Bem-Estar",
          title: "Nutracêuticos e Vitaminas",
          count: "40+ Produtos",
          tag: "Saúde Diária",
        },
      ],
    },
    certifications: {
      badge: "Acreditações Regulatórias",
      title: "Onde a Qualidade Global Encontra a Conformidade Regulatória",
      subtitle:
        "Fornecido estritamente a partir de instalações credenciadas WHO-GMP com prontidão comprovada de dossiês CTD/eCTD em mais de 50 ministérios da saúde.",
      metrics: [
        { label: "Instalação de Fabricação", value: "WHO-GMP e ISO 9001" },
        { label: "Estabilidade de Exportação", value: "Zona IVb (30°C / 75% UR)" },
        { label: "Prontidão de Dossiê", value: "CTD / eCTD Módulos 1–5" },
        { label: "Registros Sanitários Ativos", value: "50+ Ministérios da Saúde" },
      ],
      tabs: {
        all: "Todas as Regiões",
        global: "Autoridades Mundiais",
        africa: "Ministérios da África",
        asia: "Ásia e Oriente Médio",
      },
      viewDoc: "Ver Detalhes da Acreditação",
      modalTitle: "Detalhes da Acreditação",
      modalScope: "Escopo Regulatório",
      modalModules: "Módulos Validados",
      modalClose: "Fechar Janela",
    },
    packaging: {
      badge: "Embalagens de Alta Barreira",
      title: "Estabilidade Garantida na Zona IVb",
      subtitle:
        "Formatos avançados em blister Alu-Alu e PVC/PVDC tropicalizado desenvolvidos para proteger a potência dos medicamentos em climas tropicais.",
      f1Title: "Blister Alu-Alu Moldado a Frio",
      f1Desc: "Barreira 100% impermeável a oxigênio e umidade para antibióticos e sólidos sensíveis.",
      f2Title: "Revestimento Tropicalizado PVDC",
      f2Desc: "Excelente barreira térmica contra umidade para estender a vida útil do medicamento.",
      f3Title: "Lacres Invioláveis para Frascos",
      f3Desc: "Tampas estéreis flip-off que garantem a autenticidade do lote e a vedação líquida.",
      f4Title: "Registradores de Cadeia de Frio",
      f4Desc: "Monitoramento térmico digital em tempo real para medicamentos biológicos e injetáveis.",
    },
    network: {
      badge: "Presença Mundial",
      title: "Exportando para Mais de 50 Países",
      subtitle:
        "Nossa robusta cadeia de suprimentos conecta provedores de saúde, ministérios e distribuidores comerciais em 4 continentes.",
      stat1Label: "50+ Países",
      stat1Desc: "Mercados internacionais atendidos",
      stat2Label: "4 Continentes",
      stat2Desc: "África, Ásia, CEI e América Latina",
      stat3Label: "50+ Ministérios da Saúde",
      stat3Desc: "Dossiês e registros aprovados",
      stat4Label: "Logística 24/7",
      stat4Desc: "Despacho internacional monitorado",
    },
    contact: {
      badge: "Consultas Diretas de Exportação Global",
      title: "Faça parceria com a Zelnex para um fornecimento confiável",
      subtitle:
        "Conte-nos sobre as necessidades do seu mercado. Nossa equipe regulatória e de exportação responderá em 24 horas com dossiês, preços de lote e acordos de distribuição.",
      nameLabel: "Seu Nome / Organização",
      namePlaceholder: "ex.: Dr. Eduardo Santos / MediCorp Distribuidora",
      emailLabel: "Endereço de E-mail Corporativo",
      emailPlaceholder: "ex.: compras@medicorp.com",
      destinationLabel: "País de Destino / Mercado",
      destinationPlaceholder: "ex.: Brasil, Angola, Moçambique, Portugal...",
      messageLabel: "Formulações e Volumes Necessários",
      messagePlaceholder: "Descreva os princípios ativos, formas farmacêuticas, necessidades de embalagem e volume estimado...",
      submitBtn: "Fazer Parceria com a Zelnex",
      submittingBtn: "Enviando Consulta...",
      successTitle: "Consulta Enviada com Sucesso",
      successDesc:
        "Obrigado por entrar em contato com a Zelnex Pharmaceuticals. Nossa mesa de exportação analisará seus requisitos e responderá em 24 horas.",
      closeBtn: "Fechar",
    },
    servicesPage: {
      badge: "SERVIÇOS FARMACÊUTICOS ZELNEX",
      heroTitle: "Precisão Orgânica. Conformidade Global.",
      heroSubtitle:
        "Harmonizando fabricação de alta capacidade WHO-GMP com consultoria ágil em Assuntos Regulatórios (DRA) e arquiteturas de dossiê eCTD.",
      exploreBtn: "Explorar Capacidades",
      metrics: {
        m1Label: "COMPRIMIDOS / ANO",
        m1Val: "240 Milhões",
        m2Label: "INJETÁVEIS ESTÉREIS",
        m2Val: "126 Milhões",
        m3Label: "DOSSIÊS eCTD",
        m3Val: "150+ Prontos",
        m4Label: "PADRÃO",
        m4Val: "WHO-GMP",
      },
      pillarsBadge: "[ 01 / DIVISÕES ESTRATÉGICAS DE SERVIÇO ]",
      pillarsTitle: "Pilares Selecionados",
      pillarsSubtitle:
        "Quatro divisões especializadas projetadas para ministérios soberanos da saúde e distribuidores internacionais.",
      pillarCards: [
        {
          category: "DRA E DOSSIÊS REGULATÓRIOS",
          title: "Assuntos Regulatórios de Medicamentos",
          tagline: "Aprovações Ágeis nos Ministérios e Publicação eCTD",
          badge: "[eCTD Módulos 1-5]",
          points: [
            "Preparação, Revisão e Submissão de DMF (formato CTD)",
            "Redação de Dossiês, Revisão Científica e Registro",
            "Legalização Consular e Emissão de COA e COPP",
            "Manutenção Pós-Aprovação e Gestão de Variações",
          ],
        },
        {
          category: "FABRICAÇÃO TERCEIRIZADA WHO-GMP",
          title: "Fabricação para Terceiros",
          tagline: "Produção e Exportação Internacional Ponta a Ponta",
          badge: "[Certificado WHO-GMP]",
          points: [
            "Aprovação da fórmula pelo Departamento de Medicamentos",
            "Aquisição de insumos farmacêuticos e APIs certificados",
            "Produção de fórmulas sob rigorosas normas WHO-GMP",
            "Embalagem de exportação, liberação de lotes e logística global",
          ],
        },
        {
          category: "CAPACIDADE ESCALÁVEL E LOTES",
          title: "Fabricação por Contrato",
          tagline: "Produção Automatizada e Escalável",
          badge: "[400M+ Unidades Anuais]",
          points: [
            "Instalações modernas de acordo com as normas WHO-GMP",
            "Sistemas de produção computadorizados SCADA",
            "Dosagem estéril e geral (parenterais SVP e LVP)",
            "Blocos isolados dedicados a Betalactâmicos e Cefalosporinas",
          ],
        },
        {
          category: "FORMULAÇÕES ACABADAS GLOBAIS",
          title: "Medicamentos Genéricos",
          tagline: "Portfólio Abrangente Multiterapêutico",
          badge: "[14+ Classes Terapêuticas]",
          points: [
            "Antivirais, Antimaláricos, Antifúngicos e Oncológicos",
            "Cardiovascular, Betalactâmicos, AINEs e Antidiabéticos",
            "Antiasmáticos, Antieméticos, Anestésicos e Antiácidos",
            "Sólidas parcerias comerciais em mais de 50 países",
          ],
        },
      ],
      coreBadge: "[ 02 / ARQUITETURA DE SERVIÇOS ]",
      coreTitle: "Capacidades Principais",
      coreSubtitle:
        "De Assuntos Regulatórios (DRA) e Módulos eCTD 1–5 a linhas de compressão de 240M comprimidos e parenterais estéreis liofilizados.",
      requestDeck: "Solicitar Apresentação Técnica de Fornecimento",
      accordionServices: [
        {
          id: "dossiers",
          number: "01",
          title: "Assuntos Regulatórios de Medicamentos (DRA)",
          tag: "[eCTD Pronto para Ministérios]",
          summary:
            "A entrada nos mercados farmacêuticos internacionais exige conhecimento aprofundado dos requisitos regulatórios. Na Zelnex Pharmaceuticals, nossos consultores auxiliam no planejamento e registro de produtos de forma rápida e segura.",
          details: [
            "Serviço de Registro: Preparação e Revisão de DMF (formato CTD) • Redação Científica de Dossiês • Registro Sanitário • Emissão de COA e COPP • Apostilamento e Legalização.",
            "Mudanças Pós-Aprovação: Revalidação de registros e renovação de plantas fabris • Manutenção do ciclo de vida • Publicação de relatórios técnicos.",
            "Serviço Pré-Registro: Elaboração de documentação técnica do produto • Criação de conteúdos especializados.",
          ],
        },
        {
          id: "contract-mfg",
          number: "02",
          title: "Fabricação por Contrato",
          tag: "[Automação WHO-GMP]",
          summary:
            "A Zelnex Pharmaceuticals garante qualidade WHO-GMP em todas as suas formulações. Somos um parceiro confiável com histórico comprovado na fabricação por contrato para empresas farmacêuticas líderes.",
          details: [
            "Instalações modernas em total conformidade com especificações WHO-GMP e automação SCADA.",
            "Capacidade para produzir formas farmacêuticas estéreis e gerais, abrangendo parenterais de pequeno e grande volume (SVP e LVP).",
            "Instalações dedicadas e isoladas para Betalactâmicos e Cefalosporinas para eliminar contaminação cruzada.",
            "Equipe técnica especializada em controle de qualidade (QC), garantia de qualidade (QA) e P&D.",
          ],
        },
        {
          id: "third-party-mfg",
          number: "03",
          title: "Fabricação Terceirizada",
          tag: "[Canal Completo de Exportação]",
          summary:
            "Oferecemos medicamentos conformes com a WHO-GMP através de fabricação terceirizada na Índia para clientes internacionais, com rigorosos padrões desde a compra de matéria-prima até o envio.",
          details: [
            "Etapa 01: Aprovação da formulação junto aos órgãos de saúde e verificação de marcas.",
            "Etapa 02: Aquisição de matérias-primas e APIs certificados grau USP/BP/EP.",
            "Etapa 03: Produção farmacêutica com análises contínuas em processo (IPQC).",
            "Etapa 04: Embalagem tropicalizada (Zona IVb Alu-Alu) e despacho internacional.",
          ],
        },
        {
          id: "generic-supply",
          number: "04",
          title: "Medicamentos Genéricos",
          tag: "[14+ Linhas Terapêuticas]",
          summary:
            "A Zelnex Pharmaceuticals é líder na fabricação de medicamentos genéricos na Índia, construindo forte presença nos mercados emergentes de todo o mundo.",
          details: [
            "Cobertura terapêutica: Antivirais, Antimaláricos, Antifúngicos, Oncologia, Cardiovascular, Betalactâmicos, AINEs, Antidiabéticos, Antiasmáticos e Linha Pediátrica.",
            "Compromisso global: Disponibilizar medicamentos de alta qualidade para mais pessoas no mundo inteiro.",
          ],
        },
        {
          id: "capacities-matrix",
          number: "05",
          title: "Matriz de Capacidade de Produção",
          tag: "[Capacidade Anual Validada]",
          summary:
            "Linhas de alta velocidade validadas para produção contínua em larga escala voltada para exportação.",
          details: [
            "Sólidos e Líquidos Orais: Comprimidos (240 Milhões), Cápsulas Duras (20 Milhões), Cápsulas Moles (10 Milhões), Xaropes Líquidos (5.0 Milhões), Xaropes Secos (5.0 Milhões), Gotas Oftálmicas/Otológicas (12 Milhões).",
            "Injetáveis Estéreis: Frascos Líquidos (25 Milhões), Ampolas (50 Milhões), Pó para Injeção (50 Milhões), Frascos Liofilizados (1.0 Milhão).",
          ],
        },
      ],
    },
    footer: {
      companyCol: "Empresa",
      resourcesCol: "Recursos",
      qualityCol: "Qualidade",
      companyLinks: [
        { label: "Visão Geral", href: "/#overview" },
        { label: "Serviços Farmacêuticos", href: "/services" },
        { label: "Assuntos Regulatórios (DRA)", href: "/services#regulatory" },
        { label: "Fabricação por Contrato (WHO-GMP)", href: "/services#contract" },
        { label: "Fabricação Terceirizada", href: "/services#third-party" },
        { label: "Exportação de Genéricos", href: "/services#generics" },
      ],
      resourceLinks: [
        { label: "Blog e Base de Conhecimento", href: "/blogs" },
        { label: "Perguntas Frequentes", href: "/blogs#faq" },
        { label: "Acreditações Globais", href: "/#certifications" },
        { label: "Rede Internacional", href: "/#network" },
        { label: "Consultas Diretas", href: "/#contact" },
      ],
      qualityLinks: [
        { label: "Instalações WHO-GMP", href: "/#certifications" },
        { label: "Certificação ISO 9001:2015", href: "/#certifications" },
        { label: "Dossiês CTD e eCTD", href: "/#certifications" },
        { label: "Estabilidade Zona IVb", href: "/#certifications" },
        { label: "Liberação para Exportação", href: "/#network" },
      ],
      newsletterTitle: "Inteligência de Exportação Global",
      newsletterDesc:
        "Inscreva-se para receber atualizações regulatórias, aprovações de eCTD e novos lançamentos.",
      newsletterPlaceholder: "Digite seu e-mail corporativo",
      newsletterBtn: "Inscrever-se",
      newsletterSuccess: "Obrigado por se inscrever nas novidades da Zelnex.",
      privacy: "Política de Privacidade",
      terms: "Termos de Fornecimento",
      whoGmp: "Status WHO-GMP",
      allRightsReserved: "Todos os direitos reservados.",
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // ── FRENCH (fr) ──────────────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════════════
  fr: {
    nav: {
      home: "Accueil",
      overview: "Présentation",
      whoWeAre: "Qui Sommes-Nous",
      services: "Services",
      products: "Produits",
      categories: "Catégories",
      certifications: "Certifications",
      blogs: "Blogs & FAQ",
      faq: "FAQ",
      contact: "Contact",
      getInTouch: "Nous Contacter",
    },
    hero: {
      badge: "Formulations Pharmaceutiques et Export Mondial",
      titleLine1: "Une Meilleure Santé",
      titleLine2: "pour un Monde Meilleur",
      subheading:
        "Nous nous engageons à améliorer des vies grâce à des médicaments génériques de haute qualité et des solutions de santé fiables dans plus de 50 pays.",
      exploreProducts: "Explorer Nos Produits",
      contactDesk: "Pôle Export",
      sidebar: {
        therapeutics: "Produits",
        enquiry: "Demande",
        social: "Réseaux",
        location: "Localisation",
      },
      stats: {
        stat1Number: "65+",
        stat1Top: "Pays",
        stat1Bottom: "dans le Monde",
        stat2Number: "350+",
        stat2Top: "Produits",
        stat2Bottom: "de Qualité",
        stat3Number: "150+",
        stat3Top: "Clients",
        stat3Bottom: "Internationaux",
        stat4Number: "100%",
        stat4Top: "Certifié",
        stat4Bottom: "OMS-GMP",
      },
    },
    overview: {
      badge: "Excellence Pharmaceutique Internationale",
      title: "Zelnex Pharmaceuticals Pvt. Ltd. – Présentation de l'Entreprise",
      lead: "Laboratoire pharmaceutique indien axé sur la fourniture de solutions de santé abordables, de haute qualité et conformes aux réglementations mondiales. Notre vision est de bâtir une marque premium tournée vers l'exportation et d'établir une présence solide sur les marchés internationaux.",
      stats: {
        stat1Number: "8+",
        stat1Top: "Années d'",
        stat1Bottom: "Expertise Mondiale",
        stat2Number: "800+",
        stat2Top: "Formulations",
        stat2Bottom: "Commerciales",
        stat3Number: "50+",
        stat3Top: "Pays d'",
        stat3Bottom: "Exportation",
        stat4Number: "100%",
        stat4Top: "OMS-GMP",
        stat4Bottom: "Conformité Totale",
      },
      p1Number: "01",
      p1Title: "Formulations Pharmaceutiques Diversifiées",
      p1Desc:
        "Spécialiste du sourcing, du marketing et de la distribution mondiale de comprimés, gélules, sirops et associations thérapeutiques.",
      p1Tags: [
        "Anti-infectieux",
        "Gestion de la Douleur",
        "Antidiabétiques",
        "Santé Gastro-intestinale",
        "Traitements Généraux",
      ],
      p2Number: "02",
      p2Title: "Qualité et Approvisionnement OMS-GMP",
      p2Desc:
        "Tous les produits sont issus d'usines certifiées OMS-GMP, garantissant le respect strict des normes de qualité et des exigences sanitaires internationales.",
      p2Adherence: "Conformité aux Normes Internationales",
      p2Certified: "100% Certifié",
      p3Number: "03",
      p3Title: "Modèle d'Exportation Évolutif",
      p3Desc:
        "Chaîne logistique flexible offrant des prix compétitifs et un dédouanement accéléré pour les marchés émergents et régulés.",
      p4Number: "04",
      p4Title: "Dossiers Réglementaires et Enregistrement",
      p4Desc:
        "Solide expertise en documentation technique, rédaction de dossiers CTD/eCTD et homologation auprès des ministères de la santé internationaux.",
      refWelcome: "Bienvenue chez",
      refCompany: "Zelnex Pharmaceuticals Pvt. Ltd.",
      refLead:
        "Zelnex Pharmaceuticals Pvt. Ltd. est implantée en Inde, guidée par la vision de fournir des médicaments de qualité internationale à des prix compétitifs grâce à la recherche et l'innovation constante.",
      refSummary:
        "Laboratoire exportateur reconnu produisant comprimés, gélules, sirops, anti-infectieux et spécialités pharmaceutiques sous certification OMS-GMP avec dossiers techniques complets.",
      refReadMore: "LIRE PLUS",
      panels: {
        p1Badge: "Affaires Réglementaires",
        p1Title: "Homologations de Marché Accélérées avec Dossiers CTD Complets",
        p1Desc:
          "L'enregistrement auprès des Ministères de la Santé étrangers requiert une documentation rigoureuse. Zelnex prépare des dossiers complets au format CTD et eCTD adaptés aux exigences des autorités réglementaires d'ASEAN, LATAM, GCC et d'Afrique.",
        p1Points: [
          "Données de stabilité en temps réel et accélérées en Zone Climatique IVb",
          "Résumés de bioéquivalence (BE) et Certificats de Produit Pharmaceutique (COPP)",
          "Certificats de Vente Libre (FSC) et dossiers de validation cGMP",
        ],
        p1Cta: "Demander la Liste de Disponibilité des Dossiers",
        p2Badge: "Fabrication pour Tiers",
        p2Title: "Fabrication pour Tiers & Formulation Sous Contrat",
        p2Desc:
          "Zelnex Pharmaceuticals propose des médicaments conformes aux normes OMS-GMP en sous-traitance pharmaceutique (Third Party Manufacturing) en Inde pour les clients internationaux. Notre capacité de production à grande échelle et notre personnel hautement qualifié répondent à l'ensemble de vos exigences de fabrication. Nous garantissons des standards de qualité élevés depuis l'approvisionnement en matières premières, l'optimisation des procédés, la formulation, le contrôle qualité et l'exportation.",
        p2Points: [
          "Approbation des formulations auprès du ministère de la santé",
          "Approvisionnement en matières premières et APIs certifiés",
          "Production des formulations sous strictes normes OMS-GMP",
          "Conditionnement export, libération des lots et logistique internationale",
        ],
        p2Cta: "Demander une Fabrication pour Tiers",
        p3Badge: "Chaîne Logistique",
        p3Title: "Transport Mondial Sécurisé et Barrière de Conditionnement Tropical",
        p3Desc:
          "L'exportation pharmaceutique requiert des emballages spécialisés pour le fret maritime tropical. Zelnex utilise des blisters formés à froid Alu-Alu, des flacons en PEHD scellés par induction et des cartons d'exportation triple cannelure pour garantir une stabilité de 36 mois en Zone IVb.",
        p3Points: [
          "Scellés d'inviolabilité primaire et sérialisation unitaire",
          "Dossiers complets d'expédition à l'exportation et Certificat de Conformité (CRF)",
          "Partenariats logistiques maritimes et aériens sur les principaux hubs mondiaux",
        ],
        p3Cta: "Consulter les Spécifications d'Emballage",
        p4Badge: "Formulaire",
        p4Title: "Plus de 800 Molécules Génériques Commerciales dans 10+ Catégories",
        p4Desc:
          "Notre catalogue d'exportation étendu couvre les domaines thérapeutiques essentiels : Anti-infectieux, Cardiologie, Système Nerveux Central (SNC), Gastro-entérologie, Pneumologie, Diabétologie, Dermatologie, Oncologie et Injectables d'Urgence.",
        p4Points: [
          "Dossiers commerciaux prêts pour l'enregistrement immédiat de visas d'importation",
          "Quantités Minimums de Commande (MOQ) adaptées à la pénétration du marché",
          "Certificat d'Analyse (CoA) direct fourni pour chaque lot libéré",
        ],
        p4Cta: "Parcourir le Portefeuille Produits",
      },
    },
    whoWeAre: {
      badge: "Qui Sommes-Nous",
      title: "Dédiés à la Santé et au Bien-Être Mondial",
      description:
        "Zelnex Pharmaceuticals Pvt. Ltd. est spécialisé dans le sourcing, le marketing et l'exportation de produits pharmaceutiques de qualité supérieure auprès de distributeurs et d'hôpitaux à travers le monde.",
      button: "Nous Contacter",
      cards: {
        card1Title: "Fabrication Avancée",
        card2Title: "50+ Pays",
        card2Subtitle:
          "Élargir l'accès aux médicaments essentiels sur les marchés internationaux.",
        card3Title: "300+ Produits de Qualité",
        card3Subtitle:
          "Une gamme thérapeutique complète pour les partenaires exigeant une fiabilité absolue.",
      },
    },
    products: {
      badge: "Nos Produits",
      title: "Catégories pharmaceutiques distribuées dans le monde entier",
      subtitle:
        "Une gamme complète de formulations de haute qualité destinées aux distributeurs et importateurs internationaux.",
      categories: {
        tablets: {
          title: "Comprimés et Formes Solides",
          badge: "Haute Capacité",
          desc: "Comprimés nus, pelliculés, à libération prolongée et à croquer fabriqués selon les normes pharmacopées les plus strictes.",
          bullets: [
            "Profils de Libération Immédiate et Modifiée",
            "Conditionnement sous Blister Alu-Alu et PVC/PVDC",
            "Flacons Vrac et Présentations Hospitalières pour Export",
            "Traçabilité Complète des Lots OMS-GMP",
          ],
          cta: "Voir les Formulations",
        },
        capsules: {
          title: "Gélules et Pellets",
          badge: "Libération Prolongée",
          desc: "Gélules en gélatine dure et végétariennes HPMC avec remplissage de précision en poudre, microgranules ou pellets.",
          bullets: [
            "Gélules Tailles 00 à 4 Gélatine et Végétales",
            "Pellets à Enrobage Entérique et Libération Retardée",
            "Emballage Tropicalisé avec Protection Anti-Humidité",
            "Conformité Absolue aux Tests de Dissolution In Vitro",
          ],
          cta: "Explorer les Gélules",
        },
        syrups: {
          title: "Liquides Oraux et Sirops",
          badge: "Grand Volume",
          desc: "Sirops aromatisés, suspensions pédiatriques et poudres pour sirops fabriqués dans des zones stériles automatisées.",
          bullets: [
            "Sirops Pédiatriques et Adultes avec Goût Masqué",
            "Conditionnement en Flacons Verre Ambré et PET",
            "Poudres Sèches pour Sirops avec Dosage Précis",
            "Contrôles Microbiologiques et de Viscosité Révélés",
          ],
          cta: "Voir la Gamme Liquide",
        },
        injectables: {
          title: "Injectables Stériles et Parentéraux",
          badge: "Soins Intensifs",
          desc: "Injectables stériles liquides et lyophilisés, ampoules et solutions parentérales petit et grand volume pour milieu hospitalier.",
          bullets: [
            "Remplissage Aseptique en Salles Blanches Classe ISO 5",
            "Flacons Lyophilisés pour Situations d'Urgence",
            "Stérilisation Terminale et Lots Exempts d'Endotoxines",
            "Vérification Rigoureuse de la Chaîne du Froid à l'Export",
          ],
          cta: "Demander les Injectables",
        },
      },
      careers: {
        badge: "Carrières et Partenariats Mondiaux",
        title: "Développez votre empreinte dans la santé avec Zelnex",
        desc: "Rejoignez un laboratoire d'exportation pharmaceutique dynamique engagé dans la qualité, la conformité et l'accès aux soins dans plus de 50 pays.",
        cta1: "Demande de Partenariat",
        cta2: "Rejoindre Notre Réseau",
      },
    },
    categories: {
      badge: "Formulaire Interactif · 800+ Formulations",
      title: "Des segments thérapeutiques de référence mondiale.",
      subtitle:
        "Parcourez nos gammes pharmaceutiques certifiées fabriquées dans des installations accréditées OMS-GMP avec dossiers d'enregistrement eCTD.",
      searchPlaceholder: "Rechercher par classe thérapeutique, principe actif ou code...",
      cards: [
        {
          category: "Large Spectre",
          title: "Antibiotiques et Anti-infectieux",
          count: "60+ Produits",
          tag: "Soins Intensifs",
        },
        {
          category: "Cardiologie",
          title: "Cardiologie et Soins Vasculaires",
          count: "45+ Produits",
          tag: "Vitaux",
        },
        {
          category: "Neurologie",
          title: "SNC et Neuropsychiatrie",
          count: "38+ Produits",
          tag: "Spécialité",
        },
        {
          category: "Ostéoarticulaire",
          title: "Orthopédie et Ostéomusculaire",
          count: "32+ Produits",
          tag: "Analgésiques",
        },
        {
          category: "Digestif",
          title: "Santé Gastro-intestinale et Antiémétiques",
          count: "50+ Produits",
          tag: "Grand Volume",
        },
        {
          category: "Pneumologie",
          title: "Respiratoire et Antiallergique",
          count: "28+ Produits",
          tag: "Action Rapide",
        },
        {
          category: "Soins Intensifs",
          title: "Oncologie et Cytotoxiques",
          count: "20+ Produits",
          tag: "Usage Hospitalier",
        },
        {
          category: "Endocrinologie",
          title: "Antidiabétiques et Métaboliques",
          count: "24+ Produits",
          tag: "Maladies Chroniques",
        },
        {
          category: "Dermatologie",
          title: "Dermatologie et Produits Topiques",
          count: "35+ Produits",
          tag: "Usage Cutané",
        },
        {
          category: "Bien-Être",
          title: "Nutraceutiques et Vitamines",
          count: "40+ Produits",
          tag: "Santé Quotidienne",
        },
      ],
    },
    certifications: {
      badge: "Accréditations Réglementaires",
      title: "L'Alliance de la Qualité Mondiale et de la Conformité",
      subtitle:
        "Approvisionnement strict auprès d'usines accréditées OMS-GMP avec dossiers CTD/eCTD validés dans plus de 50 ministères de la santé.",
      metrics: [
        { label: "Usine de Fabrication", value: "OMS-GMP et ISO 9001" },
        { label: "Stabilité d'Exportation", value: "Zone IVb (30°C / 75% HR)" },
        { label: "Disponibilité des Dossiers", value: "CTD / eCTD Modules 1–5" },
        { label: "Homologations Actives", value: "50+ Ministères de la Santé" },
      ],
      tabs: {
        all: "Toutes Régions",
        global: "Autorités Internationales",
        africa: "Ministères d'Afrique",
        asia: "Asie et Moyen-Orient",
      },
      viewDoc: "Voir les Détails de l'Accréditation",
      modalTitle: "Détails de l'Accréditation",
      modalScope: "Champ Réglementaire",
      modalModules: "Modules Validés",
      modalClose: "Fermer la Fenêtre",
    },
    packaging: {
      badge: "Conditionnement Haute Barrière",
      title: "Stabilité Garantie en Zone IVb",
      subtitle:
        "Blisters Alu-Alu et PVC/PVDC tropicalisés conçus pour préserver l'efficacité des principes actifs en climat chaud et humide.",
      f1Title: "Blister Formé à Froid Alu-Alu",
      f1Desc: "Barrière 100% imperméable à l'humidité et à l'oxygène pour les antibiotiques sensibles.",
      f2Title: "Revêtement Tropicalisé PVDC",
      f2Desc: "Excellente barrière thermique contre l'humidité pour prolonger la durée de conservation.",
      f3Title: "Sertissage Sécurisé des Flacons",
      f3Desc: "Bouchons flip-off stériles garantissant l'inviolabilité et l'étanchéité des liquides.",
      f4Title: "Enregistreurs de Chaîne du Froid",
      f4Desc: "Suivi thermique numérique en temps réel pour produits biologiques et parentéraux.",
    },
    network: {
      badge: "Rayonnement Mondial",
      title: "Présence dans Plus de 50 Pays",
      subtitle:
        "Notre réseau logistique relie hôpitaux, ministères et distributeurs sur 4 continents.",
      stat1Label: "50+ Pays",
      stat1Desc: "Marchés internationaux actifs",
      stat2Label: "4 Continents",
      stat2Desc: "Afrique, Asie, CEI et Amérique Latine",
      stat3Label: "50+ Ministères de la Santé",
      stat3Desc: "Dossiers et visas approuvés",
      stat4Label: "Logistique 24/7",
      stat4Desc: "Expéditions internationales suivies",
    },
    contact: {
      badge: "Demandes d'Exportation Directes",
      title: "Devenez partenaire de Zelnex pour un approvisionnement fiable",
      subtitle:
        "Faites-nous part des besoins de votre marché. Notre équipe réglementaire vous répondra sous 24h avec dossiers techniques et devis par lot.",
      nameLabel: "Votre Nom / Organisation",
      namePlaceholder: "ex. Dr. Michel Bernard / MediCorp Distribution",
      emailLabel: "Adresse E-mail Professionnelle",
      emailPlaceholder: "ex. achats@medicorp.com",
      destinationLabel: "Pays de Destination / Marché",
      destinationPlaceholder: "ex. Côte d'Ivoire, Sénégal, Cameroun, France...",
      messageLabel: "Formulations et Volumes Requis",
      messagePlaceholder: "Veuillez préciser les principes actifs, formes pharmaceutiques, exigences d'emballage et volumes estimés...",
      submitBtn: "Devenir Partenaire Zelnex",
      submittingBtn: "Envoi en cours...",
      successTitle: "Demande Envoyée avec Succès",
      successDesc:
        "Merci d'avoir contacté Zelnex Pharmaceuticals. Notre service export étudiera votre demande et vous répondra sous 24 heures.",
      closeBtn: "Fermer",
    },
    servicesPage: {
      badge: "SERVICES PHARMACEUTIQUES ZELNEX",
      heroTitle: "Précision Organique. Conformité Mondiale.",
      heroSubtitle:
        "Harmonisation d'une production de grande capacité conforme OMS-GMP avec une expertise réglementaire (DRA) et des dossiers eCTD complets.",
      exploreBtn: "Explorer les Capacités",
      metrics: {
        m1Label: "COMPRIMÉS / AN",
        m1Val: "240 Millions",
        m2Label: "INJECTABLES STÉRILES",
        m2Val: "126 Millions",
        m3Label: "DOSSIERS eCTD",
        m3Val: "150+ Prêts",
        m4Label: "CONFORMITÉ",
        m4Val: "OMS-GMP",
      },
      pillarsBadge: "[ 01 / PÔLES DE SERVICES STRATÉGIQUES ]",
      pillarsTitle: "Piliers d'Excellence",
      pillarsSubtitle:
        "Quatre divisions spécialisées conçues pour les ministères de la santé et les distributeurs internationaux.",
      pillarCards: [
        {
          category: "DRA ET DOSSIERS RÉGLEMENTAIRES",
          title: "Affaires Réglementaires Pharmaceutiques",
          tagline: "Homologations Accélérées et Publication eCTD",
          badge: "[eCTD Modules 1-5]",
          points: [
            "Préparation, Examen et Dépôt des DMF (format CTD)",
            "Rédaction Scientifique, Évaluation et Enregistrement",
            "Délivrance de COA, COPP et Légalisation Consulaire",
            "Maintien Post-Homologation et Gestion des Variations",
          ],
        },
        {
          category: "FABRICATION POUR TIERS OMS-GMP",
          title: "Fabrication pour Tiers",
          tagline: "Production et Exportation Internationale Clé en Main",
          badge: "[Certifié OMS-GMP]",
          points: [
            "Homologation de la formulation auprès du Ministère de la Santé",
            "Achat de principes actifs et excipients certifiés conformes",
            "Fabrication des formulations sous strictes normes OMS-GMP",
            "Conditionnement export, libération des lots et logistique internationale",
          ],
        },
        {
          category: "CAPACITÉ ÉVOLUTIVE ET LOTS",
          title: "Fabrication à Façon (Contract Manufacturing)",
          tagline: "Production Automatisée à Grande Échelle",
          badge: "[400M+ Unités Annuelles]",
          points: [
            "Usines à la pointe de la technologie conformes aux normes OMS-GMP",
            "Systèmes de production automatisés entièrement contrôlés par SCADA",
            "Formes stériles et générales (solutions parentérales SVP et LVP)",
            "Blocs de production isolés dédiés aux Bêta-lactamines et Céphalosporines",
          ],
        },
        {
          category: "FORMULATIONS FINIES INTERNATIONALES",
          title: "Médicaments Génériques",
          tagline: "Gamme Multithérapeutique Complète",
          badge: "[14+ Classes Thérapeutiques]",
          points: [
            "Antiviraux, Antipaludéens, Antifongiques et Oncologie",
            "Cardiovasculaire, Bêta-lactamines, AINS et Antidiabétiques",
            "Antiasthmatiques, Antiémétiques, Anesthésiques et Antiémétiques",
            "Partenariats commerciaux solides dans plus de 50 pays",
          ],
        },
      ],
      coreBadge: "[ 02 / ARCHITECTURE DE SERVICES ]",
      coreTitle: "Capacidades Principales",
      coreSubtitle:
        "Des Affaires Réglementaires (DRA) et Modules eCTD 1–5 aux lignes de compression de 240M de comprimés et injectables stériles lyophilisés.",
      requestDeck: "Demander la Présentation Technique",
      accordionServices: [
        {
          id: "dossiers",
          number: "01",
          title: "Affaires Réglementaires Pharmaceutiques (DRA)",
          tag: "[eCTD Prêt pour Homologation]",
          summary:
            "L'accès aux marchés internationaux requiert une maîtrise approfondie des exigences réglementaires. Nos consultants DRA accompagnent les laboratoires dans la gestion et l'obtention rapide de leurs visas d'enregistrement.",
          details: [
            "Service d'Enregistrement: Rédaction et Dépôt de DMF (format CTD) • Analyse Scientifique de Dossiers • Obtention de Visas • Certificats COA et COPP • Légalisation et Apostille.",
            "Modifications Post-Approbation: Renouvellement de sites et de dossiers de lots • Gestion du cycle de vie des produits • Compilation de rapports annuels.",
            "Service Pré-Enregistrement: Élaboration de la documentation technique des médicaments • Création de contenus réglementaires.",
          ],
        },
        {
          id: "contract-mfg",
          number: "02",
          title: "Fabrication à Façon (Contract Manufacturing)",
          tag: "[Automatisation OMS-GMP]",
          summary:
            "Zelnex Pharmaceuticals garantit une qualité OMS-GMP pour toutes ses formulations. Nous sommes un partenaire fiable disposant d'un savoir-faire reconnu dans la sous-traitance pharmaceutique.",
          details: [
            "Installations de pointe répondant rigoureusement aux normes OMS-GMP avec automatisation de production sous SCADA.",
            "Capacités de production stériles et générales, couvrant tous les segments dont les grands et petits volumes parentéraux (SVP et LVP).",
            "Unités de fabrication isolées pour Bêta-lactamines et Céphalosporines afin d'éliminer toute contamination croisée.",
            "Équipe technique hautement qualifiée en contrôle qualité (QC), assurance qualité (QA) et R&D galénique.",
          ],
        },
        {
          id: "third-party-mfg",
          number: "03",
          title: "Fabrication pour Compte de Tiers",
          tag: "[Filière d'Exportation Complète]",
          summary:
            "Nous proposons des médicaments conformes aux normes OMS grâce à la fabrication sous contrat en Inde pour nos clients internationaux, avec des exigences de qualité strictes de la matière première à l'export.",
          details: [
            "Étape 01: Approbation des formulations et vérification des marques auprès des autorités sanitaires.",
            "Étape 02: Approvisionnement en principes actifs et excipients certifiés USP/BP/EP.",
            "Étape 03: Fabrication effective des formulations et contrôles analytiques continus en cours de procédé (IPQC).",
            "Étape 04: Conditionnement tropicalisé (Zone IVb Alu-Alu) et expédition logistique internationale.",
          ],
        },
        {
          id: "generic-supply",
          number: "04",
          title: "Médicaments Génériques",
          tag: "[14+ Gammes Thérapeutiques]",
          summary:
            "Zelnex Pharmaceuticals est un laboratoire générique de référence en Inde, développant une forte présence sur les marchés émergents mondiaux.",
          details: [
            "Couverture thérapeutique: Antiviraux, Antipaludéens, Antifongiques, Oncologie, Cardiovasculaire, Bêta-lactamines, AINS, Antidiabétiques et Pédiatrie.",
            "Engagement de fourniture: Rendre accessibles des médicaments de qualité supérieure à un plus grand nombre de patients.",
          ],
        },
        {
          id: "capacities-matrix",
          number: "05",
          title: "Matrice des Capacités de Production",
          tag: "[Capacité Annuelle Validée]",
          summary:
            "Lignes de fabrication à haute vitesse validées pour la production continue à grande échelle destinée à l'exportation.",
          details: [
            "Solides et Liquides Oraux: Comprimés (240 Millions), Gélules Dures (20 Millions), Capsules Molles (10 Millions), Sirops Liquides (5.0 Millions), Poudres pour Sirops (5.0 Millions), Gouttes Ophtalmiques/Otiques (12 Millions).",
            "Injectables Stériles: Flacons Liquides (25 Millions), Ampoules (50 Millions), Poudres pour Injection (50 Millions), Flacons Lyophilisés (1.0 Million).",
          ],
        },
      ],
    },
    footer: {
      companyCol: "Entreprise",
      resourcesCol: "Ressources",
      qualityCol: "Qualité",
      companyLinks: [
        { label: "Présentation de l'Entreprise", href: "/#overview" },
        { label: "Tous les Services Pharmaceutiques", href: "/services" },
        { label: "Affaires Réglementaires (DRA)", href: "/services#regulatory" },
        { label: "Fabrication à Façon (OMS-GMP)", href: "/services#contract" },
        { label: "Fabrication pour Tiers", href: "/services#third-party" },
        { label: "Exportation de Génériques", href: "/services#generics" },
      ],
      resourceLinks: [
        { label: "Blog et Base de Connaissances", href: "/blogs" },
        { label: "Foire Aux Questions (FAQ)", href: "/blogs#faq" },
        { label: "Accréditations Internationales", href: "/#certifications" },
        { label: "Réseau Mondial", href: "/#network" },
        { label: "Demandes Directes", href: "/#contact" },
      ],
      qualityLinks: [
        { label: "Installations OMS-GMP", href: "/#certifications" },
        { label: "Certification ISO 9001:2015", href: "/#certifications" },
        { label: "Dossiers CTD et eCTD", href: "/#certifications" },
        { label: "Stabilité en Zone IVb", href: "/#certifications" },
        { label: "Autorisations d'Exportation", href: "/#network" },
      ],
      newsletterTitle: "Veille Réglementaire Internationale",
      newsletterDesc:
        "Abonnez-vous pour recevoir les actualités réglementaires, les approbations eCTD et les nouveaux lancements.",
      newsletterPlaceholder: "Entrez votre email professionnel",
      newsletterBtn: "S'inscrire",
      newsletterSuccess: "Merci de vous être abonné aux actualités de Zelnex.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Approvisionnement",
      whoGmp: "Statut OMS-GMP",
      allRightsReserved: "Tous droits réservés.",
    },
  },
};
