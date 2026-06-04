import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Breadcrumbs } from "@/components/SiteLayout";
import { LowesCTA } from "@/components/CTAButton";
import { pageMeta, jsonLdScript, breadcrumbLd, SITE_URL } from "@/lib/site";
import grillImg from "@/assets/project-grilling.jpg";
import { Flame, Timer, Utensils } from "lucide-react";

const TITLE = "Cedar Plank Grilling Guide — Salmon, Bratwurst & Vegetables on Western Red Cedar";
const DESC = "Learn how to use natural Western Red Cedar shingles as grilling planks. Step-by-step recipes for cedar plank salmon, bratwurst, and vegetables. Soak, grill, feast.";

const RECIPES = [
  {
    id: "salmon",
    name: "Cedar Plank Salmon",
    blurb: "The Pacific Northwest classic — Native American tradition, modern grill.",
    yield: "2 servings",
    time: "15–20 min · 375–400°F",
    cookTime: "PT20M",
    ingredients: [
      "1 cedar plank (soaked at least 1 hour)",
      "2 salmon fillets (6 oz each)",
      "Salt and pepper",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "2 cloves garlic, minced",
      "1 tbsp fresh dill, chopped",
      "1 tbsp fresh parsley, chopped",
      "Lemon slices, for garnish",
    ],
    method: [
      "Soak cedar plank in water for at least 1 hour (longer is better).",
      "Preheat grill to 375–400°F.",
      "Place soaked plank on grill, close lid, heat 7 minutes until lightly smoking.",
      "Season salmon with salt, pepper, garlic, dill, parsley, olive oil, and lemon juice.",
      "Place fillets on the plank, close lid, and cook 15–20 minutes until fish flakes easily with a fork.",
      "Garnish with lemon slices and serve directly from the plank.",
    ],
  },
  {
    id: "brats",
    name: "Cedar Planked Bratwurst",
    blurb: "Tailgate favorite — indirect heat prevents flare-ups and split skins.",
    yield: "6 servings",
    time: "25–30 min · medium, indirect",
    cookTime: "PT30M",
    ingredients: [
      "1 cedar plank (soaked at least 1 hour)",
      "6 bratwursts",
      "1 tbsp Dijon mustard",
      "1 tbsp apple cider vinegar",
      "Fresh parsley, chopped",
      "Buns (optional)",
    ],
    method: [
      "Soak cedar plank in water for at least 1 hour.",
      "Set up the grill for indirect heat — coals or burner on one side, food over the unlit area.",
      "Place soaked plank over indirect heat, close lid, warm for 5–7 minutes.",
      "Add bratwursts to the plank, close lid, and cook 25–30 minutes until internal temperature reaches 170°F. Indirect heat prevents skin splitting and flare-ups.",
      "Whisk Dijon mustard and apple cider vinegar to make the sauce.",
      "Top brats with fresh parsley and serve with the Dijon-vinegar sauce, with or without buns.",
    ],
  },
  {
    id: "vegetables",
    name: "Cedar Grilled Vegetables",
    blurb: "Smoky, charred, herb-fresh — the perfect side dish.",
    yield: "4 servings",
    time: "15–20 min · medium",
    cookTime: "PT20M",
    ingredients: [
      "1 cedar plank (soaked at least 1 hour)",
      "1 red bell pepper, sliced",
      "1 yellow bell pepper, sliced",
      "1 zucchini, sliced",
      "1 yellow squash, sliced",
      "1 red onion, sliced",
      "1 cup cherry tomatoes",
      "2 tbsp olive oil",
      "1 tbsp balsamic vinegar",
      "2 cloves garlic, minced",
      "Salt and pepper",
      "Fresh herbs (thyme, rosemary, or basil)",
    ],
    method: [
      "Soak cedar plank in water for at least 1 hour.",
      "Preheat grill to medium.",
      "Toss vegetables with olive oil, balsamic vinegar, garlic, salt, pepper, and chopped herbs.",
      "Place soaked plank on grill, close lid, heat 7 minutes until lightly smoking.",
      "Spread vegetables on the plank, close lid, and cook 15–20 minutes, turning once, until tender with a light char.",
      "Serve directly from the plank.",
    ],
  },
];

