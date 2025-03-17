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
    <footer className="mt-12 rounded-t-4xl bg-gradient-to-b from-sky-700 to-sky-500/90 py-12 pt-16 text-sky-100">
      <div className="container grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-12 lg:grid-cols-5">
        <div className="col-span-2">
          <h5 className="mb-4 text-2xl font-bold text-white">
            Allied Gulf Construction Services W.L.L
          </h5>

          <p className="text-lg font-light">
            For the best construction solution services and specialty materials,
            look no further than us! We have everything you need to get the job
            done right, and we're always here to help.
          </p>
        </div>

        <div className="col-span-2">
          <h6 className="mb-4 text-xl font-semibold">Follow Us</h6>

          <ul className="flex gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-sky-200">
                <IconBrandLinkedin className="size-7" />
              </Link>
            </li>
            <li>
              <Link href="/" className="transition-colors hover:text-sky-200">
                <IconBrandFacebook className="size-7" />
              </Link>
            </li>
            <li>
              <Link href="/" className="transition-colors hover:text-sky-200">
                <IconBrandX className="size-7" />
              </Link>
            </li>
            <li>
              <Link href="/" className="transition-colors hover:text-sky-200">
                <IconBrandInstagram className="size-7" />
              </Link>
            </li>
            <li>
              <Link href="/" className="transition-colors hover:text-sky-200">
                <IconBrandYoutube className="size-7" />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="mb-4 text-xl font-semibold">Quick links</h6>

          <ul className="space-y-2">
            {NAVLINKS.map((nav) => (
              <li key={nav.href}>
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>

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
        <p className="col-span-2">
          Copyright © {new Date().getFullYear()}. All Rights Reserved
        </p>

        <Button variant="link" className="w-fit px-0 md:col-start-5" asChild>
          <Link href="/policies">Terms of Service and Privacy Policy</Link>
        </Button>
      </div>
    </footer>
  );
};
