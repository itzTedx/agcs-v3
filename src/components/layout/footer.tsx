import Link from "next/link";
import { memo } from "react";

import { IconLocation, IconMail, IconPhone } from "@tabler/icons-react";

import { NAVLINKS } from "@/data/navbar";

import { SocialLinks } from "../global/social-links";
import { Button } from "../ui/button";

const ContactInfo = memo(() => (
  <div
    itemScope
    itemType="http://schema.org/Organization"
    className="col-span-2 max-lg:col-span-full"
  >
    <meta itemProp="name" content="Allied Gulf Construction Services W.L.L" />
    <meta itemProp="url" content="https://alliedgulf.me" />
    <h6 className="mb-4 text-xl font-semibold">Contact</h6>
    <ul className="space-y-3">
      <li>
        <div
          className="flex items-center space-x-2 lg:justify-start"
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
            aria-label="Visit Allied Gulf Construction Services W.L.L office location in Manama, Kingdom of Bahrain on Google Maps"
            itemProp="url"
          >
            <span itemProp="name">ALLIED GULF CONSTRUCTION SERVICES W.L.L</span>
            <br />
            <span itemProp="streetAddress">
              Flat: 61, Building: 317, Road: 39, Block: 337, Umm Al Hassam
            </span>
            <br />
            <span itemProp="postOfficeBoxNumber">P.O. Box: 21341</span>,{" "}
            <span itemProp="addressLocality">Manama</span>,{" "}
            <span itemProp="addressCountry">Kingdom of Bahrain</span>
          </Link>
        </div>
      </li>
      <li className="flex items-center space-x-2 lg:justify-start">
        <IconPhone aria-hidden="true" />
        <div itemScope itemType="http://schema.org/ContactPoint">
          <meta itemProp="contactType" content="customer service" />
          <Link
            href="tel:+97317791317"
            className="cursor-pointer transition duration-300 hover:text-sky-500"
            itemProp="telephone"
            aria-label="Call our main office at +973 1779 1317"
          >
            +973 - 1779 1317
          </Link>
          <br />
          <Link
            href="tel:+97338184631"
            className="cursor-pointer transition duration-300 hover:text-sky-500"
            itemProp="telephone"
            aria-label="Call our mobile number at +973 3818 4631"
          >
            +973 - 3818 4631
          </Link>
          <br />
          <Link
            href="tel:+97334685656"
            className="cursor-pointer transition duration-300 hover:text-sky-500"
            itemProp="telephone"
            aria-label="Call our alternative number at +973 3468 5656"
          >
            +973 - 3468 5656
          </Link>
        </div>
      </li>
      <li className="flex items-center space-x-2 lg:justify-start">
        <IconMail aria-hidden="true" />
        <div>
          <Link
            href="mailto:trade@alliedgulf.me"
            className="cursor-pointer transition duration-300 hover:text-sky-500"
            itemProp="email"
            aria-label="Send email to our trade department"
          >
            trade@alliedgulf.me
          </Link>
          <br />
          <Link
            href="mailto:sales@alliedgulf.me"
            className="cursor-pointer transition duration-300 hover:text-sky-500"
            itemProp="email"
            aria-label="Send email to our sales department"
          >
            sales@alliedgulf.me
          </Link>
        </div>
      </li>
    </ul>
  </div>
));
ContactInfo.displayName = "ContactInfo";

const QuickLinks = memo(() => (
  <nav aria-label="Main website links">
    <h6 className="mb-4 text-xl font-semibold">Quick Links</h6>
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
      <li>
        <Link
          href="/posts"
          className="rounded-sm transition-colors hover:text-sky-200 focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:outline-none"
        >
          Blogs
        </Link>
      </li>
    </ul>
  </nav>
));
QuickLinks.displayName = "QuickLinks";

const CompanyLinks = memo(() => (
  <nav aria-label="Company information links">
    <h6 className="mb-4 text-xl font-semibold">Company</h6>
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
));
CompanyLinks.displayName = "CompanyLinks";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="to-primary/90 mt-12 rounded-t-4xl bg-gradient-to-b from-sky-700 py-12 pt-16 text-sky-100"
      role="contentinfo"
      itemScope
      itemType="http://schema.org/WPFooter"
    >
      <div className="grid grid-cols-2 gap-6 px-4 md:grid-cols-4 md:gap-12 md:px-16 lg:grid-cols-6">
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

        <QuickLinks />
        <CompanyLinks />
        <ContactInfo />

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
