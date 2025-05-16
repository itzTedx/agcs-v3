import Image from "next/image";
import Link from "next/link";

import { IconArrowRight } from "@tabler/icons-react";

import { AuroraText } from "@/components/animations/aurora-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const About = () => {
  const services = [
    "Shopping Centers",
    "Restaurants",
    "Hotels",
    "Complete Interior Fit-Out Services",
    "Industrial Buildings",
    "Warehouses",
    "Coating & Insulation",
    "Turnkey Restaurant Projects",
    "Shades",
    "Prefab Houses and Offices",
    "M.E.P Works",
    "Floorings",
    "Skylights",
    "Portable Cabins",
    "Container Conversion",
    "Acoustics",
    "Construction Specialty Materials",
    "General Trading with Supply and Installation",
    "Structural and Sub-Structural Fabrication Works",
  ];
  return (
    <section
      id="about"
      aria-label="About Allied Gulf Construction Services"
      className="dark:bg-navbar bg-[#e8e8e8] py-12 md:py-20"
    >
      <div className="relative container grid gap-12 md:grid-cols-2">
        <div className="relative aspect-square md:sticky md:top-16">
          <Image
            src="/images/about.webp"
            fill
            alt="Allied Gulf Construction Services office building"
            title="Allied Gulf Construction Services office building"
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <article className="prose dark:prose-invert">
          <h2 className="text-3xl font-bold text-sky-700">
            <AuroraText>About us</AuroraText>
          </h2>
          <p className="text-balance">
            <span className="font-bold">
              Gulf Construction Solutions W.L.L,
            </span>{" "}
            established as the Saudi branch of our successful operations, marks
            a significant expansion of our legacy in the Kingdom of Saudi
            Arabia. Building on the strength and reputation of our founding
            company in Bahrain, we bring a proven track record in{" "}
            <span className="font-bold">
              Civil & Mechanical contracting services,
            </span>{" "}
            now tailored to meet the growing demands of Saudi Arabia&apos;s
            ambitious development landscape.
          </p>
          <p className="">
            As a trusted name in the construction sector across the Middle East,
            we specialize in{" "}
            <span className="font-bold">
              complex and prestigious construction and infrastructure projects,
            </span>{" "}
            delivering excellence with precision and innovation.
          </p>
          <p>Our Saudi portfolio is expanding to include:</p>
          <ul className="capitalize">
            <li>Super high-rise luxury developments</li>
            <li>Strategic infrastructure projects</li>
            <li>Oil & gas sector developments</li>
            <li>Five-star hospitality properties</li>
            <li>World-class health care facilities</li>
            <li>Smart buildings with advanced engineering systems</li>
          </ul>
          <p>
            We poised to contribute to the Kingdom&apos;s Vision 2030 by
            delivering quality-driven, future-ready construction solutions.
          </p>
          <div className="flex flex-wrap gap-3 capitalize">
            {services.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
          <div className="mt-9 flex items-center space-x-4">
            <Button
              className="border-primary hover:text-primary-foreground text-primary rounded-md border bg-sky-50 text-sm font-medium tracking-wide no-underline shadow-[-4px_-2px_16px_0px_#ffffff,4px_2px_16px_0px_rgb(95_157_231_/_48%)] hover:bg-sky-100 hover:shadow-[-2px_-1px_8px_0px_#ffffff,2px_1px_8px_0px_rgb(95_157_231_/_48%)] active:shadow-none"
              asChild
            >
              <Link href="/company/about" className="w-fit">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="css-i6dzq1"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>{" "}
                Know More
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="border-primary text-primary-foreground"
              asChild
            >
              <Link href="/contact">
                Contact <IconArrowRight />
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};
