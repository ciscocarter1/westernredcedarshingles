import { Link } from "@tanstack/react-router";
import { NAV, LOWES_URL } from "@/lib/site";
import logoAsset from "@/assets/wrc-logo-wordmark.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img
              src={logoAsset.url}
              alt="Western Red Cedar"
              width={600}
              height={300}
              className="h-14 w-auto"
            />
            <p className="font-body mt-3 text-sm text-primary-foreground/80">
              Natural, untreated #3/#4 undercourse Western Red Cedar shingles for DIY siding,
              accent walls, outdoor structures, and cedar plank grilling. Sold exclusively at Lowe's.
            </p>
          </div>
          <div>
            <h3 className="font-ui mb-3 text-sm font-semibold uppercase tracking-wider">Explore</h3>
            <ul className="font-ui space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-primary-foreground/80 hover:text-primary-foreground hover:underline">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-ui mb-3 text-sm font-semibold uppercase tracking-wider">Shop</h3>
            <p className="font-ui text-sm text-primary-foreground/80">
              Available exclusively at Lowe's — Item #3976.
            </p>
            <a
              href={LOWES_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="font-ui mt-3 inline-block text-sm font-semibold text-highlight hover:underline"
            >
              View product on Lowes.com →
            </a>
          </div>
        </div>
        <div className="font-ui mt-10 border-t border-primary-foreground/20 pt-6 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Western Red Cedar Planks. Lowe's and Lowes.com are
          trademarks of their respective owners.
        </div>
      </div>
    </footer>
  );
}
