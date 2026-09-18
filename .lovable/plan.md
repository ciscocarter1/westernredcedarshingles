# Focus-group site update

## Goal
Apply the requested conversion, content, store-locator, project-planning, contractor-resource, schema, and branding changes without altering unrelated sections. Keep the live Next pages and the parallel TanStack pages consistent.

## 1. Store locator and map
- Extend the stocking-store records with latitude/longitude and add a compact local US city/ZIP coordinate index, avoiding a third-party geocoding dependency at search time.
- Resolve city or ZIP input locally, calculate great-circle distance, sort stocking locations nearest-first, and show distance in miles.
- Return stores within 100 miles, with a minimum of the nearest three; when none are within 100 miles, show the exact requested nearest-store message.
- Preserve the state filter as a browsing option when there is no location search, and provide clear invalid/unknown-location feedback.
- Embed Maggie’s Google My Map above the search controls. The public viewer and embed URLs both currently return successfully without an access gate.
- Audit and correct every internal `/store-locator` destination in headers, footers, homepage content, FAQs, product calls to action, guide content, and the locator footer area.
- Add the muted “Don’t see your city?” expansion message below results.

## 2. Fastener and coverage standards
- Replace the two FAQ answers in the shared 14-question source with the supplied wording, so homepage FAQ schema, homepage quick answers, and the full FAQ remain identical.
- Standardize every exterior instruction and schema entry to Type 304 or 316 stainless-steel ring-shank nails; allow galvanized nails only for interior accent walls.
- Update installation steps, shed guides, project guides, metadata/schema supplies, and both page implementations.
- Replace all old coverage values with: “One bundle covers approximately 15 square feet at a 7.5 inch exposure.”
- Update examples and calculations to divide area by 15, add 10% waste, and round up.

## 3. Homepage sections
- Update only the named homepage sections: hero heading/body/buttons/helper, four selling points, 51-year stat, and the new “Find Your Path” contractor/DIY cards.
- Consolidate the three specified cedar/value sections into one “Real cedar, honest grade, real savings” section.
- Reduce the uses introduction to the requested single line while retaining all eight icons and labels.
- Replace the Tree of Life paragraph and add its link.
- Move, rather than delete, the Shelter / Tools / Clothing / Medicine grid into the cultural section on `/western-red-cedar`.
- Leave testimonials/contractor quotes unchanged.

## 4. Project cards and calculators
- Add a reusable amber bundle calculator to Product, Installation Guide, and Contractor Resources.
- Add consistent difficulty, time, tools, representative example size, calculated bundle estimate, and estimator link to all eight existing `/project-ideas` cards and the three homepage previews.
- Infer practical metadata for the five unspecified existing projects, as approved.
- Use representative example dimensions to produce transparent approximate bundle counts, as approved.
- Ensure the requested Firepit Privacy Screen and Gazebo or Pergola Cladding cards carry the supplied descriptions and metadata without changing images or accordion article content.

## 5. Contractor Resources
- Create `/contractor-resources` in both route implementations with unique metadata, canonical URL, breadcrumb schema, and appropriate Service schema.
- Add the requested contractor copy, spec table, calculator, stocking-location and installation links, and pro-desk guidance.
- Generate a clean one-page printable PDF at `/images/wrc-spec-sheet.pdf` containing the same spec facts.
- Add the new page to both sitemaps and the explicit TanStack prerender pages list, without adding it to the main navigation.

## 6. Branding and language cleanup
- Replace every “Western Red Cedar Planks” brand reference with “Western Red Cedar Shingles,” including footer, root metadata, Organization/WebSite/Product schema, and shared site name.
- Set the footer to the exact 2026 copyright sentence.
- Remove or rewrite every listed filler transition across all page copy while preserving factual meaning.
- Keep route-specific metadata complete for the requested primary pages and the new contractor page.

## Pre-build confirmations
- **Prerender list after edit:** `/`, `/product`, `/western-red-cedar`, `/installation-guide`, `/project-ideas`, `/cedar-shingles-faq`, `/store-locator`, `/contact`, `/contractor-resources` (plus the existing public content routes retained by the site).
- **Nail FAQ before:** “Yes. When working with Western Red Cedar you should use Type 304 or 316 stainless steel ring shank nails… A level… and galvanized nails are all you need.”
- **Nail FAQ after:** “Not really. Cedar is one of the most forgiving siding materials to work with. For exterior installs, use Type 304 or 316 stainless-steel ring-shank nails; cedar's natural tannins react with other metals over time and cause staining. For interior accent walls, galvanized nails are fine. Beyond that, you just need a level, a chalk line, a hammer or nail gun, and a circular or hand saw. The wood cuts cleanly and nails without splitting.”
- **Coverage target:** final audit will require zero instances of `25 sq ft`, `25 square feet`, or `5.5 inch` exposure; `15 sq ft at 7.5 inch exposure` will be the only square-foot coverage standard.
- **Branding target:** footer and Organization schema will both read “Western Red Cedar Shingles,” never “Western Red Cedar Planks.”

## Validation
- Run targeted tests for geocoding, distance sorting, minimum-three behavior, 100-mile messaging, and bundle math.
- Run repository-wide audits for old coverage, contradictory fasteners, old branding, filler transitions, and broken internal store-locator links.
- Verify desktop and mobile rendering for homepage, store locator, Product, Installation Guide, Project Ideas, Western Red Cedar, FAQ, and Contractor Resources.
- Confirm the map, search flow, calculators, download link, all calls to action, metadata/schema, sitemap, and prerender output.
