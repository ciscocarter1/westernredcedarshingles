"use client";

import { useMemo, useState } from "react";

export function BundleCalculator() {
  const [length, setLength] = useState(10);
  const [height, setHeight] = useState(8);
  const bundles = useMemo(() => Math.ceil((Math.max(0, length) * Math.max(0, height) / 15) * 1.1), [length, height]);

  return (
    <div className="rounded-xl border border-highlight/40 bg-highlight/10 p-6">
      <h3 className="font-display text-2xl font-semibold text-primary">Bundle calculator</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="font-ui text-sm font-semibold text-foreground">
          Wall length in feet
          <input type="number" min="0" step="0.5" value={length} onChange={(event) => setLength(Number(event.target.value))} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
        </label>
        <label className="font-ui text-sm font-semibold text-foreground">
          Wall height in feet
          <input type="number" min="0" step="0.5" value={height} onChange={(event) => setHeight(Number(event.target.value))} className="mt-2 w-full rounded-md border border-border bg-background px-3 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
        </label>
      </div>
      <p className="font-body mt-5 text-lg font-semibold text-primary" aria-live="polite">
        For a {length || 0} ft × {height || 0} ft wall: approximately {bundles} bundles (includes 10% waste allowance).
      </p>
      <p className="font-body mt-2 text-sm text-muted-foreground">Coverage based on 7.5 inch exposure. Actual coverage varies with exposure choice.</p>
    </div>
  );
}