export const Route = createFileRoute("/cedar-plank-grilling-guide")({
  head: () => {
    const m = pageMeta({ title: TITLE, description: DESC, path: "/cedar-plank-grilling-guide", ogType: "article", image: `${SITE_URL}${grillImg}` });
    return {
      ...m,
      scripts: [
        ...RECIPES.map((r) =>
          jsonLdScript({
            "@context": "https://schema.org",
            "@type": "Recipe",
            name: r.name,
            description: r.blurb,
            image: `${SITE_URL}${grillImg}`,
            recipeYield: r.yield,
            cookTime: r.cookTime,
            recipeCategory: "Main Course",
            recipeCuisine: "American",
            recipeIngredient: r.ingredients,
            recipeInstructions: r.method.map((m) => ({ "@type": "HowToStep", text: m })),
          }),
        ),
        jsonLdScript(breadcrumbLd([{ name: "Home", path: "/" }, { name: "Grilling Guide", path: "/cedar-plank-grilling-guide" }])),
      ],
    };
  },
  component: GrillingPage,
});

function GrillingPage() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6">
        <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Grilling Guide" }]} />
      </div>

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={grillImg} alt="Cedar plank salmon grilling with lemon and herbs" width={1024} height={768} className="h-full w-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/40" />
        </div>
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="font-ui text-sm font-semibold uppercase tracking-[0.2em] text-highlight">From the grill</p>
          <h1 className="font-display mt-3 text-4xl font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
            Cedar Plank Grilling Guide — Western Red Cedar Shingles on the Grill
          </h1>
          <p className="font-body mt-5 max-w-2xl text-lg text-primary-foreground/90">
            Because these shingles are 100% natural and untreated, they are safe and ideal BBQ grilling
            planks. Soak in water for at least 1 hour before use.
          </p>
        </div>
      </section>

      {/* UNIVERSAL HOW-TO */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Universal cedar plank method</h2>
        <ol className="font-body mt-8 space-y-4">
          {[
            "Soak the cedar plank in water for at least 1 hour (longer is better).",
            "Preheat grill to medium heat.",
            "Place soaked plank on grill, close lid, heat 7 minutes until lightly smoking.",
            "Place seasoned food on plank, close lid, cook to temperature.",
            "Serve from the plank or transfer to a board.",
          ].map((s, i) => (
            <li key={i} className="flex gap-4 rounded-lg border border-border bg-card p-5 shadow-sm">
              <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {i + 1}
              </span>
              <span className="text-lg text-foreground/85">{s}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* RECIPES */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">Three recipes to start with</h2>
          <div className="mt-10 space-y-10">
            {RECIPES.map((r) => (
              <article key={r.id} id={r.id} className="rounded-xl border border-border bg-card p-7 shadow-sm">
                <h3 className="font-display text-2xl font-bold text-primary sm:text-3xl">{r.name}</h3>
                <p className="font-body mt-2 text-foreground/80">{r.blurb}</p>
                <div className="font-ui mt-4 flex flex-wrap gap-4 text-sm text-foreground/70">
                  <span className="inline-flex items-center gap-1.5"><Timer className="h-4 w-4 text-accent" /> {r.time}</span>
                  <span className="inline-flex items-center gap-1.5"><Utensils className="h-4 w-4 text-accent" /> {r.yield}</span>
                  <span className="inline-flex items-center gap-1.5"><Flame className="h-4 w-4 text-highlight" /> Cedar plank</span>
                </div>
                <div className="mt-6 grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="font-display text-lg font-semibold text-primary">Ingredients</h4>
                    <ul className="font-body mt-3 list-disc space-y-1.5 pl-5 text-foreground/85">
                      {r.ingredients.map((i) => <li key={i}>{i}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-primary">Method</h4>
                    <ol className="font-body mt-3 list-decimal space-y-1.5 pl-5 text-foreground/85">
                      {r.method.map((m) => <li key={m}>{m}</li>)}
                    </ol>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
          Need planks?
        </h2>
        <p className="font-body mt-3 text-lg text-foreground/80">
          A bundle of Item #3976 doubles as siding and a season's worth of grilling planks.
        </p>
        <div className="mt-6"><LowesCTA size="lg">Buy at Lowe's</LowesCTA></div>
      </section>
    </SiteLayout>
  );
}
