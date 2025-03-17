import Link from "next/link";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

import { NAVLINKS } from "@/data/navbar";

import { Button } from "../ui/button";

export const Footer = () => {
  return (
    <footer className="text-muted-foreground bg-navbar mt-16 py-20">
      <div className="container grid grid-cols-5 gap-12">
        <div className="col-span-2">
          <h5 className="mb-4 text-2xl font-bold text-sky-700">
            Allied Gulf Construction Services W.L.L
          </h5>

          <p className="text-lg font-light">
            For the best construction solution services and specialty materials,
            look no further than us! We have everything you need to get the job
            done right, and we're always here to help.
          </p>
        </div>

        <div>
          <h6 className="mb-4 text-xl font-semibold text-sky-700/80">
            Follow Us
          </h6>

          <ul className="flex gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-sky-600">
                <IconBrandLinkedin className="size-7" />
              </Link>
            </li>
            <li>
              <Link href="/" className="transition-colors hover:text-sky-600">
                <IconBrandFacebook className="size-7" />
              </Link>
            </li>
            <li>
              <Link href="/" className="transition-colors hover:text-sky-600">
                <IconBrandX className="size-7" />
              </Link>
            </li>
            <li>
              <Link href="/" className="transition-colors hover:text-sky-600">
                <IconBrandInstagram className="size-7" />
              </Link>
            </li>
            <li>
              <Link href="/" className="transition-colors hover:text-sky-600">
                <IconBrandYoutube className="size-7" />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="mb-4 text-xl font-semibold text-sky-700/80">
            Quick links
          </h6>

          <ul className="space-y-2">
            {NAVLINKS.map((nav) => (
              <li key={nav.href}>
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="mb-4 text-xl font-semibold text-sky-700/80">
            Contact Information
          </h6>

          <ul>
            {NAVLINKS.map((nav) => (
              <li key={nav.href}>
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Button variant="link">
          <Link href="/policies">Terms of Service and Privacy Policy</Link>
        </Button>
      </div>
    </footer>
  );
};
