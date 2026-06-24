import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  {
    ignores: [
      "dist", ".output", ".next", ".vinxi", "node_modules",
      "src/routes/**", "src/server.ts", "src/start.ts",
      "src/router.tsx", "src/routeTree.gen.ts",
      "src/lib/error-capture.ts", "src/lib/error-page.ts",
      "src/lib/lovable-error-reporting.ts", "src/lib/api/**",
      "src/lib/config.server.ts",
      "src/integrations/supabase/auth-middleware.ts",
      "src/integrations/supabase/client.server.ts",
      "src/integrations/supabase/auth-attacher.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },
];
