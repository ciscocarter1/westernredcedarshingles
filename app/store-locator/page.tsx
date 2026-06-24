import type { Metadata } from "next";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { pageMeta, SITE_URL } from "@/lib/site";
import StoreLocatorClient from "./StoreLocatorClient";

const TITLE = "Find a Lowe's Near You — Cedar Shingles Store Locator";
const DESC =
  "Search 350+ Lowe's locations that carry Western Red Cedar Tree of Life shingles (Item #3976). Filter by state or search by city to find a store near you.";

export const metadata: Metadata = pageMeta({
  title: TITLE,
  description: DESC,
  path: "/store-locator",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Find a Store", item: `${SITE_URL}/store-locator` },
      ],
    },
  ],
});

export default function StoreLocatorPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Find a Store" }]} />
      </div>

      {/* HERO */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
            Cedar Shingle Store Locator
          </p>
          <h1 className="font-display mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Find a Lowe's Near You
          </h1>
          <p className="font-body mt-4 text-lg text-primary-foreground/90">
            Western Red Cedar Tree of Life shingles (Item #3976) are stocked at
            350+ Lowe's locations across the United States. Search by city, state,
            or store number.
          </p>
        </div>
      </section>

      <StoreLocatorClient />
    </SiteLayout>
  );
}
