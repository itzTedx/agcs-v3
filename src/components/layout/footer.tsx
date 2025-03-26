import Link from "next/link";

import { IconLocation, IconMail, IconPhone } from "@tabler/icons-react";

import { NAVLINKS } from "@/data/navbar";

import { SocialLinks } from "../global/social-links";
import { Button } from "../ui/button";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="to-primary/90 mt-12 rounded-t-4xl bg-gradient-to-b from-sky-700 py-12 pt-16 text-sky-100"
      role="contentinfo"
      itemScope
      itemType="http://schema.org/WPFooter"
    >
      <div className="container grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-12 lg:grid-cols-5">
        <div className="col-span-2">
          <section aria-label="About Allied Gulf Construction Services">
            <h5 className="mb-4 text-2xl font-bold text-white">
              Allied Gulf Construction Services W.L.L
            </h5>
            <p
              className="text-lg font-light text-balance"
              itemProp="description"
            >
              For the best construction solution services and specialty
              materials, look no further than us! We have everything you need to
              get the job done right, and we're always here to help.
            </p>
          </section>

          <section
            aria-label="Social media links"
            className="max-sm:col-span-2"
          >
            <h6 className="mt-6 text-xl font-semibold">Connect With Us</h6>
            <SocialLinks />
          </section>
        </div>

        <nav aria-label="Main website links">
          <h6 className="mb-4 text-xl font-semibold">Site Navigation</h6>
          <ul className="space-y-2">
            {NAVLINKS.filter((nav) => nav.title !== "Company").map((nav, i) => (
              <li key={`${nav.href}-${i}`}>
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

        <nav aria-label="Company information links">
          <h6 className="mb-4 text-xl font-semibold">Company Information</h6>
          <ul className="space-y-2">
            {NAVLINKS.map((nav) =>
              nav.submenus?.map((sub) => (
                <li key={sub.href}>
                  <Link
                    href={sub.href}
                    className="rounded-sm transition-colors hover:text-sky-200 focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:outline-none"
                  >
                    {sub.title}
                  </Link>
                </li>
              ))
            )}
            <li>
              <Link
                href="/company/faqs"
                className="rounded-sm transition-colors hover:text-sky-200 focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:outline-none"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </nav>

        <div itemScope itemType="http://schema.org/Organization">
          <meta
            itemProp="name"
            content="Allied Gulf Construction Services W.L.L"
          />
          <h6 className="mb-4 text-xl font-semibold">Contact Information</h6>

          <ul className="space-y-3">
            <li>
              <div
                className="flex flex-col items-center justify-center space-x-2 md:flex-row lg:justify-start"
                itemProp="address"
                itemScope
                itemType="http://schema.org/PostalAddress"
              >
                <IconLocation aria-hidden="true" />
                <Link
                  href="https://goo.gl/maps/djSrXwAjCSwqGefi7"
                  passHref
                  className="cursor-pointer text-left transition duration-300 hover:text-sky-500"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our location on Google Maps"
                >
                  <span itemProp="postOfficeBoxNumber">P.O. Box: 21341</span>,{" "}
                  <span itemProp="addressLocality">Manama</span>, <br />
                  <span itemProp="addressCountry">Kingdom Of Bahrain</span>
                </Link>
              </div>
            </li>
            <li className="flex flex-col items-center justify-center space-x-2 md:flex-row lg:justify-start">
              <IconPhone aria-hidden="true" />
              <div>
                <Link
                  href="tel:+97317791317"
                  className="cursor-pointer transition duration-300 hover:text-sky-500"
                  itemProp="telephone"
                  aria-label="Call our main office"
                >
                  +973 - 1779 1317
                </Link>
                <br />
                <Link
                  href="tel:+97338184631"
                  className="cursor-pointer transition duration-300 hover:text-sky-500"
                >
                  +973 - 3818 4631
                </Link>
                <br />
                <Link
                  href="tel:+97334685656"
                  className="cursor-pointer transition duration-300 hover:text-sky-500"
                >
                  +973 - 3468 5656
                </Link>
              </div>
            </li>
            <li className="flex flex-col items-center justify-center space-x-2 md:flex-row lg:justify-start">
              <IconMail aria-hidden="true" />
              <div>
                <Link
                  href="mailto:trade@alliedgulf.me"
                  className="cursor-pointer transition duration-300 hover:text-sky-500"
                  itemProp="email"
                  aria-label="Email our trade department"
                >
                  trade@alliedgulf.me
                </Link>
                <br />
                <Link
                  href="mailto:sales@alliedgulf.me"
                  className="cursor-pointer transition duration-300 hover:text-sky-500"
                >
                  sales@alliedgulf.me
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-span-full mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm">
            <span itemProp="copyrightYear">{year}</span> © Allied Gulf
            Construction Services W.L.L. All Rights Reserved
          </p>
          <Button variant="link" className="w-fit px-0" asChild>
            <Link
              href="/company/policies"
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
