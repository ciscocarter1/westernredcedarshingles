"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqRowClient({ q, a, aHtml }: { q: string; a: string; aHtml?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg border border-border bg-card shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="font-ui flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-foreground"
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={open ? "" : "sr-only"} aria-hidden={!open}>
        {aHtml
          ? <div className="font-body px-5 pb-5 text-foreground/80" dangerouslySetInnerHTML={{ __html: aHtml }} />
          : <div className="font-body px-5 pb-5 text-foreground/80">{a}</div>}
      </div>
    </div>
  );
}
