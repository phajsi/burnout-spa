# burnout-spa

Welcome to this spa for my own personal project's collections!

## Getting Started

Installing dependecies:

```
pnpm install
```

Starting the App:

```
pnpm start
```

## Tooling

- Bundler/Dev server: Vite
- Styling: Tailwind CSS v4 (@tailwindcss/postcss)
- Testing: Vitest + @testing-library/react + jest-dom

## Tailwind CSS v4

Global import lives in `src/index.css`:

```css
@import "tailwindcss";
```

Configuration: `tailwind.config.js` (content globs include `index.html` and all files in `src/`).

Custom theme example (`brand.teal`) used in `App.tsx`:

```tsx
<div className="min-h-screen bg-brand-teal/95 text-white">...</div>
```

If utilities don’t appear, ensure dev server was restarted after dependency install.

## Testing

Run unit & smoke tests:

```
pnpm test
```

Open interactive UI:

```
pnpm run test:ui
```

### Smoke / Integrity Tests

- `src/__tests__/app.smoke.test.tsx` renders the app and asserts Tailwind class presence.
- `src/__tests__/imports.test.ts` dynamically imports pages/components to catch bundling issues early.

## Build Verification

Standard production build:

```
pnpm run build
```

Extra verification (ensures assets emitted):

```
pnpm run build:check
```

`scripts/check-build.cjs` asserts `build/` exists, contains `index.html`, and at least one JS file.

Combined build + verify (CI friendly):

```
pnpm run test:build
```

## Node & Package Managers

Project expects Node >= 22.19.0 (see `.nvmrc` / `.node-version`). Using `fnm`:

```
fnm use 22.19.0
```

## Suggested Next Steps

- Add ESLint + Prettier config
- Add dark mode toggle (`dark:` variant)
- Add accessibility tests (axe-core integration)
- Add CI workflow (GitHub Actions) running: type check, test, build:check
