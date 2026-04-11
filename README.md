# GoWebNow

GoWebNow is now structured as an npm-workspaces monorepo. The current React/Vite website lives in `apps/web`, and the root package only coordinates workspace commands.

## Structure

- `apps/web` - main React, TypeScript, Vite app.
- `packages` - reserved for shared code that can be reused by future apps.

## Commands

Run these from the repository root:

```bash
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

The root scripts forward to `@gowebnow/web`, so contributors do not need to `cd` into the app for normal work.

## Deploy

The web app is configured for GitHub Pages at:

```text
https://manoharv2512.github.io/GoWebNoww-app
```

Deploy with:

```bash
npm run deploy
```

The deploy script builds the Vite app and publishes `apps/web/dist` through `gh-pages`.

## GitHub Push Checklist

If `git push` says everything is up to date but GitHub does not show your latest code, your changes are probably not committed yet:

```bash
git status
git add .
git commit -m "Organize project as monorepo"
git push origin main
```

If Git asks for credentials, use a GitHub personal access token or GitHub CLI authentication instead of your account password.
