import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, TreePine } from "lucide-react";
import { NAV } from "@/lib/site";
import { LowesCTA } from "./CTAButton";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2 text-primary">
          <TreePine className="h-6 w-6" aria-hidden />
          <span className="font-display text-lg font-bold leading-tight sm:text-xl">
            Western Red Cedar
            <span className="hidden sm:inline"> Shingles</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-ui text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <LowesCTA size="md">Buy at Lowe's</LowesCTA>
        </div>
        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-ui rounded-md px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 px-1">
              <LowesCTA size="md" className="w-full">Buy at Lowe's</LowesCTA>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
