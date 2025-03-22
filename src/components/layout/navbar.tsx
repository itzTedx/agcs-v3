import Link from "next/link";
import React, { useMemo } from "react";

import { IconMenu3, IconStar } from "@tabler/icons-react";

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
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
    <>
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
                {filteredNavLinks.map((nav, i) =>
                  nav.submenus ? (
                    <div key={`${nav.href}-${i}`} className="w-full py-2">
                      <p className="px-6 pb-2 font-medium">{nav.title}</p>

                      <ul className="ml-1 w-full space-y-2">
                        {nav.submenus.map((sub, index) => (
                          <NavigationMenuItem
                            className="w-full"
                            key={`${sub.href}-${index}-menu-sub`}
                          >
                            <DrawerClose asChild>
                              <NavigationMenuLink
                                className={cn(
                                  navigationMenuTriggerStyle(),
                                  "px-6"
                                )}
                                asChild
                              >
                                <Link
                                  href={sub.href}
                                  className="px-6 max-sm:!w-full max-sm:items-start"
                                >
                                  {sub.title}
                                </Link>
                              </NavigationMenuLink>
                            </DrawerClose>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <NavigationMenuItem
                      className="w-full"
                      key={`${nav.href}-${i}-menu`}
                    >
                      <DrawerClose asChild>
                        <NavigationMenuLink
                          className={cn(navigationMenuTriggerStyle(), "px-6")}
                          asChild
                        >
                          <Link
                            href={nav.href}
                            className="px-6 max-sm:!w-full max-sm:items-start"
                          >
                            {nav.title}
                          </Link>
                        </NavigationMenuLink>
                      </DrawerClose>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>

              <DrawerFooter>
                <DrawerClose asChild>
                  <Button asChild>
                    <Link href="/contact">Contact</Link>
                  </Button>
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
            {NAVLINKS.map((nav) =>
              nav.submenus ? (
                <NavigationMenuItem className="relative" key={nav.href}>
                  <NavigationMenuTrigger>{nav.title}</NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="mx-auto grid grid-cols-3 gap-3 p-6 md:w-[100dvw] lg:w-[80rem]">
                      {nav.submenus.map((sub) => (
                        <li key={sub.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={sub.href}
                              className={cn(
                                "bg-popover flex w-full flex-col justify-end gap-4 rounded-xl pt-4 transition-colors hover:bg-sky-200"
                              )}
                            >
                              <div className="space-y-2 p-4">
                                <IconStar className="text-sky-500" />
                                <p className="text-sm">{sub.subtitle}</p>
                                <h2 className="font-poly-sans pb-3 text-lg leading-none font-medium">
                                  {sub.title}
                                </h2>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={nav.href}>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    asChild
                  >
                    <Link href={nav.href}>{nav.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </>
  );
}
