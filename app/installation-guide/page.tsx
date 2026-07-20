import type { Metadata } from "next";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, HOWTO_PDF, SITE_URL } from "@/lib/site";
import shedImg from "@/assets/project-shed.jpg";
import InstallTabsClient from "./InstallTabsClient";
import { EXTERIOR_STEPS, INTERIOR_STEPS } from "./steps-data";

const TITLE = "How to Install Cedar Shingles — Step-by-Step Guide";
const DESC =
  "Learn how to install Western Red Cedar Shingles on siding, sheds, and accent walls. Tips for DIYers and pro contractors using Lowe's Item #3976.";

export const metadata: Metadata = pageMeta({
  title: TITLE,
  description: DESC,
  path: "/installation-guide",
  image: `${SITE_URL}${shedImg}`,
  jsonLd: [
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Installation Guide", item: `${SITE_URL}/installation-guide` },
      ],
    },
  ],
});

export default function InstallPage() {
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

      <InstallTabsClient
        exteriorSteps={EXTERIOR_STEPS}
        interiorSteps={INTERIOR_STEPS}
        howtoPdf={HOWTO_PDF}
      />

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
