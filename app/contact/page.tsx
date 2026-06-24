import type { Metadata } from "next";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { pageMeta, CONTACT_EMAIL, SITE_URL, SITE_NAME } from "@/lib/site";
import ContactFormClient from "./ContactFormClient";

const TITLE = "Contact & Inquiries — Western Red Cedar Shingles";
const DESC =
  "Get in touch about Western Red Cedar Shingle bundles — product questions, bulk orders, project guidance, and DIY support. We respond within 1–2 business days.";

export const metadata: Metadata = pageMeta({
  title: TITLE,
  description: DESC,
  path: "/contact",
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: TITLE,
      url: `${SITE_URL}/contact`,
      publisher: { "@type": "Organization", name: SITE_NAME, email: CONTACT_EMAIL },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
      ],
    },
  ],
});

export default function ContactPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact" }]} />
      </div>

      <section className="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6">
        <div className="max-w-3xl">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
            Contact &amp; Inquiries
          </p>
          <h1 className="font-display mt-3 text-4xl font-bold leading-tight text-primary sm:text-5xl">
            Get in touch about Western Red Cedar shingles
          </h1>
          <p className="font-body mt-5 text-lg text-foreground/80">
            Product questions, bulk orders, installation help, custom project guidance — send a note
            and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-14">
          <aside className="space-y-6 lg:col-span-1">
            <div className="rounded-xl border border-border bg-secondary p-6">
              <h3 className="font-display text-lg font-bold text-primary">Looking to buy?</h3>
              <p className="font-body mt-2 text-sm text-foreground/80">
                Western Red Cedar Shingles are stocked exclusively at Lowe's — Item #3976. In-store
                only. See our Store Locator for the nearest Lowe's.
              </p>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <ContactFormClient contactEmail={CONTACT_EMAIL} />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
