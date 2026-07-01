import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../src/styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://westernredcedarshingles.com"),
  title: {
    default: "Western Red Cedar Shingles — Siding & Outdoor Projects | Buy at Lowe's",
    template: "%s | Western Red Cedar Shingles",
  },
  description:
    "Shop Western Red Cedar Shingle bundles, exclusively at Lowe's. 100% natural, untreated cedar — affordable, beautiful siding for contractors and DIYers.",
  authors: [{ name: "Western Red Cedar Planks" }],
  openGraph: {
    siteName: "Western Red Cedar Planks",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

const ORG_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Western Red Cedar Planks",
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
      <body>{children}</body>
    </html>
  );
}
