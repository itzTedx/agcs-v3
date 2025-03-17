import Link from "next/link";

import {
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";

import { NAVLINKS } from "@/data/navbar";

export const Footer = () => {
  return (
    <footer className="text-foreground bg-sky-400">
      <div className="container grid grid-cols-5 gap-6">
        <div className="col-span-2">
          <h5>Allied Gulf Construction Services W.L.L</h5>

          <p>
            For the best construction solution services and specialty materials,
            look no further than us! We have everything you need to get the job
            done right, and we're always here to help.
          </p>
        </div>

        <div>
          <h6>Follow Us</h6>

          <ul>
            <li>
              <Link href="/">
                <IconBrandLinkedinFilled />
              </Link>
            </li>
            <li>
              <Link href="/">
                <IconBrandFacebookFilled />
              </Link>
            </li>
            <li>
              <Link href="/">
                <IconBrandX />
              </Link>
            </li>
            <li>
              <Link href="/">
                <IconBrandInstagramFilled />
              </Link>
            </li>
            <li>
              <Link href="/">
                <IconBrandYoutube />
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h6>Quick links</h6>

          <ul>
            {NAVLINKS.map((nav) => (
              <li key={nav.href}>
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6>Contact Information</h6>

          <ul>
            {NAVLINKS.map((nav) => (
              <li key={nav.href}>
                <Link href={nav.href}>{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
