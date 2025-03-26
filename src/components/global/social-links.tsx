import Link from "next/link";

import { SOCIAL_LINKS } from "@/data/social-links";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export function SocialLinks({ className }: Props) {
  return (
    <nav aria-label="Social media links">
      <ul className={cn("flex gap-1.5", className)} role="list">
        {SOCIAL_LINKS.map(({ name, href, Icon }) => {
          return (
            <li key={name}>
              <Link
                href={href}
                className="group inline-flex size-10 cursor-pointer items-center justify-center rounded-md transition-all duration-200 ease-in-out hover:bg-sky-600 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label={`Connect with us on ${name}`}
                target="_blank"
                rel="noopener noreferrer preconnect"
                prefetch={false}
              >
                <Icon
                  className="size-7 transform transition-transform duration-200 ease-in-out group-hover:scale-110"
                  aria-hidden="true"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
