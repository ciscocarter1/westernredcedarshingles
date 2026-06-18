import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, jsonLdScript, breadcrumbLd, SITE_URL } from "@/lib/site";
import forestImg from "@/assets/cedar-forest.jpg";
import textureImg from "@/assets/cedar-texture.jpg";

const TITLE = "What Is Western Red Cedar? Species Guide — Properties, Grades & Uses";
const DESC = "Learn why Western Red Cedar (Thuja plicata) is North America's premier shingle wood — natural rot resistance, straight grain, and decades of proven durability for siding and DIY projects.";

export const Route = createFileRoute("/western-red-cedar")({
  head: () => {
    const m = pageMeta({ title: TITLE, description: DESC, path: "/western-red-cedar", image: `${SITE_URL}${forestImg}` });
    return {
      ...m,
      scripts: [
        jsonLdScript(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Cedar Species", path: "/western-red-cedar" }])),
      ],
    };
  },
  component: SpeciesPage,
});

const GRADES = [
  { g: "Number One Blue Label", d: "Premium, 100% edge-grain, 100% heartwood, clear. Top of the spectrum — used where flawless appearance matters most." },
  { g: "#2 Red Label", d: "Mostly clear with limited defects above the clear portion. A solid mid-tier choice." },
  { g: "#3 Black Label", d: "More character — knots, sapwood, flat grain. Reliable, value-focused." },
  { g: "#4 Black Label", d: "Utility grade — natural character marks throughout. Designed as the undercourse layer in double-course walls, ideal for siding, sheds, dog houses, and rustic outdoor structures." },
];

function SpeciesPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Cedar Species" }]} />
      </div>

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={forestImg} alt="Pacific Northwest old-growth Western Red Cedar forest" width={1600} height={900} className="h-full w-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background" />
        </div>
        <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="font-ui text-sm font-semibold uppercase tracking-[0.2em] text-highlight">Species guide</p>
          <h1 className="font-display mt-3 text-4xl font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
            Western Red Cedar: The Complete Species &amp; Application Guide
          </h1>
          <p className="font-body mt-5 max-w-2xl text-lg text-primary-foreground/90">
            <em>Thuja plicata</em> — the Pacific Northwest softwood that built a culture and clad a continent.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <Section title="Meet the species">
        <p>
          Western Red Cedar (<em>Thuja plicata</em>) grows along the Pacific coast from Northern California
          up through British Columbia and southern Alaska. It's a true cedar in spirit if not strict
          botanical classification, and for centuries it has been the wood of choice anywhere shingles,
          siding, totem poles, or canoes were needed. Coast Salish peoples named it the <strong>Tree of
          Life</strong>.
        </p>
      </Section>

      {/* PROPERTIES */}
      <Section title="Natural properties" alt>
        <ul className="font-body grid gap-4 md:grid-cols-2">
          {[
            ["Natural rot resistance", "Cedar's own oils (thujaplicins) repel decay — no chemical treatment required."],
            ["Insect resistance", "Same oils deter termites and carpenter ants."],
            ["Weather durability", "One of the most durable softwoods available; decades of proven exterior service."],
            ["Light weight", "Easy to handle and install — perfect for DIY."],
          ].map(([h, d]) => (
            <li key={h} className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <div className="font-display text-lg font-semibold text-primary">{h}</div>
              <p className="mt-1 text-foreground/80">{d}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* GRADES */}
      <Section title="The cedar shingle grading system">
        <p className="mb-6">
          Cedar shingles are graded for appearance, not strength. All grades are real Western Red Cedar
          with the same natural durability — they differ in how much visual character (knots, sapwood,
          flat grain) appears on the face.
        </p>
        <div className="space-y-4">
          {GRADES.map((g) => (
            <div key={g.g} className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <div className="font-display text-lg font-semibold text-primary">{g.g}</div>
              <p className="font-body mt-1 text-foreground/80">{g.d}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 rounded-lg bg-highlight/15 p-5 text-foreground/90">
          <strong>Why our #3/#4 Black Label is ideal for siding and DIY:</strong> the natural character
          that costs more on a furniture piece is exactly what gives an accent wall, shed, or siding
          install its rustic warmth. It's an affordable, beautiful, and distinctive option contractors
          can offer clients.
        </p>
      </Section>

      {/* COMPARISON */}
      <Section title="Cedar vs. other woods" alt>
        <div className="overflow-x-auto">
          <table className="font-body w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="border-b border-border text-primary">
                <th className="py-3 pr-4 font-semibold">Property</th>
                <th className="py-3 pr-4 font-semibold">Western Red Cedar</th>
                <th className="py-3 pr-4 font-semibold">Pine</th>
                <th className="py-3 font-semibold">Pressure-treated</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              {[
                ["Natural rot resistance", "Excellent", "Poor", "Chemical only"],
                ["Insect resistance", "Excellent (oils)", "Poor", "Chemical only"],
                ["Treatment required", "None", "Yes", "Already treated"],
                ["Flavor-enhancing", "Yes", "No", "No"],
                ["Weathers to", "Silver-gray", "Gray/decay", "Gray"],
              ].map((r) => (
                <tr key={r[0]} className="border-b border-border/50">
                  {r.map((c, i) => (
                    <td key={i} className="py-3 pr-4">{c}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* SUSTAINABILITY */}
      <Section title="Sustainability">
        <p>
          Western Red Cedar is a renewable resource harvested from managed Pacific Northwest forests. It
          stores carbon throughout its service life and biodegrades naturally at end of life — unlike
          composite, vinyl, or synthetic alternatives. Choosing untreated cedar means no chemical
          leaching, no off-gassing, and a low carbon footprint from forest to wall.
        </p>
      </Section>

      {/* CULTURAL */}
      <section className="relative isolate overflow-hidden bg-forest py-20 text-forest-foreground">
        <img src={textureImg} alt="" aria-hidden width={1600} height={900} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">The Tree of Life</h2>
          <div className="font-body mt-6 space-y-5 text-lg text-forest-foreground/90">
            <p>
              For Northwest coastal peoples — Coast Salish, Haida, Tlingit, Nuu-chah-nulth and others —
              Western Red Cedar was not just material but kin. Every part of the tree served the
              community.
            </p>
            <p>
              <strong>Shelter:</strong> Longhouse posts, planks, and totem poles were carved from massive
              cedars that could shelter generations. <strong>Tools:</strong> Ocean-going canoes,
              paddles, and bentwood boxes. <strong>Clothing:</strong> Bark was pounded soft and woven
              into robes, hats, and capes. <strong>Medicine:</strong> Bark, leaves, and oils were used
              for healing and ceremony.
            </p>
            <p>
              We honor that heritage every time we cut a shingle. <em>Tree of Life.</em>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
          Bring real cedar into your next project
        </h2>
        <p className="font-body mt-4 text-lg text-foreground/80">
          Item #3976 at Lowe's — natural, untreated, ready to install.
        </p>
        <div className="mt-7"><LowesCTA size="lg">Buy at Lowe's</LowesCTA></div>
      </section>
    </SiteLayout>
  );
}

function Section({ title, alt, children }: { title: string; alt?: boolean; children: React.ReactNode }) {
  return (
    <section className={`${alt ? "bg-secondary" : ""} py-16`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">{title}</h2>
        <div className="font-body mt-5 text-lg text-foreground/85">{children}</div>
      </div>
    </section>
  );
}
