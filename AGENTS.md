# Project Notes

- Legacy TanStack routes (src/routes/*) get social/canonical tags via `pageHead()` from `src/lib/site.ts`, never by spreading the Next-style `pageMeta()` object into `head()` — TanStack `head()` ignores non-descriptor keys, and `__root.tsx` must not define og:title/og:description/twitter:title/twitter:description/og:image defaults that duplicate or override leaf pages.
- `pageMeta()` (Next.js Metadata shape) is shared by the Next tree (`app/*`) and must keep its existing return shape; `socialTitle` shortens og/twitter titles below 60 chars while leaving the page `<title>` intact.
