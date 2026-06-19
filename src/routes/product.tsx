import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, jsonLdScript, breadcrumbLd, LOWES_URL, HOWTO_PDF, SITE_URL } from "@/lib/site";
import bundleAsset from "@/assets/product-bundle-cedar.jpg.asset.json";
const bundleImg = bundleAsset.url;
import { Check, FileDown } from "lucide-react";

const TITLE = "Western Red Cedar Shingles — Siding Bundle, #3/#4 Undercourse | Lowe's";
const DESC = "100% natural, untreated #3/#4 undercourse Western Red Cedar Shingles. Item #3976 at Lowe's, in-store only. Affordable, beautiful siding for contractors and DIYers — sheds, accent walls, pergolas, and more.";

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
            "100% natural, untreated #3/#4 undercourse Western Red Cedar shingles for siding, sheds, accent walls, and outdoor projects. Available exclusively at Lowe's.",
          brand: { "@type": "Brand", name: "Western Red Cedar Planks" },
          material: "Western Red Cedar (Thuja plicata)",
          sku: "3976",
          image: `${SITE_URL}${bundleImg}`,
          offers: {
            "@type": "Offer",
            url: "https://www.lowes.com/pd/Red-Cedar-Untreated-Wood-Siding-Shingles/3379244",
            priceCurrency: "USD",
            seller: { "@type": "Organization", name: "Lowe's" },
            availability: "https://schema.org/InStoreOnly",
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
  { t: "Affordable & Authentic Siding", d: "Real Western Red Cedar Shingles at a budget-friendly price — a pro-grade siding option that respects the project." },
  { t: "100% Natural & Sustainable", d: "Pure, organic Western Red Cedar — durable and eco-friendly." },
  { t: "Versatile & Cost-Effective", d: "Siding, accent walls, sheds, pergolas, and rustic designs without breaking the bank." },
  { t: "Pro Contractor Friendly", d: "An affordable, beautiful, and distinctive siding option general contractors and remodelers can offer their clients." },
  { t: "Inspired by Tradition", d: "Pacific Northwest Native American heritage." },
  { t: "Roofing", d: "Permitted on non-inhabited buildings only (sheds, dog houses, gazebos)." },
];

const APPLICATIONS = [
  "Siding", "Exterior Sidewalls", "Exterior Eaves", "Entry Way Highlights", "Storage Sheds",
  "Spa Coverings", "Gazebos", "Pergolas", "Neighborhood Forts", "Dog Houses",
  "Man Cave Walls", "Dining Room Walls", "Bedroom Walls", "Family Room Walls",
  "Office Walls", "Garden Stakes", "Builder's Shims",
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
            alt="Bundle of Western Red Cedar Shingles, #3/#4 undercourse grade"
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
            Western Red Cedar Shingles — Tree of Life Siding, Item #3976 at Lowe's
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {["100% Natural", "Untreated", "#3/#4 Undercourse Grade", "In-Store at Lowe's"].map((b) => (
              <span key={b} className="font-ui rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                {b}
              </span>
            ))}
          </div>
          <p className="font-body mt-6 text-lg text-foreground/80">
            Honest Western Red Cedar Shingles: rustic character, real Pacific Northwest cedar, and a price
            that respects the project. The affordable, beautiful, and distinctive siding option contractors
            and DIYers reach for — for siding, accent walls, sheds, pergolas, and outdoor structures.
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
          Why our #3/#4 Undercourse Western Red Cedar Shingles Are the Smart Choice
        </h2>
        <div className="font-body prose-cedar mt-6 space-y-5 text-lg text-foreground/85">
          <p>
            Utility-grade Western Red Cedar Shingles contain natural character marks, flat grain, and
            sapwood. We don't hide that — we lead with it.
          </p>
          <p>
            For interior accent walls, those features <strong>are</strong> the look. The variation in tone
            and grain produces a rustic warmth that pristine Number One Blue Label simply can't replicate at any
            price. For sheds, gazebos, pergolas, and siding applications, our #3/#4 grade undercourse Western Red Cedar
            Shingles perform comparably to higher grades at a meaningfully lower cost — exactly what
            general contractors and pro remodelers need to offer clients an affordable, beautiful, and
            distinctive siding option.
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
            In-store only · Item #3976 · See our{" "}
            <Link to="/store-locator" className="font-semibold text-highlight underline-offset-4 hover:underline">Store Locator</Link>{" "}
            for the nearest Lowe's
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
