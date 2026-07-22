import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, jsonLdScript, breadcrumbLd, SITE_URL } from "@/lib/site";

const HERO = "/images/western-red-cedar-shed-siding.png";
const HERO_ABS = `${SITE_URL}${HERO}`;

const TITLE = "How to Side a Shed with Cedar Shingles — Step-by-Step Guide";
const DESC =
  "Learn how to side a shed with Western Red Cedar Shingles in 9 steps. Tools list, coverage calculator, nailing pattern, corner finishing, and pro tips. Available at Lowe's — Item #3976.";

const COVERAGE: { area: string; bundles: string }[] = [
  { area: "50 sq ft", bundles: "2 bundles" },
  { area: "100 sq ft", bundles: "4 bundles" },
  { area: "150 sq ft", bundles: "6 bundles" },
  { area: "200 sq ft", bundles: "9 bundles" },
  { area: "300 sq ft", bundles: "13 bundles" },
];

const MATERIALS = [
  "Western Red Cedar Shingles — Item #3976 at Lowe's",
  "15 lb or 30 lb felt building paper or house wrap",
  "Stainless steel or hot-dipped galvanized nails, 1.5 inch (never electro-galvanized)",
  "Cedar corner boards — 1x4 or 1x6, one pair per corner",
  "Starter strip or wood lath",
  "Exterior wood stain or water repellent (optional — for color preservation)",
];

const TOOLS = [
  "Chalk line and chalk",
  "Carpenter's level (4 ft or longer)",
  "Tape measure",
  "Circular saw or hand saw",
  "Hammer or pneumatic brad nailer",
  "Stapler or cap nailer for house wrap",
  "Utility knife",
  "Safety glasses and gloves",
];

const STEPS: { name: string; text: string; tip?: string }[] = [
  {
    name: "Install corner boards first",
    text: "Before touching a single shingle, nail cedar corner boards vertically at every exterior corner of the shed. Use cedar 1x4 or 1x6 boards cut to the full height of the wall. Corner boards give your shingles a clean, professional termination edge and protect the most vulnerable parts of the wall from water intrusion. Pre-prime or stain the boards on all four sides before installation, including the back face against the wall.",
    tip: "Install corner boards before house wrap if your design uses them as a water stop. If you are lacing corners (weaving shingles at the corner without a corner board), install house wrap first.",
  },
  {
    name: "Apply house wrap",
    text: "Staple 15 lb or 30 lb felt building paper or a vapor-permeable house wrap over the entire sheathing surface. Start at the bottom and work upward, overlapping horizontal seams by at least 2 inches so upper layers lap over lower layers — never the reverse. Seal the corners with an adhesive membrane strip extending 6 inches in each direction before stapling the main wrap.",
    tip: "House wrap is your primary moisture defense. Cedar is rot-resistant but the sheathing behind it is not. Never skip this layer on an exterior application.",
  },
  {
    name: "Install a starter strip",
    text: "Nail a beveled wood lath or purpose-made starter strip horizontally along the very bottom of the wall. This critical piece tips the first course of shingles outward at the same angle as every course above it, creating consistent water shedding from bottom to top. Level it carefully — any tilt here carries through the entire installation.",
    tip: "A perfectly level starter strip is worth taking extra time on. Use your 4 ft level and check both directions before nailing.",
  },
  {
    name: "Snap your first chalk line",
    text: "Measure up from the bottom of the wall to your chosen exposure — typically 5 to 7.5 inches for single-course shed siding. Snap a chalk line across the full width of the wall at that measurement. This line marks the bottom edge of your second course and becomes your reference point for every course above it.",
  },
  {
    name: "Install the first course",
    text: "Place your first course of shingles along the starter strip with butt edges aligned at the base. Leave a 1/8 inch gap between adjacent shingles — never butt them tight. Cedar expands with moisture and tight joints cause buckling and cupping over time. The butt ends should slightly overhang the starter strip to direct water away from the wall base.",
  },
  {
    name: "Nail each shingle correctly",
    text: "Drive two nails per shingle, positioned 3/4 inch from each edge and approximately 1 inch above the exposure line — the part of the shingle that will be covered by the next course. Nails must be placed above the exposure line so they are hidden by the course above. For shingles wider than 8 inches, drive a third nail in the center. Nails should sit flush with the surface of the shingle. Never countersink.",
    tip: "Use stainless steel Type 304 nails for most locations. Within 15 miles of salt water, use Type 316. Never use electro-galvanized nails — they corrode and stain the cedar within a few years.",
  },
  {
    name: "Work upward, staggering joints",
    text: "For each new course, snap a fresh chalk line at your exposure interval above the previous course butt line. Place shingles so that every vertical joint is offset at least 1.5 inches from the joint in the course directly below. Joints should not repeat in three consecutive courses — give them at least two clear courses before allowing a joint to fall in the same position again. Check level across the butt line every 3 to 4 courses.",
    tip: "Staggered joints are the difference between a professional result and a water problem. Take an extra 30 seconds per course to place your shingles before nailing.",
  },
  {
    name: "Finish the corners",
    text: "At outside corners you have two options. Corner board method: trim shingles flush against the face of the corner board and caulk the joint with paintable exterior caulk. Woven corner method: alternate which wall's shingles lap the corner course by course, trimming the overlapping shingle flush with a sharp utility knife or circular saw after nailing. The woven method looks more traditional and eliminates the caulk joint entirely.",
    tip: "The woven corner takes more time but produces a more authentic cedar shingle look and eliminates a long-term maintenance point.",
  },
  {
    name: "Seal or leave natural",
    text: "Western Red Cedar weathers naturally to a silver-gray patina over one to three years if left untreated. This is a beautiful and intentional outcome — many shed owners prefer it. If you want to preserve the original warm cedar-brown tone, apply an oil-based penetrating stain or water repellent within four to eight weeks of installation, before the wood begins to weather. Never apply paint or a film-forming finish — cedar shingles need to breathe. Apply finish when the wood moisture content is at or below the finish manufacturer's recommended level.",
    tip: "Apply finish to all four sides of the shingles before installation for the most complete protection — back, face, and both edges.",
  },
];

