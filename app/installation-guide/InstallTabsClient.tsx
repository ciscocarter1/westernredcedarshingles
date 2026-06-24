"use client";

import { useState } from "react";
import type { Step } from "./steps-data";

export default function InstallTabsClient({
  exteriorSteps,
  interiorSteps,
  howtoPdf,
}: {
  exteriorSteps: Step[];
  interiorSteps: Step[];
  howtoPdf: string;
}) {
  const [tab, setTab] = useState<"exterior" | "interior">("exterior");
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6">
      <div role="tablist" className="font-ui inline-flex rounded-lg border border-border bg-secondary p-1">
        {(["exterior", "interior"] as const).map((t) => (
          <button
            key={t}
            role="tab"
            aria-selected={tab === t}
            onClick={() => setTab(t)}
            className={`rounded-md px-5 py-2.5 text-sm font-semibold transition ${
              tab === t ? "bg-primary text-primary-foreground shadow" : "text-foreground/70 hover:text-foreground"
            }`}
          >
            {t === "exterior" ? "Exterior wall" : "Interior accent wall"}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <StepList steps={tab === "exterior" ? exteriorSteps : interiorSteps} />
      </div>

      {/* Product spec sheet */}
      <div className="font-body mt-12 rounded-xl border border-border bg-card p-6 shadow-sm">
        <h3 className="font-display text-xl font-semibold text-primary">Product spec sheet — plan your purchase</h3>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="font-ui text-xs font-semibold uppercase tracking-wider text-foreground/60">Each shingle</dt>
            <dd className="mt-1 text-foreground/85">⅜" – ⅝" thick × 18" long × random width 4" – 14"</dd>
          </div>
          <div>
            <dt className="font-ui text-xs font-semibold uppercase tracking-wider text-foreground/60">Coverage per bundle</dt>
            <dd className="mt-1 text-foreground/85">At 7.50" exposure = 15 sq ft of wall coverage with ⅛" gap</dd>
          </div>
        </dl>
      </div>

      {/* Double-course note */}
      <div className="font-body mt-8 rounded-xl border border-highlight/40 bg-highlight/10 p-6">
        <h3 className="font-display text-xl font-semibold text-primary">Double-course method note</h3>
        <p className="mt-2 text-foreground/85">
          #3/#4 undercourse shingles installed as the first (undercourse) layer beneath a higher-grade
          outer shingle create wider exposure, deeper shadow lines, and a more dramatic wall profile.
          <strong> Measure undercourse needs in linear feet, not square feet</strong> — approximately
          <strong> 32 running feet per bundle</strong>.
        </p>
      </div>
    </section>
  );
}

function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="space-y-4">
      {steps.map((s, i) => (
        <li key={i} className="flex gap-5 rounded-lg border border-border bg-card p-5 shadow-sm">
          <div className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
            {i + 1}
          </div>
          <div>
            <div className="font-display text-lg font-semibold text-primary">{s.name}</div>
            <p className="font-body mt-1 text-foreground/80">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
