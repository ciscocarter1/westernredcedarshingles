import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
  trailingSlash: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.asset\.json$/,
      type: "json",
    });
    return config;
  },
};

export default nextConfig;
