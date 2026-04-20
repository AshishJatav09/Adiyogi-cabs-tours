# Adiyogi Tours

Next.js 16 marketing website for spiritual travel packages, destination pages, guides, gallery, and contact inquiries.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Standard folder structure

```text
src/
  app/
    (marketing)/        # Public website routes
    api/                # API route entrypoints only
    globals.css
    layout.tsx
    not-found.tsx
  backend/
    inquiries/          # Service, repository, validator
  features/
    site/
      components/       # UI building blocks for the website
      config/           # Brand, contact, constants, SEO config
      content/          # Static content/data for pages
      lib/              # Site helpers, SEO, WhatsApp
  shared/
    types/              # Shared types used by frontend + backend
public/                 # Static assets
storage/                # Local inquiry storage for development
```

## Conventions

- Keep `src/app` focused on routing only.
- Put reusable website code inside `src/features/site`.
- Keep business logic inside `src/backend`.
- Add new APIs in `src/app/api/.../route.ts` as thin handlers.
- Add new marketing pages inside `src/app/(marketing)`.
- Keep cross-layer types in `src/shared`.
- Keep persistent local development data inside `storage/`.

## Verification

```bash
npm run lint
npm run build
```
