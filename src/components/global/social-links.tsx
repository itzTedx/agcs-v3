import Link from "next/link";

import { SOCIAL_LINKS } from "@/data/social-links";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function SocialLinks({ className }: Props) {
  return (
    <ul
      className={cn("flex gap-1.5", className)}
      aria-label="Social media links"
    >
      {SOCIAL_LINKS.map(({ name, href, Icon }) => {
        return (
          <li key={name}>
            <Link
              href={href}
              className="inline-flex size-10 items-center justify-center rounded-md transition-colors hover:bg-sky-600 hover:text-white focus:ring-2 focus:ring-sky-200 focus:outline-none"
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
  );
}
