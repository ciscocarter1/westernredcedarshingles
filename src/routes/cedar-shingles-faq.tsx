import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, jsonLdScript, breadcrumbLd, FAQS } from "@/lib/site";
import { ChevronDown } from "lucide-react";

const TITLE = "Cedar Shingles FAQ — Grades, Uses & Where to Buy";
const DESC = "Answers to common questions about Western Red Cedar Shingles — undercourse grade explained, best uses, and where to find them at your local Lowe's.";

export const Route = createFileRoute("/cedar-shingles-faq")({
  head: () => {
    const m = pageMeta({ title: TITLE, description: DESC, path: "/cedar-shingles-faq" });
    return {
      ...m,
      scripts: [
        jsonLdScript({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
        jsonLdScript(breadcrumbLd([{ name: "Home", path: "/" }, { name: "FAQ", path: "/cedar-shingles-faq" }])),
      ],
    };
  },
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ" }]} />
      </div>

      <section className="mx-auto max-w-3xl px-4 pt-10 pb-12 text-center sm:px-6">
        <p className="font-ui text-sm font-semibold uppercase tracking-[0.2em] text-highlight">Answers</p>
        <h1 className="font-display mt-3 text-4xl font-bold text-primary sm:text-5xl">
          Western Red Cedar Shingles — Frequently Asked Questions
        </h1>
        <p className="font-body mt-5 text-lg text-foreground/80">
          Answers verified from the product listing and our own DIY and pro contractor experience. If your
          question isn't here, the answer is almost always: yes, you can probably use Western Red Cedar
          Shingles for that.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6">
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} aHtml={f.aHtml} num={i + 1} />
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Ready to Purchase?</h2>
          <p className="font-body mt-3 text-lg text-foreground/80">Item #3976 at Lowe's — in-store only.</p>
          <div className="mt-6"><LowesCTA size="lg">Buy at Lowe's</LowesCTA></div>
        </div>
      </section>
    </SiteLayout>
  );
}

function FaqItem({ q, a, aHtml, num }: { q: string; a: string; aHtml?: string; num: number }) {
  const [open, setOpen] = useState(num <= 3);
  return (
    <div className="rounded-lg border border-border bg-card shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="font-ui flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-foreground"
        aria-expanded={open}
      >
        <span className="flex gap-3">
          <span className="font-display text-highlight">{num}.</span>
          <span>{q}</span>
        </span>
        <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div hidden={!open}>
        {aHtml
          ? <div className="font-body px-5 pb-5 pl-12 text-foreground/85" dangerouslySetInnerHTML={{ __html: aHtml }} />
          : <div className="font-body px-5 pb-5 pl-12 text-foreground/85">{a}</div>}
      </div>
    </div>
  );
}
