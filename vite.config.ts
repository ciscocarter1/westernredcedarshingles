// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender every page route to static HTML at build time. crawlLinks follows
    // <Link>/<a> from these entry points to discover and prerender the rest.
    prerender: {
      enabled: true,
      crawlLinks: true,
      routes: [
        "/",
        "/product",
        "/western-red-cedar",
        "/installation-guide",
        // "/cedar-plank-grilling-guide", // temporarily excluded — SSR fetch failure during prerender
        "/project-ideas",
        "/cedar-shingles-faq",
        "/cedar-vs-composite",
        "/how-to",
        "/contact",
        "/store-locator",
      ],
    },
  },
});
