import { Inter } from "next/font/google";

import "@/styles/globals.css";

const roboto = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} scroll-smooth antialiased`}>
        {children}
      </body>
    </html>
  );
}
