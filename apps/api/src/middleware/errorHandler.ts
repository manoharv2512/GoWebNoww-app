import type { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { Prisma } from "@prisma/client";
import { HttpError } from "../lib/httpError.js";
import { logger } from "../lib/logger.js";

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof SyntaxError && "body" in error) {
    res.status(400).json({ message: "Invalid JSON request body" });
    return;
  }

  if (error instanceof ZodError) {
    res.status(400).json({
      message: "Validation failed",
      issues: error.flatten(),
    });
    return;
  }

  if (error instanceof HttpError) {
    res.status(error.statusCode).json({
      message: error.message,
      details: error.details,
    });
    return;
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (["P1001", "P2021", "P2022"].includes(error.code)) {
      res.status(503).json({
        message:
          "Database is not ready. Start PostgreSQL, check DATABASE_URL, then run migrations and seed.",
        code: error.code,
      });
      return;
    }

    res.status(400).json({
      message: "Database request failed",
      code: error.code,
    });
    return;
  }

  const maybePrismaError = error as { code?: string; name?: string };

  if (
    error instanceof Prisma.PrismaClientInitializationError ||
    maybePrismaError.name === "PrismaClientInitializationError" ||
    maybePrismaError.code === "P1001"
  ) {
    res.status(503).json({
      message:
        "Database is unavailable. Start PostgreSQL, check DATABASE_URL, then run migrations and seed.",
    });
    return;
  }

  logger.error(error);
  res.status(500).json({ message: "Internal server error" });
};
