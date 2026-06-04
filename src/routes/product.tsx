import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, jsonLdScript, breadcrumbLd, LOWES_URL, HOWTO_PDF, SITE_URL } from "@/lib/site";
import bundleAsset from "@/assets/product-bundle-cedar.jpg.asset.json";
const bundleImg = bundleAsset.url;
import { Check, FileDown, Truck, RotateCcw, ShieldCheck } from "lucide-react";

const TITLE = "Western Red Cedar Shingle Kit — #3/#4 Undercourse Grade | Buy at Lowe's";
const DESC = "100% natural, untreated #3/#4 undercourse Western Red Cedar shingles. Item #3976 at Lowe's. Free shipping over $45. Perfect for DIY accent walls, sheds, pergolas, and cedar plank grilling.";

export const Route = createFileRoute("/product")({
  head: () => {
    const m = pageMeta({
      title: TITLE,
      description: DESC,
      path: "/product",
      ogType: "product",
      image: `${SITE_URL}${bundleImg}`,
    });
    return {
      ...m,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Western Red Cedar Tree of Life Wood Shingle Siding",
          description:
            "100% natural, untreated #3/#4 undercourse Western Red Cedar shingles for DIY siding, interior accent walls, outdoor structures, and cedar plank grilling. Available exclusively at Lowe's.",
          brand: { "@type": "Brand", name: "Western Red Cedar Planks" },
          material: "Western Red Cedar (Thuja plicata)",
          sku: "3976",
          mpn: "3976",
          image: `${SITE_URL}${bundleImg}`,
          offers: {
            "@type": "Offer",
            url: LOWES_URL,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            seller: { "@type": "Organization", name: "Lowe's" },
            shippingDetails: {
              "@type": "OfferShippingDetails",
              shippingRate: { "@type": "MonetaryAmount", value: "0", currency: "USD" },
            },
          },
        }),
        jsonLdScript(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Product", path: "/product" },
          ]),
        ),
      ],
    };
  },
  component: ProductPage,
});

const HIGHLIGHTS = [
  { t: "Affordable & Authentic", d: "Western Red Cedar siding shingles at a budget-friendly price." },
  { t: "100% Natural & Sustainable", d: "Pure, organic cedar — durable and eco-friendly." },
  { t: "Versatile & Cost-Effective", d: "DIY projects, siding, and rustic designs without breaking the bank." },
  { t: "BBQ-Ready Grilling Planks", d: "Enhances flavors of salmon, brats, vegetables, and more." },
  { t: "Inspired by Tradition", d: "Pacific Northwest Native American heritage." },
  { t: "Roofing", d: "Permitted on non-inhabited buildings only (sheds, dog houses, gazebos)." },
];

const APPLICATIONS = [
  "Exterior Sidewalls", "Exterior Eaves", "Entry Way Highlights", "Storage Sheds",
  "Spa Coverings", "Gazebos", "Pergolas", "Neighborhood Forts", "Dog Houses",
  "Man Cave Walls", "Dining Room Walls", "Bedroom Walls", "Family Room Walls",
  "Office Walls", "Garden Stakes", "Builder's Shims", "Grilling Planks",
];

function ProductPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Product" }]} />
      </div>

      {/* HERO */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pt-8 pb-16 sm:px-6 lg:grid-cols-2 lg:items-start lg:gap-14">
        <div className="overflow-hidden rounded-xl bg-secondary">
          <img
            src={bundleImg}
            alt="Bundle of Western Red Cedar #3/#4 undercourse wood shingles"
            width={1200}
            height={1200}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
            Item #3976 · Model #3976
          </p>
          <h1 className="font-display mt-3 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Western Red Cedar Tree of Life Wood Shingle — Item #3976 at Lowe's
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {["100% Natural", "Untreated", "#3/#4 Undercourse Grade", "Available at Lowe's"].map((b) => (
              <span key={b} className="font-ui rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                {b}
              </span>
            ))}
          </div>
          <p className="font-body mt-6 text-lg text-foreground/80">
            The honest DIY cedar shingle: rustic character, real Pacific Northwest Western Red Cedar,
            and a price that respects the project. Use them for siding, accent walls, outdoor
            structures, or food-safe grilling planks.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <LowesCTA size="lg">Buy at Lowe's</LowesCTA>
            <a
              href={HOWTO_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary px-7 py-4 text-base font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <FileDown className="h-4 w-4" /> HowTo Manual (PDF)
            </a>
          </div>
          <div className="font-ui mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6 text-sm">
            <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-accent" /> Free ship $45+</div>
            <div className="flex items-center gap-2"><RotateCcw className="h-4 w-4 text-accent" /> Free returns</div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> Lowe's price guarantee</div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Product highlights</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <div key={h.t} className="flex gap-4 rounded-lg border border-border bg-card p-5 shadow-sm">
                <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <div className="font-display text-lg font-semibold text-primary">{h.t}</div>
                  <p className="font-body mt-1 text-foreground/80">{h.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GRADE TRANSPARENCY */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
          Why #3/#4 Undercourse Grade Is the Smart Choice for DIY
        </h2>
        <div className="font-body prose-cedar mt-6 space-y-5 text-lg text-foreground/85">
          <p>
            Utility-grade shingles contain natural character marks, flat grain, and sapwood. We don't
            hide that — we lead with it.
          </p>
          <p>
            For interior accent walls, those features <strong>are</strong> the look. The variation in tone
            and grain produces a rustic warmth that pristine #1 Certigrade can't replicate at any price.
            For grilling planks, the grade is irrelevant — it's going on the fire. For sheds, gazebos, and
            pergolas, undercourse shingles perform identically to higher grades at a meaningfully lower
            cost.
          </p>
          <p>
            This is the same grade used as the <strong>undercourse layer</strong> in double-course wall
            installation, and as <strong>starter rows</strong> in single-course applications. It's a real
            building product — not a discount remainder.
          </p>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Applications</h2>
          <ul className="font-ui mt-8 grid grid-cols-2 gap-3 text-sm sm:grid-cols-3 lg:grid-cols-4">
            {APPLICATIONS.map((a) => (
              <li key={a} className="flex items-center gap-2 rounded-md bg-card px-3 py-2 shadow-sm">
                <Check className="h-4 w-4 text-accent" /> {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PURCHASE + DOWNLOADS */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <div className="rounded-2xl bg-primary p-10 text-center text-primary-foreground shadow-lg">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Available exclusively at Lowe's</h2>
          <p className="font-body mt-3 text-lg text-primary-foreground/90">
            Free shipping over $45 · Free returns · Best price guarantee
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LowesCTA size="lg" variant="highlight">Buy at Lowe's</LowesCTA>
            <a
              href={HOWTO_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui inline-flex items-center gap-2 rounded-md border-2 border-primary-foreground/40 px-7 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              <FileDown className="h-4 w-4" /> Download HowTo PDF
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
