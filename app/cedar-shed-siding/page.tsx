import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, HOWTO_PDF, SITE_URL } from "@/lib/site";
import shedAsset from "@/assets/western-red-cedar-shed-siding.png.asset.json";

const heroImg = shedAsset.url;

const TITLE = "Cedar Shed Siding — How to Install Cedar Shingles";
const DESC =
  "Complete guide to siding a shed with Western Red Cedar Shingles. Natural, untreated, rot-resistant — available at Lowe's. DIY and contractor tips.";

const STEPS = [
  {
    n: "Step 1 — Install building paper",
    t: "Staple a layer of 15 lb. felt paper or house wrap over the shed sheathing from bottom to top, overlapping each course by 6 inches. This is your moisture barrier.",
  },
  {
    n: "Step 2 — Set your first course double",
    t: "The bottom course always gets doubled — two layers of shingles stacked. This kicks the first visible course out at the correct angle and seals the bottom edge.",
  },
  {
    n: "Step 3 — Establish exposure and snap lines",
    t: "Standard exposure for undercourse shingles is 5 inches. Snap a chalk line every 5 inches up the wall. These lines are your guides for each course.",
  },
  {
    n: "Step 4 — Nail each course",
    t: "Place shingles 1/8\" apart along the chalk line. Drive two corrosion-resistant nails per shingle, 1\" above the exposure line. Never nail below the line — you'll split the course below.",
  },
  {
    n: "Step 5 — Stagger joints",
    t: "Offset each course so vertical seams never line up over two consecutive courses. Minimum 1.5\" offset. This is structural as well as aesthetic.",
  },
  {
    n: "Step 6 — Handle corners",
    t: "For outside corners, alternate which side overlaps — shingle A overlaps B on the first course, B overlaps A on the second. This creates a woven corner that sheds water cleanly. Or use corner boards for a cleaner finished look.",
  },
  {
    n: "Step 7 — Finish and seal",
    t: "Cedar can be left raw to weather naturally, stained, or sealed with a clear cedar oil. Do not paint — it traps moisture and defeats the purpose of natural cedar.",
  },
];

export const metadata: Metadata = pageMeta({
  title: TITLE,
  description: DESC,
  path: "/cedar-shed-siding",
  image: `${SITE_URL}${heroImg}`,
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Installation Guide", item: `${SITE_URL}/installation-guide` },
        { "@type": "ListItem", position: 3, name: "Cedar Shed Siding", item: `${SITE_URL}/cedar-shed-siding` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Side a Shed with Cedar Shingles",
      description: DESC,
      supply: [
        { "@type": "HowToSupply", name: "Cedar shingles — Lowe's Item #3976" },
        { "@type": "HowToSupply", name: "Corrosion-resistant ring-shank nails (1.5\" or 2\")" },
        { "@type": "HowToSupply", name: "Building paper or house wrap" },
      ],
      tool: [
        { "@type": "HowToTool", name: "Chalk line and level" },
        { "@type": "HowToTool", name: "Speed square" },
        { "@type": "HowToTool", name: "Circular saw or miter saw" },
        { "@type": "HowToTool", name: "Tape measure" },
        { "@type": "HowToTool", name: "Ladder" },
      ],
      step: STEPS.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.n,
        text: s.t,
      })),
    },
  ],
});

