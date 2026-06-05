import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const ORG_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Western Red Cedar Planks",
  url: "https://westernredcedarshingles.com",
  description:
    "Maker of natural Western Red Cedar shingle kits sold exclusively at Lowe's for DIY siding, accent walls, outdoor structures, and cedar plank grilling.",
  sameAs: [
    "https://www.lowes.com/pd/Red-Cedar-Untreated-Wood-Siding-Shingles/3379244",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#5C3D2E" },
      { name: "author", content: "Western Red Cedar Planks" },
      { property: "og:site_name", content: "Western Red Cedar Planks" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      // Google Search Console — replace content value when verification tag is issued.
      // { name: "google-site-verification", content: "REPLACE_ME" },
      { title: "Western Red Cedar Shingles" },
      { property: "og:title", content: "Western Red Cedar Shingles" },
      { name: "twitter:title", content: "Western Red Cedar Shingles" },
      { name: "description", content: "Define Your Home With Character and
Charm Using Lowe's Cost-Effective Western Red Cedar Shingles" },
      { property: "og:description", content: "Define Your Home With Character and
Charm Using Lowe's Cost-Effective Western Red Cedar Shingles" },
      { name: "twitter:description", content: "Define Your Home With Character and
Charm Using Lowe's Cost-Effective Western Red Cedar Shingles" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/69d04d91-bbbc-4eec-a3e2-dda673d25e20" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/69d04d91-bbbc-4eec-a3e2-dda673d25e20" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=DM+Sans:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(ORG_LD) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
