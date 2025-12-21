import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },

  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },

  experimental: {
    optimizePackageImports: [
      "@sanity/orderable-document-list",
      "@sanity/vision",
      "@tabler/icons-react",
      "lucide-react",
      "motion",
    ],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
