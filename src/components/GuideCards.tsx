"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { LOWES_UTM_URL } from "@/lib/site";

interface Article {
  label: string;
  title: string;
  excerpt: string;
  readTime: string;
  img: string;
  alt: string;
  cta: { text: string; href: string };
  cta2?: { text: string; href: string };
  body: ReactNode;
}

const ARTICLES: Article[] = [
  {
    label: "Contractor Guide",
    title: "A Builder's Guide to Budget-Friendly Cedar Siding",
    excerpt:
      "How contractors and DIYers across the US source affordable Western Red Cedar shingle siding at their local Lowe's. No shipping, no minimum order, no contractor account required.",
    readTime: "5 min read",
    img: "/images/western-red-cedar-shed-siding.png",
    alt: "Western Red Cedar shingle siding installed on a backyard shed exterior",
    cta: { text: "Find Your Nearest Lowe's", href: "/store-locator" },
    body: (
      <>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          What Makes Cedar Siding the Smart Budget Choice
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          When contractors and DIY builders compare cladding materials, the
          conversation usually lands on the same four options. Vinyl siding is
          cheap and fast but reads as plastic from ten feet away. Composite
          cladding looks better but costs significantly more per square foot.
          Engineered wood is solid but comes with finish and moisture
          limitations. And then there is natural wood siding, specifically
          Western Red Cedar shingles, which delivers a look and performance
          profile that none of the alternatives can replicate, at a price point
          most people do not expect.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Western Red Cedar is one of the most naturally durable softwoods
          available anywhere in North America. Its natural oils resist
          moisture, rot, and insects without any chemical treatment. Straight,
          even grain makes it easy to cut and nail. For a contractor pricing
          out a residential siding job or a DIYer planning a shed exterior,
          these are not premium features. They are baseline performance you are
          getting at undercourse grade pricing.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Why Undercourse Grade Is the Right Call for Budget Siding Projects
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          The Western Red Cedar shingles sold at Lowe's as Item #3976 are #3/#4
          undercourse grade. That grade designation is not a compromise. It is
          a specific product engineered for a specific purpose. Natural
          character marks, flat grain, and occasional knots are permitted and
          present at this grade. For exterior siding on sheds, pergolas,
          privacy screens, and residential accent areas, that variation is what
          gives the installation its genuine handcrafted quality.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          For any exterior application where the shingles will weather
          naturally or be stained, undercourse grade performs comparably to
          higher grades. The weather resistance comes from the wood species
          itself, not the grade. Western Red Cedar at any grade level carries
          the same natural oils and the same resistance to rot and insects.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Coverage and Pricing
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          One bundle covers approximately 25 square feet at a 5.5 inch
          exposure. Current retail price is $50 per bundle at participating
          Lowe's locations.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="font-ui w-full min-w-[320px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-primary">
                <th className="py-2 pr-4 font-semibold">Wall area</th>
                <th className="py-2 font-semibold">Bundles needed</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              {[
                ["50 sq ft", "2 bundles"],
                ["100 sq ft", "4 bundles"],
                ["200 sq ft", "9 bundles"],
                ["300 sq ft", "13 bundles"],
                ["500 sq ft", "21 bundles"],
              ].map(([a, b]) => (
                <tr key={a} className="border-b border-border/60">
                  <td className="py-2 pr-4">{a}</td>
                  <td className="py-2">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-body mt-4 text-foreground/80">
          For double-course applications measure in running feet. One bundle
          yields approximately 32 running feet as undercourse material.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          How to Find Cedar Shingles at Your Local Lowe's
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Item #3976 is available in-store at Lowe's locations nationwide. No
          online shipping. Call the lumber department with Item #3976 to
          confirm stock before your trip. Ask the pro desk about bulk
          availability for jobs requiring ten or more bundles.
        </p>
      </>
    ),
  },
  {
    label: "DIY Guide",
    title: "Common Cladding Materials — Why Cedar Shingles Win for Budget Builders",
    excerpt:
      "Vinyl, composite, engineered wood, or real cedar? A straight comparison of the most common wall cladding materials for DIYers and budget-conscious builders.",
    readTime: "4 min read",
    img: "/images/cedar-shingles-stack-wide.png",
    alt: "Close-up of Western Red Cedar shingle bundle showing natural wood grain and undercourse grade character",
    cta: { text: "View Cedar Shingle Grades", href: "/western-red-cedar" },
    body: (
      <>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          The Four Options Every Builder Compares
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Every exterior cladding project eventually comes down to the same
          decision. Natural wood, engineered wood, composite, or vinyl. Each
          has a legitimate use case. Here is a straight comparison so you can
          make the right call for your project and your budget.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Vinyl and Composite Siding
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Vinyl is the most affordable cladding option upfront and requires
          almost no maintenance. The trade-off is appearance. Vinyl reads as
          synthetic from any distance and cannot be stained, refinished, or
          repaired seamlessly. Composite options look better and hold up well
          but cost significantly more per square foot. Neither option has any
          natural material character.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Engineered Wood Siding
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Engineered wood products like LP SmartSide offer solid performance
          and a wood-like appearance at a lower price than natural wood. They
          require careful moisture management during installation and storage,
          and finish options are more limited than real cedar. Engineered wood
          is a strong choice for large-scale residential builds where
          consistency matters more than character.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Natural Wood: Lap Siding and Tongue-and-Groove
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Natural wood lap siding and tongue-and-groove boards deliver genuine
          material character that no synthetic alternative matches. The
          trade-off is cost. Clear-grade natural wood siding is priced at a
          significant premium over composite and vinyl options, which puts it
          out of reach for budget projects and outbuildings.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Western Red Cedar Shingles — The Budget-Friendly Natural Option
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Western Red Cedar shingles at undercourse grade pricing give you
          genuine natural wood performance and character at a cost that works
          for sheds, privacy screens, accent walls, and exterior cladding on
          non-primary structures. At $50 per bundle and approximately 25 square
          feet of coverage per bundle, material cost runs around $200 per 100
          square feet of wall. That is real cedar pricing that competes
          directly with engineered wood and mid-tier composite options.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          The natural oils in Western Red Cedar resist moisture, rot, and
          insects without any treatment. Left natural the wood weathers to a
          silver-gray patina. Stained or sealed it holds color longer than most
          softwoods. It cuts with a standard circular saw and nails without
          splitting. For DIYers and budget builders it is the easiest natural
          wood cladding product to work with on a first project.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          For DIYers and Budget Builders:
        </h3>
        <ul className="font-body mt-3 list-disc space-y-2 pl-6 text-foreground/80">
          <li>Natural weather resistance with no chemical treatment required</li>
          <li>Accepts any oil-based stain or can be left to weather naturally</li>
          <li>Cuts and nails with standard hand tools</li>
          <li>Available at Lowe's in-store with no minimum order — Item #3976</li>
          <li>$50 per bundle, approximately 4 bundles per 100 sq ft</li>
        </ul>
      </>
    ),
  },
];

function GuideCard({ article }: { article: (typeof ARTICLES)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group block w-full text-left"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={article.img}
            alt={article.alt}
            width={1024}
            height={640}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.15em] text-highlight">
            {article.label}
          </p>
          <h3 className="font-display mt-2 text-2xl font-semibold text-primary">
            {article.title}
          </h3>
          <p className="font-body mt-2 text-foreground/80">{article.excerpt}</p>
          <p className="font-ui mt-4 inline-flex items-center gap-2 text-sm font-semibold text-highlight">
            {open ? "Close article" : `Read article — ${article.readTime}`}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
              aria-hidden
            />
          </p>
        </div>
      </button>
      {open && (
        <div className="border-t border-border px-6 pb-6">
          {article.body}
          <div className="mt-6">
            <a
              href={article.cta.href}
              className="font-ui inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90"
            >
              {article.cta.text}
            </a>
          </div>
        </div>
      )}
    </article>
  );
}

export function GuideCards() {
  return (
    <div className="grid gap-7 sm:grid-cols-2">
      {ARTICLES.map((a) => (
        <GuideCard key={a.title} article={a} />
      ))}
    </div>
  );
}
