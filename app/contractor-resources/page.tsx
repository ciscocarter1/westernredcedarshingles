import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { BundleCalculator } from "@/components/BundleCalculator";
import { pageMeta, SITE_URL } from "@/lib/site";

const TITLE = "Contractor Resources — Western Red Cedar Shingles for Siding Projects";
const DESC = "Spec sheet, bulk ordering info, installation reference, and client-facing talking points for contractors and remodelers using Western Red Cedar Shingles from Lowe's.";

export const metadata: Metadata = pageMeta({
  title: TITLE,
  description: DESC,
  path: "/contractor-resources",
  jsonLd: [
    { "@context": "https://schema.org", "@type": "Service", name: "Western Red Cedar Shingles Contractor Resources", description: DESC, provider: { "@type": "Organization", name: "Western Red Cedar Shingles" }, areaServed: "US" },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` }, { "@type": "ListItem", position: 2, name: "Contractor Resources", item: `${SITE_URL}/contractor-resources` }] },
  ],
});

const SPECS = [
  ["Grade", "#3/#4 undercourse (utility grade)"],
  ["Coverage", "15 sq ft per bundle at 7.5 inch exposure"],
  ["Fasteners", "Type 304 or 316 stainless-steel ring-shank nails for exterior installs"],
  ["Item number", "#3976 / Model #3976"],
  ["Retail price", "$50 per bundle"],
  ["Available", "Lowe's in-store only, no minimum order"],
];

export default function ContractorResourcesPage() {
  return <SiteLayout>
    <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6"><Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contractor Resources" }]} /></div>
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6"><p className="font-ui text-sm font-semibold uppercase text-highlight">For pros</p><h1 className="font-display mt-3 text-4xl font-bold text-primary sm:text-5xl">Contractor Resources</h1><p className="font-body mt-5 text-lg text-foreground/80">Real cedar character at a price that keeps bids competitive. Here is what you need to spec, order, and install Western Red Cedar Shingles on a client project.</p></section>
    <section className="bg-secondary py-16"><div className="mx-auto max-w-4xl px-4 sm:px-6"><h2 className="font-display text-3xl font-bold text-primary">Why Contractors Choose This Product</h2><p className="font-body mt-4 text-lg text-foreground/85">Our #3/#4 grade delivers the look clients want: real cedar, natural knots and grain, at a price point premium grades cannot match. It is an easy upsell on sheds, privacy screens, and accent walls, and a distinctive, affordable siding alternative on full exteriors.</p></div></section>
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6"><h2 className="font-display text-3xl font-bold text-primary">Bulk Ordering and Pro Desk</h2><p className="font-body mt-4 text-lg text-foreground/85">Western Red Cedar Shingles are available in bulk through the Pro Desk at any stocking Lowe's location. The Pro Desk can also special order at non-stocking stores. Use our Store Locator to find your nearest Lowe's.</p><Link href="/store-locator" className="font-ui mt-5 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">Find a Stocking Location</Link></section>
    <section className="bg-secondary py-16"><div className="mx-auto max-w-4xl px-4 sm:px-6"><h2 className="font-display text-3xl font-bold text-primary">Spec Sheet</h2><dl className="mt-7 overflow-hidden rounded-lg border border-border bg-card">{SPECS.map(([term, value]) => <div key={term} className="grid border-b border-border p-4 last:border-0 sm:grid-cols-[180px_1fr]"><dt className="font-ui font-semibold text-primary">{term}</dt><dd className="font-body text-foreground/80">{value}</dd></div>)}</dl><p className="font-body mt-6 text-foreground/80">Need a spec sheet to attach to an estimate? Download our one-page PDF spec sheet.</p><a href="/images/wrc-spec-sheet.pdf" download className="font-ui mt-4 inline-flex rounded-md border-2 border-primary px-5 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">Download PDF spec sheet</a><div className="mt-10"><BundleCalculator /></div></div></section>
    <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6"><h2 className="font-display text-3xl font-bold text-primary">Installation Reference</h2><p className="font-body mt-4 text-lg text-foreground/85">For full installation instructions including single-course and double-course methods, nail patterns, corner finishing, and sealing options:</p><Link href="/installation-guide" className="font-ui mt-5 inline-block font-semibold text-accent hover:underline">View the Installation Guide →</Link></section>
    <section className="bg-primary py-16 text-primary-foreground"><div className="mx-auto max-w-4xl px-4 sm:px-6"><h2 className="font-display text-3xl font-bold">Questions</h2><p className="font-body mt-4 text-lg text-primary-foreground/85">Questions on volume pricing or availability? Ask your local Lowe's pro desk directly.</p><Link href="/store-locator" className="font-ui mt-5 inline-flex rounded-md bg-highlight px-5 py-3 text-sm font-semibold text-highlight-foreground">Find your nearest pro desk</Link></div></section>
  </SiteLayout>;
}