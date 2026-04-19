import { Router } from "express";
import {
  CreateContactLeadSchema,
  UpdateContactLeadSchema,
} from "@gowebnow/shared";
import { asyncHandler } from "../../lib/asyncHandler.js";
import { requireAuth } from "../auth/auth.middleware.js";
import { validateBody } from "../../middleware/validate.js";
import {
  createContactLead,
  deleteContactLead,
  getContactLead,
  listContactLeads,
  updateContactLead,
} from "./contactLead.service.js";

export const contactLeadRouter = Router();

contactLeadRouter.post(
  "/",
  validateBody(CreateContactLeadSchema),
  asyncHandler(async (req, res) => {
    const lead = await createContactLead(req.body);
    res.status(201).json(lead);
  }),
);

contactLeadRouter.get(
  "/",
  requireAuth,
  asyncHandler(async (_req, res) => {
    res.json(await listContactLeads());
  }),
);

contactLeadRouter.get(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    res.json(await getContactLead(req.params.id));
  }),
);

contactLeadRouter.patch(
  "/:id",
  requireAuth,
  validateBody(UpdateContactLeadSchema),
  asyncHandler(async (req, res) => {
    res.json(await updateContactLead(req.params.id, req.body));
  }),
);

contactLeadRouter.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    await deleteContactLead(req.params.id);
    res.status(204).send();
  }),
);
