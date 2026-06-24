import type { Metadata } from "next";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, FAQS, SITE_URL } from "@/lib/site";
import FaqItemClient from "./FaqItemClient";

const TITLE = "Western Red Cedar Shingles FAQ — Grade, Uses & Installation";
const DESC =
  "Answers to the most common questions about Western Red Cedar Shingles — what grade they are, where to buy, how to install, roofing rules, and more.";

export const metadata: Metadata = pageMeta({
  title: TITLE,
  description: DESC,
  path: "/cedar-shingles-faq",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/cedar-shingles-faq` },
      ],
    },
  ],
});

export default function FaqPage() {
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
            <FaqItemClient key={i} q={f.q} a={f.a} aHtml={f.aHtml} num={i + 1} defaultOpen={i < 3} />
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
