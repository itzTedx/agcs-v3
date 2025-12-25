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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-title" content="AGCS" />
        <script
          defer
          src="http://allied-gulf-umami-7e436f-194-238-19-160.traefik.me/script.js"
          data-website-id="4afab4dc-5b7c-43ef-8e37-6a03d7b676f1"
        ></script>
      </head>
      <body className={`${roboto.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="#2299DD"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
            crawl={true}
            showSpinner={true}
            easing="ease"
            speed={200}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          />
          <div data-vaul-drawer-wrapper className="bg-background min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Toaster richColors />
            <FloatingWhatsapp />
            <BreakpointIndicator />
          </div>
        </ThemeProvider>
        <SanityLive />
      </body>
    </html>
  );
}
