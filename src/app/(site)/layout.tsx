import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Roboto } from "next/font/google";

import BreakpointIndicator from "@/components/dev/breakpoint-indicator";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { metadata as siteMetadata } from "@/data/site-config";
import { RecentlyViewedProvider } from "@/features/products/context/recently-viewed-context";
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
    <RecentlyViewedProvider>
      <html lang="en">
        <body className={`${roboto.className} antialiased`}>
          <div data-vaul-drawer-wrapper className="bg-background min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <FloatingWhatsapp />
            <BreakpointIndicator />
          </div>
        </body>
      </html>
    </RecentlyViewedProvider>
  );
}
