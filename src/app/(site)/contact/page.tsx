import { Metadata } from "next";
import dynamic from "next/dynamic";

import { Icons } from "@/assets/icons";
import { FlickeringGrid } from "@/components/animations/flickering-grid";
import { SocialLinks } from "@/components/global/social-links";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/features/contact/contact-form";

// Dynamically import heavy components
const MultiStepLoader = dynamic(() =>
  import("@/components/animations/multi-step-loader").then(
    (mod) => mod.MultiStepLoader
  )
);

const meta = {
  title: "Just one more step - Contact now",
  description:
    "Looking for specialty materials for your construction? You are one step closer to build or renovate your perfect building",
  keywords:
    "allied gulf, agcs, construction, service, materials, contact, enquiry, quotation",
  url: "https://www.alliedgulf.me/contact",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  keywords: meta.keywords,
  alternates: {
    canonical: meta.url,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    siteName: "Allied Gulf Construction Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.alliedgulf.me/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Allied Gulf Construction Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: ["https://www.alliedgulf.me/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const steps = [
  {
    title: "We'll prepare a proposal",
    description: "Required scope, timeline and aprox. price will be included",
  },
  {
    title: "Together we discuss it",
    description:
      "Let's get acquainted and discuss all the possible variants and options.",
  },
  {
    title: "Let's start building",
    description:
      "When the contract is signed and all goals are set we can start the first sprint.",
  },
];

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <header
        role="banner"
        className="bg-navbar border-muted-foreground/15 relative border-b"
      >
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full opacity-25 [mask-image:radial-gradient(720px_circle_at_center,transparent,white)]"
          squareSize={4}
          gridGap={6}
          color="#0284c7"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        <div className="container flex h-56 max-w-7xl flex-col justify-between py-6 md:h-72">
          <div className="pt-4 md:pt-9">
            <h1 className="text-4xl font-semibold md:text-6xl">Contact us</h1>
            <p className="text-lg font-light">
              Enquiry For Construction services and Construction specialty
              material
            </p>
          </div>
          <SocialLinks />
        </div>
      </header>
      <section
        aria-label="Contact process"
        className="container grid max-w-7xl gap-4 py-12 md:grid-cols-2"
      >
        <div className="max-w-sm max-sm:order-2">
          <h2 className="relative z-20 text-4xl font-medium">
            What will be next step?
          </h2>
          <p className="relative z-20 pt-3 text-lg font-light">
            You are one step closer to build or renovate your perfect building
          </p>

          <MultiStepLoader data={steps} />
        </div>
        <Card className="z-10 rounded-md border border-sky-600 p-9 max-sm:order-1 md:-mt-44">
          <CardContent className="space-y-9 px-0">
            <CardHeader className="flex items-center gap-2 px-0">
              <CardTitle className="sr-only">Contact Form</CardTitle>
              <div
                className="flex size-14 shrink-0 items-center justify-center rounded bg-sky-500"
                aria-hidden="true"
              >
                <Icons.mail className="shrink-0" />
              </div>
              <CardDescription>
                Write us a few words about your project and product we'll get
                back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <Separator />
            <ContactForm />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
