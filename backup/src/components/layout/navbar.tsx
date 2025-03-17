"use client";

import Link from "next/link";
import * as React from "react";

import { Logo } from "@/assets/logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NAVLINKS } from "@/data/navbar";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <NavigationMenu className="bg-navbar sticky top-0 z-50 w-full max-w-full items-center">
      <div className="container flex w-full items-center justify-between py-2">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-11 w-auto" />
          <p className="pt-1.5 text-sm font-bold text-gray-700 dark:text-gray-300 [&_span]:text-sky-600 dark:[&_span]:text-sky-500">
            <span>ALLIED</span> GULF <span>CONSTRUCTION</span> SERVICES{" "}
            <span>W.L.L</span>
          </p>
        </Link>
        <div className="hidden md:block">
          <NavigationMenuList>
            {NAVLINKS.map((nav) => (
              <NavigationMenuItem key={nav.href}>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                  asChild
                >
                  <Link href={nav.href}>{nav.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
                        href="/"
                      >
                        <Logo className="h-6 w-6" />
                        <div className="mt-4 mb-2 text-lg font-medium">
                          shadcn/ui
                        </div>
                        <p className="text-muted-foreground text-sm leading-tight">
                          Beautifully designed components that you can copy and
                          paste into your apps. Accessible. Customizable. Open
                          Source.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem
                    href="/docs/primitives/typography"
                    title="Typography"
                  >
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </div>
      </div>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
            className
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
