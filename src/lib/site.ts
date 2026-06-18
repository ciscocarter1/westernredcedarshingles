import exteriorIcon from "@/assets/uses/Exterior_Sidewalls.png.asset.json";
import interiorIcon from "@/assets/uses/Interior_Accent_Walls.png.asset.json";
import shedIcon from "@/assets/uses/Storage_Sheds.png.asset.json";
import pergolaIcon from "@/assets/uses/Gazebos_Pergolas.png.asset.json";
import dogIcon from "@/assets/uses/Dog_Houses.png.asset.json";
import manCaveIcon from "@/assets/uses/Man_Caves.png.asset.json";
import windowIcon from "@/assets/uses/Window_Doors.png.asset.json";

export const SITE_URL = "https://westernredcedarshingles.com";
export const SITE_NAME = "Western Red Cedar Planks";

export const LOWES_URL =
  "https://www.lowes.com/pd/Red-Cedar-Untreated-Wood-Siding-Shingles/3379244?utm_source=blog&utm_medium=referral&utm_campaign=cedar_tracking&utm_content=lowes_outbound_test";

export const HOWTO_PDF =
  "https://pdf.lowes.com/productdocuments/38190d28-c2f2-4d3b-b903-81634668f8ad/70363327.pdf";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/product", label: "Product" },
  { to: "/western-red-cedar", label: "Cedar Species" },
  { to: "/installation-guide", label: "Installation" },
  { to: "/project-ideas", label: "Project Ideas" },
  { to: "/cedar-shingles-faq", label: "FAQ" },
  { to: "/store-locator", label: "Find a Store" },
  { to: "/contact", label: "Contact" },
] as const;

export const CONTACT_EMAIL = "maggie@smccedar.com";

type Faq = { q: string; a: string; aHtml?: string };

