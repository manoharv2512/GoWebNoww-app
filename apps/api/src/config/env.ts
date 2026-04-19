import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "dotenv";
import { z } from "zod";

const currentDir = dirname(fileURLToPath(import.meta.url));
const apiRoot = resolve(currentDir, "../..");
const envPath = resolve(apiRoot, ".env");
const exampleEnvPath = resolve(apiRoot, ".env.example");

if (existsSync(envPath)) {
  config({ path: envPath });
} else if (process.env.NODE_ENV !== "production" && existsSync(exampleEnvPath)) {
  config({ path: exampleEnvPath });
}

const EnvSchema = z
  .object({
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    PORT: z.coerce.number().int().positive().default(4000),
    WEB_ORIGIN: z.string().url().default("http://localhost:5173"),
    DATABASE_URL: z.string().min(1),
    JWT_SECRET: z.string().min(32),
    ADMIN_EMAIL: z.string().email().default("admin@gowebnow.local"),
    ADMIN_PASSWORD: z.string().min(8).default("ChangeMe123!"),
  })
  .superRefine((value, context) => {
    if (
      value.NODE_ENV === "production" &&
      value.JWT_SECRET.includes("change-this")
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["JWT_SECRET"],
        message: "Set a strong production JWT_SECRET before deploying.",
      });
    }
  });

export const env = EnvSchema.parse(process.env);
