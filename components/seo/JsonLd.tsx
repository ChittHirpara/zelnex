import React from "react";

export function CorporationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Corporation", "MedicalBusiness"],
    "@id": "https://zelnexpharma.com/#corporation",
    name: "Zelnex Pharmaceuticals Pvt. Ltd.",
    alternateName: "Zelnex Pharma",
    url: "https://zelnexpharma.com",
    logo: "https://zelnexpharma.com/brand/zelnex-official-logo.png",
    image: "https://zelnexpharma.com/brand/zelnex-hd-logo.png",
    description:
      "Zelnex Pharmaceuticals Pvt. Ltd. is an export-oriented pharmaceutical powerhouse delivering WHO-GMP certified finished generic formulations, CTD/eCTD dossiers, and turnkey pharmaceutical supplies across 10+ countries worldwide.",
    telephone: "+919328286164",
    email: "info@zelnexpharmaceuticals.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "117 - Platinum Plaza, Near VT Circle, Sarthana Jakatnaka",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      postalCode: "395013",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.229425,
      longitude: 72.802879,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      "India",
      "Nigeria",
      "Kenya",
      "Ghana",
      "Tanzania",
      "Uganda",
      "Vietnam",
      "Philippines",
      "Cambodia",
      "Myanmar",
      "United Arab Emirates",
      "Saudi Arabia",
      "Latin America",
      "Central Asia",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Certification",
        name: "WHO-GMP Certified Facility",
        recognizedBy: {
          "@type": "Organization",
          name: "World Health Organization",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Quality Management Standard",
        name: "ISO 9001:2015 Certified",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Trade Recognition",
        name: "Govt. Recognised Star Export House",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "Ministry of Commerce and Industry, Government of India",
        },
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+919328286164",
        contactType: "Export Sales & Licensing Desk",
        email: "info@zelnexpharmaceuticals.com",
        areaServed: "Global",
        availableLanguage: ["English", "Hindi", "Gujarati"],
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/zelnex-pharmaceuticals",
      "https://x.com/zelnexpharma",
      "https://www.instagram.com/zelnexpharma/",
      "https://www.facebook.com/profile.php?id=61594171761679",
      "https://maps.app.goo.gl/uiLQiWR9muJXici28",
      "https://wa.me/919328286164",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://zelnexpharma.com/#website",
    url: "https://zelnexpharma.com",
    name: "Zelnex Pharmaceuticals",
    description: "Global Generic Formulations & CTD/eCTD Dossier Exporter",
    publisher: {
      "@id": "https://zelnexpharma.com/#corporation",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://zelnexpharma.com/categories?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : `https://zelnexpharma.com${it.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const DEFAULT_FAQS = [
  {
    question: "What CTD / eCTD dossier formats do you supply for MOH registrations?",
    answer:
      "We provide complete Common Technical Document (CTD) and electronic CTD (eCTD) dossiers conforming to Module 1 through Module 5 specifications. Our regulatory team prepares customized formats for ASEAN, ACTD, GCC, African (NAFDAC, PPB, TMDA, NDA), and LATAM MOH requirements, complete with Certificates of Pharmaceutical Product (COPP) and Free Sale Certificates (FSC).",
  },
  {
    question: "Are your formulations validated for Zone IVb climatic conditions (hot & humid)?",
    answer:
      "Yes. All generic oral solid dosages, injectables, and syrups undergo rigorous real-time (30°C / 75% RH) and accelerated (40°C / 75% RH) stability testing for Zone IVb tropical climates. We supply complete 24 to 36-month stability study data charts, degradation analysis, and container-closure integrity certificates.",
  },
  {
    question: "What accreditations do your pharmaceutical manufacturing facilities hold?",
    answer:
      "Our manufacturing infrastructure operates strictly under WHO-GMP certification, ISO 9001:2015 quality management benchmarks, and FDCA state licensure. Facilities incorporate Grade A/B laminar air-flow cleanrooms, validated HVAC positive-pressure cascades, and automated SCADA-controlled production lines.",
  },
  {
    question: "What are your commercial dispatch lead times and Minimum Order Quantities (MOQs)?",
    answer:
      "For in-stock catalog formulations with existing commercial dossiers, dispatch takes 2 to 3 weeks following import permit clearance. For fresh commercial manufacturing runs and private label orders, the lead time is typically 45 to 60 days including full analytical batch testing and export documentation legalization.",
  },
  {
    question: "Do you offer private labeling and third-party contract manufacturing?",
    answer:
      "Yes. We offer comprehensive OEM / ODM contract manufacturing for international brand owners, hospital groups, and sovereign tender contractors. Services cover formulation optimization, custom primary/secondary packaging (Alu-Alu, blister, bottles, sachets), brand artwork compliance in English, French, Arabic, and Spanish, and turnkey export logistics.",
  },
];

export function FAQJsonLd({
  items,
}: {
  items?: { question: string; answer: string }[];
} = {}) {
  const faqList = items && items.length > 0 ? items : DEFAULT_FAQS;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  datePublished,
  authorName,
  url,
  image,
}: {
  title: string;
  description: string;
  datePublished: string;
  authorName: string;
  url: string;
  image?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description: description,
    image: image ? (image.startsWith("http") ? image : `https://zelnexpharma.com${image}`) : "https://zelnexpharma.com/brand/zelnex-hd-logo.png",
    datePublished: datePublished,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Zelnex Pharmaceuticals Pvt. Ltd.",
      url: "https://zelnexpharma.com",
      logo: {
        "@type": "ImageObject",
        url: "https://zelnexpharma.com/brand/zelnex-official-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `https://zelnexpharma.com${url}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
