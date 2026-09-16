import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid corporate email address")
    .max(120, "Email cannot exceed 120 characters"),
  phoneNumber: z
    .string()
    .trim()
    .max(30, "Phone number cannot exceed 30 characters")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject cannot exceed 150 characters"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(3000, "Message cannot exceed 3,000 characters"),
  agreedToTerms: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms and privacy policy"),
  website_hp: z.string().optional(), // Silent honeypot field
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;

export const RfqItemSchema = z.object({
  id: z.string(),
  composition: z.string(),
  dosage: z.string().optional().default(""),
  dosageForm: z.string(),
  categoryName: z.string(),
  quantity: z.string().optional().default("Commercial MOQ"),
  targetPackaging: z.string().optional().default("Alu-Alu / Blister"),
});

export const RfqRequestSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
  company: z.string().trim().min(2).max(150),
  country: z.string().trim().min(2).max(100),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  deliveryTerm: z.enum(["FOB", "CIF", "CFR", "Air DDP", "Other"]).default("FOB"),
  dossierRequired: z.boolean().default(true),
  targetMarket: z.string().optional().default(""),
  additionalNotes: z.string().max(2000).optional().default(""),
  items: z.array(RfqItemSchema).min(1, "Please select at least one formulation for RFQ"),
  website_hp: z.string().optional(), // Honeypot
});

export type RfqRequestData = z.infer<typeof RfqRequestSchema>;
