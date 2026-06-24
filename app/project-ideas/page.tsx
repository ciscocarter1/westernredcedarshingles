import type { Metadata } from "next";
import Link from "next/link";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, SITE_URL } from "@/lib/site";
import accentImg from "@/assets/project-accent-wall.jpg";
import manCaveAsset from "@/assets/man-cave-bar.png.asset.json";

const textureImg = manCaveAsset.url;

const TITLE = "Cedar Shingle Project Ideas — Siding, Accent Walls, Sheds, Man Caves & More";
const DESC =
  "Get inspired with Western Red Cedar Shingles project ideas. Siding, interior accent walls, rustic dining rooms, backyard sheds, pergolas, man caves, and outdoor spaces.";

const PROJECTS = [
  { title: "Creative Backyard Shed with Western Red Cedar Shingles", desc: "Turn a basic storage shed into a focal point. Cedar shingles weather to silver-gray and look better every year — no paint, no replacement panels.", img: "/__l5e/assets-v1/93739a25-4f73-4ea6-8134-a92d2cfd499b/creative-backyard-shed.png" },
  { title: "DIY Rustic Accent Wall", desc: "Dining room, bedroom, or stairwell. Construction adhesive, brad nails, a level — installable in a weekend with a warmer result than any peel-and-stick alternative.", img: "/__l5e/assets-v1/ab3445db-18f6-4836-8ceb-d00c7f7902e1/indoor-sides-accent-wall.png" },
  { title: "Build the Ultimate Man Cave Wall", desc: "Sports bar, basement lounge, gaming room. Cedar texture pairs beautifully with leather, brass, and warm lighting.", img: textureImg },
  { title: "Bring the Outdoors In", desc: "A bedroom cedar accent wall behind the headboard turns the bed into a cabin retreat. The natural cedar scent is a bonus that lasts months.", img: "/__l5e/assets-v1/decedbde-4239-420a-b91d-3c60c456f61c/maggie_bedroom.png" },
  { title: "Outdoor Kitchen & BBQ Cedar Walls", desc: "Upgrade your outdoor kitchen in Western Red Cedar Shingles. Weather-resistant and gorgeous in dappled afternoon light.", img: "/__l5e/assets-v1/fdef2a4b-7cd7-42e2-b98d-dea25bf6d89c/back-bbq.png" },
  { title: "Gazebo and Pergola Cladding", desc: "Side panels, sun screens, partial walls — Western Red Cedar Shingles add privacy and texture to outdoor structures.", img: "/__l5e/assets-v1/e9d0bae2-c228-423a-afb6-066def3240d2/gazebo-pergola-cladding.png" },
  { title: "Firepit Area Privacy Screens", desc: "Build cedar shingle privacy walls around a backyard firepit zone. Defines the space, deflects wind, and feels like a wilderness lodge.", img: "/__l5e/assets-v1/36722ac8-17d0-4544-995d-1e51e8b92d43/firepit-privacy-screen.png" },
  { title: "Children's Fort Exterior", desc: "Backyard fort, treehouse, or playhouse — Western Red Cedar Shingles upgrade a weekend project to a neighborhood landmark.", img: "/__l5e/assets-v1/7d89c8df-6eac-4fd2-bf93-2cf9c9e19c0e/kids-play-fort.png" },
];

export const metadata: Metadata = pageMeta({
  title: TITLE,
  description: DESC,
  path: "/project-ideas",
  image: `${SITE_URL}${accentImg}`,
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
              </div>
            </article>
          ))}
        </div>
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
