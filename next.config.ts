import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow importing .asset.json files (Lovable CDN asset manifests)
  webpack(config) {
    config.module.rules.push({
      test: /\.asset\.json$/,
      type: "json",
    });
    return config;
  },
  // Allow images from Lovable's CDN and Supabase
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.supabase.co" },
      { protocol: "https", hostname: "storage.googleapis.com" },
    ],
  },
  // Redirect /how-to → /installation-guide
  async redirects() {
    return [
      {
        source: "/how-to",
        destination: "/installation-guide",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