export const FAQS: Faq[] = [
  {
    q: "What exactly is this product and where can I buy it?",
    a: "It's a Western Red Cedar Tree of Life wood shingle siding bundle, #3/#4 undercourse grade, 100% natural and untreated. Item #3976 / Model #3976, sold exclusively at Lowe's. This is an in-store-only product — please see our Store Locator to find the Lowe's location nearest you.",
    aHtml: `It's a Western Red Cedar Tree of Life wood shingle siding bundle, #3/#4 undercourse grade, 100% natural and untreated. Item #3976 / Model #3976, sold exclusively at Lowe's. This is an in-store-only product — please see our <a href="/store-locator" class="text-accent font-semibold hover:underline">Store Locator</a> to find the Lowe's location nearest you.`,
  },
  {
    q: "What grade are these Western Red Cedar Shingles?",
    a: "These are #3/#4 undercourse grade Western Red Cedar Shingles, also called utility grade. They contain natural character marks, flat grain, and some sapwood. For interior accent walls that's a feature — rustic warmth that a flawless Number One Blue Label cannot match. For sheds, pergolas, gazebos, dog houses, and siding applications they perform comparably to higher grades at a fraction of the price.",
  },
  {
    q: "What is Western Red Cedar and why is it special?",
    a: "Western Red Cedar (Thuja plicata) is a Pacific Northwest softwood prized for natural rot and insect resistance. No chemical treatment required — the wood's natural oils do the work. Native peoples called it the Tree of Life.",
  },
  {
    q: "Is this product treated or finished?",
    a: "No. The shingles are 100% natural and untreated. You can leave them natural to silver out (think Martha's Vineyard vibe), or seal/stain after installation to keep the beautiful warm wood look.",
  },
  {
    q: "What can I use these Western Red Cedar Shingles for?",
    a: "Siding, exterior sidewalls and eaves, entry-way highlights, storage sheds, spa coverings, gazebos, pergolas, neighborhood forts, dog houses, man-cave walls, dining-room/bedroom/family-room/office accent walls, garden stakes, and builder's shims.",
  },
  {
    q: "Can these shingles be used on a roof?",
    a: "On non-inhabited buildings only — sheds, gazebos, dog houses, playhouses. They are not rated for roofing on inhabited dwellings. Always follow local building codes.",
  },
  {
    q: "Can I use these shingles on interior walls?",
    a: "Yes — they're popular for accent walls in dining rooms, bedrooms, family rooms, offices, and man caves. Construction adhesive plus brad nails is typically enough for interior installs.",
  },
  {
    q: "How do I install Western Red Cedar Shingles on a wall?",
    a: "Snap a level chalk line at the base, work upward course by course with a 1/8\" gap between shingles for expansion, stagger joints at least 1.5\" from the course below, and use two galvanized nails per shingle placed ~2\" above the butt line and 3/4\" from each edge. Full step-by-step on our Installation Guide page.",
  },
  {
    q: "Is this product available for contractors and bulk orders?",
    a: "Yes. General contractors and professional remodelers are a primary audience for this product — Western Red Cedar Shingles deliver an affordable, beautiful, and distinctive siding option for client projects. For bulk or commercial quantities, just check with the pro desk at your local Lowe's store. See our Store Locator for the nearest one to you.",
    aHtml: `Yes. General contractors and professional remodelers are a primary audience for this product — Western Red Cedar Shingles deliver an affordable, beautiful, and distinctive siding option for client projects. For bulk or commercial quantities, just check with the pro desk at your local Lowe's store. See our <a href="/store-locator" class="text-accent font-semibold hover:underline">Store Locator</a> for the nearest one to you.`,
  },
  {
    q: "Does it take special skills or tools to install?",
    a: "Yes. When working with Western Red Cedar you should use Type 304 or 316 stainless steel ring shank nails with thin shanks and blunt points. These fasteners prevent the natural tannins in cedar from reacting with the metal which avoids dark grey streaks, rust, and wood decay. A level, a chalk line, a hammer or nail gun, a circular or hand saw, and galvanized nails are all you need. The wood is light, cuts cleanly, and nails without splitting — Western Red Cedar Shingles are one of the most DIY-friendly siding products on the market.",
  },
  {
    q: "What is the cultural significance of Western Red Cedar?",
    a: "Western Red Cedar was the cornerstone of Pacific Northwest Native American culture — known as the Tree of Life and Life Giver. It provided food preparation options, shelter (longhouses, totem poles), tools (canoes, paddles), clothing (woven bark), and medicine. We honor that heritage in our product.",
  },
  {
    q: "Is this product available for online ordering and shipping?",
    a: "No. This is an in-store-only product. Please see our Store Locator to find the Lowe's location nearest you.",
    aHtml: `No. This is an in-store-only product. Please see our <a href="/store-locator" class="text-accent font-semibold hover:underline">Store Locator</a> to find the Lowe's location nearest you.`,
  },
  {
    q: "Does this product come with installation instructions?",
    a: "Yes. A HowTo manual PDF is available directly from Lowe's, and we publish a full step-by-step installation guide on this site covering exterior walls, interior accent walls, and the double-course method.",
  },
  {
    q: "Are there project ideas available to help me get started?",
    a: "Yes — see our Project Ideas page for backyard sheds, rustic accent walls, man caves, gazebos, firepit privacy screens, children's forts, and more.",
    aHtml: `Yes — see our <a href="/project-ideas" class="text-accent font-semibold hover:underline">Project Ideas</a> page for backyard sheds, rustic accent walls, man caves, gazebos, firepit privacy screens, children's forts, and more.`,
  },
];


export const USES = [
  { label: "Exterior Sidewalls", icon: exteriorIcon.url },
  { label: "Interior Accent Walls", icon: interiorIcon.url },
  { label: "Storage Sheds", icon: shedIcon.url },
  { label: "Gazebos & Pergolas", icon: pergolaIcon.url },
  { label: "Dog Houses", icon: dogIcon.url },
  { label: "Man Caves", icon: manCaveIcon.url },
  { label: "Siding", icon: exteriorIcon.url },
  { label: "Window & Door Shims", icon: windowIcon.url },
];

export function jsonLdScript(data: unknown) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  ogType?: string;
  image?: string;
}) {
  const url = `${SITE_URL}${opts.path}`;
  const img = opts.image ?? `${SITE_URL}/og-default.jpg`;
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:type", content: opts.ogType ?? "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: img },
      { property: "og:site_name", content: SITE_NAME },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "twitter:image", content: img },
    ],
    links: [{ rel: "canonical", href: opts.path }],
  };
}