const MISTAKES = [
  "Nailing through the exposure zone. Nails placed below the coverage line will show and channel water directly into the wall. Always nail above the exposure line.",
  "Tight joints. Leave 1/8 inch between all shingles for expansion. Tight joints buckle.",
  "Skipping house wrap. Cedar is rot-resistant but the OSB sheathing behind it is not. House wrap is not optional on any exterior application.",
  "Using electro-galvanized nails. They corrode within a few years and leave dark staining streaks down the face of the shingles.",
  "Not staggering joints. Joints that line up across multiple courses allow water to track vertically into the wall. Offset every joint by at least 1.5 inches.",
  "Applying film-forming finish. Paint and polyurethane trap moisture. Use only oil-based penetrating stains or water repellents on cedar shingles.",
];

const RELATED = [
  { title: "Installation Guide", desc: "Full interior and exterior wall installation reference.", to: "/installation-guide" as const },
  { title: "Cedar Species Guide", desc: "What makes Western Red Cedar the right choice.", to: "/western-red-cedar" as const },
  { title: "Project Ideas", desc: "More ways to use Western Red Cedar Shingles.", to: "/project-ideas" as const },
];

export const Route = createFileRoute("/how-to-side-a-shed-with-cedar-shingles")({
  head: () => {
    const m = pageMeta({
      title: TITLE,
      description: DESC,
      path: "/how-to-side-a-shed-with-cedar-shingles",
      ogType: "article",
      image: HERO_ABS,
    });
    return {
      ...m,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Side a Shed with Western Red Cedar Shingles",
          description:
            "A step-by-step guide to installing Western Red Cedar Shingles on a backyard shed exterior using single-course or double-course methods.",
          image: HERO_ABS,
          estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "50-200" },
          supply: [
            "Western Red Cedar Shingles — Item #3976 at Lowe's",
            "15 lb or 30 lb felt building paper / house wrap",
            "Stainless steel or hot-dipped galvanized nails (1.5 inch)",
            "Corner boards (cedar 1x4 or 1x6)",
            "Exterior wood stain or sealant (optional)",
          ].map((n) => ({ "@type": "HowToSupply", name: n })),
          tool: [
            "Chalk line",
            "Carpenter's level",
            "Tape measure",
            "Circular saw or hand saw",
            "Hammer or pneumatic nailer",
            "Stapler or cap nailer for house wrap",
          ].map((n) => ({ "@type": "HowToTool", name: n })),
          step: STEPS.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.name,
            text: s.text,
          })),
        }),
        jsonLdScript(
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Project Ideas", path: "/project-ideas" },
            { name: "How to Side a Shed with Cedar Shingles", path: "/how-to-side-a-shed-with-cedar-shingles" },
          ]),
        ),
      ],
    };
  },
  component: ShedSidingPage,
});

function ShedSidingPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Project Ideas", path: "/project-ideas" },
            { name: "How to Side a Shed with Cedar Shingles" },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-8 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
          <img
            src={HERO}
            alt="Backyard shed sided with Western Red Cedar Shingles"
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pt-10 pb-8 sm:px-6">
        <p className="font-ui text-sm font-semibold uppercase tracking-[0.2em] text-highlight">DIY Project Guide</p>
        <h1 className="font-display mt-3 text-4xl font-bold text-primary sm:text-5xl">
          How to Side a Shed with Western Red Cedar Shingles
        </h1>
        <p className="font-body mt-5 text-lg text-foreground/80">
          Siding a backyard shed with Western Red Cedar Shingles is one of the most satisfying weekend builds
          available to a DIY homeowner or contractor. The material is lightweight, cuts with a standard circular
          saw, and nails without splitting. The result is a shed exterior with natural texture and character
          that no composite or vinyl siding can match. This guide covers everything — tools, bundle math,
          installation sequence, corner finishing, and sealing — using the same undercourse grade Western Red
          Cedar Shingles sold exclusively at Lowe's, Item #3976.
        </p>
      </section>

      {/* Coverage callout */}
      <section className="mx-auto max-w-4xl px-4 pb-4 sm:px-6">
        <div className="font-body rounded-xl border border-highlight/40 bg-highlight/10 p-6">
          <h2 className="font-display text-2xl font-semibold text-primary">
            Before You Start — How Many Bundles Do You Need?
          </h2>
          <p className="mt-3 text-foreground/85">
            Calculate your bundle count before purchasing. One bundle of Western Red Cedar Shingles covers
            approximately 25 square feet of wall at a 5.5 inch exposure. Use this formula:
          </p>
          <p className="mt-3 font-semibold text-primary">
            Total wall square footage ÷ 25 = bundles needed (round up, then add 10% for cuts)
          </p>

          <div className="mt-5 overflow-hidden rounded-lg border border-border bg-card">
            <table className="w-full text-left">
              <thead className="bg-secondary">
                <tr>
                  <th className="font-ui px-4 py-3 text-sm font-semibold text-foreground/80">Shed wall area</th>
                  <th className="font-ui px-4 py-3 text-sm font-semibold text-foreground/80">
                    Bundles needed (5.5" exposure)
                  </th>
                </tr>
              </thead>
              <tbody>
                {COVERAGE.map((row) => (
                  <tr key={row.area} className="border-t border-border">
                    <td className="px-4 py-3 text-foreground/85">{row.area}</td>
                    <td className="px-4 py-3 text-foreground/85">{row.bundles}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-foreground/85">
            Available exclusively at Lowe's — Item #3976. Find your store at our{" "}
            <Link to="/store-locator" className="font-semibold text-highlight underline-offset-4 hover:underline">
              Store Locator
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Materials & tools */}
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">What You Will Need</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-primary">Materials</h3>
            <ul className="font-body mt-3 list-disc space-y-2 pl-5 text-foreground/85">
              {MATERIALS.map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-primary">Tools</h3>
            <ul className="font-body mt-3 list-disc space-y-2 pl-5 text-foreground/85">
              {TOOLS.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-4xl px-4 pb-10 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">Step-by-Step Installation</h2>
        <ol className="mt-6 space-y-4">
          {STEPS.map((s, i) => (
            <li key={s.name} className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <div className="flex gap-5">
                <div className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-highlight text-lg font-bold text-highlight-foreground">
                  {i + 1}
                </div>
                <div>
                  <div className="font-display text-lg font-semibold text-primary">{s.name}</div>
                  <p className="font-body mt-1 text-foreground/85">{s.text}</p>
                  {s.tip ? (
                    <p className="font-body mt-3 italic text-emerald-700">Tip: {s.tip}</p>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Double course */}
      <section className="mx-auto max-w-4xl px-4 pb-10 sm:px-6">
        <div className="font-body rounded-xl border border-emerald-600/30 bg-emerald-50 p-6">
          <h2 className="font-display text-2xl font-semibold text-primary">Double-Course Method for More Coverage</h2>
          <p className="mt-3 text-foreground/85">
            If you want wider exposure, deeper shadow lines, and a bolder look, use the double-course method.
            Place a layer of undercourse shingles (your Western Red Cedar #3/#4 bundle works perfectly for this)
            as the base layer, then nail a finish course directly on top with the outer butt edge set 1/2 inch
            below the undercourse butt. This method allows exposures up to 12 inches, covers more wall per
            bundle in the outer course, and creates the dramatic horizontal texture common on Craftsman and
            coastal-style homes. Measure undercourse needs in linear running feet — one bundle yields
            approximately 32 running feet.
          </p>
        </div>
      </section>

      {/* Mistakes */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">Common Mistakes to Avoid</h2>
        <ul className="font-body mt-6 space-y-3">
          {MISTAKES.map((m) => (
            <li key={m} className="rounded-md border-l-4 border-highlight bg-card p-4 text-foreground/85 shadow-sm">
              {m}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to Start Your Shed Project?</h2>
          <p className="font-body mt-4 text-lg text-primary-foreground/90">
            Western Red Cedar Shingles are available exclusively at Lowe's — in-store only. Item #3976. Find
            your nearest location using our{" "}
            <Link to="/store-locator" className="font-semibold text-highlight underline-offset-4 hover:underline">
              Store Locator
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <LowesCTA size="lg" variant="highlight">Buy at Lowe's</LowesCTA>
            <Link
              to="/store-locator"
              className="font-ui inline-flex items-center justify-center gap-2 rounded-md border-2 border-primary-foreground/70 px-7 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Find a Store
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">Related Guides</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RELATED.map((r) => (
            <Link
              key={r.to}
              to={r.to}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-display text-xl font-semibold text-primary group-hover:text-highlight">
                {r.title}
              </h3>
              <p className="font-body mt-2 text-foreground/80">{r.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
