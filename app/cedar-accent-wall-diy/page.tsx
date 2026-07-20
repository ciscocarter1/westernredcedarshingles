import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, SITE_URL } from "@/lib/site";
import accentAsset from "@/assets/indoor-sides-accent-wall.png.asset.json";

const heroImg = accentAsset.url;

const TITLE = "Cedar Accent Wall DIY — How to Install Wood Shingles";
const DESC =
  "Step-by-step guide to building a cedar shingle accent wall. Natural Western Red Cedar from Lowe's adds warmth and texture to any room in a weekend.";

export const metadata: Metadata = pageMeta({
  title: TITLE,
  description: DESC,
  path: "/cedar-accent-wall-diy",
  image: `${SITE_URL}${heroImg}`,
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Project Ideas", item: `${SITE_URL}/project-ideas` },
        { "@type": "ListItem", position: 3, name: "Cedar Accent Wall DIY", item: `${SITE_URL}/cedar-accent-wall-diy` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Build a Cedar Accent Wall with Wood Shingles",
      description: DESC,
      supply: [
        { "@type": "HowToSupply", name: "Western Red Cedar Shingles (Lowe's Item #3976)" },
        { "@type": "HowToSupply", name: "Sandpaper (120 grit)" },
        { "@type": "HowToSupply", name: "Clear wood sealer or cedar oil (optional)" },
      ],
      tool: [
        { "@type": "HowToTool", name: "Tape measure and chalk line" },
        { "@type": "HowToTool", name: "Level" },
        { "@type": "HowToTool", name: "Finish nailer or staple gun" },
        { "@type": "HowToTool", name: "Safety glasses and gloves" },
      ],
      step: [
        { "@type": "HowToStep", name: "Measure and prep", text: "Measure wall height and width. Calculate square footage and add 10% for waste. One bundle covers approximately 25 sq ft at standard exposure." },
        { "@type": "HowToStep", name: "Mark your first course", text: "Snap a level chalk line 6 inches above the floor or baseboard as your baseline." },
        { "@type": "HowToStep", name: "Nail the first row", text: "Place shingles tight to the chalk line, 1/8\" apart, two nails per shingle 1\" above the exposure line." },
        { "@type": "HowToStep", name: "Offset each course", text: "Stagger joints by at least 1.5\" per course so no two vertical seams line up." },
        { "@type": "HowToStep", name: "Trim and finish", text: "Trim at corners with a miter saw, sand rough edges, and optionally apply cedar oil or clear sealer." },
      ],
    },
  ],
});

export default function CedarAccentWallDiyPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Project Ideas", path: "/project-ideas" },
            { name: "Cedar Accent Wall DIY" },
          ]}
        />
      </div>

      <section className="mx-auto max-w-4xl px-4 pt-10 pb-8 text-center sm:px-6">
        <p className="font-ui text-sm font-semibold uppercase tracking-[0.2em] text-highlight">
          DIY Guide
        </p>
        <h1 className="font-display mt-3 text-4xl font-bold text-primary sm:text-5xl">
          How to Build a Cedar Accent Wall with Wood Shingles
        </h1>
        <p className="font-body mx-auto mt-5 max-w-2xl text-lg text-foreground/80">
          A cedar shingle accent wall transforms any room in a weekend. Natural Western Red Cedar
          adds warmth, texture, and a rustic-modern edge that painted walls and vinyl panels simply
          cannot replicate. This guide walks you through everything — prep, layout, tools, and
          installation — using the same cedar shingles available at your local Lowe's.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-8 sm:px-6">
        <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <img
            src={heroImg}
            alt="Interior cedar shingle accent wall"
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
            Why Cedar Shingles Work Indoors
          </h2>
          <p className="font-body mt-4 text-foreground/85">
            Western Red Cedar's natural grain variation is a feature, not a flaw. The character
            marks, flat grain, and occasional knot that come with #3/#4 undercourse grade are
            exactly what give an interior accent wall its hand-crafted, organic look. Unlike
            reclaimed wood, it's consistent enough to install cleanly and affordable enough to
            cover a full wall without a contractor's budget.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-3xl font-semibold text-primary">What You'll Need</h2>
          <ul className="font-body mt-4 list-disc space-y-2 pl-6 text-foreground/85">
            <li>Western Red Cedar Shingles — Lowe's Item #3976</li>
            <li>Tape measure and chalk line</li>
            <li>Level</li>
            <li>Finish nailer or staple gun</li>
            <li>Sandpaper (120 grit)</li>
            <li>Clear wood sealer or cedar oil (optional)</li>
            <li>Safety glasses and gloves</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-3xl font-semibold text-primary">
            Step-by-Step: Cedar Shingle Accent Wall Installation
          </h2>
          <div className="mt-6 space-y-6">
            {[
              {
                n: "Step 1 — Measure and prep",
                t: "Measure wall height and width. Calculate square footage and add 10% for waste. One bundle of cedar shingles covers approximately 25 square feet at standard exposure.",
              },
              {
                n: "Step 2 — Mark your first course",
                t: "Use a level to snap a chalk line 6 inches above the floor or baseboard. This is your baseline. Starting level is the most important step — everything stacks on it.",
              },
              {
                n: "Step 3 — Nail the first row",
                t: "Place shingles tight to the chalk line, spacing them 1/8\" apart for natural expansion. Nail 1\" above the exposure line with two nails per shingle. Do not over-drive nails — cedar splits.",
              },
              {
                n: "Step 4 — Offset each course",
                t: "Stagger your joints by at least 1.5\" per course so no two vertical seams line up. This is what gives the wall its woven, layered look.",
              },
              {
                n: "Step 5 — Trim and finish",
                t: "Use a miter saw to trim shingles at corners and edges. Sand any rough edges. Apply cedar oil or a clear sealer if you want to preserve the natural color — or leave it raw and let it age to a silver-gray.",
              },
            ].map((s) => (
              <div key={s.n} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-primary">{s.n}</h3>
                <p className="font-body mt-2 text-foreground/85">{s.t}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-3xl font-semibold text-primary">
            Design Ideas for Cedar Accent Walls
          </h2>
          <p className="font-body mt-4 text-foreground/85">
            Full wall behind a bed headboard. Fireplace surround from floor to mantle. Dining room
            feature wall paired with warm Edison lighting. Half-wall wainscoting in an entryway or
            hallway. Man cave or home office backdrop. The natural color variation in undercourse
            grade cedar means no two walls look exactly alike.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-display text-3xl font-semibold text-primary">
            Where to Buy Cedar Shingles for Your Accent Wall
          </h2>
          <p className="font-body mt-4 text-foreground/85">
            Western Red Cedar Shingles are available exclusively at Lowe's in-store — Item #3976.
            Use our{" "}
            <Link
              href="/store-locator"
              className="font-semibold text-highlight underline-offset-4 hover:underline"
            >
              store locator
            </Link>{" "}
            to find the location nearest you.
          </p>
        </section>
      </article>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ready to start your accent wall?
          </h2>
          <p className="font-body mt-4 text-lg text-primary-foreground/90">
            Item #3976 at Lowe's — in-store only.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/store-locator"
              className="font-ui inline-flex items-center justify-center rounded-md bg-highlight px-7 py-4 text-base font-semibold text-highlight-foreground shadow-md transition-all hover:scale-[1.02] hover:bg-highlight/90 active:scale-[0.98]"
            >
              Find a Lowe's Near You
            </Link>
            <LowesCTA size="lg" variant="outline">
              Buy at Lowe's
            </LowesCTA>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
