import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	typedRoutes: true,
	reactCompiler: true,

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
		turbopackFileSystemCacheForBuild: true,
		turbopackFileSystemCacheForDev: true,
	},

	images: {
		qualities: [100, 75],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
			},
		],
	},
};

export default nextConfig;
