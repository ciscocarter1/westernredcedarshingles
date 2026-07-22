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
import { ChevronDown, Home as HomeIcon, Hammer, Shirt, Leaf } from "lucide-react";
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
      name: "Western Red Cedar Planks",
      url: SITE_URL,
      description:
        "Maker of natural Western Red Cedar shingle bundles sold exclusively at Lowe's for siding, accent walls, outdoor structures, and DIY and contractor projects.",
      sameAs: ["https://www.lowes.com/pd/Red-Cedar-Untreated-Wood-Siding-Shingles/3379244"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.slice(0, 3).map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
});

const TREE_OF_LIFE = [
  { icon: HomeIcon, label: "Shelter", desc: "Longhouses, totem poles, lodges." },
  { icon: Hammer, label: "Tools", desc: "Canoes, paddles, hunting implements." },
  { icon: Shirt, label: "Clothing", desc: "Soft woven bark robes and hats." },
  { icon: Leaf, label: "Medicine", desc: "Bark, leaves, and oils for healing." },
];

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
            Natural Western Red Cedar Shingles for Siding, Sheds, Walls &amp; Outdoor Projects
          </h1>
          <p className="font-body mt-6 max-w-2xl text-lg text-primary-foreground/90 sm:text-xl">
            100% Natural. Untreated. Available Exclusively at Lowe's.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LowesCTA size="lg" variant="highlight">Buy at Lowe's — Item #3976</LowesCTA>
            <Link
              href="/product"
              className="font-ui inline-flex items-center justify-center rounded-md border-2 border-primary-foreground/40 px-7 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn About the Product
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
          Honest Western Red Cedar Shingles, straight from the Pacific Northwest
        </h2>
        <p className="font-body mt-6 text-lg text-foreground/80 sm:text-xl">
          Our #3/#4 undercourse grade Western Red Cedar Shingles, Lowe's Item #3976, are sold exclusively at Lowe's
          in-store. In particular, every bundle is 100% natural and untreated, which makes them the versatile,
          affordable solution for siding, accent walls, sheds, gazebos, and other outdoor projects. Furthermore,
          they are built for contractors and DIYers alike, so the same bundle that finishes a client's exterior
          can just as easily wrap a weekend accent wall at home.
        </p>
      </section>

      {/* USES GRID */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display text-center text-3xl font-bold text-primary sm:text-4xl">
            Eight ways pros and DIYers put Western Red Cedar Shingles to work
          </h2>
          <p className="font-body mx-auto mt-4 max-w-3xl text-center text-foreground/75">
            For example, the same bundle covers everything from full exterior sidewalls to a single interior
            accent wall. In addition, contractors regularly reach for these shingles on sheds, gazebos, and
            pergola cladding when a project calls for real cedar character.
          </p>
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

      {/* GRADE HONESTY */}
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-xl">
          <img
            src={textureAsset.url}
            alt="Close-up of Western Red Cedar Shingles wood grain showing natural cedar siding color variation"
            width={1600}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="font-ui text-sm font-semibold uppercase tracking-wider text-highlight">Honest grading</p>
          <h2 className="font-display mt-2 text-3xl font-bold text-primary sm:text-4xl">
            Why undercourse grade is the right call for siding and DIY
          </h2>
          <p className="font-body mt-5 text-lg text-foreground/80">
            Our #3/#4 undercourse grade Western Red Cedar Shingles carry natural character marks, flat grain, and the
            occasional knot. In particular, on an interior accent wall that's the look people pay extra to fake, a rustic
            warmth a flawless Number One Blue Label simply doesn't have. By contrast, on a shed, pergola, or siding job
            they perform comparably to higher grades at a fraction of the cost. As a result, contractors get an
            affordable, beautiful, and distinctive option clients remember long after the invoice is paid.
          </p>
          <Link
            href="/product"
            className="font-ui mt-6 inline-block font-semibold text-accent hover:underline"
          >
            Read the full grade transparency note →
          </Link>
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
            Western Red Cedar was the cornerstone of Northwest coastal Native American culture — called
            the <em>Tree of Life</em> and the <em>Life Giver</em>. It provided shelter, tools, clothing, and
            medicine for generations.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {TREE_OF_LIFE.map((t) => (
              <div key={t.label} className="rounded-lg border border-forest-foreground/15 bg-forest text-forest-foreground p-6 text-left shadow-sm">
                <t.icon className="h-7 w-7 text-highlight" aria-hidden />
                <div className="font-display mt-3 text-xl font-semibold">{t.label}</div>
                <p className="font-body mt-1 text-sm text-forest-foreground/80">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
          Why Contractors and DIYers Choose Western Red Cedar Shingles
        </h2>
        <div className="font-body mt-6 space-y-5 text-lg text-foreground/85">
          <p>
            Western Red Cedar is one of the few building materials that genuinely improves with time.
            Left untreated it weathers to a natural silver-gray patina that no composite or vinyl product
            can replicate. Additionally, stained or finished it holds color longer than most softwoods
            because the natural oils in the wood resist moisture absorption from the start.
          </p>
          <p>
            For contractors, the economics are straightforward. Our undercourse grade Western Red Cedar
            Shingles deliver the look clients want at a price point that keeps projects competitive.
            For example, a shed exterior, a privacy screen, or a garage accent wall. These are the jobs
            where the character of undercourse grade is not a limitation but the entire point.
            Furthermore, natural knots and grain variation give each installation a texture that reads
            as custom work.
          </p>
          <p>
            For DIY homeowners, Western Red Cedar is forgiving material. It cuts cleanly with a standard
            circular saw, nails without splitting at the edges, and requires no special tools or
            experience. As a result, a first-time installer can complete an interior accent wall in a
            single weekend with basic carpentry skills and our installation guide.
          </p>
        </div>
      </section>

      {/* PROJECT IDEAS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Project inspiration</h2>
            <p className="font-body mt-2 text-foreground/70">For this reason we start here, then go further.</p>
          </div>
          <Link href="/project-ideas" className="font-ui text-sm font-semibold text-accent hover:underline">
            See all ideas →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { img: shedImg, title: "Backyard Cedar Shed", desc: "Rustic, weather-friendly, build-yourself.", alt: "Backyard cedar shed clad in Western Red Cedar Shingles siding", w: 1024, h: 768 },
            { img: accentImg, title: "Dining-Room Accent Wall", desc: "Warm interior texture in a weekend.", alt: "Dining room accent wall built with cedar shingles DIY project", w: 1024, h: 768 },
            { img: manCaveImg, title: "Man Cave Cedar Wall", desc: "Texture that pairs with leather, brass, warm light.", alt: "Man cave interior accent wall covered in Western Red Cedar Shingles", w: 1024, h: 768 },
          ].map((p) => (
            <Link
              href="/project-ideas"
              key={p.title}
              className="group block overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.alt}
                  width={p.w}
                  height={p.h}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="font-display text-xl font-semibold text-primary">{p.title}</div>
                <p className="font-body mt-1 text-sm text-foreground/70">{p.desc}</p>
              </div>
            </Link>
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
            Available exclusively at Lowe's — in-store only.{" "}
            <Link href="/store-locator" className="font-semibold text-highlight underline-offset-4 hover:underline">
              Find the location nearest you.
            </Link>
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
