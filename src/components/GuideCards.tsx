"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { LOWES_UTM_URL } from "@/lib/site";

interface Article {
  label: string;
  title: string;
  excerpt: string;
  readTime: string;
  img: string;
  alt: string;
  cta: { text: string; href: string };
  cta2?: { text: string; href: string };
  body: ReactNode;
}

const ARTICLES: Article[] = [
  {
    label: "Contractor Guide",
    title: "A Builder's Guide to Budget-Friendly Cedar Siding",
    excerpt:
      "How contractors and DIYers across the US source affordable Western Red Cedar shingle siding at their local Lowe's. No shipping, no minimum order, no contractor account required.",
    readTime: "5 min read",
    img: "/images/western-red-cedar-shed-siding.png",
    alt: "Western Red Cedar shingle siding installed on a backyard shed exterior",
    cta: { text: "Find Your Nearest Lowe's", href: "/store-locator" },
    body: (
      <>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          What Makes Cedar Siding the Smart Budget Choice
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          When contractors and DIY builders compare cladding materials, the
          conversation usually lands on the same four options. Vinyl siding is
          cheap and fast but reads as plastic from ten feet away. Composite
          cladding looks better but costs significantly more per square foot.
          Engineered wood is solid but comes with finish and moisture
          limitations. And then there is natural wood siding, specifically
          Western Red Cedar shingles, which delivers a look and performance
          profile that none of the alternatives can replicate, at a price point
          most people do not expect.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Western Red Cedar is one of the most naturally durable softwoods
          available anywhere in North America. Its natural oils resist
          moisture, rot, and insects without any chemical treatment. Straight,
          even grain makes it easy to cut and nail. For a contractor pricing
          out a residential siding job or a DIYer planning a shed exterior,
          these are not premium features. They are baseline performance you are
          getting at undercourse grade pricing.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Why Undercourse Grade Is the Right Call for Budget Siding Projects
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          The Western Red Cedar shingles sold at Lowe's as Item #3976 are #3/#4
          undercourse grade. That grade designation is not a compromise. It is
          a specific product engineered for a specific purpose. Natural
          character marks, flat grain, and occasional knots are permitted and
          present at this grade. For exterior siding on sheds, pergolas,
          privacy screens, and residential accent areas, that variation is what
          gives the installation its genuine handcrafted quality.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          For any exterior application where the shingles will weather
          naturally or be stained, undercourse grade performs comparably to
          higher grades. The weather resistance comes from the wood species
          itself, not the grade. Western Red Cedar at any grade level carries
          the same natural oils and the same resistance to rot and insects.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Coverage and Pricing
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          One bundle covers approximately 25 square feet at a 5.5 inch
          exposure. Current retail price is $50 per bundle at participating
          Lowe's locations.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="font-ui w-full min-w-[320px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-primary">
                <th className="py-2 pr-4 font-semibold">Wall area</th>
                <th className="py-2 font-semibold">Bundles needed</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              {[
                ["50 sq ft", "2 bundles"],
                ["100 sq ft", "4 bundles"],
                ["200 sq ft", "9 bundles"],
                ["300 sq ft", "13 bundles"],
                ["500 sq ft", "21 bundles"],
              ].map(([a, b]) => (
                <tr key={a} className="border-b border-border/60">
                  <td className="py-2 pr-4">{a}</td>
                  <td className="py-2">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-body mt-4 text-foreground/80">
          For double-course applications measure in running feet. One bundle
          yields approximately 32 running feet as undercourse material.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          How to Find Cedar Shingles at Your Local Lowe's
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Item #3976 is available in-store at Lowe's locations nationwide. No
          online shipping. Call the lumber department with Item #3976 to
          confirm stock before your trip. Ask the pro desk about bulk
          availability for jobs requiring ten or more bundles.
        </p>
      </>
    ),
  },
  {
    label: "DIY Guide",
    title: "Common Cladding Materials — Why Cedar Shingles Win for Budget Builders",
    excerpt:
      "Vinyl, composite, engineered wood, or real cedar? A straight comparison of the most common wall cladding materials for DIYers and budget-conscious builders.",
    readTime: "4 min read",
    img: "/images/cedar-shingles-stack-wide.png",
    alt: "Close-up of Western Red Cedar shingle bundle showing natural wood grain and undercourse grade character",
    cta: { text: "View Cedar Shingle Grades", href: "/western-red-cedar" },
    body: (
      <>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          The Four Options Every Builder Compares
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Every exterior cladding project eventually comes down to the same
          decision. Natural wood, engineered wood, composite, or vinyl. Each
          has a legitimate use case. Here is a straight comparison so you can
          make the right call for your project and your budget.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Vinyl and Composite Siding
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Vinyl is the most affordable cladding option upfront and requires
          almost no maintenance. The trade-off is appearance. Vinyl reads as
          synthetic from any distance and cannot be stained, refinished, or
          repaired seamlessly. Composite options look better and hold up well
          but cost significantly more per square foot. Neither option has any
          natural material character.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Engineered Wood Siding
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Engineered wood products like LP SmartSide offer solid performance
          and a wood-like appearance at a lower price than natural wood. They
          require careful moisture management during installation and storage,
          and finish options are more limited than real cedar. Engineered wood
          is a strong choice for large-scale residential builds where
          consistency matters more than character.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Natural Wood: Lap Siding and Tongue-and-Groove
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Natural wood lap siding and tongue-and-groove boards deliver genuine
          material character that no synthetic alternative matches. The
          trade-off is cost. Clear-grade natural wood siding is priced at a
          significant premium over composite and vinyl options, which puts it
          out of reach for budget projects and outbuildings.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Western Red Cedar Shingles — The Budget-Friendly Natural Option
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Western Red Cedar shingles at undercourse grade pricing give you
          genuine natural wood performance and character at a cost that works
          for sheds, privacy screens, accent walls, and exterior cladding on
          non-primary structures. At $50 per bundle and approximately 25 square
          feet of coverage per bundle, material cost runs around $200 per 100
          square feet of wall. That is real cedar pricing that competes
          directly with engineered wood and mid-tier composite options.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          The natural oils in Western Red Cedar resist moisture, rot, and
          insects without any treatment. Left natural the wood weathers to a
          silver-gray patina. Stained or sealed it holds color longer than most
          softwoods. It cuts with a standard circular saw and nails without
          splitting. For DIYers and budget builders it is the easiest natural
          wood cladding product to work with on a first project.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          For DIYers and Budget Builders:
        </h3>
        <ul className="font-body mt-3 list-disc space-y-2 pl-6 text-foreground/80">
          <li>Natural weather resistance with no chemical treatment required</li>
          <li>Accepts any oil-based stain or can be left to weather naturally</li>
          <li>Cuts and nails with standard hand tools</li>
          <li>Available at Lowe's in-store with no minimum order — Item #3976</li>
          <li>$50 per bundle, approximately 4 bundles per 100 sq ft</li>
        </ul>
      </>
    ),
  },
  {
    label: "Grade Guide",
    title: "Cedar Shingle Grades Explained — #1 Blue Label vs #2 Red Label vs Undercourse",
    excerpt:
      "A plain-language breakdown of every Western Red Cedar shingle grade so contractors and DIYers can choose the right product for the right job.",
    readTime: "5 min read",
    img: "/images/cedar-shingles-stack-wide.png",
    alt: "Bundled Western Red Cedar shingles with green strapping showing natural grain and grade variation",
    cta: { text: "Find Your Nearest Lowe's", href: "/store-locator" },
    body: (
      <>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          What the Grade System Actually Means
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Western Red Cedar shingles are graded by the Cedar Shake and Shingle
          Bureau based on wood quality, grain orientation, and the presence of
          natural defects. The grade determines appearance, not structural
          performance. All grades of Western Red Cedar carry the same natural
          rot resistance, the same natural oils, and the same weather
          durability. The grade tells you how the face of the shingle looks,
          nothing more.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Number 1 Grade, Blue Label (Premium / Clear)
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          100% heartwood, 100% clear, and 100% edge-grain. No knots, no
          sapwood, no flat grain. This is the top of the grading spectrum and
          is used where flawless appearance and maximum longevity matter most —
          roofing on inhabited structures and high-end exterior sidewalls where
          the shingle face will be prominently visible at close range. Price
          reflects the premium. For most siding, shed, and accent wall
          applications it is significantly more than the job requires.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Number 2 Grade, Red Label (Good / Select)
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Mostly clear with limited defects allowed above the clear portion.
          Flat grain and some sapwood are permitted in the upper section of the
          shingle. A solid mid-tier choice for general exterior applications,
          starter courses, or secondary walls where minor variation is
          acceptable. Most of the shingle face remains clear and consistent.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Number 3 Grade, Black Label (Common / Utility)
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          More visible character including knots, sapwood, and flat grain
          throughout. A reliable, value-focused choice for economy applications
          and secondary buildings. Used where durability matters more than face
          appearance — utilitarian siding, outbuilding exteriors, and budget
          residential projects.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Undercoursing Grade (Utility / Black Label)
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Natural character marks throughout. Specifically milled for
          undercoursing in double-course wall systems where the shingle is the
          base layer, hidden beneath the outer course. Because the face is not
          exposed in its intended structural application, appearance is
          unrestricted. This is the grade sold at Lowe's as Item #3976.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          For DIY interior accent walls, shed siding, pergola cladding, and
          rustic outdoor structures, Undercoursing Grade is the ideal choice.
          The natural variation in grain, knots, and color is exactly what
          creates the handcrafted warmth that higher grades cannot replicate.
          For grilling planks the grade is irrelevant entirely since the plank
          is consumed in the process.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Why Undercoursing Grade Performs Identically on Exterior Applications
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Weather resistance in Western Red Cedar comes from the wood species,
          not the grade. The natural oils (thujaplicin) are present in every
          grade. Rot and insect resistance is a property of the tree, not the
          grading standard. A Number 1 Blue Label shingle and an Undercoursing
          Grade shingle exposed to the same climate for the same number of
          years will weather at the same rate and with the same structural
          integrity. The difference you see is on the face, not in the
          performance.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Choosing the Right Grade for Your Project
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Inhabited structure roofing: Number 1 Blue Label only. This is a code
          and performance requirement, not a preference. High-end exterior
          residential sidewalls where face appearance is the selling point:
          Number 1 or Number 2. General exterior siding on sheds, garages,
          pergolas, and privacy screens: Undercoursing Grade performs
          comparably at a fraction of the cost. Interior accent walls:
          Undercoursing Grade is the better choice. The character marks are the
          feature. Double-course installation base layer: Undercoursing Grade
          is the correct and standard material.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Current retail: $50 per bundle at Lowe's. Item #3976.
        </p>
      </>
    ),
  },
  {
    label: "Maintenance Guide",
    title: "How Long Do Cedar Shingles Last Outside — And How to Make Them Last Longer",
    excerpt:
      "Untreated Western Red Cedar shingles weather naturally to silver gray. Here is what to expect over time and how to extend the life of any exterior cedar installation.",
    readTime: "4 min read",
    img: "/images/western-red-cedar-shed-siding.png",
    alt: "Shingle-clad house with traditional Western Red Cedar shingle siding, white trim, and a covered porch",
    cta: { text: "View Installation Guide", href: "/installation-guide" },
    body: (
      <>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          The Short Answer
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Western Red Cedar shingles installed correctly on an exterior wall
          last 15 to 30 years without any finish applied, and significantly
          longer with periodic maintenance. The natural oils in cedar are the
          reason. No synthetic treatment is required for the wood to perform
          outdoors. This is not a marketing claim. It is the documented
          performance basis for using cedar as a building material for
          thousands of years across the Pacific Northwest coast.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          What Happens When You Leave Cedar Untreated
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Untreated Western Red Cedar exposed to the elements goes through a
          predictable weathering sequence. In the first year the warm
          amber-brown tone begins to lighten. Between years one and three the
          wood transitions to a silver-gray patina as UV light breaks down the
          surface lignin and tannins. Once the silver-gray color sets, the
          weathering process largely stabilizes. The wood beneath the weathered
          surface layer remains structurally sound and retains its rot and
          insect resistance.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Many contractors and homeowners prefer the silver-gray outcome. It is
          a natural, low-maintenance finish that requires no upkeep and never
          peels, flakes, or needs stripping. Coastal architectural styles in
          the Pacific Northwest, New England, and the Southeast specifically
          use weathered cedar as a design feature.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Do Cedar Shingles Resist Rot Naturally
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Yes. Western Red Cedar contains natural preservative oils, primarily
          thujaplicin, that make the heartwood resistant to decay and insect
          damage without any chemical treatment. This is why cedar has been
          used for outdoor construction, canoe building, and roofing for
          centuries in climates with high rainfall and humidity. The rot
          resistance is an inherent property of the species, not a finish
          applied after milling.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Undercoursing grade shingles retain this property regardless of
          grade. The natural oils are present in all grades of Western Red
          Cedar. Grade affects appearance only.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          How to Preserve the Original Cedar Color
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          If you want to maintain the warm amber-brown tone of new cedar rather
          than allowing it to weather to silver-gray, apply an oil-based
          penetrating stain or water repellent within four to eight weeks of
          installation. This is the window before UV exposure begins breaking
          down the surface tannins.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Use only oil-based penetrating products. Film-forming finishes like
          paint or polyurethane trap moisture inside the wood and cause
          premature failure. Cedar needs to breathe. Apply finish to all four
          sides of each shingle before installation for the most complete
          protection, then apply a maintenance coat to exposed faces every two
          to four years depending on sun exposure and climate.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Signs That Cedar Shingles Need Attention
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Checking (surface cracks along the grain): Normal and cosmetic. Does
          not affect performance. Cupping or warping: Often caused by moisture
          imbalance between the face and back of the shingle. Usually a result
          of finish being applied to one face only during installation. Dark
          staining streaks: Caused by electro-galvanized or standard steel
          nails corroding. Always use stainless steel or hot-dipped galvanized
          nails with cedar. Splitting at nail holes: Usually caused by nails
          placed too close to the edge or shingles installed too dry in
          low-humidity conditions.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          The Bottom Line on Cedar Shingle Longevity
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Left untreated and installed correctly, Western Red Cedar shingles on
          an exterior wall will outlast any vinyl or composite cladding product
          on the market. The material cost for Item #3976 at Lowe's is $50 per
          bundle. The performance you get in return is decades of natural
          weather resistance with no chemical dependency. For budget builders
          and contractors pricing competitive jobs, that combination is
          difficult to beat.
        </p>
      </>
    ),
  },
  {
    label: "Interior DIY",
    title: "Untreated Cedar Shingles for Interior Accent Walls — Everything You Need to Know",
    excerpt:
      "The same bundle used for exterior siding works beautifully on interior walls. Here is why untreated cedar is the right choice for dining rooms, bedrooms, offices, and man caves.",
    readTime: "4 min read",
    img: "/images/Interior_Accent_Walls.png",
    alt: "Interior accent wall covered in natural Western Red Cedar shingles showing rustic warm grain texture",
    cta: { text: "See Full Installation Guide", href: "/installation-guide" },
    body: (
      <>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Why Cedar Works Indoors
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Western Red Cedar shingles sold as Item #3976 at Lowe's are 100%
          natural and untreated. No stains, no sealants, no chemical
          preservatives. That is what makes them equally suited to an interior
          accent wall and an exterior shed. There is nothing on these shingles
          that is not supposed to be in your home. The wood is exactly what it
          is. Raw, natural, straight from the mill.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Interior cedar shingle accent walls have become one of the most
          searched DIY home improvement projects for good reason. The material
          cost is low. The installation skill threshold is accessible to a
          first-time DIYer. The result — a wall with genuine natural texture,
          warmth, and subtle cedar aroma — is something no painted drywall,
          wallpaper, or peel-and-stick product can replicate.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Best Rooms for Cedar Shingle Accent Walls
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Dining room feature wall: Cedar behind a dining table is one of the
          most impactful single-wall treatments available. The texture creates
          depth and visual interest that makes the room feel designed rather
          than decorated. A standard dining room accent wall runs 8 to 10 feet
          wide by 8 to 9 feet tall, approximately 70 to 90 square feet, which
          requires 3 to 4 bundles.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Bedroom headboard wall: Cedar behind the bed replaces the need for a
          headboard and transforms the entire energy of the room. The natural
          grain and subtle cedar aroma are calming. Most bedroom headboard
          walls run 10 to 14 feet wide, requiring 4 to 6 bundles depending on
          ceiling height and exposure.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Man cave and game room: Floor to ceiling cedar on one or more walls
          establishes the aesthetic of the entire room. Pairs with leather
          furniture, dark wood, and warm lighting for a lodge or craft
          aesthetic. Larger rooms may require 8 to 12 bundles per wall.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Home office background wall: A cedar accent wall behind your desk
          creates a video call background that is distinctive without being
          distracting. One of the fastest-growing use cases as remote work has
          made the home office a visible professional environment.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Kitchen accent wall: A short end wall or the wall behind a kitchen
          island clad in cedar shingles adds organic warmth to a space that
          often runs cold and hard. Keep the installation away from direct
          moisture and heat sources.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          How Many Bundles for an Interior Accent Wall
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          At a 5 inch exposure one bundle covers approximately 25 square feet.
          For interior walls a tighter exposure of 4 to 5 inches creates a more
          refined, layered look. A wider exposure of 6 to 7 inches creates a
          bolder, more rustic texture.
        </p>
        <div className="mt-4 overflow-x-auto">
          <table className="font-ui w-full min-w-[320px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-primary">
                <th className="py-2 pr-4 font-semibold">Room and wall</th>
                <th className="py-2 pr-4 font-semibold">Approximate sq ft</th>
                <th className="py-2 font-semibold">Bundles needed</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              {[
                ["Dining room feature wall", "80 sq ft", "4 bundles"],
                ["Bedroom headboard wall", "100 sq ft", "5 bundles"],
                ["Man cave full wall", "130 sq ft", "6 bundles"],
                ["Home office background", "60 sq ft", "3 bundles"],
              ].map(([a, b, c]) => (
                <tr key={a} className="border-b border-border/60">
                  <td className="py-2 pr-4">{a}</td>
                  <td className="py-2 pr-4">{b}</td>
                  <td className="py-2">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="font-body mt-4 text-foreground/80">
          Current retail: $50 per bundle at Lowe's. Item #3976.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Installation Tips for Interior Walls
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Interior cedar shingle installation is simpler than exterior because
          there is no weather barrier or structural nailing requirement. Use
          construction adhesive and a brad nailer. No house wrap, no felt
          paper, no starter strip required.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Mark level horizontal lines across the wall at your planned exposure
          interval before starting. These are your course guides. A level first
          course makes every course above it easier. Use a laser level on any
          wall wider than 8 feet.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Leave a slight gap between adjacent shingles, approximately 1/16
          inch, for a natural shadow line effect. Stagger joints at least 1.5
          inches between courses. Trim the final course at the ceiling and
          cover the cut edge with crown moulding or a simple painted trim
          strip.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Leave the cedar natural for the warmest, most authentic result. If
          you want to enrich the color without adding sheen, a single coat of
          raw linseed oil deepens the grain beautifully. Avoid film-forming
          finishes on interior cedar.
        </p>
      </>
    ),
  },
  {
    label: "Buyer's Guide",
    title: "Where to Buy Cedar Shingles — A Contractor and DIY Buyer's Guide to Item #3976 at Lowe's",
    excerpt:
      "Western Red Cedar undercourse shingles are available at Lowe's nationwide with no minimum order. Here is everything you need to know before your trip — pricing, coverage, and what to ask at the pro desk.",
    readTime: "4 min read",
    img: "/images/western-red-cedar-shed-siding.png",
    alt: "Natural Western Red Cedar shingles weathering to silver gray on exterior shed siding",
    cta: { text: "Find Your Nearest Lowe's", href: "/store-locator" },
    cta2: { text: "View at Lowes.com", href: LOWES_UTM_URL },
    body: (
      <>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          The Straightforward Answer
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Western Red Cedar Shingles (Item #3976 / Model #3976) are sold
          exclusively at Lowe's, in-store only. There is no online shipping
          option. You go to your nearest stocking Lowe's, pick up the bundles
          you need, and start the next day. No freight lead time, no minimum
          pallet order, no contractor account required.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Current retail price: $50 per bundle at participating Lowe's
          locations.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Use our Store Locator to find the nearest stocking location before
          making the trip.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          What to Know Before You Go
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Call ahead with Item #3976. Inventory levels vary by location and
          season. Calling the lumber department with the item number takes 60
          seconds and confirms whether they have enough stock for your job
          before you drive. Ask specifically how many bundles are on the shelf,
          not just whether they carry the product.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Plan your bundle count before you call. One bundle covers
          approximately 25 square feet at a 5.5 inch exposure. Add 10 percent
          for cuts and waste. For a 200 square foot shed that is 9 bundles. For
          a 100 square foot accent wall that is 5 bundles with overage built
          in.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Coverage Quick Reference
        </h3>
        <div className="mt-4 overflow-x-auto">
          <table className="font-ui w-full min-w-[320px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left text-primary">
                <th className="py-2 pr-4 font-semibold">Project</th>
                <th className="py-2 pr-4 font-semibold">Wall area</th>
                <th className="py-2 font-semibold">Bundles</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              {[
                ["Small accent wall", "60 sq ft", "3 bundles"],
                ["Standard accent wall", "100 sq ft", "5 bundles"],
                ["Small shed exterior", "150 sq ft", "7 bundles"],
                ["Standard shed exterior", "200 sq ft", "9 bundles"],
                ["Large shed or privacy screen", "300 sq ft", "14 bundles"],
              ].map(([a, b, c]) => (
                <tr key={a} className="border-b border-border/60">
                  <td className="py-2 pr-4">{a}</td>
                  <td className="py-2 pr-4">{b}</td>
                  <td className="py-2">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          What to Ask at the Pro Desk
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          For contractors buying in volume, the Lowe's pro desk can check
          inventory across nearby store locations and in some markets arrange
          to hold a quantity for a specific job. Ask for the pro desk when you
          call rather than the main lumber department. Give them Item #3976 and
          the number of bundles you need. They can also advise on whether the
          store is expecting a restock if current inventory is low.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Why Lowe's Is the Only Retailer
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Lowe's is the only retailer with the distribution volume to keep
          Western Red Cedar undercourse shingles in stock year round across
          hundreds of locations. Home Depot and other home improvement
          retailers do not carry this product with consistent national
          availability. Independent lumber yards may carry higher-grade cedar
          shingles but rarely stock undercourse grade at this price point.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          The Lowe's exclusive distribution also means pricing is consistent
          and competitive. At $50 per bundle for a natural, untreated cedar
          product with genuine weather resistance, there is no equivalent
          option at any comparable price point through other channels.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          Buying Cedar Shingles vs Cedar Shakes
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Cedar shingles are sawn on both faces, producing a uniform taper from
          thin tip to thicker butt. Cedar shakes are split on one or both
          faces, producing a rougher, more textured surface. For siding, accent
          walls, and smooth exterior applications, shingles are the correct
          product. For roofing on non-inhabited structures where a rougher
          texture is desired, either can be used.
        </p>
        <p className="font-body mt-3 text-foreground/80">
          Item #3976 is a cedar shingle, not a shake. The sawn face is what
          makes it suitable for interior accent wall applications and smooth
          exterior siding profiles.
        </p>
        <h3 className="font-display mt-6 text-xl font-semibold text-primary">
          The Difference Between Cedar Shingles and Cedar Siding Boards
        </h3>
        <p className="font-body mt-3 text-foreground/80">
          Cedar lap siding and tongue-and-groove cedar boards are horizontal
          boards installed with a consistent overlap. Cedar shingles are
          tapered individual pieces installed in overlapping horizontal
          courses. Shingles create more visual texture and depth than board
          siding and are significantly easier to install on irregular wall
          surfaces, curved walls, and structures with multiple corners. For
          sheds, outbuildings, and accent walls, shingles are the more
          forgiving and visually interesting choice.
        </p>
      </>
    ),
  },
];

function GuideCard({ article }: { article: (typeof ARTICLES)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group block w-full text-left"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={article.img}
            alt={article.alt}
            width={1024}
            height={640}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.15em] text-highlight">
            {article.label}
          </p>
          <h3 className="font-display mt-2 text-2xl font-semibold text-primary">
            {article.title}
          </h3>
          <p className="font-body mt-2 text-foreground/80">{article.excerpt}</p>
          <p className="font-ui mt-4 inline-flex items-center gap-2 text-sm font-semibold text-highlight">
            {open ? "Close article" : `Read article — ${article.readTime}`}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
              aria-hidden
            />
          </p>
        </div>
      </button>
      {open && (
        <div className="border-t border-border px-6 pb-6">
          {article.body}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={article.cta.href}
              className="font-ui inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-primary/90"
            >
              {article.cta.text}
            </a>
            {article.cta2 && (
              <a
                href={article.cta2.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-ui inline-flex items-center justify-center gap-2 rounded-md border-2 border-highlight bg-highlight/10 px-5 py-3 text-sm font-semibold text-primary shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-highlight/20"
              >
                {article.cta2.text}
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  );
}

export function GuideCards() {
  return (
    <div className="grid gap-7 sm:grid-cols-2">
      {ARTICLES.map((a) => (
        <GuideCard key={a.title} article={a} />
      ))}
    </div>
  );
}
