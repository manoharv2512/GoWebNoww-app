# GoWebNow

GoWebNow is structured as an npm-workspaces monorepo. The current React/Vite website lives in `apps/web`, and the root package coordinates workspace commands.

## Structure

- `apps/web` - main React, TypeScript, Vite app.
- `apps/api` - Node.js, Express, TypeScript, Prisma API.
- `packages` - reserved for shared code that can be reused by future apps.
- `packages/shared` - shared API validation schemas and DTO types.

## Commands

Run these from the repository root:

```bash
npm install
npm run dev
npm run dev:api
npm run build
npm run lint
npm run preview
```

The root scripts forward to `@gowebnow/web`, so you do not need to `cd` into the app for normal work.

## Local Development

Start the local dev server:

```bash
npm run dev
```

The homepage runs at:

```text
http://localhost:5173
```

The Vite `base` is `/`, which is the right setup for local development and for uploading the built files to the root of a Hostinger site.

## Manual Hosting

Build the app before uploading it:

```bash
npm run build
```

Then upload the contents of `apps/web/dist` to Hostinger. GitHub is used only for managing source code, not for live deployment.

## Backend

Backend setup, database setup, API structure, authentication, and deployment notes are documented in:

```text
docs/backend-setup.md
```

## GitHub Push Checklist

If `git push` says everything is up to date but GitHub does not show your latest code, your changes are probably not committed yet:

```bash
git status
git add .
git commit -m "Describe your change"
git push origin main
```

If Git asks for credentials, use a GitHub personal access token or GitHub CLI authentication instead of your account password.
