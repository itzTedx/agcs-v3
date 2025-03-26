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
    <html lang="en" suppressHydrationWarning>
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
      </body>
    </html>
  );
}
