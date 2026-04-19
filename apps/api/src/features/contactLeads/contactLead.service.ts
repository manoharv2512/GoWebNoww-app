import type {
  CreateContactLeadInput,
  UpdateContactLeadInput,
} from "@gowebnow/shared";
import { HttpError } from "../../lib/httpError.js";
import { prisma } from "../../lib/prisma.js";
import { toContactLeadDto } from "./contactLead.mapper.js";

export async function createContactLead(input: CreateContactLeadInput) {
  const lead = await prisma.contactLead.create({
    data: {
      name: input.name,
      email: input.email,
      phone: input.phone || null,
      message: input.message,
    },
  });

  return toContactLeadDto(lead);
}

export async function listContactLeads() {
  const leads = await prisma.contactLead.findMany({
    orderBy: { createdAt: "desc" },
  });

  return leads.map(toContactLeadDto);
}

export async function getContactLead(id: string) {
  const lead = await prisma.contactLead.findUnique({ where: { id } });

  if (!lead) {
    throw new HttpError(404, "Contact lead not found");
  }

  return toContactLeadDto(lead);
}

export async function updateContactLead(
  id: string,
  input: UpdateContactLeadInput,
) {
  await getContactLead(id);

  const lead = await prisma.contactLead.update({
    where: { id },
    data: {
      ...input,
      phone: input.phone === "" ? null : input.phone,
    },
  });

  return toContactLeadDto(lead);
}

export async function deleteContactLead(id: string) {
  await getContactLead(id);
  await prisma.contactLead.delete({ where: { id } });
}
