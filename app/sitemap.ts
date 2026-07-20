import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://westernredcedarshingles.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/product`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/western-red-cedar`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/installation-guide`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/project-ideas`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/cedar-accent-wall-diy`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/cedar-shed-siding`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/cedar-shingles-faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/cedar-vs-composite`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/store-locator`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
