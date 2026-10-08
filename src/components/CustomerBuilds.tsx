const REVIEWS_URL =
  "https://www.lowes.com/pd/Western-Red-Cedar-Shingles/5013820165#anchor-customer-reviews";

// Placeholder photos for now — swap each img for the real Lowe's review photo
// once Maggie pulls them. Keep the alt text in step with the new photo.
const BUILDS = [
  {
    img: "/images/front-of-shed.png",
    alt: "Backyard shed clad in Western Red Cedar Shingles siding",
    quote: "Exactly what I needed for my backyard shed. Went up fast and looks incredible.",
    label: "Shed Siding",
  },
  {
    img: "/images/dining-room-accent-wall.png",
    alt: "Dining room interior accent wall covered in cedar shingles",
    quote:
      "Used these for an interior accent wall in our dining room. The texture and color are perfect.",
    label: "Dining Room Accent Wall",
  },
  {
    img: "/images/cedar-house-exterior.png",
    alt: "House exterior sided with Western Red Cedar Shingles",
    quote:
      "Contractor here — these are my go-to for clients who want natural wood character without the premium price.",
    label: "Contractor — Exterior Siding",
  },
  {
    img: "/images/backyard-garden-shed.png",
    alt: "Garden shed covered in Western Red Cedar Shingles",
    quote: "Covered a 200 sq ft garden shed. Needed 14 bundles. Lowe's had them in stock same day.",
    label: "Garden Shed",
  },
  {
    img: "/images/man-cave-cedar.png",
    alt: "Man cave wall finished with cedar shingles",
    quote: "The natural variation in this grade is a feature, not a flaw. Adds real character.",
    label: "Man Cave Wall",
  },
  {
    img: "/images/gazebo-pergola-cladding.png",
    alt: "Pergola cladded in Western Red Cedar Shingles",
    quote: "Installed these on a pergola. Two years in and they're weathering beautifully.",
    label: "Pergola",
  },
];

export function CustomerBuilds() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
          What Customers Are Building
        </h2>
        <p className="font-body mt-3 text-foreground/70">
          Real projects from verified Lowe's purchasers — 119 reviews
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BUILDS.map((b) => (
            <figure
              key={b.label}
              className="flex flex-col overflow-hidden rounded-xl border border-cedar/25 bg-cream shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={b.img}
                alt={b.alt}
                width={800}
                height={600}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="flex flex-1 flex-col gap-3 p-5">
                <p className="font-body text-sm italic text-foreground/85">“{b.quote}”</p>
                <span className="font-ui mt-auto text-xs font-semibold uppercase tracking-[0.14em] text-highlight">
                  {b.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90"
          >
            Read All 119 Reviews at Lowe's →
          </a>
        </div>
      </div>
    </section>
  );
}
