import type { Metadata } from "next";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, SITE_URL, LOWES_UTM_URL } from "@/lib/site";
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

      {/* PRICING CALLOUT */}
      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
        <div className="rounded-xl border-2 border-highlight/50 bg-highlight/10 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-xl font-bold text-primary">
                Western Red Cedar Tree of Life Wood Shingle Siding
              </h2>
              <p className="font-ui mt-1 text-sm font-semibold text-foreground/70">
                Item #3976&nbsp;&nbsp;|&nbsp;&nbsp;Model #3976
              </p>
              <p className="font-display mt-3 text-3xl font-bold text-highlight">
                $50 <span className="text-lg font-semibold text-foreground/70">per bundle</span>
              </p>
              <p className="font-body mt-1 text-sm text-foreground/80">
                Available exclusively at Lowe's — in store only
              </p>
              <p className="font-body mt-2 text-sm text-foreground/80">
                One bundle covers 25 sq ft at 5.5" exposure &middot; 4 bundles cover 100 sq ft
              </p>
            </div>
            <div className="shrink-0">
              <LowesCTA size="lg" variant="highlight" href={LOWES_UTM_URL}>
                Buy at Lowe's
              </LowesCTA>
            </div>
          </div>
          <p className="font-ui mt-4 text-xs text-foreground/60">
            Price may vary by location. Call your local Lowe's lumber department with Item #3976 to
            confirm current pricing and availability before your trip.
          </p>
        </div>
      </section>

      <StoreLocatorClient />
    </SiteLayout>
  );
}
