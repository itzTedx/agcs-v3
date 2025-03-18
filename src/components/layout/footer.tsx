import Link from "next/link";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

import { NAVLINKS } from "@/data/navbar";
import { SOCIAL_LINKS } from "@/data/social-links";

import { Button } from "../ui/button";

const iconMap = {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandX,
  IconBrandInstagram,
  IconBrandYoutube,
};

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-12 rounded-t-4xl bg-gradient-to-b from-sky-700 to-sky-500/90 py-12 pt-16 text-sky-100"
      role="contentinfo"
    >
      <div className="container grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-12 lg:grid-cols-5">
        <section className="col-span-2">
          <h5 className="mb-4 text-2xl font-bold text-white">
            Allied Gulf Construction Services W.L.L
          </h5>
          <p className="text-lg font-light">
            For the best construction solution services and specialty materials,
            look no further than us! We have everything you need to get the job
            done right, and we're always here to help.
          </p>
        </section>

        <section className="max-sm:col-span-2">
          <h6 className="mb-4 text-xl font-semibold">Follow Us</h6>
          <ul className="flex gap-2" aria-label="Social media links">
            {SOCIAL_LINKS.map(({ name, href, icon }) => {
              const Icon = iconMap[icon as keyof typeof iconMap];
              return (
                <li key={name}>
                  <Link
                    href={href}
                    className="inline-flex size-10 items-center justify-center rounded-full transition-colors hover:bg-sky-600 focus:ring-2 focus:ring-sky-200 focus:outline-none"
                    aria-label={`Visit our ${name} page`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="size-7" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <nav aria-label="Quick links">
          <h6 className="mb-4 text-xl font-semibold">Quick links</h6>
          <ul className="space-y-2">
            {NAVLINKS.map((nav) => (
              <li key={nav.href}>
                <Link
                  href={nav.href}
                  className="rounded-sm transition-colors hover:text-sky-200 focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:outline-none"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h6 className="mb-4 text-xl font-semibold">Contact Information</h6>

          <ul>
            {NAVLINKS.map((nav) => (
              <li key={nav.href}>
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-full mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm">Copyright © {year}. All Rights Reserved</p>
          <Button variant="link" className="w-fit px-0" asChild>
            <Link
              href="/policies"
              className="rounded-sm text-sm transition-colors hover:text-sky-200 focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:outline-none"
            >
              Terms of Service and Privacy Policy
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
};
