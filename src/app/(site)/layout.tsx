import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Roboto } from "next/font/google";

import BreakpointIndicator from "@/components/dev/breakpoint-indicator";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import "@/styles/globals.css";

const FloatingWhatsapp = dynamic(
  () => import("@/components/layout/floating-whatsapp"),
  { ssr: false }
);

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "AGCS - Your Business Solutions Partner",
  description:
    "Professional business consulting and solutions services. We help companies optimize their operations and achieve sustainable growth.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#ffffff",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "AGCS - Your Business Solutions Partner",
    description: "Professional business consulting and solutions services",
    siteName: "AGCS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${roboto.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <div data-vaul-drawer-wrapper className="bg-background min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingWhatsapp />
          <BreakpointIndicator />
        </div>
      </body>
    </html>
  );
}
