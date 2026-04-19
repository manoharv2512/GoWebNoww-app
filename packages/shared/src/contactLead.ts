import { z } from "zod";

export const ContactLeadStatusSchema = z.enum(["NEW", "CONTACTED", "CLOSED"]);

export const CreateContactLeadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().min(7).max(30).optional().or(z.literal("")),
  message: z.string().trim().min(5).max(2000),
});

export const UpdateContactLeadSchema = z.object({
  name: z.string().trim().min(2).max(120).optional(),
  email: z.string().trim().email().max(180).optional(),
  phone: z.string().trim().min(7).max(30).optional().or(z.literal("")),
  message: z.string().trim().min(5).max(2000).optional(),
  status: ContactLeadStatusSchema.optional(),
});

export type ContactLeadStatus = z.infer<typeof ContactLeadStatusSchema>;
export type CreateContactLeadInput = z.infer<typeof CreateContactLeadSchema>;
export type UpdateContactLeadInput = z.infer<typeof UpdateContactLeadSchema>;

export type ContactLead = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  status: ContactLeadStatus;
  createdAt: string;
  updatedAt: string;
};
