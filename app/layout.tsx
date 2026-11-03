import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import "../src/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://westernredcedarshingles.com"),
  title: {
    default: "Western Red Cedar Shingles for Siding & Sheds | $50/Bundle at Lowe's",
    template: "%s | Western Red Cedar Shingles",
  },
  description:
    "Real western red cedar shingles — $50/bundle, no minimum. Natural rot resistance, DIY-friendly. 119 verified reviews. Available in-store at Lowe's, Item #3976.",
  authors: [{ name: "Western Red Cedar Shingles" }],
  openGraph: {
    siteName: "Western Red Cedar Shingles",
    type: "website",
    locale: "en_US",
    images: [{ url: "https://westernredcedarshingles.com/og-default.jpg", width: 1200, height: 630, alt: "Western Red Cedar Shingles — $50/Bundle at Lowe's" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://westernredcedarshingles.com/og-default.jpg"],
  },
  alternates: { canonical: "/" },
  verification: {
    google: "REPLACE_WITH_YOUR_GSC_VERIFICATION_CODE",
  },
  robots: { index: true, follow: true },
};

const ORG_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Western Red Cedar Shingles",
  url: "https://westernredcedarshingles.com",
  description:
    "Maker of natural Western Red Cedar Shingle bundles sold exclusively at Lowe's for siding, accent walls, sheds, and outdoor projects. Pro and DIY friendly.",
  sameAs: ["https://www.lowes.com/pd/Red-Cedar-Untreated-Wood-Siding-Shingles/3379244"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T5BXYZVMG5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-T5BXYZVMG5');`,
          }}
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=DM+Sans:wght@400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_LD) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
