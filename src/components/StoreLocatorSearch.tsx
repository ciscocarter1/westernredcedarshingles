"use client";

import { useMemo, useState } from "react";
import { CITY_CENTROIDS, STORE_LOCATIONS, ZIP_CENTROIDS, type StoreLocation } from "@/lib/store-location-data";
import { ExternalLink, MapPin, Search } from "lucide-react";

const STATE_NAMES: Record<string, string> = Object.fromEntries(STORE_LOCATIONS.map((store) => [store.abbr, store.state]));
const normalize = (value: string) => value.trim().toLowerCase().replace(/[^a-z0-9]/g, "");

function distanceMiles(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const radians = (value: number) => value * Math.PI / 180;
  const dLat = radians(b.lat - a.lat);
  const dLng = radians(b.lng - a.lng);
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(radians(a.lat)) * Math.cos(radians(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 3958.8 * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

function locate(query: string) {
  const trimmed = query.trim();
  if (/^\d{5}$/.test(trimmed)) {
    const zip = ZIP_CENTROIDS.find(([code]) => code === trimmed);
    return zip ? { lat: zip[1], lng: zip[2], label: `${zip[3]}, ${zip[4]}` } : null;
  }
  const [cityPart, statePart = ""] = trimmed.split(",").map((part) => part.trim());
  const cityKey = normalize(cityPart);
  const stateKey = normalize(statePart);
  const city = CITY_CENTROIDS.find(([name, state]) => normalize(name) === cityKey && (!stateKey || normalize(state) === stateKey || normalize(STATE_NAMES[state] ?? "") === stateKey));
  return city ? { lat: city[2], lng: city[3], label: `${city[0]}, ${city[1]}` } : null;
}

function storeUrl(store: StoreLocation) {
  const slug = store.name.replace(/^Lowe's of /, "").replace(/,.*$/, "").trim().replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/g, "-");
  return `https://www.lowes.com/store/${store.abbr}-${slug}/${store.code}`;
}

export function StoreLocatorSearch() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [stateFilter, setStateFilter] = useState("ALL");
  const states = useMemo(() => Object.entries(STATE_NAMES).sort((a, b) => a[1].localeCompare(b[1])), []);
  const origin = useMemo(() => search ? locate(search) : null, [search]);
  const results = useMemo(() => {
    if (origin) {
      const ranked = STORE_LOCATIONS.map((store) => ({ ...store, distance: distanceMiles(origin, store) })).sort((a, b) => a.distance - b.distance);
      const withinRadius = ranked.filter((store) => store.distance <= 100);
      return withinRadius.length >= 3 ? withinRadius : ranked.slice(0, 3);
    }
    return STORE_LOCATIONS.filter((store) => stateFilter === "ALL" || store.abbr === stateFilter).map((store) => ({ ...store, distance: null }));
  }, [origin, stateFilter]);
  const noNearby = Boolean(origin && results[0]?.distance !== null && results[0].distance > 100);

  return (
    <>
      <section className="border-b border-border bg-card">
        <form onSubmit={(event) => { event.preventDefault(); setSearch(query.trim()); }} className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <div className="grid gap-3 sm:grid-cols-[1fr_auto_minmax(0,240px)]">
            <label className="relative block">
              <span className="sr-only">Search by city or ZIP code</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/50" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Enter city, state or ZIP code" className="font-ui w-full rounded-md border border-border bg-background py-3 pl-10 pr-3 text-sm text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
            </label>
            <button type="submit" className="font-ui rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">Find nearest stores</button>
            <label>
              <span className="sr-only">Browse by state</span>
              <select value={stateFilter} onChange={(event) => { setStateFilter(event.target.value); setSearch(""); setQuery(""); }} className="font-ui w-full rounded-md border border-border bg-background px-3 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
                <option value="ALL">Browse all states</option>
                {states.map(([abbr, state]) => <option key={abbr} value={abbr}>{state}</option>)}
              </select>
            </label>
          </div>
          {search && !origin ? <p className="font-ui mt-3 text-sm text-destructive">We could not locate “{search}.” Try a five-digit ZIP code or “City, State.”</p> : null}
          {origin ? <p className="font-ui mt-3 text-sm text-foreground/70">Nearest stocking locations to <strong>{origin.label}</strong>, sorted by distance.</p> : null}
        </form>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {noNearby && origin && results[0] ? (
          <div className="mb-8 rounded-xl border border-highlight/40 bg-highlight/10 p-6 font-body text-foreground/85">
            No stocking locations within 100 miles of {origin.label}. Nearest store: {results[0].city}, {results[0].abbr} — {Math.round(results[0].distance ?? 0)} miles away.
          </div>
        ) : null}
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((store) => (
            <li key={store.code} className="rounded-lg border border-border bg-card p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0 flex-1">
                  <div className="font-display font-semibold text-foreground">{store.name}</div>
                  <div className="font-ui mt-1 text-xs text-foreground/60">Store #{store.code}{store.distance !== null ? ` · ${store.distance.toFixed(1)} miles` : ""}</div>
                  <a href={storeUrl(store)} target="_blank" rel="noopener noreferrer" className="font-ui mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">View on Lowes.com <ExternalLink className="h-3 w-3" /></a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12 rounded-xl border border-border bg-muted p-6 text-center">
          <p className="font-body text-foreground/75">Don't see your city? We are actively working to expand our Lowe's footprint. Check back as new locations are added regularly.</p>
        </div>
      </section>
    </>
  );
}