import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, jsonLdScript, breadcrumbLd, SITE_URL } from "@/lib/site";
import shedImg from "@/assets/project-shed.jpg";
import accentImg from "@/assets/project-accent-wall.jpg";
import grillImg from "@/assets/project-grilling.jpg";
import textureImg from "@/assets/cedar-texture.jpg";

const TITLE = "Cedar Shingle Project Ideas — Accent Walls, Sheds, Man Caves & More";
const DESC = "Get inspired with Western Red Cedar shingle project ideas. Interior accent walls, rustic dining rooms, backyard sheds, pergolas, man caves, and outdoor BBQ spaces.";

const PROJECTS = [
  { title: "Creative Backyard Shed with Cedar Shingles", desc: "Turn a basic storage shed into a focal point. Cedar shingles weather to silver-gray and look better every year — no paint, no replacement panels.", img: shedImg },
  { title: "DIY Rustic Accent Wall", desc: "Dining room, bedroom, or stairwell. Construction adhesive, brad nails, a level — installable in a weekend with a warmer result than any peel-and-stick alternative.", img: accentImg },
  { title: "Build the Ultimate Man Cave Wall", desc: "Sports bar, basement lounge, gaming room. Cedar texture pairs beautifully with leather, brass, and warm lighting.", img: textureImg },
  { title: "Bring the Outdoors In", desc: "A bedroom cedar accent wall behind the headboard turns the bed into a cabin retreat. The natural cedar scent is a bonus that lasts months.", img: accentImg },
  { title: "BBQ & Outdoor Kitchen Cedar Walls", desc: "Clad the back wall of your outdoor kitchen in cedar shingles. Weather-resistant, fire-tolerant when used as cladding, and gorgeous in dappled afternoon light.", img: grillImg },
  { title: "Gazebo and Pergola Cladding", desc: "Side panels, sun screens, partial walls — cedar shingles add privacy and texture to outdoor structures without blocking airflow.", img: shedImg },
  { title: "Firepit Area Privacy Screens", desc: "Build cedar shingle privacy walls around a backyard firepit zone. Defines the space, deflects wind, and feels like a wilderness lodge.", img: textureImg },
  { title: "Children's Fort Exterior", desc: "Backyard fort, treehouse, or playhouse — cedar shingles upgrade a weekend project to a neighborhood landmark.", img: shedImg },
];

export const Route = createFileRoute("/project-ideas")({
  head: () => {
    const m = pageMeta({ title: TITLE, description: DESC, path: "/project-ideas", image: `${SITE_URL}${accentImg}` });
    return {
      ...m,
      scripts: [
        jsonLdScript(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Project Ideas", path: "/project-ideas" }])),
      ],
    };
  },
  component: ProjectIdeasPage,
});

function ProjectIdeasPage() {
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
            Item #3976 at Lowe's — free shipping over $45.
          </p>
          <div className="mt-6"><LowesCTA size="lg" variant="highlight">Shop at Lowe's</LowesCTA></div>
        </div>
      </section>
    </SiteLayout>
  );
}
