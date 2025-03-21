import Link from "next/link";
import React, { useMemo } from "react";

import { IconMenu3 } from "@tabler/icons-react";

import { Logo } from "@/assets/logo";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NAVLINKS } from "@/data/navbar";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

const LogoText = React.memo(({ className }: { className?: string }) => (
  <p
    className={cn(
      "text-sm font-bold text-gray-700 dark:text-gray-300 [&_span]:text-sky-700 dark:[&_span]:text-sky-500",
      className
    )}
  >
    <span>ALLIED</span> GULF <span>CONSTRUCTION</span> SERVICES{" "}
    <span>W.L.L</span>
  </p>
));
LogoText.displayName = "LogoText";

export function Navbar() {
  const filteredNavLinks = useMemo(
    () => NAVLINKS.filter((nav) => nav.title !== "Contact"),
    []
  );

  return (
    <NavigationMenu className="bg-navbar/80 sticky top-0 z-50 w-full max-w-full items-center border-b shadow-2xs backdrop-blur-lg">
      <div className="container flex w-full max-w-7xl items-center gap-4 px-4 py-2 md:justify-between">
        <Drawer>
          <DrawerTrigger className="sm:hidden" aria-label="Open menu">
            <IconMenu3 />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="flex-row items-center gap-3">
              <Logo className="h-16 w-auto shrink-0" aria-hidden="true" />
              <div>
                <DrawerTitle>
                  <LogoText />
                </DrawerTitle>
                <DrawerDescription className="text-xs font-light">
                  For top construction solutions and materials, count on us!
                  We&apos;ve got what you need.
                </DrawerDescription>
              </div>
            </DrawerHeader>

            <NavigationMenuList className="flex-col items-start gap-2">
              {filteredNavLinks.map((nav) => (
                <NavigationMenuItem className="w-full" key={nav.href}>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    asChild
                  >
                    <Link
                      href={nav.href}
                      className="max-sm:!w-full max-sm:items-start"
                    >
                      {nav.title}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>

            <DrawerFooter>
              <DrawerClose asChild>
                <Button>Contact</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <Logo className="h-11 w-auto" aria-hidden="true" />
          <LogoText className="pt-1.5" />
        </Link>

        <NavigationMenuList
          className="hidden sm:flex"
          aria-label="Main navigation"
        >
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
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
}
