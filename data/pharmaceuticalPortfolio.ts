export interface ProductEntry {
  id: string;
  moleculeGroup: string;
  composition: string;
  dosage: string;
  dosageForm: "Tablet" | "Capsule" | "Effervescent Tablet" | "Syrup / Suspension" | "Dry Powder / Dry Syrup" | "Topical / Tube Preparation";
  dosageFormId: "tablet" | "capsule" | "effervescent" | "suspension" | "dry-powder" | "topical";
  broadCategory: string;
}

export interface CategoryData {
  id: string;
  name: string;
  slug: string;
  totalEntries: number;
  badgeCode: string;
  description: string;
  keyMolecules: string[];
  dosageForms: string[];
  products: ProductEntry[];
  iconType: string;
  gradientTheme: string;
  accentColor: string;
}

export const PHARMACEUTICAL_PORTFOLIO: CategoryData[] = [
  {
    "id": "anti-infectives",
    "name": "Anti-Infectives",
    "slug": "anti-infectives",
    "totalEntries": 85,
    "badgeCode": "01",
    "description": "Broad-spectrum antibacterials, cephalosporins, penicillins, antifungals, antimalarials, and anthelmintics.",
    "keyMolecules": [
      "Amoxicillin",
      "Cefixime",
      "Azithromycin",
      "Artemether + Lumefantrine",
      "Fluconazole",
      "Ciprofloxacin"
    ],
    "dosageForms": [
      "Tablet",
      "Capsule",
      "Syrup / Suspension",
      "Dry Powder / Dry Syrup",
      "Topical / Tube Preparation"
    ],
    "products": [
      {
        "id": "znx-1",
        "moleculeGroup": "Acyclovir",
        "composition": "Acyclovir Tablets",
        "dosage": "200mg/ 400mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-2",
        "moleculeGroup": "Albendazole + Ivermectin",
        "composition": "Albendazole + Ivermectin Tablets",
        "dosage": "400mg + 6mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-3",
        "moleculeGroup": "Albendazole",
        "composition": "Albendazole Tablets",
        "dosage": "200mg/ 400mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-4",
        "moleculeGroup": "Amodiaquine",
        "composition": "Amodiaquine Tablets",
        "dosage": "100mg/ 200mg/ 300mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-5",
        "moleculeGroup": "Amoxicillin",
        "composition": "Amoxicillin Tablets",
        "dosage": "250mg/ 500mg/ 1000mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-6",
        "moleculeGroup": "Artemether + Lumefantrine",
        "composition": "Artemether + Lumefantrine Tablets",
        "dosage": "20mg + 120mg/ 40mg + 240mg/ 80mg + 480mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-7",
        "moleculeGroup": "Artesunate + Amodiaquine",
        "composition": "Artesunate + Amodiaquine Tablets",
        "dosage": "25mg + 67.5mg/ 50mg + 135mg/ 150mg + 202.5mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-8",
        "moleculeGroup": "Artesunate",
        "composition": "Artesunate Tablets",
        "dosage": "50mg/ 100mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-9",
        "moleculeGroup": "Azithromycin",
        "composition": "Azithromycin Tablets",
        "dosage": "250mg/ 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-10",
        "moleculeGroup": "Cefixime dispersible",
        "composition": "Cefixime dispersible Tablets",
        "dosage": "100mg/ 200mg/ 400mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-11",
        "moleculeGroup": "Cefixime",
        "composition": "Cefixime Tablets",
        "dosage": "100mg/ 200mg/ 400mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-12",
        "moleculeGroup": "Cefuroxime Axetil",
        "composition": "Cefuroxime Axetil Tablets",
        "dosage": "250mg/ 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-13",
        "moleculeGroup": "Ciprofloxacin + Tinidazole",
        "composition": "Ciprofloxacin + Tinidazole Tablets",
        "dosage": "500mg + 600mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-14",
        "moleculeGroup": "Ciprofloxacin",
        "composition": "Ciprofloxacin Tablets",
        "dosage": "250mg/ 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-15",
        "moleculeGroup": "Clarithromycin",
        "composition": "Clarithromycin Tablets",
        "dosage": "250mg/ 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-16",
        "moleculeGroup": "Clotrimazole",
        "composition": "Clotrimazole Tablets",
        "dosage": "100mg/ 200mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-17",
        "moleculeGroup": "Erythromycin",
        "composition": "Erythromycin Tablets",
        "dosage": "250mg/ 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-18",
        "moleculeGroup": "Flavoxate + Ofloxacin",
        "composition": "Flavoxate + Ofloxacin Tablets",
        "dosage": "200mg + 200mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-19",
        "moleculeGroup": "Fluconazole + Azithromycin + Secnidazole",
        "composition": "Fluconazole + Azithromycin + Secnidazole Tablets",
        "dosage": "Combi Kit (1+1+2)",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-20",
        "moleculeGroup": "Fluconazole",
        "composition": "Fluconazole Tablets",
        "dosage": "50mg/ 150mg/ 200mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-21",
        "moleculeGroup": "Griseofulvin",
        "composition": "Griseofulvin Tablets",
        "dosage": "250mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-22",
        "moleculeGroup": "Ivermectin",
        "composition": "Ivermectin Tablets",
        "dosage": "6mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-23",
        "moleculeGroup": "Ketoconazole",
        "composition": "Ketoconazole Tablets",
        "dosage": "200mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-24",
        "moleculeGroup": "Levofloxacin",
        "composition": "Levofloxacin Tablets",
        "dosage": "250mg/ 500mg/ 750 mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-25",
        "moleculeGroup": "Mebendazole",
        "composition": "Mebendazole Tablets",
        "dosage": "100mg/ 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-26",
        "moleculeGroup": "Metronidazole",
        "composition": "Metronidazole Tablets",
        "dosage": "200mg/ 250mg/ 400mg/ 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-27",
        "moleculeGroup": "Moxifloxacin",
        "composition": "Moxifloxacin Tablets",
        "dosage": "200mg/ 400mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-28",
        "moleculeGroup": "Nitrofurantoin",
        "composition": "Nitrofurantoin Tablets",
        "dosage": "50mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-29",
        "moleculeGroup": "Norfloxacin + Lactic acid bacillus",
        "composition": "Norfloxacin + Lactic acid bacillus Tablets",
        "dosage": "200mg + 60Million Spores",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-30",
        "moleculeGroup": "Norfloxacin + Tinidazole",
        "composition": "Norfloxacin + Tinidazole Tablets",
        "dosage": "200mg + 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-31",
        "moleculeGroup": "Norfloxacin",
        "composition": "Norfloxacin Tablets",
        "dosage": "200mg + 400mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-32",
        "moleculeGroup": "Ofloxacin + Ornidazole",
        "composition": "Ofloxacin + Ornidazole Tablets",
        "dosage": "200mg + 200mg/ 200mg + 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-33",
        "moleculeGroup": "Ofloxacin + Tinidazole",
        "composition": "Ofloxacin + Tinidazole Tablets",
        "dosage": "200mg + 600mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-34",
        "moleculeGroup": "Ofloxacin",
        "composition": "Ofloxacin Tablets",
        "dosage": "200mg/ 400mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-35",
        "moleculeGroup": "Ornidazole",
        "composition": "Ornidazole Tablets",
        "dosage": "500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-36",
        "moleculeGroup": "Povidone iodine + Metronidazole",
        "composition": "Povidone iodine + Metronidazole Tablets",
        "dosage": "",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-37",
        "moleculeGroup": "Quinine Sulphate",
        "composition": "Quinine Sulphate Tablets",
        "dosage": "100mg/ 200mg/ 300mg/ 600mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-38",
        "moleculeGroup": "Rifaximin",
        "composition": "Rifaximin Tablets",
        "dosage": "200mg/ 400mg/ 550mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-39",
        "moleculeGroup": "Roxithromycin",
        "composition": "Roxithromycin Tablets",
        "dosage": "20mg/ 30mg/ 150mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-40",
        "moleculeGroup": "Secnidazole",
        "composition": "Secnidazole Tablets",
        "dosage": "100mg/ 500mg/ 1000mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-41",
        "moleculeGroup": "Spiramycin",
        "composition": "Spiramycin Tablets",
        "dosage": "3M.I.U/ 1,500,000UI",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-42",
        "moleculeGroup": "Sulfamethoxazole + Trimethoprim",
        "composition": "Sulfamethoxazole + Trimethoprim Tablets",
        "dosage": "100mg + 20mg/ 400mg + 80mg/ 800mg + 160mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-43",
        "moleculeGroup": "Terbinafine",
        "composition": "Terbinafine Tablets",
        "dosage": "250mg/ 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-44",
        "moleculeGroup": "Tinidazole",
        "composition": "Tinidazole Tablets",
        "dosage": "250mg/ 300mg/ 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-45",
        "moleculeGroup": "Amoxicillin",
        "composition": "Amoxicillin Capsules",
        "dosage": "250mg/ 500mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-46",
        "moleculeGroup": "Ampicillin + Cloxacillin",
        "composition": "Ampicillin + Cloxacillin Capsules",
        "dosage": "250mg + 250mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-47",
        "moleculeGroup": "Ampicillin",
        "composition": "Ampicillin Capsules",
        "dosage": "250mg/ 500mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-48",
        "moleculeGroup": "Chloramphenicol",
        "composition": "Chloramphenicol Capsules",
        "dosage": "250 mg/ 500mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-49",
        "moleculeGroup": "Cloxacillin",
        "composition": "Cloxacillin Capsules",
        "dosage": "250mg/ 500mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-50",
        "moleculeGroup": "Flucloxacillin",
        "composition": "Flucloxacillin Capsules",
        "dosage": "250mg/ 500mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-51",
        "moleculeGroup": "Fluconazole",
        "composition": "Fluconazole Capsules",
        "dosage": "50mg/ 100mg/ 150mg/ 200mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-52",
        "moleculeGroup": "Itraconazole",
        "composition": "Itraconazole Capsules",
        "dosage": "100mg/ 200mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-53",
        "moleculeGroup": "Albendazole",
        "composition": "Albendazole Suspension",
        "dosage": "200mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-54",
        "moleculeGroup": "Chloramphenicol",
        "composition": "Chloramphenicol Suspension",
        "dosage": "125mg per 5ml",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-55",
        "moleculeGroup": "Ciprofloxacin",
        "composition": "Ciprofloxacin Suspension",
        "dosage": "125mg per 5ml/ 250mg per 5ml",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-56",
        "moleculeGroup": "Griseofulvin",
        "composition": "Griseofulvin Suspension",
        "dosage": "125mg per 5 ml",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-57",
        "moleculeGroup": "Mebendazole",
        "composition": "Mebendazole Suspension",
        "dosage": "100mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-58",
        "moleculeGroup": "Metronidazole + Furazolidone",
        "composition": "Metronidazole + Furazolidone Suspension",
        "dosage": "200mg + 100mg per 5 ml",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-59",
        "moleculeGroup": "Ofloxacin + Metronidazole",
        "composition": "Ofloxacin + Metronidazole Suspension",
        "dosage": "50mg + 125mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-60",
        "moleculeGroup": "Ofloxacin + Ornidazole",
        "composition": "Ofloxacin + Ornidazole Suspension",
        "dosage": "50mg + 125mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-61",
        "moleculeGroup": "Ofloxacin",
        "composition": "Ofloxacin Suspension",
        "dosage": "50mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-62",
        "moleculeGroup": "Secnidazole",
        "composition": "Secnidazole Suspension",
        "dosage": "125mg per 5ml",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-63",
        "moleculeGroup": "Sulfamethoxazole + Trimethoprim",
        "composition": "Sulfamethoxazole + Trimethoprim Suspension",
        "dosage": "200mg + 40mg per 5ml",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-64",
        "moleculeGroup": "Amoxicillin",
        "composition": "Amoxicillin for Suspension",
        "dosage": "125mg per 5ml/ 250mg per 5 ml",
        "dosageForm": "Dry Powder / Dry Syrup",
        "dosageFormId": "dry-powder",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-65",
        "moleculeGroup": "Artemether + Lumefantarine",
        "composition": "Artemether + Lumefantarine for Oral Suspension",
        "dosage": "20mg + 120mg/ 15mg + 90mg",
        "dosageForm": "Dry Powder / Dry Syrup",
        "dosageFormId": "dry-powder",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-66",
        "moleculeGroup": "Azithromycin",
        "composition": "Azithromycin for Oral Suspension",
        "dosage": "100mg per 5ml/ 200mg per 5ml",
        "dosageForm": "Dry Powder / Dry Syrup",
        "dosageFormId": "dry-powder",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-67",
        "moleculeGroup": "Cefixime",
        "composition": "Cefixime for Suspension",
        "dosage": "100mg per 5ml/ 200mg per 5ml",
        "dosageForm": "Dry Powder / Dry Syrup",
        "dosageFormId": "dry-powder",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-68",
        "moleculeGroup": "Cefuroxime",
        "composition": "Cefuroxime for Suspension",
        "dosage": "125mg per 5ml/ 250mg per 5ml",
        "dosageForm": "Dry Powder / Dry Syrup",
        "dosageFormId": "dry-powder",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-69",
        "moleculeGroup": "Clarithromycin",
        "composition": "Clarithromycin for Oral Suspension",
        "dosage": "250mg per 5ml",
        "dosageForm": "Dry Powder / Dry Syrup",
        "dosageFormId": "dry-powder",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-70",
        "moleculeGroup": "Cloxacillin",
        "composition": "Cloxacillin for Oral Suspension",
        "dosage": "125mg per 5ml/ 250mg per 5 ml",
        "dosageForm": "Dry Powder / Dry Syrup",
        "dosageFormId": "dry-powder",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-71",
        "moleculeGroup": "Erythromycin",
        "composition": "Erythromycin for Oral Suspension",
        "dosage": "125mg per 5ml",
        "dosageForm": "Dry Powder / Dry Syrup",
        "dosageFormId": "dry-powder",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-72",
        "moleculeGroup": "Flucloxacillin",
        "composition": "Flucloxacillin for Oral Suspension",
        "dosage": "125mg per 5ml/ 250mg per 5ml",
        "dosageForm": "Dry Powder / Dry Syrup",
        "dosageFormId": "dry-powder",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-73",
        "moleculeGroup": "Fluconazole",
        "composition": "Fluconazole for Oral Suspension",
        "dosage": "50mg per 5ml/ 100mg per 5ml/ 200mg per 5ml",
        "dosageForm": "Dry Powder / Dry Syrup",
        "dosageFormId": "dry-powder",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-74",
        "moleculeGroup": "Metronidazole",
        "composition": "Metronidazole for Oral suspension",
        "dosage": "100mg per 5ml",
        "dosageForm": "Dry Powder / Dry Syrup",
        "dosageFormId": "dry-powder",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-75",
        "moleculeGroup": "Sulfamethoxazole + Trimethoprim",
        "composition": "Sulfamethoxazole + Trimethoprim for Oral Suspension",
        "dosage": "200mg + 40mg per 5ml",
        "dosageForm": "Dry Powder / Dry Syrup",
        "dosageFormId": "dry-powder",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-76",
        "moleculeGroup": "Beclomethasone Dipropionate + Clotrimazole + Neomycin Sulphate",
        "composition": "Beclomethasone Dipropionate + Clotrimazole + Neomycin Sulphate Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-77",
        "moleculeGroup": "Betamethasone + Clotrimazole + Gentamicin",
        "composition": "Betamethasone + Clotrimazole + Gentamicin Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-78",
        "moleculeGroup": "Clindamycin + Nicotinamide",
        "composition": "Clindamycin + Nicotinamide Gel",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-79",
        "moleculeGroup": "Clobetasol Propionate + Gentamicin Sulphate + Miconazole Nitrate + Clotrimazole",
        "composition": "Clobetasol Propionate + Gentamicin Sulphate + Miconazole Nitrate + Clotrimazole Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-80",
        "moleculeGroup": "Clotrimazole + Beclomethasone Dipropionate",
        "composition": "Clotrimazole + Beclomethasone Dipropionate Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-81",
        "moleculeGroup": "Clotrimazole",
        "composition": "Clotrimazole Lotion",
        "dosage": "15ml/30ml",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-82",
        "moleculeGroup": "Ketoconazole",
        "composition": "Ketoconazole Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-83",
        "moleculeGroup": "Ketoconazole",
        "composition": "Ketoconazole Lotion",
        "dosage": "15ml/30ml",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-84",
        "moleculeGroup": "Povidone-Iodine + Ornidazole",
        "composition": "Povidone-Iodine + Ornidazole Ointment",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Anti-Infectives"
      },
      {
        "id": "znx-85",
        "moleculeGroup": "Terbinafine Hydrochloride",
        "composition": "Terbinafine Hydrochloride Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Anti-Infectives"
      }
    ],
    "iconType": "ShieldCheck",
    "gradientTheme": "from-blue-600 to-indigo-700",
    "accentColor": "#006EDC"
  },
  {
    "id": "cardiovascular",
    "name": "Cardiovascular",
    "slug": "cardiovascular",
    "totalEntries": 28,
    "badgeCode": "02",
    "description": "Anti-hypertensives, statins, beta-blockers, anti-anginals, and cardioprotective formulations.",
    "keyMolecules": [
      "Amlodipine",
      "Atorvastatin",
      "Telmisartan",
      "Losartan",
      "Rosuvastatin",
      "Clopidogrel"
    ],
    "dosageForms": [
      "Tablet"
    ],
    "products": [
      {
        "id": "znx-86",
        "moleculeGroup": "Amlodipine + Atenolol",
        "composition": "Amlodipine + Atenolol Tablets",
        "dosage": "5mg + 50mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-87",
        "moleculeGroup": "Amlodipine besylate + Aspirin + Atenolol",
        "composition": "Amlodipine besylate + Aspirin + Atenolol Tablets",
        "dosage": "5mg + 100mg + 50mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-88",
        "moleculeGroup": "Amlodipine",
        "composition": "Amlodipine Tablets",
        "dosage": "2.5mg/ 5mg/ 10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-89",
        "moleculeGroup": "Aspirin",
        "composition": "Aspirin Tablets",
        "dosage": "150mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-90",
        "moleculeGroup": "Atenolol",
        "composition": "Atenolol Tablets",
        "dosage": "50mg/ 100mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-91",
        "moleculeGroup": "Atorvastatin + Ezetimib",
        "composition": "Atorvastatin + Ezetimib Tablets",
        "dosage": "20mg + 10mg/ 40mg + 10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-92",
        "moleculeGroup": "Atorvastatin",
        "composition": "Atorvastatin Tablets",
        "dosage": "10mg/ 20mg/ 40mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-93",
        "moleculeGroup": "Bisoprolol Fumarate",
        "composition": "Bisoprolol Fumarate Tablets",
        "dosage": "2.5mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-94",
        "moleculeGroup": "Candisartan + Hydrochlorothiazide",
        "composition": "Candisartan + Hydrochlorothiazide Tablets",
        "dosage": "16mg + 12.5mg/ 32mg + 12.5mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-95",
        "moleculeGroup": "Carvedilol",
        "composition": "Carvedilol Tablets",
        "dosage": "2.5mg/ 5mg/ 6.25mg/ 10mg/ 12.5mg/ 25mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-96",
        "moleculeGroup": "Clopidogrel + Aspirin",
        "composition": "Clopidogrel + Aspirin Tablets",
        "dosage": "75mg + 150mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-97",
        "moleculeGroup": "Clopidogrel",
        "composition": "Clopidogrel Tablets",
        "dosage": "75mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-98",
        "moleculeGroup": "Digoxine",
        "composition": "Digoxine Tablets",
        "dosage": "0.25mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-99",
        "moleculeGroup": "Enalapril Maleate",
        "composition": "Enalapril Maleate Tablets",
        "dosage": "5mg/ 10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-100",
        "moleculeGroup": "Hydrochlorothiazide",
        "composition": "Hydrochlorothiazide Tablets",
        "dosage": "12.5mg/ 25mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-101",
        "moleculeGroup": "Losartan Potassium + Hydrochlorothiazide",
        "composition": "Losartan Potassium + Hydrochlorothiazide Tablets",
        "dosage": "50mg + 12.5mg/ 100mg + 25mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-102",
        "moleculeGroup": "Losartan Potassium",
        "composition": "Losartan Potassium Tablets",
        "dosage": "25mg/ 50mg/ 100mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-103",
        "moleculeGroup": "Nebivolol",
        "composition": "Nebivolol Tablets",
        "dosage": "2.5mg/ 5mg/ 10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-104",
        "moleculeGroup": "Nifedipine",
        "composition": "Nifedipine Tablets",
        "dosage": "10mg/ 20mg/ 30mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-105",
        "moleculeGroup": "Ranolazine",
        "composition": "Ranolazine Tablets",
        "dosage": "500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-106",
        "moleculeGroup": "Rivaroxaban",
        "composition": "Rivaroxaban Tablets",
        "dosage": "10mg/ 15mg/ 20mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-107",
        "moleculeGroup": "Rosuvastatin",
        "composition": "Rosuvastatin Tablets",
        "dosage": "5mg/ 10mg/ 20mg/ 25mg/ 40mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-108",
        "moleculeGroup": "S (+) Amlodipine",
        "composition": "S (+) Amlodipine Tablets",
        "dosage": "2.5mg/ 5mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-109",
        "moleculeGroup": "Simvastatin",
        "composition": "Simvastatin Tablets",
        "dosage": "10mg/ 20mg/ 40mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-110",
        "moleculeGroup": "Telmisartan + Amlodipine",
        "composition": "Telmisartan + Amlodipine Tablets",
        "dosage": "40mg + 5mg/ 80mg + 10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-111",
        "moleculeGroup": "Telmisartan + Hydrochlorothiazide",
        "composition": "Telmisartan + Hydrochlorothiazide Tablets",
        "dosage": "40mg + 12.5mg/ 80mg + 12.5mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-112",
        "moleculeGroup": "Telmisartan",
        "composition": "Telmisartan Tablets",
        "dosage": "20mg/ 40mg/ 80mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      },
      {
        "id": "znx-113",
        "moleculeGroup": "Verapamil",
        "composition": "Verapamil Tablets",
        "dosage": "40mg/ 80mg/ 120mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Cardiovascular"
      }
    ],
    "iconType": "HeartPulse",
    "gradientTheme": "from-red-600 to-rose-700",
    "accentColor": "#DC2626"
  },
  {
    "id": "dermatology-topical",
    "name": "Dermatology & Topical",
    "slug": "dermatology-topical",
    "totalEntries": 41,
    "badgeCode": "03",
    "description": "Topical therapeutic creams, ointments, lotions, anti-fungals, corticosteroids, and barrier gels.",
    "keyMolecules": [
      "Clobetasol Propionate",
      "Luliconazole",
      "Miconazole",
      "Fusidic Acid",
      "Betamethasone",
      "Permethrin"
    ],
    "dosageForms": [
      "Tablet",
      "Topical / Tube Preparation"
    ],
    "products": [
      {
        "id": "znx-114",
        "moleculeGroup": "Betamethasone",
        "composition": "Betamethasone Tablets",
        "dosage": "0.25mg/ 1.0mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-115",
        "moleculeGroup": "Amorolfine",
        "composition": "Amorolfine Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-116",
        "moleculeGroup": "Beclomethasone Dipropionate",
        "composition": "Beclomethasone Dipropionate Lotion",
        "dosage": "15ml/30ml",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-117",
        "moleculeGroup": "Benzoyl Peroxide",
        "composition": "Benzoyl Peroxide Gel",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-118",
        "moleculeGroup": "Calamine",
        "composition": "Calamine Lotion",
        "dosage": "15ml/30ml",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-119",
        "moleculeGroup": "Choline Salicylate + Lignocaine Hcl + Benzalkonium Chloride",
        "composition": "Choline Salicylate + Lignocaine Hcl + Benzalkonium Chloride Gel",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-120",
        "moleculeGroup": "Clobetasol Propionate + Gentamicin Sulphate",
        "composition": "Clobetasol Propionate + Gentamicin Sulphate Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-121",
        "moleculeGroup": "Clobetasol Propionate + Miconazole Nitrate + Neomycin Sulphate",
        "composition": "Clobetasol Propionate + Miconazole Nitrate + Neomycin Sulphate Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-122",
        "moleculeGroup": "Clobetasol Propionate + Salicylic Acid",
        "composition": "Clobetasol Propionate + Salicylic Acid Ointment",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-123",
        "moleculeGroup": "Clobetasol Propionate",
        "composition": "Clobetasol Propionate Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-124",
        "moleculeGroup": "Clobetasole Propionate + Salicylic Acid",
        "composition": "Clobetasole Propionate + Salicylic Acid Lotion",
        "dosage": "15ml/30ml",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-125",
        "moleculeGroup": "Clobetasole Propionate",
        "composition": "Clobetasole Propionate Lotion",
        "dosage": "15ml/30ml",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-126",
        "moleculeGroup": "Eberconazole",
        "composition": "Eberconazole Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-127",
        "moleculeGroup": "Fluocinolone Acetonide + Neomycin Sulphate + Miconazole Nitrate",
        "composition": "Fluocinolone Acetonide + Neomycin Sulphate + Miconazole Nitrate Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-128",
        "moleculeGroup": "Fusidic Acid + Beclomethasone Dipropionate",
        "composition": "Fusidic Acid + Beclomethasone Dipropionate Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-129",
        "moleculeGroup": "Fusidic Acid",
        "composition": "Fusidic Acid Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-130",
        "moleculeGroup": "Gamma Benzene Hexachloride + Cetrimide",
        "composition": "Gamma Benzene Hexachloride + Cetrimide Lotion",
        "dosage": "15ml/30ml",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-131",
        "moleculeGroup": "Gentamicin Sulphate",
        "composition": "Gentamicin Sulphate Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-132",
        "moleculeGroup": "Halobetasol Propionate + Salicylic Acid",
        "composition": "Halobetasol Propionate + Salicylic Acid Ointment",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-133",
        "moleculeGroup": "Halobetasol Propionate",
        "composition": "Halobetasol Propionate Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-134",
        "moleculeGroup": "Hydroquinone + Tretinoin + Mometasone Furoate",
        "composition": "Hydroquinone + Tretinoin + Mometasone Furoate Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-135",
        "moleculeGroup": "Iodochlorhydroxyquinoline",
        "composition": "Iodochlorhydroxyquinoline Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-136",
        "moleculeGroup": "Luliconazole",
        "composition": "Luliconazole Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-137",
        "moleculeGroup": "Luliconazole",
        "composition": "Luliconazole Lotion",
        "dosage": "15ml/30ml",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-138",
        "moleculeGroup": "Miconazole",
        "composition": "Miconazole Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-139",
        "moleculeGroup": "Miconazole Nitrate + Neomycin Sulphate + Fluocinolone Acetonide",
        "composition": "Miconazole Nitrate + Neomycin Sulphate + Fluocinolone Acetonide Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-140",
        "moleculeGroup": "Moisturising",
        "composition": "Moisturising Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-141",
        "moleculeGroup": "Mometasone Furoate",
        "composition": "Mometasone Furoate Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-142",
        "moleculeGroup": "Nitrofurazone",
        "composition": "Nitrofurazone Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-143",
        "moleculeGroup": "Permethrin",
        "composition": "Permethrin Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-144",
        "moleculeGroup": "Permethrin",
        "composition": "Permethrin Lotion",
        "dosage": "15ml/30ml",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-145",
        "moleculeGroup": "Povidone-Iodine",
        "composition": "Povidone-Iodine Ointment",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-146",
        "moleculeGroup": "Sertaconazole Nitrate",
        "composition": "Sertaconazole Nitrate Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-147",
        "moleculeGroup": "Sertaconazole Nitrate",
        "composition": "Sertaconazole Nitrate Lotion",
        "dosage": "15ml/30ml",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-148",
        "moleculeGroup": "Silver Sulfadiazine",
        "composition": "Silver Sulfadiazine Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-149",
        "moleculeGroup": "Silver Sulphadiazine + Chlorhexidine Gluconate",
        "composition": "Silver Sulphadiazine + Chlorhexidine Gluconate Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-150",
        "moleculeGroup": "Tacrolimus",
        "composition": "Tacrolimus Ointment",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-151",
        "moleculeGroup": "Tretinoin",
        "composition": "Tretinoin Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-152",
        "moleculeGroup": "Trolamine",
        "composition": "Trolamine Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-153",
        "moleculeGroup": "Trolamine",
        "composition": "Trolamine Emulsion",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      },
      {
        "id": "znx-154",
        "moleculeGroup": "Urea + Lactic Acid + Propylene Glycol + Liquid Paraffin",
        "composition": "Urea + Lactic Acid + Propylene Glycol + Liquid Paraffin Cream",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Dermatology & Topical"
      }
    ],
    "iconType": "Sparkles",
    "gradientTheme": "from-pink-600 to-rose-600",
    "accentColor": "#DB2777"
  },
  {
    "id": "diabetes-metabolic",
    "name": "Diabetes & Metabolic Care",
    "slug": "diabetes-metabolic",
    "totalEntries": 5,
    "badgeCode": "04",
    "description": "Oral hypoglycemic agents, DPP-4 inhibitors, and biguanides for glycemic control.",
    "keyMolecules": [
      "Metformin HCl",
      "Glimepiride",
      "Linagliptin",
      "Glibenclamide"
    ],
    "dosageForms": [
      "Tablet"
    ],
    "products": [
      {
        "id": "znx-155",
        "moleculeGroup": "Glibenclamide",
        "composition": "Glibenclamide Tablets",
        "dosage": "5mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Diabetes & Metabolic Care"
      },
      {
        "id": "znx-156",
        "moleculeGroup": "Glimepiride",
        "composition": "Glimepiride Tablets",
        "dosage": "1mg/ 2mg/ 4mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Diabetes & Metabolic Care"
      },
      {
        "id": "znx-157",
        "moleculeGroup": "Glimepiride + Metformin",
        "composition": "Glimepiride + Metformin Tablets",
        "dosage": "2mg + 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Diabetes & Metabolic Care"
      },
      {
        "id": "znx-158",
        "moleculeGroup": "Linagliptin",
        "composition": "Linagliptin Tablets",
        "dosage": "5mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Diabetes & Metabolic Care"
      },
      {
        "id": "znx-159",
        "moleculeGroup": "Metformin Hydrochloride",
        "composition": "Metformin Hydrochloride Tablets",
        "dosage": "500mg/ 1000mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Diabetes & Metabolic Care"
      }
    ],
    "iconType": "Activity",
    "gradientTheme": "from-emerald-600 to-teal-700",
    "accentColor": "#059669"
  },
  {
    "id": "endocrine-hormonal",
    "name": "Endocrine & Hormonal",
    "slug": "endocrine-hormonal",
    "totalEntries": 3,
    "badgeCode": "05",
    "description": "Thyroid hormone replacements and systemic glucocorticoids.",
    "keyMolecules": [
      "Levothyroxine",
      "Dexamethasone",
      "Prednisolone"
    ],
    "dosageForms": [
      "Tablet"
    ],
    "products": [
      {
        "id": "znx-160",
        "moleculeGroup": "Dexamethasone",
        "composition": "Dexamethasone Tablets",
        "dosage": "4mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Endocrine & Hormonal"
      },
      {
        "id": "znx-161",
        "moleculeGroup": "Levothyroxine",
        "composition": "Levothyroxine Tablets",
        "dosage": "50mcg/ 100mcg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Endocrine & Hormonal"
      },
      {
        "id": "znx-162",
        "moleculeGroup": "Prednisolone Dispersible",
        "composition": "Prednisolone Dispersible Tablets",
        "dosage": "5mg/ 10mg/ 15mg/ 20mg/ 50mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Endocrine & Hormonal"
      }
    ],
    "iconType": "Layers",
    "gradientTheme": "from-purple-600 to-violet-700",
    "accentColor": "#7C3AED"
  },
  {
    "id": "gastrointestinal",
    "name": "Gastrointestinal",
    "slug": "gastrointestinal",
    "totalEntries": 44,
    "badgeCode": "06",
    "description": "Proton pump inhibitors, prokinetics, antispasmodics, anti-emetics, and antacid complexes.",
    "keyMolecules": [
      "Pantoprazole",
      "Esomeprazole",
      "Rabeprazole",
      "Omeprazole",
      "Ondansetron",
      "Domperidone"
    ],
    "dosageForms": [
      "Tablet",
      "Capsule",
      "Syrup / Suspension"
    ],
    "products": [
      {
        "id": "znx-163",
        "moleculeGroup": "Acotiamide",
        "composition": "Acotiamide Tablets",
        "dosage": "100mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-164",
        "moleculeGroup": "Aluminium hydroxide + Magnesium hydroxide + Simethicone + Oxetacaine",
        "composition": "Aluminium hydroxide + Magnesium hydroxide + Simethicone + Oxetacaine Tablets",
        "dosage": "600mg + 300mg + 25mg + 10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-165",
        "moleculeGroup": "Aluminium hydroxide + Magnesium hydroxide + Simethicone",
        "composition": "Aluminium hydroxide + Magnesium hydroxide + Simethicone Tablets",
        "dosage": "25mg/ 300mg/ 600mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-166",
        "moleculeGroup": "Dexmethasone + Thiamine + Pyridoxine + Cyanocobalamin + Magnesium Hydroxide",
        "composition": "Dexmethasone + Thiamine + Pyridoxine + Cyanocobalamin + Magnesium Hydroxide",
        "dosage": "0.5mg + 50mg + 25mg + 100mg + 100mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-167",
        "moleculeGroup": "Dicyclomine Hydrochloride + Oxetacaine + Magaldrate + Simethicone",
        "composition": "Dicyclomine Hydrochloride + Oxetacaine + Magaldrate + Simethicone Tablets",
        "dosage": "10mg + 10mg + 480mg + 25mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-168",
        "moleculeGroup": "Dicyclomine Hydrochloride + Paracetamol",
        "composition": "Dicyclomine Hydrochloride + Paracetamol Tablets",
        "dosage": "20mg + 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-169",
        "moleculeGroup": "Domperidone + Simethicone",
        "composition": "Domperidone + Simethicone Suspension",
        "dosage": "5mg/ 25mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-170",
        "moleculeGroup": "Domperidone + Simethicone",
        "composition": "Domperidone + Simethicone Tablets",
        "dosage": "10mg/ 50mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-171",
        "moleculeGroup": "Domperidone",
        "composition": "Domperidone Tablets",
        "dosage": "5mg/ 10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-172",
        "moleculeGroup": "Esomeprazole + Lafutidine",
        "composition": "Esomeprazole + Lafutidine Tablets",
        "dosage": "40mg + 10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-173",
        "moleculeGroup": "Esomeprazole + Mosapride",
        "composition": "Esomeprazole + Mosapride Tablets",
        "dosage": "40mg + 5mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-174",
        "moleculeGroup": "Esomeprazole + Polaprezinc",
        "composition": "Esomeprazole + Polaprezinc Tablets",
        "dosage": "40mg + 75mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-175",
        "moleculeGroup": "Esomeprazole",
        "composition": "Esomeprazole Tablets",
        "dosage": "20mg/ 40mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-176",
        "moleculeGroup": "Famotidine",
        "composition": "Famotidine Tablets",
        "dosage": "20mg/ 40mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-177",
        "moleculeGroup": "Hyoscine Butylbromide",
        "composition": "Hyoscine Butylbromide Tablets",
        "dosage": "10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-178",
        "moleculeGroup": "Itopride Hydrochloride",
        "composition": "Itopride Hydrochloride Tablets",
        "dosage": "50mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-179",
        "moleculeGroup": "Lansoprazole + Sodium Bicarbonate",
        "composition": "Lansoprazole + Sodium Bicarbonate Tablets",
        "dosage": "30mg + 1100mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-180",
        "moleculeGroup": "Levosulpiride",
        "composition": "Levosulpiride Tablets",
        "dosage": "50mg/ 75mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-181",
        "moleculeGroup": "Mebeverin + Oxetacaine + Malgatrat + Simetedine chewable",
        "composition": "Mebeverin + Oxetacaine + Malgatrat + Simetedine chewable Tablets",
        "dosage": "135mg + 10mg + 540mg + 50mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-182",
        "moleculeGroup": "Mesalazine",
        "composition": "Mesalazine Tablets",
        "dosage": "500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-183",
        "moleculeGroup": "Naproxen + Esomeprazole Delayed Release",
        "composition": "Naproxen + Esomeprazole Delayed Release Tablets",
        "dosage": "500mg + 20mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-184",
        "moleculeGroup": "Omeprazole + Sodium Bicarbonate",
        "composition": "Omeprazole + Sodium Bicarbonate Tablets",
        "dosage": "20mg + 1100mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-185",
        "moleculeGroup": "Ondansetron",
        "composition": "Ondansetron Tablets",
        "dosage": "4mg/ 8mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-186",
        "moleculeGroup": "Oxatacaine + Malgatrat + Dicyclomine + Simetedine",
        "composition": "Oxatacaine + Malgatrat + Dicyclomine + Simetedine Tablets",
        "dosage": "10mg + 540mg + 20mg + 50mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-187",
        "moleculeGroup": "Pantoprazole",
        "composition": "Pantoprazole Tablets",
        "dosage": "20mg/ 40mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-188",
        "moleculeGroup": "Pinaverium Bromide",
        "composition": "Pinaverium Bromide Tablets",
        "dosage": "100mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-189",
        "moleculeGroup": "Rabeprazole",
        "composition": "Rabeprazole Tablets",
        "dosage": "20mg/ 40mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-190",
        "moleculeGroup": "Simethicone",
        "composition": "Simethicone Tablets",
        "dosage": "125mg/ 180mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-191",
        "moleculeGroup": "Sodium Bicarbonate",
        "composition": "Sodium Bicarbonate Tablets",
        "dosage": "500mg/ 1000mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-192",
        "moleculeGroup": "Dexlansoprazole",
        "composition": "Dexlansoprazole Capsules",
        "dosage": "30mg/ 60mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-193",
        "moleculeGroup": "Dicyclomine Hydrochloride",
        "composition": "Dicyclomine Hydrochloride Capsules",
        "dosage": "10mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-194",
        "moleculeGroup": "Esomeprazole + Domperidone",
        "composition": "Esomeprazole + Domperidone Capsules",
        "dosage": "40mg + 30mg/ 20mg + 30mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-195",
        "moleculeGroup": "Esomeprazole + Itopride",
        "composition": "Esomeprazole + Itopride Capsules",
        "dosage": "20mg + 75mg/ 40mg + 150mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-196",
        "moleculeGroup": "Esomeprazole + Levosulipride",
        "composition": "Esomeprazole + Levosulipride Capsules",
        "dosage": "40mg + 75mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-197",
        "moleculeGroup": "Lansoprazole",
        "composition": "Lansoprazole Capsules",
        "dosage": "30mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-198",
        "moleculeGroup": "Omeprazole",
        "composition": "Omeprazole Capsules",
        "dosage": "20mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-199",
        "moleculeGroup": "Pantoprazole + Domperidone",
        "composition": "Pantoprazole + Domperidone Capsules",
        "dosage": "40mg + 30mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-200",
        "moleculeGroup": "Rabeprazole + Domperidone",
        "composition": "Rabeprazole + Domperidone Capsules",
        "dosage": "40mg + 10mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-201",
        "moleculeGroup": "Rabeprazole + Levosulpiride",
        "composition": "Rabeprazole + Levosulpiride Capsules",
        "dosage": "20mg + 75 mg/ 20mg + 150mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-202",
        "moleculeGroup": "Rabeprazole + ltopride Hcl",
        "composition": "Rabeprazole + ltopride Hcl Capsules",
        "dosage": "20mg + 150mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-203",
        "moleculeGroup": "Simethicone",
        "composition": "Simethicone Capsules",
        "dosage": "140mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-204",
        "moleculeGroup": "Acetaminophen + Ibuprofen + Dicyclomine",
        "composition": "Acetaminophen + Ibuprofen + Dicyclomine Suspension",
        "dosage": "100mg + 125mg + 10mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-205",
        "moleculeGroup": "Ondansetron",
        "composition": "Ondansetron Suspension",
        "dosage": "4mg/ 8mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Gastrointestinal"
      },
      {
        "id": "znx-206",
        "moleculeGroup": "Ondansetron",
        "composition": "Ondansetron Oral Solution",
        "dosage": "2mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Gastrointestinal"
      }
    ],
    "iconType": "Pill",
    "gradientTheme": "from-teal-600 to-cyan-700",
    "accentColor": "#0D9488"
  },
  {
    "id": "general-therapeutics",
    "name": "General Therapeutics",
    "slug": "general-therapeutics",
    "totalEntries": 14,
    "badgeCode": "07",
    "description": "Essential hospital therapeutics, antifibrinolytics, antispasmodics, and mucolytics.",
    "keyMolecules": [
      "Tranexamic Acid",
      "Ursodeoxycholic Acid",
      "Folic Acid",
      "N-Acetyl Cysteine",
      "Fenofibrate"
    ],
    "dosageForms": [
      "Tablet",
      "Capsule",
      "Effervescent Tablet",
      "Syrup / Suspension"
    ],
    "products": [
      {
        "id": "znx-207",
        "moleculeGroup": "Alpha-Methlydopa",
        "composition": "Alpha-Methlydopa Tablets",
        "dosage": "250mg/ 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "General Therapeutics"
      },
      {
        "id": "znx-208",
        "moleculeGroup": "Chorpromazine",
        "composition": "Chorpromazine Tablets",
        "dosage": "25mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "General Therapeutics"
      },
      {
        "id": "znx-209",
        "moleculeGroup": "Desloratidine",
        "composition": "Desloratidine Tablets",
        "dosage": "5mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "General Therapeutics"
      },
      {
        "id": "znx-210",
        "moleculeGroup": "Eperisone hydrochloride",
        "composition": "Eperisone hydrochloride Tablets",
        "dosage": "50mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "General Therapeutics"
      },
      {
        "id": "znx-211",
        "moleculeGroup": "Foilc Acid",
        "composition": "Foilc Acid Tablets",
        "dosage": "5mg/ 10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "General Therapeutics"
      },
      {
        "id": "znx-212",
        "moleculeGroup": "Leflunomide",
        "composition": "Leflunomide Tablets",
        "dosage": "20mg/ 25mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "General Therapeutics"
      },
      {
        "id": "znx-213",
        "moleculeGroup": "Tranexamic acid",
        "composition": "Tranexamic acid Tablets",
        "dosage": "250mg/ 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "General Therapeutics"
      },
      {
        "id": "znx-214",
        "moleculeGroup": "Ursodeoxycholic acid",
        "composition": "Ursodeoxycholic acid Tablets",
        "dosage": "150mg/ 300mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "General Therapeutics"
      },
      {
        "id": "znx-215",
        "moleculeGroup": "Fenofibrate",
        "composition": "Fenofibrate Capsules",
        "dosage": "200mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "General Therapeutics"
      },
      {
        "id": "znx-216",
        "moleculeGroup": "N-Acetyl Cysteine",
        "composition": "N-Acetyl Cysteine Effervescent Tablets",
        "dosage": "600mg",
        "dosageForm": "Effervescent Tablet",
        "dosageFormId": "effervescent",
        "broadCategory": "General Therapeutics"
      },
      {
        "id": "znx-217",
        "moleculeGroup": "Antacid + Anti-flatulent",
        "composition": "Antacid + Anti-flatulent Suspension",
        "dosage": "200mg + 200mg/ 250mg + 250mg/ 400mg + 400mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "General Therapeutics"
      },
      {
        "id": "znx-218",
        "moleculeGroup": "Dry Cough",
        "composition": "Dry Cough Syrup",
        "dosage": "61.5mg per 5ml",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "General Therapeutics"
      },
      {
        "id": "znx-219",
        "moleculeGroup": "Liquid paraffin + Milk of Magnesia",
        "composition": "Liquid paraffin + Milk of Magnesia Suspension",
        "dosage": "",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "General Therapeutics"
      },
      {
        "id": "znx-220",
        "moleculeGroup": "Nystatin",
        "composition": "Nystatin Suspension",
        "dosage": "100,000IU",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "General Therapeutics"
      }
    ],
    "iconType": "Boxes",
    "gradientTheme": "from-indigo-600 to-blue-700",
    "accentColor": "#4F46E5"
  },
  {
    "id": "hematology-supportive",
    "name": "Hematology & Supportive Care",
    "slug": "hematology-supportive",
    "totalEntries": 1,
    "badgeCode": "08",
    "description": "Oral iron chelators and specialty supportive care formulations.",
    "keyMolecules": [
      "Deferasirox"
    ],
    "dosageForms": [
      "Tablet"
    ],
    "products": [
      {
        "id": "znx-221",
        "moleculeGroup": "Deferasirox",
        "composition": "Deferasirox Tablets",
        "dosage": "250mg/ 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Hematology & Supportive Care"
      }
    ],
    "iconType": "ShieldCheck",
    "gradientTheme": "from-amber-600 to-orange-700",
    "accentColor": "#D97706"
  },
  {
    "id": "neurology-psychiatry",
    "name": "Neurology & Psychiatry",
    "slug": "neurology-psychiatry",
    "totalEntries": 11,
    "badgeCode": "09",
    "description": "Anticonvulsants, mood stabilizers, neuropathic pain relievers, and neuro-protective agents.",
    "keyMolecules": [
      "Pregabalin",
      "Gabapentin",
      "Sodium Valproate",
      "Carbamazepine",
      "Citicoline",
      "Lithium Carbonate"
    ],
    "dosageForms": [
      "Tablet",
      "Capsule"
    ],
    "products": [
      {
        "id": "znx-222",
        "moleculeGroup": "Atomoxetine",
        "composition": "Atomoxetine Tablets",
        "dosage": "10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Neurology & Psychiatry"
      },
      {
        "id": "znx-223",
        "moleculeGroup": "Carbamazepine Controlled Release",
        "composition": "Carbamazepine Controlled Release Tablets",
        "dosage": "200mg/ 300mg/ 400mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Neurology & Psychiatry"
      },
      {
        "id": "znx-224",
        "moleculeGroup": "Citicholin",
        "composition": "Citicholin Tablets",
        "dosage": "500mg/ 1000mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Neurology & Psychiatry"
      },
      {
        "id": "znx-225",
        "moleculeGroup": "Gastro-resistance Sodium Valproate",
        "composition": "Gastro-resistance Sodium Valproate Tablets",
        "dosage": "200mg/ 300mg/ 400mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Neurology & Psychiatry"
      },
      {
        "id": "znx-226",
        "moleculeGroup": "Lithium Carbonate",
        "composition": "Lithium Carbonate Tablets",
        "dosage": "300mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Neurology & Psychiatry"
      },
      {
        "id": "znx-227",
        "moleculeGroup": "Sodium Phenytoin",
        "composition": "Sodium Phenytoin",
        "dosage": "50mg/ 100mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Neurology & Psychiatry"
      },
      {
        "id": "znx-228",
        "moleculeGroup": "Valproic Acid",
        "composition": "Valproic Acid Tablets",
        "dosage": "500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Neurology & Psychiatry"
      },
      {
        "id": "znx-229",
        "moleculeGroup": "Gabapentin + Methylcobalamine",
        "composition": "Gabapentin + Methylcobalamine Capsules",
        "dosage": "150mg + 500mcg/ 300mg + 500mcg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Neurology & Psychiatry"
      },
      {
        "id": "znx-230",
        "moleculeGroup": "Lithium Carbonate",
        "composition": "Lithium Carbonate Capsules",
        "dosage": "300mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Neurology & Psychiatry"
      },
      {
        "id": "znx-231",
        "moleculeGroup": "Pregabalin + Methylcobalamin",
        "composition": "Pregabalin + Methylcobalamin",
        "dosage": "75mg + 750mcg/ 75mg + 1500mcg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Neurology & Psychiatry"
      },
      {
        "id": "znx-232",
        "moleculeGroup": "Pregabalin",
        "composition": "Pregabalin Capsules",
        "dosage": "25mg/ 50mg/ 75mg/ 150mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Neurology & Psychiatry"
      }
    ],
    "iconType": "Activity",
    "gradientTheme": "from-violet-600 to-purple-800",
    "accentColor": "#9333EA"
  },
  {
    "id": "pain-musculoskeletal",
    "name": "Pain Management & Musculoskeletal",
    "slug": "pain-musculoskeletal",
    "totalEntries": 58,
    "badgeCode": "10",
    "description": "NSAIDs, antipyretics, muscle relaxants, COX-2 inhibitors, and topical anti-inflammatory formulations.",
    "keyMolecules": [
      "Aceclofenac",
      "Paracetamol",
      "Diclofenac",
      "Etoricoxib",
      "Ibuprofen",
      "Thiocolchicoside"
    ],
    "dosageForms": [
      "Tablet",
      "Capsule",
      "Effervescent Tablet",
      "Syrup / Suspension",
      "Topical / Tube Preparation"
    ],
    "products": [
      {
        "id": "znx-233",
        "moleculeGroup": "Aceclofenac + Paracetamol + Caffeine",
        "composition": "Aceclofenac + Paracetamol + Caffeine Tablets",
        "dosage": "50mg + 325mg + 30mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-234",
        "moleculeGroup": "Aceclofenac + Paracetamol + Chlorzoxazone",
        "composition": "Aceclofenac + Paracetamol + Chlorzoxazone Tablets",
        "dosage": "100mg + 325mg + 375mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-235",
        "moleculeGroup": "Aceclofenac + Paracetamol + Thiocolchicoside",
        "composition": "Aceclofenac + Paracetamol + Thiocolchicoside Tablets",
        "dosage": "100mg + 500mg + 4mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-236",
        "moleculeGroup": "Aceclofenac + Paracetamol",
        "composition": "Aceclofenac + Paracetamol Tablets",
        "dosage": "100mg + 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-237",
        "moleculeGroup": "Aceclofenac + Serratiopeptidase + Paracetamol",
        "composition": "Aceclofenac + Serratiopeptidase + Paracetamol Tablets",
        "dosage": "100mg + 15mg + 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-238",
        "moleculeGroup": "Aceclofenac + Thiocolchicoside",
        "composition": "Aceclofenac + Thiocolchicoside Tablets",
        "dosage": "100mg + 4mg/ 100mg + 8mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-239",
        "moleculeGroup": "Aceclofenac",
        "composition": "Aceclofenac Tablets",
        "dosage": "100mg/ 200mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-240",
        "moleculeGroup": "Acetaminophen + Caffeine",
        "composition": "Acetaminophen + Caffeine Tablets",
        "dosage": "650mg + 65mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-241",
        "moleculeGroup": "Acetaminophen + Ibuprofen + Caffeine",
        "composition": "Acetaminophen + Ibuprofen + Caffeine Tablets",
        "dosage": "500mg + 400mg + 30mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-242",
        "moleculeGroup": "Acetaminophen + Ibuprofen Dispersible",
        "composition": "Acetaminophen + Ibuprofen Dispersible Tablets",
        "dosage": "325mg + 200mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-243",
        "moleculeGroup": "Bromelain + Trypsin + Rutoside",
        "composition": "Bromelain + Trypsin + Rutoside Tablets",
        "dosage": "90mg + 48mg + 100mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-244",
        "moleculeGroup": "Diclofenac + Paracetamol + Caffeine",
        "composition": "Diclofenac + Paracetamol + Caffeine Tablets",
        "dosage": "50mg + 325mg + 30mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-245",
        "moleculeGroup": "Diclofenac + Paracetamol",
        "composition": "Diclofenac + Paracetamol Tablets",
        "dosage": "50mg + 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-246",
        "moleculeGroup": "Diclofenac",
        "composition": "Diclofenac Capsules",
        "dosage": "75mg/ 100mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-247",
        "moleculeGroup": "Diclofenac sodium + Paracetamol + Magnesium",
        "composition": "Diclofenac sodium + Paracetamol + Magnesium Tablets",
        "dosage": "100mg + 500mg + 150mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-248",
        "moleculeGroup": "Diclofenac Sodium",
        "composition": "Diclofenac Sodium Tablets",
        "dosage": "50mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-249",
        "moleculeGroup": "Etodolac + Paracetamol",
        "composition": "Etodolac + Paracetamol Tablets",
        "dosage": "400mg + 325mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-250",
        "moleculeGroup": "Etodolac",
        "composition": "Etodolac Tablets",
        "dosage": "300mg/ 400mg/ 600mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-251",
        "moleculeGroup": "Etoricoxib + Paracetamol",
        "composition": "Etoricoxib + Paracetamol Tablets",
        "dosage": "60mg + 500mg/ 60mg + 325mg/ 90mg + 325mg/ 120mg + 325mg/ 120mg + 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-252",
        "moleculeGroup": "Etoricoxib + Thiocolchicoside",
        "composition": "Etoricoxib + Thiocolchicoside Tablets",
        "dosage": "60mg + 4mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-253",
        "moleculeGroup": "Etoricoxib + Tolperisone",
        "composition": "Etoricoxib + Tolperisone Tablets",
        "dosage": "60mg + 150mg/ 90mg + 150mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-254",
        "moleculeGroup": "Etoricoxib",
        "composition": "Etoricoxib Tablets",
        "dosage": "60mg/ 90mg/ 120mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-255",
        "moleculeGroup": "Febuxostat",
        "composition": "Febuxostat Tablets",
        "dosage": "20mg/ 40mg/ 80mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-256",
        "moleculeGroup": "Ibuprofen + Chlorpheniramine + Phenylephrine",
        "composition": "Ibuprofen + Chlorpheniramine + Phenylephrine Tablets",
        "dosage": "2mg + 5mg + 500mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-257",
        "moleculeGroup": "Ibuprofen + Paracetamol + Caffeine",
        "composition": "Ibuprofen + Paracetamol + Caffeine Tablets",
        "dosage": "400mg + 325mg + 25mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-258",
        "moleculeGroup": "Ibuprofen + Paracetamol + Chlorzoxazone",
        "composition": "Ibuprofen + Paracetamol + Chlorzoxazone Tablets",
        "dosage": "400mg + 325mg + 250mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-259",
        "moleculeGroup": "Ibuprofen + Paracetamol",
        "composition": "Ibuprofen + Paracetamol Tablets",
        "dosage": "200mg + 325mg/ 400mg + 325mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-260",
        "moleculeGroup": "Ibuprofen",
        "composition": "Ibuprofen Tablets",
        "dosage": "200mg/ 400mg/ 600mg/ 800mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-261",
        "moleculeGroup": "Indometacine",
        "composition": "Indometacine Tablets",
        "dosage": "25mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-262",
        "moleculeGroup": "Ketorolac",
        "composition": "Ketorolac Tablets",
        "dosage": "30mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-263",
        "moleculeGroup": "Meloxicam",
        "composition": "Meloxicam Tablets",
        "dosage": "7.5mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-264",
        "moleculeGroup": "Paracetamol",
        "composition": "Paracetamol Tablets",
        "dosage": "500mg/ 650mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-265",
        "moleculeGroup": "Paracetamol + Caffeine",
        "composition": "Paracetamol Tablets + Caffeine",
        "dosage": "500mg + 50mg/ 500mg + 25mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-266",
        "moleculeGroup": "Piroxicam",
        "composition": "Piroxicam Tablets",
        "dosage": "20mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-267",
        "moleculeGroup": "Serratiopeptidase",
        "composition": "Serratiopeptidase Tablets",
        "dosage": "5mg/ 15mg/ 20mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-268",
        "moleculeGroup": "Sodium Alendronate",
        "composition": "Sodium Alendronate Tablets",
        "dosage": "35mg/ 70 mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-269",
        "moleculeGroup": "Thiocolchicoside",
        "composition": "Thiocolchicoside Tablets",
        "dosage": "4mg/ 8mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-270",
        "moleculeGroup": "Tolperisone Hydrochloride",
        "composition": "Tolperisone Hydrochloride Tablets",
        "dosage": "50mg/ 150mg/ 450mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-271",
        "moleculeGroup": "Tranexamic Acid + Mefenamic Acid",
        "composition": "Tranexamic Acid + Mefenamic Acid Tablets",
        "dosage": "500mg + 250mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-272",
        "moleculeGroup": "Celecoxib",
        "composition": "Celecoxib Capsules",
        "dosage": "200mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-273",
        "moleculeGroup": "Diclofenac + Paracetamol + Caffeine",
        "composition": "Diclofenac + Paracetamol + Caffeine Capsules",
        "dosage": "50mg + 500mg + 30 mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-274",
        "moleculeGroup": "Paracetamol + Chlorpheniramine + Dexamethasone + Vitamin C",
        "composition": "Paracetamol + Chlorpheniramine + Dexamethasone + Vitamin C Capsules",
        "dosage": "250mg + 4mg + 0.5mg + 100mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-275",
        "moleculeGroup": "Paracetamol",
        "composition": "Paracetamol Efferevescent Tablets",
        "dosage": "500mg",
        "dosageForm": "Effervescent Tablet",
        "dosageFormId": "effervescent",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-276",
        "moleculeGroup": "Acetaminophen + Aceclofenac",
        "composition": "Acetaminophen + Aceclofenac Suspension",
        "dosage": "125mg + 50mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-277",
        "moleculeGroup": "Acetaminophen + Mefenamic Acid",
        "composition": "Acetaminophen + Mefenamic Acid Suspension",
        "dosage": "125mg + 100mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-278",
        "moleculeGroup": "Acetaminophen + Phenylephrine + Chlorpheniramine",
        "composition": "Acetaminophen + Phenylephrine + Chlorpheniramine Suspension",
        "dosage": "125mg + 5mg + 2mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-279",
        "moleculeGroup": "Acetaminophen + Phenylephrine + Levocetirizine",
        "composition": "Acetaminophen + Phenylephrine + Levocetirizine Suspension",
        "dosage": "125mg + 5mg + 2.5mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-280",
        "moleculeGroup": "Acetaminophen + Phenylephrine + Ascorbic Acid",
        "composition": "Acetaminophen + Phenylephrine + Ascorbic Acid Suspension",
        "dosage": "125mg + 5mg + 100mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-281",
        "moleculeGroup": "Acetaminophen + Phenylephrine + Cetirizine",
        "composition": "Acetaminophen + Phenylephrine + Cetirizine Suspension",
        "dosage": "125mg + 5mg + 2.5mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-282",
        "moleculeGroup": "Acetaminophen",
        "composition": "Acetaminophen Suspension",
        "dosage": "250mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-283",
        "moleculeGroup": "Ibuprofen + Paracetamol",
        "composition": "Ibuprofen + Paracetamol Suspension",
        "dosage": "100mg + 125mg/ 100mg +162.5mg/ 200mg + 250mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-284",
        "moleculeGroup": "Ibuprofen",
        "composition": "Ibuprofen Oral Suspension",
        "dosage": "100mg/ 200mg/ 400mg/ 600mg/ 800mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-285",
        "moleculeGroup": "Paracetamol",
        "composition": "Paracetamol Suspension",
        "dosage": "125mg per 5ml/ 250mg per 5 ml",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-286",
        "moleculeGroup": "Paracetamol + Phenylephrine HCl + Cetirizine DiHCl + Zinc Gluconate",
        "composition": "Paracetamol + Phenylephrine HCl + Cetirizine DiHCl + Zinc Gluconate Suspension",
        "dosage": "125mg + 2.5mg + 2.5mg + 7.5 mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-287",
        "moleculeGroup": "Aceclofenac + Thiocolchicoside + Linseed Oil + Menthol + Methyl Salicylate + Capsaicin",
        "composition": "Aceclofenac + Thiocolchicoside + Linseed Oil + Menthol + Methyl Salicylate + Capsaicin Gel",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-288",
        "moleculeGroup": "Diclofenac + Linseed Oil + Methyl Salicylate + Menthol",
        "composition": "Diclofenac + Linseed Oil + Methyl Salicylate + Menthol Gel",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-289",
        "moleculeGroup": "Diclofenac + Linseed Oil + Methyl Salicylate + Menthol + Capsaicin",
        "composition": "Diclofenac + Linseed Oil + Methyl Salicylate + Menthol Gel + Capsaicin Gel",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Pain Management & Musculoskeletal"
      },
      {
        "id": "znx-290",
        "moleculeGroup": "Diclofenac+Linseed Oil+Methyl Salicylate+Menthol",
        "composition": "Diclofenac+Linseed Oil+Methyl Salicylate+Menthol Gel",
        "dosage": "15gm/30gm",
        "dosageForm": "Topical / Tube Preparation",
        "dosageFormId": "topical",
        "broadCategory": "Pain Management & Musculoskeletal"
      }
    ],
    "iconType": "Pill",
    "gradientTheme": "from-orange-600 to-red-700",
    "accentColor": "#EA580C"
  },
  {
    "id": "respiratory-anti-allergic",
    "name": "Respiratory & Anti-Allergic",
    "slug": "respiratory-anti-allergic",
    "totalEntries": 31,
    "badgeCode": "11",
    "description": "Non-sedating antihistamines, bronchodilators, mucolytics, and leukotriene receptor antagonists.",
    "keyMolecules": [
      "Levocetirizine",
      "Montelukast",
      "Fexofenadine",
      "Ambroxol",
      "Cetirizine",
      "Desloratadine"
    ],
    "dosageForms": [
      "Tablet",
      "Syrup / Suspension",
      "Dry Powder / Dry Syrup"
    ],
    "products": [
      {
        "id": "znx-291",
        "moleculeGroup": "Ambroxol Hydrochloride",
        "composition": "Ambroxol Hydrochloride Tablets",
        "dosage": "5mg/ 10mg/ 15mg/ 30mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-292",
        "moleculeGroup": "Betamethasone + Dexchlorpheniramine",
        "composition": "Betamethasone + Dexchlorpheniramine Tablets",
        "dosage": "0.25mg + 2mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-293",
        "moleculeGroup": "Cetirizine Hydrochloride + Guaifenesin + Dextromethorphan Hydrobromide + Phenylephrine",
        "composition": "Cetirizine Hydrochloride + Guaifenesin + Dextromethorphan Hydrobromide + Phenylephrine Tablets",
        "dosage": "5mg + 100mg + 15mg + 10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-294",
        "moleculeGroup": "Cetirizine Hydrochloride",
        "composition": "Cetirizine Hydrochloride Tablets",
        "dosage": "5mg/ 10mg/ 20mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-295",
        "moleculeGroup": "Chlorpheniramine Maleate",
        "composition": "Chlorpheniramine Maleate Tablets",
        "dosage": "2mg/ 4mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-296",
        "moleculeGroup": "Cyproheptadine + Multivitamin",
        "composition": "Cyproheptadine + Multivitamin Tablets",
        "dosage": "",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-297",
        "moleculeGroup": "Cyproheptadine",
        "composition": "Cyproheptadine Tablets",
        "dosage": "2mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-298",
        "moleculeGroup": "Desloratidine + Montelukast",
        "composition": "Desloratidine + Montelukast Tablets",
        "dosage": "5mg + 10mg/ 5mg + 10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-299",
        "moleculeGroup": "Dextromethorphan",
        "composition": "Dextromethorphan Tablets",
        "dosage": "10mg/ 20mg/ 30mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-300",
        "moleculeGroup": "Diphenhydramine",
        "composition": "Diphenhydramine Tablets",
        "dosage": "50mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-301",
        "moleculeGroup": "Fexofenadine + Montelukast",
        "composition": "Fexofenadine + Montelukast Tablets",
        "dosage": "180mg + 10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-302",
        "moleculeGroup": "Fexofenadine",
        "composition": "Fexofenadine Tablets",
        "dosage": "120mg/ 180mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-303",
        "moleculeGroup": "Levocetirizine Dihydrochloride",
        "composition": "Levocetirizine Dihydrochloride Tablets",
        "dosage": "5mg/ 10mg/ 15mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-304",
        "moleculeGroup": "Levocetirizine Hydrochloride",
        "composition": "Levocetirizine Hydrochloride Tablets",
        "dosage": "5mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-305",
        "moleculeGroup": "Montelukast Chewable",
        "composition": "Montelukast Chewable Tablets",
        "dosage": "4mg/ 5mg/ 10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-306",
        "moleculeGroup": "Ambroxol + Cetirizine + Dextromethorphen",
        "composition": "Ambroxol + Cetirizine + Dextromethorphen Suspension",
        "dosage": "5mg/ 10mg/ 15mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-307",
        "moleculeGroup": "Ambroxol Hydrochloride + Terbutaline Sulfate + Guaifenesin",
        "composition": "Ambroxol Hydrochloride + Terbutaline Sulfate + Guaifenesin Syrup",
        "dosage": "100mg per 5 ml",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-308",
        "moleculeGroup": "Betamethasone + Dexchlorpheniramine",
        "composition": "Betamethasone + Dexchlorpheniramine Syrup",
        "dosage": "0.25mg + 2mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-309",
        "moleculeGroup": "Bromhexine HCL + Dextromethorphan Hbr + Menthol + Ammonium Chloride",
        "composition": "Bromhexine HCL + Dextromethorphan Hbr + Menthol + Ammonium Chloride Syrup",
        "dosage": "",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-310",
        "moleculeGroup": "Cyproheptadine + Calcium + Vitamin D3 + Peptone",
        "composition": "Cyproheptadine + Calcium + Vitamin D3 + Peptone syrup",
        "dosage": "",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-311",
        "moleculeGroup": "Cyproheptadine + L- Lysine + Vitamin D3 + Peptone",
        "composition": "Cyproheptadine + L- Lysine + Vitamin D3 + Peptone syrup",
        "dosage": "2mg + 50mg + 100IU + 25mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-312",
        "moleculeGroup": "Cyproheptadine + Multivitamin",
        "composition": "Cyproheptadine + Multivitamin Syrup",
        "dosage": "",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-313",
        "moleculeGroup": "Cyproheptadine + Sorbitol + Tricholine",
        "composition": "Cyproheptadine + Sorbitol + Tricholine syrup",
        "dosage": "",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-314",
        "moleculeGroup": "Cyproheptadine + V.Bl + V. B2 + V. BS + V. B6 + V. Bl2 + Nicotinamide + DHA",
        "composition": "Cyproheptadine + V.Bl + V. B2 + V. BS + V. B6 + V. Bl2 + Nicotinamide + DHA syrup",
        "dosage": "",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-315",
        "moleculeGroup": "Cyproheptadine + Vitamin A + Vitamin D3 + Vitamin B1 + Vitamin B2 + Vitamin B6 + Ascorbic Acid BP + Dexpanthenol BP + Nicotinamide BP",
        "composition": "Cyproheptadine + Vitamin A + Vitamin D3 + Vitamin B1 + Vitamin B2 + Vitamin B6 + Ascorbic Acid BP + Dexpanthenol BP + Nicotinamide BP",
        "dosage": "2mg + 2500IU + 300IU + 5mg + 2.5mg + 1.5mg + 45mg + 10mg + 25mg/ 4mg + 2500IU + 300IU + 5mg + 2.5mg + 1.5mg + 45mg + 10mg + 25mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-316",
        "moleculeGroup": "Desloratadine",
        "composition": "Desloratadine Suspension",
        "dosage": "0.5mg per 5 ml",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-317",
        "moleculeGroup": "Dextromethorphan + Chlorpheniramine Maleate + Pseudoephedrine HCL",
        "composition": "Dextromethorphan + Chlorpheniramine Maleate + Pseudoephedrine HCL Suspension",
        "dosage": "10mg + 2mg + 30mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-318",
        "moleculeGroup": "Guaifenesin + Dextromethorphan Hydrobromide + Phenylephrine Hydrochloride + Chlorpheniramine Maleate",
        "composition": "Guaifenesin + Dextromethorphan Hydrobromide + Phenylephrine Hydrochloride + Chlorpheniramine Maleate Syrup",
        "dosage": "100mg + 10mg + 5mg + 2mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-319",
        "moleculeGroup": "Levocetirizine Dihydrochloride + Montelukast sodium",
        "composition": "Levocetirizine Dihydrochloride + Montelukast sodium Syrup",
        "dosage": "2.5mg per 5ml/ 4mg per 5ml",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-320",
        "moleculeGroup": "Terbutaline Sulfate",
        "composition": "Terbutaline Sulfate Syrup",
        "dosage": "0.3mg per ml",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Respiratory & Anti-Allergic"
      },
      {
        "id": "znx-321",
        "moleculeGroup": "Acetylcysteine",
        "composition": "Acetylcysteine Powder for Oral Solution",
        "dosage": "600mg",
        "dosageForm": "Dry Powder / Dry Syrup",
        "dosageFormId": "dry-powder",
        "broadCategory": "Respiratory & Anti-Allergic"
      }
    ],
    "iconType": "Wind",
    "gradientTheme": "from-sky-600 to-cyan-700",
    "accentColor": "#0284C7"
  },
  {
    "id": "urology-nephrology",
    "name": "Urology & Nephrology",
    "slug": "urology-nephrology",
    "totalEntries": 18,
    "badgeCode": "12",
    "description": "BPH therapeutics, alpha-blockers, 5-alpha reductase inhibitors, and phosphate binders.",
    "keyMolecules": [
      "Tamsulosin",
      "Silodosin",
      "Dutasteride",
      "Tadalafil",
      "Sevelamer Carbonate"
    ],
    "dosageForms": [
      "Tablet",
      "Capsule"
    ],
    "products": [
      {
        "id": "znx-322",
        "moleculeGroup": "Alphaketoanalouge",
        "composition": "Alphaketoanalouge Tablets",
        "dosage": "Alpha Ketoanlouge",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-323",
        "moleculeGroup": "Dutasteride",
        "composition": "Dutasteride Tablets",
        "dosage": "0.5mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-324",
        "moleculeGroup": "Finasteride",
        "composition": "Finasteride Tablets",
        "dosage": "1mg/ 2mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-325",
        "moleculeGroup": "Sevelamer Carbonate",
        "composition": "Sevelamer Carbonate Tablets",
        "dosage": "400mg/ 800 mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-326",
        "moleculeGroup": "Sildenafil + Dapoxetine",
        "composition": "Sildenafil + Dapoxetine Tablets",
        "dosage": "50mg + 30mg/ 100mg + 60mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-327",
        "moleculeGroup": "Sildenafil Citrate",
        "composition": "Sildenafil Citrate Tablets",
        "dosage": "50mg/ 100mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-328",
        "moleculeGroup": "Silodosin + Dutasteride",
        "composition": "Silodosin + Dutasteride Tablets",
        "dosage": "4mg + 0.4 mg/ 8mg + 0.4mg/ 4mg + 0.5mg/ 8mg + 0.5mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-329",
        "moleculeGroup": "Silodosin",
        "composition": "Silodosin Tablets",
        "dosage": "4mg/ 8mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-330",
        "moleculeGroup": "Solifenacin",
        "composition": "Solifenacin Tablets",
        "dosage": "5mg/ 10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-331",
        "moleculeGroup": "Tadalafil + Dapoxetine",
        "composition": "Tadalafil + Dapoxetine Tablets",
        "dosage": "10mg + 30mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-332",
        "moleculeGroup": "Tadalafil",
        "composition": "Tadalafil Tablets",
        "dosage": "5mg/ 10mg/ 20mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-333",
        "moleculeGroup": "Tamsulosin + Dutasteride",
        "composition": "Tamsulosin + Dutasteride Tablets",
        "dosage": "0.4mg + 0.5mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-334",
        "moleculeGroup": "Tamsulosin + Finasteride",
        "composition": "Tamsulosin + Finasteride Tablets",
        "dosage": "0.4mg + 5mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-335",
        "moleculeGroup": "Tamsulosin",
        "composition": "Tamsulosin Tablets",
        "dosage": "0.2mg/ 0.4mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-336",
        "moleculeGroup": "Dutasteride",
        "composition": "Dutasteride Capsules",
        "dosage": "0.5mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-337",
        "moleculeGroup": "Silodosin + Dutasteride",
        "composition": "Silodosin + Dutasteride Capsules",
        "dosage": "8mg + 0.5mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-338",
        "moleculeGroup": "Silodosin",
        "composition": "Silodosin Capsules",
        "dosage": "4mg/ 8mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Urology & Nephrology"
      },
      {
        "id": "znx-339",
        "moleculeGroup": "Tamsulosin",
        "composition": "Tamsulosin Capsules",
        "dosage": "0.4mg",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Urology & Nephrology"
      }
    ],
    "iconType": "Sparkles",
    "gradientTheme": "from-blue-700 to-cyan-800",
    "accentColor": "#1D4ED8"
  },
  {
    "id": "vitamins-minerals-nutraceuticals",
    "name": "Vitamins, Minerals & Nutraceuticals",
    "slug": "vitamins-minerals-nutraceuticals",
    "totalEntries": 16,
    "badgeCode": "13",
    "description": "Therapeutic micronutrients, effervescent immune boosters, hematinic elixirs, and dietary supplements.",
    "keyMolecules": [
      "Vitamin C + Zinc",
      "Calcium + D3",
      "Vitamin E",
      "B-Complex",
      "Zinc Sulfate"
    ],
    "dosageForms": [
      "Tablet",
      "Capsule",
      "Effervescent Tablet",
      "Syrup / Suspension"
    ],
    "products": [
      {
        "id": "znx-340",
        "moleculeGroup": "Multivitamins + Iron + Minerals",
        "composition": "Multivitamins + Iron + Minerals Tablets",
        "dosage": "",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      },
      {
        "id": "znx-341",
        "moleculeGroup": "Thiamin + Riboflavin + Pyridoxine + Cyanocobalamin + Nicotinamide + Calcium Pantothenate",
        "composition": "Thiamin + Riboflavin + Pyridoxine + Cyanocobalamin + Nicotinamide + Calcium Pantothenate Tablets",
        "dosage": "10mg + 10mg + 3mg + 15mcg + 45mg + 50mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      },
      {
        "id": "znx-342",
        "moleculeGroup": "Vitamin C + Zinc",
        "composition": "Vitamin C + Zinc Tablets",
        "dosage": "1000mg + 10mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      },
      {
        "id": "znx-343",
        "moleculeGroup": "Zinc",
        "composition": "Zinc Tablets",
        "dosage": "50mg",
        "dosageForm": "Tablet",
        "dosageFormId": "tablet",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      },
      {
        "id": "znx-344",
        "moleculeGroup": "Iron + Folic acid + Zinc + Vitamin B12 + Mineral",
        "composition": "Iron + Folic acid + Zinc + Vitamin B12 + Mineral Capsules",
        "dosage": "",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      },
      {
        "id": "znx-345",
        "moleculeGroup": "Multivitamin + Multimineral",
        "composition": "Multivitamin + Multimineral Capsules",
        "dosage": "",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      },
      {
        "id": "znx-346",
        "moleculeGroup": "Vitamin E",
        "composition": "Vitamin E Capsules",
        "dosage": "400IU",
        "dosageForm": "Capsule",
        "dosageFormId": "capsule",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      },
      {
        "id": "znx-347",
        "moleculeGroup": "Calcium + Vitamin D3",
        "composition": "Calcium + Vitamin D3 Effervescent Tablets",
        "dosage": "1000mg + 1000IU",
        "dosageForm": "Effervescent Tablet",
        "dosageFormId": "effervescent",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      },
      {
        "id": "znx-348",
        "moleculeGroup": "Vitamin C + Vitamin D3 + Zinc",
        "composition": "Vitamin C + Vitamin D3 + Zinc Effervescent Tablets",
        "dosage": "1000mg + 200IU + 10mg",
        "dosageForm": "Effervescent Tablet",
        "dosageFormId": "effervescent",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      },
      {
        "id": "znx-349",
        "moleculeGroup": "Vitamin C + Zinc",
        "composition": "Vitamin C + Zinc Effervescent Tablets",
        "dosage": "500mg + 5mg/ 1000mg + 10mg",
        "dosageForm": "Effervescent Tablet",
        "dosageFormId": "effervescent",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      },
      {
        "id": "znx-350",
        "moleculeGroup": "Vitamin C",
        "composition": "Vitamin C Effervescent Tablets",
        "dosage": "1000mg/ 2000mg",
        "dosageForm": "Effervescent Tablet",
        "dosageFormId": "effervescent",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      },
      {
        "id": "znx-351",
        "moleculeGroup": "Iron+ Folic acid + Zinc + Vitamin B12 + Mineral",
        "composition": "Iron+ Folic acid + Zinc + Vitamin B12 + Mineral Syrup",
        "dosage": "",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      },
      {
        "id": "znx-352",
        "moleculeGroup": "L-Lysine + Multivitamin",
        "composition": "L-Lysine + Multivitamin Syrup",
        "dosage": "",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      },
      {
        "id": "znx-353",
        "moleculeGroup": "L-Lysine + Vitamin Bl + Vitamin B2 + Vitamin B6 + Vitamin B12 + Nicotinamide + Dexpanthenol",
        "composition": "L-Lysine + Vitamin Bl + Vitamin B2 + Vitamin B6 + Vitamin B12 + Nicotinamide + Dexpanthenol syrup",
        "dosage": "5mg + 15mg + 1.5mg + 0.5mg + 5 mcg + 20mg + 5mg/ 5mg + 5mg + 1.5mg + 0.5mg + 5mcg + 20mg + 5mg",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      },
      {
        "id": "znx-354",
        "moleculeGroup": "Multivitamin + Mineral",
        "composition": "Multivitamin + Mineral Syrup",
        "dosage": "",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      },
      {
        "id": "znx-355",
        "moleculeGroup": "Vitamin + Iron + Minerals",
        "composition": "Vitamin + Iron + Minerals Syrup",
        "dosage": "",
        "dosageForm": "Syrup / Suspension",
        "dosageFormId": "suspension",
        "broadCategory": "Vitamins, Minerals & Nutraceuticals"
      }
    ],
    "iconType": "Sparkles",
    "gradientTheme": "from-amber-500 to-yellow-600",
    "accentColor": "#F59E0B"
  }
];
