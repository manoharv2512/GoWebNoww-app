import type { ContactLead as PrismaContactLead } from "@prisma/client";
import type { ContactLead } from "@gowebnow/shared";

export function toContactLeadDto(lead: PrismaContactLead): ContactLead {
  return {
    id: lead.id,
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    message: lead.message,
    status: lead.status,
    createdAt: lead.createdAt.toISOString(),
    updatedAt: lead.updatedAt.toISOString(),
  };
}
