import { Router } from "express";
import { asyncHandler } from "../../lib/asyncHandler.js";
import { validateBody } from "../../middleware/validate.js";
import { LoginSchema } from "./auth.schemas.js";
import { login } from "./auth.service.js";

export const authRouter = Router();

authRouter.post(
  "/login",
  validateBody(LoginSchema),
  asyncHandler(async (req, res) => {
    const result = await login(req.body.email, req.body.password);
    res.json(result);
  }),
);
