import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, jsonLdScript, breadcrumbLd } from "@/lib/site";
import { StoreLocatorSearch } from "@/components/StoreLocatorSearch";

const TITLE = "Find a Lowe's Near You — Cedar Shingles Store Locator";
const DESC = "Search 350+ Lowe's locations that carry Western Red Cedar Tree of Life shingles (Item #3976). Filter by state or search by city to find a store near you.";

export const Route = createFileRoute("/store-locator")({
  head: () => {
    const m = pageMeta({ title: TITLE, description: DESC, path: "/store-locator" });
    return {
      ...m,
      scripts: [
        jsonLdScript(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Find a Store", path: "/store-locator" },
          ]),
        ),
      ],
    };
  },
  component: StoreLocatorPage,
});

function StoreLocatorPage() {
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
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <div className="rounded-xl border border-highlight/40 bg-highlight/10 p-6">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Pricing
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold text-primary">
              Western Red Cedar Tree of Life Wood Shingle Siding
            </h2>
            <p className="font-body mt-1 text-foreground/80">
              Item #3976 | Model #3976
            </p>
            <p className="font-body mt-4 text-lg text-foreground/90">
              <strong>$50 per bundle</strong> — Available exclusively at Lowe's, in store only.
            </p>
            <p className="font-body mt-2 text-foreground/80">
              One bundle covers approximately 15 square feet at a 7.5 inch exposure.
            </p>
            <div className="mt-5">
              <LowesCTA
                size="lg"
                href="https://www.lowes.com/pd/Red-Cedar-Untreated-Wood-Siding-Shingles/3379244?utm_source=blog&utm_medium=referral&utm_campaign=cedar_tracking&utm_content=lowes_outbound_test"
              >
                Buy at Lowe's
              </LowesCTA>
            </div>
            <p className="font-body mt-4 text-xs text-muted-foreground">
              Price may vary by location. Call your local Lowe's lumber department with Item #3976 to confirm current pricing and availability before your trip.
            </p>
          </div>

        </div>
      </section>
      <section className="bg-card"><div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6"><h2 className="font-display text-2xl font-bold text-primary">Stocking locations at a glance</h2><div className="mt-4 aspect-[16/7] min-h-[320px] overflow-hidden rounded-lg border border-border bg-secondary"><iframe title="Western Red Cedar Shingles stocking locations" src="https://www.google.com/maps/d/embed?mid=1aX7lvBi1ChDWsgJ-InRpYYeVoIN2OQk" className="h-full w-full" loading="lazy" /></div></div></section>
      <StoreLocatorSearch />
    </SiteLayout>
  );
}
