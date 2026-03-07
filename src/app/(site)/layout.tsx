import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Roboto } from "next/font/google";

import NextTopLoader from "nextjs-toploader";

import BreakpointIndicator from "@/components/dev/breakpoint-indicator";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import { metadata as siteMetadata } from "@/data/site-config";
import { SanityLive } from "@/sanity/lib/live";
import "@/styles/globals.css";

import { OpenPanelProvider } from "@/components/openpanel-provider";

const FloatingWhatsapp = dynamic(
	() => import("@/components/layout/floating-whatsapp")
);

const roboto = Roboto({
	subsets: ["latin"],
	display: "swap",
	weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
	...siteMetadata,
	// Add any additional runtime metadata here if needed
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className="scroll-smooth" lang="en" suppressHydrationWarning>
			<head>
				<meta content="Alliedgulf" name="apple-mobile-web-app-title" />
				{/* <script
					data-website-id="4afab4dc-5b7c-43ef-8e37-6a03d7b676f1"
					defer
					src="https://analytics.alliedgulf.me/script.js"
				/> */}
				{/* <script
					data-domain="alliedgulf.me"
					defer
					src="https://analytics.alliedgulf.me/js/script.file-downloads.outbound-links.tagged-events.js"
				/> */}
			</head>
			<body className={`${roboto.className} antialiased`}>
				<OpenPanelProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="light"
						disableTransitionOnChange
						enableSystem
					>
						<NextTopLoader
							color="#2299DD"
							crawl={true}
							crawlSpeed={200}
							easing="ease"
							height={3}
							initialPosition={0.08}
							shadow="0 0 10px #2299DD,0 0 5px #2299DD"
							showSpinner={true}
							speed={200}
						/>
						<div
							className="min-h-screen bg-background"
							data-vaul-drawer-wrapper
						>
							<Navbar />
							<main>{children}</main>
							<Footer />
							<Toaster richColors />
							<FloatingWhatsapp />
							<BreakpointIndicator />
						</div>
					</ThemeProvider>
				</OpenPanelProvider>
				<SanityLive />
			</body>
		</html>
	);
}
