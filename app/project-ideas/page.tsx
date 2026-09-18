import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { GuideCards } from "@/components/GuideCards";

import { pageMeta, SITE_URL } from "@/lib/site";
import accentImg from "@/assets/project-accent-wall.jpg";
import manCaveAsset from "@/assets/man-cave-bar.png.asset.json";
import { ProjectMeta, type ProjectDetails } from "@/components/ProjectMeta";

const textureImg = manCaveAsset.url;

const TITLE = "Cedar Shingle Project Ideas — Sheds, Walls & More";
const DESC =
  "Get inspired. Cedar shingles for accent walls, backyard sheds, pergolas, man caves, and dog houses. Natural wood. Affordable. Available at Lowe's.";

const PROJECTS: Array<{ title: string; desc: string; img: string; details: ProjectDetails }> = [
  { title: "Creative Backyard Shed with Western Red Cedar Shingles", desc: "Turn a basic storage shed into a focal point. Cedar shingles weather to silver-gray and look better every year — no paint, no replacement panels.", img: "/images/creative-backyard-shed.png", details: { difficulty: "Intermediate", time: "1 to 2 weekends", tools: "circular saw, hammer or nail gun, level, chalk line, stainless-steel nails", bundles: "18 bundles for a 10 × 20 ft wall" } },
  { title: "DIY Rustic Accent Wall", desc: "Dining room, bedroom, or stairwell. Construction adhesive, brad nails, a level — installable in a weekend with a warmer result than any peel-and-stick alternative.", img: "/images/indoor-sides-accent-wall.png", details: { difficulty: "Beginner", time: "1 weekend", tools: "level, chalk line, construction adhesive, brad nailer", bundles: "6 bundles for a 10 × 8 ft wall" } },
  { title: "Build the Ultimate Man Cave Wall", desc: "Sports bar, basement lounge, gaming room. Cedar texture pairs beautifully with leather, brass, and warm lighting.", img: textureImg, details: { difficulty: "Beginner", time: "1 weekend", tools: "level, chalk line, construction adhesive, brad nailer", bundles: "8 bundles for a 12 × 8 ft wall" } },
  { title: "Bring the Outdoors In", desc: "A bedroom cedar accent wall behind the headboard turns the bed into a cabin retreat. The natural cedar scent is a bonus that lasts months.", img: "/images/bedroom-cedar-accent-wall.png", details: { difficulty: "Beginner", time: "1 weekend", tools: "level, chalk line, construction adhesive, brad nailer", bundles: "8 bundles for a 12 × 8 ft wall" } },
  { title: "Outdoor Kitchen & BBQ Cedar Walls", desc: "Upgrade your outdoor kitchen in Western Red Cedar Shingles. Weather-resistant and gorgeous in dappled afternoon light.", img: "/images/outdoor-kitchen-bbq-cedar-walls.png", details: { difficulty: "Intermediate", time: "1 to 2 weekends", tools: "circular saw, hammer or nail gun, level, stainless-steel nails", bundles: "12 bundles for a 20 × 8 ft wall" } },
  { title: "Gazebo and Pergola Cladding", desc: "Side panels, sun screens, partial walls — Western Red Cedar Shingles add privacy and texture to outdoor structures.", img: "/images/gazebo-pergola-cladding.png", details: { difficulty: "Intermediate", time: "2 to 3 weekends (cladding only, assumes structure already exists)", tools: "circular saw, hand saw for angled cuts, hammer or nail gun, level, stainless-steel nails", bundles: "18 bundles for 240 sq ft" } },
  { title: "Firepit Privacy Screen", desc: "One of the smallest-bundle-count projects. Good first build if you want to test the material before committing to a bigger project.", img: "/images/firepit-privacy-screen.png", details: { difficulty: "Beginner", time: "1 day", tools: "circular saw, hammer or nail gun, level, stainless-steel nails", bundles: "6 bundles for a 10 × 8 ft screen" } },
  { title: "Children's Fort Exterior", desc: "Backyard fort, treehouse, or playhouse — Western Red Cedar Shingles upgrade a weekend project to a neighborhood landmark.", img: "/images/kids-play-fort.png", details: { difficulty: "Intermediate", time: "1 to 2 weekends", tools: "circular saw, hammer or nail gun, level, stainless-steel nails", bundles: "9 bundles for 120 sq ft" } },
];

export const metadata: Metadata = pageMeta({
  title: TITLE,
  description: DESC,
  path: "/project-ideas",
  image: `${SITE_URL}${accentImg.src}`,
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Project Ideas", item: `${SITE_URL}/project-ideas` },
      ],
    },
  ],
});

export default function ProjectIdeasPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Project Ideas" }]} />
      </div>

      <section className="mx-auto max-w-4xl px-4 pt-10 pb-12 text-center sm:px-6">
        <p className="font-ui text-sm font-semibold uppercase tracking-[0.2em] text-highlight">Inspiration</p>
        <h1 className="font-display mt-3 text-4xl font-bold text-primary sm:text-5xl">
          Western Red Cedar Shingle Project Ideas
        </h1>
        <p className="font-body mx-auto mt-5 max-w-2xl text-lg text-foreground/80">
          Eight directions to take a bundle of Item #3976 — from a single accent wall to a full
          backyard transformation.
        </p>
        <p className="font-body mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link
            href="/cedar-accent-wall-diy"
            className="font-ui inline-flex items-center gap-2 text-sm font-semibold text-highlight underline-offset-4 hover:underline"
          >
            Cedar Accent Wall — Full DIY Guide →
          </Link>
          <Link
            href="/cedar-shed-siding"
            className="font-ui inline-flex items-center gap-2 text-sm font-semibold text-highlight underline-offset-4 hover:underline"
          >
            How to Side a Shed with Cedar Shingles →
          </Link>
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={640}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="font-display text-2xl font-semibold text-primary">{p.title}</h2>
                <p className="font-body mt-2 text-foreground/80">{p.desc}</p>
                <ProjectMeta details={p.details} />
              </div>
            </article>
          ))}
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
        <h2 className="font-display mb-8 border-b border-border pb-3 text-3xl font-bold text-primary">
          Contractor and DIY Guides
        </h2>
        <GuideCards />
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Pick your project. Get your bundles.</h2>
          <p className="font-body mt-4 text-lg text-primary-foreground/90">
            Item #3976 at Lowe's — in-store only. See our{" "}
            <Link href="/store-locator" className="font-semibold text-highlight underline-offset-4 hover:underline">Store Locator</Link>{" "}
            for the nearest Lowe's.
          </p>
          <div className="mt-6"><LowesCTA size="lg" variant="highlight">Shop at Lowe's</LowesCTA></div>
        </div>
      </section>
    </SiteLayout>
  );
}
