import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://westernredcedarshingles.com";

const ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/product", changefreq: "weekly", priority: "0.9" },
  { path: "/western-red-cedar", changefreq: "monthly", priority: "0.8" },
  { path: "/installation-guide", changefreq: "monthly", priority: "0.8" },
  { path: "/cedar-plank-grilling-guide", changefreq: "monthly", priority: "0.8" },
  { path: "/project-ideas", changefreq: "monthly", priority: "0.7" },
  { path: "/cedar-shingles-faq", changefreq: "monthly", priority: "0.7" },
  { path: "/cedar-vs-composite", changefreq: "monthly", priority: "0.6" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = ROUTES.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        ).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
