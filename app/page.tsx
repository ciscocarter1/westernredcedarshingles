import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, USES, FAQS, LOWES_URL, SITE_URL } from "@/lib/site";
import heroAsset from "@/assets/western-red-cedar-shed-siding.png.asset.json";
import shedAsset from "@/assets/backyard-garden-shed.png.asset.json";
import accentAsset from "@/assets/dining-room-accent-wall.png.asset.json";
import manCaveAsset from "@/assets/man-cave-cedar.png.asset.json";
import textureAsset from "@/assets/cedar-shingles-stack-wide.png.asset.json";
import { Check, Hammer, Leaf, Ruler, ShieldCheck } from "lucide-react";
import { ProjectMeta } from "@/components/ProjectMeta";
import FaqRowClient from "./FaqRowClient";

const heroImg = heroAsset.url;
const shedImg = shedAsset.url;
const accentImg = accentAsset.url;
const manCaveImg = manCaveAsset.url;

const TITLE = "Western Red Cedar Shingles for Siding & DIY | Buy at Lowe's";
const DESC =
  "Shop natural, untreated Western Red Cedar Shingles at Lowe's — Item #3976. Affordable cedar siding for sheds, accent walls, pergolas, and more.";

export const metadata: Metadata = pageMeta({
  title: TITLE,
  description: DESC,
  path: "/",
  image: `${SITE_URL}${heroImg}`,
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Western Red Cedar Shingles",
      url: SITE_URL,
      description:
        "Maker of natural Western Red Cedar shingle bundles sold exclusively at Lowe's for siding, accent walls, outdoor structures, and DIY and contractor projects.",
      sameAs: ["https://www.lowes.com/pd/Red-Cedar-Untreated-Wood-Siding-Shingles/3379244"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
});

export default function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Natural Western Red Cedar shingles installed on a rustic shed exterior"
            width={1920}
            height={1280}
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/40" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
          <p className="font-ui mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-highlight">
            The Tree of Life — Pacific Northwest Heritage
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-bold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
            Real Western Red Cedar Shingles for Siding, Sheds &amp; Accent Walls
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg text-primary-foreground/90 sm:text-xl">
            100% Natural. Untreated. Available Exclusively at Lowe's.
          </p>
          <p className="font-body mt-4 max-w-2xl text-lg text-primary-foreground/90 sm:text-xl">
            Naturally rot- and insect-resistant, no chemical treatment. Just real cedar, milled in the Pacific Northwest.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <LowesCTA size="lg" variant="highlight">Buy at Lowe's — Item #3976</LowesCTA>
            <Link
              href="/store-locator"
              className="font-ui inline-flex items-center justify-center rounded-md bg-highlight px-7 py-4 text-base font-semibold text-highlight-foreground shadow-md transition-all hover:scale-[1.02] hover:bg-highlight/90"
            >
              Find a Store Near You
            </Link>
          </div>
          <p className="font-ui mt-3 text-sm text-primary-foreground/70">Availability varies by store. Check yours before you go.</p>
        </div>
      </section>

      <section className="border-b border-border bg-card py-8">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, text: "Naturally rot and insect resistant — no chemical treatment" },
            { icon: Leaf, text: "Weathers to natural silver-gray, or stain to hold color" },
            { icon: Hammer, text: "DIY-friendly — cuts clean, nails without splitting" },
            { icon: Ruler, text: "$50 per bundle, no minimum order" },
          ].map(({ icon: Icon, text }) => <div key={text} className="flex items-center gap-3"><Icon className="h-7 w-7 shrink-0 text-accent" /><p className="font-ui text-sm font-semibold text-foreground/80">{text}</p></div>)}
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-cedar py-10 text-cedar-foreground">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 text-center sm:grid-cols-3 sm:px-6">
          {[
            { n: "51 Years", l: "Lowe's Supplier Relationship" },
            { n: "500+", l: "Bundles Sold Per Week at Lowe's" },
            { n: "$50", l: "Per Bundle — No Minimum Order" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl font-bold text-highlight sm:text-4xl">{s.n}</div>
              <div className="font-ui mt-2 text-sm uppercase tracking-wider text-cedar-foreground/80">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-center text-3xl font-bold text-primary sm:text-4xl">Find Your Path</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-lg border border-border bg-card p-7 shadow-sm"><h3 className="font-display text-2xl font-semibold text-primary">Contractor / Remodeler</h3><p className="font-body mt-3 text-foreground/80">Need affordable, distinctive cedar for your next client project? Our #3/#4 grade shingles deliver character and warmth at a price that keeps your bids competitive.</p><Link href="/contractor-resources" className="font-ui mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">See Contractor Resources</Link></article>
          <article className="rounded-lg border border-border bg-card p-7 shadow-sm"><h3 className="font-display text-2xl font-semibold text-primary">DIY / Homeowner</h3><p className="font-body mt-3 text-foreground/80">Looking for an affordable, dramatic covering solution for an accent wall or shed siding? Our #3/#4 grade shingles offer style, character, and functionality at a budget-friendly price. Straightforward installation with basic tools.</p><Link href="/project-ideas" className="font-ui mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">See DIY Project Ideas</Link></article>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6"><h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Real cedar, honest grade, real savings</h2><p className="font-body mt-6 text-lg text-foreground/80">Our WRC Shingles feature knots, flat grain and a little sapwood which add depth and rustic charm to your project. Natural cedar offers many finishing options, from weathered silver-gray to whatever stain fits your project.</p><Link href="/product" className="font-ui mt-6 inline-block font-semibold text-accent hover:underline">See the full grade breakdown →</Link></div>
      </section>

      {/* USES GRID */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-center text-3xl font-bold text-primary sm:text-4xl">
            Eight ways pros and DIYers put it to work
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {USES.map((u) => (
              <div
                key={u.label}
                className="rounded-lg border border-border bg-card p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <img src={u.icon} alt={u.alt} width={96} height={96} loading="lazy" className="mx-auto h-20 w-20 object-contain" />
                <div className="font-ui mt-3 text-sm font-semibold text-foreground">{u.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRACTOR CALLOUT QUOTES */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="font-ui text-center text-sm font-semibold uppercase tracking-[0.2em] text-highlight">
            For Pro Contractors &amp; Remodelers
          </p>
          <div className="mt-8 space-y-6">
            <blockquote className="font-display border-l-4 border-accent bg-card px-6 py-5 text-lg italic text-foreground/90 shadow-sm sm:text-xl">
              "Offer your clients an affordable siding option created by Mother Nature, that has been used for thousands of years by the Native American Tribes of the beautiful Pacific Northwest."
            </blockquote>
            <blockquote className="font-display border-l-4 border-accent bg-card px-6 py-5 text-lg italic text-foreground/90 shadow-sm sm:text-xl">
              "This product will enable you to offer your clients a totally unique, durable, and cost-effective siding option."
            </blockquote>
            <blockquote className="font-display border-l-4 border-accent bg-card px-6 py-5 text-lg italic text-foreground/90 shadow-sm sm:text-xl">
              "This siding product is 100% organic, beautiful, durable, and cost-effective."
            </blockquote>
          </div>
        </div>
      </section>

      {/* TREE OF LIFE */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <p className="font-ui text-sm font-semibold uppercase tracking-[0.2em] text-highlight">
            Pacific Northwest heritage
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
            The Tree of Life
          </h2>
          <p className="font-body mx-auto mt-5 max-w-3xl text-lg text-primary-foreground/90">
            Western Red Cedar was the cornerstone of Pacific Northwest Native American culture for thousands of years: shelter, canoes, clothing, medicine, all from one tree. The same qualities that made it indispensable then (natural rot and insect resistance, straight-splitting grain, dimensional stability) are exactly why it still works on a modern jobsite today.
          </p>
          <Link href="/western-red-cedar" className="font-ui mt-6 inline-block font-semibold text-highlight hover:underline">Read the full story →</Link>
        </div>
      </section>

      {/* PROJECT IDEAS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Project inspiration</h2>
            <p className="font-body mt-2 text-foreground/70">Three practical starting points for your next cedar project.</p>
          </div>
          <Link href="/project-ideas" className="font-ui text-sm font-semibold text-accent hover:underline">
            See all ideas →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { img: shedImg, title: "Backyard Cedar Shed", desc: "Rustic, weather-friendly, build-yourself.", alt: "Backyard cedar shed clad in Western Red Cedar Shingles siding", w: 1024, h: 768, hash: "cedar-siding-budget-guide", details: { difficulty: "Intermediate", time: "1 to 2 weekends", tools: "circular saw, hammer or nail gun, level, chalk line, stainless-steel nails", bundles: "18 bundles for a 10 × 20 ft wall" } },
            { img: accentImg, title: "Dining-Room Accent Wall", desc: "Warm interior texture in a weekend.", alt: "Dining room accent wall built with cedar shingles DIY project", w: 1024, h: 768, hash: "interior-accent-walls", details: { difficulty: "Beginner", time: "1 weekend", tools: "level, chalk line, construction adhesive, brad nailer", bundles: "6 bundles for a 10 × 8 ft wall" } },
            { img: manCaveImg, title: "Man Cave Cedar Wall", desc: "Texture that pairs with leather, brass, warm light.", alt: "Man cave interior accent wall covered in Western Red Cedar Shingles", w: 1024, h: 768, hash: "interior-accent-walls", details: { difficulty: "Beginner", time: "1 weekend", tools: "level, chalk line, construction adhesive, brad nailer", bundles: "8 bundles for a 12 × 8 ft wall" } },
          ].map((p) => (
            <article
              key={p.title}
              className="group block overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={`/project-ideas#${p.hash}`} className="block aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="p-5">
                <Link href={`/project-ideas#${p.hash}`} className="font-display text-xl font-semibold text-primary hover:underline">{p.title}</Link>
                <p className="font-body mt-1 text-sm text-foreground/70">{p.desc}</p>
                <ProjectMeta details={p.details} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-center text-3xl font-bold text-primary sm:text-4xl">
            Quick answers
          </h2>
          <div className="mt-10 space-y-3">
            {FAQS.slice(0, 3).map((f, i) => (
              <FaqRowClient key={i} q={f.q} a={f.a} aHtml={f.aHtml} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/cedar-shingles-faq" className="font-ui font-semibold text-accent hover:underline">
              Read all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ready to Purchase?
          </h2>
          <p className="font-body mt-4 text-lg text-primary-foreground/90">
            Western Red Cedar Shingles are available exclusively at Lowe's, in-store only.
            Our Store Locator lists every stocking location so you can call ahead and
            confirm inventory before your trip.{" "}
            <Link href="/store-locator" className="font-semibold text-highlight underline-offset-4 hover:underline">
              Find the location nearest you.
            </Link>{" "}
            For contractors buying bundles by the pallet, ask the pro desk to check bulk availability.
          </p>

          <div className="mt-8">
            <LowesCTA size="lg" variant="highlight">Shop at Lowe's</LowesCTA>
          </div>
          <p className="font-ui mt-4 text-xs text-primary-foreground/60">
            Item #3976 · Model #3976 · {new URL(LOWES_URL).hostname}
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