export default function CedarShedSidingPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Installation Guide", path: "/installation-guide" },
            { name: "Cedar Shed Siding" },
          ]}
        />
      </div>

      <section className="mx-auto max-w-4xl px-4 pt-10 pb-8 sm:px-6">
        <p className="font-ui text-sm font-semibold uppercase tracking-[0.2em] text-highlight">
          DIY guide
        </p>
        <h1 className="font-display mt-3 text-4xl font-bold text-primary sm:text-5xl">
          How to Side a Shed with Cedar Shingles — The Complete Guide
        </h1>
        <p className="font-body mt-5 text-lg text-foreground/80">
          Cedar shingles are one of the most durable and cost-effective siding options for backyard
          sheds, storage buildings, and outbuildings. Natural Western Red Cedar resists rot and
          insects without any chemical treatment — the wood's own oils do the work. This guide
          covers everything from calculating materials to nailing your final course.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-8 sm:px-6">
        <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <img
            src={heroImg}
            alt="Backyard shed sided with Western Red Cedar shingles"
            width={1600}
            height={900}
            loading="eager"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <section className="mt-10">
          <h2 className="font-display text-3xl font-semibold text-primary">
            Why Cedar Shingles Are Ideal for Shed Siding
          </h2>
          <p className="font-body mt-4 text-foreground/85">
            Pressure-treated pine and fiber cement both require maintenance and painting. Cedar
            doesn't. Left natural, Western Red Cedar weathers to a handsome silver-gray and
            continues to resist moisture and insects for decades. At the #3/#4 undercourse grade
            price point, it's one of the most affordable natural siding options available — and
            unlike vinyl, it actually looks better as it ages.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-3xl font-semibold text-primary">
            How Much Cedar Do You Need?
          </h2>
          <p className="font-body mt-4 text-foreground/85">
            Measure the perimeter of your shed and multiply by wall height to get total square
            footage. Subtract windows and doors. Add 15% for waste and cuts. One bundle of Western
            Red Cedar Shingles (Lowe's Item #3976) covers approximately 25 square feet at a 5-inch
            weather exposure. A standard 10x12 shed with 8-foot walls needs roughly 18–22 bundles.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-3xl font-semibold text-primary">Tools Required</h2>
          <ul className="font-body mt-4 list-disc space-y-2 pl-6 text-foreground/85">
            <li>Cedar shingles — Lowe's Item #3976</li>
            <li>Corrosion-resistant ring-shank nails (1.5" or 2")</li>
            <li>Chalk line and level</li>
            <li>Speed square</li>
            <li>Circular saw or miter saw</li>
            <li>Tape measure</li>
            <li>Ladder</li>
            <li>Building paper or house wrap (recommended)</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-3xl font-semibold text-primary">
            Installing Cedar Shingles on a Shed — Step by Step
          </h2>
          <div className="mt-6 space-y-6">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-primary">{s.n}</h3>
                <p className="font-body mt-2 text-foreground/85">{s.t}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-3xl font-semibold text-primary">
            Cedar Shed Siding Ideas
          </h2>
          <p className="font-body mt-4 text-foreground/85">
            Natural silver-gray weathered finish — low maintenance, classic look. Red cedar stain to
            preserve the warm tone. White-washed cedar for a Scandinavian farmhouse feel. Mix
            shingle widths for a hand-split texture. Pair cedar siding with black trim and a metal
            roof for a modern barn aesthetic.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-3xl font-semibold text-primary">Where to Buy</h2>
          <p className="font-body mt-4 text-foreground/85">
            Western Red Cedar Shingles are available exclusively at Lowe's in-store — Item #3976.
            One trip, ready to install.
          </p>
        </section>
      </article>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={HOWTO_PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui rounded-xl border-2 border-primary bg-card p-6 text-center font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Download Lowe's HowTo Manual (PDF) ↗
          </a>
          <div className="rounded-xl bg-primary p-6 text-center text-primary-foreground">
            <p className="font-body mb-3">Have what you need? Pick up Item #3976.</p>
            <LowesCTA variant="highlight">Buy at Lowe's</LowesCTA>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ready to start your shed?
          </h2>
          <p className="font-body mt-4 text-lg text-primary-foreground/90">
            Item #3976 at Lowe's — in-store only.
          </p>
          <div className="mt-6">
            <Link
              href="/store-locator"
              className="font-ui inline-flex items-center justify-center rounded-md bg-highlight px-7 py-4 text-base font-semibold text-highlight-foreground shadow-md transition-all hover:scale-[1.02] hover:bg-highlight/90 active:scale-[0.98]"
            >
              Find Your Nearest Lowe's
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
