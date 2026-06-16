import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, jsonLdScript, breadcrumbLd } from "@/lib/site";
import { Check, X } from "lucide-react";

const TITLE = "Cedar Shingles vs Composite Siding — Natural Wood vs Synthetic Comparison";
const DESC = "Compare Western Red Cedar shingles to composite and synthetic siding. Natural beauty, durability, eco-friendliness, and cost — which is right for your project?";

const ROWS: { label: string; cedar: string; composite: string; cedarWin: boolean }[] = [
  { label: "Material origin", cedar: "Natural softwood (Thuja plicata)", composite: "Engineered wood fibers + resins, vinyl, or fiber-cement", cedarWin: true },
  { label: "Appearance", cedar: "Real grain, natural color variation, ages to silver-gray", composite: "Uniform, printed wood-look or solid color", cedarWin: true },
  { label: "Natural rot/insect resistance", cedar: "Yes — cedar's own oils", composite: "Depends on product; treatments vary", cedarWin: true },
  { label: "DIY-friendly installation", cedar: "Yes — cuts and nails easily with basic tools", composite: "Varies; some products need special blades or fasteners", cedarWin: true },
  { label: "Environmental impact", cedar: "Renewable, biodegradable, low carbon footprint", composite: "Plastics, adhesives, often non-recyclable", cedarWin: true },
  { label: "Longevity (well-maintained)", cedar: "40+ years exterior, decades interior", composite: "20–40 years depending on product", cedarWin: false },
  { label: "Maintenance", cedar: "Optional staining/sealing every few years; natural weathering looks great", composite: "Low maintenance (cleaning only)", cedarWin: false },
  { label: "Upfront cost", cedar: "Low for #3/#4 undercourse grade — DIY-friendly pricing", composite: "Often higher per square foot installed", cedarWin: true },
  { label: "Flavor-enhancing wood (natural cedar)", cedar: "Yes (natural, untreated)", composite: "No — synthetic materials don't impart natural flavor", cedarWin: true },
  { label: "Off-gassing / VOCs", cedar: "None — cedar is natural and untreated", composite: "Varies; resin- and adhesive-based products may off-gas", cedarWin: true },
];

export const Route = createFileRoute("/cedar-vs-composite")({
  head: () => {
    const m = pageMeta({ title: TITLE, description: DESC, path: "/cedar-vs-composite" });
    return {
      ...m,
      scripts: [
        jsonLdScript(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Cedar vs Composite", path: "/cedar-vs-composite" }])),
      ],
    };
  },
  component: VsComposite,
});

function VsComposite() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Cedar vs Composite" }]} />
      </div>

      <section className="mx-auto max-w-4xl px-4 pt-10 pb-10 sm:px-6">
        <h1 className="font-display text-4xl font-bold text-primary sm:text-5xl">
          Cedar Shingles vs Composite Siding — Which Is Right for Your Project?
        </h1>
        <p className="font-body mt-5 text-lg text-foreground/80">
          Composite and synthetic siding have their place. But for DIY projects, accent walls, outdoor
          structures, and anywhere natural material wins on character and cost — Western Red Cedar
          is hard to beat. Here's the honest comparison.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-10 sm:px-6">
        <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
          <table className="font-body w-full min-w-[720px] text-left">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                <th className="px-5 py-4 font-semibold">Factor</th>
                <th className="px-5 py-4 font-semibold">Western Red Cedar</th>
                <th className="px-5 py-4 font-semibold">Composite / synthetic</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={r.label} className={i % 2 === 0 ? "bg-card" : "bg-secondary"}>
                  <td className="px-5 py-4 font-semibold text-primary">{r.label}</td>
                  <td className="px-5 py-4 text-foreground/85">
                    <span className="inline-flex items-start gap-2">
                      {r.cedarWin ? <Check className="mt-1 h-4 w-4 shrink-0 text-accent" /> : <span className="mt-1 h-4 w-4 shrink-0" />}
                      <span>{r.cedar}</span>
                    </span>
                  </td>
                  <td className="px-5 py-4 text-foreground/85">
                    <span className="inline-flex items-start gap-2">
                      {!r.cedarWin ? <Check className="mt-1 h-4 w-4 shrink-0 text-accent" /> : <X className="mt-1 h-4 w-4 shrink-0 text-muted-foreground" />}
                      <span>{r.composite}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-primary">When composite makes sense</h2>
        <p className="font-body mt-4 text-lg text-foreground/85">
          If your goal is the lowest possible maintenance and you don't mind a synthetic look, composite
          is a reasonable choice for whole-house siding. Cedar requires a bit more involvement — and
          rewards it with character and longevity.
        </p>
        <h2 className="font-display mt-10 text-3xl font-bold text-primary">When cedar is the better call</h2>
        <p className="font-body mt-4 text-lg text-foreground/85">
          Siding for contractors and homeowners who want a distinctive look, DIY projects, accent walls,
          sheds, gazebos, pergolas, dog houses, man caves, and anywhere natural beauty matters. Cedar
          delivers warmth, character, and value composite simply can't match.
        </p>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Pick real cedar</h2>
          <p className="font-body mt-3 text-lg text-primary-foreground/90">
            Item #3976 at Lowe's — natural, untreated, DIY-priced.
          </p>
          <div className="mt-6"><LowesCTA size="lg" variant="highlight">Buy at Lowe's</LowesCTA></div>
        </div>
      </section>
    </SiteLayout>
  );
}
