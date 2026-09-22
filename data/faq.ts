export interface FAQItem {
  id: string;
  category: "products" | "dossier" | "quality" | "export";
  question: string;
  answer: string;
  badge: string;
  tags: string[];
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "products",
    question: "What pharmaceutical dosage forms do you supply?",
    answer:
      "We support a broad range of finished pharmaceutical dosage forms, including tablets, capsules, oral liquids, powders and sachets, and selected specialized formulations, subject to product and market requirements.",
    badge: "Dosage Forms",
    tags: ["Tablets", "Capsules", "Oral Liquids", "Powders"],
  },
  {
    id: "faq-2",
    category: "dossier",
    question: "Do you provide CTD and eCTD documentation?",
    answer:
      "We provide CTD and eCTD documentation and regulatory dossier support based on the specific product and target market. Our regulatory services cover dossier preparation, documentation, registration support, and coordination of market-specific regulatory requirements.",
    badge: "CTD & eCTD",
    tags: ["CTD", "eCTD", "Regulatory Dossier", "MOH Registration", "Documentation"],
  },
  {
    id: "faq-3",
    category: "products",
    question: "Do you support private-label pharmaceutical products?",
    answer:
      "Yes. We support private-label and customized pharmaceutical supply, including product selection, packaging requirements, artwork coordination, and export documentation.",
    badge: "Private Label",
    tags: ["Private Label", "Custom Branding", "Artwork", "Packaging", "Export"],
  },
  {
    id: "faq-4",
    category: "quality",
    question: "What manufacturing standards do your products follow?",
    answer:
      "Products are sourced from qualified manufacturing partners according to applicable quality and regulatory requirements. Relevant manufacturing certifications and documentation can be provided based on the product and facility.",
    badge: "Manufacturing Standards",
    tags: ["GMP", "Quality Standards", "Certifications", "Audits", "Compliance"],
  },
  {
    id: "faq-5",
    category: "export",
    question: "Can you supply products for international markets?",
    answer:
      "Yes. We work with overseas buyers and coordinate pharmaceutical product supply according to the destination market, product requirements, documentation, packaging, and commercial specifications.",
    badge: "International Supply",
    tags: ["Global Export", "Overseas Buyers", "Target Markets", "Commercial Supply"],
  },
  {
    id: "faq-6",
    category: "export",
    question: "What information do you need for a product inquiry?",
    answer:
      "Please share the product name or composition, dosage form, target market, required quantity, packaging preference, and any specific regulatory or documentation requirements.",
    badge: "Inquiry Details",
    tags: ["Product Inquiry", "Composition", "Dosage Form", "Quantity", "Packaging"],
  },
  {
    id: "faq-7",
    category: "products",
    question: "Do you support custom packaging?",
    answer:
      "Yes. Packaging formats and private-label requirements can be coordinated based on the product, market requirements, and manufacturing capabilities.",
    badge: "Custom Packaging",
    tags: ["Packaging Formats", "Blister Packs", "Bottles", "Boxes", "Customization"],
  },
  {
    id: "faq-8",
    category: "export",
    question: "What are your minimum order quantities?",
    answer:
      "MOQ depends on the product, dosage form, packaging configuration, manufacturing facility, and order requirements. Our export team can provide product-specific MOQ and pricing information.",
    badge: "MOQ & Orders",
    tags: ["MOQ", "Minimum Order Quantity", "Batch Sizes", "Pricing"],
  },
  {
    id: "faq-9",
    category: "quality",
    question: "Can you provide product samples?",
    answer:
      "Sample availability depends on the product and manufacturing partner. Sample requirements can be discussed during the product inquiry process.",
    badge: "Product Samples",
    tags: ["Samples", "Evaluation", "Product Testing", "Verification"],
  },
  {
    id: "faq-10",
    category: "export",
    question: "How do I start a pharmaceutical supply inquiry?",
    answer:
      "Send us your product list or requirements along with your target market and estimated quantity. Our export team will review the requirement and coordinate the next steps.",
    badge: "Start Inquiry",
    tags: ["Contact Desk", "Product List", "Export Requirement", "Quotation"],
  },
];
