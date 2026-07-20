import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, jsonLdScript, breadcrumbLd, HOWTO_PDF, SITE_URL } from "@/lib/site";
import shedImg from "@/assets/project-shed.jpg";

const TITLE = "How to Install Cedar Shingles — Step-by-Step Guide";
const DESC = "Learn how to install Western Red Cedar Shingles on siding, sheds, and accent walls. Tips for DIYers and pro contractors using Lowe's Item #3976.";

const EXTERIOR_STEPS = [
  { name: "Gather materials", text: "Cedar shingles, galvanized nails, chalk line, level, tape measure, hand saw or circular saw." },
  { name: "Prepare the wall surface", text: "Install sheathing if needed and apply a weather-resistant barrier across the entire wall." },
  { name: "Snap your starting line", text: "Use a chalk line to mark a level line for the first course at the base of the wall." },
  { name: "Place the first course", text: "Begin at the bottom — set first course shingles with the butt edge aligned to the chalk line." },
  { name: "Nail the shingles", text: "Drive each nail approximately 2 inches above the butt line and 3/4 inch from each edge. Use two nails per shingle. Shingles wider than 8 inches get two additional center nails." },
  { name: "Leave expansion gaps", text: "Maintain 1/8 inch spacing between adjacent shingles in a course to allow natural expansion." },
  { name: "Overlap and stagger", text: "Each successive course overlaps the one below. Offset joints by at least 1.5 inches from the course below." },
  { name: "Work upward course by course", text: "Continue snapping level lines and repeating courses until you reach the top of the wall." },
];

const INTERIOR_STEPS = [
  { name: "Prep the wall", text: "Make sure the wall is clean, dry, and flat." },
  { name: "Mark level course lines", text: "Use a chalk line and level to mark horizontal guides across the wall." },
  { name: "Start at the bottom", text: "Begin at the base and work upward — easier to keep courses level." },
  { name: "Attach with adhesive + brads", text: "Use construction adhesive and brad nails. Structural nailing isn't required on interior walls." },
  { name: "Space and stagger", text: "Leave slight gaps between shingles for a natural look and stagger joints course to course." },
  { name: "Trim edges", text: "Use a miter saw to trim the perimeter cleanly." },
  { name: "Finish (optional)", text: "Seal, stain, or leave natural — untreated cedar weathers to a beautiful silver-gray." },
];

export const Route = createFileRoute("/installation-guide")({
  head: () => {
    const m = pageMeta({ title: TITLE, description: DESC, path: "/installation-guide", image: `${SITE_URL}${shedImg}` });
    return {
      ...m,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "How to Install Cedar Shingles on an Exterior Wall",
          description: DESC,
          totalTime: "PT4H",
          supply: ["Western Red Cedar shingles", "Galvanized nails", "Weather-resistant barrier"],
          tool: ["Chalk line", "Level", "Tape measure", "Hand saw or circular saw", "Hammer or nail gun"],
          step: EXTERIOR_STEPS.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.name,
            text: s.text,
          })),
        }),
        jsonLdScript(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Installation Guide", path: "/installation-guide" }])),
      ],
    };
  },
  component: InstallPage,
});

function InstallPage() {
  const [tab, setTab] = useState<"exterior" | "interior">("exterior");
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Installation Guide" }]} />
      </div>

      <section className="mx-auto max-w-4xl px-4 pt-10 pb-8 sm:px-6">
        <p className="font-ui text-sm font-semibold uppercase tracking-[0.2em] text-highlight">DIY guide</p>
        <h1 className="font-display mt-3 text-4xl font-bold text-primary sm:text-5xl">
          Cedar Shingle Installation Guide — Walls, Sheds &amp; Exterior Projects
        </h1>
        <p className="font-body mt-5 text-lg text-foreground/80">
          Two complete walkthroughs: structural exterior wall construction and a faster interior accent
          wall method. Use the tabs below.
        </p>
      </section>

      {/* Tabs */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6">
        <div role="tablist" className="font-ui inline-flex rounded-lg border border-border bg-secondary p-1">
          {(["exterior", "interior"] as const).map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`rounded-md px-5 py-2.5 text-sm font-semibold transition ${
                tab === t ? "bg-primary text-primary-foreground shadow" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {t === "exterior" ? "Exterior wall" : "Interior accent wall"}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {tab === "exterior" ? (
            <StepList steps={EXTERIOR_STEPS} />
          ) : (
            <StepList steps={INTERIOR_STEPS} />
          )}
        </div>

        {/* Product spec sheet */}
        <div className="font-body mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="font-display text-xl font-semibold text-primary">Product spec sheet — plan your purchase</h3>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="font-ui text-xs font-semibold uppercase tracking-wider text-foreground/60">Each shingle</dt>
              <dd className="mt-1 text-foreground/85">⅜" – ⅝" thick × 18" long × random width 4" – 14"</dd>
            </div>
            <div>
              <dt className="font-ui text-xs font-semibold uppercase tracking-wider text-foreground/60">Coverage per bundle</dt>
              <dd className="mt-1 text-foreground/85">At 7.50" exposure = 15 sq ft of wall coverage with ⅛" gap</dd>
            </div>
          </dl>
        </div>

        {/* Double-course note */}
        <div className="font-body mt-8 rounded-xl border border-highlight/40 bg-highlight/10 p-6">
          <h3 className="font-display text-xl font-semibold text-primary">Double-course method note</h3>
          <p className="mt-2 text-foreground/85">
            #3/#4 undercourse shingles installed as the first (undercourse) layer beneath a higher-grade
            outer shingle create wider exposure, deeper shadow lines, and a more dramatic wall profile.
            <strong> Measure undercourse needs in linear feet, not square feet</strong> — approximately
            <strong> 32 running feet per bundle</strong>.
          </p>
        </div>
      </section>

      {/* PDF + CTA */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
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
    </SiteLayout>
  );
}

function StepList({ steps }: { steps: { name: string; text: string }[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((s, i) => (
        <li key={i} className="flex gap-5 rounded-lg border border-border bg-card p-5 shadow-sm">
          <div className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
            {i + 1}
          </div>
          <div>
            <div className="font-display text-lg font-semibold text-primary">{s.name}</div>
            <p className="font-body mt-1 text-foreground/80">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
