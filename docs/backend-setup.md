# GoWebNow Backend Setup Guide

This document explains the backend setup step by step so you can study, run, and deploy the project with confidence.

## 1. Monorepo Layout

The project is an npm-workspaces monorepo:

```text
apps/
  api/        Node.js, Express, TypeScript, Prisma backend
  web/        React, Vite frontend
packages/
  shared/     Shared DTO types and validation schemas
```

The root `package.json` runs commands across these workspaces.

## 2. Backend Stack

- Node.js + TypeScript for the API runtime.
- Express for HTTP routing.
- PostgreSQL for the database.
- Prisma for database schema, migrations, and type-safe queries.
- Zod for request validation and shared contracts.
- JWT for admin authentication.
- bcryptjs for password hashing.
- pino and pino-http for structured logs.
- helmet, cors, and express-rate-limit for basic API hardening.

## 3. Environment Files

Copy the examples before running locally:

```bash
copy apps\api\.env.example apps\api\.env
copy apps\web\.env.example apps\web\.env
```

Important backend variables:

```text
PORT=4000
WEB_ORIGIN=http://localhost:5173
DATABASE_URL=postgresql://gowebnow:gowebnow_password@localhost:5432/gowebnow?schema=public
JWT_SECRET=change-this-to-a-long-random-secret-at-least-32-characters
ADMIN_EMAIL=admin@gowebnow.local
ADMIN_PASSWORD=ChangeMe123!
```

For production, always replace `JWT_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD`.

## 4. Start PostgreSQL Locally

Docker Compose is included for local development:

```bash
docker compose up -d postgres
```

This starts PostgreSQL on port `5432` with the credentials from `docker-compose.yml`.

## 5. Install Dependencies

From the repository root:

```bash
npm install
```

## 6. Build Shared Types

The API and frontend both depend on `@gowebnow/shared`.

```bash
npm run build -w @gowebnow/shared
```

The shared package contains:

- `CreateContactLeadSchema`
- `UpdateContactLeadSchema`
- `ContactLead`
- `ContactLeadStatus`

## 7. Database Migration

Run Prisma migration after PostgreSQL is running:

```bash
npm run db:migrate
```

This creates the first database tables:

- `User`
- `ContactLead`

If Prisma Client needs to be regenerated manually, run:

```bash
npm run db:generate
```

For production servers, use:

```bash
npm run db:deploy
```

## 8. Seed Admin User

Create or update the first admin user:

```bash
npm run db:seed
```

The seed uses `ADMIN_EMAIL` and `ADMIN_PASSWORD` from `apps/api/.env`.

## 9. Run The Backend

```bash
npm run dev:api
```

The API runs at:

```text
http://localhost:4000
```

Health check:

```text
GET http://localhost:4000/health
```

## 10. Run The Frontend

In another terminal:

```bash
npm run dev:web
```

The frontend runs at:

```text
http://localhost:5173
```

The frontend reads `VITE_API_URL` from `apps/web/.env`.

## 11. First API: Contact Leads CRUD

Public endpoint:

```text
POST /api/contact-leads
```

Protected endpoints:

```text
GET /api/contact-leads
GET /api/contact-leads/:id
PATCH /api/contact-leads/:id
DELETE /api/contact-leads/:id
```

Protected endpoints require:

```text
Authorization: Bearer <token>
```

Login endpoint:

```text
POST /api/auth/login
```

Example login body:

```json
{
  "email": "admin@gowebnow.local",
  "password": "ChangeMe123!"
}
```

## 12. Frontend Integration

The existing `GetInTouch` form now sends public contact leads to:

```text
POST /api/contact-leads
```

The admin lead manager is available at:

```text
http://localhost:5173/admin/leads
```

Use the seeded admin credentials to log in, then update or delete leads.

## 13. Production Build

Build every workspace:

```bash
npm run build
```

This builds:

- shared package
- frontend app
- backend API

Frontend output:

```text
apps/web/dist
```

Backend output:

```text
apps/api/dist
```

## 14. Production Deployment Checklist

Before deploying the API:

- Set `NODE_ENV=production`.
- Set a strong `JWT_SECRET`.
- Set `DATABASE_URL` to your production PostgreSQL connection string.
- Set `WEB_ORIGIN` to your live frontend domain.
- Run `npm run db:deploy`.
- Run `npm run build`.
- Start the API with `npm run start -w @gowebnow/api`.
- Put the API behind HTTPS using your hosting provider, Nginx, or a platform reverse proxy.
- Do not commit real `.env` files.

Before uploading the frontend to Hostinger:

- Set `VITE_API_URL` to the live API URL.
- Run `npm run build:web`.
- Upload the contents of `apps/web/dist`.

## 15. File Map

Backend entry points:

```text
apps/api/src/server.ts
apps/api/src/app.ts
```

Environment validation:

```text
apps/api/src/config/env.ts
```

Auth:

```text
apps/api/src/features/auth
```

Contact leads CRUD:

```text
apps/api/src/features/contactLeads
```

Prisma schema:

```text
apps/api/prisma/schema.prisma
```

Shared contracts:

```text
packages/shared/src/contactLead.ts
```

Frontend API client:

```text
apps/web/src/lib/api.ts
```

Admin UI:

```text
apps/web/src/Pages/AdminLeads/index.tsx
```

## 16. Common Problems

If Prisma says it cannot connect, confirm PostgreSQL is running:

```bash
docker compose ps
```

If the frontend cannot call the API, check:

- `apps/web/.env` has `VITE_API_URL=http://localhost:4000`.
- `apps/api/.env` has `WEB_ORIGIN=http://localhost:5173`.
- The API terminal is running.

If protected API calls return `401`, log in again at `/admin/leads`.

## 17. Admin Login Troubleshooting

If `/admin/leads` login fails, check the exact message:

```text
Cannot reach API at http://localhost:4000
```

The backend is not running. Start it:

```bash
npm run dev:api
```

```text
Database is unavailable
```

PostgreSQL is not running or `DATABASE_URL` is wrong. Start PostgreSQL first.

With Docker:

```bash
docker compose up -d postgres
```

If Docker is not installed, install Docker Desktop or install PostgreSQL locally and update `apps/api/.env`.

```text
Invalid email or password
```

The admin user does not exist yet, or the password does not match. Run:

```bash
npm run db:migrate
npm run db:seed
```

Default local credentials from `apps/api/.env.example`:

```text
Email: admin@gowebnow.local
Password: ChangeMe123!
```

Do not use these defaults in production.
