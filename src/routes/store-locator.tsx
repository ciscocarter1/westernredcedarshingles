import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { LOWES_STORES } from "@/lib/lowes-stores";
import { pageMeta, jsonLdScript, breadcrumbLd, LOWES_UTM_URL } from "@/lib/site";
import { MapPin, Search, ExternalLink } from "lucide-react";

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
  const [query, setQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("ALL");

  const states = useMemo(() => {
    const map = new Map<string, string>();
    for (const s of LOWES_STORES) map.set(s.abbr, s.state);
    return Array.from(map.entries())
      .sort((a, b) => a[1].localeCompare(b[1]))
      .map(([abbr, state]) => ({ abbr, state }));
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return LOWES_STORES.filter((s) => {
      if (stateFilter !== "ALL" && s.abbr !== stateFilter) return false;
      if (!q) return true;
      return (
        s.name.toLowerCase().includes(q) ||
        s.state.toLowerCase().includes(q) ||
        s.abbr.toLowerCase() === q ||
        s.code.includes(q)
      );
    });
  }, [query, stateFilter]);

  const grouped = useMemo(() => {
    const g: Record<string, typeof filtered> = {};
    for (const s of filtered) {
      (g[s.state] ??= []).push(s);
    }
    return Object.entries(g).sort((a, b) => a[0].localeCompare(b[0]));
  }, [filtered]);

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

      {/* SEARCH CONTROLS */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <div className="grid gap-3 sm:grid-cols-[1fr_minmax(0,260px)]">
            <label className="relative block">
              <span className="sr-only">Search stores</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search city, state, or store number…"
                className="font-ui w-full rounded-md border border-border bg-background py-3 pl-10 pr-3 text-sm text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <label className="block">
              <span className="sr-only">Filter by state</span>
              <select
                value={stateFilter}
                onChange={(e) => setStateFilter(e.target.value)}
                className="font-ui w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="ALL">All states ({LOWES_STORES.length} stores)</option>
                {states.map((s) => (
                  <option key={s.abbr} value={s.abbr}>
                    {s.state}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <p className="font-ui mt-3 text-sm text-foreground/70">
            Showing <strong>{filtered.length}</strong> store{filtered.length === 1 ? "" : "s"}
            {stateFilter !== "ALL" && ` in ${states.find((s) => s.abbr === stateFilter)?.state}`}
            {query && ` matching "${query}"`}
          </p>
        </div>
      </section>

      {/* RESULTS */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-border bg-card p-10 text-center">
            <MapPin className="mx-auto h-10 w-10 text-foreground/40" />
            <p className="font-display mt-4 text-xl font-semibold text-primary">No stores found</p>
            <p className="font-body mt-2 text-foreground/70">
              Try a different city, state, or clear your search.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {grouped.map(([state, stores]) => (
              <div key={state}>
                <h2 className="font-display border-b border-border pb-2 text-2xl font-bold text-primary">
                  {state}{" "}
                  <span className="font-ui text-sm font-medium text-foreground/60">
                    ({stores.length})
                  </span>
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {stores.map((s) => (
                    <li
                      key={s.code}
                      className="rounded-lg border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                        <div className="min-w-0 flex-1">
                          <div className="font-display font-semibold text-foreground">
                            {s.name}
                          </div>
                          <div className="font-ui mt-1 text-xs text-foreground/60">
                            Store #{s.code}
                          </div>
                          <a
                            href={`https://www.lowes.com/store/${s.abbr}-${encodeURIComponent(
                              s.name.replace(/^Lowe's of /, "").replace(/,.*$/, "").trim(),
                            )}/${s.code}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-ui mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                          >
                            View on Lowes.com <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
